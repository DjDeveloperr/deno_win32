/// Auto-generated by Deno Win32: Windows.Win32.UI.Input.Touch.Apis

import * as util from "../../../util.ts";

// Enums
export type GESTURECONFIG_ID = number;
export type TOUCHEVENTF_FLAGS = number;
export type TOUCHINPUTMASKF_MASK = number;
export type REGISTER_TOUCH_WINDOW_FLAGS = number;
export type MANIPULATION_PROCESSOR_MANIPULATIONS = number;

// Constants
export const GID_BEGIN = 1;
export const GID_END = 2;
export const GID_ZOOM = 3;
export const GID_PAN = 4;
export const GID_ROTATE = 5;
export const GID_TWOFINGERTAP = 6;
export const GID_PRESSANDTAP = 7;
export const GID_ROLLOVER = 7;
export const TOUCHEVENTF_MOVE = 1;
export const TOUCHEVENTF_DOWN = 2;
export const TOUCHEVENTF_UP = 4;
export const TOUCHEVENTF_INRANGE = 8;
export const TOUCHEVENTF_PRIMARY = 16;
export const TOUCHEVENTF_NOCOALESCE = 32;
export const TOUCHEVENTF_PEN = 64;
export const TOUCHEVENTF_PALM = 128;
export const TOUCHINPUTMASKF_TIMEFROMSYSTEM = 1;
export const TOUCHINPUTMASKF_EXTRAINFO = 2;
export const TOUCHINPUTMASKF_CONTACTAREA = 4;
export const TWF_FINETOUCH = 1;
export const TWF_WANTPALM = 2;
export const MANIPULATION_NONE = 0;
export const MANIPULATION_TRANSLATE_X = 1;
export const MANIPULATION_TRANSLATE_Y = 2;
export const MANIPULATION_SCALE = 4;
export const MANIPULATION_ROTATE = 8;
export const MANIPULATION_ALL = 15;

// Structs

export type HGESTUREINFO = Deno.PointerValue;

export type HTOUCHINPUT = Deno.PointerValue;

export type HANDLE = Deno.PointerValue;

/**
 * Windows.Win32.UI.Input.Touch.TOUCHINPUT (size: 48)
 */
export interface TOUCHINPUT {
  /** i32 */
  x: number;
  /** i32 */
  y: number;
  /** Windows.Win32.Foundation.HANDLE */
  hSource: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  dwID: number;
  /** Windows.Win32.UI.Input.Touch.TOUCHEVENTF_FLAGS */
  dwFlags: TOUCHEVENTF_FLAGS;
  /** Windows.Win32.UI.Input.Touch.TOUCHINPUTMASKF_MASK */
  dwMask: TOUCHINPUTMASKF_MASK;
  /** u32 */
  dwTime: number;
  /** usize */
  dwExtraInfo: Deno.PointerValue;
  /** u32 */
  cxContact: number;
  /** u32 */
  cyContact: number;
}

export const sizeofTOUCHINPUT = 48;

export function allocTOUCHINPUT(data?: Partial<TOUCHINPUT>): Uint8Array {
  const buf = new Uint8Array(sizeofTOUCHINPUT);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.x !== undefined) view.setInt32(0, Number(data.x), true);
  // 0x04: i32
  if (data?.y !== undefined) view.setInt32(4, Number(data.y), true);
  // 0x08: pointer
  if (data?.hSource !== undefined) view.setBigUint64(8, data.hSource === null ? 0n : BigInt(util.toPointer(data.hSource)), true);
  // 0x10: u32
  if (data?.dwID !== undefined) view.setUint32(16, Number(data.dwID), true);
  // 0x14: u32
  if (data?.dwFlags !== undefined) view.setUint32(20, Number(data.dwFlags), true);
  // 0x18: u32
  if (data?.dwMask !== undefined) view.setUint32(24, Number(data.dwMask), true);
  // 0x1c: u32
  if (data?.dwTime !== undefined) view.setUint32(28, Number(data.dwTime), true);
  // 0x20: usize
  if (data?.dwExtraInfo !== undefined) view.setBigUint64(32, BigInt(data.dwExtraInfo), true);
  // 0x28: u32
  if (data?.cxContact !== undefined) view.setUint32(40, Number(data.cxContact), true);
  // 0x2c: u32
  if (data?.cyContact !== undefined) view.setUint32(44, Number(data.cyContact), true);
  return buf;
}

export class TOUCHINPUTView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: i32
  get x(): number {
    return this.view.getInt32(0, true);
  }

  // 0x04: i32
  get y(): number {
    return this.view.getInt32(4, true);
  }

  // 0x08: pointer
  get hSource(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: u32
  get dwID(): number {
    return this.view.getUint32(16, true);
  }

  // 0x14: u32
  get dwFlags(): number {
    return this.view.getUint32(20, true);
  }

  // 0x18: u32
  get dwMask(): number {
    return this.view.getUint32(24, true);
  }

  // 0x1c: u32
  get dwTime(): number {
    return this.view.getUint32(28, true);
  }

  // 0x20: usize
  get dwExtraInfo(): Deno.PointerValue {
    return Number(this.view.getBigUint64(32, true));
  }

  // 0x28: u32
  get cxContact(): number {
    return this.view.getUint32(40, true);
  }

  // 0x2c: u32
  get cyContact(): number {
    return this.view.getUint32(44, true);
  }

  // 0x00: i32
  set x(value: number) {
    this.view.setInt32(0, value, true);
  }

  // 0x04: i32
  set y(value: number) {
    this.view.setInt32(4, value, true);
  }

  // 0x08: pointer
  set hSource(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, BigInt(util.toPointer(value)), true);
  }

  // 0x10: u32
  set dwID(value: number) {
    this.view.setUint32(16, value, true);
  }

  // 0x14: u32
  set dwFlags(value: number) {
    this.view.setUint32(20, value, true);
  }

  // 0x18: u32
  set dwMask(value: number) {
    this.view.setUint32(24, value, true);
  }

  // 0x1c: u32
  set dwTime(value: number) {
    this.view.setUint32(28, value, true);
  }

  // 0x20: usize
  set dwExtraInfo(value: Deno.PointerValue) {
    this.view.setBigUint64(32, BigInt(value), true);
  }

  // 0x28: u32
  set cxContact(value: number) {
    this.view.setUint32(40, value, true);
  }

  // 0x2c: u32
  set cyContact(value: number) {
    this.view.setUint32(44, value, true);
  }
}

export type HWND = Deno.PointerValue;

/**
 * Windows.Win32.Foundation.POINTS (size: 8)
 */
export interface POINTS {
  /** i16 */
  x: number;
  /** i16 */
  y: number;
}

export const sizeofPOINTS = 8;

export function allocPOINTS(data?: Partial<POINTS>): Uint8Array {
  const buf = new Uint8Array(sizeofPOINTS);
  const view = new DataView(buf.buffer);
  // 0x00: i16
  if (data?.x !== undefined) view.setInt16(0, Number(data.x), true);
  // 0x02: i16
  if (data?.y !== undefined) view.setInt16(2, Number(data.y), true);
  // 0x04: pad4
  return buf;
}

export class POINTSView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: i16
  get x(): number {
    return this.view.getInt16(0, true);
  }

  // 0x02: i16
  get y(): number {
    return this.view.getInt16(2, true);
  }

  // 0x04: pad4

  // 0x00: i16
  set x(value: number) {
    this.view.setInt16(0, value, true);
  }

  // 0x02: i16
  set y(value: number) {
    this.view.setInt16(2, value, true);
  }

  // 0x04: pad4
}

/**
 * Windows.Win32.UI.Input.Touch.GESTUREINFO (size: 56)
 */
export interface GESTUREINFO {
  /** u32 */
  cbSize: number;
  /** u32 */
  dwFlags: number;
  /** u32 */
  dwID: number;
  /** Windows.Win32.Foundation.HWND */
  hwndTarget: Deno.PointerValue | null;
  /** Windows.Win32.Foundation.POINTS */
  ptsLocation: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  dwInstanceID: number;
  /** u32 */
  dwSequenceID: number;
  /** u64 */
  ullArguments: Deno.PointerValue;
  /** u32 */
  cbExtraArgs: number;
}

export const sizeofGESTUREINFO = 56;

export function allocGESTUREINFO(data?: Partial<GESTUREINFO>): Uint8Array {
  const buf = new Uint8Array(sizeofGESTUREINFO);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.cbSize !== undefined) view.setUint32(0, Number(data.cbSize), true);
  // 0x04: u32
  if (data?.dwFlags !== undefined) view.setUint32(4, Number(data.dwFlags), true);
  // 0x08: u32
  if (data?.dwID !== undefined) view.setUint32(8, Number(data.dwID), true);
  // 0x0c: pad4
  // 0x10: pointer
  if (data?.hwndTarget !== undefined) view.setBigUint64(16, data.hwndTarget === null ? 0n : BigInt(util.toPointer(data.hwndTarget)), true);
  // 0x18: pointer
  if (data?.ptsLocation !== undefined) view.setBigUint64(24, data.ptsLocation === null ? 0n : BigInt(util.toPointer(data.ptsLocation)), true);
  // 0x20: u32
  if (data?.dwInstanceID !== undefined) view.setUint32(32, Number(data.dwInstanceID), true);
  // 0x24: u32
  if (data?.dwSequenceID !== undefined) view.setUint32(36, Number(data.dwSequenceID), true);
  // 0x28: u64
  if (data?.ullArguments !== undefined) view.setBigUint64(40, BigInt(data.ullArguments), true);
  // 0x30: u32
  if (data?.cbExtraArgs !== undefined) view.setUint32(48, Number(data.cbExtraArgs), true);
  // 0x34: pad4
  return buf;
}

export class GESTUREINFOView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get cbSize(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: u32
  get dwFlags(): number {
    return this.view.getUint32(4, true);
  }

  // 0x08: u32
  get dwID(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: pad4

  // 0x10: pointer
  get hwndTarget(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(16, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x18: pointer
  get ptsLocation(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(24, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x20: u32
  get dwInstanceID(): number {
    return this.view.getUint32(32, true);
  }

  // 0x24: u32
  get dwSequenceID(): number {
    return this.view.getUint32(36, true);
  }

  // 0x28: u64
  get ullArguments(): Deno.PointerValue {
    return Number(this.view.getBigUint64(40, true));
  }

  // 0x30: u32
  get cbExtraArgs(): number {
    return this.view.getUint32(48, true);
  }

  // 0x34: pad4

  // 0x00: u32
  set cbSize(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: u32
  set dwFlags(value: number) {
    this.view.setUint32(4, value, true);
  }

  // 0x08: u32
  set dwID(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: pad4

  // 0x10: pointer
  set hwndTarget(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(16, BigInt(util.toPointer(value)), true);
  }

  // 0x18: pointer
  set ptsLocation(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(24, BigInt(util.toPointer(value)), true);
  }

  // 0x20: u32
  set dwInstanceID(value: number) {
    this.view.setUint32(32, value, true);
  }

  // 0x24: u32
  set dwSequenceID(value: number) {
    this.view.setUint32(36, value, true);
  }

  // 0x28: u64
  set ullArguments(value: Deno.PointerValue) {
    this.view.setBigUint64(40, BigInt(value), true);
  }

  // 0x30: u32
  set cbExtraArgs(value: number) {
    this.view.setUint32(48, value, true);
  }

  // 0x34: pad4
}

/**
 * Windows.Win32.UI.Input.Touch.GESTURENOTIFYSTRUCT (size: 32)
 */
export interface GESTURENOTIFYSTRUCT {
  /** u32 */
  cbSize: number;
  /** u32 */
  dwFlags: number;
  /** Windows.Win32.Foundation.HWND */
  hwndTarget: Deno.PointerValue | null;
  /** Windows.Win32.Foundation.POINTS */
  ptsLocation: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  dwInstanceID: number;
}

export const sizeofGESTURENOTIFYSTRUCT = 32;

export function allocGESTURENOTIFYSTRUCT(data?: Partial<GESTURENOTIFYSTRUCT>): Uint8Array {
  const buf = new Uint8Array(sizeofGESTURENOTIFYSTRUCT);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.cbSize !== undefined) view.setUint32(0, Number(data.cbSize), true);
  // 0x04: u32
  if (data?.dwFlags !== undefined) view.setUint32(4, Number(data.dwFlags), true);
  // 0x08: pointer
  if (data?.hwndTarget !== undefined) view.setBigUint64(8, data.hwndTarget === null ? 0n : BigInt(util.toPointer(data.hwndTarget)), true);
  // 0x10: pointer
  if (data?.ptsLocation !== undefined) view.setBigUint64(16, data.ptsLocation === null ? 0n : BigInt(util.toPointer(data.ptsLocation)), true);
  // 0x18: u32
  if (data?.dwInstanceID !== undefined) view.setUint32(24, Number(data.dwInstanceID), true);
  // 0x1c: pad4
  return buf;
}

export class GESTURENOTIFYSTRUCTView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get cbSize(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: u32
  get dwFlags(): number {
    return this.view.getUint32(4, true);
  }

  // 0x08: pointer
  get hwndTarget(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: pointer
  get ptsLocation(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(16, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x18: u32
  get dwInstanceID(): number {
    return this.view.getUint32(24, true);
  }

  // 0x1c: pad4

  // 0x00: u32
  set cbSize(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: u32
  set dwFlags(value: number) {
    this.view.setUint32(4, value, true);
  }

  // 0x08: pointer
  set hwndTarget(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, BigInt(util.toPointer(value)), true);
  }

  // 0x10: pointer
  set ptsLocation(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(16, BigInt(util.toPointer(value)), true);
  }

  // 0x18: u32
  set dwInstanceID(value: number) {
    this.view.setUint32(24, value, true);
  }

  // 0x1c: pad4
}

/**
 * Windows.Win32.UI.Input.Touch.GESTURECONFIG (size: 16)
 */
export interface GESTURECONFIG {
  /** Windows.Win32.UI.Input.Touch.GESTURECONFIG_ID */
  dwID: GESTURECONFIG_ID;
  /** u32 */
  dwWant: number;
  /** u32 */
  dwBlock: number;
}

export const sizeofGESTURECONFIG = 16;

export function allocGESTURECONFIG(data?: Partial<GESTURECONFIG>): Uint8Array {
  const buf = new Uint8Array(sizeofGESTURECONFIG);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.dwID !== undefined) view.setUint32(0, Number(data.dwID), true);
  // 0x04: u32
  if (data?.dwWant !== undefined) view.setUint32(4, Number(data.dwWant), true);
  // 0x08: u32
  if (data?.dwBlock !== undefined) view.setUint32(8, Number(data.dwBlock), true);
  // 0x0c: pad4
  return buf;
}

export class GESTURECONFIGView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get dwID(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: u32
  get dwWant(): number {
    return this.view.getUint32(4, true);
  }

  // 0x08: u32
  get dwBlock(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: pad4

  // 0x00: u32
  set dwID(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: u32
  set dwWant(value: number) {
    this.view.setUint32(4, value, true);
  }

  // 0x08: u32
  set dwBlock(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: pad4
}

export type BOOL = number;

// Native Libraries

try {
  var libUSER32_dll = Deno.dlopen("USER32.dll", {
    GetTouchInputInfo: {
      parameters: ["pointer", "u32", "pointer", "i32"],
      result: "i32",
    },
    CloseTouchInputHandle: {
      parameters: ["pointer"],
      result: "i32",
    },
    RegisterTouchWindow: {
      parameters: ["pointer", "u32"],
      result: "i32",
    },
    UnregisterTouchWindow: {
      parameters: ["pointer"],
      result: "i32",
    },
    IsTouchWindow: {
      parameters: ["pointer", "pointer"],
      result: "i32",
    },
    GetGestureInfo: {
      parameters: ["pointer", "pointer"],
      result: "i32",
    },
    GetGestureExtraArgs: {
      parameters: ["pointer", "u32", "pointer"],
      result: "i32",
    },
    CloseGestureInfoHandle: {
      parameters: ["pointer"],
      result: "i32",
    },
    SetGestureConfig: {
      parameters: ["pointer", "u32", "u32", "pointer", "u32"],
      result: "i32",
    },
    GetGestureConfig: {
      parameters: ["pointer", "u32", "u32", "pointer", "pointer", "u32"],
      result: "i32",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function GetTouchInputInfo(
  hTouchInput: Uint8Array | Deno.PointerValue | null /* Windows.Win32.UI.Input.Touch.HTOUCHINPUT */,
  cInputs: number /* u32 */,
  pInputs: Deno.PointerValue | Uint8Array | null /* ptr */,
  cbSize: number /* i32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libUSER32_dll.GetTouchInputInfo(util.toPointer(hTouchInput), cInputs, util.toPointer(pInputs), cbSize));
}

export function CloseTouchInputHandle(
  hTouchInput: Uint8Array | Deno.PointerValue | null /* Windows.Win32.UI.Input.Touch.HTOUCHINPUT */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libUSER32_dll.CloseTouchInputHandle(util.toPointer(hTouchInput)));
}

export function RegisterTouchWindow(
  hwnd: Deno.PointerValue | null /* Windows.Win32.Foundation.HWND */,
  ulFlags: REGISTER_TOUCH_WINDOW_FLAGS /* Windows.Win32.UI.Input.Touch.REGISTER_TOUCH_WINDOW_FLAGS */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libUSER32_dll.RegisterTouchWindow(util.hwndToFfi(hwnd), ulFlags));
}

export function UnregisterTouchWindow(
  hwnd: Deno.PointerValue | null /* Windows.Win32.Foundation.HWND */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libUSER32_dll.UnregisterTouchWindow(util.hwndToFfi(hwnd)));
}

export function IsTouchWindow(
  hwnd: Deno.PointerValue | null /* Windows.Win32.Foundation.HWND */,
  pulFlags: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libUSER32_dll.IsTouchWindow(util.hwndToFfi(hwnd), util.toPointer(pulFlags)));
}

export function GetGestureInfo(
  hGestureInfo: Uint8Array | Deno.PointerValue | null /* Windows.Win32.UI.Input.Touch.HGESTUREINFO */,
  pGestureInfo: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libUSER32_dll.GetGestureInfo(util.toPointer(hGestureInfo), util.toPointer(pGestureInfo)));
}

export function GetGestureExtraArgs(
  hGestureInfo: Uint8Array | Deno.PointerValue | null /* Windows.Win32.UI.Input.Touch.HGESTUREINFO */,
  cbExtraArgs: number /* u32 */,
  pExtraArgs: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libUSER32_dll.GetGestureExtraArgs(util.toPointer(hGestureInfo), cbExtraArgs, util.toPointer(pExtraArgs)));
}

export function CloseGestureInfoHandle(
  hGestureInfo: Uint8Array | Deno.PointerValue | null /* Windows.Win32.UI.Input.Touch.HGESTUREINFO */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libUSER32_dll.CloseGestureInfoHandle(util.toPointer(hGestureInfo)));
}

export function SetGestureConfig(
  hwnd: Deno.PointerValue | null /* Windows.Win32.Foundation.HWND */,
  dwReserved: number /* u32 */,
  cIDs: number /* u32 */,
  pGestureConfig: Deno.PointerValue | Uint8Array | null /* ptr */,
  cbSize: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libUSER32_dll.SetGestureConfig(util.hwndToFfi(hwnd), dwReserved, cIDs, util.toPointer(pGestureConfig), cbSize));
}

export function GetGestureConfig(
  hwnd: Deno.PointerValue | null /* Windows.Win32.Foundation.HWND */,
  dwReserved: number /* u32 */,
  dwFlags: number /* u32 */,
  pcIDs: Deno.PointerValue | Uint8Array | null /* ptr */,
  pGestureConfig: Deno.PointerValue | Uint8Array | null /* ptr */,
  cbSize: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libUSER32_dll.GetGestureConfig(util.hwndToFfi(hwnd), dwReserved, dwFlags, util.toPointer(pcIDs), util.toPointer(pGestureConfig), cbSize));
}

