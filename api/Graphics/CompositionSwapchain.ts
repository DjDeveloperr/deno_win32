/// Auto-generated by Deno Win32: Windows.Win32.Graphics.CompositionSwapchain.Apis

import * as util from "../../util.ts";

// Enums
export type PresentStatisticsKind = number;
export type PresentStatus = number;
export type CompositionFrameInstanceKind = number;
export type DXGI_COLOR_SPACE_TYPE = number;

// Constants
export const PresentStatisticsKind_PresentStatus = 1;
export const PresentStatisticsKind_CompositionFrame = 2;
export const PresentStatisticsKind_IndependentFlipFrame = 3;
export const PresentStatus_Queued = 0;
export const PresentStatus_Skipped = 1;
export const PresentStatus_Canceled = 2;
export const CompositionFrameInstanceKind_ComposedOnScreen = 0;
export const CompositionFrameInstanceKind_ScanoutOnScreen = 1;
export const CompositionFrameInstanceKind_ComposedToIntermediate = 2;
export const DXGI_COLOR_SPACE_RGB_FULL_G22_NONE_P709 = 0;
export const DXGI_COLOR_SPACE_RGB_FULL_G10_NONE_P709 = 1;
export const DXGI_COLOR_SPACE_RGB_STUDIO_G22_NONE_P709 = 2;
export const DXGI_COLOR_SPACE_RGB_STUDIO_G22_NONE_P2020 = 3;
export const DXGI_COLOR_SPACE_RESERVED = 4;
export const DXGI_COLOR_SPACE_YCBCR_FULL_G22_NONE_P709_X601 = 5;
export const DXGI_COLOR_SPACE_YCBCR_STUDIO_G22_LEFT_P601 = 6;
export const DXGI_COLOR_SPACE_YCBCR_FULL_G22_LEFT_P601 = 7;
export const DXGI_COLOR_SPACE_YCBCR_STUDIO_G22_LEFT_P709 = 8;
export const DXGI_COLOR_SPACE_YCBCR_FULL_G22_LEFT_P709 = 9;
export const DXGI_COLOR_SPACE_YCBCR_STUDIO_G22_LEFT_P2020 = 10;
export const DXGI_COLOR_SPACE_YCBCR_FULL_G22_LEFT_P2020 = 11;
export const DXGI_COLOR_SPACE_RGB_FULL_G2084_NONE_P2020 = 12;
export const DXGI_COLOR_SPACE_YCBCR_STUDIO_G2084_LEFT_P2020 = 13;
export const DXGI_COLOR_SPACE_RGB_STUDIO_G2084_NONE_P2020 = 14;
export const DXGI_COLOR_SPACE_YCBCR_STUDIO_G22_TOPLEFT_P2020 = 15;
export const DXGI_COLOR_SPACE_YCBCR_STUDIO_G2084_TOPLEFT_P2020 = 16;
export const DXGI_COLOR_SPACE_RGB_FULL_G22_NONE_P2020 = 17;
export const DXGI_COLOR_SPACE_YCBCR_STUDIO_GHLG_TOPLEFT_P2020 = 18;
export const DXGI_COLOR_SPACE_YCBCR_FULL_GHLG_TOPLEFT_P2020 = 19;
export const DXGI_COLOR_SPACE_RGB_STUDIO_G24_NONE_P709 = 20;
export const DXGI_COLOR_SPACE_RGB_STUDIO_G24_NONE_P2020 = 21;
export const DXGI_COLOR_SPACE_YCBCR_STUDIO_G24_LEFT_P709 = 22;
export const DXGI_COLOR_SPACE_YCBCR_STUDIO_G24_LEFT_P2020 = 23;
export const DXGI_COLOR_SPACE_YCBCR_STUDIO_G24_TOPLEFT_P2020 = 24;
export const DXGI_COLOR_SPACE_CUSTOM = `-1`;

// Structs

/**
 * Windows.Win32.Graphics.CompositionSwapchain.SystemInterruptTime (size: 8)
 */
export interface SystemInterruptTime {
  /** u64 */
  value: bigint | number;
}

export const sizeofSystemInterruptTime = 8;

export function allocSystemInterruptTime(data?: Partial<SystemInterruptTime>): Uint8Array {
  const buf = new Uint8Array(sizeofSystemInterruptTime);
  const view = new DataView(buf.buffer);
  // 0x00: u64
  if (data?.value !== undefined) view.setBigUint64(0, BigInt(data.value), true);
  return buf;
}

export class SystemInterruptTimeView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u64
  get value(): bigint | number {
    return Number(this.view.getBigUint64(0, true));
  }

  // 0x00: u64
  set value(value: bigint | number) {
    this.view.setBigUint64(0, BigInt(value), true);
  }
}

/**
 * Windows.Win32.Graphics.CompositionSwapchain.PresentationTransform (size: 24)
 */
export interface PresentationTransform {
  /** f32 */
  M11: number;
  /** f32 */
  M12: number;
  /** f32 */
  M21: number;
  /** f32 */
  M22: number;
  /** f32 */
  M31: number;
  /** f32 */
  M32: number;
}

export const sizeofPresentationTransform = 24;

export function allocPresentationTransform(data?: Partial<PresentationTransform>): Uint8Array {
  const buf = new Uint8Array(sizeofPresentationTransform);
  const view = new DataView(buf.buffer);
  // 0x00: f32
  if (data?.M11 !== undefined) view.setFloat32(0, Number(data.M11), true);
  // 0x04: f32
  if (data?.M12 !== undefined) view.setFloat32(4, Number(data.M12), true);
  // 0x08: f32
  if (data?.M21 !== undefined) view.setFloat32(8, Number(data.M21), true);
  // 0x0c: f32
  if (data?.M22 !== undefined) view.setFloat32(12, Number(data.M22), true);
  // 0x10: f32
  if (data?.M31 !== undefined) view.setFloat32(16, Number(data.M31), true);
  // 0x14: f32
  if (data?.M32 !== undefined) view.setFloat32(20, Number(data.M32), true);
  return buf;
}

export class PresentationTransformView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: f32
  get M11(): number {
    return this.view.getFloat32(0, true);
  }

  // 0x04: f32
  get M12(): number {
    return this.view.getFloat32(4, true);
  }

  // 0x08: f32
  get M21(): number {
    return this.view.getFloat32(8, true);
  }

  // 0x0c: f32
  get M22(): number {
    return this.view.getFloat32(12, true);
  }

  // 0x10: f32
  get M31(): number {
    return this.view.getFloat32(16, true);
  }

  // 0x14: f32
  get M32(): number {
    return this.view.getFloat32(20, true);
  }

  // 0x00: f32
  set M11(value: number) {
    this.view.setFloat32(0, value, true);
  }

  // 0x04: f32
  set M12(value: number) {
    this.view.setFloat32(4, value, true);
  }

  // 0x08: f32
  set M21(value: number) {
    this.view.setFloat32(8, value, true);
  }

  // 0x0c: f32
  set M22(value: number) {
    this.view.setFloat32(12, value, true);
  }

  // 0x10: f32
  set M31(value: number) {
    this.view.setFloat32(16, value, true);
  }

  // 0x14: f32
  set M32(value: number) {
    this.view.setFloat32(20, value, true);
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
 * Windows.Win32.Graphics.CompositionSwapchain.CompositionFrameDisplayInstance (size: 48)
 */
export interface CompositionFrameDisplayInstance {
  /** Windows.Win32.Foundation.LUID */
  displayAdapterLUID: Uint8Array | Deno.PointerValue;
  /** u32 */
  displayVidPnSourceId: number;
  /** u32 */
  displayUniqueId: number;
  /** Windows.Win32.Foundation.LUID */
  renderAdapterLUID: Uint8Array | Deno.PointerValue;
  /** Windows.Win32.Graphics.CompositionSwapchain.CompositionFrameInstanceKind */
  instanceKind: CompositionFrameInstanceKind;
  /** Windows.Win32.Graphics.CompositionSwapchain.PresentationTransform */
  finalTransform: Uint8Array | Deno.PointerValue;
  /** u8 */
  requiredCrossAdapterCopy: number;
  /** Windows.Win32.Graphics.Dxgi.Common.DXGI_COLOR_SPACE_TYPE */
  colorSpace: DXGI_COLOR_SPACE_TYPE;
}

export const sizeofCompositionFrameDisplayInstance = 48;

export function allocCompositionFrameDisplayInstance(data?: Partial<CompositionFrameDisplayInstance>): Uint8Array {
  const buf = new Uint8Array(sizeofCompositionFrameDisplayInstance);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.displayAdapterLUID !== undefined) view.setBigUint64(0, data.displayAdapterLUID === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.displayAdapterLUID))), true);
  // 0x08: u32
  if (data?.displayVidPnSourceId !== undefined) view.setUint32(8, Number(data.displayVidPnSourceId), true);
  // 0x0c: u32
  if (data?.displayUniqueId !== undefined) view.setUint32(12, Number(data.displayUniqueId), true);
  // 0x10: pointer
  if (data?.renderAdapterLUID !== undefined) view.setBigUint64(16, data.renderAdapterLUID === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.renderAdapterLUID))), true);
  // 0x18: i32
  if (data?.instanceKind !== undefined) view.setInt32(24, Number(data.instanceKind), true);
  // 0x1c: pad4
  // 0x20: pointer
  if (data?.finalTransform !== undefined) view.setBigUint64(32, data.finalTransform === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.finalTransform))), true);
  // 0x28: u8
  if (data?.requiredCrossAdapterCopy !== undefined) view.setUint8(40, Number(data.requiredCrossAdapterCopy));
  // 0x29: i32
  if (data?.colorSpace !== undefined) view.setInt32(41, Number(data.colorSpace), true);
  // 0x2d: pad3
  return buf;
}

export class CompositionFrameDisplayInstanceView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get displayAdapterLUID(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(0, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x08: u32
  get displayVidPnSourceId(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: u32
  get displayUniqueId(): number {
    return this.view.getUint32(12, true);
  }

  // 0x10: pointer
  get renderAdapterLUID(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(16, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x18: i32
  get instanceKind(): number {
    return this.view.getInt32(24, true);
  }

  // 0x1c: pad4

  // 0x20: pointer
  get finalTransform(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(32, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x28: u8
  get requiredCrossAdapterCopy(): number {
    return this.view.getUint8(40);
  }

  // 0x29: i32
  get colorSpace(): number {
    return this.view.getInt32(41, true);
  }

  // 0x2d: pad3

  // 0x00: pointer
  set displayAdapterLUID(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x08: u32
  set displayVidPnSourceId(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: u32
  set displayUniqueId(value: number) {
    this.view.setUint32(12, value, true);
  }

  // 0x10: pointer
  set renderAdapterLUID(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x18: i32
  set instanceKind(value: number) {
    this.view.setInt32(24, value, true);
  }

  // 0x1c: pad4

  // 0x20: pointer
  set finalTransform(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(32, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x28: u8
  set requiredCrossAdapterCopy(value: number) {
    this.view.setUint8(40, value);
  }

  // 0x29: i32
  set colorSpace(value: number) {
    this.view.setInt32(41, value, true);
  }

  // 0x2d: pad3
}

export type HRESULT = number;

// Native Libraries

try {
  var libdcomp_dll = Deno.dlopen("dcomp.dll", {
    CreatePresentationFactory: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "pointer",
      optional: true,
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function CreatePresentationFactory(
  d3dDevice: Uint8Array | Deno.PointerValue /* Windows.Win32.System.Com.IUnknown */,
  riid: Deno.PointerValue | Uint8Array /* ptr */,
  presentationFactory: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libdcomp_dll.CreatePresentationFactory!(util.toPointer(d3dDevice), util.toPointer(riid), util.toPointer(presentationFactory));
}

