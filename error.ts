import { FormatMessageA } from "./api/System/Diagnostics/Debug.ts";
import { GetLastError } from "./api/Foundation.ts";

function FormatMessage(errCode: number): string {
  const lpBufferPtr = new BigUint64Array(1);

  FormatMessageA(
    0x00000100 | 0x00001000 | 0x00000200,
    null,
    errCode,
    0,
    new Uint8Array(lpBufferPtr.buffer),
    0,
    null,
  ) as number;

  const lpBufferView = new Deno.UnsafePointerView(
    lpBufferPtr[0],
  );
  return lpBufferView.getCString();
}

export class Win32Error extends Error {
  name = "Win32Error";
  #code: number;

  constructor(code: number) {
    super(`${code}: ${FormatMessage(code)}`);
    this.#code = code;
  }

  get code(): number {
    return this.#code;
  }
}

export function unwrap(result: number | boolean) {
  if (!result) {
    const lastError = GetLastError();
    if (lastError === 0 || lastError === 997) return;
    throw new Win32Error(lastError);
  }
}
