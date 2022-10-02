/// Auto-generated by Deno Win32: Windows.Win32.NetworkManagement.WindowsConnectionManager.Apis

import * as util from "../../util.ts";

// Enums
export type WCM_PROPERTY = number;
export type WCM_MEDIA_TYPE = number;
export type WCM_CONNECTION_COST = number;
export type WCM_CONNECTION_COST_SOURCE = number;

// Constants
export const WCM_API_VERSION_1_0 = 1;
export const WCM_API_VERSION = 1;
export const WCM_UNKNOWN_DATAPLAN_STATUS = 4294967295;
export const WCM_MAX_PROFILE_NAME = 256;
export const NET_INTERFACE_FLAG_NONE = 0;
export const NET_INTERFACE_FLAG_CONNECT_IF_NEEDED = 1;
export const wcm_global_property_domain_policy = 0;
export const wcm_global_property_minimize_policy = 1;
export const wcm_global_property_roaming_policy = 2;
export const wcm_global_property_powermanagement_policy = 3;
export const wcm_intf_property_connection_cost = 4;
export const wcm_intf_property_dataplan_status = 5;
export const wcm_intf_property_hotspot_profile = 6;
export const wcm_media_unknown = 0;
export const wcm_media_ethernet = 1;
export const wcm_media_wlan = 2;
export const wcm_media_mbn = 3;
export const wcm_media_invalid = 4;
export const wcm_media_max = 5;
export const WCM_CONNECTION_COST_UNKNOWN = 0;
export const WCM_CONNECTION_COST_UNRESTRICTED = 1;
export const WCM_CONNECTION_COST_FIXED = 2;
export const WCM_CONNECTION_COST_VARIABLE = 4;
export const WCM_CONNECTION_COST_OVERDATALIMIT = 65536;
export const WCM_CONNECTION_COST_CONGESTED = 131072;
export const WCM_CONNECTION_COST_ROAMING = 262144;
export const WCM_CONNECTION_COST_APPROACHINGDATALIMIT = 524288;
export const WCM_CONNECTION_COST_SOURCE_DEFAULT = 0;
export const WCM_CONNECTION_COST_SOURCE_GP = 1;
export const WCM_CONNECTION_COST_SOURCE_USER = 2;
export const WCM_CONNECTION_COST_SOURCE_OPERATOR = 3;

// Structs

export type BOOL = number;

/**
 * Windows.Win32.NetworkManagement.WindowsConnectionManager.WCM_POLICY_VALUE (size: 8)
 */
export interface WCM_POLICY_VALUE {
  /** Windows.Win32.Foundation.BOOL */
  fValue: boolean;
  /** Windows.Win32.Foundation.BOOL */
  fIsGroupPolicy: boolean;
}

export const sizeofWCM_POLICY_VALUE = 8;

export function allocWCM_POLICY_VALUE(data?: Partial<WCM_POLICY_VALUE>): Uint8Array {
  const buf = new Uint8Array(sizeofWCM_POLICY_VALUE);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.fValue !== undefined) view.setInt32(0, Number(data.fValue), true);
  // 0x04: i32
  if (data?.fIsGroupPolicy !== undefined) view.setInt32(4, Number(data.fIsGroupPolicy), true);
  return buf;
}

/**
 * Windows.Win32.NetworkManagement.WindowsConnectionManager.WCM_PROFILE_INFO (size: 24)
 */
export interface WCM_PROFILE_INFO {
  /** array */
  strProfileName: Deno.PointerValue | null;
  /** System.Guid */
  AdapterGUID: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.NetworkManagement.WindowsConnectionManager.WCM_MEDIA_TYPE */
  Media: WCM_MEDIA_TYPE;
}

export const sizeofWCM_PROFILE_INFO = 24;

export function allocWCM_PROFILE_INFO(data?: Partial<WCM_PROFILE_INFO>): Uint8Array {
  const buf = new Uint8Array(sizeofWCM_PROFILE_INFO);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.strProfileName !== undefined) view.setBigUint64(0, data.strProfileName === null ? 0n : BigInt(util.toPointer(data.strProfileName)), true);
  // 0x08: pointer
  if (data?.AdapterGUID !== undefined) view.setBigUint64(8, data.AdapterGUID === null ? 0n : BigInt(util.toPointer(data.AdapterGUID)), true);
  // 0x10: i32
  if (data?.Media !== undefined) view.setInt32(16, Number(data.Media), true);
  // 0x14: pad4
  return buf;
}

/**
 * Windows.Win32.NetworkManagement.WindowsConnectionManager.WCM_PROFILE_INFO_LIST (size: 16)
 */
export interface WCM_PROFILE_INFO_LIST {
  /** u32 */
  dwNumberOfItems: number;
  /** array */
  ProfileInfo: Deno.PointerValue | null;
}

export const sizeofWCM_PROFILE_INFO_LIST = 16;

export function allocWCM_PROFILE_INFO_LIST(data?: Partial<WCM_PROFILE_INFO_LIST>): Uint8Array {
  const buf = new Uint8Array(sizeofWCM_PROFILE_INFO_LIST);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.dwNumberOfItems !== undefined) view.setUint32(0, Number(data.dwNumberOfItems), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.ProfileInfo !== undefined) view.setBigUint64(8, data.ProfileInfo === null ? 0n : BigInt(util.toPointer(data.ProfileInfo)), true);
  return buf;
}

/**
 * Windows.Win32.NetworkManagement.WindowsConnectionManager.WCM_CONNECTION_COST_DATA (size: 8)
 */
export interface WCM_CONNECTION_COST_DATA {
  /** u32 */
  ConnectionCost: number;
  /** Windows.Win32.NetworkManagement.WindowsConnectionManager.WCM_CONNECTION_COST_SOURCE */
  CostSource: WCM_CONNECTION_COST_SOURCE;
}

export const sizeofWCM_CONNECTION_COST_DATA = 8;

export function allocWCM_CONNECTION_COST_DATA(data?: Partial<WCM_CONNECTION_COST_DATA>): Uint8Array {
  const buf = new Uint8Array(sizeofWCM_CONNECTION_COST_DATA);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.ConnectionCost !== undefined) view.setUint32(0, Number(data.ConnectionCost), true);
  // 0x04: i32
  if (data?.CostSource !== undefined) view.setInt32(4, Number(data.CostSource), true);
  return buf;
}

/**
 * Windows.Win32.NetworkManagement.WindowsConnectionManager.WCM_TIME_INTERVAL (size: 16)
 */
export interface WCM_TIME_INTERVAL {
  /** u16 */
  wYear: number;
  /** u16 */
  wMonth: number;
  /** u16 */
  wDay: number;
  /** u16 */
  wHour: number;
  /** u16 */
  wMinute: number;
  /** u16 */
  wSecond: number;
  /** u16 */
  wMilliseconds: number;
}

export const sizeofWCM_TIME_INTERVAL = 16;

export function allocWCM_TIME_INTERVAL(data?: Partial<WCM_TIME_INTERVAL>): Uint8Array {
  const buf = new Uint8Array(sizeofWCM_TIME_INTERVAL);
  const view = new DataView(buf.buffer);
  // 0x00: u16
  if (data?.wYear !== undefined) view.setUint16(0, Number(data.wYear), true);
  // 0x02: u16
  if (data?.wMonth !== undefined) view.setUint16(2, Number(data.wMonth), true);
  // 0x04: u16
  if (data?.wDay !== undefined) view.setUint16(4, Number(data.wDay), true);
  // 0x06: u16
  if (data?.wHour !== undefined) view.setUint16(6, Number(data.wHour), true);
  // 0x08: u16
  if (data?.wMinute !== undefined) view.setUint16(8, Number(data.wMinute), true);
  // 0x0a: u16
  if (data?.wSecond !== undefined) view.setUint16(10, Number(data.wSecond), true);
  // 0x0c: u16
  if (data?.wMilliseconds !== undefined) view.setUint16(12, Number(data.wMilliseconds), true);
  // 0x0e: pad2
  return buf;
}

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

/**
 * Windows.Win32.NetworkManagement.WindowsConnectionManager.WCM_USAGE_DATA (size: 16)
 */
export interface WCM_USAGE_DATA {
  /** u32 */
  UsageInMegabytes: number;
  /** Windows.Win32.Foundation.FILETIME */
  LastSyncTime: Uint8Array | Deno.PointerValue | null;
}

export const sizeofWCM_USAGE_DATA = 16;

export function allocWCM_USAGE_DATA(data?: Partial<WCM_USAGE_DATA>): Uint8Array {
  const buf = new Uint8Array(sizeofWCM_USAGE_DATA);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.UsageInMegabytes !== undefined) view.setUint32(0, Number(data.UsageInMegabytes), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.LastSyncTime !== undefined) view.setBigUint64(8, data.LastSyncTime === null ? 0n : BigInt(util.toPointer(data.LastSyncTime)), true);
  return buf;
}

/**
 * Windows.Win32.NetworkManagement.WindowsConnectionManager.WCM_BILLING_CYCLE_INFO (size: 24)
 */
export interface WCM_BILLING_CYCLE_INFO {
  /** Windows.Win32.Foundation.FILETIME */
  StartDate: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.NetworkManagement.WindowsConnectionManager.WCM_TIME_INTERVAL */
  Duration: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Foundation.BOOL */
  Reset: boolean;
}

export const sizeofWCM_BILLING_CYCLE_INFO = 24;

export function allocWCM_BILLING_CYCLE_INFO(data?: Partial<WCM_BILLING_CYCLE_INFO>): Uint8Array {
  const buf = new Uint8Array(sizeofWCM_BILLING_CYCLE_INFO);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.StartDate !== undefined) view.setBigUint64(0, data.StartDate === null ? 0n : BigInt(util.toPointer(data.StartDate)), true);
  // 0x08: pointer
  if (data?.Duration !== undefined) view.setBigUint64(8, data.Duration === null ? 0n : BigInt(util.toPointer(data.Duration)), true);
  // 0x10: i32
  if (data?.Reset !== undefined) view.setInt32(16, Number(data.Reset), true);
  // 0x14: pad4
  return buf;
}

/**
 * Windows.Win32.NetworkManagement.WindowsConnectionManager.WCM_DATAPLAN_STATUS (size: 40)
 */
export interface WCM_DATAPLAN_STATUS {
  /** Windows.Win32.NetworkManagement.WindowsConnectionManager.WCM_USAGE_DATA */
  UsageData: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  DataLimitInMegabytes: number;
  /** u32 */
  InboundBandwidthInKbps: number;
  /** u32 */
  OutboundBandwidthInKbps: number;
  /** Windows.Win32.NetworkManagement.WindowsConnectionManager.WCM_BILLING_CYCLE_INFO */
  BillingCycle: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  MaxTransferSizeInMegabytes: number;
  /** u32 */
  Reserved: number;
}

export const sizeofWCM_DATAPLAN_STATUS = 40;

export function allocWCM_DATAPLAN_STATUS(data?: Partial<WCM_DATAPLAN_STATUS>): Uint8Array {
  const buf = new Uint8Array(sizeofWCM_DATAPLAN_STATUS);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.UsageData !== undefined) view.setBigUint64(0, data.UsageData === null ? 0n : BigInt(util.toPointer(data.UsageData)), true);
  // 0x08: u32
  if (data?.DataLimitInMegabytes !== undefined) view.setUint32(8, Number(data.DataLimitInMegabytes), true);
  // 0x0c: u32
  if (data?.InboundBandwidthInKbps !== undefined) view.setUint32(12, Number(data.InboundBandwidthInKbps), true);
  // 0x10: u32
  if (data?.OutboundBandwidthInKbps !== undefined) view.setUint32(16, Number(data.OutboundBandwidthInKbps), true);
  // 0x14: pad4
  // 0x18: pointer
  if (data?.BillingCycle !== undefined) view.setBigUint64(24, data.BillingCycle === null ? 0n : BigInt(util.toPointer(data.BillingCycle)), true);
  // 0x20: u32
  if (data?.MaxTransferSizeInMegabytes !== undefined) view.setUint32(32, Number(data.MaxTransferSizeInMegabytes), true);
  // 0x24: u32
  if (data?.Reserved !== undefined) view.setUint32(36, Number(data.Reserved), true);
  return buf;
}

export type PWSTR = Deno.PointerValue | Uint8Array | null;

/**
 * Windows.Win32.NetworkManagement.WindowsConnectionManager.NET_INTERFACE_CONTEXT (size: 16)
 */
export interface NET_INTERFACE_CONTEXT {
  /** u32 */
  InterfaceIndex: number;
  /** Windows.Win32.Foundation.PWSTR */
  ConfigurationName: string | null;
}

export const sizeofNET_INTERFACE_CONTEXT = 16;

export function allocNET_INTERFACE_CONTEXT(data?: Partial<NET_INTERFACE_CONTEXT>): Uint8Array {
  const buf = new Uint8Array(sizeofNET_INTERFACE_CONTEXT);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.InterfaceIndex !== undefined) view.setUint32(0, Number(data.InterfaceIndex), true);
  // 0x04: pad4
  // 0x08: buffer
  if (data?.ConfigurationName !== undefined) {
    (buf as any)._f8 = util.pwstrToFfi(data.ConfigurationName);
    view.setBigUint64(8, (buf as any)._f8 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f8)), true);
  }
  return buf;
}

export type HANDLE = Deno.PointerValue;

/**
 * Windows.Win32.NetworkManagement.WindowsConnectionManager.NET_INTERFACE_CONTEXT_TABLE (size: 24)
 */
export interface NET_INTERFACE_CONTEXT_TABLE {
  /** Windows.Win32.Foundation.HANDLE */
  InterfaceContextHandle: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  NumberOfEntries: number;
  /** ptr */
  InterfaceContextArray: Deno.PointerValue | Uint8Array | null;
}

export const sizeofNET_INTERFACE_CONTEXT_TABLE = 24;

export function allocNET_INTERFACE_CONTEXT_TABLE(data?: Partial<NET_INTERFACE_CONTEXT_TABLE>): Uint8Array {
  const buf = new Uint8Array(sizeofNET_INTERFACE_CONTEXT_TABLE);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.InterfaceContextHandle !== undefined) view.setBigUint64(0, data.InterfaceContextHandle === null ? 0n : BigInt(util.toPointer(data.InterfaceContextHandle)), true);
  // 0x08: u32
  if (data?.NumberOfEntries !== undefined) view.setUint32(8, Number(data.NumberOfEntries), true);
  // 0x0c: pad4
  // 0x10: pointer
  if (data?.InterfaceContextArray !== undefined) view.setBigUint64(16, data.InterfaceContextArray === null ? 0n : BigInt(util.toPointer(data.InterfaceContextArray)), true);
  return buf;
}

export type HRESULT = number;

// Native Libraries

try {
  var libwcmapi = Deno.dlopen("wcmapi", {
    WcmQueryProperty: {
      parameters: ["pointer", "buffer", "i32", "pointer", "pointer", "pointer"],
      result: "u32",
    },
    WcmSetProperty: {
      parameters: ["pointer", "buffer", "i32", "pointer", "u32", "pointer"],
      result: "u32",
    },
    WcmGetProfileList: {
      parameters: ["pointer", "pointer"],
      result: "u32",
    },
    WcmSetProfileList: {
      parameters: ["pointer", "u32", "i32", "pointer"],
      result: "u32",
    },
    WcmFreeMemory: {
      parameters: ["pointer"],
      result: "void",
    },
  }).symbols;
} catch(e) { /* ignore */ }

try {
  var libOnDemandConnRouteHelper = Deno.dlopen("OnDemandConnRouteHelper", {
    OnDemandGetRoutingHint: {
      parameters: ["buffer", "pointer"],
      result: "pointer",
    },
    OnDemandRegisterNotification: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "pointer",
    },
    OnDemandUnRegisterNotification: {
      parameters: ["pointer"],
      result: "pointer",
    },
    GetInterfaceContextTableForHostName: {
      parameters: ["buffer", "buffer", "u32", "pointer", "u32", "pointer"],
      result: "pointer",
    },
    FreeInterfaceContextTable: {
      parameters: ["pointer"],
      result: "void",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function WcmQueryProperty(
  pInterface: Deno.PointerValue | Uint8Array | null /* ptr */,
  strProfileName: string | null /* Windows.Win32.Foundation.PWSTR */,
  Property: WCM_PROPERTY /* Windows.Win32.NetworkManagement.WindowsConnectionManager.WCM_PROPERTY */,
  pReserved: Deno.PointerValue | Uint8Array | null /* ptr */,
  pdwDataSize: Deno.PointerValue | Uint8Array | null /* ptr */,
  ppData: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libwcmapi.WcmQueryProperty(util.toPointer(pInterface), util.pwstrToFfi(strProfileName), Property, util.toPointer(pReserved), util.toPointer(pdwDataSize), util.toPointer(ppData));
}

export function WcmSetProperty(
  pInterface: Deno.PointerValue | Uint8Array | null /* ptr */,
  strProfileName: string | null /* Windows.Win32.Foundation.PWSTR */,
  Property: WCM_PROPERTY /* Windows.Win32.NetworkManagement.WindowsConnectionManager.WCM_PROPERTY */,
  pReserved: Deno.PointerValue | Uint8Array | null /* ptr */,
  dwDataSize: number /* u32 */,
  pbData: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libwcmapi.WcmSetProperty(util.toPointer(pInterface), util.pwstrToFfi(strProfileName), Property, util.toPointer(pReserved), dwDataSize, util.toPointer(pbData));
}

export function WcmGetProfileList(
  pReserved: Deno.PointerValue | Uint8Array | null /* ptr */,
  ppProfileList: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libwcmapi.WcmGetProfileList(util.toPointer(pReserved), util.toPointer(ppProfileList));
}

export function WcmSetProfileList(
  pProfileList: Deno.PointerValue | Uint8Array | null /* ptr */,
  dwPosition: number /* u32 */,
  fIgnoreUnknownProfiles: boolean /* Windows.Win32.Foundation.BOOL */,
  pReserved: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libwcmapi.WcmSetProfileList(util.toPointer(pProfileList), dwPosition, util.boolToFfi(fIgnoreUnknownProfiles), util.toPointer(pReserved));
}

export function WcmFreeMemory(
  pMemory: Deno.PointerValue | Uint8Array | null /* ptr */,
): void /* void */ {
  return libwcmapi.WcmFreeMemory(util.toPointer(pMemory));
}

export function OnDemandGetRoutingHint(
  destinationHostName: string | null /* Windows.Win32.Foundation.PWSTR */,
  interfaceIndex: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libOnDemandConnRouteHelper.OnDemandGetRoutingHint(util.pwstrToFfi(destinationHostName), util.toPointer(interfaceIndex)));
}

export function OnDemandRegisterNotification(
  callback: Uint8Array | Deno.PointerValue | null /* Windows.Win32.NetworkManagement.WindowsConnectionManager.ONDEMAND_NOTIFICATION_CALLBACK */,
  callbackContext: Deno.PointerValue | Uint8Array | null /* ptr */,
  registrationHandle: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libOnDemandConnRouteHelper.OnDemandRegisterNotification(util.toPointer(callback), util.toPointer(callbackContext), util.toPointer(registrationHandle)));
}

export function OnDemandUnRegisterNotification(
  registrationHandle: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libOnDemandConnRouteHelper.OnDemandUnRegisterNotification(util.toPointer(registrationHandle)));
}

export function GetInterfaceContextTableForHostName(
  HostName: string | null /* Windows.Win32.Foundation.PWSTR */,
  ProxyName: string | null /* Windows.Win32.Foundation.PWSTR */,
  Flags: number /* u32 */,
  ConnectionProfileFilterRawData: Deno.PointerValue | Uint8Array | null /* ptr */,
  ConnectionProfileFilterRawDataSize: number /* u32 */,
  InterfaceContextTable: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libOnDemandConnRouteHelper.GetInterfaceContextTableForHostName(util.pwstrToFfi(HostName), util.pwstrToFfi(ProxyName), Flags, util.toPointer(ConnectionProfileFilterRawData), ConnectionProfileFilterRawDataSize, util.toPointer(InterfaceContextTable)));
}

export function FreeInterfaceContextTable(
  InterfaceContextTable: Deno.PointerValue | Uint8Array | null /* ptr */,
): void /* void */ {
  return libOnDemandConnRouteHelper.FreeInterfaceContextTable(util.toPointer(InterfaceContextTable));
}

