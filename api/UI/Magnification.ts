/// Auto-generated by Deno Win32: Windows.Win32.UI.Magnification.Apis

import * as util from "../../util.ts";

// Enums
export type MW_FILTERMODE = number;

// Constants
export const MW_FILTERMODE_EXCLUDE = 0;
export const MW_FILTERMODE_INCLUDE = 1;
export const WC_MAGNIFIERA = `Magnifier`;
export const WC_MAGNIFIERW = `Magnifier`;
export const WC_MAGNIFIER = `Magnifier`;
export const MS_SHOWMAGNIFIEDCURSOR = 1;
export const MS_CLIPAROUNDCURSOR = 2;
export const MS_INVERTCOLORS = 4;

// Structs

/**
 * Windows.Win32.UI.Magnification.MAGTRANSFORM (size: 8)
 */
export interface MAGTRANSFORM {
  /** array */
  v: Deno.PointerValue;
}

export const sizeofMAGTRANSFORM = 8;

export function allocMAGTRANSFORM(data?: Partial<MAGTRANSFORM>): Uint8Array {
  const buf = new Uint8Array(sizeofMAGTRANSFORM);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.v !== undefined) view.setBigUint64(0, data.v === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.v))), true);
  return buf;
}

export class MAGTRANSFORMView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get v(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(0, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: pointer
  set v(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }
}

/**
 * Windows.Win32.UI.Magnification.MAGIMAGEHEADER (size: 32)
 */
export interface MAGIMAGEHEADER {
  /** u32 */
  width: number;
  /** u32 */
  height: number;
  /** System.Guid */
  format: Uint8Array | Deno.PointerValue;
  /** u32 */
  stride: number;
  /** u32 */
  offset: number;
  /** usize */
  cbSize: bigint | number;
}

export const sizeofMAGIMAGEHEADER = 32;

export function allocMAGIMAGEHEADER(data?: Partial<MAGIMAGEHEADER>): Uint8Array {
  const buf = new Uint8Array(sizeofMAGIMAGEHEADER);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.width !== undefined) view.setUint32(0, Number(data.width), true);
  // 0x04: u32
  if (data?.height !== undefined) view.setUint32(4, Number(data.height), true);
  // 0x08: pointer
  if (data?.format !== undefined) view.setBigUint64(8, data.format === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.format))), true);
  // 0x10: u32
  if (data?.stride !== undefined) view.setUint32(16, Number(data.stride), true);
  // 0x14: u32
  if (data?.offset !== undefined) view.setUint32(20, Number(data.offset), true);
  // 0x18: usize
  if (data?.cbSize !== undefined) view.setBigUint64(24, BigInt(data.cbSize), true);
  return buf;
}

export class MAGIMAGEHEADERView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get width(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: u32
  get height(): number {
    return this.view.getUint32(4, true);
  }

  // 0x08: pointer
  get format(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x10: u32
  get stride(): number {
    return this.view.getUint32(16, true);
  }

  // 0x14: u32
  get offset(): number {
    return this.view.getUint32(20, true);
  }

  // 0x18: usize
  get cbSize(): bigint | number {
    return Number(this.view.getBigUint64(24, true));
  }

  // 0x00: u32
  set width(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: u32
  set height(value: number) {
    this.view.setUint32(4, value, true);
  }

  // 0x08: pointer
  set format(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x10: u32
  set stride(value: number) {
    this.view.setUint32(16, value, true);
  }

  // 0x14: u32
  set offset(value: number) {
    this.view.setUint32(20, value, true);
  }

  // 0x18: usize
  set cbSize(value: bigint | number) {
    this.view.setBigUint64(24, BigInt(value), true);
  }
}

/**
 * Windows.Win32.UI.Magnification.MAGCOLOREFFECT (size: 8)
 */
export interface MAGCOLOREFFECT {
  /** array */
  transform: Deno.PointerValue;
}

export const sizeofMAGCOLOREFFECT = 8;

export function allocMAGCOLOREFFECT(data?: Partial<MAGCOLOREFFECT>): Uint8Array {
  const buf = new Uint8Array(sizeofMAGCOLOREFFECT);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.transform !== undefined) view.setBigUint64(0, data.transform === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.transform))), true);
  return buf;
}

export class MAGCOLOREFFECTView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get transform(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(0, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: pointer
  set transform(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }
}

export type BOOL = number;

export type HWND = bigint | number;

/**
 * Windows.Win32.Foundation.RECT (size: 16)
 */
export interface RECT {
  /** i32 */
  left: number;
  /** i32 */
  top: number;
  /** i32 */
  right: number;
  /** i32 */
  bottom: number;
}

export const sizeofRECT = 16;

export function allocRECT(data?: Partial<RECT>): Uint8Array {
  const buf = new Uint8Array(sizeofRECT);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.left !== undefined) view.setInt32(0, Number(data.left), true);
  // 0x04: i32
  if (data?.top !== undefined) view.setInt32(4, Number(data.top), true);
  // 0x08: i32
  if (data?.right !== undefined) view.setInt32(8, Number(data.right), true);
  // 0x0c: i32
  if (data?.bottom !== undefined) view.setInt32(12, Number(data.bottom), true);
  return buf;
}

export class RECTView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: i32
  get left(): number {
    return this.view.getInt32(0, true);
  }

  // 0x04: i32
  get top(): number {
    return this.view.getInt32(4, true);
  }

  // 0x08: i32
  get right(): number {
    return this.view.getInt32(8, true);
  }

  // 0x0c: i32
  get bottom(): number {
    return this.view.getInt32(12, true);
  }

  // 0x00: i32
  set left(value: number) {
    this.view.setInt32(0, value, true);
  }

  // 0x04: i32
  set top(value: number) {
    this.view.setInt32(4, value, true);
  }

  // 0x08: i32
  set right(value: number) {
    this.view.setInt32(8, value, true);
  }

  // 0x0c: i32
  set bottom(value: number) {
    this.view.setInt32(12, value, true);
  }
}

// Native Libraries

try {
  var libMAGNIFICATION_dll = Deno.dlopen("MAGNIFICATION.dll", {
    MagInitialize: {
      parameters: [],
      result: "i32",
      optional: true,
    },
    MagUninitialize: {
      parameters: [],
      result: "i32",
      optional: true,
    },
    MagSetWindowSource: {
      parameters: ["pointer", "pointer"],
      result: "i32",
      optional: true,
    },
    MagGetWindowSource: {
      parameters: ["pointer", "pointer"],
      result: "i32",
      optional: true,
    },
    MagSetWindowTransform: {
      parameters: ["pointer", "pointer"],
      result: "i32",
      optional: true,
    },
    MagGetWindowTransform: {
      parameters: ["pointer", "pointer"],
      result: "i32",
      optional: true,
    },
    MagSetWindowFilterList: {
      parameters: ["pointer", "u32", "i32", "pointer"],
      result: "i32",
      optional: true,
    },
    MagGetWindowFilterList: {
      parameters: ["pointer", "pointer", "i32", "pointer"],
      result: "i32",
      optional: true,
    },
    MagSetImageScalingCallback: {
      parameters: ["pointer", "pointer"],
      result: "i32",
      optional: true,
    },
    MagGetImageScalingCallback: {
      parameters: ["pointer"],
      result: "pointer",
      optional: true,
    },
    MagSetColorEffect: {
      parameters: ["pointer", "pointer"],
      result: "i32",
      optional: true,
    },
    MagGetColorEffect: {
      parameters: ["pointer", "pointer"],
      result: "i32",
      optional: true,
    },
    MagSetFullscreenTransform: {
      parameters: ["f32", "i32", "i32"],
      result: "i32",
      optional: true,
    },
    MagGetFullscreenTransform: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "i32",
      optional: true,
    },
    MagSetFullscreenColorEffect: {
      parameters: ["pointer"],
      result: "i32",
      optional: true,
    },
    MagGetFullscreenColorEffect: {
      parameters: ["pointer"],
      result: "i32",
      optional: true,
    },
    MagSetInputTransform: {
      parameters: ["i32", "pointer", "pointer"],
      result: "i32",
      optional: true,
    },
    MagGetInputTransform: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "i32",
      optional: true,
    },
    MagShowSystemCursor: {
      parameters: ["i32"],
      result: "i32",
      optional: true,
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function MagInitialize(): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libMAGNIFICATION_dll.MagInitialize!());
}

export function MagUninitialize(): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libMAGNIFICATION_dll.MagUninitialize!());
}

export function MagSetWindowSource(
  hwnd: Deno.PointerValue /* Windows.Win32.Foundation.HWND */,
  rect: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.RECT */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libMAGNIFICATION_dll.MagSetWindowSource!((hwnd), util.toPointer(rect)));
}

export function MagGetWindowSource(
  hwnd: Deno.PointerValue /* Windows.Win32.Foundation.HWND */,
  pRect: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libMAGNIFICATION_dll.MagGetWindowSource!((hwnd), util.toPointer(pRect)));
}

export function MagSetWindowTransform(
  hwnd: Deno.PointerValue /* Windows.Win32.Foundation.HWND */,
  pTransform: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libMAGNIFICATION_dll.MagSetWindowTransform!((hwnd), util.toPointer(pTransform)));
}

export function MagGetWindowTransform(
  hwnd: Deno.PointerValue /* Windows.Win32.Foundation.HWND */,
  pTransform: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libMAGNIFICATION_dll.MagGetWindowTransform!((hwnd), util.toPointer(pTransform)));
}

export function MagSetWindowFilterList(
  hwnd: Deno.PointerValue /* Windows.Win32.Foundation.HWND */,
  dwFilterMode: MW_FILTERMODE /* Windows.Win32.UI.Magnification.MW_FILTERMODE */,
  count: number /* i32 */,
  pHWND: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libMAGNIFICATION_dll.MagSetWindowFilterList!((hwnd), dwFilterMode, count, util.toPointer(pHWND)));
}

export function MagGetWindowFilterList(
  hwnd: Deno.PointerValue /* Windows.Win32.Foundation.HWND */,
  pdwFilterMode: Deno.PointerValue | Uint8Array /* ptr */,
  count: number /* i32 */,
  pHWND: Deno.PointerValue | Uint8Array /* ptr */,
): number /* i32 */ {
  return libMAGNIFICATION_dll.MagGetWindowFilterList!((hwnd), util.toPointer(pdwFilterMode), count, util.toPointer(pHWND));
}

export function MagSetImageScalingCallback(
  hwnd: Deno.PointerValue /* Windows.Win32.Foundation.HWND */,
  callback: Uint8Array | Deno.PointerValue /* Windows.Win32.UI.Magnification.MagImageScalingCallback */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libMAGNIFICATION_dll.MagSetImageScalingCallback!((hwnd), util.toPointer(callback)));
}

export function MagGetImageScalingCallback(
  hwnd: Deno.PointerValue /* Windows.Win32.Foundation.HWND */,
): Deno.PointerValue /* Windows.Win32.UI.Magnification.MagImageScalingCallback */ {
  return libMAGNIFICATION_dll.MagGetImageScalingCallback!((hwnd));
}

export function MagSetColorEffect(
  hwnd: Deno.PointerValue /* Windows.Win32.Foundation.HWND */,
  pEffect: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libMAGNIFICATION_dll.MagSetColorEffect!((hwnd), util.toPointer(pEffect)));
}

export function MagGetColorEffect(
  hwnd: Deno.PointerValue /* Windows.Win32.Foundation.HWND */,
  pEffect: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libMAGNIFICATION_dll.MagGetColorEffect!((hwnd), util.toPointer(pEffect)));
}

export function MagSetFullscreenTransform(
  magLevel: number /* f32 */,
  xOffset: number /* i32 */,
  yOffset: number /* i32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libMAGNIFICATION_dll.MagSetFullscreenTransform!(magLevel, xOffset, yOffset));
}

export function MagGetFullscreenTransform(
  pMagLevel: Deno.PointerValue | Uint8Array /* ptr */,
  pxOffset: Deno.PointerValue | Uint8Array /* ptr */,
  pyOffset: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libMAGNIFICATION_dll.MagGetFullscreenTransform!(util.toPointer(pMagLevel), util.toPointer(pxOffset), util.toPointer(pyOffset)));
}

export function MagSetFullscreenColorEffect(
  pEffect: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libMAGNIFICATION_dll.MagSetFullscreenColorEffect!(util.toPointer(pEffect)));
}

export function MagGetFullscreenColorEffect(
  pEffect: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libMAGNIFICATION_dll.MagGetFullscreenColorEffect!(util.toPointer(pEffect)));
}

export function MagSetInputTransform(
  fEnabled: boolean /* Windows.Win32.Foundation.BOOL */,
  pRectSource: Deno.PointerValue | Uint8Array /* ptr */,
  pRectDest: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libMAGNIFICATION_dll.MagSetInputTransform!(util.boolToFfi(fEnabled), util.toPointer(pRectSource), util.toPointer(pRectDest)));
}

export function MagGetInputTransform(
  pfEnabled: Deno.PointerValue | Uint8Array /* ptr */,
  pRectSource: Deno.PointerValue | Uint8Array /* ptr */,
  pRectDest: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libMAGNIFICATION_dll.MagGetInputTransform!(util.toPointer(pfEnabled), util.toPointer(pRectSource), util.toPointer(pRectDest)));
}

export function MagShowSystemCursor(
  fShowCursor: boolean /* Windows.Win32.Foundation.BOOL */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libMAGNIFICATION_dll.MagShowSystemCursor!(util.boolToFfi(fShowCursor)));
}

