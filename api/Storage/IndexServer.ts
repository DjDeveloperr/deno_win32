/// Auto-generated by Deno Win32: Windows.Win32.Storage.IndexServer.Apis

import * as util from "../../util.ts";

// Enums
export type PROPSPEC_KIND = number;
export type IFILTER_INIT = number;
export type IFILTER_FLAGS = number;
export type CHUNKSTATE = number;
export type CHUNK_BREAKTYPE = number;
export type WORDREP_BREAK_TYPE = number;
export type DBKINDENUM = number;

// Constants
export const CI_VERSION_WDS30 = 258;
export const CI_VERSION_WDS40 = 265;
export const CI_VERSION_WIN70 = 1792;
export const CINULLCATALOG = `::_noindex_::`;
export const CIADMIN = `::_nodocstore_::`;
export const LIFF_LOAD_DEFINED_FILTER = 1;
export const LIFF_IMPLEMENT_TEXT_FILTER_FALLBACK_POLICY = 2;
export const LIFF_FORCE_TEXT_FILTER_FALLBACK = 3;
export const PID_FILENAME = 100;
export const DBPROP_CI_CATALOG_NAME = 2;
export const DBPROP_CI_INCLUDE_SCOPES = 3;
export const DBPROP_CI_DEPTHS = 4;
export const DBPROP_CI_SCOPE_FLAGS = 4;
export const DBPROP_CI_EXCLUDE_SCOPES = 5;
export const DBPROP_CI_SECURITY_ID = 6;
export const DBPROP_CI_QUERY_TYPE = 7;
export const DBPROP_CI_PROVIDER = 8;
export const CI_PROVIDER_MSSEARCH = 1;
export const CI_PROVIDER_INDEXING_SERVICE = 2;
export const CI_PROVIDER_ALL = 4294967295;
export const DBPROP_DEFAULT_EQUALS_BEHAVIOR = 2;
export const DBPROP_USECONTENTINDEX = 2;
export const DBPROP_DEFERNONINDEXEDTRIMMING = 3;
export const DBPROP_USEEXTENDEDDBTYPES = 4;
export const DBPROP_IGNORENOISEONLYCLAUSES = 5;
export const DBPROP_GENERICOPTIONS_STRING = 6;
export const DBPROP_FIRSTROWS = 7;
export const DBPROP_DEFERCATALOGVERIFICATION = 8;
export const DBPROP_CATALOGLISTID = 9;
export const DBPROP_GENERATEPARSETREE = 10;
export const DBPROP_APPLICATION_NAME = 11;
export const DBPROP_FREETEXTANYTERM = 12;
export const DBPROP_FREETEXTUSESTEMMING = 13;
export const DBPROP_IGNORESBRI = 14;
export const DBPROP_DONOTCOMPUTEEXPENSIVEPROPS = 15;
export const DBPROP_ENABLEROWSETEVENTS = 16;
export const DBPROP_MACHINE = 2;
export const DBPROP_CLIENT_CLSID = 3;
export const MSIDXSPROP_ROWSETQUERYSTATUS = 2;
export const MSIDXSPROP_COMMAND_LOCALE_STRING = 3;
export const MSIDXSPROP_QUERY_RESTRICTION = 4;
export const MSIDXSPROP_PARSE_TREE = 5;
export const MSIDXSPROP_MAX_RANK = 6;
export const MSIDXSPROP_RESULTS_FOUND = 7;
export const MSIDXSPROP_WHEREID = 8;
export const MSIDXSPROP_SERVER_VERSION = 9;
export const MSIDXSPROP_SERVER_WINVER_MAJOR = 10;
export const MSIDXSPROP_SERVER_WINVER_MINOR = 11;
export const MSIDXSPROP_SERVER_NLSVERSION = 12;
export const MSIDXSPROP_SERVER_NLSVER_DEFINED = 13;
export const MSIDXSPROP_SAME_SORTORDER_USED = 14;
export const STAT_BUSY = 0;
export const STAT_ERROR = 1;
export const STAT_DONE = 2;
export const STAT_REFRESH = 3;
export const STAT_PARTIAL_SCOPE = 8;
export const STAT_NOISE_WORDS = 16;
export const STAT_CONTENT_OUT_OF_DATE = 32;
export const STAT_REFRESH_INCOMPLETE = 64;
export const STAT_CONTENT_QUERY_INCOMPLETE = 128;
export const STAT_TIME_LIMIT_EXCEEDED = 256;
export const STAT_SHARING_VIOLATION = 512;
export const STAT_MISSING_RELDOC = 1024;
export const STAT_MISSING_PROP_IN_RELDOC = 2048;
export const STAT_RELDOC_ACCESS_DENIED = 4096;
export const STAT_COALESCE_COMP_ALL_NOISE = 8192;
export const QUERY_SHALLOW = 0;
export const QUERY_DEEP = 1;
export const QUERY_PHYSICAL_PATH = 0;
export const QUERY_VIRTUAL_PATH = 2;
export const PROPID_QUERY_WORKID = 5;
export const PROPID_QUERY_UNFILTERED = 7;
export const PROPID_QUERY_VIRTUALPATH = 9;
export const PROPID_QUERY_LASTSEENTIME = 10;
export const CICAT_STOPPED = 1;
export const CICAT_READONLY = 2;
export const CICAT_WRITABLE = 4;
export const CICAT_NO_QUERY = 8;
export const CICAT_GET_STATE = 16;
export const CICAT_ALL_OPENED = 32;
export const CI_STATE_SHADOW_MERGE = 1;
export const CI_STATE_MASTER_MERGE = 2;
export const CI_STATE_CONTENT_SCAN_REQUIRED = 4;
export const CI_STATE_ANNEALING_MERGE = 8;
export const CI_STATE_SCANNING = 16;
export const CI_STATE_RECOVERING = 32;
export const CI_STATE_INDEX_MIGRATION_MERGE = 64;
export const CI_STATE_LOW_MEMORY = 128;
export const CI_STATE_HIGH_IO = 256;
export const CI_STATE_MASTER_MERGE_PAUSED = 512;
export const CI_STATE_READ_ONLY = 1024;
export const CI_STATE_BATTERY_POWER = 2048;
export const CI_STATE_USER_ACTIVE = 4096;
export const CI_STATE_STARTING = 8192;
export const CI_STATE_READING_USNS = 16384;
export const CI_STATE_DELETION_MERGE = 32768;
export const CI_STATE_LOW_DISK = 65536;
export const CI_STATE_HIGH_CPU = 131072;
export const CI_STATE_BATTERY_POLICY = 262144;
export const GENERATE_METHOD_EXACT = 0;
export const GENERATE_METHOD_PREFIX = 1;
export const GENERATE_METHOD_INFLECT = 2;
export const SCOPE_FLAG_MASK = 255;
export const SCOPE_FLAG_INCLUDE = 1;
export const SCOPE_FLAG_DEEP = 2;
export const SCOPE_TYPE_MASK = 4294967040;
export const SCOPE_TYPE_WINPATH = 256;
export const SCOPE_TYPE_VPATH = 512;
export const PROPID_QUERY_RANKVECTOR = 2;
export const PROPID_QUERY_RANK = 3;
export const PROPID_QUERY_HITCOUNT = 4;
export const PROPID_QUERY_ALL = 6;
export const PROPID_STG_CONTENTS = 19;
export const VECTOR_RANK_MIN = 0;
export const VECTOR_RANK_MAX = 1;
export const VECTOR_RANK_INNER = 2;
export const VECTOR_RANK_DICE = 3;
export const VECTOR_RANK_JACCARD = 4;
export const DBSETFUNC_NONE = 0;
export const DBSETFUNC_ALL = 1;
export const DBSETFUNC_DISTINCT = 2;
export const PROXIMITY_UNIT_WORD = 0;
export const PROXIMITY_UNIT_SENTENCE = 1;
export const PROXIMITY_UNIT_PARAGRAPH = 2;
export const PROXIMITY_UNIT_CHAPTER = 3;
export const NOT_AN_ERROR = 1152921521787240448n;
export const FILTER_E_END_OF_CHUNKS = 294705419455305472n;
export const FILTER_E_NO_MORE_TEXT = 294706518966933249n;
export const FILTER_E_NO_MORE_VALUES = 294707618478561026n;
export const FILTER_E_ACCESS = 294708717990188803n;
export const FILTER_W_MONIKER_CLIPPED = 294709815354332932n;
export const FILTER_E_NO_TEXT = 294710917013444357n;
export const FILTER_E_NO_VALUES = 294712016525072134n;
export const FILTER_E_EMBEDDING_UNAVAILABLE = 294713116036699911n;
export const FILTER_E_LINK_UNAVAILABLE = 294714215548327688n;
export const FILTER_S_LAST_TEXT = 294715312912471817n;
export const FILTER_S_LAST_VALUES = 294716412424099594n;
export const FILTER_E_PASSWORD = 294717514083211019n;
export const FILTER_E_UNKNOWNFORMAT = 1225823577262266124n;
export const PRSPEC_LPWSTR = 0;
export const PRSPEC_PROPID = 1;
export const IFILTER_INIT_CANON_PARAGRAPHS = 1;
export const IFILTER_INIT_HARD_LINE_BREAKS = 2;
export const IFILTER_INIT_CANON_HYPHENS = 4;
export const IFILTER_INIT_CANON_SPACES = 8;
export const IFILTER_INIT_APPLY_INDEX_ATTRIBUTES = 16;
export const IFILTER_INIT_APPLY_OTHER_ATTRIBUTES = 32;
export const IFILTER_INIT_APPLY_CRAWL_ATTRIBUTES = 256;
export const IFILTER_INIT_INDEXING_ONLY = 64;
export const IFILTER_INIT_SEARCH_LINKS = 128;
export const IFILTER_INIT_FILTER_OWNED_VALUE_OK = 512;
export const IFILTER_INIT_FILTER_AGGRESSIVE_BREAK = 1024;
export const IFILTER_INIT_DISABLE_EMBEDDED = 2048;
export const IFILTER_INIT_EMIT_FORMATTING = 4096;
export const IFILTER_FLAGS_OLE_PROPERTIES = 1;
export const CHUNK_TEXT = 1;
export const CHUNK_VALUE = 2;
export const CHUNK_FILTER_OWNED_VALUE = 4;
export const CHUNK_NO_BREAK = 0;
export const CHUNK_EOW = 1;
export const CHUNK_EOS = 2;
export const CHUNK_EOP = 3;
export const CHUNK_EOC = 4;
export const WORDREP_BREAK_EOW = 0;
export const WORDREP_BREAK_EOS = 1;
export const WORDREP_BREAK_EOP = 2;
export const WORDREP_BREAK_EOC = 3;
export const DBKIND_GUID_NAME = 0;
export const DBKIND_GUID_PROPID = 1;
export const DBKIND_NAME = 2;
export const DBKIND_PGUID_NAME = 3;
export const DBKIND_PGUID_PROPID = 4;
export const DBKIND_PROPID = 5;
export const DBKIND_GUID = 6;

// Structs

/**
 * Windows.Win32.Storage.IndexServer.CI_STATE (size: 64)
 */
export interface CI_STATE {
  /** u32 */
  cbStruct: number;
  /** u32 */
  cWordList: number;
  /** u32 */
  cPersistentIndex: number;
  /** u32 */
  cQueries: number;
  /** u32 */
  cDocuments: number;
  /** u32 */
  cFreshTest: number;
  /** u32 */
  dwMergeProgress: number;
  /** u32 */
  eState: number;
  /** u32 */
  cFilteredDocuments: number;
  /** u32 */
  cTotalDocuments: number;
  /** u32 */
  cPendingScans: number;
  /** u32 */
  dwIndexSize: number;
  /** u32 */
  cUniqueKeys: number;
  /** u32 */
  cSecQDocuments: number;
  /** u32 */
  dwPropCacheSize: number;
}

export const sizeofCI_STATE = 64;

export function allocCI_STATE(data?: Partial<CI_STATE>): Uint8Array {
  const buf = new Uint8Array(sizeofCI_STATE);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.cbStruct !== undefined) view.setUint32(0, Number(data.cbStruct), true);
  // 0x04: u32
  if (data?.cWordList !== undefined) view.setUint32(4, Number(data.cWordList), true);
  // 0x08: u32
  if (data?.cPersistentIndex !== undefined) view.setUint32(8, Number(data.cPersistentIndex), true);
  // 0x0c: u32
  if (data?.cQueries !== undefined) view.setUint32(12, Number(data.cQueries), true);
  // 0x10: u32
  if (data?.cDocuments !== undefined) view.setUint32(16, Number(data.cDocuments), true);
  // 0x14: u32
  if (data?.cFreshTest !== undefined) view.setUint32(20, Number(data.cFreshTest), true);
  // 0x18: u32
  if (data?.dwMergeProgress !== undefined) view.setUint32(24, Number(data.dwMergeProgress), true);
  // 0x1c: u32
  if (data?.eState !== undefined) view.setUint32(28, Number(data.eState), true);
  // 0x20: u32
  if (data?.cFilteredDocuments !== undefined) view.setUint32(32, Number(data.cFilteredDocuments), true);
  // 0x24: u32
  if (data?.cTotalDocuments !== undefined) view.setUint32(36, Number(data.cTotalDocuments), true);
  // 0x28: u32
  if (data?.cPendingScans !== undefined) view.setUint32(40, Number(data.cPendingScans), true);
  // 0x2c: u32
  if (data?.dwIndexSize !== undefined) view.setUint32(44, Number(data.dwIndexSize), true);
  // 0x30: u32
  if (data?.cUniqueKeys !== undefined) view.setUint32(48, Number(data.cUniqueKeys), true);
  // 0x34: u32
  if (data?.cSecQDocuments !== undefined) view.setUint32(52, Number(data.cSecQDocuments), true);
  // 0x38: u32
  if (data?.dwPropCacheSize !== undefined) view.setUint32(56, Number(data.dwPropCacheSize), true);
  // 0x3c: pad4
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
 * Windows.Win32.System.Com.StructuredStorage.PROPSPEC (size: 16)
 */
export interface PROPSPEC {
  /** Windows.Win32.System.Com.StructuredStorage.PROPSPEC_KIND */
  ulKind: PROPSPEC_KIND;
  /** _Anonymous_e__Union */
  Anonymous: Uint8Array | Deno.PointerValue | null;
}

export const sizeofPROPSPEC = 16;

export function allocPROPSPEC(data?: Partial<PROPSPEC>): Uint8Array {
  const buf = new Uint8Array(sizeofPROPSPEC);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.ulKind !== undefined) view.setUint32(0, Number(data.ulKind), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.Anonymous !== undefined) view.setBigUint64(8, data.Anonymous === null ? 0n : BigInt(util.toPointer(data.Anonymous)), true);
  return buf;
}

/**
 * Windows.Win32.Storage.IndexServer.FULLPROPSPEC (size: 16)
 */
export interface FULLPROPSPEC {
  /** System.Guid */
  guidPropSet: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.System.Com.StructuredStorage.PROPSPEC */
  psProperty: Uint8Array | Deno.PointerValue | null;
}

export const sizeofFULLPROPSPEC = 16;

export function allocFULLPROPSPEC(data?: Partial<FULLPROPSPEC>): Uint8Array {
  const buf = new Uint8Array(sizeofFULLPROPSPEC);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.guidPropSet !== undefined) view.setBigUint64(0, data.guidPropSet === null ? 0n : BigInt(util.toPointer(data.guidPropSet)), true);
  // 0x08: pointer
  if (data?.psProperty !== undefined) view.setBigUint64(8, data.psProperty === null ? 0n : BigInt(util.toPointer(data.psProperty)), true);
  return buf;
}

/**
 * Windows.Win32.Storage.IndexServer.FILTERREGION (size: 16)
 */
export interface FILTERREGION {
  /** u32 */
  idChunk: number;
  /** u32 */
  cwcStart: number;
  /** u32 */
  cwcExtent: number;
}

export const sizeofFILTERREGION = 16;

export function allocFILTERREGION(data?: Partial<FILTERREGION>): Uint8Array {
  const buf = new Uint8Array(sizeofFILTERREGION);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.idChunk !== undefined) view.setUint32(0, Number(data.idChunk), true);
  // 0x04: u32
  if (data?.cwcStart !== undefined) view.setUint32(4, Number(data.cwcStart), true);
  // 0x08: u32
  if (data?.cwcExtent !== undefined) view.setUint32(8, Number(data.cwcExtent), true);
  // 0x0c: pad4
  return buf;
}

/**
 * Windows.Win32.Storage.IndexServer.STAT_CHUNK (size: 40)
 */
export interface STAT_CHUNK {
  /** u32 */
  idChunk: number;
  /** Windows.Win32.Storage.IndexServer.CHUNK_BREAKTYPE */
  breakType: CHUNK_BREAKTYPE;
  /** Windows.Win32.Storage.IndexServer.CHUNKSTATE */
  flags: CHUNKSTATE;
  /** u32 */
  locale: number;
  /** Windows.Win32.Storage.IndexServer.FULLPROPSPEC */
  attribute: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  idChunkSource: number;
  /** u32 */
  cwcStartSource: number;
  /** u32 */
  cwcLenSource: number;
}

export const sizeofSTAT_CHUNK = 40;

export function allocSTAT_CHUNK(data?: Partial<STAT_CHUNK>): Uint8Array {
  const buf = new Uint8Array(sizeofSTAT_CHUNK);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.idChunk !== undefined) view.setUint32(0, Number(data.idChunk), true);
  // 0x04: i32
  if (data?.breakType !== undefined) view.setInt32(4, Number(data.breakType), true);
  // 0x08: i32
  if (data?.flags !== undefined) view.setInt32(8, Number(data.flags), true);
  // 0x0c: u32
  if (data?.locale !== undefined) view.setUint32(12, Number(data.locale), true);
  // 0x10: pointer
  if (data?.attribute !== undefined) view.setBigUint64(16, data.attribute === null ? 0n : BigInt(util.toPointer(data.attribute)), true);
  // 0x18: u32
  if (data?.idChunkSource !== undefined) view.setUint32(24, Number(data.idChunkSource), true);
  // 0x1c: u32
  if (data?.cwcStartSource !== undefined) view.setUint32(28, Number(data.cwcStartSource), true);
  // 0x20: u32
  if (data?.cwcLenSource !== undefined) view.setUint32(32, Number(data.cwcLenSource), true);
  // 0x24: pad4
  return buf;
}

/**
 * _uGuid_e__Union (size: 16)
 */
export interface _uGuid_e__Union {
  /** System.Guid */
  guid: Uint8Array | Deno.PointerValue | null;
  /** ptr */
  pguid: Deno.PointerValue | Uint8Array | null;
}

export const sizeof_uGuid_e__Union = 16;

export function alloc_uGuid_e__Union(data?: Partial<_uGuid_e__Union>): Uint8Array {
  const buf = new Uint8Array(sizeof_uGuid_e__Union);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.guid !== undefined) view.setBigUint64(0, data.guid === null ? 0n : BigInt(util.toPointer(data.guid)), true);
  // 0x08: pointer
  if (data?.pguid !== undefined) view.setBigUint64(8, data.pguid === null ? 0n : BigInt(util.toPointer(data.pguid)), true);
  return buf;
}

export type PWSTR = Deno.PointerValue | Uint8Array | null;

/**
 * _uName_e__Union (size: 16)
 */
export interface _uName_e__Union {
  /** Windows.Win32.Foundation.PWSTR */
  pwszName: string | null | Uint8Array | Uint16Array;
  /** u32 */
  ulPropid: number;
}

export const sizeof_uName_e__Union = 16;

export function alloc_uName_e__Union(data?: Partial<_uName_e__Union>): Uint8Array {
  const buf = new Uint8Array(sizeof_uName_e__Union);
  const view = new DataView(buf.buffer);
  // 0x00: buffer
  if (data?.pwszName !== undefined) {
    (buf as any)._f0 = util.pwstrToFfi(data.pwszName);
    view.setBigUint64(0, (buf as any)._f0 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f0)), true);
  }
  // 0x08: u32
  if (data?.ulPropid !== undefined) view.setUint32(8, Number(data.ulPropid), true);
  // 0x0c: pad4
  return buf;
}

/**
 * Windows.Win32.Storage.IndexServer.DBID (size: 24)
 */
export interface DBID {
  /** _uGuid_e__Union */
  uGuid: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  eKind: number;
  /** _uName_e__Union */
  uName: Uint8Array | Deno.PointerValue | null;
}

export const sizeofDBID = 24;

export function allocDBID(data?: Partial<DBID>): Uint8Array {
  const buf = new Uint8Array(sizeofDBID);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.uGuid !== undefined) view.setBigUint64(0, data.uGuid === null ? 0n : BigInt(util.toPointer(data.uGuid)), true);
  // 0x08: u32
  if (data?.eKind !== undefined) view.setUint32(8, Number(data.eKind), true);
  // 0x0c: pad4
  // 0x10: pointer
  if (data?.uName !== undefined) view.setBigUint64(16, data.uName === null ? 0n : BigInt(util.toPointer(data.uName)), true);
  return buf;
}

export type HRESULT = number;

// Native Libraries

try {
  var libquery_dll = Deno.dlopen("query.dll", {
    LoadIFilter: {
      parameters: ["buffer", "pointer", "pointer"],
      result: "pointer",
    },
    LoadIFilterEx: {
      parameters: ["buffer", "u32", "pointer", "pointer"],
      result: "pointer",
    },
    BindIFilterFromStorage: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "pointer",
    },
    BindIFilterFromStream: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "pointer",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function LoadIFilter(
  pwcsPath: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  pUnkOuter: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.Com.IUnknown */,
  ppIUnk: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libquery_dll.LoadIFilter(util.pwstrToFfi(pwcsPath), util.toPointer(pUnkOuter), util.toPointer(ppIUnk)));
}

export function LoadIFilterEx(
  pwcsPath: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  dwFlags: number /* u32 */,
  riid: Deno.PointerValue | Uint8Array | null /* ptr */,
  ppIUnk: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libquery_dll.LoadIFilterEx(util.pwstrToFfi(pwcsPath), dwFlags, util.toPointer(riid), util.toPointer(ppIUnk)));
}

export function BindIFilterFromStorage(
  pStg: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.Com.StructuredStorage.IStorage */,
  pUnkOuter: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.Com.IUnknown */,
  ppIUnk: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libquery_dll.BindIFilterFromStorage(util.toPointer(pStg), util.toPointer(pUnkOuter), util.toPointer(ppIUnk)));
}

export function BindIFilterFromStream(
  pStm: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.Com.IStream */,
  pUnkOuter: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.Com.IUnknown */,
  ppIUnk: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libquery_dll.BindIFilterFromStream(util.toPointer(pStm), util.toPointer(pUnkOuter), util.toPointer(ppIUnk)));
}

