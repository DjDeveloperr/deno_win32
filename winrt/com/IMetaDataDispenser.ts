import { GUID, GUIDConvertible } from "../guid.ts";
import { pwstrToFfi, unwrap } from "../../util.ts";
import { createInstance } from "../com.ts";
import { IUnknown } from "./IUnknown.ts";

export class IMetaDataDispenser extends IUnknown {
  static GUID = GUID.fromString("{809C652E-7396-11D2-9771-00A0C9B4D50C}");

  DefineScope(
    rclsid: GUIDConvertible,
    dwOpenFlags: number,
    riid: GUIDConvertible,
    ppIUnk: BigUint64Array,
  ) {
    const fn = this._getFunction(
      3,
      {
        parameters: ["pointer", "buffer", "u32", "buffer", "buffer"],
        result: "isize",
      } as const,
    );
    unwrap(
      fn(
        this._ptr,
        new GUID(rclsid).data,
        dwOpenFlags,
        new GUID(riid).data,
        ppIUnk,
      ),
    );
  }

  OpenScope<I extends typeof IUnknown>(
    szScope: string,
    dwOpenFlags: number,
    riid: I,
  ): InstanceType<I> {
    const fn = this._getFunction(
      4,
      {
        parameters: ["pointer", "buffer", "u32", "buffer", "buffer"],
        result: "isize",
      } as const,
    );
    const out = new BigUint64Array(1);
    const guid = riid.GUID.data;
    const hr = fn(
      this._ptr,
      pwstrToFfi(szScope),
      dwOpenFlags,
      guid,
      out,
    );
    unwrap(hr);
    const ptr = out[0];
    return new riid(ptr) as InstanceType<I>;
  }

  static createInstance() {
    return createInstance(
      "{E5CB7A31-7512-11D2-89CE-0080C792E5D8}",
      IMetaDataDispenser,
    );
  }

  [Symbol.for("COMObject.name")]() {
    return "IMetaDataDispenser";
  }
}
