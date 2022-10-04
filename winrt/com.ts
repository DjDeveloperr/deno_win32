import * as Com from "../api/System/Com.ts";
import { unwrap } from "../util.ts";
import { GUID, GUIDConvertible } from "./guid.ts";

Com.CoInitializeEx(0, Com.COINIT_MULTITHREADED);

export class COMObject {
  _ptr: Deno.PointerValue;
  #vtable?: Deno.UnsafePointerView;

  protected get _vtable() {
    if (!this.#vtable) {
      const view = new Deno.UnsafePointerView(BigInt(this._ptr));
      const vtable = view.getBigUint64(0);
      this.#vtable = new Deno.UnsafePointerView(BigInt(vtable));
    }
    return this.#vtable;
  }

  constructor(ptr: Deno.PointerValue) {
    this._ptr = ptr;
  }

  protected _getFunction<Fn extends Deno.ForeignFunction>(
    offset: number,
    def: Fn,
  ): Deno.UnsafeFnPointer<Fn>["call"] {
    const ptr = this._vtable.getBigUint64(offset * 8);
    const fnptr = new Deno.UnsafeFnPointer(BigInt(ptr), def);
    return (...args: any) => fnptr.call(...args);
  }

  [Symbol.for("Deno.customInspect")]() {
    const name = (this as any)[Symbol.for("COMObject.name")]?.();
    if (!this._ptr || this._ptr === 0n) {
      return `COMObject${name ? `<${name}>` : ""}(nullptr)`;
    }
    return `COMObject${name ? `<${name}>` : ""}(0x${
      this._ptr.toString(16).padStart(8, "0")
    })`;
  }
}

export function createInstance<
  I extends { GUID: GUID } & (new (ptr: bigint) => InstanceType<I>),
>(
  clsid: GUIDConvertible,
  iid: I,
): InstanceType<I> {
  const out = new BigUint64Array(1);
  unwrap(Com.CoCreateInstance(
    new GUID(clsid).data,
    null,
    0x01 | 0x02 | 0x04 | 0x10,
    iid.GUID.data,
    new Uint8Array(out.buffer),
  ));
  return new iid(out[0]) as InstanceType<I>;
}
