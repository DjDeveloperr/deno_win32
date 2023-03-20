/// Auto-generated by Deno Win32: Windows.Win32.UI.Shell.Common.Apis

import * as util from "../../../util.ts";

// Enums
export type STRRET_TYPE = number;
export type PERCEIVED = number;
export type SHCOLSTATE = number;
export type DEVICE_SCALE_FACTOR = number;

// Constants
export const PERCEIVEDFLAG_UNDEFINED = 0;
export const PERCEIVEDFLAG_SOFTCODED = 1;
export const PERCEIVEDFLAG_HARDCODED = 2;
export const PERCEIVEDFLAG_NATIVESUPPORT = 4;
export const PERCEIVEDFLAG_GDIPLUS = 16;
export const PERCEIVEDFLAG_WMSDK = 32;
export const PERCEIVEDFLAG_ZIPFOLDER = 64;
export const STRRET_WSTR = 0;
export const STRRET_OFFSET = 1;
export const STRRET_CSTR = 2;
export const PERCEIVED_TYPE_FIRST = `-3`;
export const PERCEIVED_TYPE_CUSTOM = `-3`;
export const PERCEIVED_TYPE_UNSPECIFIED = `-2`;
export const PERCEIVED_TYPE_FOLDER = `-1`;
export const PERCEIVED_TYPE_UNKNOWN = 0;
export const PERCEIVED_TYPE_TEXT = 1;
export const PERCEIVED_TYPE_IMAGE = 2;
export const PERCEIVED_TYPE_AUDIO = 3;
export const PERCEIVED_TYPE_VIDEO = 4;
export const PERCEIVED_TYPE_COMPRESSED = 5;
export const PERCEIVED_TYPE_DOCUMENT = 6;
export const PERCEIVED_TYPE_SYSTEM = 7;
export const PERCEIVED_TYPE_APPLICATION = 8;
export const PERCEIVED_TYPE_GAMEMEDIA = 9;
export const PERCEIVED_TYPE_CONTACTS = 10;
export const PERCEIVED_TYPE_LAST = 10;
export const SHCOLSTATE_DEFAULT = 0;
export const SHCOLSTATE_TYPE_STR = 1;
export const SHCOLSTATE_TYPE_INT = 2;
export const SHCOLSTATE_TYPE_DATE = 3;
export const SHCOLSTATE_TYPEMASK = 15;
export const SHCOLSTATE_ONBYDEFAULT = 16;
export const SHCOLSTATE_SLOW = 32;
export const SHCOLSTATE_EXTENDED = 64;
export const SHCOLSTATE_SECONDARYUI = 128;
export const SHCOLSTATE_HIDDEN = 256;
export const SHCOLSTATE_PREFER_VARCMP = 512;
export const SHCOLSTATE_PREFER_FMTCMP = 1024;
export const SHCOLSTATE_NOSORTBYFOLDERNESS = 2048;
export const SHCOLSTATE_VIEWONLY = 65536;
export const SHCOLSTATE_BATCHREAD = 131072;
export const SHCOLSTATE_NO_GROUPBY = 262144;
export const SHCOLSTATE_FIXED_WIDTH = 4096;
export const SHCOLSTATE_NODPISCALE = 8192;
export const SHCOLSTATE_FIXED_RATIO = 16384;
export const SHCOLSTATE_DISPLAYMASK = 61440;
export const DEVICE_SCALE_FACTOR_INVALID = 0;
export const SCALE_100_PERCENT = 100;
export const SCALE_120_PERCENT = 120;
export const SCALE_125_PERCENT = 125;
export const SCALE_140_PERCENT = 140;
export const SCALE_150_PERCENT = 150;
export const SCALE_160_PERCENT = 160;
export const SCALE_175_PERCENT = 175;
export const SCALE_180_PERCENT = 180;
export const SCALE_200_PERCENT = 200;
export const SCALE_225_PERCENT = 225;
export const SCALE_250_PERCENT = 250;
export const SCALE_300_PERCENT = 300;
export const SCALE_350_PERCENT = 350;
export const SCALE_400_PERCENT = 400;
export const SCALE_450_PERCENT = 450;
export const SCALE_500_PERCENT = 500;

// Structs

/**
 * Windows.Win32.UI.Shell.Common.SHITEMID (size: 16)
 */
export interface SHITEMID {
  /** u16 */
  cb: number;
  /** array */
  abID: Deno.PointerValue;
}

export const sizeofSHITEMID = 16;

export function allocSHITEMID(data?: Partial<SHITEMID>): Uint8Array {
  const buf = new Uint8Array(sizeofSHITEMID);
  const view = new DataView(buf.buffer);
  // 0x00: u16
  if (data?.cb !== undefined) view.setUint16(0, Number(data.cb), true);
  // 0x02: pad6
  // 0x08: pointer
  if (data?.abID !== undefined) view.setBigUint64(8, data.abID === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.abID))), true);
  return buf;
}

export class SHITEMIDView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u16
  get cb(): number {
    return this.view.getUint16(0, true);
  }

  // 0x02: pad6

  // 0x08: pointer
  get abID(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: u16
  set cb(value: number) {
    this.view.setUint16(0, value, true);
  }

  // 0x02: pad6

  // 0x08: pointer
  set abID(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }
}

/**
 * Windows.Win32.UI.Shell.Common.ITEMIDLIST (size: 8)
 */
export interface ITEMIDLIST {
  /** Windows.Win32.UI.Shell.Common.SHITEMID */
  mkid: Uint8Array | Deno.PointerValue;
}

export const sizeofITEMIDLIST = 8;

export function allocITEMIDLIST(data?: Partial<ITEMIDLIST>): Uint8Array {
  const buf = new Uint8Array(sizeofITEMIDLIST);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.mkid !== undefined) view.setBigUint64(0, data.mkid === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.mkid))), true);
  return buf;
}

export class ITEMIDLISTView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get mkid(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(0, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: pointer
  set mkid(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
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
 * Windows.Win32.UI.Shell.Common.STRRET (size: 16)
 */
export interface STRRET {
  /** u32 */
  uType: number;
  /** _Anonymous_e__Union */
  Anonymous: Uint8Array | Deno.PointerValue;
}

export const sizeofSTRRET = 16;

export function allocSTRRET(data?: Partial<STRRET>): Uint8Array {
  const buf = new Uint8Array(sizeofSTRRET);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.uType !== undefined) view.setUint32(0, Number(data.uType), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.Anonymous !== undefined) view.setBigUint64(8, data.Anonymous === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.Anonymous))), true);
  return buf;
}

export class STRRETView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get uType(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  get Anonymous(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: u32
  set uType(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  set Anonymous(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }
}

/**
 * Windows.Win32.UI.Shell.Common.SHELLDETAILS (size: 16)
 */
export interface SHELLDETAILS {
  /** i32 */
  fmt: number;
  /** i32 */
  cxChar: number;
  /** Windows.Win32.UI.Shell.Common.STRRET */
  str: Uint8Array | Deno.PointerValue;
}

export const sizeofSHELLDETAILS = 16;

export function allocSHELLDETAILS(data?: Partial<SHELLDETAILS>): Uint8Array {
  const buf = new Uint8Array(sizeofSHELLDETAILS);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.fmt !== undefined) view.setInt32(0, Number(data.fmt), true);
  // 0x04: i32
  if (data?.cxChar !== undefined) view.setInt32(4, Number(data.cxChar), true);
  // 0x08: pointer
  if (data?.str !== undefined) view.setBigUint64(8, data.str === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.str))), true);
  return buf;
}

export class SHELLDETAILSView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: i32
  get fmt(): number {
    return this.view.getInt32(0, true);
  }

  // 0x04: i32
  get cxChar(): number {
    return this.view.getInt32(4, true);
  }

  // 0x08: pointer
  get str(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: i32
  set fmt(value: number) {
    this.view.setInt32(0, value, true);
  }

  // 0x04: i32
  set cxChar(value: number) {
    this.view.setInt32(4, value, true);
  }

  // 0x08: pointer
  set str(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }
}

export type PWSTR = Deno.PointerValue | Uint8Array;

/**
 * Windows.Win32.UI.Shell.Common.COMDLG_FILTERSPEC (size: 16)
 */
export interface COMDLG_FILTERSPEC {
  /** Windows.Win32.Foundation.PWSTR */
  pszName: string | null | Uint8Array | Uint16Array;
  /** Windows.Win32.Foundation.PWSTR */
  pszSpec: string | null | Uint8Array | Uint16Array;
}

export const sizeofCOMDLG_FILTERSPEC = 16;

export function allocCOMDLG_FILTERSPEC(data?: Partial<COMDLG_FILTERSPEC>): Uint8Array {
  const buf = new Uint8Array(sizeofCOMDLG_FILTERSPEC);
  const view = new DataView(buf.buffer);
  // 0x00: buffer
  if (data?.pszName !== undefined) {
    (buf as any)._f0 = util.pwstrToFfi(data.pszName);
    view.setBigUint64(0, (buf as any)._f0 === null ? 0n : BigInt(Deno.UnsafePointer.value(Deno.UnsafePointer.of((buf as any)._f0))), true);
  }
  // 0x08: buffer
  if (data?.pszSpec !== undefined) {
    (buf as any)._f8 = util.pwstrToFfi(data.pszSpec);
    view.setBigUint64(8, (buf as any)._f8 === null ? 0n : BigInt(Deno.UnsafePointer.value(Deno.UnsafePointer.of((buf as any)._f8))), true);
  }
  return buf;
}

export class COMDLG_FILTERSPECView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: buffer
  get pszName(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(0, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x08: buffer
  get pszSpec(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: buffer
  set pszName(value: Uint8Array | Deno.PointerValue) {
    (this.buf as any)._f0 = value;
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(util.toPointer((this.buf as any)._f0))), true);
  }

  // 0x08: buffer
  set pszSpec(value: Uint8Array | Deno.PointerValue) {
    (this.buf as any)._f8 = value;
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer((this.buf as any)._f8))), true);
  }
}

// Native Libraries

// Symbols

