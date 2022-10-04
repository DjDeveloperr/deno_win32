import { CLSIDFromString, StringFromIID } from "../api/System/Com.ts";
import { unwrap } from "../util.ts";

export type GUIDConvertible =
  | GUID
  | Uint8Array
  | bigint
  | string
  | BigUint64Array;

export class GUID {
  data: Uint8Array;

  constructor(value: GUIDConvertible) {
    if (value instanceof GUID) {
      this.data = value.data;
    } else if (value instanceof Uint8Array) {
      this.data = value;
    } else if (typeof value === "bigint") {
      this.data = GUID.fromBigInt(value).data;
    } else if (typeof value === "string") {
      this.data = GUID.fromString(value).data;
    } else if (value instanceof BigUint64Array) {
      if (value[0] === 0n) throw new Error("Invalid GUID pointer");
      const view = new Deno.UnsafePointerView(value[0]);
      this.data = new Uint8Array(16);
      view.copyInto(this.data);
    } else {
      throw new Error("Invalid value");
    }
  }

  static fromString(value: string) {
    const ptr = new Uint8Array(16);
    unwrap(CLSIDFromString(value, ptr));
    return new GUID(ptr);
  }

  static fromBigInt(value: bigint) {
    const data = value.toString(16).padStart(32, "0");
    const inner = `${data.slice(0, 8)}-${data.slice(8, 12)}-${
      data.slice(12, 16)
    }-${data.slice(16, 20)}-${data.slice(20, 32)}`;
    const str = "{" + inner + "}";
    return this.fromString(str);
  }

  toString() {
    const ptr = new BigUint64Array(1);
    unwrap(StringFromIID(this.data, new Uint8Array(ptr.buffer)));
    return String.fromCharCode(
      ...new Uint16Array(
        Deno.UnsafePointerView.getArrayBuffer(Number(ptr[0]), 38 * 2),
      ),
    );
  }

  [Symbol.for("Deno.customInspect")]() {
    return `GUID { ${this.toString()} }`;
  }
}
