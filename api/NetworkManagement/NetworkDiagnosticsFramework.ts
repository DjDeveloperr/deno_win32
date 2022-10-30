/// Auto-generated by Deno Win32: Windows.Win32.NetworkManagement.NetworkDiagnosticsFramework.Apis

import * as util from "../../util.ts";

// Enums
export type ATTRIBUTE_TYPE = number;
export type REPAIR_SCOPE = number;
export type REPAIR_RISK = number;
export type UI_INFO_TYPE = number;
export type DIAGNOSIS_STATUS = number;
export type REPAIR_STATUS = number;
export type PROBLEM_TYPE = number;

// Constants
export const NDF_ERROR_START = 63744;
export const NDF_E_LENGTH_EXCEEDED = 646549140343945472n;
export const NDF_E_NOHELPERCLASS = 646550239855573249n;
export const NDF_E_CANCELLED = 646552438878828802n;
export const NDF_E_DISABLED = 646553538390456580n;
export const NDF_E_BAD_PARAM = 646554637902084357n;
export const NDF_E_VALIDATION = 646555737413712134n;
export const NDF_E_UNKNOWN = 646556836925339911n;
export const NDF_E_PROBLEM_PRESENT = 1226105060829231368n;
export const RF_WORKAROUND = 536870912;
export const RF_USER_ACTION = 268435456;
export const RF_USER_CONFIRMATION = 134217728;
export const RF_INFORMATION_ONLY = 33554432;
export const RF_UI_ONLY = 16777216;
export const RF_SHOW_EVENTS = 8388608;
export const RF_VALIDATE_HELPTOPIC = 4194304;
export const RF_REPRO = 2097152;
export const RF_CONTACT_ADMIN = 131072;
export const RF_RESERVED = 1073741824;
export const RF_RESERVED_CA = 2147483648;
export const RF_RESERVED_LNI = 65536;
export const RCF_ISLEAF = 1;
export const RCF_ISCONFIRMED = 2;
export const RCF_ISTHIRDPARTY = 4;
export const DF_IMPERSONATION = 2147483648;
export const DF_TRACELESS = 1073741824;
export const NDF_INBOUND_FLAG_EDGETRAVERSAL = 1;
export const NDF_INBOUND_FLAG_HEALTHCHECK = 2;
export const NDF_ADD_CAPTURE_TRACE = 1;
export const NDF_APPLY_INCLUSION_LIST_FILTER = 2;
export const AT_INVALID = 0;
export const AT_BOOLEAN = 1;
export const AT_INT8 = 2;
export const AT_UINT8 = 3;
export const AT_INT16 = 4;
export const AT_UINT16 = 5;
export const AT_INT32 = 6;
export const AT_UINT32 = 7;
export const AT_INT64 = 8;
export const AT_UINT64 = 9;
export const AT_STRING = 10;
export const AT_GUID = 11;
export const AT_LIFE_TIME = 12;
export const AT_SOCKADDR = 13;
export const AT_OCTET_STRING = 14;
export const RS_SYSTEM = 0;
export const RS_USER = 1;
export const RS_APPLICATION = 2;
export const RS_PROCESS = 3;
export const RR_NOROLLBACK = 0;
export const RR_ROLLBACK = 1;
export const RR_NORISK = 2;
export const UIT_INVALID = 0;
export const UIT_NONE = 1;
export const UIT_SHELL_COMMAND = 2;
export const UIT_HELP_PANE = 3;
export const UIT_DUI = 4;
export const DS_NOT_IMPLEMENTED = 0;
export const DS_CONFIRMED = 1;
export const DS_REJECTED = 2;
export const DS_INDETERMINATE = 3;
export const DS_DEFERRED = 4;
export const DS_PASSTHROUGH = 5;
export const RS_NOT_IMPLEMENTED = 0;
export const RS_REPAIRED = 1;
export const RS_UNREPAIRED = 2;
export const RS_DEFERRED = 3;
export const RS_USER_ACTION = 4;
export const PT_INVALID = 0;
export const PT_LOW_HEALTH = 1;
export const PT_LOWER_HEALTH = 2;
export const PT_DOWN_STREAM_HEALTH = 4;
export const PT_HIGH_UTILIZATION = 8;
export const PT_HIGHER_UTILIZATION = 16;
export const PT_UP_STREAM_UTILIZATION = 32;

// Structs

/**
 * Windows.Win32.NetworkManagement.NetworkDiagnosticsFramework.OCTET_STRING (size: 16)
 */
export interface OCTET_STRING {
  /** u32 */
  dwLength: number;
  /** ptr */
  lpValue: Deno.PointerValue | Uint8Array | null;
}

export const sizeofOCTET_STRING = 16;

export function allocOCTET_STRING(data?: Partial<OCTET_STRING>): Uint8Array {
  const buf = new Uint8Array(sizeofOCTET_STRING);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.dwLength !== undefined) view.setUint32(0, Number(data.dwLength), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.lpValue !== undefined) view.setBigUint64(8, data.lpValue === null ? 0n : BigInt(util.toPointer(data.lpValue)), true);
  return buf;
}

/**
 * Windows.Win32.Foundation.FILETIME (size: 8)
 */
export interface FILETIME {
  /** u32 */
  dwLowDateTime: number;
  /** u32 */
  dwHighDateTime: number;
}

export const sizeofFILETIME = 8;

export function allocFILETIME(data?: Partial<FILETIME>): Uint8Array {
  const buf = new Uint8Array(sizeofFILETIME);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.dwLowDateTime !== undefined) view.setUint32(0, Number(data.dwLowDateTime), true);
  // 0x04: u32
  if (data?.dwHighDateTime !== undefined) view.setUint32(4, Number(data.dwHighDateTime), true);
  return buf;
}

/**
 * Windows.Win32.NetworkManagement.NetworkDiagnosticsFramework.LIFE_TIME (size: 16)
 */
export interface LIFE_TIME {
  /** Windows.Win32.Foundation.FILETIME */
  startTime: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Foundation.FILETIME */
  endTime: Uint8Array | Deno.PointerValue | null;
}

export const sizeofLIFE_TIME = 16;

export function allocLIFE_TIME(data?: Partial<LIFE_TIME>): Uint8Array {
  const buf = new Uint8Array(sizeofLIFE_TIME);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.startTime !== undefined) view.setBigUint64(0, data.startTime === null ? 0n : BigInt(util.toPointer(data.startTime)), true);
  // 0x08: pointer
  if (data?.endTime !== undefined) view.setBigUint64(8, data.endTime === null ? 0n : BigInt(util.toPointer(data.endTime)), true);
  return buf;
}

/**
 * Windows.Win32.NetworkManagement.NetworkDiagnosticsFramework.DIAG_SOCKADDR (size: 16)
 */
export interface DIAG_SOCKADDR {
  /** u16 */
  family: number;
  /** array */
  data: Deno.PointerValue | null;
}

export const sizeofDIAG_SOCKADDR = 16;

export function allocDIAG_SOCKADDR(data?: Partial<DIAG_SOCKADDR>): Uint8Array {
  const buf = new Uint8Array(sizeofDIAG_SOCKADDR);
  const view = new DataView(buf.buffer);
  // 0x00: u16
  if (data?.family !== undefined) view.setUint16(0, Number(data.family), true);
  // 0x02: pad6
  // 0x08: pointer
  if (data?.data !== undefined) view.setBigUint64(8, data.data === null ? 0n : BigInt(util.toPointer(data.data)), true);
  return buf;
}

export type PWSTR = Deno.PointerValue | Uint8Array | null;

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
 * Windows.Win32.NetworkManagement.NetworkDiagnosticsFramework.HELPER_ATTRIBUTE (size: 24)
 */
export interface HELPER_ATTRIBUTE {
  /** Windows.Win32.Foundation.PWSTR */
  pwszName: string | null | Uint8Array | Uint16Array;
  /** Windows.Win32.NetworkManagement.NetworkDiagnosticsFramework.ATTRIBUTE_TYPE */
  type: ATTRIBUTE_TYPE;
  /** _Anonymous_e__Union */
  Anonymous: Uint8Array | Deno.PointerValue | null;
}

export const sizeofHELPER_ATTRIBUTE = 24;

export function allocHELPER_ATTRIBUTE(data?: Partial<HELPER_ATTRIBUTE>): Uint8Array {
  const buf = new Uint8Array(sizeofHELPER_ATTRIBUTE);
  const view = new DataView(buf.buffer);
  // 0x00: buffer
  if (data?.pwszName !== undefined) {
    (buf as any)._f0 = util.pwstrToFfi(data.pwszName);
    view.setBigUint64(0, (buf as any)._f0 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f0)), true);
  }
  // 0x08: i32
  if (data?.type !== undefined) view.setInt32(8, Number(data.type), true);
  // 0x0c: pad4
  // 0x10: pointer
  if (data?.Anonymous !== undefined) view.setBigUint64(16, data.Anonymous === null ? 0n : BigInt(util.toPointer(data.Anonymous)), true);
  return buf;
}

/**
 * Windows.Win32.NetworkManagement.NetworkDiagnosticsFramework.ShellCommandInfo (size: 40)
 */
export interface ShellCommandInfo {
  /** Windows.Win32.Foundation.PWSTR */
  pwszOperation: string | null | Uint8Array | Uint16Array;
  /** Windows.Win32.Foundation.PWSTR */
  pwszFile: string | null | Uint8Array | Uint16Array;
  /** Windows.Win32.Foundation.PWSTR */
  pwszParameters: string | null | Uint8Array | Uint16Array;
  /** Windows.Win32.Foundation.PWSTR */
  pwszDirectory: string | null | Uint8Array | Uint16Array;
  /** u32 */
  nShowCmd: number;
}

export const sizeofShellCommandInfo = 40;

export function allocShellCommandInfo(data?: Partial<ShellCommandInfo>): Uint8Array {
  const buf = new Uint8Array(sizeofShellCommandInfo);
  const view = new DataView(buf.buffer);
  // 0x00: buffer
  if (data?.pwszOperation !== undefined) {
    (buf as any)._f0 = util.pwstrToFfi(data.pwszOperation);
    view.setBigUint64(0, (buf as any)._f0 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f0)), true);
  }
  // 0x08: buffer
  if (data?.pwszFile !== undefined) {
    (buf as any)._f8 = util.pwstrToFfi(data.pwszFile);
    view.setBigUint64(8, (buf as any)._f8 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f8)), true);
  }
  // 0x10: buffer
  if (data?.pwszParameters !== undefined) {
    (buf as any)._f16 = util.pwstrToFfi(data.pwszParameters);
    view.setBigUint64(16, (buf as any)._f16 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f16)), true);
  }
  // 0x18: buffer
  if (data?.pwszDirectory !== undefined) {
    (buf as any)._f24 = util.pwstrToFfi(data.pwszDirectory);
    view.setBigUint64(24, (buf as any)._f24 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f24)), true);
  }
  // 0x20: u32
  if (data?.nShowCmd !== undefined) view.setUint32(32, Number(data.nShowCmd), true);
  // 0x24: pad4
  return buf;
}

/**
 * Windows.Win32.NetworkManagement.NetworkDiagnosticsFramework.UiInfo (size: 16)
 */
export interface UiInfo {
  /** Windows.Win32.NetworkManagement.NetworkDiagnosticsFramework.UI_INFO_TYPE */
  type: UI_INFO_TYPE;
  /** _Anonymous_e__Union */
  Anonymous: Uint8Array | Deno.PointerValue | null;
}

export const sizeofUiInfo = 16;

export function allocUiInfo(data?: Partial<UiInfo>): Uint8Array {
  const buf = new Uint8Array(sizeofUiInfo);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.type !== undefined) view.setInt32(0, Number(data.type), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.Anonymous !== undefined) view.setBigUint64(8, data.Anonymous === null ? 0n : BigInt(util.toPointer(data.Anonymous)), true);
  return buf;
}

/**
 * Windows.Win32.NetworkManagement.NetworkDiagnosticsFramework.RepairInfo (size: 64)
 */
export interface RepairInfo {
  /** System.Guid */
  guid: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Foundation.PWSTR */
  pwszClassName: string | null | Uint8Array | Uint16Array;
  /** Windows.Win32.Foundation.PWSTR */
  pwszDescription: string | null | Uint8Array | Uint16Array;
  /** u32 */
  sidType: number;
  /** i32 */
  cost: number;
  /** u32 */
  flags: number;
  /** Windows.Win32.NetworkManagement.NetworkDiagnosticsFramework.REPAIR_SCOPE */
  scope: REPAIR_SCOPE;
  /** Windows.Win32.NetworkManagement.NetworkDiagnosticsFramework.REPAIR_RISK */
  risk: REPAIR_RISK;
  /** Windows.Win32.NetworkManagement.NetworkDiagnosticsFramework.UiInfo */
  UiInfo: Uint8Array | Deno.PointerValue | null;
  /** i32 */
  rootCauseIndex: number;
}

export const sizeofRepairInfo = 64;

export function allocRepairInfo(data?: Partial<RepairInfo>): Uint8Array {
  const buf = new Uint8Array(sizeofRepairInfo);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.guid !== undefined) view.setBigUint64(0, data.guid === null ? 0n : BigInt(util.toPointer(data.guid)), true);
  // 0x08: buffer
  if (data?.pwszClassName !== undefined) {
    (buf as any)._f8 = util.pwstrToFfi(data.pwszClassName);
    view.setBigUint64(8, (buf as any)._f8 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f8)), true);
  }
  // 0x10: buffer
  if (data?.pwszDescription !== undefined) {
    (buf as any)._f16 = util.pwstrToFfi(data.pwszDescription);
    view.setBigUint64(16, (buf as any)._f16 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f16)), true);
  }
  // 0x18: u32
  if (data?.sidType !== undefined) view.setUint32(24, Number(data.sidType), true);
  // 0x1c: i32
  if (data?.cost !== undefined) view.setInt32(28, Number(data.cost), true);
  // 0x20: u32
  if (data?.flags !== undefined) view.setUint32(32, Number(data.flags), true);
  // 0x24: i32
  if (data?.scope !== undefined) view.setInt32(36, Number(data.scope), true);
  // 0x28: i32
  if (data?.risk !== undefined) view.setInt32(40, Number(data.risk), true);
  // 0x2c: pad4
  // 0x30: pointer
  if (data?.UiInfo !== undefined) view.setBigUint64(48, data.UiInfo === null ? 0n : BigInt(util.toPointer(data.UiInfo)), true);
  // 0x38: i32
  if (data?.rootCauseIndex !== undefined) view.setInt32(56, Number(data.rootCauseIndex), true);
  // 0x3c: pad4
  return buf;
}

/**
 * Windows.Win32.NetworkManagement.NetworkDiagnosticsFramework.RepairInfoEx (size: 16)
 */
export interface RepairInfoEx {
  /** Windows.Win32.NetworkManagement.NetworkDiagnosticsFramework.RepairInfo */
  repair: Uint8Array | Deno.PointerValue | null;
  /** u16 */
  repairRank: number;
}

export const sizeofRepairInfoEx = 16;

export function allocRepairInfoEx(data?: Partial<RepairInfoEx>): Uint8Array {
  const buf = new Uint8Array(sizeofRepairInfoEx);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.repair !== undefined) view.setBigUint64(0, data.repair === null ? 0n : BigInt(util.toPointer(data.repair)), true);
  // 0x08: u16
  if (data?.repairRank !== undefined) view.setUint16(8, Number(data.repairRank), true);
  // 0x0a: pad6
  return buf;
}

/**
 * Windows.Win32.NetworkManagement.NetworkDiagnosticsFramework.RootCauseInfo (size: 48)
 */
export interface RootCauseInfo {
  /** Windows.Win32.Foundation.PWSTR */
  pwszDescription: string | null | Uint8Array | Uint16Array;
  /** System.Guid */
  rootCauseID: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  rootCauseFlags: number;
  /** System.Guid */
  networkInterfaceID: Uint8Array | Deno.PointerValue | null;
  /** ptr */
  pRepairs: Deno.PointerValue | Uint8Array | null;
  /** u16 */
  repairCount: number;
}

export const sizeofRootCauseInfo = 48;

export function allocRootCauseInfo(data?: Partial<RootCauseInfo>): Uint8Array {
  const buf = new Uint8Array(sizeofRootCauseInfo);
  const view = new DataView(buf.buffer);
  // 0x00: buffer
  if (data?.pwszDescription !== undefined) {
    (buf as any)._f0 = util.pwstrToFfi(data.pwszDescription);
    view.setBigUint64(0, (buf as any)._f0 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f0)), true);
  }
  // 0x08: pointer
  if (data?.rootCauseID !== undefined) view.setBigUint64(8, data.rootCauseID === null ? 0n : BigInt(util.toPointer(data.rootCauseID)), true);
  // 0x10: u32
  if (data?.rootCauseFlags !== undefined) view.setUint32(16, Number(data.rootCauseFlags), true);
  // 0x14: pad4
  // 0x18: pointer
  if (data?.networkInterfaceID !== undefined) view.setBigUint64(24, data.networkInterfaceID === null ? 0n : BigInt(util.toPointer(data.networkInterfaceID)), true);
  // 0x20: pointer
  if (data?.pRepairs !== undefined) view.setBigUint64(32, data.pRepairs === null ? 0n : BigInt(util.toPointer(data.pRepairs)), true);
  // 0x28: u16
  if (data?.repairCount !== undefined) view.setUint16(40, Number(data.repairCount), true);
  // 0x2a: pad6
  return buf;
}

/**
 * Windows.Win32.NetworkManagement.NetworkDiagnosticsFramework.HYPOTHESIS (size: 32)
 */
export interface HYPOTHESIS {
  /** Windows.Win32.Foundation.PWSTR */
  pwszClassName: string | null | Uint8Array | Uint16Array;
  /** Windows.Win32.Foundation.PWSTR */
  pwszDescription: string | null | Uint8Array | Uint16Array;
  /** u32 */
  celt: number;
  /** ptr */
  rgAttributes: Deno.PointerValue | Uint8Array | null;
}

export const sizeofHYPOTHESIS = 32;

export function allocHYPOTHESIS(data?: Partial<HYPOTHESIS>): Uint8Array {
  const buf = new Uint8Array(sizeofHYPOTHESIS);
  const view = new DataView(buf.buffer);
  // 0x00: buffer
  if (data?.pwszClassName !== undefined) {
    (buf as any)._f0 = util.pwstrToFfi(data.pwszClassName);
    view.setBigUint64(0, (buf as any)._f0 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f0)), true);
  }
  // 0x08: buffer
  if (data?.pwszDescription !== undefined) {
    (buf as any)._f8 = util.pwstrToFfi(data.pwszDescription);
    view.setBigUint64(8, (buf as any)._f8 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f8)), true);
  }
  // 0x10: u32
  if (data?.celt !== undefined) view.setUint32(16, Number(data.celt), true);
  // 0x14: pad4
  // 0x18: pointer
  if (data?.rgAttributes !== undefined) view.setBigUint64(24, data.rgAttributes === null ? 0n : BigInt(util.toPointer(data.rgAttributes)), true);
  return buf;
}

/**
 * Windows.Win32.NetworkManagement.NetworkDiagnosticsFramework.HelperAttributeInfo (size: 16)
 */
export interface HelperAttributeInfo {
  /** Windows.Win32.Foundation.PWSTR */
  pwszName: string | null | Uint8Array | Uint16Array;
  /** Windows.Win32.NetworkManagement.NetworkDiagnosticsFramework.ATTRIBUTE_TYPE */
  type: ATTRIBUTE_TYPE;
}

export const sizeofHelperAttributeInfo = 16;

export function allocHelperAttributeInfo(data?: Partial<HelperAttributeInfo>): Uint8Array {
  const buf = new Uint8Array(sizeofHelperAttributeInfo);
  const view = new DataView(buf.buffer);
  // 0x00: buffer
  if (data?.pwszName !== undefined) {
    (buf as any)._f0 = util.pwstrToFfi(data.pwszName);
    view.setBigUint64(0, (buf as any)._f0 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f0)), true);
  }
  // 0x08: i32
  if (data?.type !== undefined) view.setInt32(8, Number(data.type), true);
  // 0x0c: pad4
  return buf;
}

/**
 * Windows.Win32.NetworkManagement.NetworkDiagnosticsFramework.DiagnosticsInfo (size: 8)
 */
export interface DiagnosticsInfo {
  /** i32 */
  cost: number;
  /** u32 */
  flags: number;
}

export const sizeofDiagnosticsInfo = 8;

export function allocDiagnosticsInfo(data?: Partial<DiagnosticsInfo>): Uint8Array {
  const buf = new Uint8Array(sizeofDiagnosticsInfo);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.cost !== undefined) view.setInt32(0, Number(data.cost), true);
  // 0x04: u32
  if (data?.flags !== undefined) view.setUint32(4, Number(data.flags), true);
  return buf;
}

/**
 * Windows.Win32.NetworkManagement.NetworkDiagnosticsFramework.HypothesisResult (size: 16)
 */
export interface HypothesisResult {
  /** Windows.Win32.NetworkManagement.NetworkDiagnosticsFramework.HYPOTHESIS */
  hypothesis: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.NetworkManagement.NetworkDiagnosticsFramework.DIAGNOSIS_STATUS */
  pathStatus: DIAGNOSIS_STATUS;
}

export const sizeofHypothesisResult = 16;

export function allocHypothesisResult(data?: Partial<HypothesisResult>): Uint8Array {
  const buf = new Uint8Array(sizeofHypothesisResult);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.hypothesis !== undefined) view.setBigUint64(0, data.hypothesis === null ? 0n : BigInt(util.toPointer(data.hypothesis)), true);
  // 0x08: i32
  if (data?.pathStatus !== undefined) view.setInt32(8, Number(data.pathStatus), true);
  // 0x0c: pad4
  return buf;
}

export type HRESULT = number;

export type SOCKET = Deno.PointerValue;

export type BOOL = number;

export type HWND = Deno.PointerValue;

// Native Libraries

try {
  var libNDFAPI_dll = Deno.dlopen("NDFAPI.dll", {
    NdfCreateIncident: {
      parameters: ["buffer", "u32", "pointer", "pointer"],
      result: "pointer",
    },
    NdfCreateWinSockIncident: {
      parameters: ["pointer", "buffer", "u16", "buffer", "pointer", "pointer"],
      result: "pointer",
    },
    NdfCreateWebIncident: {
      parameters: ["buffer", "pointer"],
      result: "pointer",
    },
    NdfCreateWebIncidentEx: {
      parameters: ["buffer", "i32", "buffer", "pointer"],
      result: "pointer",
    },
    NdfCreateSharingIncident: {
      parameters: ["buffer", "pointer"],
      result: "pointer",
    },
    NdfCreateDNSIncident: {
      parameters: ["buffer", "u16", "pointer"],
      result: "pointer",
    },
    NdfCreateConnectivityIncident: {
      parameters: ["pointer"],
      result: "pointer",
    },
    NdfCreateNetConnectionIncident: {
      parameters: ["pointer", "pointer"],
      result: "pointer",
    },
    NdfCreatePnrpIncident: {
      parameters: ["buffer", "buffer", "i32", "buffer", "pointer"],
      result: "pointer",
    },
    NdfCreateGroupingIncident: {
      parameters: ["buffer", "buffer", "buffer", "buffer", "pointer", "buffer", "pointer"],
      result: "pointer",
    },
    NdfExecuteDiagnosis: {
      parameters: ["pointer", "pointer"],
      result: "pointer",
    },
    NdfCloseIncident: {
      parameters: ["pointer"],
      result: "pointer",
    },
    NdfDiagnoseIncident: {
      parameters: ["pointer", "pointer", "pointer", "u32", "u32"],
      result: "pointer",
    },
    NdfRepairIncident: {
      parameters: ["pointer", "pointer", "u32"],
      result: "pointer",
    },
    NdfCancelIncident: {
      parameters: ["pointer"],
      result: "pointer",
    },
    NdfGetTraceFile: {
      parameters: ["pointer", "pointer"],
      result: "pointer",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function NdfCreateIncident(
  helperClassName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  celt: number /* u32 */,
  attributes: Deno.PointerValue | Uint8Array | null /* ptr */,
  handle: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libNDFAPI_dll.NdfCreateIncident(util.pwstrToFfi(helperClassName), celt, util.toPointer(attributes), util.toPointer(handle)));
}

export function NdfCreateWinSockIncident(
  sock: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Networking.WinSock.SOCKET */,
  host: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  port: number /* u16 */,
  appId: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  userId: Deno.PointerValue | Uint8Array | null /* ptr */,
  handle: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libNDFAPI_dll.NdfCreateWinSockIncident(util.toPointer(sock), util.pwstrToFfi(host), port, util.pwstrToFfi(appId), util.toPointer(userId), util.toPointer(handle)));
}

export function NdfCreateWebIncident(
  url: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  handle: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libNDFAPI_dll.NdfCreateWebIncident(util.pwstrToFfi(url), util.toPointer(handle)));
}

export function NdfCreateWebIncidentEx(
  url: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  useWinHTTP: boolean /* Windows.Win32.Foundation.BOOL */,
  moduleName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  handle: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libNDFAPI_dll.NdfCreateWebIncidentEx(util.pwstrToFfi(url), util.boolToFfi(useWinHTTP), util.pwstrToFfi(moduleName), util.toPointer(handle)));
}

export function NdfCreateSharingIncident(
  UNCPath: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  handle: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libNDFAPI_dll.NdfCreateSharingIncident(util.pwstrToFfi(UNCPath), util.toPointer(handle)));
}

export function NdfCreateDNSIncident(
  hostname: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  queryType: number /* u16 */,
  handle: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libNDFAPI_dll.NdfCreateDNSIncident(util.pwstrToFfi(hostname), queryType, util.toPointer(handle)));
}

export function NdfCreateConnectivityIncident(
  handle: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libNDFAPI_dll.NdfCreateConnectivityIncident(util.toPointer(handle)));
}

export function NdfCreateNetConnectionIncident(
  handle: Deno.PointerValue | Uint8Array | null /* ptr */,
  id: Uint8Array | Deno.PointerValue | null /* System.Guid */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libNDFAPI_dll.NdfCreateNetConnectionIncident(util.toPointer(handle), util.toPointer(id)));
}

export function NdfCreatePnrpIncident(
  cloudname: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  peername: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  diagnosePublish: boolean /* Windows.Win32.Foundation.BOOL */,
  appId: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  handle: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libNDFAPI_dll.NdfCreatePnrpIncident(util.pwstrToFfi(cloudname), util.pwstrToFfi(peername), util.boolToFfi(diagnosePublish), util.pwstrToFfi(appId), util.toPointer(handle)));
}

export function NdfCreateGroupingIncident(
  CloudName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  GroupName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  Identity: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  Invitation: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  Addresses: Deno.PointerValue | Uint8Array | null /* ptr */,
  appId: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  handle: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libNDFAPI_dll.NdfCreateGroupingIncident(util.pwstrToFfi(CloudName), util.pwstrToFfi(GroupName), util.pwstrToFfi(Identity), util.pwstrToFfi(Invitation), util.toPointer(Addresses), util.pwstrToFfi(appId), util.toPointer(handle)));
}

export function NdfExecuteDiagnosis(
  handle: Deno.PointerValue | Uint8Array | null /* ptr */,
  hwnd: Deno.PointerValue | null /* Windows.Win32.Foundation.HWND */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libNDFAPI_dll.NdfExecuteDiagnosis(util.toPointer(handle), util.hwndToFfi(hwnd)));
}

export function NdfCloseIncident(
  handle: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libNDFAPI_dll.NdfCloseIncident(util.toPointer(handle)));
}

export function NdfDiagnoseIncident(
  Handle: Deno.PointerValue | Uint8Array | null /* ptr */,
  RootCauseCount: Deno.PointerValue | Uint8Array | null /* ptr */,
  RootCauses: Deno.PointerValue | Uint8Array | null /* ptr */,
  dwWait: number /* u32 */,
  dwFlags: number /* u32 */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libNDFAPI_dll.NdfDiagnoseIncident(util.toPointer(Handle), util.toPointer(RootCauseCount), util.toPointer(RootCauses), dwWait, dwFlags));
}

export function NdfRepairIncident(
  Handle: Deno.PointerValue | Uint8Array | null /* ptr */,
  RepairEx: Deno.PointerValue | Uint8Array | null /* ptr */,
  dwWait: number /* u32 */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libNDFAPI_dll.NdfRepairIncident(util.toPointer(Handle), util.toPointer(RepairEx), dwWait));
}

export function NdfCancelIncident(
  Handle: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libNDFAPI_dll.NdfCancelIncident(util.toPointer(Handle)));
}

export function NdfGetTraceFile(
  Handle: Deno.PointerValue | Uint8Array | null /* ptr */,
  TraceFileLocation: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libNDFAPI_dll.NdfGetTraceFile(util.toPointer(Handle), util.toPointer(TraceFileLocation)));
}

