/// Auto-generated by Deno Win32: Windows.Win32.System.Diagnostics.ToolHelp.Apis

import * as util from "../../../util.ts";

// Enums
export type CREATE_TOOLHELP_SNAPSHOT_FLAGS = number;
export type HEAPENTRY32_FLAGS = number;

// Constants
export const TH32CS_INHERIT = 2147483648;
export const TH32CS_SNAPALL = 15;
export const TH32CS_SNAPHEAPLIST = 1;
export const TH32CS_SNAPMODULE = 8;
export const TH32CS_SNAPMODULE32 = 16;
export const TH32CS_SNAPPROCESS = 2;
export const TH32CS_SNAPTHREAD = 4;
export const LF32_FIXED = 1;
export const LF32_FREE = 2;
export const LF32_MOVEABLE = 4;
export const MAX_MODULE_NAME32 = 255;
export const HF32_DEFAULT = 1;
export const HF32_SHARED = 2;

// Structs

/**
 * Windows.Win32.System.Diagnostics.ToolHelp.HEAPLIST32 (size: 32)
 */
export interface HEAPLIST32 {
  /** usize */
  dwSize: Deno.PointerValue;
  /** u32 */
  th32ProcessID: number;
  /** usize */
  th32HeapID: Deno.PointerValue;
  /** u32 */
  dwFlags: number;
}

export const sizeofHEAPLIST32 = 32;

export function allocHEAPLIST32(data?: Partial<HEAPLIST32>): Uint8Array {
  const buf = new Uint8Array(sizeofHEAPLIST32);
  const view = new DataView(buf.buffer);
  // 0x00: usize
  if (data?.dwSize !== undefined) view.setBigUint64(0, BigInt(data.dwSize), true);
  // 0x08: u32
  if (data?.th32ProcessID !== undefined) view.setUint32(8, Number(data.th32ProcessID), true);
  // 0x0c: pad4
  // 0x10: usize
  if (data?.th32HeapID !== undefined) view.setBigUint64(16, BigInt(data.th32HeapID), true);
  // 0x18: u32
  if (data?.dwFlags !== undefined) view.setUint32(24, Number(data.dwFlags), true);
  // 0x1c: pad4
  return buf;
}

export type HANDLE = Deno.PointerValue;

/**
 * Windows.Win32.System.Diagnostics.ToolHelp.HEAPENTRY32 (size: 56)
 */
export interface HEAPENTRY32 {
  /** usize */
  dwSize: Deno.PointerValue;
  /** Windows.Win32.Foundation.HANDLE */
  hHandle: Uint8Array | Deno.PointerValue | null;
  /** usize */
  dwAddress: Deno.PointerValue;
  /** usize */
  dwBlockSize: Deno.PointerValue;
  /** Windows.Win32.System.Diagnostics.ToolHelp.HEAPENTRY32_FLAGS */
  dwFlags: HEAPENTRY32_FLAGS;
  /** u32 */
  dwLockCount: number;
  /** u32 */
  dwResvd: number;
  /** u32 */
  th32ProcessID: number;
  /** usize */
  th32HeapID: Deno.PointerValue;
}

export const sizeofHEAPENTRY32 = 56;

export function allocHEAPENTRY32(data?: Partial<HEAPENTRY32>): Uint8Array {
  const buf = new Uint8Array(sizeofHEAPENTRY32);
  const view = new DataView(buf.buffer);
  // 0x00: usize
  if (data?.dwSize !== undefined) view.setBigUint64(0, BigInt(data.dwSize), true);
  // 0x08: pointer
  if (data?.hHandle !== undefined) view.setBigUint64(8, data.hHandle === null ? 0n : BigInt(util.toPointer(data.hHandle)), true);
  // 0x10: usize
  if (data?.dwAddress !== undefined) view.setBigUint64(16, BigInt(data.dwAddress), true);
  // 0x18: usize
  if (data?.dwBlockSize !== undefined) view.setBigUint64(24, BigInt(data.dwBlockSize), true);
  // 0x20: u32
  if (data?.dwFlags !== undefined) view.setUint32(32, Number(data.dwFlags), true);
  // 0x24: u32
  if (data?.dwLockCount !== undefined) view.setUint32(36, Number(data.dwLockCount), true);
  // 0x28: u32
  if (data?.dwResvd !== undefined) view.setUint32(40, Number(data.dwResvd), true);
  // 0x2c: u32
  if (data?.th32ProcessID !== undefined) view.setUint32(44, Number(data.th32ProcessID), true);
  // 0x30: usize
  if (data?.th32HeapID !== undefined) view.setBigUint64(48, BigInt(data.th32HeapID), true);
  return buf;
}

/**
 * Windows.Win32.System.Diagnostics.ToolHelp.PROCESSENTRY32W (size: 56)
 */
export interface PROCESSENTRY32W {
  /** u32 */
  dwSize: number;
  /** u32 */
  cntUsage: number;
  /** u32 */
  th32ProcessID: number;
  /** usize */
  th32DefaultHeapID: Deno.PointerValue;
  /** u32 */
  th32ModuleID: number;
  /** u32 */
  cntThreads: number;
  /** u32 */
  th32ParentProcessID: number;
  /** i32 */
  pcPriClassBase: number;
  /** u32 */
  dwFlags: number;
  /** array */
  szExeFile: Deno.PointerValue | null;
}

export const sizeofPROCESSENTRY32W = 56;

export function allocPROCESSENTRY32W(data?: Partial<PROCESSENTRY32W>): Uint8Array {
  const buf = new Uint8Array(sizeofPROCESSENTRY32W);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.dwSize !== undefined) view.setUint32(0, Number(data.dwSize), true);
  // 0x04: u32
  if (data?.cntUsage !== undefined) view.setUint32(4, Number(data.cntUsage), true);
  // 0x08: u32
  if (data?.th32ProcessID !== undefined) view.setUint32(8, Number(data.th32ProcessID), true);
  // 0x0c: pad4
  // 0x10: usize
  if (data?.th32DefaultHeapID !== undefined) view.setBigUint64(16, BigInt(data.th32DefaultHeapID), true);
  // 0x18: u32
  if (data?.th32ModuleID !== undefined) view.setUint32(24, Number(data.th32ModuleID), true);
  // 0x1c: u32
  if (data?.cntThreads !== undefined) view.setUint32(28, Number(data.cntThreads), true);
  // 0x20: u32
  if (data?.th32ParentProcessID !== undefined) view.setUint32(32, Number(data.th32ParentProcessID), true);
  // 0x24: i32
  if (data?.pcPriClassBase !== undefined) view.setInt32(36, Number(data.pcPriClassBase), true);
  // 0x28: u32
  if (data?.dwFlags !== undefined) view.setUint32(40, Number(data.dwFlags), true);
  // 0x2c: pad4
  // 0x30: pointer
  if (data?.szExeFile !== undefined) view.setBigUint64(48, data.szExeFile === null ? 0n : BigInt(util.toPointer(data.szExeFile)), true);
  return buf;
}

/**
 * Windows.Win32.System.Diagnostics.ToolHelp.PROCESSENTRY32 (size: 56)
 */
export interface PROCESSENTRY32 {
  /** u32 */
  dwSize: number;
  /** u32 */
  cntUsage: number;
  /** u32 */
  th32ProcessID: number;
  /** usize */
  th32DefaultHeapID: Deno.PointerValue;
  /** u32 */
  th32ModuleID: number;
  /** u32 */
  cntThreads: number;
  /** u32 */
  th32ParentProcessID: number;
  /** i32 */
  pcPriClassBase: number;
  /** u32 */
  dwFlags: number;
  /** array */
  szExeFile: Deno.PointerValue | null;
}

export const sizeofPROCESSENTRY32 = 56;

export function allocPROCESSENTRY32(data?: Partial<PROCESSENTRY32>): Uint8Array {
  const buf = new Uint8Array(sizeofPROCESSENTRY32);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.dwSize !== undefined) view.setUint32(0, Number(data.dwSize), true);
  // 0x04: u32
  if (data?.cntUsage !== undefined) view.setUint32(4, Number(data.cntUsage), true);
  // 0x08: u32
  if (data?.th32ProcessID !== undefined) view.setUint32(8, Number(data.th32ProcessID), true);
  // 0x0c: pad4
  // 0x10: usize
  if (data?.th32DefaultHeapID !== undefined) view.setBigUint64(16, BigInt(data.th32DefaultHeapID), true);
  // 0x18: u32
  if (data?.th32ModuleID !== undefined) view.setUint32(24, Number(data.th32ModuleID), true);
  // 0x1c: u32
  if (data?.cntThreads !== undefined) view.setUint32(28, Number(data.cntThreads), true);
  // 0x20: u32
  if (data?.th32ParentProcessID !== undefined) view.setUint32(32, Number(data.th32ParentProcessID), true);
  // 0x24: i32
  if (data?.pcPriClassBase !== undefined) view.setInt32(36, Number(data.pcPriClassBase), true);
  // 0x28: u32
  if (data?.dwFlags !== undefined) view.setUint32(40, Number(data.dwFlags), true);
  // 0x2c: pad4
  // 0x30: pointer
  if (data?.szExeFile !== undefined) view.setBigUint64(48, data.szExeFile === null ? 0n : BigInt(util.toPointer(data.szExeFile)), true);
  return buf;
}

/**
 * Windows.Win32.System.Diagnostics.ToolHelp.THREADENTRY32 (size: 32)
 */
export interface THREADENTRY32 {
  /** u32 */
  dwSize: number;
  /** u32 */
  cntUsage: number;
  /** u32 */
  th32ThreadID: number;
  /** u32 */
  th32OwnerProcessID: number;
  /** i32 */
  tpBasePri: number;
  /** i32 */
  tpDeltaPri: number;
  /** u32 */
  dwFlags: number;
}

export const sizeofTHREADENTRY32 = 32;

export function allocTHREADENTRY32(data?: Partial<THREADENTRY32>): Uint8Array {
  const buf = new Uint8Array(sizeofTHREADENTRY32);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.dwSize !== undefined) view.setUint32(0, Number(data.dwSize), true);
  // 0x04: u32
  if (data?.cntUsage !== undefined) view.setUint32(4, Number(data.cntUsage), true);
  // 0x08: u32
  if (data?.th32ThreadID !== undefined) view.setUint32(8, Number(data.th32ThreadID), true);
  // 0x0c: u32
  if (data?.th32OwnerProcessID !== undefined) view.setUint32(12, Number(data.th32OwnerProcessID), true);
  // 0x10: i32
  if (data?.tpBasePri !== undefined) view.setInt32(16, Number(data.tpBasePri), true);
  // 0x14: i32
  if (data?.tpDeltaPri !== undefined) view.setInt32(20, Number(data.tpDeltaPri), true);
  // 0x18: u32
  if (data?.dwFlags !== undefined) view.setUint32(24, Number(data.dwFlags), true);
  // 0x1c: pad4
  return buf;
}

export type HINSTANCE = Deno.PointerValue;

/**
 * Windows.Win32.System.Diagnostics.ToolHelp.MODULEENTRY32W (size: 64)
 */
export interface MODULEENTRY32W {
  /** u32 */
  dwSize: number;
  /** u32 */
  th32ModuleID: number;
  /** u32 */
  th32ProcessID: number;
  /** u32 */
  GlblcntUsage: number;
  /** u32 */
  ProccntUsage: number;
  /** ptr */
  modBaseAddr: Deno.PointerValue | Uint8Array | null;
  /** u32 */
  modBaseSize: number;
  /** Windows.Win32.Foundation.HINSTANCE */
  hModule: Uint8Array | Deno.PointerValue | null;
  /** array */
  szModule: Deno.PointerValue | null;
  /** array */
  szExePath: Deno.PointerValue | null;
}

export const sizeofMODULEENTRY32W = 64;

export function allocMODULEENTRY32W(data?: Partial<MODULEENTRY32W>): Uint8Array {
  const buf = new Uint8Array(sizeofMODULEENTRY32W);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.dwSize !== undefined) view.setUint32(0, Number(data.dwSize), true);
  // 0x04: u32
  if (data?.th32ModuleID !== undefined) view.setUint32(4, Number(data.th32ModuleID), true);
  // 0x08: u32
  if (data?.th32ProcessID !== undefined) view.setUint32(8, Number(data.th32ProcessID), true);
  // 0x0c: u32
  if (data?.GlblcntUsage !== undefined) view.setUint32(12, Number(data.GlblcntUsage), true);
  // 0x10: u32
  if (data?.ProccntUsage !== undefined) view.setUint32(16, Number(data.ProccntUsage), true);
  // 0x14: pad4
  // 0x18: pointer
  if (data?.modBaseAddr !== undefined) view.setBigUint64(24, data.modBaseAddr === null ? 0n : BigInt(util.toPointer(data.modBaseAddr)), true);
  // 0x20: u32
  if (data?.modBaseSize !== undefined) view.setUint32(32, Number(data.modBaseSize), true);
  // 0x24: pad4
  // 0x28: pointer
  if (data?.hModule !== undefined) view.setBigUint64(40, data.hModule === null ? 0n : BigInt(util.toPointer(data.hModule)), true);
  // 0x30: pointer
  if (data?.szModule !== undefined) view.setBigUint64(48, data.szModule === null ? 0n : BigInt(util.toPointer(data.szModule)), true);
  // 0x38: pointer
  if (data?.szExePath !== undefined) view.setBigUint64(56, data.szExePath === null ? 0n : BigInt(util.toPointer(data.szExePath)), true);
  return buf;
}

/**
 * Windows.Win32.System.Diagnostics.ToolHelp.MODULEENTRY32 (size: 64)
 */
export interface MODULEENTRY32 {
  /** u32 */
  dwSize: number;
  /** u32 */
  th32ModuleID: number;
  /** u32 */
  th32ProcessID: number;
  /** u32 */
  GlblcntUsage: number;
  /** u32 */
  ProccntUsage: number;
  /** ptr */
  modBaseAddr: Deno.PointerValue | Uint8Array | null;
  /** u32 */
  modBaseSize: number;
  /** Windows.Win32.Foundation.HINSTANCE */
  hModule: Uint8Array | Deno.PointerValue | null;
  /** array */
  szModule: Deno.PointerValue | null;
  /** array */
  szExePath: Deno.PointerValue | null;
}

export const sizeofMODULEENTRY32 = 64;

export function allocMODULEENTRY32(data?: Partial<MODULEENTRY32>): Uint8Array {
  const buf = new Uint8Array(sizeofMODULEENTRY32);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.dwSize !== undefined) view.setUint32(0, Number(data.dwSize), true);
  // 0x04: u32
  if (data?.th32ModuleID !== undefined) view.setUint32(4, Number(data.th32ModuleID), true);
  // 0x08: u32
  if (data?.th32ProcessID !== undefined) view.setUint32(8, Number(data.th32ProcessID), true);
  // 0x0c: u32
  if (data?.GlblcntUsage !== undefined) view.setUint32(12, Number(data.GlblcntUsage), true);
  // 0x10: u32
  if (data?.ProccntUsage !== undefined) view.setUint32(16, Number(data.ProccntUsage), true);
  // 0x14: pad4
  // 0x18: pointer
  if (data?.modBaseAddr !== undefined) view.setBigUint64(24, data.modBaseAddr === null ? 0n : BigInt(util.toPointer(data.modBaseAddr)), true);
  // 0x20: u32
  if (data?.modBaseSize !== undefined) view.setUint32(32, Number(data.modBaseSize), true);
  // 0x24: pad4
  // 0x28: pointer
  if (data?.hModule !== undefined) view.setBigUint64(40, data.hModule === null ? 0n : BigInt(util.toPointer(data.hModule)), true);
  // 0x30: pointer
  if (data?.szModule !== undefined) view.setBigUint64(48, data.szModule === null ? 0n : BigInt(util.toPointer(data.szModule)), true);
  // 0x38: pointer
  if (data?.szExePath !== undefined) view.setBigUint64(56, data.szExePath === null ? 0n : BigInt(util.toPointer(data.szExePath)), true);
  return buf;
}

export type BOOL = number;

// Native Libraries

try {
  var libKERNEL32 = Deno.dlopen("KERNEL32", {
    CreateToolhelp32Snapshot: {
      parameters: ["u32", "u32"],
      result: "pointer",
    },
    Heap32ListFirst: {
      parameters: ["pointer", "pointer"],
      result: "i32",
    },
    Heap32ListNext: {
      parameters: ["pointer", "pointer"],
      result: "i32",
    },
    Heap32First: {
      parameters: ["pointer", "u32", "usize"],
      result: "i32",
    },
    Heap32Next: {
      parameters: ["pointer"],
      result: "i32",
    },
    Toolhelp32ReadProcessMemory: {
      parameters: ["u32", "pointer", "pointer", "usize", "pointer"],
      result: "i32",
    },
    Process32FirstW: {
      parameters: ["pointer", "pointer"],
      result: "i32",
    },
    Process32NextW: {
      parameters: ["pointer", "pointer"],
      result: "i32",
    },
    Process32First: {
      parameters: ["pointer", "pointer"],
      result: "i32",
    },
    Process32Next: {
      parameters: ["pointer", "pointer"],
      result: "i32",
    },
    Thread32First: {
      parameters: ["pointer", "pointer"],
      result: "i32",
    },
    Thread32Next: {
      parameters: ["pointer", "pointer"],
      result: "i32",
    },
    Module32FirstW: {
      parameters: ["pointer", "pointer"],
      result: "i32",
    },
    Module32NextW: {
      parameters: ["pointer", "pointer"],
      result: "i32",
    },
    Module32First: {
      parameters: ["pointer", "pointer"],
      result: "i32",
    },
    Module32Next: {
      parameters: ["pointer", "pointer"],
      result: "i32",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function CreateToolhelp32Snapshot(
  dwFlags: CREATE_TOOLHELP_SNAPSHOT_FLAGS /* Windows.Win32.System.Diagnostics.ToolHelp.CREATE_TOOLHELP_SNAPSHOT_FLAGS */,
  th32ProcessID: number /* u32 */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */ {
  return util.pointerFromFfi(libKERNEL32.CreateToolhelp32Snapshot(dwFlags, th32ProcessID));
}

export function Heap32ListFirst(
  hSnapshot: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  lphl: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32.Heap32ListFirst(util.toPointer(hSnapshot), util.toPointer(lphl)));
}

export function Heap32ListNext(
  hSnapshot: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  lphl: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32.Heap32ListNext(util.toPointer(hSnapshot), util.toPointer(lphl)));
}

export function Heap32First(
  lphe: Deno.PointerValue | Uint8Array | null /* ptr */,
  th32ProcessID: number /* u32 */,
  th32HeapID: Deno.PointerValue /* usize */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32.Heap32First(util.toPointer(lphe), th32ProcessID, th32HeapID));
}

export function Heap32Next(
  lphe: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32.Heap32Next(util.toPointer(lphe)));
}

export function Toolhelp32ReadProcessMemory(
  th32ProcessID: number /* u32 */,
  lpBaseAddress: Deno.PointerValue | Uint8Array | null /* ptr */,
  lpBuffer: Deno.PointerValue | Uint8Array | null /* ptr */,
  cbRead: Deno.PointerValue /* usize */,
  lpNumberOfBytesRead: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32.Toolhelp32ReadProcessMemory(th32ProcessID, util.toPointer(lpBaseAddress), util.toPointer(lpBuffer), cbRead, util.toPointer(lpNumberOfBytesRead)));
}

export function Process32FirstW(
  hSnapshot: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  lppe: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32.Process32FirstW(util.toPointer(hSnapshot), util.toPointer(lppe)));
}

export function Process32NextW(
  hSnapshot: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  lppe: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32.Process32NextW(util.toPointer(hSnapshot), util.toPointer(lppe)));
}

export function Process32First(
  hSnapshot: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  lppe: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32.Process32First(util.toPointer(hSnapshot), util.toPointer(lppe)));
}

export function Process32Next(
  hSnapshot: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  lppe: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32.Process32Next(util.toPointer(hSnapshot), util.toPointer(lppe)));
}

export function Thread32First(
  hSnapshot: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  lpte: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32.Thread32First(util.toPointer(hSnapshot), util.toPointer(lpte)));
}

export function Thread32Next(
  hSnapshot: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  lpte: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32.Thread32Next(util.toPointer(hSnapshot), util.toPointer(lpte)));
}

export function Module32FirstW(
  hSnapshot: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  lpme: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32.Module32FirstW(util.toPointer(hSnapshot), util.toPointer(lpme)));
}

export function Module32NextW(
  hSnapshot: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  lpme: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32.Module32NextW(util.toPointer(hSnapshot), util.toPointer(lpme)));
}

export function Module32First(
  hSnapshot: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  lpme: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32.Module32First(util.toPointer(hSnapshot), util.toPointer(lpme)));
}

export function Module32Next(
  hSnapshot: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  lpme: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32.Module32Next(util.toPointer(hSnapshot), util.toPointer(lpme)));
}
