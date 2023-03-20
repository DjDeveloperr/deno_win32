/// Auto-generated by Deno Win32: Windows.Win32.System.LibraryLoader.Apis

import * as util from "../../util.ts";

// Enums
export type LOAD_LIBRARY_FLAGS = number;

// Constants
export const DONT_RESOLVE_DLL_REFERENCES = 1;
export const LOAD_LIBRARY_AS_DATAFILE = 2;
export const LOAD_WITH_ALTERED_SEARCH_PATH = 8;
export const LOAD_IGNORE_CODE_AUTHZ_LEVEL = 16;
export const LOAD_LIBRARY_AS_IMAGE_RESOURCE = 32;
export const LOAD_LIBRARY_AS_DATAFILE_EXCLUSIVE = 64;
export const LOAD_LIBRARY_REQUIRE_SIGNED_TARGET = 128;
export const LOAD_LIBRARY_SEARCH_DLL_LOAD_DIR = 256;
export const LOAD_LIBRARY_SEARCH_APPLICATION_DIR = 512;
export const LOAD_LIBRARY_SEARCH_USER_DIRS = 1024;
export const LOAD_LIBRARY_SEARCH_SYSTEM32 = 2048;
export const LOAD_LIBRARY_SEARCH_DEFAULT_DIRS = 4096;
export const LOAD_LIBRARY_SAFE_CURRENT_DIRS = 8192;
export const LOAD_LIBRARY_SEARCH_SYSTEM32_NO_FORWARDER = 16384;
export const FIND_RESOURCE_DIRECTORY_TYPES = 256;
export const FIND_RESOURCE_DIRECTORY_NAMES = 512;
export const FIND_RESOURCE_DIRECTORY_LANGUAGES = 1024;
export const RESOURCE_ENUM_LN = 1;
export const RESOURCE_ENUM_MUI = 2;
export const RESOURCE_ENUM_MUI_SYSTEM = 4;
export const RESOURCE_ENUM_VALIDATE = 8;
export const RESOURCE_ENUM_MODULE_EXACT = 16;
export const SUPPORT_LANG_NUMBER = 32;
export const GET_MODULE_HANDLE_EX_FLAG_PIN = 1;
export const GET_MODULE_HANDLE_EX_FLAG_UNCHANGED_REFCOUNT = 2;
export const GET_MODULE_HANDLE_EX_FLAG_FROM_ADDRESS = 4;
export const CURRENT_IMPORT_REDIRECTION_VERSION = 1;
export const LOAD_LIBRARY_OS_INTEGRITY_CONTINUITY = 32768;

// Structs

/**
 * Windows.Win32.System.LibraryLoader.ENUMUILANG (size: 16)
 */
export interface ENUMUILANG {
  /** u32 */
  NumOfEnumUILang: number;
  /** u32 */
  SizeOfEnumUIBuffer: number;
  /** ptr */
  pEnumUIBuffer: Deno.PointerValue | Uint8Array;
}

export const sizeofENUMUILANG = 16;

export function allocENUMUILANG(data?: Partial<ENUMUILANG>): Uint8Array {
  const buf = new Uint8Array(sizeofENUMUILANG);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.NumOfEnumUILang !== undefined) view.setUint32(0, Number(data.NumOfEnumUILang), true);
  // 0x04: u32
  if (data?.SizeOfEnumUIBuffer !== undefined) view.setUint32(4, Number(data.SizeOfEnumUIBuffer), true);
  // 0x08: pointer
  if (data?.pEnumUIBuffer !== undefined) view.setBigUint64(8, data.pEnumUIBuffer === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.pEnumUIBuffer))), true);
  return buf;
}

export class ENUMUILANGView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get NumOfEnumUILang(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: u32
  get SizeOfEnumUIBuffer(): number {
    return this.view.getUint32(4, true);
  }

  // 0x08: pointer
  get pEnumUIBuffer(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: u32
  set NumOfEnumUILang(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: u32
  set SizeOfEnumUIBuffer(value: number) {
    this.view.setUint32(4, value, true);
  }

  // 0x08: pointer
  set pEnumUIBuffer(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }
}

export type PSTR = Deno.PointerValue | Uint8Array;

/**
 * Windows.Win32.System.LibraryLoader.REDIRECTION_FUNCTION_DESCRIPTOR (size: 24)
 */
export interface REDIRECTION_FUNCTION_DESCRIPTOR {
  /** Windows.Win32.Foundation.PSTR */
  DllName: string | null | Uint8Array;
  /** Windows.Win32.Foundation.PSTR */
  FunctionName: string | null | Uint8Array;
  /** ptr */
  RedirectionTarget: Deno.PointerValue | Uint8Array;
}

export const sizeofREDIRECTION_FUNCTION_DESCRIPTOR = 24;

export function allocREDIRECTION_FUNCTION_DESCRIPTOR(data?: Partial<REDIRECTION_FUNCTION_DESCRIPTOR>): Uint8Array {
  const buf = new Uint8Array(sizeofREDIRECTION_FUNCTION_DESCRIPTOR);
  const view = new DataView(buf.buffer);
  // 0x00: buffer
  if (data?.DllName !== undefined) {
    (buf as any)._f0 = util.pstrToFfi(data.DllName);
    view.setBigUint64(0, (buf as any)._f0 === null ? 0n : BigInt(Deno.UnsafePointer.value(Deno.UnsafePointer.of((buf as any)._f0))), true);
  }
  // 0x08: buffer
  if (data?.FunctionName !== undefined) {
    (buf as any)._f8 = util.pstrToFfi(data.FunctionName);
    view.setBigUint64(8, (buf as any)._f8 === null ? 0n : BigInt(Deno.UnsafePointer.value(Deno.UnsafePointer.of((buf as any)._f8))), true);
  }
  // 0x10: pointer
  if (data?.RedirectionTarget !== undefined) view.setBigUint64(16, data.RedirectionTarget === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.RedirectionTarget))), true);
  return buf;
}

export class REDIRECTION_FUNCTION_DESCRIPTORView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: buffer
  get DllName(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(0, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x08: buffer
  get FunctionName(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x10: pointer
  get RedirectionTarget(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(16, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: buffer
  set DllName(value: Uint8Array | Deno.PointerValue) {
    (this.buf as any)._f0 = value;
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(util.toPointer((this.buf as any)._f0))), true);
  }

  // 0x08: buffer
  set FunctionName(value: Uint8Array | Deno.PointerValue) {
    (this.buf as any)._f8 = value;
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer((this.buf as any)._f8))), true);
  }

  // 0x10: pointer
  set RedirectionTarget(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }
}

/**
 * Windows.Win32.System.LibraryLoader.REDIRECTION_DESCRIPTOR (size: 16)
 */
export interface REDIRECTION_DESCRIPTOR {
  /** u32 */
  Version: number;
  /** u32 */
  FunctionCount: number;
  /** ptr */
  Redirections: Deno.PointerValue | Uint8Array;
}

export const sizeofREDIRECTION_DESCRIPTOR = 16;

export function allocREDIRECTION_DESCRIPTOR(data?: Partial<REDIRECTION_DESCRIPTOR>): Uint8Array {
  const buf = new Uint8Array(sizeofREDIRECTION_DESCRIPTOR);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.Version !== undefined) view.setUint32(0, Number(data.Version), true);
  // 0x04: u32
  if (data?.FunctionCount !== undefined) view.setUint32(4, Number(data.FunctionCount), true);
  // 0x08: pointer
  if (data?.Redirections !== undefined) view.setBigUint64(8, data.Redirections === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.Redirections))), true);
  return buf;
}

export class REDIRECTION_DESCRIPTORView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get Version(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: u32
  get FunctionCount(): number {
    return this.view.getUint32(4, true);
  }

  // 0x08: pointer
  get Redirections(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: u32
  set Version(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: u32
  set FunctionCount(value: number) {
    this.view.setUint32(4, value, true);
  }

  // 0x08: pointer
  set Redirections(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }
}

export type HINSTANCE = bigint | number;

export type BOOL = number;

export type PWSTR = Deno.PointerValue | Uint8Array;

export type HRSRC = bigint | number;

export type HANDLE = bigint | number;

// Native Libraries

try {
  var libKERNEL32_dll = Deno.dlopen("KERNEL32.dll", {
    DisableThreadLibraryCalls: {
      parameters: ["pointer"],
      result: "i32",
    },
    FindResourceExW: {
      parameters: ["pointer", "buffer", "buffer", "u16"],
      result: "pointer",
    },
    FreeLibrary: {
      parameters: ["pointer"],
      result: "i32",
    },
    FreeLibraryAndExitThread: {
      parameters: ["pointer", "u32"],
      result: "void",
    },
    FreeResource: {
      parameters: ["isize"],
      result: "i32",
    },
    GetModuleFileNameA: {
      parameters: ["pointer", "buffer", "u32"],
      result: "u32",
    },
    GetModuleFileNameW: {
      parameters: ["pointer", "buffer", "u32"],
      result: "u32",
    },
    GetModuleHandleA: {
      parameters: ["buffer"],
      result: "pointer",
    },
    GetModuleHandleW: {
      parameters: ["buffer"],
      result: "pointer",
    },
    GetModuleHandleExA: {
      parameters: ["u32", "buffer", "pointer"],
      result: "i32",
    },
    GetModuleHandleExW: {
      parameters: ["u32", "buffer", "pointer"],
      result: "i32",
    },
    GetProcAddress: {
      parameters: ["pointer", "buffer"],
      result: "pointer",
    },
    LoadLibraryExA: {
      parameters: ["buffer", "pointer", "u32"],
      result: "pointer",
    },
    LoadLibraryExW: {
      parameters: ["buffer", "pointer", "u32"],
      result: "pointer",
    },
    LoadResource: {
      parameters: ["pointer", "pointer"],
      result: "isize",
    },
    LockResource: {
      parameters: ["isize"],
      result: "pointer",
    },
    SizeofResource: {
      parameters: ["pointer", "pointer"],
      result: "u32",
    },
    AddDllDirectory: {
      parameters: ["buffer"],
      result: "pointer",
    },
    RemoveDllDirectory: {
      parameters: ["pointer"],
      result: "i32",
    },
    SetDefaultDllDirectories: {
      parameters: ["u32"],
      result: "i32",
    },
    EnumResourceLanguagesExA: {
      parameters: ["pointer", "buffer", "buffer", "pointer", "isize", "u32", "u16"],
      result: "i32",
    },
    EnumResourceLanguagesExW: {
      parameters: ["pointer", "buffer", "buffer", "pointer", "isize", "u32", "u16"],
      result: "i32",
    },
    EnumResourceNamesExA: {
      parameters: ["pointer", "buffer", "pointer", "isize", "u32", "u16"],
      result: "i32",
    },
    EnumResourceNamesExW: {
      parameters: ["pointer", "buffer", "pointer", "isize", "u32", "u16"],
      result: "i32",
    },
    EnumResourceTypesExA: {
      parameters: ["pointer", "pointer", "isize", "u32", "u16"],
      result: "i32",
    },
    EnumResourceTypesExW: {
      parameters: ["pointer", "pointer", "isize", "u32", "u16"],
      result: "i32",
    },
    FindResourceW: {
      parameters: ["pointer", "buffer", "buffer"],
      result: "pointer",
    },
    LoadLibraryA: {
      parameters: ["buffer"],
      result: "pointer",
    },
    LoadLibraryW: {
      parameters: ["buffer"],
      result: "pointer",
    },
    EnumResourceNamesW: {
      parameters: ["pointer", "buffer", "pointer", "isize"],
      result: "i32",
    },
    EnumResourceNamesA: {
      parameters: ["pointer", "buffer", "pointer", "isize"],
      result: "i32",
    },
    LoadModule: {
      parameters: ["buffer", "pointer"],
      result: "u32",
    },
    LoadPackagedLibrary: {
      parameters: ["buffer", "u32"],
      result: "pointer",
    },
    FindResourceA: {
      parameters: ["pointer", "buffer", "buffer"],
      result: "pointer",
    },
    FindResourceExA: {
      parameters: ["pointer", "buffer", "buffer", "u16"],
      result: "pointer",
    },
    EnumResourceTypesA: {
      parameters: ["pointer", "pointer", "isize"],
      result: "i32",
    },
    EnumResourceTypesW: {
      parameters: ["pointer", "pointer", "isize"],
      result: "i32",
    },
    EnumResourceLanguagesA: {
      parameters: ["pointer", "buffer", "buffer", "pointer", "isize"],
      result: "i32",
    },
    EnumResourceLanguagesW: {
      parameters: ["pointer", "buffer", "buffer", "pointer", "isize"],
      result: "i32",
    },
    BeginUpdateResourceA: {
      parameters: ["buffer", "i32"],
      result: "pointer",
    },
    BeginUpdateResourceW: {
      parameters: ["buffer", "i32"],
      result: "pointer",
    },
    UpdateResourceA: {
      parameters: ["pointer", "buffer", "buffer", "u16", "pointer", "u32"],
      result: "i32",
    },
    UpdateResourceW: {
      parameters: ["pointer", "buffer", "buffer", "u16", "pointer", "u32"],
      result: "i32",
    },
    EndUpdateResourceA: {
      parameters: ["pointer", "i32"],
      result: "i32",
    },
    EndUpdateResourceW: {
      parameters: ["pointer", "i32"],
      result: "i32",
    },
    SetDllDirectoryA: {
      parameters: ["buffer"],
      result: "i32",
    },
    SetDllDirectoryW: {
      parameters: ["buffer"],
      result: "i32",
    },
    GetDllDirectoryA: {
      parameters: ["u32", "buffer"],
      result: "u32",
    },
    GetDllDirectoryW: {
      parameters: ["u32", "buffer"],
      result: "u32",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function DisableThreadLibraryCalls(
  hLibModule: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.DisableThreadLibraryCalls(util.toPointer(hLibModule)));
}

export function FindResourceExW(
  hModule: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */,
  lpType: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  lpName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  wLanguage: number /* u16 */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRSRC */ {
  return libKERNEL32_dll.FindResourceExW(util.toPointer(hModule), util.pwstrToFfi(lpType), util.pwstrToFfi(lpName), wLanguage);
}

export function FreeLibrary(
  hLibModule: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.FreeLibrary(util.toPointer(hLibModule)));
}

export function FreeLibraryAndExitThread(
  hLibModule: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */,
  dwExitCode: number /* u32 */,
): void /* void */ {
  return libKERNEL32_dll.FreeLibraryAndExitThread(util.toPointer(hLibModule), dwExitCode);
}

export function FreeResource(
  hResData: bigint | number /* isize */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.FreeResource(hResData));
}

export function GetModuleFileNameA(
  hModule: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */,
  lpFilename: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  nSize: number /* u32 */,
): number /* u32 */ {
  return libKERNEL32_dll.GetModuleFileNameA(util.toPointer(hModule), util.pstrToFfi(lpFilename), nSize);
}

export function GetModuleFileNameW(
  hModule: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */,
  lpFilename: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  nSize: number /* u32 */,
): number /* u32 */ {
  return libKERNEL32_dll.GetModuleFileNameW(util.toPointer(hModule), util.pwstrToFfi(lpFilename), nSize);
}

export function GetModuleHandleA(
  lpModuleName: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
): Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */ {
  return libKERNEL32_dll.GetModuleHandleA(util.pstrToFfi(lpModuleName));
}

export function GetModuleHandleW(
  lpModuleName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */ {
  return libKERNEL32_dll.GetModuleHandleW(util.pwstrToFfi(lpModuleName));
}

export function GetModuleHandleExA(
  dwFlags: number /* u32 */,
  lpModuleName: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  phModule: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.GetModuleHandleExA(dwFlags, util.pstrToFfi(lpModuleName), util.toPointer(phModule)));
}

export function GetModuleHandleExW(
  dwFlags: number /* u32 */,
  lpModuleName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  phModule: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.GetModuleHandleExW(dwFlags, util.pwstrToFfi(lpModuleName), util.toPointer(phModule)));
}

export function GetProcAddress(
  hModule: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */,
  lpProcName: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
): Deno.PointerValue /* Windows.Win32.Foundation.FARPROC */ {
  return libKERNEL32_dll.GetProcAddress(util.toPointer(hModule), util.pstrToFfi(lpProcName));
}

export function LoadLibraryExA(
  lpLibFileName: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  hFile: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  dwFlags: LOAD_LIBRARY_FLAGS /* Windows.Win32.System.LibraryLoader.LOAD_LIBRARY_FLAGS */,
): Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */ {
  return libKERNEL32_dll.LoadLibraryExA(util.pstrToFfi(lpLibFileName), util.toPointer(hFile), dwFlags);
}

export function LoadLibraryExW(
  lpLibFileName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  hFile: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  dwFlags: LOAD_LIBRARY_FLAGS /* Windows.Win32.System.LibraryLoader.LOAD_LIBRARY_FLAGS */,
): Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */ {
  return libKERNEL32_dll.LoadLibraryExW(util.pwstrToFfi(lpLibFileName), util.toPointer(hFile), dwFlags);
}

export function LoadResource(
  hModule: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */,
  hResInfo: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HRSRC */,
): bigint | number /* isize */ {
  return libKERNEL32_dll.LoadResource(util.toPointer(hModule), util.toPointer(hResInfo));
}

export function LockResource(
  hResData: bigint | number /* isize */,
): Deno.PointerValue /* ptr */ {
  return libKERNEL32_dll.LockResource(hResData);
}

export function SizeofResource(
  hModule: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */,
  hResInfo: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HRSRC */,
): number /* u32 */ {
  return libKERNEL32_dll.SizeofResource(util.toPointer(hModule), util.toPointer(hResInfo));
}

export function AddDllDirectory(
  NewDirectory: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): Deno.PointerValue /* ptr */ {
  return libKERNEL32_dll.AddDllDirectory(util.pwstrToFfi(NewDirectory));
}

export function RemoveDllDirectory(
  Cookie: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.RemoveDllDirectory(util.toPointer(Cookie)));
}

export function SetDefaultDllDirectories(
  DirectoryFlags: LOAD_LIBRARY_FLAGS /* Windows.Win32.System.LibraryLoader.LOAD_LIBRARY_FLAGS */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.SetDefaultDllDirectories(DirectoryFlags));
}

export function EnumResourceLanguagesExA(
  hModule: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */,
  lpType: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  lpName: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  lpEnumFunc: Uint8Array | Deno.PointerValue /* Windows.Win32.System.LibraryLoader.ENUMRESLANGPROCA */,
  lParam: bigint | number /* isize */,
  dwFlags: number /* u32 */,
  LangId: number /* u16 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.EnumResourceLanguagesExA(util.toPointer(hModule), util.pstrToFfi(lpType), util.pstrToFfi(lpName), util.toPointer(lpEnumFunc), lParam, dwFlags, LangId));
}

export function EnumResourceLanguagesExW(
  hModule: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */,
  lpType: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  lpName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  lpEnumFunc: Uint8Array | Deno.PointerValue /* Windows.Win32.System.LibraryLoader.ENUMRESLANGPROCW */,
  lParam: bigint | number /* isize */,
  dwFlags: number /* u32 */,
  LangId: number /* u16 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.EnumResourceLanguagesExW(util.toPointer(hModule), util.pwstrToFfi(lpType), util.pwstrToFfi(lpName), util.toPointer(lpEnumFunc), lParam, dwFlags, LangId));
}

export function EnumResourceNamesExA(
  hModule: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */,
  lpType: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  lpEnumFunc: Uint8Array | Deno.PointerValue /* Windows.Win32.System.LibraryLoader.ENUMRESNAMEPROCA */,
  lParam: bigint | number /* isize */,
  dwFlags: number /* u32 */,
  LangId: number /* u16 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.EnumResourceNamesExA(util.toPointer(hModule), util.pstrToFfi(lpType), util.toPointer(lpEnumFunc), lParam, dwFlags, LangId));
}

export function EnumResourceNamesExW(
  hModule: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */,
  lpType: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  lpEnumFunc: Uint8Array | Deno.PointerValue /* Windows.Win32.System.LibraryLoader.ENUMRESNAMEPROCW */,
  lParam: bigint | number /* isize */,
  dwFlags: number /* u32 */,
  LangId: number /* u16 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.EnumResourceNamesExW(util.toPointer(hModule), util.pwstrToFfi(lpType), util.toPointer(lpEnumFunc), lParam, dwFlags, LangId));
}

export function EnumResourceTypesExA(
  hModule: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */,
  lpEnumFunc: Uint8Array | Deno.PointerValue /* Windows.Win32.System.LibraryLoader.ENUMRESTYPEPROCA */,
  lParam: bigint | number /* isize */,
  dwFlags: number /* u32 */,
  LangId: number /* u16 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.EnumResourceTypesExA(util.toPointer(hModule), util.toPointer(lpEnumFunc), lParam, dwFlags, LangId));
}

export function EnumResourceTypesExW(
  hModule: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */,
  lpEnumFunc: Uint8Array | Deno.PointerValue /* Windows.Win32.System.LibraryLoader.ENUMRESTYPEPROCW */,
  lParam: bigint | number /* isize */,
  dwFlags: number /* u32 */,
  LangId: number /* u16 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.EnumResourceTypesExW(util.toPointer(hModule), util.toPointer(lpEnumFunc), lParam, dwFlags, LangId));
}

export function FindResourceW(
  hModule: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */,
  lpName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  lpType: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRSRC */ {
  return libKERNEL32_dll.FindResourceW(util.toPointer(hModule), util.pwstrToFfi(lpName), util.pwstrToFfi(lpType));
}

export function LoadLibraryA(
  lpLibFileName: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
): Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */ {
  return libKERNEL32_dll.LoadLibraryA(util.pstrToFfi(lpLibFileName));
}

export function LoadLibraryW(
  lpLibFileName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */ {
  return libKERNEL32_dll.LoadLibraryW(util.pwstrToFfi(lpLibFileName));
}

export function EnumResourceNamesW(
  hModule: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */,
  lpType: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  lpEnumFunc: Uint8Array | Deno.PointerValue /* Windows.Win32.System.LibraryLoader.ENUMRESNAMEPROCW */,
  lParam: bigint | number /* isize */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.EnumResourceNamesW(util.toPointer(hModule), util.pwstrToFfi(lpType), util.toPointer(lpEnumFunc), lParam));
}

export function EnumResourceNamesA(
  hModule: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */,
  lpType: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  lpEnumFunc: Uint8Array | Deno.PointerValue /* Windows.Win32.System.LibraryLoader.ENUMRESNAMEPROCA */,
  lParam: bigint | number /* isize */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.EnumResourceNamesA(util.toPointer(hModule), util.pstrToFfi(lpType), util.toPointer(lpEnumFunc), lParam));
}

export function LoadModule(
  lpModuleName: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  lpParameterBlock: Deno.PointerValue | Uint8Array /* ptr */,
): number /* u32 */ {
  return libKERNEL32_dll.LoadModule(util.pstrToFfi(lpModuleName), util.toPointer(lpParameterBlock));
}

export function LoadPackagedLibrary(
  lpwLibFileName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  Reserved: number /* u32 */,
): Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */ {
  return libKERNEL32_dll.LoadPackagedLibrary(util.pwstrToFfi(lpwLibFileName), Reserved);
}

export function FindResourceA(
  hModule: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */,
  lpName: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  lpType: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRSRC */ {
  return libKERNEL32_dll.FindResourceA(util.toPointer(hModule), util.pstrToFfi(lpName), util.pstrToFfi(lpType));
}

export function FindResourceExA(
  hModule: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */,
  lpType: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  lpName: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  wLanguage: number /* u16 */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRSRC */ {
  return libKERNEL32_dll.FindResourceExA(util.toPointer(hModule), util.pstrToFfi(lpType), util.pstrToFfi(lpName), wLanguage);
}

export function EnumResourceTypesA(
  hModule: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */,
  lpEnumFunc: Uint8Array | Deno.PointerValue /* Windows.Win32.System.LibraryLoader.ENUMRESTYPEPROCA */,
  lParam: bigint | number /* isize */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.EnumResourceTypesA(util.toPointer(hModule), util.toPointer(lpEnumFunc), lParam));
}

export function EnumResourceTypesW(
  hModule: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */,
  lpEnumFunc: Uint8Array | Deno.PointerValue /* Windows.Win32.System.LibraryLoader.ENUMRESTYPEPROCW */,
  lParam: bigint | number /* isize */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.EnumResourceTypesW(util.toPointer(hModule), util.toPointer(lpEnumFunc), lParam));
}

export function EnumResourceLanguagesA(
  hModule: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */,
  lpType: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  lpName: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  lpEnumFunc: Uint8Array | Deno.PointerValue /* Windows.Win32.System.LibraryLoader.ENUMRESLANGPROCA */,
  lParam: bigint | number /* isize */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.EnumResourceLanguagesA(util.toPointer(hModule), util.pstrToFfi(lpType), util.pstrToFfi(lpName), util.toPointer(lpEnumFunc), lParam));
}

export function EnumResourceLanguagesW(
  hModule: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HINSTANCE */,
  lpType: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  lpName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  lpEnumFunc: Uint8Array | Deno.PointerValue /* Windows.Win32.System.LibraryLoader.ENUMRESLANGPROCW */,
  lParam: bigint | number /* isize */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.EnumResourceLanguagesW(util.toPointer(hModule), util.pwstrToFfi(lpType), util.pwstrToFfi(lpName), util.toPointer(lpEnumFunc), lParam));
}

export function BeginUpdateResourceA(
  pFileName: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  bDeleteExistingResources: boolean /* Windows.Win32.Foundation.BOOL */,
): Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */ {
  return libKERNEL32_dll.BeginUpdateResourceA(util.pstrToFfi(pFileName), util.boolToFfi(bDeleteExistingResources));
}

export function BeginUpdateResourceW(
  pFileName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  bDeleteExistingResources: boolean /* Windows.Win32.Foundation.BOOL */,
): Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */ {
  return libKERNEL32_dll.BeginUpdateResourceW(util.pwstrToFfi(pFileName), util.boolToFfi(bDeleteExistingResources));
}

export function UpdateResourceA(
  hUpdate: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  lpType: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  lpName: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  wLanguage: number /* u16 */,
  lpData: Deno.PointerValue | Uint8Array /* ptr */,
  cb: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.UpdateResourceA(util.toPointer(hUpdate), util.pstrToFfi(lpType), util.pstrToFfi(lpName), wLanguage, util.toPointer(lpData), cb));
}

export function UpdateResourceW(
  hUpdate: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  lpType: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  lpName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  wLanguage: number /* u16 */,
  lpData: Deno.PointerValue | Uint8Array /* ptr */,
  cb: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.UpdateResourceW(util.toPointer(hUpdate), util.pwstrToFfi(lpType), util.pwstrToFfi(lpName), wLanguage, util.toPointer(lpData), cb));
}

export function EndUpdateResourceA(
  hUpdate: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  fDiscard: boolean /* Windows.Win32.Foundation.BOOL */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.EndUpdateResourceA(util.toPointer(hUpdate), util.boolToFfi(fDiscard)));
}

export function EndUpdateResourceW(
  hUpdate: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  fDiscard: boolean /* Windows.Win32.Foundation.BOOL */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.EndUpdateResourceW(util.toPointer(hUpdate), util.boolToFfi(fDiscard)));
}

export function SetDllDirectoryA(
  lpPathName: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.SetDllDirectoryA(util.pstrToFfi(lpPathName)));
}

export function SetDllDirectoryW(
  lpPathName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.SetDllDirectoryW(util.pwstrToFfi(lpPathName)));
}

export function GetDllDirectoryA(
  nBufferLength: number /* u32 */,
  lpBuffer: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
): number /* u32 */ {
  return libKERNEL32_dll.GetDllDirectoryA(nBufferLength, util.pstrToFfi(lpBuffer));
}

export function GetDllDirectoryW(
  nBufferLength: number /* u32 */,
  lpBuffer: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): number /* u32 */ {
  return libKERNEL32_dll.GetDllDirectoryW(nBufferLength, util.pwstrToFfi(lpBuffer));
}

