/// Auto-generated by Deno Win32: Windows.Win32.System.EventNotificationService.Apis

import * as util from "../../util.ts";

// Enums
export type SENS_CONNECTION_TYPE = number;

// Constants
export const CONNECTION_LAN = 0;
export const CONNECTION_WAN = 1;
export const NETWORK_ALIVE_LAN = 1;
export const NETWORK_ALIVE_WAN = 2;
export const NETWORK_ALIVE_AOL = 4;
export const NETWORK_ALIVE_INTERNET = 8;
export const CONNECTION_AOL = 4;

// Structs

/**
 * Windows.Win32.System.EventNotificationService.Apis (size: 56)
 */
export interface Apis {
  /** System.Guid */
  SENSGUID_PUBLISHER: Uint8Array | Deno.PointerValue | null;
  /** System.Guid */
  SENSGUID_SUBSCRIBER_LCE: Uint8Array | Deno.PointerValue | null;
  /** System.Guid */
  SENSGUID_SUBSCRIBER_WININET: Uint8Array | Deno.PointerValue | null;
  /** System.Guid */
  SENSGUID_EVENTCLASS_NETWORK: Uint8Array | Deno.PointerValue | null;
  /** System.Guid */
  SENSGUID_EVENTCLASS_LOGON: Uint8Array | Deno.PointerValue | null;
  /** System.Guid */
  SENSGUID_EVENTCLASS_ONNOW: Uint8Array | Deno.PointerValue | null;
  /** System.Guid */
  SENSGUID_EVENTCLASS_LOGON2: Uint8Array | Deno.PointerValue | null;
}

export const sizeofApis = 56;

export function allocApis(data?: Partial<Apis>): Uint8Array {
  const buf = new Uint8Array(sizeofApis);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.SENSGUID_PUBLISHER !== undefined) view.setBigUint64(0, data.SENSGUID_PUBLISHER === null ? 0n : BigInt(util.toPointer(data.SENSGUID_PUBLISHER)), true);
  // 0x08: pointer
  if (data?.SENSGUID_SUBSCRIBER_LCE !== undefined) view.setBigUint64(8, data.SENSGUID_SUBSCRIBER_LCE === null ? 0n : BigInt(util.toPointer(data.SENSGUID_SUBSCRIBER_LCE)), true);
  // 0x10: pointer
  if (data?.SENSGUID_SUBSCRIBER_WININET !== undefined) view.setBigUint64(16, data.SENSGUID_SUBSCRIBER_WININET === null ? 0n : BigInt(util.toPointer(data.SENSGUID_SUBSCRIBER_WININET)), true);
  // 0x18: pointer
  if (data?.SENSGUID_EVENTCLASS_NETWORK !== undefined) view.setBigUint64(24, data.SENSGUID_EVENTCLASS_NETWORK === null ? 0n : BigInt(util.toPointer(data.SENSGUID_EVENTCLASS_NETWORK)), true);
  // 0x20: pointer
  if (data?.SENSGUID_EVENTCLASS_LOGON !== undefined) view.setBigUint64(32, data.SENSGUID_EVENTCLASS_LOGON === null ? 0n : BigInt(util.toPointer(data.SENSGUID_EVENTCLASS_LOGON)), true);
  // 0x28: pointer
  if (data?.SENSGUID_EVENTCLASS_ONNOW !== undefined) view.setBigUint64(40, data.SENSGUID_EVENTCLASS_ONNOW === null ? 0n : BigInt(util.toPointer(data.SENSGUID_EVENTCLASS_ONNOW)), true);
  // 0x30: pointer
  if (data?.SENSGUID_EVENTCLASS_LOGON2 !== undefined) view.setBigUint64(48, data.SENSGUID_EVENTCLASS_LOGON2 === null ? 0n : BigInt(util.toPointer(data.SENSGUID_EVENTCLASS_LOGON2)), true);
  return buf;
}

/**
 * Windows.Win32.System.EventNotificationService.QOCINFO (size: 16)
 */
export interface QOCINFO {
  /** u32 */
  dwSize: number;
  /** u32 */
  dwFlags: number;
  /** u32 */
  dwInSpeed: number;
  /** u32 */
  dwOutSpeed: number;
}

export const sizeofQOCINFO = 16;

export function allocQOCINFO(data?: Partial<QOCINFO>): Uint8Array {
  const buf = new Uint8Array(sizeofQOCINFO);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.dwSize !== undefined) view.setUint32(0, Number(data.dwSize), true);
  // 0x04: u32
  if (data?.dwFlags !== undefined) view.setUint32(4, Number(data.dwFlags), true);
  // 0x08: u32
  if (data?.dwInSpeed !== undefined) view.setUint32(8, Number(data.dwInSpeed), true);
  // 0x0c: u32
  if (data?.dwOutSpeed !== undefined) view.setUint32(12, Number(data.dwOutSpeed), true);
  return buf;
}

/**
 * Windows.Win32.System.EventNotificationService.SENS_QOCINFO (size: 16)
 */
export interface SENS_QOCINFO {
  /** u32 */
  dwSize: number;
  /** u32 */
  dwFlags: number;
  /** u32 */
  dwOutSpeed: number;
  /** u32 */
  dwInSpeed: number;
}

export const sizeofSENS_QOCINFO = 16;

export function allocSENS_QOCINFO(data?: Partial<SENS_QOCINFO>): Uint8Array {
  const buf = new Uint8Array(sizeofSENS_QOCINFO);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.dwSize !== undefined) view.setUint32(0, Number(data.dwSize), true);
  // 0x04: u32
  if (data?.dwFlags !== undefined) view.setUint32(4, Number(data.dwFlags), true);
  // 0x08: u32
  if (data?.dwOutSpeed !== undefined) view.setUint32(8, Number(data.dwOutSpeed), true);
  // 0x0c: u32
  if (data?.dwInSpeed !== undefined) view.setUint32(12, Number(data.dwInSpeed), true);
  return buf;
}

export type PSTR = Deno.PointerValue | Uint8Array | null;

export type BOOL = number;

export type PWSTR = Deno.PointerValue | Uint8Array | null;

// Native Libraries

try {
  var libSensApi = Deno.dlopen("SensApi", {
    IsDestinationReachableA: {
      parameters: ["buffer", "pointer"],
      result: "i32",
    },
    IsDestinationReachableW: {
      parameters: ["buffer", "pointer"],
      result: "i32",
    },
    IsNetworkAlive: {
      parameters: ["pointer"],
      result: "i32",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function IsDestinationReachableA(
  lpszDestination: string | null /* Windows.Win32.Foundation.PSTR */,
  lpQOCInfo: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libSensApi.IsDestinationReachableA(util.pstrToFfi(lpszDestination), util.toPointer(lpQOCInfo)));
}

export function IsDestinationReachableW(
  lpszDestination: string | null /* Windows.Win32.Foundation.PWSTR */,
  lpQOCInfo: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libSensApi.IsDestinationReachableW(util.pwstrToFfi(lpszDestination), util.toPointer(lpQOCInfo)));
}

export function IsNetworkAlive(
  lpdwFlags: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libSensApi.IsNetworkAlive(util.toPointer(lpdwFlags)));
}

