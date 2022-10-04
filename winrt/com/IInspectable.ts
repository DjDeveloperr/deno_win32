import { GUID } from "../guid.ts";
import { unwrap } from "../../util.ts";
import { HString } from "../rt.ts";
import { IUnknown } from "./IUnknown.ts";

export class IInspectable extends IUnknown {
  static GUID = GUID.fromBigInt(0xaf86e2e0_b12d_4c6a_9c5a_d7aa65101e90n);

  GetIids(): GUID[] {
    const fn = this._getFunction(
      3,
      {
        parameters: ["pointer", "buffer", "buffer"],
        result: "isize",
      } as const,
    );
    const iids = [];
    const outLen = new BigUint64Array(1);
    const outPtr = new BigUint64Array(1);
    unwrap(fn(this._ptr, outLen, outPtr));
    const view = new Deno.UnsafePointerView(outPtr[0]);
    for (let i = 0n; i < outLen[0] * 2n; i += 2n) {
      const guid = new Uint8Array(16);
      view.copyInto(guid.subarray(0, 8), Number(i * 8n));
      view.copyInto(guid.subarray(8, 16), Number(i + 1n) * 8);
      iids.push(new GUID(guid));
    }
    return iids;
  }

  GetRuntimeClassName(): string {
    const fn = this._getFunction(
      4,
      {
        parameters: ["pointer", "buffer"],
        result: "isize",
      } as const,
    );
    const out = new BigUint64Array(1);
    unwrap(fn(this._ptr, out));
    const ptr = out[0];
    return new HString(ptr).getString();
  }

  GetTrustLevel(): number {
    const fn = this._getFunction(
      5,
      {
        parameters: ["pointer", "buffer"],
        result: "isize",
      } as const,
    );
    const out = new Uint32Array(1);
    unwrap(fn(this._ptr, out));
    return out[0];
  }

  [Symbol.for("COMObject.name")]() {
    return this.GetRuntimeClassName();
  }
}
