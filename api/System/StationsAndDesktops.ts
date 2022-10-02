/// Auto-generated by Deno Win32: Windows.Win32.System.StationsAndDesktops.Apis

import * as util from "../../util.ts";

// Enums
export type BROADCAST_SYSTEM_MESSAGE_FLAGS = number;
export type BROADCAST_SYSTEM_MESSAGE_INFO = number;
export type USER_OBJECT_INFORMATION_INDEX = number;

// Constants
export const BSF_ALLOWSFW = 128;
export const BSF_FLUSHDISK = 4;
export const BSF_FORCEIFHUNG = 32;
export const BSF_IGNORECURRENTTASK = 2;
export const BSF_NOHANG = 8;
export const BSF_NOTIMEOUTIFNOTHUNG = 64;
export const BSF_POSTMESSAGE = 16;
export const BSF_QUERY = 1;
export const BSF_SENDNOTIFYMESSAGE = 256;
export const BSF_LUID = 1024;
export const BSF_RETURNHDESK = 512;
export const BSM_ALLCOMPONENTS = 0;
export const BSM_ALLDESKTOPS = 16;
export const BSM_APPLICATIONS = 8;
export const UOI_FLAGS = 1;
export const UOI_HEAPSIZE = 5;
export const UOI_IO = 6;
export const UOI_NAME = 2;
export const UOI_TYPE = 3;
export const UOI_USER_SID = 4;

// Structs

export type HWINSTA = Deno.PointerValue;

export type HDESK = Deno.PointerValue;

export type BOOL = number;

/**
 * Windows.Win32.System.StationsAndDesktops.USEROBJECTFLAGS (size: 16)
 */
export interface USEROBJECTFLAGS {
  /** Windows.Win32.Foundation.BOOL */
  fInherit: boolean;
  /** Windows.Win32.Foundation.BOOL */
  fReserved: boolean;
  /** u32 */
  dwFlags: number;
}

export const sizeofUSEROBJECTFLAGS = 16;

export function allocUSEROBJECTFLAGS(data?: Partial<USEROBJECTFLAGS>): Uint8Array {
  const buf = new Uint8Array(sizeofUSEROBJECTFLAGS);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.fInherit !== undefined) view.setInt32(0, Number(data.fInherit), true);
  // 0x04: i32
  if (data?.fReserved !== undefined) view.setInt32(4, Number(data.fReserved), true);
  // 0x08: u32
  if (data?.dwFlags !== undefined) view.setUint32(8, Number(data.dwFlags), true);
  // 0x0c: pad4
  return buf;
}

export type HWND = Deno.PointerValue;

/**
 * Windows.Win32.Foundation.LUID (size: 8)
 */
export interface LUID {
  /** u32 */
  LowPart: number;
  /** i32 */
  HighPart: number;
}

export const sizeofLUID = 8;

export function allocLUID(data?: Partial<LUID>): Uint8Array {
  const buf = new Uint8Array(sizeofLUID);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.LowPart !== undefined) view.setUint32(0, Number(data.LowPart), true);
  // 0x04: i32
  if (data?.HighPart !== undefined) view.setInt32(4, Number(data.HighPart), true);
  return buf;
}

/**
 * Windows.Win32.System.StationsAndDesktops.BSMINFO (size: 32)
 */
export interface BSMINFO {
  /** u32 */
  cbSize: number;
  /** Windows.Win32.System.StationsAndDesktops.HDESK */
  hdesk: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Foundation.HWND */
  hwnd: Deno.PointerValue | null;
  /** Windows.Win32.Foundation.LUID */
  luid: Uint8Array | Deno.PointerValue | null;
}

export const sizeofBSMINFO = 32;

export function allocBSMINFO(data?: Partial<BSMINFO>): Uint8Array {
  const buf = new Uint8Array(sizeofBSMINFO);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.cbSize !== undefined) view.setUint32(0, Number(data.cbSize), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.hdesk !== undefined) view.setBigUint64(8, data.hdesk === null ? 0n : BigInt(util.toPointer(data.hdesk)), true);
  // 0x10: pointer
  if (data?.hwnd !== undefined) view.setBigUint64(16, data.hwnd === null ? 0n : BigInt(util.toPointer(data.hwnd)), true);
  // 0x18: pointer
  if (data?.luid !== undefined) view.setBigUint64(24, data.luid === null ? 0n : BigInt(util.toPointer(data.luid)), true);
  return buf;
}

export type PSTR = Deno.PointerValue | Uint8Array | null;

export type PWSTR = Deno.PointerValue | Uint8Array | null;

export type LPARAM = Deno.PointerValue;

export type HANDLE = Deno.PointerValue;

export type WPARAM = Deno.PointerValue;

// Native Libraries

try {
  var libUSER32 = Deno.dlopen("USER32", {
    CreateDesktopA: {
      parameters: ["buffer", "buffer", "pointer", "u32", "u32", "pointer"],
      result: "pointer",
    },
    CreateDesktopW: {
      parameters: ["buffer", "buffer", "pointer", "u32", "u32", "pointer"],
      result: "pointer",
    },
    CreateDesktopExA: {
      parameters: ["buffer", "buffer", "pointer", "u32", "u32", "pointer", "u32", "pointer"],
      result: "pointer",
    },
    CreateDesktopExW: {
      parameters: ["buffer", "buffer", "pointer", "u32", "u32", "pointer", "u32", "pointer"],
      result: "pointer",
    },
    OpenDesktopA: {
      parameters: ["buffer", "u32", "i32", "u32"],
      result: "pointer",
    },
    OpenDesktopW: {
      parameters: ["buffer", "u32", "i32", "u32"],
      result: "pointer",
    },
    OpenInputDesktop: {
      parameters: ["u32", "i32", "u32"],
      result: "pointer",
    },
    EnumDesktopsA: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "i32",
    },
    EnumDesktopsW: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "i32",
    },
    EnumDesktopWindows: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "i32",
    },
    SwitchDesktop: {
      parameters: ["pointer"],
      result: "i32",
    },
    SetThreadDesktop: {
      parameters: ["pointer"],
      result: "i32",
    },
    CloseDesktop: {
      parameters: ["pointer"],
      result: "i32",
    },
    GetThreadDesktop: {
      parameters: ["u32"],
      result: "pointer",
    },
    CreateWindowStationA: {
      parameters: ["buffer", "u32", "u32", "pointer"],
      result: "pointer",
    },
    CreateWindowStationW: {
      parameters: ["buffer", "u32", "u32", "pointer"],
      result: "pointer",
    },
    OpenWindowStationA: {
      parameters: ["buffer", "i32", "u32"],
      result: "pointer",
    },
    OpenWindowStationW: {
      parameters: ["buffer", "i32", "u32"],
      result: "pointer",
    },
    EnumWindowStationsA: {
      parameters: ["pointer", "pointer"],
      result: "i32",
    },
    EnumWindowStationsW: {
      parameters: ["pointer", "pointer"],
      result: "i32",
    },
    CloseWindowStation: {
      parameters: ["pointer"],
      result: "i32",
    },
    SetProcessWindowStation: {
      parameters: ["pointer"],
      result: "i32",
    },
    GetProcessWindowStation: {
      parameters: [],
      result: "pointer",
    },
    GetUserObjectInformationA: {
      parameters: ["pointer", "u32", "pointer", "u32", "pointer"],
      result: "i32",
    },
    GetUserObjectInformationW: {
      parameters: ["pointer", "u32", "pointer", "u32", "pointer"],
      result: "i32",
    },
    SetUserObjectInformationA: {
      parameters: ["pointer", "i32", "pointer", "u32"],
      result: "i32",
    },
    SetUserObjectInformationW: {
      parameters: ["pointer", "i32", "pointer", "u32"],
      result: "i32",
    },
    BroadcastSystemMessageExA: {
      parameters: ["u32", "pointer", "u32", "pointer", "pointer", "pointer"],
      result: "i32",
    },
    BroadcastSystemMessageExW: {
      parameters: ["u32", "pointer", "u32", "pointer", "pointer", "pointer"],
      result: "i32",
    },
    BroadcastSystemMessageA: {
      parameters: ["u32", "pointer", "u32", "pointer", "pointer"],
      result: "i32",
    },
    BroadcastSystemMessageW: {
      parameters: ["u32", "pointer", "u32", "pointer", "pointer"],
      result: "i32",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function CreateDesktopA(
  lpszDesktop: string | null /* Windows.Win32.Foundation.PSTR */,
  lpszDevice: string | null /* Windows.Win32.Foundation.PSTR */,
  pDevmode: Deno.PointerValue | Uint8Array | null /* ptr */,
  dwFlags: number /* u32 */,
  dwDesiredAccess: number /* u32 */,
  lpsa: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.System.StationsAndDesktops.HDESK */ {
  return util.pointerFromFfi(libUSER32.CreateDesktopA(util.pstrToFfi(lpszDesktop), util.pstrToFfi(lpszDevice), util.toPointer(pDevmode), dwFlags, dwDesiredAccess, util.toPointer(lpsa)));
}

export function CreateDesktopW(
  lpszDesktop: string | null /* Windows.Win32.Foundation.PWSTR */,
  lpszDevice: string | null /* Windows.Win32.Foundation.PWSTR */,
  pDevmode: Deno.PointerValue | Uint8Array | null /* ptr */,
  dwFlags: number /* u32 */,
  dwDesiredAccess: number /* u32 */,
  lpsa: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.System.StationsAndDesktops.HDESK */ {
  return util.pointerFromFfi(libUSER32.CreateDesktopW(util.pwstrToFfi(lpszDesktop), util.pwstrToFfi(lpszDevice), util.toPointer(pDevmode), dwFlags, dwDesiredAccess, util.toPointer(lpsa)));
}

export function CreateDesktopExA(
  lpszDesktop: string | null /* Windows.Win32.Foundation.PSTR */,
  lpszDevice: string | null /* Windows.Win32.Foundation.PSTR */,
  pDevmode: Deno.PointerValue | Uint8Array | null /* ptr */,
  dwFlags: number /* u32 */,
  dwDesiredAccess: number /* u32 */,
  lpsa: Deno.PointerValue | Uint8Array | null /* ptr */,
  ulHeapSize: number /* u32 */,
  pvoid: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.System.StationsAndDesktops.HDESK */ {
  return util.pointerFromFfi(libUSER32.CreateDesktopExA(util.pstrToFfi(lpszDesktop), util.pstrToFfi(lpszDevice), util.toPointer(pDevmode), dwFlags, dwDesiredAccess, util.toPointer(lpsa), ulHeapSize, util.toPointer(pvoid)));
}

export function CreateDesktopExW(
  lpszDesktop: string | null /* Windows.Win32.Foundation.PWSTR */,
  lpszDevice: string | null /* Windows.Win32.Foundation.PWSTR */,
  pDevmode: Deno.PointerValue | Uint8Array | null /* ptr */,
  dwFlags: number /* u32 */,
  dwDesiredAccess: number /* u32 */,
  lpsa: Deno.PointerValue | Uint8Array | null /* ptr */,
  ulHeapSize: number /* u32 */,
  pvoid: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.System.StationsAndDesktops.HDESK */ {
  return util.pointerFromFfi(libUSER32.CreateDesktopExW(util.pwstrToFfi(lpszDesktop), util.pwstrToFfi(lpszDevice), util.toPointer(pDevmode), dwFlags, dwDesiredAccess, util.toPointer(lpsa), ulHeapSize, util.toPointer(pvoid)));
}

export function OpenDesktopA(
  lpszDesktop: string | null /* Windows.Win32.Foundation.PSTR */,
  dwFlags: number /* u32 */,
  fInherit: boolean /* Windows.Win32.Foundation.BOOL */,
  dwDesiredAccess: number /* u32 */,
): Deno.PointerValue | null /* Windows.Win32.System.StationsAndDesktops.HDESK */ {
  return util.pointerFromFfi(libUSER32.OpenDesktopA(util.pstrToFfi(lpszDesktop), dwFlags, util.boolToFfi(fInherit), dwDesiredAccess));
}

export function OpenDesktopW(
  lpszDesktop: string | null /* Windows.Win32.Foundation.PWSTR */,
  dwFlags: number /* u32 */,
  fInherit: boolean /* Windows.Win32.Foundation.BOOL */,
  dwDesiredAccess: number /* u32 */,
): Deno.PointerValue | null /* Windows.Win32.System.StationsAndDesktops.HDESK */ {
  return util.pointerFromFfi(libUSER32.OpenDesktopW(util.pwstrToFfi(lpszDesktop), dwFlags, util.boolToFfi(fInherit), dwDesiredAccess));
}

export function OpenInputDesktop(
  dwFlags: number /* u32 */,
  fInherit: boolean /* Windows.Win32.Foundation.BOOL */,
  dwDesiredAccess: number /* u32 */,
): Deno.PointerValue | null /* Windows.Win32.System.StationsAndDesktops.HDESK */ {
  return util.pointerFromFfi(libUSER32.OpenInputDesktop(dwFlags, util.boolToFfi(fInherit), dwDesiredAccess));
}

export function EnumDesktopsA(
  hwinsta: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.StationsAndDesktops.HWINSTA */,
  lpEnumFunc: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.StationsAndDesktops.DESKTOPENUMPROCA */,
  lParam: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.LPARAM */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libUSER32.EnumDesktopsA(util.toPointer(hwinsta), util.toPointer(lpEnumFunc), util.toPointer(lParam)));
}

export function EnumDesktopsW(
  hwinsta: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.StationsAndDesktops.HWINSTA */,
  lpEnumFunc: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.StationsAndDesktops.DESKTOPENUMPROCW */,
  lParam: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.LPARAM */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libUSER32.EnumDesktopsW(util.toPointer(hwinsta), util.toPointer(lpEnumFunc), util.toPointer(lParam)));
}

export function EnumDesktopWindows(
  hDesktop: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.StationsAndDesktops.HDESK */,
  lpfn: Uint8Array | Deno.PointerValue | null /* Windows.Win32.UI.WindowsAndMessaging.WNDENUMPROC */,
  lParam: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.LPARAM */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libUSER32.EnumDesktopWindows(util.toPointer(hDesktop), util.toPointer(lpfn), util.toPointer(lParam)));
}

export function SwitchDesktop(
  hDesktop: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.StationsAndDesktops.HDESK */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libUSER32.SwitchDesktop(util.toPointer(hDesktop)));
}

export function SetThreadDesktop(
  hDesktop: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.StationsAndDesktops.HDESK */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libUSER32.SetThreadDesktop(util.toPointer(hDesktop)));
}

export function CloseDesktop(
  hDesktop: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.StationsAndDesktops.HDESK */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libUSER32.CloseDesktop(util.toPointer(hDesktop)));
}

export function GetThreadDesktop(
  dwThreadId: number /* u32 */,
): Deno.PointerValue | null /* Windows.Win32.System.StationsAndDesktops.HDESK */ {
  return util.pointerFromFfi(libUSER32.GetThreadDesktop(dwThreadId));
}

export function CreateWindowStationA(
  lpwinsta: string | null /* Windows.Win32.Foundation.PSTR */,
  dwFlags: number /* u32 */,
  dwDesiredAccess: number /* u32 */,
  lpsa: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.System.StationsAndDesktops.HWINSTA */ {
  return util.pointerFromFfi(libUSER32.CreateWindowStationA(util.pstrToFfi(lpwinsta), dwFlags, dwDesiredAccess, util.toPointer(lpsa)));
}

export function CreateWindowStationW(
  lpwinsta: string | null /* Windows.Win32.Foundation.PWSTR */,
  dwFlags: number /* u32 */,
  dwDesiredAccess: number /* u32 */,
  lpsa: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.System.StationsAndDesktops.HWINSTA */ {
  return util.pointerFromFfi(libUSER32.CreateWindowStationW(util.pwstrToFfi(lpwinsta), dwFlags, dwDesiredAccess, util.toPointer(lpsa)));
}

export function OpenWindowStationA(
  lpszWinSta: string | null /* Windows.Win32.Foundation.PSTR */,
  fInherit: boolean /* Windows.Win32.Foundation.BOOL */,
  dwDesiredAccess: number /* u32 */,
): Deno.PointerValue | null /* Windows.Win32.System.StationsAndDesktops.HWINSTA */ {
  return util.pointerFromFfi(libUSER32.OpenWindowStationA(util.pstrToFfi(lpszWinSta), util.boolToFfi(fInherit), dwDesiredAccess));
}

export function OpenWindowStationW(
  lpszWinSta: string | null /* Windows.Win32.Foundation.PWSTR */,
  fInherit: boolean /* Windows.Win32.Foundation.BOOL */,
  dwDesiredAccess: number /* u32 */,
): Deno.PointerValue | null /* Windows.Win32.System.StationsAndDesktops.HWINSTA */ {
  return util.pointerFromFfi(libUSER32.OpenWindowStationW(util.pwstrToFfi(lpszWinSta), util.boolToFfi(fInherit), dwDesiredAccess));
}

export function EnumWindowStationsA(
  lpEnumFunc: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.StationsAndDesktops.WINSTAENUMPROCA */,
  lParam: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.LPARAM */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libUSER32.EnumWindowStationsA(util.toPointer(lpEnumFunc), util.toPointer(lParam)));
}

export function EnumWindowStationsW(
  lpEnumFunc: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.StationsAndDesktops.WINSTAENUMPROCW */,
  lParam: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.LPARAM */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libUSER32.EnumWindowStationsW(util.toPointer(lpEnumFunc), util.toPointer(lParam)));
}

export function CloseWindowStation(
  hWinSta: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.StationsAndDesktops.HWINSTA */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libUSER32.CloseWindowStation(util.toPointer(hWinSta)));
}

export function SetProcessWindowStation(
  hWinSta: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.StationsAndDesktops.HWINSTA */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libUSER32.SetProcessWindowStation(util.toPointer(hWinSta)));
}

export function GetProcessWindowStation(): Deno.PointerValue | null /* Windows.Win32.System.StationsAndDesktops.HWINSTA */ {
  return util.pointerFromFfi(libUSER32.GetProcessWindowStation());
}

export function GetUserObjectInformationA(
  hObj: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  nIndex: USER_OBJECT_INFORMATION_INDEX /* Windows.Win32.System.StationsAndDesktops.USER_OBJECT_INFORMATION_INDEX */,
  pvInfo: Deno.PointerValue | Uint8Array | null /* ptr */,
  nLength: number /* u32 */,
  lpnLengthNeeded: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libUSER32.GetUserObjectInformationA(util.toPointer(hObj), nIndex, util.toPointer(pvInfo), nLength, util.toPointer(lpnLengthNeeded)));
}

export function GetUserObjectInformationW(
  hObj: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  nIndex: USER_OBJECT_INFORMATION_INDEX /* Windows.Win32.System.StationsAndDesktops.USER_OBJECT_INFORMATION_INDEX */,
  pvInfo: Deno.PointerValue | Uint8Array | null /* ptr */,
  nLength: number /* u32 */,
  lpnLengthNeeded: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libUSER32.GetUserObjectInformationW(util.toPointer(hObj), nIndex, util.toPointer(pvInfo), nLength, util.toPointer(lpnLengthNeeded)));
}

export function SetUserObjectInformationA(
  hObj: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  nIndex: number /* i32 */,
  pvInfo: Deno.PointerValue | Uint8Array | null /* ptr */,
  nLength: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libUSER32.SetUserObjectInformationA(util.toPointer(hObj), nIndex, util.toPointer(pvInfo), nLength));
}

export function SetUserObjectInformationW(
  hObj: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  nIndex: number /* i32 */,
  pvInfo: Deno.PointerValue | Uint8Array | null /* ptr */,
  nLength: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libUSER32.SetUserObjectInformationW(util.toPointer(hObj), nIndex, util.toPointer(pvInfo), nLength));
}

export function BroadcastSystemMessageExA(
  flags: BROADCAST_SYSTEM_MESSAGE_FLAGS /* Windows.Win32.System.StationsAndDesktops.BROADCAST_SYSTEM_MESSAGE_FLAGS */,
  lpInfo: Deno.PointerValue | Uint8Array | null /* ptr */,
  Msg: number /* u32 */,
  wParam: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.WPARAM */,
  lParam: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.LPARAM */,
  pbsmInfo: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* i32 */ {
  return libUSER32.BroadcastSystemMessageExA(flags, util.toPointer(lpInfo), Msg, util.toPointer(wParam), util.toPointer(lParam), util.toPointer(pbsmInfo));
}

export function BroadcastSystemMessageExW(
  flags: BROADCAST_SYSTEM_MESSAGE_FLAGS /* Windows.Win32.System.StationsAndDesktops.BROADCAST_SYSTEM_MESSAGE_FLAGS */,
  lpInfo: Deno.PointerValue | Uint8Array | null /* ptr */,
  Msg: number /* u32 */,
  wParam: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.WPARAM */,
  lParam: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.LPARAM */,
  pbsmInfo: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* i32 */ {
  return libUSER32.BroadcastSystemMessageExW(flags, util.toPointer(lpInfo), Msg, util.toPointer(wParam), util.toPointer(lParam), util.toPointer(pbsmInfo));
}

export function BroadcastSystemMessageA(
  flags: number /* u32 */,
  lpInfo: Deno.PointerValue | Uint8Array | null /* ptr */,
  Msg: number /* u32 */,
  wParam: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.WPARAM */,
  lParam: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.LPARAM */,
): number /* i32 */ {
  return libUSER32.BroadcastSystemMessageA(flags, util.toPointer(lpInfo), Msg, util.toPointer(wParam), util.toPointer(lParam));
}

export function BroadcastSystemMessageW(
  flags: BROADCAST_SYSTEM_MESSAGE_FLAGS /* Windows.Win32.System.StationsAndDesktops.BROADCAST_SYSTEM_MESSAGE_FLAGS */,
  lpInfo: Deno.PointerValue | Uint8Array | null /* ptr */,
  Msg: number /* u32 */,
  wParam: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.WPARAM */,
  lParam: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.LPARAM */,
): number /* i32 */ {
  return libUSER32.BroadcastSystemMessageW(flags, util.toPointer(lpInfo), Msg, util.toPointer(wParam), util.toPointer(lParam));
}
