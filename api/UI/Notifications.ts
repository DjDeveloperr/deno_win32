/// Auto-generated by Deno Win32: Windows.Win32.UI.Notifications.Apis

import * as util from "../../util.ts";

// Structs

export type PWSTR = Deno.PointerValue | Uint8Array | null;

/**
 * Windows.Win32.UI.Notifications.NOTIFICATION_USER_INPUT_DATA (size: 16)
 */
export interface NOTIFICATION_USER_INPUT_DATA {
  /** Windows.Win32.Foundation.PWSTR */
  Key: string | null;
  /** Windows.Win32.Foundation.PWSTR */
  Value: string | null;
}

export const sizeofNOTIFICATION_USER_INPUT_DATA = 16;

export function allocNOTIFICATION_USER_INPUT_DATA(data?: Partial<NOTIFICATION_USER_INPUT_DATA>): Uint8Array {
  const buf = new Uint8Array(sizeofNOTIFICATION_USER_INPUT_DATA);
  const view = new DataView(buf.buffer);
  // 0x00: buffer
  if (data?.Key !== undefined) {
    (buf as any)._f0 = util.pwstrToFfi(data.Key);
    view.setBigUint64(0, (buf as any)._f0 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f0)), true);
  }
  // 0x08: buffer
  if (data?.Value !== undefined) {
    (buf as any)._f8 = util.pwstrToFfi(data.Value);
    view.setBigUint64(8, (buf as any)._f8 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f8)), true);
  }
  return buf;
}

// Native Libraries

// Symbols
