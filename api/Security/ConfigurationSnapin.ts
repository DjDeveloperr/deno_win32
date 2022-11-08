/// Auto-generated by Deno Win32: Windows.Win32.Security.ConfigurationSnapin.Apis

import * as util from "../../util.ts";

// Enums
export type SCE_LOG_ERR_LEVEL = number;
export type SCESVC_INFO_TYPE = number;

// Constants
export const SCE_LOG_LEVEL_ALWAYS = 0;
export const SCE_LOG_LEVEL_ERROR = 1;
export const SCE_LOG_LEVEL_DETAIL = 2;
export const SCE_LOG_LEVEL_DEBUG = 3;
export const SCESTATUS_SUCCESS = 0;
export const SCESTATUS_INVALID_PARAMETER = 1;
export const SCESTATUS_RECORD_NOT_FOUND = 2;
export const SCESTATUS_INVALID_DATA = 3;
export const SCESTATUS_OBJECT_EXIST = 4;
export const SCESTATUS_BUFFER_TOO_SMALL = 5;
export const SCESTATUS_PROFILE_NOT_FOUND = 6;
export const SCESTATUS_BAD_FORMAT = 7;
export const SCESTATUS_NOT_ENOUGH_RESOURCE = 8;
export const SCESTATUS_ACCESS_DENIED = 9;
export const SCESTATUS_CANT_DELETE = 10;
export const SCESTATUS_PREFIX_OVERFLOW = 11;
export const SCESTATUS_OTHER_ERROR = 12;
export const SCESTATUS_ALREADY_RUNNING = 13;
export const SCESTATUS_SERVICE_NOT_SUPPORT = 14;
export const SCESTATUS_MOD_NOT_FOUND = 15;
export const SCESTATUS_EXCEPTION_IN_SERVER = 16;
export const SCESTATUS_NO_TEMPLATE_GIVEN = 17;
export const SCESTATUS_NO_MAPPING = 18;
export const SCESTATUS_TRUST_FAIL = 19;
export const SCE_ROOT_PATH = `Software\\Microsoft\\Windows NT\\CurrentVersion\\SeCEdit`;
export const SCESVC_ENUMERATION_MAX = 100;
export const struuidNodetypeSceTemplateServices = `{24a7f717-1f0c-11d1-affb-00c04fb984f9}`;
export const lstruuidNodetypeSceTemplateServices = `{24a7f717-1f0c-11d1-affb-00c04fb984f9}`;
export const struuidNodetypeSceAnalysisServices = `{678050c7-1ff8-11d1-affb-00c04fb984f9}`;
export const lstruuidNodetypeSceAnalysisServices = `{678050c7-1ff8-11d1-affb-00c04fb984f9}`;
export const struuidNodetypeSceEventLog = `{2ce06698-4bf3-11d1-8c30-00c04fb984f9}`;
export const lstruuidNodetypeSceEventLog = `{2ce06698-4bf3-11d1-8c30-00c04fb984f9}`;
export const CCF_SCESVC_ATTACHMENT = `CCF_SCESVC_ATTACHMENT`;
export const CCF_SCESVC_ATTACHMENT_DATA = `CCF_SCESVC_ATTACHMENT_DATA`;
export const SceSvcConfigurationInfo = 0;
export const SceSvcMergedPolicyInfo = 1;
export const SceSvcAnalysisInfo = 2;
export const SceSvcInternalUse = 3;

// Structs

/**
 * Windows.Win32.Security.ConfigurationSnapin.SCESVC_CONFIGURATION_LINE (size: 24)
 */
export interface SCESVC_CONFIGURATION_LINE {
  /** ptr */
  Key: Deno.PointerValue | Uint8Array | null;
  /** ptr */
  Value: Deno.PointerValue | Uint8Array | null;
  /** u32 */
  ValueLen: number;
}

export const sizeofSCESVC_CONFIGURATION_LINE = 24;

export function allocSCESVC_CONFIGURATION_LINE(data?: Partial<SCESVC_CONFIGURATION_LINE>): Uint8Array {
  const buf = new Uint8Array(sizeofSCESVC_CONFIGURATION_LINE);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.Key !== undefined) view.setBigUint64(0, data.Key === null ? 0n : BigInt(util.toPointer(data.Key)), true);
  // 0x08: pointer
  if (data?.Value !== undefined) view.setBigUint64(8, data.Value === null ? 0n : BigInt(util.toPointer(data.Value)), true);
  // 0x10: u32
  if (data?.ValueLen !== undefined) view.setUint32(16, Number(data.ValueLen), true);
  // 0x14: pad4
  return buf;
}

export class SCESVC_CONFIGURATION_LINEView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get Key(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x08: pointer
  get Value(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: u32
  get ValueLen(): number {
    return this.view.getUint32(16, true);
  }

  // 0x14: pad4

  // 0x00: pointer
  set Key(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(0, BigInt(util.toPointer(value)), true);
  }

  // 0x08: pointer
  set Value(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, BigInt(util.toPointer(value)), true);
  }

  // 0x10: u32
  set ValueLen(value: number) {
    this.view.setUint32(16, value, true);
  }

  // 0x14: pad4
}

/**
 * Windows.Win32.Security.ConfigurationSnapin.SCESVC_CONFIGURATION_INFO (size: 16)
 */
export interface SCESVC_CONFIGURATION_INFO {
  /** u32 */
  Count: number;
  /** ptr */
  Lines: Deno.PointerValue | Uint8Array | null;
}

export const sizeofSCESVC_CONFIGURATION_INFO = 16;

export function allocSCESVC_CONFIGURATION_INFO(data?: Partial<SCESVC_CONFIGURATION_INFO>): Uint8Array {
  const buf = new Uint8Array(sizeofSCESVC_CONFIGURATION_INFO);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.Count !== undefined) view.setUint32(0, Number(data.Count), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.Lines !== undefined) view.setBigUint64(8, data.Lines === null ? 0n : BigInt(util.toPointer(data.Lines)), true);
  return buf;
}

export class SCESVC_CONFIGURATION_INFOView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get Count(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  get Lines(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: u32
  set Count(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  set Lines(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, BigInt(util.toPointer(value)), true);
  }
}

/**
 * Windows.Win32.Security.ConfigurationSnapin.SCESVC_ANALYSIS_LINE (size: 24)
 */
export interface SCESVC_ANALYSIS_LINE {
  /** ptr */
  Key: Deno.PointerValue | Uint8Array | null;
  /** ptr */
  Value: Deno.PointerValue | Uint8Array | null;
  /** u32 */
  ValueLen: number;
}

export const sizeofSCESVC_ANALYSIS_LINE = 24;

export function allocSCESVC_ANALYSIS_LINE(data?: Partial<SCESVC_ANALYSIS_LINE>): Uint8Array {
  const buf = new Uint8Array(sizeofSCESVC_ANALYSIS_LINE);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.Key !== undefined) view.setBigUint64(0, data.Key === null ? 0n : BigInt(util.toPointer(data.Key)), true);
  // 0x08: pointer
  if (data?.Value !== undefined) view.setBigUint64(8, data.Value === null ? 0n : BigInt(util.toPointer(data.Value)), true);
  // 0x10: u32
  if (data?.ValueLen !== undefined) view.setUint32(16, Number(data.ValueLen), true);
  // 0x14: pad4
  return buf;
}

export class SCESVC_ANALYSIS_LINEView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get Key(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x08: pointer
  get Value(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: u32
  get ValueLen(): number {
    return this.view.getUint32(16, true);
  }

  // 0x14: pad4

  // 0x00: pointer
  set Key(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(0, BigInt(util.toPointer(value)), true);
  }

  // 0x08: pointer
  set Value(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, BigInt(util.toPointer(value)), true);
  }

  // 0x10: u32
  set ValueLen(value: number) {
    this.view.setUint32(16, value, true);
  }

  // 0x14: pad4
}

/**
 * Windows.Win32.Security.ConfigurationSnapin.SCESVC_ANALYSIS_INFO (size: 16)
 */
export interface SCESVC_ANALYSIS_INFO {
  /** u32 */
  Count: number;
  /** ptr */
  Lines: Deno.PointerValue | Uint8Array | null;
}

export const sizeofSCESVC_ANALYSIS_INFO = 16;

export function allocSCESVC_ANALYSIS_INFO(data?: Partial<SCESVC_ANALYSIS_INFO>): Uint8Array {
  const buf = new Uint8Array(sizeofSCESVC_ANALYSIS_INFO);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.Count !== undefined) view.setUint32(0, Number(data.Count), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.Lines !== undefined) view.setBigUint64(8, data.Lines === null ? 0n : BigInt(util.toPointer(data.Lines)), true);
  return buf;
}

export class SCESVC_ANALYSIS_INFOView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get Count(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  get Lines(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: u32
  set Count(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  set Lines(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, BigInt(util.toPointer(value)), true);
  }
}

/**
 * Windows.Win32.Security.ConfigurationSnapin.SCESVC_CALLBACK_INFO (size: 40)
 */
export interface SCESVC_CALLBACK_INFO {
  /** ptr */
  sceHandle: Deno.PointerValue | Uint8Array | null;
  /** Windows.Win32.Security.ConfigurationSnapin.PFSCE_QUERY_INFO */
  pfQueryInfo: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Security.ConfigurationSnapin.PFSCE_SET_INFO */
  pfSetInfo: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Security.ConfigurationSnapin.PFSCE_FREE_INFO */
  pfFreeInfo: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Security.ConfigurationSnapin.PFSCE_LOG_INFO */
  pfLogInfo: Uint8Array | Deno.PointerValue | null;
}

export const sizeofSCESVC_CALLBACK_INFO = 40;

export function allocSCESVC_CALLBACK_INFO(data?: Partial<SCESVC_CALLBACK_INFO>): Uint8Array {
  const buf = new Uint8Array(sizeofSCESVC_CALLBACK_INFO);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.sceHandle !== undefined) view.setBigUint64(0, data.sceHandle === null ? 0n : BigInt(util.toPointer(data.sceHandle)), true);
  // 0x08: pointer
  if (data?.pfQueryInfo !== undefined) view.setBigUint64(8, data.pfQueryInfo === null ? 0n : BigInt(util.toPointer(data.pfQueryInfo)), true);
  // 0x10: pointer
  if (data?.pfSetInfo !== undefined) view.setBigUint64(16, data.pfSetInfo === null ? 0n : BigInt(util.toPointer(data.pfSetInfo)), true);
  // 0x18: pointer
  if (data?.pfFreeInfo !== undefined) view.setBigUint64(24, data.pfFreeInfo === null ? 0n : BigInt(util.toPointer(data.pfFreeInfo)), true);
  // 0x20: pointer
  if (data?.pfLogInfo !== undefined) view.setBigUint64(32, data.pfLogInfo === null ? 0n : BigInt(util.toPointer(data.pfLogInfo)), true);
  return buf;
}

export class SCESVC_CALLBACK_INFOView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get sceHandle(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x08: pointer
  get pfQueryInfo(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: pointer
  get pfSetInfo(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(16, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x18: pointer
  get pfFreeInfo(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(24, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x20: pointer
  get pfLogInfo(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(32, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: pointer
  set sceHandle(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(0, BigInt(util.toPointer(value)), true);
  }

  // 0x08: pointer
  set pfQueryInfo(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, BigInt(util.toPointer(value)), true);
  }

  // 0x10: pointer
  set pfSetInfo(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(16, BigInt(util.toPointer(value)), true);
  }

  // 0x18: pointer
  set pfFreeInfo(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(24, BigInt(util.toPointer(value)), true);
  }

  // 0x20: pointer
  set pfLogInfo(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(32, BigInt(util.toPointer(value)), true);
  }
}

// Native Libraries

// Symbols

