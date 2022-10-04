import * as RT from "../api/System/WinRT.ts";

RT.RoInitialize(RT.RO_INIT_MULTITHREADED);

export class HString {
  #handle: bigint;

  get handle(): bigint {
    return this.#handle;
  }

  constructor(handle: bigint) {
    this.#handle = handle;
  }

  static fromString(str: string) {
    const out = new BigUint64Array(1);
    RT.WindowsCreateString(
      str,
      str.length,
      new Uint8Array(out.buffer),
    );
    return new HString(out[0]);
  }

  getRawBuffer(): Uint16Array {
    const out = new Uint32Array(1);
    const ptr = RT.WindowsGetStringRawBuffer(
      this.#handle,
      new Uint8Array(out.buffer),
    );
    return new Uint16Array(
      Deno.UnsafePointerView.getArrayBuffer(Number(ptr), out[0] * 2),
    );
  }

  getString(): string {
    const buffer = this.getRawBuffer();
    return String.fromCharCode(...buffer);
  }
}
