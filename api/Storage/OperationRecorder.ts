/// Auto-generated by Deno Win32: Windows.Win32.Storage.OperationRecorder.Apis

import * as util from "../../util.ts";

// Enums
export type OPERATION_START_FLAGS = number;
export type OPERATION_END_PARAMETERS_FLAGS = number;

// Constants
export const OPERATION_START_TRACE_CURRENT_THREAD = 1;
export const OPERATION_END_DISCARD = 1;

// Structs

/**
 * Windows.Win32.Storage.OperationRecorder.OPERATION_START_PARAMETERS (size: 16)
 */
export interface OPERATION_START_PARAMETERS {
  /** u32 */
  Version: number;
  /** u32 */
  OperationId: number;
  /** Windows.Win32.Storage.OperationRecorder.OPERATION_START_FLAGS */
  Flags: OPERATION_START_FLAGS;
}

export const sizeofOPERATION_START_PARAMETERS = 16;

export function allocOPERATION_START_PARAMETERS(data?: Partial<OPERATION_START_PARAMETERS>): Uint8Array {
  const buf = new Uint8Array(sizeofOPERATION_START_PARAMETERS);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.Version !== undefined) view.setUint32(0, Number(data.Version), true);
  // 0x04: u32
  if (data?.OperationId !== undefined) view.setUint32(4, Number(data.OperationId), true);
  // 0x08: u32
  if (data?.Flags !== undefined) view.setUint32(8, Number(data.Flags), true);
  // 0x0c: pad4
  return buf;
}

/**
 * Windows.Win32.Storage.OperationRecorder.OPERATION_END_PARAMETERS (size: 16)
 */
export interface OPERATION_END_PARAMETERS {
  /** u32 */
  Version: number;
  /** u32 */
  OperationId: number;
  /** Windows.Win32.Storage.OperationRecorder.OPERATION_END_PARAMETERS_FLAGS */
  Flags: OPERATION_END_PARAMETERS_FLAGS;
}

export const sizeofOPERATION_END_PARAMETERS = 16;

export function allocOPERATION_END_PARAMETERS(data?: Partial<OPERATION_END_PARAMETERS>): Uint8Array {
  const buf = new Uint8Array(sizeofOPERATION_END_PARAMETERS);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.Version !== undefined) view.setUint32(0, Number(data.Version), true);
  // 0x04: u32
  if (data?.OperationId !== undefined) view.setUint32(4, Number(data.OperationId), true);
  // 0x08: u32
  if (data?.Flags !== undefined) view.setUint32(8, Number(data.Flags), true);
  // 0x0c: pad4
  return buf;
}

export type BOOL = number;

// Native Libraries

try {
  var libADVAPI32 = Deno.dlopen("ADVAPI32", {
    OperationStart: {
      parameters: ["pointer"],
      result: "i32",
    },
    OperationEnd: {
      parameters: ["pointer"],
      result: "i32",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function OperationStart(
  OperationStartParams: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libADVAPI32.OperationStart(util.toPointer(OperationStartParams)));
}

export function OperationEnd(
  OperationEndParams: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libADVAPI32.OperationEnd(util.toPointer(OperationEndParams)));
}

