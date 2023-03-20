/// Auto-generated by Deno Win32: Windows.Win32.Graphics.DirectComposition.Apis

import * as util from "../../util.ts";

// Enums
export type DCOMPOSITION_BITMAP_INTERPOLATION_MODE = number;
export type DCOMPOSITION_BORDER_MODE = number;
export type DCOMPOSITION_COMPOSITE_MODE = number;
export type DCOMPOSITION_BACKFACE_VISIBILITY = number;
export type DCOMPOSITION_OPACITY_MODE = number;
export type DCOMPOSITION_DEPTH_MODE = number;
export type COMPOSITION_FRAME_ID_TYPE = number;

// Constants
export const COMPOSITIONOBJECT_READ = 1;
export const COMPOSITIONOBJECT_WRITE = 2;
export const DCOMPOSITION_MAX_WAITFORCOMPOSITORCLOCK_OBJECTS = 32;
export const COMPOSITION_STATS_MAX_TARGETS = 256;
export const DCOMPOSITION_BITMAP_INTERPOLATION_MODE_NEAREST_NEIGHBOR = 0;
export const DCOMPOSITION_BITMAP_INTERPOLATION_MODE_LINEAR = 1;
export const DCOMPOSITION_BITMAP_INTERPOLATION_MODE_INHERIT = `-1`;
export const DCOMPOSITION_BORDER_MODE_SOFT = 0;
export const DCOMPOSITION_BORDER_MODE_HARD = 1;
export const DCOMPOSITION_BORDER_MODE_INHERIT = `-1`;
export const DCOMPOSITION_COMPOSITE_MODE_SOURCE_OVER = 0;
export const DCOMPOSITION_COMPOSITE_MODE_DESTINATION_INVERT = 1;
export const DCOMPOSITION_COMPOSITE_MODE_MIN_BLEND = 2;
export const DCOMPOSITION_COMPOSITE_MODE_INHERIT = `-1`;
export const DCOMPOSITION_BACKFACE_VISIBILITY_VISIBLE = 0;
export const DCOMPOSITION_BACKFACE_VISIBILITY_HIDDEN = 1;
export const DCOMPOSITION_BACKFACE_VISIBILITY_INHERIT = `-1`;
export const DCOMPOSITION_OPACITY_MODE_LAYER = 0;
export const DCOMPOSITION_OPACITY_MODE_MULTIPLY = 1;
export const DCOMPOSITION_OPACITY_MODE_INHERIT = `-1`;
export const DCOMPOSITION_DEPTH_MODE_TREE = 0;
export const DCOMPOSITION_DEPTH_MODE_SPATIAL = 1;
export const DCOMPOSITION_DEPTH_MODE_SORTED = 3;
export const DCOMPOSITION_DEPTH_MODE_INHERIT = `-1`;
export const COMPOSITION_FRAME_ID_CREATED = 0;
export const COMPOSITION_FRAME_ID_CONFIRMED = 1;
export const COMPOSITION_FRAME_ID_COMPLETED = 2;

// Structs

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

export type PWSTR = Deno.PointerValue | Uint8Array;

/**
 * _u_e__Struct (size: 16)
 */
export interface _u_e__Struct {
  /** u32 */
  dwValue: number;
  /** Windows.Win32.Foundation.PWSTR */
  pwszName: string | null | Uint8Array | Uint16Array;
}

export const sizeof_u_e__Struct = 16;

export function alloc_u_e__Struct(data?: Partial<_u_e__Struct>): Uint8Array {
  const buf = new Uint8Array(sizeof_u_e__Struct);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.dwValue !== undefined) view.setUint32(0, Number(data.dwValue), true);
  // 0x04: pad4
  // 0x08: buffer
  if (data?.pwszName !== undefined) {
    (buf as any)._f8 = util.pwstrToFfi(data.pwszName);
    view.setBigUint64(8, (buf as any)._f8 === null ? 0n : BigInt(Deno.UnsafePointer.value(Deno.UnsafePointer.of((buf as any)._f8))), true);
  }
  return buf;
}

export class _u_e__StructView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get dwValue(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: pad4

  // 0x08: buffer
  get pwszName(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: u32
  set dwValue(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: pad4

  // 0x08: buffer
  set pwszName(value: Uint8Array | Deno.PointerValue) {
    (this.buf as any)._f8 = value;
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer((this.buf as any)._f8))), true);
  }
}

/**
 * Windows.Win32.Foundation.LARGE_INTEGER (size: 24)
 */
export interface LARGE_INTEGER {
  /** _Anonymous_e__Struct */
  Anonymous: Uint8Array | Deno.PointerValue;
  /** _u_e__Struct */
  u: Uint8Array | Deno.PointerValue;
  /** i64 */
  QuadPart: Deno.PointerValue;
}

export const sizeofLARGE_INTEGER = 24;

export function allocLARGE_INTEGER(data?: Partial<LARGE_INTEGER>): Uint8Array {
  const buf = new Uint8Array(sizeofLARGE_INTEGER);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.Anonymous !== undefined) view.setBigUint64(0, data.Anonymous === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.Anonymous))), true);
  // 0x08: pointer
  if (data?.u !== undefined) view.setBigUint64(8, data.u === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.u))), true);
  // 0x10: i64
  if (data?.QuadPart !== undefined) view.setBigInt64(16, BigInt(data.QuadPart), true);
  return buf;
}

export class LARGE_INTEGERView {
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
  get u(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x10: i64
  get QuadPart(): Deno.PointerValue {
    return Number(this.view.getBigInt64(16, true));
  }

  // 0x00: pointer
  set Anonymous(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x08: pointer
  set u(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x10: i64
  set QuadPart(value: Deno.PointerValue) {
    this.view.setBigInt64(16, BigInt(value), true);
  }
}

/**
 * Windows.Win32.Graphics.Dxgi.Common.DXGI_RATIONAL (size: 8)
 */
export interface DXGI_RATIONAL {
  /** u32 */
  Numerator: number;
  /** u32 */
  Denominator: number;
}

export const sizeofDXGI_RATIONAL = 8;

export function allocDXGI_RATIONAL(data?: Partial<DXGI_RATIONAL>): Uint8Array {
  const buf = new Uint8Array(sizeofDXGI_RATIONAL);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.Numerator !== undefined) view.setUint32(0, Number(data.Numerator), true);
  // 0x04: u32
  if (data?.Denominator !== undefined) view.setUint32(4, Number(data.Denominator), true);
  return buf;
}

export class DXGI_RATIONALView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get Numerator(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: u32
  get Denominator(): number {
    return this.view.getUint32(4, true);
  }

  // 0x00: u32
  set Numerator(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: u32
  set Denominator(value: number) {
    this.view.setUint32(4, value, true);
  }
}

/**
 * Windows.Win32.Graphics.DirectComposition.DCOMPOSITION_FRAME_STATISTICS (size: 40)
 */
export interface DCOMPOSITION_FRAME_STATISTICS {
  /** Windows.Win32.Foundation.LARGE_INTEGER */
  lastFrameTime: Uint8Array | Deno.PointerValue;
  /** Windows.Win32.Graphics.Dxgi.Common.DXGI_RATIONAL */
  currentCompositionRate: Uint8Array | Deno.PointerValue;
  /** Windows.Win32.Foundation.LARGE_INTEGER */
  currentTime: Uint8Array | Deno.PointerValue;
  /** Windows.Win32.Foundation.LARGE_INTEGER */
  timeFrequency: Uint8Array | Deno.PointerValue;
  /** Windows.Win32.Foundation.LARGE_INTEGER */
  nextEstimatedFrameTime: Uint8Array | Deno.PointerValue;
}

export const sizeofDCOMPOSITION_FRAME_STATISTICS = 40;

export function allocDCOMPOSITION_FRAME_STATISTICS(data?: Partial<DCOMPOSITION_FRAME_STATISTICS>): Uint8Array {
  const buf = new Uint8Array(sizeofDCOMPOSITION_FRAME_STATISTICS);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.lastFrameTime !== undefined) view.setBigUint64(0, data.lastFrameTime === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.lastFrameTime))), true);
  // 0x08: pointer
  if (data?.currentCompositionRate !== undefined) view.setBigUint64(8, data.currentCompositionRate === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.currentCompositionRate))), true);
  // 0x10: pointer
  if (data?.currentTime !== undefined) view.setBigUint64(16, data.currentTime === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.currentTime))), true);
  // 0x18: pointer
  if (data?.timeFrequency !== undefined) view.setBigUint64(24, data.timeFrequency === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.timeFrequency))), true);
  // 0x20: pointer
  if (data?.nextEstimatedFrameTime !== undefined) view.setBigUint64(32, data.nextEstimatedFrameTime === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.nextEstimatedFrameTime))), true);
  return buf;
}

export class DCOMPOSITION_FRAME_STATISTICSView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get lastFrameTime(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(0, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x08: pointer
  get currentCompositionRate(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x10: pointer
  get currentTime(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(16, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x18: pointer
  get timeFrequency(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(24, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x20: pointer
  get nextEstimatedFrameTime(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(32, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: pointer
  set lastFrameTime(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x08: pointer
  set currentCompositionRate(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x10: pointer
  set currentTime(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x18: pointer
  set timeFrequency(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x20: pointer
  set nextEstimatedFrameTime(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(32, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }
}

/**
 * Windows.Win32.Graphics.DirectComposition.COMPOSITION_FRAME_STATS (size: 24)
 */
export interface COMPOSITION_FRAME_STATS {
  /** u64 */
  startTime: Deno.PointerValue;
  /** u64 */
  targetTime: Deno.PointerValue;
  /** u64 */
  framePeriod: Deno.PointerValue;
}

export const sizeofCOMPOSITION_FRAME_STATS = 24;

export function allocCOMPOSITION_FRAME_STATS(data?: Partial<COMPOSITION_FRAME_STATS>): Uint8Array {
  const buf = new Uint8Array(sizeofCOMPOSITION_FRAME_STATS);
  const view = new DataView(buf.buffer);
  // 0x00: u64
  if (data?.startTime !== undefined) view.setBigUint64(0, BigInt(data.startTime), true);
  // 0x08: u64
  if (data?.targetTime !== undefined) view.setBigUint64(8, BigInt(data.targetTime), true);
  // 0x10: u64
  if (data?.framePeriod !== undefined) view.setBigUint64(16, BigInt(data.framePeriod), true);
  return buf;
}

export class COMPOSITION_FRAME_STATSView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u64
  get startTime(): Deno.PointerValue {
    return Number(this.view.getBigUint64(0, true));
  }

  // 0x08: u64
  get targetTime(): Deno.PointerValue {
    return Number(this.view.getBigUint64(8, true));
  }

  // 0x10: u64
  get framePeriod(): Deno.PointerValue {
    return Number(this.view.getBigUint64(16, true));
  }

  // 0x00: u64
  set startTime(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(value), true);
  }

  // 0x08: u64
  set targetTime(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(value), true);
  }

  // 0x10: u64
  set framePeriod(value: Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(value), true);
  }
}

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

export class LUIDView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get LowPart(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: i32
  get HighPart(): number {
    return this.view.getInt32(4, true);
  }

  // 0x00: u32
  set LowPart(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: i32
  set HighPart(value: number) {
    this.view.setInt32(4, value, true);
  }
}

/**
 * Windows.Win32.Graphics.DirectComposition.COMPOSITION_TARGET_ID (size: 32)
 */
export interface COMPOSITION_TARGET_ID {
  /** Windows.Win32.Foundation.LUID */
  displayAdapterLuid: Uint8Array | Deno.PointerValue;
  /** Windows.Win32.Foundation.LUID */
  renderAdapterLuid: Uint8Array | Deno.PointerValue;
  /** u32 */
  vidPnSourceId: number;
  /** u32 */
  vidPnTargetId: number;
  /** u32 */
  uniqueId: number;
}

export const sizeofCOMPOSITION_TARGET_ID = 32;

export function allocCOMPOSITION_TARGET_ID(data?: Partial<COMPOSITION_TARGET_ID>): Uint8Array {
  const buf = new Uint8Array(sizeofCOMPOSITION_TARGET_ID);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.displayAdapterLuid !== undefined) view.setBigUint64(0, data.displayAdapterLuid === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.displayAdapterLuid))), true);
  // 0x08: pointer
  if (data?.renderAdapterLuid !== undefined) view.setBigUint64(8, data.renderAdapterLuid === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.renderAdapterLuid))), true);
  // 0x10: u32
  if (data?.vidPnSourceId !== undefined) view.setUint32(16, Number(data.vidPnSourceId), true);
  // 0x14: u32
  if (data?.vidPnTargetId !== undefined) view.setUint32(20, Number(data.vidPnTargetId), true);
  // 0x18: u32
  if (data?.uniqueId !== undefined) view.setUint32(24, Number(data.uniqueId), true);
  // 0x1c: pad4
  return buf;
}

export class COMPOSITION_TARGET_IDView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get displayAdapterLuid(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(0, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x08: pointer
  get renderAdapterLuid(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x10: u32
  get vidPnSourceId(): number {
    return this.view.getUint32(16, true);
  }

  // 0x14: u32
  get vidPnTargetId(): number {
    return this.view.getUint32(20, true);
  }

  // 0x18: u32
  get uniqueId(): number {
    return this.view.getUint32(24, true);
  }

  // 0x1c: pad4

  // 0x00: pointer
  set displayAdapterLuid(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x08: pointer
  set renderAdapterLuid(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x10: u32
  set vidPnSourceId(value: number) {
    this.view.setUint32(16, value, true);
  }

  // 0x14: u32
  set vidPnTargetId(value: number) {
    this.view.setUint32(20, value, true);
  }

  // 0x18: u32
  set uniqueId(value: number) {
    this.view.setUint32(24, value, true);
  }

  // 0x1c: pad4
}

/**
 * Windows.Win32.Graphics.DirectComposition.COMPOSITION_STATS (size: 24)
 */
export interface COMPOSITION_STATS {
  /** u32 */
  presentCount: number;
  /** u32 */
  refreshCount: number;
  /** u32 */
  virtualRefreshCount: number;
  /** u64 */
  time: Deno.PointerValue;
}

export const sizeofCOMPOSITION_STATS = 24;

export function allocCOMPOSITION_STATS(data?: Partial<COMPOSITION_STATS>): Uint8Array {
  const buf = new Uint8Array(sizeofCOMPOSITION_STATS);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.presentCount !== undefined) view.setUint32(0, Number(data.presentCount), true);
  // 0x04: u32
  if (data?.refreshCount !== undefined) view.setUint32(4, Number(data.refreshCount), true);
  // 0x08: u32
  if (data?.virtualRefreshCount !== undefined) view.setUint32(8, Number(data.virtualRefreshCount), true);
  // 0x0c: pad4
  // 0x10: u64
  if (data?.time !== undefined) view.setBigUint64(16, BigInt(data.time), true);
  return buf;
}

export class COMPOSITION_STATSView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get presentCount(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: u32
  get refreshCount(): number {
    return this.view.getUint32(4, true);
  }

  // 0x08: u32
  get virtualRefreshCount(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: pad4

  // 0x10: u64
  get time(): Deno.PointerValue {
    return Number(this.view.getBigUint64(16, true));
  }

  // 0x00: u32
  set presentCount(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: u32
  set refreshCount(value: number) {
    this.view.setUint32(4, value, true);
  }

  // 0x08: u32
  set virtualRefreshCount(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: pad4

  // 0x10: u64
  set time(value: Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(value), true);
  }
}

/**
 * Windows.Win32.Graphics.DirectComposition.COMPOSITION_TARGET_STATS (size: 40)
 */
export interface COMPOSITION_TARGET_STATS {
  /** u32 */
  outstandingPresents: number;
  /** u64 */
  presentTime: Deno.PointerValue;
  /** u64 */
  vblankDuration: Deno.PointerValue;
  /** Windows.Win32.Graphics.DirectComposition.COMPOSITION_STATS */
  presentedStats: Uint8Array | Deno.PointerValue;
  /** Windows.Win32.Graphics.DirectComposition.COMPOSITION_STATS */
  completedStats: Uint8Array | Deno.PointerValue;
}

export const sizeofCOMPOSITION_TARGET_STATS = 40;

export function allocCOMPOSITION_TARGET_STATS(data?: Partial<COMPOSITION_TARGET_STATS>): Uint8Array {
  const buf = new Uint8Array(sizeofCOMPOSITION_TARGET_STATS);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.outstandingPresents !== undefined) view.setUint32(0, Number(data.outstandingPresents), true);
  // 0x04: pad4
  // 0x08: u64
  if (data?.presentTime !== undefined) view.setBigUint64(8, BigInt(data.presentTime), true);
  // 0x10: u64
  if (data?.vblankDuration !== undefined) view.setBigUint64(16, BigInt(data.vblankDuration), true);
  // 0x18: pointer
  if (data?.presentedStats !== undefined) view.setBigUint64(24, data.presentedStats === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.presentedStats))), true);
  // 0x20: pointer
  if (data?.completedStats !== undefined) view.setBigUint64(32, data.completedStats === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.completedStats))), true);
  return buf;
}

export class COMPOSITION_TARGET_STATSView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get outstandingPresents(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: pad4

  // 0x08: u64
  get presentTime(): Deno.PointerValue {
    return Number(this.view.getBigUint64(8, true));
  }

  // 0x10: u64
  get vblankDuration(): Deno.PointerValue {
    return Number(this.view.getBigUint64(16, true));
  }

  // 0x18: pointer
  get presentedStats(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(24, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x20: pointer
  get completedStats(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(32, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: u32
  set outstandingPresents(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: pad4

  // 0x08: u64
  set presentTime(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(value), true);
  }

  // 0x10: u64
  set vblankDuration(value: Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(value), true);
  }

  // 0x18: pointer
  set presentedStats(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x20: pointer
  set completedStats(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(32, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }
}

/**
 * Windows.Win32.Graphics.DirectComposition.DCompositionInkTrailPoint (size: 16)
 */
export interface DCompositionInkTrailPoint {
  /** f32 */
  x: number;
  /** f32 */
  y: number;
  /** f32 */
  radius: number;
}

export const sizeofDCompositionInkTrailPoint = 16;

export function allocDCompositionInkTrailPoint(data?: Partial<DCompositionInkTrailPoint>): Uint8Array {
  const buf = new Uint8Array(sizeofDCompositionInkTrailPoint);
  const view = new DataView(buf.buffer);
  // 0x00: f32
  if (data?.x !== undefined) view.setFloat32(0, Number(data.x), true);
  // 0x04: f32
  if (data?.y !== undefined) view.setFloat32(4, Number(data.y), true);
  // 0x08: f32
  if (data?.radius !== undefined) view.setFloat32(8, Number(data.radius), true);
  // 0x0c: pad4
  return buf;
}

export class DCompositionInkTrailPointView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: f32
  get x(): number {
    return this.view.getFloat32(0, true);
  }

  // 0x04: f32
  get y(): number {
    return this.view.getFloat32(4, true);
  }

  // 0x08: f32
  get radius(): number {
    return this.view.getFloat32(8, true);
  }

  // 0x0c: pad4

  // 0x00: f32
  set x(value: number) {
    this.view.setFloat32(0, value, true);
  }

  // 0x04: f32
  set y(value: number) {
    this.view.setFloat32(4, value, true);
  }

  // 0x08: f32
  set radius(value: number) {
    this.view.setFloat32(8, value, true);
  }

  // 0x0c: pad4
}

export type HRESULT = number;

export type HWND = Deno.PointerValue;

export type BOOL = number;

// Native Libraries

try {
  var libdcomp_dll = Deno.dlopen("dcomp.dll", {
    DCompositionCreateDevice: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "pointer",
    },
    DCompositionCreateDevice2: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "pointer",
    },
    DCompositionCreateDevice3: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "pointer",
    },
    DCompositionCreateSurfaceHandle: {
      parameters: ["u32", "pointer", "pointer"],
      result: "pointer",
    },
    DCompositionAttachMouseWheelToHwnd: {
      parameters: ["pointer", "pointer", "i32"],
      result: "pointer",
    },
    DCompositionAttachMouseDragToHwnd: {
      parameters: ["pointer", "pointer", "i32"],
      result: "pointer",
    },
    DCompositionGetFrameId: {
      parameters: ["i32", "pointer"],
      result: "pointer",
    },
    DCompositionGetStatistics: {
      parameters: ["u64", "pointer", "u32", "pointer", "pointer"],
      result: "pointer",
    },
    DCompositionGetTargetStatistics: {
      parameters: ["u64", "pointer", "pointer"],
      result: "pointer",
    },
    DCompositionBoostCompositorClock: {
      parameters: ["i32"],
      result: "pointer",
    },
    DCompositionWaitForCompositorClock: {
      parameters: ["u32", "pointer", "u32"],
      result: "u32",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function DCompositionCreateDevice(
  dxgiDevice: Uint8Array | Deno.PointerValue /* Windows.Win32.Graphics.Dxgi.IDXGIDevice */,
  iid: Deno.PointerValue | Uint8Array /* ptr */,
  dcompositionDevice: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libdcomp_dll.DCompositionCreateDevice(util.toPointer(dxgiDevice), util.toPointer(iid), util.toPointer(dcompositionDevice));
}

export function DCompositionCreateDevice2(
  renderingDevice: Uint8Array | Deno.PointerValue /* Windows.Win32.System.Com.IUnknown */,
  iid: Deno.PointerValue | Uint8Array /* ptr */,
  dcompositionDevice: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libdcomp_dll.DCompositionCreateDevice2(util.toPointer(renderingDevice), util.toPointer(iid), util.toPointer(dcompositionDevice));
}

export function DCompositionCreateDevice3(
  renderingDevice: Uint8Array | Deno.PointerValue /* Windows.Win32.System.Com.IUnknown */,
  iid: Deno.PointerValue | Uint8Array /* ptr */,
  dcompositionDevice: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libdcomp_dll.DCompositionCreateDevice3(util.toPointer(renderingDevice), util.toPointer(iid), util.toPointer(dcompositionDevice));
}

export function DCompositionCreateSurfaceHandle(
  desiredAccess: number /* u32 */,
  securityAttributes: Deno.PointerValue | Uint8Array /* ptr */,
  surfaceHandle: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libdcomp_dll.DCompositionCreateSurfaceHandle(desiredAccess, util.toPointer(securityAttributes), util.toPointer(surfaceHandle));
}

export function DCompositionAttachMouseWheelToHwnd(
  visual: Uint8Array | Deno.PointerValue /* Windows.Win32.Graphics.DirectComposition.IDCompositionVisual */,
  hwnd: Deno.PointerValue /* Windows.Win32.Foundation.HWND */,
  enable: boolean /* Windows.Win32.Foundation.BOOL */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libdcomp_dll.DCompositionAttachMouseWheelToHwnd(util.toPointer(visual), (hwnd), util.boolToFfi(enable));
}

export function DCompositionAttachMouseDragToHwnd(
  visual: Uint8Array | Deno.PointerValue /* Windows.Win32.Graphics.DirectComposition.IDCompositionVisual */,
  hwnd: Deno.PointerValue /* Windows.Win32.Foundation.HWND */,
  enable: boolean /* Windows.Win32.Foundation.BOOL */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libdcomp_dll.DCompositionAttachMouseDragToHwnd(util.toPointer(visual), (hwnd), util.boolToFfi(enable));
}

export function DCompositionGetFrameId(
  frameIdType: COMPOSITION_FRAME_ID_TYPE /* Windows.Win32.Graphics.DirectComposition.COMPOSITION_FRAME_ID_TYPE */,
  frameId: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libdcomp_dll.DCompositionGetFrameId(frameIdType, util.toPointer(frameId));
}

export function DCompositionGetStatistics(
  frameId: Deno.PointerValue /* u64 */,
  frameStats: Deno.PointerValue | Uint8Array /* ptr */,
  targetIdCount: number /* u32 */,
  targetIds: Deno.PointerValue | Uint8Array /* ptr */,
  actualTargetIdCount: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libdcomp_dll.DCompositionGetStatistics(frameId, util.toPointer(frameStats), targetIdCount, util.toPointer(targetIds), util.toPointer(actualTargetIdCount));
}

export function DCompositionGetTargetStatistics(
  frameId: Deno.PointerValue /* u64 */,
  targetId: Deno.PointerValue | Uint8Array /* ptr */,
  targetStats: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libdcomp_dll.DCompositionGetTargetStatistics(frameId, util.toPointer(targetId), util.toPointer(targetStats));
}

export function DCompositionBoostCompositorClock(
  enable: boolean /* Windows.Win32.Foundation.BOOL */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libdcomp_dll.DCompositionBoostCompositorClock(util.boolToFfi(enable));
}

export function DCompositionWaitForCompositorClock(
  count: number /* u32 */,
  handles: Deno.PointerValue | Uint8Array /* ptr */,
  timeoutInMs: number /* u32 */,
): number /* u32 */ {
  return libdcomp_dll.DCompositionWaitForCompositorClock(count, util.toPointer(handles), timeoutInMs);
}

