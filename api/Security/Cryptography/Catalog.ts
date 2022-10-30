/// Auto-generated by Deno Win32: Windows.Win32.Security.Cryptography.Catalog.Apis

import * as util from "../../../util.ts";

// Enums
export type CRYPTCAT_VERSION = number;
export type CRYPTCAT_OPEN_FLAGS = number;

// Constants
export const CRYPTCAT_VERSION_1 = 256;
export const CRYPTCAT_VERSION_2 = 512;
export const CRYPTCAT_OPEN_ALWAYS = 2;
export const CRYPTCAT_OPEN_CREATENEW = 1;
export const CRYPTCAT_OPEN_EXISTING = 4;
export const CRYPTCAT_OPEN_EXCLUDE_PAGE_HASHES = 65536;
export const CRYPTCAT_OPEN_INCLUDE_PAGE_HASHES = 131072;
export const CRYPTCAT_OPEN_VERIFYSIGHASH = 268435456;
export const CRYPTCAT_OPEN_NO_CONTENT_HCRYPTMSG = 536870912;
export const CRYPTCAT_OPEN_SORTED = 1073741824;
export const CRYPTCAT_OPEN_FLAGS_MASK = 4294901760;
export const szOID_CATALOG_LIST = `1.3.6.1.4.1.311.12.1.1`;
export const szOID_CATALOG_LIST_MEMBER = `1.3.6.1.4.1.311.12.1.2`;
export const szOID_CATALOG_LIST_MEMBER2 = `1.3.6.1.4.1.311.12.1.3`;
export const CRYPTCAT_FILEEXT = `CAT`;
export const CRYPTCAT_MAX_MEMBERTAG = 64;
export const CRYPTCAT_MEMBER_SORTED = 1073741824;
export const CRYPTCAT_ATTR_AUTHENTICATED = 268435456;
export const CRYPTCAT_ATTR_UNAUTHENTICATED = 536870912;
export const CRYPTCAT_ATTR_NAMEASCII = 1;
export const CRYPTCAT_ATTR_NAMEOBJID = 2;
export const CRYPTCAT_ATTR_DATAASCII = 65536;
export const CRYPTCAT_ATTR_DATABASE64 = 131072;
export const CRYPTCAT_ATTR_DATAREPLACE = 262144;
export const CRYPTCAT_ATTR_NO_AUTO_COMPAT_ENTRY = 16777216;
export const CRYPTCAT_E_AREA_HEADER = 0;
export const CRYPTCAT_E_AREA_MEMBER = 65536;
export const CRYPTCAT_E_AREA_ATTRIBUTE = 131072;
export const CRYPTCAT_E_CDF_UNSUPPORTED = 1;
export const CRYPTCAT_E_CDF_DUPLICATE = 2;
export const CRYPTCAT_E_CDF_TAGNOTFOUND = 4;
export const CRYPTCAT_E_CDF_MEMBER_FILE_PATH = 65537;
export const CRYPTCAT_E_CDF_MEMBER_INDIRECTDATA = 65538;
export const CRYPTCAT_E_CDF_MEMBER_FILENOTFOUND = 65540;
export const CRYPTCAT_E_CDF_BAD_GUID_CONV = 131073;
export const CRYPTCAT_E_CDF_ATTR_TOOFEWVALUES = 131074;
export const CRYPTCAT_E_CDF_ATTR_TYPECOMBO = 131076;
export const CRYPTCAT_ADDCATALOG_NONE = 0;
export const CRYPTCAT_ADDCATALOG_HARDLINK = 1;

// Structs

export type PWSTR = Deno.PointerValue | Uint8Array | null;

export type HANDLE = Deno.PointerValue;

/**
 * Windows.Win32.Security.Cryptography.Catalog.CRYPTCATSTORE (size: 64)
 */
export interface CRYPTCATSTORE {
  /** u32 */
  cbStruct: number;
  /** u32 */
  dwPublicVersion: number;
  /** Windows.Win32.Foundation.PWSTR */
  pwszP7File: string | null | Uint8Array | Uint16Array;
  /** usize */
  hProv: Deno.PointerValue;
  /** u32 */
  dwEncodingType: number;
  /** Windows.Win32.Security.Cryptography.Catalog.CRYPTCAT_OPEN_FLAGS */
  fdwStoreFlags: CRYPTCAT_OPEN_FLAGS;
  /** Windows.Win32.Foundation.HANDLE */
  hReserved: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Foundation.HANDLE */
  hAttrs: Uint8Array | Deno.PointerValue | null;
  /** ptr */
  hCryptMsg: Deno.PointerValue | Uint8Array | null;
  /** Windows.Win32.Foundation.HANDLE */
  hSorted: Uint8Array | Deno.PointerValue | null;
}

export const sizeofCRYPTCATSTORE = 64;

export function allocCRYPTCATSTORE(data?: Partial<CRYPTCATSTORE>): Uint8Array {
  const buf = new Uint8Array(sizeofCRYPTCATSTORE);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.cbStruct !== undefined) view.setUint32(0, Number(data.cbStruct), true);
  // 0x04: u32
  if (data?.dwPublicVersion !== undefined) view.setUint32(4, Number(data.dwPublicVersion), true);
  // 0x08: buffer
  if (data?.pwszP7File !== undefined) {
    (buf as any)._f8 = util.pwstrToFfi(data.pwszP7File);
    view.setBigUint64(8, (buf as any)._f8 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f8)), true);
  }
  // 0x10: usize
  if (data?.hProv !== undefined) view.setBigUint64(16, BigInt(data.hProv), true);
  // 0x18: u32
  if (data?.dwEncodingType !== undefined) view.setUint32(24, Number(data.dwEncodingType), true);
  // 0x1c: u32
  if (data?.fdwStoreFlags !== undefined) view.setUint32(28, Number(data.fdwStoreFlags), true);
  // 0x20: pointer
  if (data?.hReserved !== undefined) view.setBigUint64(32, data.hReserved === null ? 0n : BigInt(util.toPointer(data.hReserved)), true);
  // 0x28: pointer
  if (data?.hAttrs !== undefined) view.setBigUint64(40, data.hAttrs === null ? 0n : BigInt(util.toPointer(data.hAttrs)), true);
  // 0x30: pointer
  if (data?.hCryptMsg !== undefined) view.setBigUint64(48, data.hCryptMsg === null ? 0n : BigInt(util.toPointer(data.hCryptMsg)), true);
  // 0x38: pointer
  if (data?.hSorted !== undefined) view.setBigUint64(56, data.hSorted === null ? 0n : BigInt(util.toPointer(data.hSorted)), true);
  return buf;
}

/**
 * Windows.Win32.Security.Cryptography.CRYPTOAPI_BLOB (size: 16)
 */
export interface CRYPTOAPI_BLOB {
  /** u32 */
  cbData: number;
  /** ptr */
  pbData: Deno.PointerValue | Uint8Array | null;
}

export const sizeofCRYPTOAPI_BLOB = 16;

export function allocCRYPTOAPI_BLOB(data?: Partial<CRYPTOAPI_BLOB>): Uint8Array {
  const buf = new Uint8Array(sizeofCRYPTOAPI_BLOB);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.cbData !== undefined) view.setUint32(0, Number(data.cbData), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.pbData !== undefined) view.setBigUint64(8, data.pbData === null ? 0n : BigInt(util.toPointer(data.pbData)), true);
  return buf;
}

/**
 * Windows.Win32.Security.Cryptography.Catalog.CRYPTCATMEMBER (size: 80)
 */
export interface CRYPTCATMEMBER {
  /** u32 */
  cbStruct: number;
  /** Windows.Win32.Foundation.PWSTR */
  pwszReferenceTag: string | null | Uint8Array | Uint16Array;
  /** Windows.Win32.Foundation.PWSTR */
  pwszFileName: string | null | Uint8Array | Uint16Array;
  /** System.Guid */
  gSubjectType: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  fdwMemberFlags: number;
  /** ptr */
  pIndirectData: Deno.PointerValue | Uint8Array | null;
  /** u32 */
  dwCertVersion: number;
  /** u32 */
  dwReserved: number;
  /** Windows.Win32.Foundation.HANDLE */
  hReserved: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Security.Cryptography.CRYPTOAPI_BLOB */
  sEncodedIndirectData: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Security.Cryptography.CRYPTOAPI_BLOB */
  sEncodedMemberInfo: Uint8Array | Deno.PointerValue | null;
}

export const sizeofCRYPTCATMEMBER = 80;

export function allocCRYPTCATMEMBER(data?: Partial<CRYPTCATMEMBER>): Uint8Array {
  const buf = new Uint8Array(sizeofCRYPTCATMEMBER);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.cbStruct !== undefined) view.setUint32(0, Number(data.cbStruct), true);
  // 0x04: pad4
  // 0x08: buffer
  if (data?.pwszReferenceTag !== undefined) {
    (buf as any)._f8 = util.pwstrToFfi(data.pwszReferenceTag);
    view.setBigUint64(8, (buf as any)._f8 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f8)), true);
  }
  // 0x10: buffer
  if (data?.pwszFileName !== undefined) {
    (buf as any)._f16 = util.pwstrToFfi(data.pwszFileName);
    view.setBigUint64(16, (buf as any)._f16 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f16)), true);
  }
  // 0x18: pointer
  if (data?.gSubjectType !== undefined) view.setBigUint64(24, data.gSubjectType === null ? 0n : BigInt(util.toPointer(data.gSubjectType)), true);
  // 0x20: u32
  if (data?.fdwMemberFlags !== undefined) view.setUint32(32, Number(data.fdwMemberFlags), true);
  // 0x24: pad4
  // 0x28: pointer
  if (data?.pIndirectData !== undefined) view.setBigUint64(40, data.pIndirectData === null ? 0n : BigInt(util.toPointer(data.pIndirectData)), true);
  // 0x30: u32
  if (data?.dwCertVersion !== undefined) view.setUint32(48, Number(data.dwCertVersion), true);
  // 0x34: u32
  if (data?.dwReserved !== undefined) view.setUint32(52, Number(data.dwReserved), true);
  // 0x38: pointer
  if (data?.hReserved !== undefined) view.setBigUint64(56, data.hReserved === null ? 0n : BigInt(util.toPointer(data.hReserved)), true);
  // 0x40: pointer
  if (data?.sEncodedIndirectData !== undefined) view.setBigUint64(64, data.sEncodedIndirectData === null ? 0n : BigInt(util.toPointer(data.sEncodedIndirectData)), true);
  // 0x48: pointer
  if (data?.sEncodedMemberInfo !== undefined) view.setBigUint64(72, data.sEncodedMemberInfo === null ? 0n : BigInt(util.toPointer(data.sEncodedMemberInfo)), true);
  return buf;
}

/**
 * Windows.Win32.Security.Cryptography.Catalog.CRYPTCATATTRIBUTE (size: 40)
 */
export interface CRYPTCATATTRIBUTE {
  /** u32 */
  cbStruct: number;
  /** Windows.Win32.Foundation.PWSTR */
  pwszReferenceTag: string | null | Uint8Array | Uint16Array;
  /** u32 */
  dwAttrTypeAndAction: number;
  /** u32 */
  cbValue: number;
  /** ptr */
  pbValue: Deno.PointerValue | Uint8Array | null;
  /** u32 */
  dwReserved: number;
}

export const sizeofCRYPTCATATTRIBUTE = 40;

export function allocCRYPTCATATTRIBUTE(data?: Partial<CRYPTCATATTRIBUTE>): Uint8Array {
  const buf = new Uint8Array(sizeofCRYPTCATATTRIBUTE);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.cbStruct !== undefined) view.setUint32(0, Number(data.cbStruct), true);
  // 0x04: pad4
  // 0x08: buffer
  if (data?.pwszReferenceTag !== undefined) {
    (buf as any)._f8 = util.pwstrToFfi(data.pwszReferenceTag);
    view.setBigUint64(8, (buf as any)._f8 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f8)), true);
  }
  // 0x10: u32
  if (data?.dwAttrTypeAndAction !== undefined) view.setUint32(16, Number(data.dwAttrTypeAndAction), true);
  // 0x14: u32
  if (data?.cbValue !== undefined) view.setUint32(20, Number(data.cbValue), true);
  // 0x18: pointer
  if (data?.pbValue !== undefined) view.setBigUint64(24, data.pbValue === null ? 0n : BigInt(util.toPointer(data.pbValue)), true);
  // 0x20: u32
  if (data?.dwReserved !== undefined) view.setUint32(32, Number(data.dwReserved), true);
  // 0x24: pad4
  return buf;
}

export type BOOL = number;

/**
 * Windows.Win32.Security.Cryptography.Catalog.CRYPTCATCDF (size: 48)
 */
export interface CRYPTCATCDF {
  /** u32 */
  cbStruct: number;
  /** Windows.Win32.Foundation.HANDLE */
  hFile: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  dwCurFilePos: number;
  /** u32 */
  dwLastMemberOffset: number;
  /** Windows.Win32.Foundation.BOOL */
  fEOF: boolean;
  /** Windows.Win32.Foundation.PWSTR */
  pwszResultDir: string | null | Uint8Array | Uint16Array;
  /** Windows.Win32.Foundation.HANDLE */
  hCATStore: Uint8Array | Deno.PointerValue | null;
}

export const sizeofCRYPTCATCDF = 48;

export function allocCRYPTCATCDF(data?: Partial<CRYPTCATCDF>): Uint8Array {
  const buf = new Uint8Array(sizeofCRYPTCATCDF);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.cbStruct !== undefined) view.setUint32(0, Number(data.cbStruct), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.hFile !== undefined) view.setBigUint64(8, data.hFile === null ? 0n : BigInt(util.toPointer(data.hFile)), true);
  // 0x10: u32
  if (data?.dwCurFilePos !== undefined) view.setUint32(16, Number(data.dwCurFilePos), true);
  // 0x14: u32
  if (data?.dwLastMemberOffset !== undefined) view.setUint32(20, Number(data.dwLastMemberOffset), true);
  // 0x18: i32
  if (data?.fEOF !== undefined) view.setInt32(24, Number(data.fEOF), true);
  // 0x1c: pad4
  // 0x20: buffer
  if (data?.pwszResultDir !== undefined) {
    (buf as any)._f32 = util.pwstrToFfi(data.pwszResultDir);
    view.setBigUint64(32, (buf as any)._f32 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f32)), true);
  }
  // 0x28: pointer
  if (data?.hCATStore !== undefined) view.setBigUint64(40, data.hCATStore === null ? 0n : BigInt(util.toPointer(data.hCATStore)), true);
  return buf;
}

/**
 * Windows.Win32.Security.Cryptography.Catalog.CATALOG_INFO (size: 16)
 */
export interface CATALOG_INFO {
  /** u32 */
  cbStruct: number;
  /** array */
  wszCatalogFile: Deno.PointerValue | null;
}

export const sizeofCATALOG_INFO = 16;

export function allocCATALOG_INFO(data?: Partial<CATALOG_INFO>): Uint8Array {
  const buf = new Uint8Array(sizeofCATALOG_INFO);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.cbStruct !== undefined) view.setUint32(0, Number(data.cbStruct), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.wszCatalogFile !== undefined) view.setBigUint64(8, data.wszCatalogFile === null ? 0n : BigInt(util.toPointer(data.wszCatalogFile)), true);
  return buf;
}

/**
 * Windows.Win32.Security.Cryptography.Catalog.MS_ADDINFO_CATALOGMEMBER (size: 24)
 */
export interface MS_ADDINFO_CATALOGMEMBER {
  /** u32 */
  cbStruct: number;
  /** ptr */
  pStore: Deno.PointerValue | Uint8Array | null;
  /** ptr */
  pMember: Deno.PointerValue | Uint8Array | null;
}

export const sizeofMS_ADDINFO_CATALOGMEMBER = 24;

export function allocMS_ADDINFO_CATALOGMEMBER(data?: Partial<MS_ADDINFO_CATALOGMEMBER>): Uint8Array {
  const buf = new Uint8Array(sizeofMS_ADDINFO_CATALOGMEMBER);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.cbStruct !== undefined) view.setUint32(0, Number(data.cbStruct), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.pStore !== undefined) view.setBigUint64(8, data.pStore === null ? 0n : BigInt(util.toPointer(data.pStore)), true);
  // 0x10: pointer
  if (data?.pMember !== undefined) view.setBigUint64(16, data.pMember === null ? 0n : BigInt(util.toPointer(data.pMember)), true);
  return buf;
}

// Native Libraries

try {
  var libWINTRUST_dll = Deno.dlopen("WINTRUST.dll", {
    CryptCATOpen: {
      parameters: ["buffer", "u32", "usize", "u32", "u32"],
      result: "pointer",
    },
    CryptCATClose: {
      parameters: ["pointer"],
      result: "i32",
    },
    CryptCATStoreFromHandle: {
      parameters: ["pointer"],
      result: "pointer",
    },
    CryptCATHandleFromStore: {
      parameters: ["pointer"],
      result: "pointer",
    },
    CryptCATPersistStore: {
      parameters: ["pointer"],
      result: "i32",
    },
    CryptCATGetCatAttrInfo: {
      parameters: ["pointer", "buffer"],
      result: "pointer",
    },
    CryptCATPutCatAttrInfo: {
      parameters: ["pointer", "buffer", "u32", "u32", "pointer"],
      result: "pointer",
    },
    CryptCATEnumerateCatAttr: {
      parameters: ["pointer", "pointer"],
      result: "pointer",
    },
    CryptCATGetMemberInfo: {
      parameters: ["pointer", "buffer"],
      result: "pointer",
    },
    CryptCATAllocSortedMemberInfo: {
      parameters: ["pointer", "buffer"],
      result: "pointer",
    },
    CryptCATFreeSortedMemberInfo: {
      parameters: ["pointer", "pointer"],
      result: "void",
    },
    CryptCATGetAttrInfo: {
      parameters: ["pointer", "pointer", "buffer"],
      result: "pointer",
    },
    CryptCATPutMemberInfo: {
      parameters: ["pointer", "buffer", "buffer", "pointer", "u32", "u32", "pointer"],
      result: "pointer",
    },
    CryptCATPutAttrInfo: {
      parameters: ["pointer", "pointer", "buffer", "u32", "u32", "pointer"],
      result: "pointer",
    },
    CryptCATEnumerateMember: {
      parameters: ["pointer", "pointer"],
      result: "pointer",
    },
    CryptCATEnumerateAttr: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "pointer",
    },
    CryptCATCDFOpen: {
      parameters: ["buffer", "pointer"],
      result: "pointer",
    },
    CryptCATCDFClose: {
      parameters: ["pointer"],
      result: "i32",
    },
    CryptCATCDFEnumCatAttributes: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "pointer",
    },
    CryptCATCDFEnumMembers: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "pointer",
    },
    CryptCATCDFEnumAttributes: {
      parameters: ["pointer", "pointer", "pointer", "pointer"],
      result: "pointer",
    },
    IsCatalogFile: {
      parameters: ["pointer", "buffer"],
      result: "i32",
    },
    CryptCATAdminAcquireContext: {
      parameters: ["pointer", "pointer", "u32"],
      result: "i32",
    },
    CryptCATAdminAcquireContext2: {
      parameters: ["pointer", "pointer", "buffer", "pointer", "u32"],
      result: "i32",
    },
    CryptCATAdminReleaseContext: {
      parameters: ["isize", "u32"],
      result: "i32",
    },
    CryptCATAdminReleaseCatalogContext: {
      parameters: ["isize", "isize", "u32"],
      result: "i32",
    },
    CryptCATAdminEnumCatalogFromHash: {
      parameters: ["isize", "pointer", "u32", "u32", "pointer"],
      result: "isize",
    },
    CryptCATAdminCalcHashFromFileHandle: {
      parameters: ["pointer", "pointer", "pointer", "u32"],
      result: "i32",
    },
    CryptCATAdminCalcHashFromFileHandle2: {
      parameters: ["isize", "pointer", "pointer", "pointer", "u32"],
      result: "i32",
    },
    CryptCATAdminAddCatalog: {
      parameters: ["isize", "buffer", "buffer", "u32"],
      result: "isize",
    },
    CryptCATAdminRemoveCatalog: {
      parameters: ["isize", "buffer", "u32"],
      result: "i32",
    },
    CryptCATCatalogInfoFromContext: {
      parameters: ["isize", "pointer", "u32"],
      result: "i32",
    },
    CryptCATAdminResolveCatalogPath: {
      parameters: ["isize", "buffer", "pointer", "u32"],
      result: "i32",
    },
    CryptCATAdminPauseServiceForBackup: {
      parameters: ["u32", "i32"],
      result: "i32",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function CryptCATOpen(
  pwszFileName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  fdwOpenFlags: CRYPTCAT_OPEN_FLAGS /* Windows.Win32.Security.Cryptography.Catalog.CRYPTCAT_OPEN_FLAGS */,
  hProv: Deno.PointerValue /* usize */,
  dwPublicVersion: CRYPTCAT_VERSION /* Windows.Win32.Security.Cryptography.Catalog.CRYPTCAT_VERSION */,
  dwEncodingType: number /* u32 */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */ {
  return util.pointerFromFfi(libWINTRUST_dll.CryptCATOpen(util.pwstrToFfi(pwszFileName), fdwOpenFlags, hProv, dwPublicVersion, dwEncodingType));
}

export function CryptCATClose(
  hCatalog: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWINTRUST_dll.CryptCATClose(util.toPointer(hCatalog)));
}

export function CryptCATStoreFromHandle(
  hCatalog: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
): Deno.PointerValue | null /* ptr */ {
  return util.pointerFromFfi(libWINTRUST_dll.CryptCATStoreFromHandle(util.toPointer(hCatalog)));
}

export function CryptCATHandleFromStore(
  pCatStore: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */ {
  return util.pointerFromFfi(libWINTRUST_dll.CryptCATHandleFromStore(util.toPointer(pCatStore)));
}

export function CryptCATPersistStore(
  hCatalog: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWINTRUST_dll.CryptCATPersistStore(util.toPointer(hCatalog)));
}

export function CryptCATGetCatAttrInfo(
  hCatalog: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  pwszReferenceTag: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): Deno.PointerValue | null /* ptr */ {
  return util.pointerFromFfi(libWINTRUST_dll.CryptCATGetCatAttrInfo(util.toPointer(hCatalog), util.pwstrToFfi(pwszReferenceTag)));
}

export function CryptCATPutCatAttrInfo(
  hCatalog: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  pwszReferenceTag: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  dwAttrTypeAndAction: number /* u32 */,
  cbData: number /* u32 */,
  pbData: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* ptr */ {
  return util.pointerFromFfi(libWINTRUST_dll.CryptCATPutCatAttrInfo(util.toPointer(hCatalog), util.pwstrToFfi(pwszReferenceTag), dwAttrTypeAndAction, cbData, util.toPointer(pbData)));
}

export function CryptCATEnumerateCatAttr(
  hCatalog: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  pPrevAttr: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* ptr */ {
  return util.pointerFromFfi(libWINTRUST_dll.CryptCATEnumerateCatAttr(util.toPointer(hCatalog), util.toPointer(pPrevAttr)));
}

export function CryptCATGetMemberInfo(
  hCatalog: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  pwszReferenceTag: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): Deno.PointerValue | null /* ptr */ {
  return util.pointerFromFfi(libWINTRUST_dll.CryptCATGetMemberInfo(util.toPointer(hCatalog), util.pwstrToFfi(pwszReferenceTag)));
}

export function CryptCATAllocSortedMemberInfo(
  hCatalog: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  pwszReferenceTag: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): Deno.PointerValue | null /* ptr */ {
  return util.pointerFromFfi(libWINTRUST_dll.CryptCATAllocSortedMemberInfo(util.toPointer(hCatalog), util.pwstrToFfi(pwszReferenceTag)));
}

export function CryptCATFreeSortedMemberInfo(
  hCatalog: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  pCatMember: Deno.PointerValue | Uint8Array | null /* ptr */,
): void /* void */ {
  return libWINTRUST_dll.CryptCATFreeSortedMemberInfo(util.toPointer(hCatalog), util.toPointer(pCatMember));
}

export function CryptCATGetAttrInfo(
  hCatalog: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  pCatMember: Deno.PointerValue | Uint8Array | null /* ptr */,
  pwszReferenceTag: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): Deno.PointerValue | null /* ptr */ {
  return util.pointerFromFfi(libWINTRUST_dll.CryptCATGetAttrInfo(util.toPointer(hCatalog), util.toPointer(pCatMember), util.pwstrToFfi(pwszReferenceTag)));
}

export function CryptCATPutMemberInfo(
  hCatalog: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  pwszFileName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  pwszReferenceTag: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  pgSubjectType: Deno.PointerValue | Uint8Array | null /* ptr */,
  dwCertVersion: number /* u32 */,
  cbSIPIndirectData: number /* u32 */,
  pbSIPIndirectData: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* ptr */ {
  return util.pointerFromFfi(libWINTRUST_dll.CryptCATPutMemberInfo(util.toPointer(hCatalog), util.pwstrToFfi(pwszFileName), util.pwstrToFfi(pwszReferenceTag), util.toPointer(pgSubjectType), dwCertVersion, cbSIPIndirectData, util.toPointer(pbSIPIndirectData)));
}

export function CryptCATPutAttrInfo(
  hCatalog: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  pCatMember: Deno.PointerValue | Uint8Array | null /* ptr */,
  pwszReferenceTag: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  dwAttrTypeAndAction: number /* u32 */,
  cbData: number /* u32 */,
  pbData: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* ptr */ {
  return util.pointerFromFfi(libWINTRUST_dll.CryptCATPutAttrInfo(util.toPointer(hCatalog), util.toPointer(pCatMember), util.pwstrToFfi(pwszReferenceTag), dwAttrTypeAndAction, cbData, util.toPointer(pbData)));
}

export function CryptCATEnumerateMember(
  hCatalog: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  pPrevMember: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* ptr */ {
  return util.pointerFromFfi(libWINTRUST_dll.CryptCATEnumerateMember(util.toPointer(hCatalog), util.toPointer(pPrevMember)));
}

export function CryptCATEnumerateAttr(
  hCatalog: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  pCatMember: Deno.PointerValue | Uint8Array | null /* ptr */,
  pPrevAttr: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* ptr */ {
  return util.pointerFromFfi(libWINTRUST_dll.CryptCATEnumerateAttr(util.toPointer(hCatalog), util.toPointer(pCatMember), util.toPointer(pPrevAttr)));
}

export function CryptCATCDFOpen(
  pwszFilePath: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  pfnParseError: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Security.Cryptography.Catalog.PFN_CDF_PARSE_ERROR_CALLBACK */,
): Deno.PointerValue | null /* ptr */ {
  return util.pointerFromFfi(libWINTRUST_dll.CryptCATCDFOpen(util.pwstrToFfi(pwszFilePath), util.toPointer(pfnParseError)));
}

export function CryptCATCDFClose(
  pCDF: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWINTRUST_dll.CryptCATCDFClose(util.toPointer(pCDF)));
}

export function CryptCATCDFEnumCatAttributes(
  pCDF: Deno.PointerValue | Uint8Array | null /* ptr */,
  pPrevAttr: Deno.PointerValue | Uint8Array | null /* ptr */,
  pfnParseError: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Security.Cryptography.Catalog.PFN_CDF_PARSE_ERROR_CALLBACK */,
): Deno.PointerValue | null /* ptr */ {
  return util.pointerFromFfi(libWINTRUST_dll.CryptCATCDFEnumCatAttributes(util.toPointer(pCDF), util.toPointer(pPrevAttr), util.toPointer(pfnParseError)));
}

export function CryptCATCDFEnumMembers(
  pCDF: Deno.PointerValue | Uint8Array | null /* ptr */,
  pPrevMember: Deno.PointerValue | Uint8Array | null /* ptr */,
  pfnParseError: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Security.Cryptography.Catalog.PFN_CDF_PARSE_ERROR_CALLBACK */,
): Deno.PointerValue | null /* ptr */ {
  return util.pointerFromFfi(libWINTRUST_dll.CryptCATCDFEnumMembers(util.toPointer(pCDF), util.toPointer(pPrevMember), util.toPointer(pfnParseError)));
}

export function CryptCATCDFEnumAttributes(
  pCDF: Deno.PointerValue | Uint8Array | null /* ptr */,
  pMember: Deno.PointerValue | Uint8Array | null /* ptr */,
  pPrevAttr: Deno.PointerValue | Uint8Array | null /* ptr */,
  pfnParseError: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Security.Cryptography.Catalog.PFN_CDF_PARSE_ERROR_CALLBACK */,
): Deno.PointerValue | null /* ptr */ {
  return util.pointerFromFfi(libWINTRUST_dll.CryptCATCDFEnumAttributes(util.toPointer(pCDF), util.toPointer(pMember), util.toPointer(pPrevAttr), util.toPointer(pfnParseError)));
}

export function IsCatalogFile(
  hFile: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  pwszFileName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWINTRUST_dll.IsCatalogFile(util.toPointer(hFile), util.pwstrToFfi(pwszFileName)));
}

export function CryptCATAdminAcquireContext(
  phCatAdmin: Deno.PointerValue | Uint8Array | null /* ptr */,
  pgSubsystem: Deno.PointerValue | Uint8Array | null /* ptr */,
  dwFlags: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWINTRUST_dll.CryptCATAdminAcquireContext(util.toPointer(phCatAdmin), util.toPointer(pgSubsystem), dwFlags));
}

export function CryptCATAdminAcquireContext2(
  phCatAdmin: Deno.PointerValue | Uint8Array | null /* ptr */,
  pgSubsystem: Deno.PointerValue | Uint8Array | null /* ptr */,
  pwszHashAlgorithm: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  pStrongHashPolicy: Deno.PointerValue | Uint8Array | null /* ptr */,
  dwFlags: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWINTRUST_dll.CryptCATAdminAcquireContext2(util.toPointer(phCatAdmin), util.toPointer(pgSubsystem), util.pwstrToFfi(pwszHashAlgorithm), util.toPointer(pStrongHashPolicy), dwFlags));
}

export function CryptCATAdminReleaseContext(
  hCatAdmin: Deno.PointerValue /* isize */,
  dwFlags: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWINTRUST_dll.CryptCATAdminReleaseContext(hCatAdmin, dwFlags));
}

export function CryptCATAdminReleaseCatalogContext(
  hCatAdmin: Deno.PointerValue /* isize */,
  hCatInfo: Deno.PointerValue /* isize */,
  dwFlags: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWINTRUST_dll.CryptCATAdminReleaseCatalogContext(hCatAdmin, hCatInfo, dwFlags));
}

export function CryptCATAdminEnumCatalogFromHash(
  hCatAdmin: Deno.PointerValue /* isize */,
  pbHash: Deno.PointerValue | Uint8Array | null /* ptr */,
  cbHash: number /* u32 */,
  dwFlags: number /* u32 */,
  phPrevCatInfo: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue /* isize */ {
  return libWINTRUST_dll.CryptCATAdminEnumCatalogFromHash(hCatAdmin, util.toPointer(pbHash), cbHash, dwFlags, util.toPointer(phPrevCatInfo));
}

export function CryptCATAdminCalcHashFromFileHandle(
  hFile: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  pcbHash: Deno.PointerValue | Uint8Array | null /* ptr */,
  pbHash: Deno.PointerValue | Uint8Array | null /* ptr */,
  dwFlags: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWINTRUST_dll.CryptCATAdminCalcHashFromFileHandle(util.toPointer(hFile), util.toPointer(pcbHash), util.toPointer(pbHash), dwFlags));
}

export function CryptCATAdminCalcHashFromFileHandle2(
  hCatAdmin: Deno.PointerValue /* isize */,
  hFile: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  pcbHash: Deno.PointerValue | Uint8Array | null /* ptr */,
  pbHash: Deno.PointerValue | Uint8Array | null /* ptr */,
  dwFlags: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWINTRUST_dll.CryptCATAdminCalcHashFromFileHandle2(hCatAdmin, util.toPointer(hFile), util.toPointer(pcbHash), util.toPointer(pbHash), dwFlags));
}

export function CryptCATAdminAddCatalog(
  hCatAdmin: Deno.PointerValue /* isize */,
  pwszCatalogFile: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  pwszSelectBaseName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  dwFlags: number /* u32 */,
): Deno.PointerValue /* isize */ {
  return libWINTRUST_dll.CryptCATAdminAddCatalog(hCatAdmin, util.pwstrToFfi(pwszCatalogFile), util.pwstrToFfi(pwszSelectBaseName), dwFlags);
}

export function CryptCATAdminRemoveCatalog(
  hCatAdmin: Deno.PointerValue /* isize */,
  pwszCatalogFile: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  dwFlags: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWINTRUST_dll.CryptCATAdminRemoveCatalog(hCatAdmin, util.pwstrToFfi(pwszCatalogFile), dwFlags));
}

export function CryptCATCatalogInfoFromContext(
  hCatInfo: Deno.PointerValue /* isize */,
  psCatInfo: Deno.PointerValue | Uint8Array | null /* ptr */,
  dwFlags: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWINTRUST_dll.CryptCATCatalogInfoFromContext(hCatInfo, util.toPointer(psCatInfo), dwFlags));
}

export function CryptCATAdminResolveCatalogPath(
  hCatAdmin: Deno.PointerValue /* isize */,
  pwszCatalogFile: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  psCatInfo: Deno.PointerValue | Uint8Array | null /* ptr */,
  dwFlags: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWINTRUST_dll.CryptCATAdminResolveCatalogPath(hCatAdmin, util.pwstrToFfi(pwszCatalogFile), util.toPointer(psCatInfo), dwFlags));
}

export function CryptCATAdminPauseServiceForBackup(
  dwFlags: number /* u32 */,
  fResume: boolean /* Windows.Win32.Foundation.BOOL */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWINTRUST_dll.CryptCATAdminPauseServiceForBackup(dwFlags, util.boolToFfi(fResume)));
}

