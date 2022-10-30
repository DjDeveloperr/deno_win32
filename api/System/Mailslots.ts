/// Auto-generated by Deno Win32: Windows.Win32.System.Mailslots.Apis

import * as util from "../../util.ts";

// Structs

export type PSTR = Deno.PointerValue | Uint8Array | null;

export type HANDLE = Deno.PointerValue;

export type PWSTR = Deno.PointerValue | Uint8Array | null;

export type BOOL = number;

// Native Libraries

try {
  var libKERNEL32_dll = Deno.dlopen("KERNEL32.dll", {
    CreateMailslotA: {
      parameters: ["buffer", "u32", "u32", "pointer"],
      result: "pointer",
    },
    CreateMailslotW: {
      parameters: ["buffer", "u32", "u32", "pointer"],
      result: "pointer",
    },
    GetMailslotInfo: {
      parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"],
      result: "i32",
    },
    SetMailslotInfo: {
      parameters: ["pointer", "u32"],
      result: "i32",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function CreateMailslotA(
  lpName: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  nMaxMessageSize: number /* u32 */,
  lReadTimeout: number /* u32 */,
  lpSecurityAttributes: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */ {
  return util.pointerFromFfi(libKERNEL32_dll.CreateMailslotA(util.pstrToFfi(lpName), nMaxMessageSize, lReadTimeout, util.toPointer(lpSecurityAttributes)));
}

export function CreateMailslotW(
  lpName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  nMaxMessageSize: number /* u32 */,
  lReadTimeout: number /* u32 */,
  lpSecurityAttributes: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */ {
  return util.pointerFromFfi(libKERNEL32_dll.CreateMailslotW(util.pwstrToFfi(lpName), nMaxMessageSize, lReadTimeout, util.toPointer(lpSecurityAttributes)));
}

export function GetMailslotInfo(
  hMailslot: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  lpMaxMessageSize: Deno.PointerValue | Uint8Array | null /* ptr */,
  lpNextSize: Deno.PointerValue | Uint8Array | null /* ptr */,
  lpMessageCount: Deno.PointerValue | Uint8Array | null /* ptr */,
  lpReadTimeout: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.GetMailslotInfo(util.toPointer(hMailslot), util.toPointer(lpMaxMessageSize), util.toPointer(lpNextSize), util.toPointer(lpMessageCount), util.toPointer(lpReadTimeout)));
}

export function SetMailslotInfo(
  hMailslot: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  lReadTimeout: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.SetMailslotInfo(util.toPointer(hMailslot), lReadTimeout));
}

