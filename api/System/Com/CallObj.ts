/// Auto-generated by Deno Win32: Windows.Win32.System.Com.CallObj.Apis

import * as util from "../../../util.ts";

// Enums
export type CALLFRAME_COPY = number;
export type CALLFRAME_FREE = number;
export type CALLFRAME_NULL = number;
export type CALLFRAME_WALK = number;

// Constants
export const CALLFRAME_COPY_NESTED = 1;
export const CALLFRAME_COPY_INDEPENDENT = 2;
export const CALLFRAME_FREE_NONE = 0;
export const CALLFRAME_FREE_IN = 1;
export const CALLFRAME_FREE_INOUT = 2;
export const CALLFRAME_FREE_OUT = 4;
export const CALLFRAME_FREE_TOP_INOUT = 8;
export const CALLFRAME_FREE_TOP_OUT = 16;
export const CALLFRAME_FREE_ALL = 31;
export const CALLFRAME_NULL_NONE = 0;
export const CALLFRAME_NULL_INOUT = 2;
export const CALLFRAME_NULL_OUT = 4;
export const CALLFRAME_NULL_ALL = 6;
export const CALLFRAME_WALK_IN = 1;
export const CALLFRAME_WALK_INOUT = 2;
export const CALLFRAME_WALK_OUT = 4;

// Structs

export type BOOL = number;

/**
 * Windows.Win32.System.Com.CallObj.CALLFRAMEINFO (size: 56)
 */
export interface CALLFRAMEINFO {
  /** u32 */
  iMethod: number;
  /** Windows.Win32.Foundation.BOOL */
  fHasInValues: boolean;
  /** Windows.Win32.Foundation.BOOL */
  fHasInOutValues: boolean;
  /** Windows.Win32.Foundation.BOOL */
  fHasOutValues: boolean;
  /** Windows.Win32.Foundation.BOOL */
  fDerivesFromIDispatch: boolean;
  /** i32 */
  cInInterfacesMax: number;
  /** i32 */
  cInOutInterfacesMax: number;
  /** i32 */
  cOutInterfacesMax: number;
  /** i32 */
  cTopLevelInInterfaces: number;
  /** System.Guid */
  iid: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  cMethod: number;
  /** u32 */
  cParams: number;
}

export const sizeofCALLFRAMEINFO = 56;

export function allocCALLFRAMEINFO(data?: Partial<CALLFRAMEINFO>): Uint8Array {
  const buf = new Uint8Array(sizeofCALLFRAMEINFO);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.iMethod !== undefined) view.setUint32(0, Number(data.iMethod), true);
  // 0x04: i32
  if (data?.fHasInValues !== undefined) view.setInt32(4, Number(data.fHasInValues), true);
  // 0x08: i32
  if (data?.fHasInOutValues !== undefined) view.setInt32(8, Number(data.fHasInOutValues), true);
  // 0x0c: i32
  if (data?.fHasOutValues !== undefined) view.setInt32(12, Number(data.fHasOutValues), true);
  // 0x10: i32
  if (data?.fDerivesFromIDispatch !== undefined) view.setInt32(16, Number(data.fDerivesFromIDispatch), true);
  // 0x14: i32
  if (data?.cInInterfacesMax !== undefined) view.setInt32(20, Number(data.cInInterfacesMax), true);
  // 0x18: i32
  if (data?.cInOutInterfacesMax !== undefined) view.setInt32(24, Number(data.cInOutInterfacesMax), true);
  // 0x1c: i32
  if (data?.cOutInterfacesMax !== undefined) view.setInt32(28, Number(data.cOutInterfacesMax), true);
  // 0x20: i32
  if (data?.cTopLevelInInterfaces !== undefined) view.setInt32(32, Number(data.cTopLevelInInterfaces), true);
  // 0x24: pad4
  // 0x28: pointer
  if (data?.iid !== undefined) view.setBigUint64(40, data.iid === null ? 0n : BigInt(util.toPointer(data.iid)), true);
  // 0x30: u32
  if (data?.cMethod !== undefined) view.setUint32(48, Number(data.cMethod), true);
  // 0x34: u32
  if (data?.cParams !== undefined) view.setUint32(52, Number(data.cParams), true);
  return buf;
}

export type BOOLEAN = number;

/**
 * Windows.Win32.System.Com.CallObj.CALLFRAMEPARAMINFO (size: 24)
 */
export interface CALLFRAMEPARAMINFO {
  /** Windows.Win32.Foundation.BOOLEAN */
  fIn: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Foundation.BOOLEAN */
  fOut: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  stackOffset: number;
  /** u32 */
  cbParam: number;
}

export const sizeofCALLFRAMEPARAMINFO = 24;

export function allocCALLFRAMEPARAMINFO(data?: Partial<CALLFRAMEPARAMINFO>): Uint8Array {
  const buf = new Uint8Array(sizeofCALLFRAMEPARAMINFO);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.fIn !== undefined) view.setBigUint64(0, data.fIn === null ? 0n : BigInt(util.toPointer(data.fIn)), true);
  // 0x08: pointer
  if (data?.fOut !== undefined) view.setBigUint64(8, data.fOut === null ? 0n : BigInt(util.toPointer(data.fOut)), true);
  // 0x10: u32
  if (data?.stackOffset !== undefined) view.setUint32(16, Number(data.stackOffset), true);
  // 0x14: u32
  if (data?.cbParam !== undefined) view.setUint32(20, Number(data.cbParam), true);
  return buf;
}

/**
 * Windows.Win32.System.Com.CallObj.CALLFRAME_MARSHALCONTEXT (size: 40)
 */
export interface CALLFRAME_MARSHALCONTEXT {
  /** Windows.Win32.Foundation.BOOLEAN */
  fIn: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  dwDestContext: number;
  /** ptr */
  pvDestContext: Deno.PointerValue | Uint8Array | null;
  /** Windows.Win32.System.Com.IUnknown */
  punkReserved: Uint8Array | Deno.PointerValue | null;
  /** System.Guid */
  guidTransferSyntax: Uint8Array | Deno.PointerValue | null;
}

export const sizeofCALLFRAME_MARSHALCONTEXT = 40;

export function allocCALLFRAME_MARSHALCONTEXT(data?: Partial<CALLFRAME_MARSHALCONTEXT>): Uint8Array {
  const buf = new Uint8Array(sizeofCALLFRAME_MARSHALCONTEXT);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.fIn !== undefined) view.setBigUint64(0, data.fIn === null ? 0n : BigInt(util.toPointer(data.fIn)), true);
  // 0x08: u32
  if (data?.dwDestContext !== undefined) view.setUint32(8, Number(data.dwDestContext), true);
  // 0x0c: pad4
  // 0x10: pointer
  if (data?.pvDestContext !== undefined) view.setBigUint64(16, data.pvDestContext === null ? 0n : BigInt(util.toPointer(data.pvDestContext)), true);
  // 0x18: pointer
  if (data?.punkReserved !== undefined) view.setBigUint64(24, data.punkReserved === null ? 0n : BigInt(util.toPointer(data.punkReserved)), true);
  // 0x20: pointer
  if (data?.guidTransferSyntax !== undefined) view.setBigUint64(32, data.guidTransferSyntax === null ? 0n : BigInt(util.toPointer(data.guidTransferSyntax)), true);
  return buf;
}

export type HRESULT = number;

// Native Libraries

try {
  var libole32 = Deno.dlopen("ole32", {
    CoGetInterceptor: {
      parameters: ["pointer", "pointer", "pointer", "pointer"],
      result: "pointer",
    },
    CoGetInterceptorFromTypeInfo: {
      parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"],
      result: "pointer",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function CoGetInterceptor(
  iidIntercepted: Deno.PointerValue | Uint8Array | null /* ptr */,
  punkOuter: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.Com.IUnknown */,
  iid: Deno.PointerValue | Uint8Array | null /* ptr */,
  ppv: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libole32.CoGetInterceptor(util.toPointer(iidIntercepted), util.toPointer(punkOuter), util.toPointer(iid), util.toPointer(ppv)));
}

export function CoGetInterceptorFromTypeInfo(
  iidIntercepted: Deno.PointerValue | Uint8Array | null /* ptr */,
  punkOuter: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.Com.IUnknown */,
  typeInfo: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.Com.ITypeInfo */,
  iid: Deno.PointerValue | Uint8Array | null /* ptr */,
  ppv: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libole32.CoGetInterceptorFromTypeInfo(util.toPointer(iidIntercepted), util.toPointer(punkOuter), util.toPointer(typeInfo), util.toPointer(iid), util.toPointer(ppv)));
}

