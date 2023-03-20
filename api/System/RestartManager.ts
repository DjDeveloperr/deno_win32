/// Auto-generated by Deno Win32: Windows.Win32.System.RestartManager.Apis

import * as util from "../../util.ts";

// Enums
export type RM_APP_TYPE = number;
export type RM_SHUTDOWN_TYPE = number;
export type RM_APP_STATUS = number;
export type RM_REBOOT_REASON = number;
export type RM_FILTER_TRIGGER = number;
export type RM_FILTER_ACTION = number;

// Constants
export const CCH_RM_SESSION_KEY = 32;
export const CCH_RM_MAX_APP_NAME = 255;
export const CCH_RM_MAX_SVC_NAME = 63;
export const RM_INVALID_TS_SESSION = `-1`;
export const RM_INVALID_PROCESS = `-1`;
export const RmUnknownApp = 0;
export const RmMainWindow = 1;
export const RmOtherWindow = 2;
export const RmService = 3;
export const RmExplorer = 4;
export const RmConsole = 5;
export const RmCritical = 1000;
export const RmForceShutdown = 1;
export const RmShutdownOnlyRegistered = 16;
export const RmStatusUnknown = 0;
export const RmStatusRunning = 1;
export const RmStatusStopped = 2;
export const RmStatusStoppedOther = 4;
export const RmStatusRestarted = 8;
export const RmStatusErrorOnStop = 16;
export const RmStatusErrorOnRestart = 32;
export const RmStatusShutdownMasked = 64;
export const RmStatusRestartMasked = 128;
export const RmRebootReasonNone = 0;
export const RmRebootReasonPermissionDenied = 1;
export const RmRebootReasonSessionMismatch = 2;
export const RmRebootReasonCriticalProcess = 4;
export const RmRebootReasonCriticalService = 8;
export const RmRebootReasonDetectedSelf = 16;
export const RmFilterTriggerInvalid = 0;
export const RmFilterTriggerFile = 1;
export const RmFilterTriggerProcess = 2;
export const RmFilterTriggerService = 3;
export const RmInvalidFilterAction = 0;
export const RmNoRestart = 1;
export const RmNoShutdown = 2;

// Structs

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

export class FILETIMEView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get dwLowDateTime(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: u32
  get dwHighDateTime(): number {
    return this.view.getUint32(4, true);
  }

  // 0x00: u32
  set dwLowDateTime(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: u32
  set dwHighDateTime(value: number) {
    this.view.setUint32(4, value, true);
  }
}

/**
 * Windows.Win32.System.RestartManager.RM_UNIQUE_PROCESS (size: 16)
 */
export interface RM_UNIQUE_PROCESS {
  /** u32 */
  dwProcessId: number;
  /** Windows.Win32.Foundation.FILETIME */
  ProcessStartTime: Uint8Array | Deno.PointerValue;
}

export const sizeofRM_UNIQUE_PROCESS = 16;

export function allocRM_UNIQUE_PROCESS(data?: Partial<RM_UNIQUE_PROCESS>): Uint8Array {
  const buf = new Uint8Array(sizeofRM_UNIQUE_PROCESS);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.dwProcessId !== undefined) view.setUint32(0, Number(data.dwProcessId), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.ProcessStartTime !== undefined) view.setBigUint64(8, data.ProcessStartTime === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.ProcessStartTime))), true);
  return buf;
}

export class RM_UNIQUE_PROCESSView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get dwProcessId(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  get ProcessStartTime(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: u32
  set dwProcessId(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  set ProcessStartTime(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }
}

export type BOOL = number;

/**
 * Windows.Win32.System.RestartManager.RM_PROCESS_INFO (size: 40)
 */
export interface RM_PROCESS_INFO {
  /** Windows.Win32.System.RestartManager.RM_UNIQUE_PROCESS */
  Process: Uint8Array | Deno.PointerValue;
  /** array */
  strAppName: Deno.PointerValue;
  /** array */
  strServiceShortName: Deno.PointerValue;
  /** Windows.Win32.System.RestartManager.RM_APP_TYPE */
  ApplicationType: RM_APP_TYPE;
  /** u32 */
  AppStatus: number;
  /** u32 */
  TSSessionId: number;
  /** Windows.Win32.Foundation.BOOL */
  bRestartable: boolean;
}

export const sizeofRM_PROCESS_INFO = 40;

export function allocRM_PROCESS_INFO(data?: Partial<RM_PROCESS_INFO>): Uint8Array {
  const buf = new Uint8Array(sizeofRM_PROCESS_INFO);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.Process !== undefined) view.setBigUint64(0, data.Process === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.Process))), true);
  // 0x08: pointer
  if (data?.strAppName !== undefined) view.setBigUint64(8, data.strAppName === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.strAppName))), true);
  // 0x10: pointer
  if (data?.strServiceShortName !== undefined) view.setBigUint64(16, data.strServiceShortName === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.strServiceShortName))), true);
  // 0x18: i32
  if (data?.ApplicationType !== undefined) view.setInt32(24, Number(data.ApplicationType), true);
  // 0x1c: u32
  if (data?.AppStatus !== undefined) view.setUint32(28, Number(data.AppStatus), true);
  // 0x20: u32
  if (data?.TSSessionId !== undefined) view.setUint32(32, Number(data.TSSessionId), true);
  // 0x24: i32
  if (data?.bRestartable !== undefined) view.setInt32(36, Number(data.bRestartable), true);
  return buf;
}

export class RM_PROCESS_INFOView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get Process(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(0, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x08: pointer
  get strAppName(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x10: pointer
  get strServiceShortName(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(16, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x18: i32
  get ApplicationType(): number {
    return this.view.getInt32(24, true);
  }

  // 0x1c: u32
  get AppStatus(): number {
    return this.view.getUint32(28, true);
  }

  // 0x20: u32
  get TSSessionId(): number {
    return this.view.getUint32(32, true);
  }

  // 0x24: i32
  get bRestartable(): number {
    return this.view.getInt32(36, true);
  }

  // 0x00: pointer
  set Process(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x08: pointer
  set strAppName(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x10: pointer
  set strServiceShortName(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x18: i32
  set ApplicationType(value: number) {
    this.view.setInt32(24, value, true);
  }

  // 0x1c: u32
  set AppStatus(value: number) {
    this.view.setUint32(28, value, true);
  }

  // 0x20: u32
  set TSSessionId(value: number) {
    this.view.setUint32(32, value, true);
  }

  // 0x24: i32
  set bRestartable(value: number) {
    this.view.setInt32(36, value, true);
  }
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

export class _Anonymous_e__StructView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u64
  get Alignment(): Deno.PointerValue {
    return Number(this.view.getBigUint64(0, true));
  }

  // 0x08: u64
  get Region(): Deno.PointerValue {
    return Number(this.view.getBigUint64(8, true));
  }

  // 0x00: u64
  set Alignment(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(value), true);
  }

  // 0x08: u64
  set Region(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(value), true);
  }
}

/**
 * _Anonymous_e__Union (size: 16)
 */
export interface _Anonymous_e__Union {
  /** _Anonymous_e__Struct */
  Anonymous: Uint8Array | Deno.PointerValue;
  /** array */
  X: Deno.PointerValue;
}

export const sizeof_Anonymous_e__Union = 16;

export function alloc_Anonymous_e__Union(data?: Partial<_Anonymous_e__Union>): Uint8Array {
  const buf = new Uint8Array(sizeof_Anonymous_e__Union);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.Anonymous !== undefined) view.setBigUint64(0, data.Anonymous === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.Anonymous))), true);
  // 0x08: pointer
  if (data?.X !== undefined) view.setBigUint64(8, data.X === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.X))), true);
  return buf;
}

export class _Anonymous_e__UnionView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get Anonymous(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(0, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x08: pointer
  get X(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: pointer
  set Anonymous(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x08: pointer
  set X(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }
}

/**
 * Windows.Win32.System.RestartManager.RM_FILTER_INFO (size: 24)
 */
export interface RM_FILTER_INFO {
  /** Windows.Win32.System.RestartManager.RM_FILTER_ACTION */
  FilterAction: RM_FILTER_ACTION;
  /** Windows.Win32.System.RestartManager.RM_FILTER_TRIGGER */
  FilterTrigger: RM_FILTER_TRIGGER;
  /** u32 */
  cbNextOffset: number;
  /** _Anonymous_e__Union */
  Anonymous: Uint8Array | Deno.PointerValue;
}

export const sizeofRM_FILTER_INFO = 24;

export function allocRM_FILTER_INFO(data?: Partial<RM_FILTER_INFO>): Uint8Array {
  const buf = new Uint8Array(sizeofRM_FILTER_INFO);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.FilterAction !== undefined) view.setInt32(0, Number(data.FilterAction), true);
  // 0x04: i32
  if (data?.FilterTrigger !== undefined) view.setInt32(4, Number(data.FilterTrigger), true);
  // 0x08: u32
  if (data?.cbNextOffset !== undefined) view.setUint32(8, Number(data.cbNextOffset), true);
  // 0x0c: pad4
  // 0x10: pointer
  if (data?.Anonymous !== undefined) view.setBigUint64(16, data.Anonymous === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.Anonymous))), true);
  return buf;
}

export class RM_FILTER_INFOView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: i32
  get FilterAction(): number {
    return this.view.getInt32(0, true);
  }

  // 0x04: i32
  get FilterTrigger(): number {
    return this.view.getInt32(4, true);
  }

  // 0x08: u32
  get cbNextOffset(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: pad4

  // 0x10: pointer
  get Anonymous(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(16, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: i32
  set FilterAction(value: number) {
    this.view.setInt32(0, value, true);
  }

  // 0x04: i32
  set FilterTrigger(value: number) {
    this.view.setInt32(4, value, true);
  }

  // 0x08: u32
  set cbNextOffset(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: pad4

  // 0x10: pointer
  set Anonymous(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }
}

export type PWSTR = Deno.PointerValue | Uint8Array;

// Native Libraries

try {
  var librstrtmgr_dll = Deno.dlopen("rstrtmgr.dll", {
    RmStartSession: {
      parameters: ["pointer", "u32", "buffer"],
      result: "u32",
    },
    RmEndSession: {
      parameters: ["u32"],
      result: "u32",
    },
    RmRegisterResources: {
      parameters: ["u32", "u32", "pointer", "u32", "pointer", "u32", "pointer"],
      result: "u32",
    },
    RmGetList: {
      parameters: ["u32", "pointer", "pointer", "pointer", "pointer"],
      result: "u32",
    },
    RmShutdown: {
      parameters: ["u32", "u32", "pointer"],
      result: "u32",
    },
    RmRestart: {
      parameters: ["u32", "u32", "pointer"],
      result: "u32",
    },
  }).symbols;
} catch(e) { /* ignore */ }

try {
  var libRstrtMgr_dll = Deno.dlopen("RstrtMgr.dll", {
    RmJoinSession: {
      parameters: ["pointer", "buffer"],
      result: "u32",
    },
    RmCancelCurrentTask: {
      parameters: ["u32"],
      result: "u32",
    },
    RmAddFilter: {
      parameters: ["u32", "buffer", "pointer", "buffer", "i32"],
      result: "u32",
    },
    RmRemoveFilter: {
      parameters: ["u32", "buffer", "pointer", "buffer"],
      result: "u32",
    },
    RmGetFilterList: {
      parameters: ["u32", "pointer", "u32", "pointer"],
      result: "u32",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function RmStartSession(
  pSessionHandle: Deno.PointerValue | Uint8Array /* ptr */,
  dwSessionFlags: number /* u32 */,
  strSessionKey: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): number /* u32 */ {
  return librstrtmgr_dll.RmStartSession(util.toPointer(pSessionHandle), dwSessionFlags, util.pwstrToFfi(strSessionKey));
}

export function RmJoinSession(
  pSessionHandle: Deno.PointerValue | Uint8Array /* ptr */,
  strSessionKey: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): number /* u32 */ {
  return libRstrtMgr_dll.RmJoinSession(util.toPointer(pSessionHandle), util.pwstrToFfi(strSessionKey));
}

export function RmEndSession(
  dwSessionHandle: number /* u32 */,
): number /* u32 */ {
  return librstrtmgr_dll.RmEndSession(dwSessionHandle);
}

export function RmRegisterResources(
  dwSessionHandle: number /* u32 */,
  nFiles: number /* u32 */,
  rgsFileNames: Deno.PointerValue | Uint8Array /* ptr */,
  nApplications: number /* u32 */,
  rgApplications: Deno.PointerValue | Uint8Array /* ptr */,
  nServices: number /* u32 */,
  rgsServiceNames: Deno.PointerValue | Uint8Array /* ptr */,
): number /* u32 */ {
  return librstrtmgr_dll.RmRegisterResources(dwSessionHandle, nFiles, util.toPointer(rgsFileNames), nApplications, util.toPointer(rgApplications), nServices, util.toPointer(rgsServiceNames));
}

export function RmGetList(
  dwSessionHandle: number /* u32 */,
  pnProcInfoNeeded: Deno.PointerValue | Uint8Array /* ptr */,
  pnProcInfo: Deno.PointerValue | Uint8Array /* ptr */,
  rgAffectedApps: Deno.PointerValue | Uint8Array /* ptr */,
  lpdwRebootReasons: Deno.PointerValue | Uint8Array /* ptr */,
): number /* u32 */ {
  return librstrtmgr_dll.RmGetList(dwSessionHandle, util.toPointer(pnProcInfoNeeded), util.toPointer(pnProcInfo), util.toPointer(rgAffectedApps), util.toPointer(lpdwRebootReasons));
}

export function RmShutdown(
  dwSessionHandle: number /* u32 */,
  lActionFlags: number /* u32 */,
  fnStatus: Uint8Array | Deno.PointerValue /* Windows.Win32.System.RestartManager.RM_WRITE_STATUS_CALLBACK */,
): number /* u32 */ {
  return librstrtmgr_dll.RmShutdown(dwSessionHandle, lActionFlags, util.toPointer(fnStatus));
}

export function RmRestart(
  dwSessionHandle: number /* u32 */,
  dwRestartFlags: number /* u32 */,
  fnStatus: Uint8Array | Deno.PointerValue /* Windows.Win32.System.RestartManager.RM_WRITE_STATUS_CALLBACK */,
): number /* u32 */ {
  return librstrtmgr_dll.RmRestart(dwSessionHandle, dwRestartFlags, util.toPointer(fnStatus));
}

export function RmCancelCurrentTask(
  dwSessionHandle: number /* u32 */,
): number /* u32 */ {
  return libRstrtMgr_dll.RmCancelCurrentTask(dwSessionHandle);
}

export function RmAddFilter(
  dwSessionHandle: number /* u32 */,
  strModuleName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  pProcess: Deno.PointerValue | Uint8Array /* ptr */,
  strServiceShortName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  FilterAction: RM_FILTER_ACTION /* Windows.Win32.System.RestartManager.RM_FILTER_ACTION */,
): number /* u32 */ {
  return libRstrtMgr_dll.RmAddFilter(dwSessionHandle, util.pwstrToFfi(strModuleName), util.toPointer(pProcess), util.pwstrToFfi(strServiceShortName), FilterAction);
}

export function RmRemoveFilter(
  dwSessionHandle: number /* u32 */,
  strModuleName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  pProcess: Deno.PointerValue | Uint8Array /* ptr */,
  strServiceShortName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): number /* u32 */ {
  return libRstrtMgr_dll.RmRemoveFilter(dwSessionHandle, util.pwstrToFfi(strModuleName), util.toPointer(pProcess), util.pwstrToFfi(strServiceShortName));
}

export function RmGetFilterList(
  dwSessionHandle: number /* u32 */,
  pbFilterBuf: Deno.PointerValue | Uint8Array /* ptr */,
  cbFilterBuf: number /* u32 */,
  cbFilterBufNeeded: Deno.PointerValue | Uint8Array /* ptr */,
): number /* u32 */ {
  return libRstrtMgr_dll.RmGetFilterList(dwSessionHandle, util.toPointer(pbFilterBuf), cbFilterBuf, util.toPointer(cbFilterBufNeeded));
}

