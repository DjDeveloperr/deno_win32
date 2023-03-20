/// Auto-generated by Deno Win32: Windows.Win32.System.EventCollector.Apis

import * as util from "../../util.ts";

// Enums
export type EC_SUBSCRIPTION_PROPERTY_ID = number;
export type EC_SUBSCRIPTION_CREDENTIALS_TYPE = number;
export type EC_SUBSCRIPTION_TYPE = number;
export type EC_SUBSCRIPTION_RUNTIME_STATUS_INFO_ID = number;
export type EC_VARIANT_TYPE = number;
export type EC_SUBSCRIPTION_CONFIGURATION_MODE = number;
export type EC_SUBSCRIPTION_DELIVERY_MODE = number;
export type EC_SUBSCRIPTION_CONTENT_FORMAT = number;
export type EC_SUBSCRIPTION_RUNTIME_STATUS_ACTIVE_STATUS = number;

// Constants
export const EC_VARIANT_TYPE_MASK = 127;
export const EC_VARIANT_TYPE_ARRAY = 128;
export const EC_READ_ACCESS = 1;
export const EC_WRITE_ACCESS = 2;
export const EC_OPEN_ALWAYS = 0;
export const EC_CREATE_NEW = 1;
export const EC_OPEN_EXISTING = 2;
export const EcSubscriptionEnabled = 0;
export const EcSubscriptionEventSources = 1;
export const EcSubscriptionEventSourceAddress = 2;
export const EcSubscriptionEventSourceEnabled = 3;
export const EcSubscriptionEventSourceUserName = 4;
export const EcSubscriptionEventSourcePassword = 5;
export const EcSubscriptionDescription = 6;
export const EcSubscriptionURI = 7;
export const EcSubscriptionConfigurationMode = 8;
export const EcSubscriptionExpires = 9;
export const EcSubscriptionQuery = 10;
export const EcSubscriptionTransportName = 11;
export const EcSubscriptionTransportPort = 12;
export const EcSubscriptionDeliveryMode = 13;
export const EcSubscriptionDeliveryMaxItems = 14;
export const EcSubscriptionDeliveryMaxLatencyTime = 15;
export const EcSubscriptionHeartbeatInterval = 16;
export const EcSubscriptionLocale = 17;
export const EcSubscriptionContentFormat = 18;
export const EcSubscriptionLogFile = 19;
export const EcSubscriptionPublisherName = 20;
export const EcSubscriptionCredentialsType = 21;
export const EcSubscriptionCommonUserName = 22;
export const EcSubscriptionCommonPassword = 23;
export const EcSubscriptionHostName = 24;
export const EcSubscriptionReadExistingEvents = 25;
export const EcSubscriptionDialect = 26;
export const EcSubscriptionType = 27;
export const EcSubscriptionAllowedIssuerCAs = 28;
export const EcSubscriptionAllowedSubjects = 29;
export const EcSubscriptionDeniedSubjects = 30;
export const EcSubscriptionAllowedSourceDomainComputers = 31;
export const EcSubscriptionPropertyIdEND = 32;
export const EcSubscriptionCredDefault = 0;
export const EcSubscriptionCredNegotiate = 1;
export const EcSubscriptionCredDigest = 2;
export const EcSubscriptionCredBasic = 3;
export const EcSubscriptionCredLocalMachine = 4;
export const EcSubscriptionTypeSourceInitiated = 0;
export const EcSubscriptionTypeCollectorInitiated = 1;
export const EcSubscriptionRunTimeStatusActive = 0;
export const EcSubscriptionRunTimeStatusLastError = 1;
export const EcSubscriptionRunTimeStatusLastErrorMessage = 2;
export const EcSubscriptionRunTimeStatusLastErrorTime = 3;
export const EcSubscriptionRunTimeStatusNextRetryTime = 4;
export const EcSubscriptionRunTimeStatusEventSources = 5;
export const EcSubscriptionRunTimeStatusLastHeartbeatTime = 6;
export const EcSubscriptionRunTimeStatusInfoIdEND = 7;
export const EcVarTypeNull = 0;
export const EcVarTypeBoolean = 1;
export const EcVarTypeUInt32 = 2;
export const EcVarTypeDateTime = 3;
export const EcVarTypeString = 4;
export const EcVarObjectArrayPropertyHandle = 5;
export const EcConfigurationModeNormal = 0;
export const EcConfigurationModeCustom = 1;
export const EcConfigurationModeMinLatency = 2;
export const EcConfigurationModeMinBandwidth = 3;
export const EcDeliveryModePull = 1;
export const EcDeliveryModePush = 2;
export const EcContentFormatEvents = 1;
export const EcContentFormatRenderedText = 2;
export const EcRuntimeStatusActiveStatusDisabled = 1;
export const EcRuntimeStatusActiveStatusActive = 2;
export const EcRuntimeStatusActiveStatusInactive = 3;
export const EcRuntimeStatusActiveStatusTrying = 4;

// Structs

/**
 * _Anonymous_e__Struct (size: 16)
 */
export interface _Anonymous_e__Struct {
  /** u64 */
  Alignment: bigint | number;
  /** u64 */
  Region: bigint | number;
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
  get Alignment(): bigint | number {
    return Number(this.view.getBigUint64(0, true));
  }

  // 0x08: u64
  get Region(): bigint | number {
    return Number(this.view.getBigUint64(8, true));
  }

  // 0x00: u64
  set Alignment(value: bigint | number) {
    this.view.setBigUint64(0, BigInt(value), true);
  }

  // 0x08: u64
  set Region(value: bigint | number) {
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
 * Windows.Win32.System.EventCollector.EC_VARIANT (size: 16)
 */
export interface EC_VARIANT {
  /** _Anonymous_e__Union */
  Anonymous: Uint8Array | Deno.PointerValue;
  /** u32 */
  Count: number;
  /** u32 */
  Type: number;
}

export const sizeofEC_VARIANT = 16;

export function allocEC_VARIANT(data?: Partial<EC_VARIANT>): Uint8Array {
  const buf = new Uint8Array(sizeofEC_VARIANT);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.Anonymous !== undefined) view.setBigUint64(0, data.Anonymous === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.Anonymous))), true);
  // 0x08: u32
  if (data?.Count !== undefined) view.setUint32(8, Number(data.Count), true);
  // 0x0c: u32
  if (data?.Type !== undefined) view.setUint32(12, Number(data.Type), true);
  return buf;
}

export class EC_VARIANTView {
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

  // 0x08: u32
  get Count(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: u32
  get Type(): number {
    return this.view.getUint32(12, true);
  }

  // 0x00: pointer
  set Anonymous(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x08: u32
  set Count(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: u32
  set Type(value: number) {
    this.view.setUint32(12, value, true);
  }
}

export type PWSTR = Deno.PointerValue | Uint8Array;

export type BOOL = number;

// Native Libraries

try {
  var libWecApi_dll = Deno.dlopen("WecApi.dll", {
    EcOpenSubscriptionEnum: {
      parameters: ["u32"],
      result: "isize",
    },
    EcEnumNextSubscription: {
      parameters: ["isize", "u32", "buffer", "pointer"],
      result: "i32",
    },
    EcOpenSubscription: {
      parameters: ["buffer", "u32", "u32"],
      result: "isize",
    },
    EcSetSubscriptionProperty: {
      parameters: ["isize", "i32", "u32", "pointer"],
      result: "i32",
    },
    EcGetSubscriptionProperty: {
      parameters: ["isize", "i32", "u32", "u32", "pointer", "pointer"],
      result: "i32",
    },
    EcSaveSubscription: {
      parameters: ["isize", "u32"],
      result: "i32",
    },
    EcDeleteSubscription: {
      parameters: ["buffer", "u32"],
      result: "i32",
    },
    EcGetObjectArraySize: {
      parameters: ["isize", "pointer"],
      result: "i32",
    },
    EcSetObjectArrayProperty: {
      parameters: ["isize", "i32", "u32", "u32", "pointer"],
      result: "i32",
    },
    EcGetObjectArrayProperty: {
      parameters: ["isize", "i32", "u32", "u32", "u32", "pointer", "pointer"],
      result: "i32",
    },
    EcInsertObjectArrayElement: {
      parameters: ["isize", "u32"],
      result: "i32",
    },
    EcRemoveObjectArrayElement: {
      parameters: ["isize", "u32"],
      result: "i32",
    },
    EcGetSubscriptionRunTimeStatus: {
      parameters: ["buffer", "i32", "buffer", "u32", "u32", "pointer", "pointer"],
      result: "i32",
    },
    EcRetrySubscription: {
      parameters: ["buffer", "buffer", "u32"],
      result: "i32",
    },
    EcClose: {
      parameters: ["isize"],
      result: "i32",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function EcOpenSubscriptionEnum(
  Flags: number /* u32 */,
): bigint | number /* isize */ {
  return libWecApi_dll.EcOpenSubscriptionEnum(Flags);
}

export function EcEnumNextSubscription(
  SubscriptionEnum: bigint | number /* isize */,
  SubscriptionNameBufferSize: number /* u32 */,
  SubscriptionNameBuffer: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  SubscriptionNameBufferUsed: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWecApi_dll.EcEnumNextSubscription(SubscriptionEnum, SubscriptionNameBufferSize, util.pwstrToFfi(SubscriptionNameBuffer), util.toPointer(SubscriptionNameBufferUsed)));
}

export function EcOpenSubscription(
  SubscriptionName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  AccessMask: number /* u32 */,
  Flags: number /* u32 */,
): bigint | number /* isize */ {
  return libWecApi_dll.EcOpenSubscription(util.pwstrToFfi(SubscriptionName), AccessMask, Flags);
}

export function EcSetSubscriptionProperty(
  Subscription: bigint | number /* isize */,
  PropertyId: EC_SUBSCRIPTION_PROPERTY_ID /* Windows.Win32.System.EventCollector.EC_SUBSCRIPTION_PROPERTY_ID */,
  Flags: number /* u32 */,
  PropertyValue: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWecApi_dll.EcSetSubscriptionProperty(Subscription, PropertyId, Flags, util.toPointer(PropertyValue)));
}

export function EcGetSubscriptionProperty(
  Subscription: bigint | number /* isize */,
  PropertyId: EC_SUBSCRIPTION_PROPERTY_ID /* Windows.Win32.System.EventCollector.EC_SUBSCRIPTION_PROPERTY_ID */,
  Flags: number /* u32 */,
  PropertyValueBufferSize: number /* u32 */,
  PropertyValueBuffer: Deno.PointerValue | Uint8Array /* ptr */,
  PropertyValueBufferUsed: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWecApi_dll.EcGetSubscriptionProperty(Subscription, PropertyId, Flags, PropertyValueBufferSize, util.toPointer(PropertyValueBuffer), util.toPointer(PropertyValueBufferUsed)));
}

export function EcSaveSubscription(
  Subscription: bigint | number /* isize */,
  Flags: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWecApi_dll.EcSaveSubscription(Subscription, Flags));
}

export function EcDeleteSubscription(
  SubscriptionName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  Flags: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWecApi_dll.EcDeleteSubscription(util.pwstrToFfi(SubscriptionName), Flags));
}

export function EcGetObjectArraySize(
  ObjectArray: bigint | number /* isize */,
  ObjectArraySize: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWecApi_dll.EcGetObjectArraySize(ObjectArray, util.toPointer(ObjectArraySize)));
}

export function EcSetObjectArrayProperty(
  ObjectArray: bigint | number /* isize */,
  PropertyId: EC_SUBSCRIPTION_PROPERTY_ID /* Windows.Win32.System.EventCollector.EC_SUBSCRIPTION_PROPERTY_ID */,
  ArrayIndex: number /* u32 */,
  Flags: number /* u32 */,
  PropertyValue: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWecApi_dll.EcSetObjectArrayProperty(ObjectArray, PropertyId, ArrayIndex, Flags, util.toPointer(PropertyValue)));
}

export function EcGetObjectArrayProperty(
  ObjectArray: bigint | number /* isize */,
  PropertyId: EC_SUBSCRIPTION_PROPERTY_ID /* Windows.Win32.System.EventCollector.EC_SUBSCRIPTION_PROPERTY_ID */,
  ArrayIndex: number /* u32 */,
  Flags: number /* u32 */,
  PropertyValueBufferSize: number /* u32 */,
  PropertyValueBuffer: Deno.PointerValue | Uint8Array /* ptr */,
  PropertyValueBufferUsed: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWecApi_dll.EcGetObjectArrayProperty(ObjectArray, PropertyId, ArrayIndex, Flags, PropertyValueBufferSize, util.toPointer(PropertyValueBuffer), util.toPointer(PropertyValueBufferUsed)));
}

export function EcInsertObjectArrayElement(
  ObjectArray: bigint | number /* isize */,
  ArrayIndex: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWecApi_dll.EcInsertObjectArrayElement(ObjectArray, ArrayIndex));
}

export function EcRemoveObjectArrayElement(
  ObjectArray: bigint | number /* isize */,
  ArrayIndex: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWecApi_dll.EcRemoveObjectArrayElement(ObjectArray, ArrayIndex));
}

export function EcGetSubscriptionRunTimeStatus(
  SubscriptionName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  StatusInfoId: EC_SUBSCRIPTION_RUNTIME_STATUS_INFO_ID /* Windows.Win32.System.EventCollector.EC_SUBSCRIPTION_RUNTIME_STATUS_INFO_ID */,
  EventSourceName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  Flags: number /* u32 */,
  StatusValueBufferSize: number /* u32 */,
  StatusValueBuffer: Deno.PointerValue | Uint8Array /* ptr */,
  StatusValueBufferUsed: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWecApi_dll.EcGetSubscriptionRunTimeStatus(util.pwstrToFfi(SubscriptionName), StatusInfoId, util.pwstrToFfi(EventSourceName), Flags, StatusValueBufferSize, util.toPointer(StatusValueBuffer), util.toPointer(StatusValueBufferUsed)));
}

export function EcRetrySubscription(
  SubscriptionName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  EventSourceName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  Flags: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWecApi_dll.EcRetrySubscription(util.pwstrToFfi(SubscriptionName), util.pwstrToFfi(EventSourceName), Flags));
}

export function EcClose(
  Object: bigint | number /* isize */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libWecApi_dll.EcClose(Object));
}

