/// Auto-generated by Deno Win32: Windows.Win32.Storage.Cabinets.Apis

import * as util from "../../util.ts";

// Enums
export type FDICREATE_CPU_TYPE = number;
export type FCIERROR = number;
export type FDIERROR = number;
export type FDIDECRYPTTYPE = number;
export type FDINOTIFICATIONTYPE = number;

// Constants
export const cpuUNKNOWN = `-1`;
export const cpu80286 = 0;
export const cpu80386 = 1;
export const INCLUDED_FCI = 1;
export const _A_NAME_IS_UTF = 128;
export const _A_EXEC = 64;
export const statusFile = 0;
export const statusFolder = 1;
export const statusCabinet = 2;
export const INCLUDED_TYPES_FCI_FDI = 1;
export const CB_MAX_DISK = 2147483647;
export const CB_MAX_FILENAME = 256;
export const CB_MAX_CABINET_NAME = 256;
export const CB_MAX_CAB_PATH = 256;
export const CB_MAX_DISK_NAME = 256;
export const tcompMASK_TYPE = 15;
export const tcompTYPE_NONE = 0;
export const tcompTYPE_MSZIP = 1;
export const tcompTYPE_QUANTUM = 2;
export const tcompTYPE_LZX = 3;
export const tcompBAD = 15;
export const tcompMASK_LZX_WINDOW = 7936;
export const tcompLZX_WINDOW_LO = 3840;
export const tcompLZX_WINDOW_HI = 5376;
export const tcompSHIFT_LZX_WINDOW = 8;
export const tcompMASK_QUANTUM_LEVEL = 240;
export const tcompQUANTUM_LEVEL_LO = 16;
export const tcompQUANTUM_LEVEL_HI = 112;
export const tcompSHIFT_QUANTUM_LEVEL = 4;
export const tcompMASK_QUANTUM_MEM = 7936;
export const tcompQUANTUM_MEM_LO = 2560;
export const tcompQUANTUM_MEM_HI = 5376;
export const tcompSHIFT_QUANTUM_MEM = 8;
export const tcompMASK_RESERVED = 57344;
export const INCLUDED_FDI = 1;
export const FCIERR_NONE = 0;
export const FCIERR_OPEN_SRC = 1;
export const FCIERR_READ_SRC = 2;
export const FCIERR_ALLOC_FAIL = 3;
export const FCIERR_TEMP_FILE = 4;
export const FCIERR_BAD_COMPR_TYPE = 5;
export const FCIERR_CAB_FILE = 6;
export const FCIERR_USER_ABORT = 7;
export const FCIERR_MCI_FAIL = 8;
export const FCIERR_CAB_FORMAT_LIMIT = 9;
export const FDIERROR_NONE = 0;
export const FDIERROR_CABINET_NOT_FOUND = 1;
export const FDIERROR_NOT_A_CABINET = 2;
export const FDIERROR_UNKNOWN_CABINET_VERSION = 3;
export const FDIERROR_CORRUPT_CABINET = 4;
export const FDIERROR_ALLOC_FAIL = 5;
export const FDIERROR_BAD_COMPR_TYPE = 6;
export const FDIERROR_MDI_FAIL = 7;
export const FDIERROR_TARGET_FILE = 8;
export const FDIERROR_RESERVE_MISMATCH = 9;
export const FDIERROR_WRONG_CABINET = 10;
export const FDIERROR_USER_ABORT = 11;
export const FDIERROR_EOF = 12;
export const fdidtNEW_CABINET = 0;
export const fdidtNEW_FOLDER = 1;
export const fdidtDECRYPT = 2;
export const fdintCABINET_INFO = 0;
export const fdintPARTIAL_FILE = 1;
export const fdintCOPY_FILE = 2;
export const fdintCLOSE_FILE_INFO = 3;
export const fdintNEXT_CABINET = 4;
export const fdintENUMERATE = 5;

// Structs

/**
 * Windows.Win32.Storage.Cabinets.FDISPILLFILE (size: 16)
 */
export interface FDISPILLFILE {
  /** array */
  ach: Deno.PointerValue | null;
  /** i32 */
  cbFile: number;
}

export const sizeofFDISPILLFILE = 16;

export function allocFDISPILLFILE(data?: Partial<FDISPILLFILE>): Uint8Array {
  const buf = new Uint8Array(sizeofFDISPILLFILE);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.ach !== undefined) view.setBigUint64(0, data.ach === null ? 0n : BigInt(util.toPointer(data.ach)), true);
  // 0x08: i32
  if (data?.cbFile !== undefined) view.setInt32(8, Number(data.cbFile), true);
  // 0x0c: pad4
  return buf;
}

export type BOOL = number;

/**
 * Windows.Win32.Storage.Cabinets.ERF (size: 16)
 */
export interface ERF {
  /** i32 */
  erfOper: number;
  /** i32 */
  erfType: number;
  /** Windows.Win32.Foundation.BOOL */
  fError: boolean;
}

export const sizeofERF = 16;

export function allocERF(data?: Partial<ERF>): Uint8Array {
  const buf = new Uint8Array(sizeofERF);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.erfOper !== undefined) view.setInt32(0, Number(data.erfOper), true);
  // 0x04: i32
  if (data?.erfType !== undefined) view.setInt32(4, Number(data.erfType), true);
  // 0x08: i32
  if (data?.fError !== undefined) view.setInt32(8, Number(data.fError), true);
  // 0x0c: pad4
  return buf;
}

/**
 * Windows.Win32.Storage.Cabinets.CCAB (size: 64)
 */
export interface CCAB {
  /** u32 */
  cb: number;
  /** u32 */
  cbFolderThresh: number;
  /** u32 */
  cbReserveCFHeader: number;
  /** u32 */
  cbReserveCFFolder: number;
  /** u32 */
  cbReserveCFData: number;
  /** i32 */
  iCab: number;
  /** i32 */
  iDisk: number;
  /** i32 */
  fFailOnIncompressible: number;
  /** u16 */
  setID: number;
  /** array */
  szDisk: Deno.PointerValue | null;
  /** array */
  szCab: Deno.PointerValue | null;
  /** array */
  szCabPath: Deno.PointerValue | null;
}

export const sizeofCCAB = 64;

export function allocCCAB(data?: Partial<CCAB>): Uint8Array {
  const buf = new Uint8Array(sizeofCCAB);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.cb !== undefined) view.setUint32(0, Number(data.cb), true);
  // 0x04: u32
  if (data?.cbFolderThresh !== undefined) view.setUint32(4, Number(data.cbFolderThresh), true);
  // 0x08: u32
  if (data?.cbReserveCFHeader !== undefined) view.setUint32(8, Number(data.cbReserveCFHeader), true);
  // 0x0c: u32
  if (data?.cbReserveCFFolder !== undefined) view.setUint32(12, Number(data.cbReserveCFFolder), true);
  // 0x10: u32
  if (data?.cbReserveCFData !== undefined) view.setUint32(16, Number(data.cbReserveCFData), true);
  // 0x14: i32
  if (data?.iCab !== undefined) view.setInt32(20, Number(data.iCab), true);
  // 0x18: i32
  if (data?.iDisk !== undefined) view.setInt32(24, Number(data.iDisk), true);
  // 0x1c: i32
  if (data?.fFailOnIncompressible !== undefined) view.setInt32(28, Number(data.fFailOnIncompressible), true);
  // 0x20: u16
  if (data?.setID !== undefined) view.setUint16(32, Number(data.setID), true);
  // 0x22: pad6
  // 0x28: pointer
  if (data?.szDisk !== undefined) view.setBigUint64(40, data.szDisk === null ? 0n : BigInt(util.toPointer(data.szDisk)), true);
  // 0x30: pointer
  if (data?.szCab !== undefined) view.setBigUint64(48, data.szCab === null ? 0n : BigInt(util.toPointer(data.szCab)), true);
  // 0x38: pointer
  if (data?.szCabPath !== undefined) view.setBigUint64(56, data.szCabPath === null ? 0n : BigInt(util.toPointer(data.szCabPath)), true);
  return buf;
}

/**
 * Windows.Win32.Storage.Cabinets.FDICABINETINFO (size: 24)
 */
export interface FDICABINETINFO {
  /** i32 */
  cbCabinet: number;
  /** u16 */
  cFolders: number;
  /** u16 */
  cFiles: number;
  /** u16 */
  setID: number;
  /** u16 */
  iCabinet: number;
  /** Windows.Win32.Foundation.BOOL */
  fReserve: boolean;
  /** Windows.Win32.Foundation.BOOL */
  hasprev: boolean;
  /** Windows.Win32.Foundation.BOOL */
  hasnext: boolean;
}

export const sizeofFDICABINETINFO = 24;

export function allocFDICABINETINFO(data?: Partial<FDICABINETINFO>): Uint8Array {
  const buf = new Uint8Array(sizeofFDICABINETINFO);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.cbCabinet !== undefined) view.setInt32(0, Number(data.cbCabinet), true);
  // 0x04: u16
  if (data?.cFolders !== undefined) view.setUint16(4, Number(data.cFolders), true);
  // 0x06: u16
  if (data?.cFiles !== undefined) view.setUint16(6, Number(data.cFiles), true);
  // 0x08: u16
  if (data?.setID !== undefined) view.setUint16(8, Number(data.setID), true);
  // 0x0a: u16
  if (data?.iCabinet !== undefined) view.setUint16(10, Number(data.iCabinet), true);
  // 0x0c: i32
  if (data?.fReserve !== undefined) view.setInt32(12, Number(data.fReserve), true);
  // 0x10: i32
  if (data?.hasprev !== undefined) view.setInt32(16, Number(data.hasprev), true);
  // 0x14: i32
  if (data?.hasnext !== undefined) view.setInt32(20, Number(data.hasnext), true);
  return buf;
}

/**
 * _Anonymous_e__Struct (size: 16)
 */
export interface _Anonymous_e__Struct {
  /** u64 */
  Alignment: Deno.PointerValue;
  /** u64 */
  Region: Deno.PointerValue;
}

export const sizeof_Anonymous_e__Struct = 16;

export function alloc_Anonymous_e__Struct(data?: Partial<_Anonymous_e__Struct>): Uint8Array {
  const buf = new Uint8Array(sizeof_Anonymous_e__Struct);
  const view = new DataView(buf.buffer);
  // 0x00: u64
  if (data?.Alignment !== undefined) view.setBigUint64(0, BigInt(data.Alignment), true);
  // 0x08: u64
  if (data?.Region !== undefined) view.setBigUint64(8, BigInt(data.Region), true);
  return buf;
}

/**
 * _Anonymous_e__Union (size: 16)
 */
export interface _Anonymous_e__Union {
  /** _Anonymous_e__Struct */
  Anonymous: Uint8Array | Deno.PointerValue | null;
  /** array */
  X: Deno.PointerValue | null;
}

export const sizeof_Anonymous_e__Union = 16;

export function alloc_Anonymous_e__Union(data?: Partial<_Anonymous_e__Union>): Uint8Array {
  const buf = new Uint8Array(sizeof_Anonymous_e__Union);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.Anonymous !== undefined) view.setBigUint64(0, data.Anonymous === null ? 0n : BigInt(util.toPointer(data.Anonymous)), true);
  // 0x08: pointer
  if (data?.X !== undefined) view.setBigUint64(8, data.X === null ? 0n : BigInt(util.toPointer(data.X)), true);
  return buf;
}

/**
 * Windows.Win32.Storage.Cabinets.FDIDECRYPT (size: 24)
 */
export interface FDIDECRYPT {
  /** Windows.Win32.Storage.Cabinets.FDIDECRYPTTYPE */
  fdidt: FDIDECRYPTTYPE;
  /** ptr */
  pvUser: Deno.PointerValue | Uint8Array | null;
  /** _Anonymous_e__Union */
  Anonymous: Uint8Array | Deno.PointerValue | null;
}

export const sizeofFDIDECRYPT = 24;

export function allocFDIDECRYPT(data?: Partial<FDIDECRYPT>): Uint8Array {
  const buf = new Uint8Array(sizeofFDIDECRYPT);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.fdidt !== undefined) view.setInt32(0, Number(data.fdidt), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.pvUser !== undefined) view.setBigUint64(8, data.pvUser === null ? 0n : BigInt(util.toPointer(data.pvUser)), true);
  // 0x10: pointer
  if (data?.Anonymous !== undefined) view.setBigUint64(16, data.Anonymous === null ? 0n : BigInt(util.toPointer(data.Anonymous)), true);
  return buf;
}

export type PSTR = Deno.PointerValue | Uint8Array | null;

/**
 * Windows.Win32.Storage.Cabinets.FDINOTIFICATION (size: 64)
 */
export interface FDINOTIFICATION {
  /** i32 */
  cb: number;
  /** Windows.Win32.Foundation.PSTR */
  psz1: string | null | Uint8Array;
  /** Windows.Win32.Foundation.PSTR */
  psz2: string | null | Uint8Array;
  /** Windows.Win32.Foundation.PSTR */
  psz3: string | null | Uint8Array;
  /** ptr */
  pv: Deno.PointerValue | Uint8Array | null;
  /** isize */
  hf: Deno.PointerValue;
  /** u16 */
  date: number;
  /** u16 */
  time: number;
  /** u16 */
  attribs: number;
  /** u16 */
  setID: number;
  /** u16 */
  iCabinet: number;
  /** u16 */
  iFolder: number;
  /** Windows.Win32.Storage.Cabinets.FDIERROR */
  fdie: FDIERROR;
}

export const sizeofFDINOTIFICATION = 64;

export function allocFDINOTIFICATION(data?: Partial<FDINOTIFICATION>): Uint8Array {
  const buf = new Uint8Array(sizeofFDINOTIFICATION);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.cb !== undefined) view.setInt32(0, Number(data.cb), true);
  // 0x04: pad4
  // 0x08: buffer
  if (data?.psz1 !== undefined) {
    (buf as any)._f8 = util.pstrToFfi(data.psz1);
    view.setBigUint64(8, (buf as any)._f8 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f8)), true);
  }
  // 0x10: buffer
  if (data?.psz2 !== undefined) {
    (buf as any)._f16 = util.pstrToFfi(data.psz2);
    view.setBigUint64(16, (buf as any)._f16 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f16)), true);
  }
  // 0x18: buffer
  if (data?.psz3 !== undefined) {
    (buf as any)._f24 = util.pstrToFfi(data.psz3);
    view.setBigUint64(24, (buf as any)._f24 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f24)), true);
  }
  // 0x20: pointer
  if (data?.pv !== undefined) view.setBigUint64(32, data.pv === null ? 0n : BigInt(util.toPointer(data.pv)), true);
  // 0x28: isize
  if (data?.hf !== undefined) view.setBigInt64(40, BigInt(data.hf), true);
  // 0x30: u16
  if (data?.date !== undefined) view.setUint16(48, Number(data.date), true);
  // 0x32: u16
  if (data?.time !== undefined) view.setUint16(50, Number(data.time), true);
  // 0x34: u16
  if (data?.attribs !== undefined) view.setUint16(52, Number(data.attribs), true);
  // 0x36: u16
  if (data?.setID !== undefined) view.setUint16(54, Number(data.setID), true);
  // 0x38: u16
  if (data?.iCabinet !== undefined) view.setUint16(56, Number(data.iCabinet), true);
  // 0x3a: u16
  if (data?.iFolder !== undefined) view.setUint16(58, Number(data.iFolder), true);
  // 0x3c: i32
  if (data?.fdie !== undefined) view.setInt32(60, Number(data.fdie), true);
  return buf;
}

// Native Libraries

try {
  var libCabinet_dll = Deno.dlopen("Cabinet.dll", {
    FCICreate: {
      parameters: ["pointer", "pointer", "pointer", "pointer", "pointer", "pointer", "pointer", "pointer", "pointer", "pointer", "pointer", "pointer", "pointer"],
      result: "pointer",
    },
    FCIAddFile: {
      parameters: ["pointer", "buffer", "buffer", "i32", "pointer", "pointer", "pointer", "u16"],
      result: "i32",
    },
    FCIFlushCabinet: {
      parameters: ["pointer", "i32", "pointer", "pointer"],
      result: "i32",
    },
    FCIFlushFolder: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "i32",
    },
    FCIDestroy: {
      parameters: ["pointer"],
      result: "i32",
    },
    FDICreate: {
      parameters: ["pointer", "pointer", "pointer", "pointer", "pointer", "pointer", "pointer", "i32", "pointer"],
      result: "pointer",
    },
    FDIIsCabinet: {
      parameters: ["pointer", "isize", "pointer"],
      result: "i32",
    },
    FDICopy: {
      parameters: ["pointer", "buffer", "buffer", "i32", "pointer", "pointer", "pointer"],
      result: "i32",
    },
    FDIDestroy: {
      parameters: ["pointer"],
      result: "i32",
    },
    FDITruncateCabinet: {
      parameters: ["pointer", "buffer", "u16"],
      result: "i32",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function FCICreate(
  perf: Deno.PointerValue | Uint8Array | null /* ptr */,
  pfnfcifp: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNFCIFILEPLACED */,
  pfna: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNFCIALLOC */,
  pfnf: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNFCIFREE */,
  pfnopen: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNFCIOPEN */,
  pfnread: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNFCIREAD */,
  pfnwrite: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNFCIWRITE */,
  pfnclose: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNFCICLOSE */,
  pfnseek: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNFCISEEK */,
  pfndelete: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNFCIDELETE */,
  pfnfcigtf: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNFCIGETTEMPFILE */,
  pccab: Deno.PointerValue | Uint8Array | null /* ptr */,
  pv: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* ptr */ {
  return util.pointerFromFfi(libCabinet_dll.FCICreate(util.toPointer(perf), util.toPointer(pfnfcifp), util.toPointer(pfna), util.toPointer(pfnf), util.toPointer(pfnopen), util.toPointer(pfnread), util.toPointer(pfnwrite), util.toPointer(pfnclose), util.toPointer(pfnseek), util.toPointer(pfndelete), util.toPointer(pfnfcigtf), util.toPointer(pccab), util.toPointer(pv)));
}

export function FCIAddFile(
  hfci: Deno.PointerValue | Uint8Array | null /* ptr */,
  pszSourceFile: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  pszFileName: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  fExecute: boolean /* Windows.Win32.Foundation.BOOL */,
  pfnfcignc: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNFCIGETNEXTCABINET */,
  pfnfcis: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNFCISTATUS */,
  pfnfcigoi: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNFCIGETOPENINFO */,
  typeCompress: number /* u16 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libCabinet_dll.FCIAddFile(util.toPointer(hfci), util.pstrToFfi(pszSourceFile), util.pstrToFfi(pszFileName), util.boolToFfi(fExecute), util.toPointer(pfnfcignc), util.toPointer(pfnfcis), util.toPointer(pfnfcigoi), typeCompress));
}

export function FCIFlushCabinet(
  hfci: Deno.PointerValue | Uint8Array | null /* ptr */,
  fGetNextCab: boolean /* Windows.Win32.Foundation.BOOL */,
  pfnfcignc: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNFCIGETNEXTCABINET */,
  pfnfcis: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNFCISTATUS */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libCabinet_dll.FCIFlushCabinet(util.toPointer(hfci), util.boolToFfi(fGetNextCab), util.toPointer(pfnfcignc), util.toPointer(pfnfcis)));
}

export function FCIFlushFolder(
  hfci: Deno.PointerValue | Uint8Array | null /* ptr */,
  pfnfcignc: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNFCIGETNEXTCABINET */,
  pfnfcis: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNFCISTATUS */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libCabinet_dll.FCIFlushFolder(util.toPointer(hfci), util.toPointer(pfnfcignc), util.toPointer(pfnfcis)));
}

export function FCIDestroy(
  hfci: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libCabinet_dll.FCIDestroy(util.toPointer(hfci)));
}

export function FDICreate(
  pfnalloc: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNALLOC */,
  pfnfree: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNFREE */,
  pfnopen: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNOPEN */,
  pfnread: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNREAD */,
  pfnwrite: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNWRITE */,
  pfnclose: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNCLOSE */,
  pfnseek: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNSEEK */,
  cpuType: FDICREATE_CPU_TYPE /* Windows.Win32.Storage.Cabinets.FDICREATE_CPU_TYPE */,
  perf: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* ptr */ {
  return util.pointerFromFfi(libCabinet_dll.FDICreate(util.toPointer(pfnalloc), util.toPointer(pfnfree), util.toPointer(pfnopen), util.toPointer(pfnread), util.toPointer(pfnwrite), util.toPointer(pfnclose), util.toPointer(pfnseek), cpuType, util.toPointer(perf)));
}

export function FDIIsCabinet(
  hfdi: Deno.PointerValue | Uint8Array | null /* ptr */,
  hf: Deno.PointerValue /* isize */,
  pfdici: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libCabinet_dll.FDIIsCabinet(util.toPointer(hfdi), hf, util.toPointer(pfdici)));
}

export function FDICopy(
  hfdi: Deno.PointerValue | Uint8Array | null /* ptr */,
  pszCabinet: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  pszCabPath: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  flags: number /* i32 */,
  pfnfdin: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNFDINOTIFY */,
  pfnfdid: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Cabinets.PFNFDIDECRYPT */,
  pvUser: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libCabinet_dll.FDICopy(util.toPointer(hfdi), util.pstrToFfi(pszCabinet), util.pstrToFfi(pszCabPath), flags, util.toPointer(pfnfdin), util.toPointer(pfnfdid), util.toPointer(pvUser)));
}

export function FDIDestroy(
  hfdi: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libCabinet_dll.FDIDestroy(util.toPointer(hfdi)));
}

export function FDITruncateCabinet(
  hfdi: Deno.PointerValue | Uint8Array | null /* ptr */,
  pszCabinetName: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  iFolderToDelete: number /* u16 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libCabinet_dll.FDITruncateCabinet(util.toPointer(hfdi), util.pstrToFfi(pszCabinetName), iFolderToDelete));
}

