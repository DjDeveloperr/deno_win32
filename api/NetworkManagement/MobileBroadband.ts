/// Auto-generated by Deno Win32: Windows.Win32.NetworkManagement.MobileBroadband.Apis

import * as util from "../../util.ts";

// Enums
export type MBN_SIGNAL_CONSTANTS = number;
export type MBN_CELLULAR_CLASS = number;
export type MBN_VOICE_CLASS = number;
export type MBN_PROVIDER_STATE = number;
export type MBN_PROVIDER_CONSTANTS = number;
export type MBN_INTERFACE_CAPS_CONSTANTS = number;
export type MBN_DATA_CLASS = number;
export type MBN_CTRL_CAPS = number;
export type MBN_SMS_CAPS = number;
export type MBN_BAND_CLASS = number;
export type MBN_READY_STATE = number;
export type MBN_ACTIVATION_STATE = number;
export type MBN_CONNECTION_MODE = number;
export type MBN_VOICE_CALL_STATE = number;
export type MBN_REGISTRATION_CONSTANTS = number;
export type MBN_REGISTER_STATE = number;
export type MBN_REGISTER_MODE = number;
export type MBN_PIN_CONSTANTS = number;
export type MBN_PIN_STATE = number;
export type MBN_PIN_TYPE = number;
export type MBN_PIN_MODE = number;
export type MBN_PIN_FORMAT = number;
export type MBN_CONTEXT_CONSTANTS = number;
export type MBN_AUTH_PROTOCOL = number;
export type MBN_COMPRESSION = number;
export type MBN_CONTEXT_TYPE = number;
export type WWAEXT_SMS_CONSTANTS = number;
export type MBN_MSG_STATUS = number;
export type MBN_SMS_CDMA_LANG = number;
export type MBN_SMS_CDMA_ENCODING = number;
export type MBN_SMS_FLAG = number;
export type MBN_SMS_STATUS_FLAG = number;
export type MBN_SMS_FORMAT = number;
export type MBN_RADIO = number;
export type MBN_DEVICE_SERVICE_SESSIONS_STATE = number;
export type MBN_DEVICE_SERVICES_INTERFACE_STATE = number;

// Constants
export const MBN_RSSI_DEFAULT = `-1`;
export const MBN_RSSI_DISABLE = 0;
export const MBN_RSSI_UNKNOWN = 99;
export const MBN_ERROR_RATE_UNKNOWN = 99;
export const MBN_CELLULAR_CLASS_NONE = 0;
export const MBN_CELLULAR_CLASS_GSM = 1;
export const MBN_CELLULAR_CLASS_CDMA = 2;
export const MBN_VOICE_CLASS_NONE = 0;
export const MBN_VOICE_CLASS_NO_VOICE = 1;
export const MBN_VOICE_CLASS_SEPARATE_VOICE_DATA = 2;
export const MBN_VOICE_CLASS_SIMULTANEOUS_VOICE_DATA = 3;
export const MBN_PROVIDER_STATE_NONE = 0;
export const MBN_PROVIDER_STATE_HOME = 1;
export const MBN_PROVIDER_STATE_FORBIDDEN = 2;
export const MBN_PROVIDER_STATE_PREFERRED = 4;
export const MBN_PROVIDER_STATE_VISIBLE = 8;
export const MBN_PROVIDER_STATE_REGISTERED = 16;
export const MBN_PROVIDER_STATE_PREFERRED_MULTICARRIER = 32;
export const MBN_PROVIDERNAME_LEN = 20;
export const MBN_PROVIDERID_LEN = 6;
export const MBN_DEVICEID_LEN = 18;
export const MBN_MANUFACTURER_LEN = 32;
export const MBN_MODEL_LEN = 32;
export const MBN_FIRMWARE_LEN = 32;
export const MBN_DATA_CLASS_NONE = 0;
export const MBN_DATA_CLASS_GPRS = 1;
export const MBN_DATA_CLASS_EDGE = 2;
export const MBN_DATA_CLASS_UMTS = 4;
export const MBN_DATA_CLASS_HSDPA = 8;
export const MBN_DATA_CLASS_HSUPA = 16;
export const MBN_DATA_CLASS_LTE = 32;
export const MBN_DATA_CLASS_5G_NSA = 64;
export const MBN_DATA_CLASS_5G_SA = 128;
export const MBN_DATA_CLASS_1XRTT = 65536;
export const MBN_DATA_CLASS_1XEVDO = 131072;
export const MBN_DATA_CLASS_1XEVDO_REVA = 262144;
export const MBN_DATA_CLASS_1XEVDV = 524288;
export const MBN_DATA_CLASS_3XRTT = 1048576;
export const MBN_DATA_CLASS_1XEVDO_REVB = 2097152;
export const MBN_DATA_CLASS_UMB = 4194304;
export const MBN_DATA_CLASS_CUSTOM = `-2147483648`;
export const MBN_CTRL_CAPS_NONE = 0;
export const MBN_CTRL_CAPS_REG_MANUAL = 1;
export const MBN_CTRL_CAPS_HW_RADIO_SWITCH = 2;
export const MBN_CTRL_CAPS_CDMA_MOBILE_IP = 4;
export const MBN_CTRL_CAPS_CDMA_SIMPLE_IP = 8;
export const MBN_CTRL_CAPS_PROTECT_UNIQUEID = 16;
export const MBN_CTRL_CAPS_MODEL_MULTI_CARRIER = 32;
export const MBN_CTRL_CAPS_USSD = 64;
export const MBN_CTRL_CAPS_MULTI_MODE = 128;
export const MBN_SMS_CAPS_NONE = 0;
export const MBN_SMS_CAPS_PDU_RECEIVE = 1;
export const MBN_SMS_CAPS_PDU_SEND = 2;
export const MBN_SMS_CAPS_TEXT_RECEIVE = 4;
export const MBN_SMS_CAPS_TEXT_SEND = 8;
export const MBN_BAND_CLASS_NONE = 0;
export const MBN_BAND_CLASS_0 = 1;
export const MBN_BAND_CLASS_I = 2;
export const MBN_BAND_CLASS_II = 4;
export const MBN_BAND_CLASS_III = 8;
export const MBN_BAND_CLASS_IV = 16;
export const MBN_BAND_CLASS_V = 32;
export const MBN_BAND_CLASS_VI = 64;
export const MBN_BAND_CLASS_VII = 128;
export const MBN_BAND_CLASS_VIII = 256;
export const MBN_BAND_CLASS_IX = 512;
export const MBN_BAND_CLASS_X = 1024;
export const MBN_BAND_CLASS_XI = 2048;
export const MBN_BAND_CLASS_XII = 4096;
export const MBN_BAND_CLASS_XIII = 8192;
export const MBN_BAND_CLASS_XIV = 16384;
export const MBN_BAND_CLASS_XV = 32768;
export const MBN_BAND_CLASS_XVI = 65536;
export const MBN_BAND_CLASS_XVII = 131072;
export const MBN_BAND_CLASS_CUSTOM = `-2147483648`;
export const MBN_READY_STATE_OFF = 0;
export const MBN_READY_STATE_INITIALIZED = 1;
export const MBN_READY_STATE_SIM_NOT_INSERTED = 2;
export const MBN_READY_STATE_BAD_SIM = 3;
export const MBN_READY_STATE_FAILURE = 4;
export const MBN_READY_STATE_NOT_ACTIVATED = 5;
export const MBN_READY_STATE_DEVICE_LOCKED = 6;
export const MBN_READY_STATE_DEVICE_BLOCKED = 7;
export const MBN_READY_STATE_NO_ESIM_PROFILE = 8;
export const MBN_ACTIVATION_STATE_NONE = 0;
export const MBN_ACTIVATION_STATE_ACTIVATED = 1;
export const MBN_ACTIVATION_STATE_ACTIVATING = 2;
export const MBN_ACTIVATION_STATE_DEACTIVATED = 3;
export const MBN_ACTIVATION_STATE_DEACTIVATING = 4;
export const MBN_CONNECTION_MODE_PROFILE = 0;
export const MBN_CONNECTION_MODE_TMP_PROFILE = 1;
export const MBN_VOICE_CALL_STATE_NONE = 0;
export const MBN_VOICE_CALL_STATE_IN_PROGRESS = 1;
export const MBN_VOICE_CALL_STATE_HANGUP = 2;
export const MBN_ROAMTEXT_LEN = 64;
export const MBN_CDMA_DEFAULT_PROVIDER_ID = 0;
export const MBN_REGISTER_STATE_NONE = 0;
export const MBN_REGISTER_STATE_DEREGISTERED = 1;
export const MBN_REGISTER_STATE_SEARCHING = 2;
export const MBN_REGISTER_STATE_HOME = 3;
export const MBN_REGISTER_STATE_ROAMING = 4;
export const MBN_REGISTER_STATE_PARTNER = 5;
export const MBN_REGISTER_STATE_DENIED = 6;
export const MBN_REGISTER_MODE_NONE = 0;
export const MBN_REGISTER_MODE_AUTOMATIC = 1;
export const MBN_REGISTER_MODE_MANUAL = 2;
export const MBN_ATTEMPTS_REMAINING_UNKNOWN = `-1`;
export const MBN_PIN_LENGTH_UNKNOWN = `-1`;
export const MBN_PIN_STATE_NONE = 0;
export const MBN_PIN_STATE_ENTER = 1;
export const MBN_PIN_STATE_UNBLOCK = 2;
export const MBN_PIN_TYPE_NONE = 0;
export const MBN_PIN_TYPE_CUSTOM = 1;
export const MBN_PIN_TYPE_PIN1 = 2;
export const MBN_PIN_TYPE_PIN2 = 3;
export const MBN_PIN_TYPE_DEVICE_SIM_PIN = 4;
export const MBN_PIN_TYPE_DEVICE_FIRST_SIM_PIN = 5;
export const MBN_PIN_TYPE_NETWORK_PIN = 6;
export const MBN_PIN_TYPE_NETWORK_SUBSET_PIN = 7;
export const MBN_PIN_TYPE_SVC_PROVIDER_PIN = 8;
export const MBN_PIN_TYPE_CORPORATE_PIN = 9;
export const MBN_PIN_TYPE_SUBSIDY_LOCK = 10;
export const MBN_PIN_MODE_ENABLED = 1;
export const MBN_PIN_MODE_DISABLED = 2;
export const MBN_PIN_FORMAT_NONE = 0;
export const MBN_PIN_FORMAT_NUMERIC = 1;
export const MBN_PIN_FORMAT_ALPHANUMERIC = 2;
export const MBN_ACCESSSTRING_LEN = 100;
export const MBN_USERNAME_LEN = 255;
export const MBN_PASSWORD_LEN = 255;
export const MBN_CONTEXT_ID_APPEND = `-1`;
export const MBN_AUTH_PROTOCOL_NONE = 0;
export const MBN_AUTH_PROTOCOL_PAP = 1;
export const MBN_AUTH_PROTOCOL_CHAP = 2;
export const MBN_AUTH_PROTOCOL_MSCHAPV2 = 3;
export const MBN_COMPRESSION_NONE = 0;
export const MBN_COMPRESSION_ENABLE = 1;
export const MBN_CONTEXT_TYPE_NONE = 0;
export const MBN_CONTEXT_TYPE_INTERNET = 1;
export const MBN_CONTEXT_TYPE_VPN = 2;
export const MBN_CONTEXT_TYPE_VOICE = 3;
export const MBN_CONTEXT_TYPE_VIDEO_SHARE = 4;
export const MBN_CONTEXT_TYPE_CUSTOM = 5;
export const MBN_CONTEXT_TYPE_PURCHASE = 6;
export const MBN_MESSAGE_INDEX_NONE = 0;
export const MBN_CDMA_SHORT_MSG_SIZE_UNKNOWN = 0;
export const MBN_CDMA_SHORT_MSG_SIZE_MAX = 160;
export const MBN_MSG_STATUS_NEW = 0;
export const MBN_MSG_STATUS_OLD = 1;
export const MBN_MSG_STATUS_DRAFT = 2;
export const MBN_MSG_STATUS_SENT = 3;
export const MBN_SMS_CDMA_LANG_NONE = 0;
export const MBN_SMS_CDMA_LANG_ENGLISH = 1;
export const MBN_SMS_CDMA_LANG_FRENCH = 2;
export const MBN_SMS_CDMA_LANG_SPANISH = 3;
export const MBN_SMS_CDMA_LANG_JAPANESE = 4;
export const MBN_SMS_CDMA_LANG_KOREAN = 5;
export const MBN_SMS_CDMA_LANG_CHINESE = 6;
export const MBN_SMS_CDMA_LANG_HEBREW = 7;
export const MBN_SMS_CDMA_ENCODING_OCTET = 0;
export const MBN_SMS_CDMA_ENCODING_EPM = 1;
export const MBN_SMS_CDMA_ENCODING_7BIT_ASCII = 2;
export const MBN_SMS_CDMA_ENCODING_IA5 = 3;
export const MBN_SMS_CDMA_ENCODING_UNICODE = 4;
export const MBN_SMS_CDMA_ENCODING_SHIFT_JIS = 5;
export const MBN_SMS_CDMA_ENCODING_KOREAN = 6;
export const MBN_SMS_CDMA_ENCODING_LATIN_HEBREW = 7;
export const MBN_SMS_CDMA_ENCODING_LATIN = 8;
export const MBN_SMS_CDMA_ENCODING_GSM_7BIT = 9;
export const MBN_SMS_FLAG_ALL = 0;
export const MBN_SMS_FLAG_INDEX = 1;
export const MBN_SMS_FLAG_NEW = 2;
export const MBN_SMS_FLAG_OLD = 3;
export const MBN_SMS_FLAG_SENT = 4;
export const MBN_SMS_FLAG_DRAFT = 5;
export const MBN_SMS_FLAG_NONE = 0;
export const MBN_SMS_FLAG_MESSAGE_STORE_FULL = 1;
export const MBN_SMS_FLAG_NEW_MESSAGE = 2;
export const MBN_SMS_FORMAT_NONE = 0;
export const MBN_SMS_FORMAT_PDU = 1;
export const MBN_SMS_FORMAT_TEXT = 2;
export const MBN_RADIO_OFF = 0;
export const MBN_RADIO_ON = 1;
export const MBN_DEVICE_SERVICE_SESSIONS_RESTORED = 0;
export const MBN_DEVICE_SERVICES_CAPABLE_INTERFACE_ARRIVAL = 0;
export const MBN_DEVICE_SERVICES_CAPABLE_INTERFACE_REMOVAL = 1;

// Structs

export type BSTR = Deno.PointerValue | Uint8Array | null;

/**
 * Windows.Win32.NetworkManagement.MobileBroadband.MBN_INTERFACE_CAPS (size: 80)
 */
export interface MBN_INTERFACE_CAPS {
  /** Windows.Win32.NetworkManagement.MobileBroadband.MBN_CELLULAR_CLASS */
  cellularClass: MBN_CELLULAR_CLASS;
  /** Windows.Win32.NetworkManagement.MobileBroadband.MBN_VOICE_CLASS */
  voiceClass: MBN_VOICE_CLASS;
  /** u32 */
  dataClass: number;
  /** Windows.Win32.Foundation.BSTR */
  customDataClass: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  gsmBandClass: number;
  /** u32 */
  cdmaBandClass: number;
  /** Windows.Win32.Foundation.BSTR */
  customBandClass: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  smsCaps: number;
  /** u32 */
  controlCaps: number;
  /** Windows.Win32.Foundation.BSTR */
  deviceID: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Foundation.BSTR */
  manufacturer: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Foundation.BSTR */
  model: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Foundation.BSTR */
  firmwareInfo: Uint8Array | Deno.PointerValue | null;
}

export const sizeofMBN_INTERFACE_CAPS = 80;

export function allocMBN_INTERFACE_CAPS(data?: Partial<MBN_INTERFACE_CAPS>): Uint8Array {
  const buf = new Uint8Array(sizeofMBN_INTERFACE_CAPS);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.cellularClass !== undefined) view.setInt32(0, Number(data.cellularClass), true);
  // 0x04: i32
  if (data?.voiceClass !== undefined) view.setInt32(4, Number(data.voiceClass), true);
  // 0x08: u32
  if (data?.dataClass !== undefined) view.setUint32(8, Number(data.dataClass), true);
  // 0x0c: pad4
  // 0x10: pointer
  if (data?.customDataClass !== undefined) view.setBigUint64(16, data.customDataClass === null ? 0n : util.toBigInt(util.toPointer(data.customDataClass)), true);
  // 0x18: u32
  if (data?.gsmBandClass !== undefined) view.setUint32(24, Number(data.gsmBandClass), true);
  // 0x1c: u32
  if (data?.cdmaBandClass !== undefined) view.setUint32(28, Number(data.cdmaBandClass), true);
  // 0x20: pointer
  if (data?.customBandClass !== undefined) view.setBigUint64(32, data.customBandClass === null ? 0n : util.toBigInt(util.toPointer(data.customBandClass)), true);
  // 0x28: u32
  if (data?.smsCaps !== undefined) view.setUint32(40, Number(data.smsCaps), true);
  // 0x2c: u32
  if (data?.controlCaps !== undefined) view.setUint32(44, Number(data.controlCaps), true);
  // 0x30: pointer
  if (data?.deviceID !== undefined) view.setBigUint64(48, data.deviceID === null ? 0n : util.toBigInt(util.toPointer(data.deviceID)), true);
  // 0x38: pointer
  if (data?.manufacturer !== undefined) view.setBigUint64(56, data.manufacturer === null ? 0n : util.toBigInt(util.toPointer(data.manufacturer)), true);
  // 0x40: pointer
  if (data?.model !== undefined) view.setBigUint64(64, data.model === null ? 0n : util.toBigInt(util.toPointer(data.model)), true);
  // 0x48: pointer
  if (data?.firmwareInfo !== undefined) view.setBigUint64(72, data.firmwareInfo === null ? 0n : util.toBigInt(util.toPointer(data.firmwareInfo)), true);
  return buf;
}

export class MBN_INTERFACE_CAPSView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: i32
  get cellularClass(): number {
    return this.view.getInt32(0, true);
  }

  // 0x04: i32
  get voiceClass(): number {
    return this.view.getInt32(4, true);
  }

  // 0x08: u32
  get dataClass(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: pad4

  // 0x10: pointer
  get customDataClass(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(16, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x18: u32
  get gsmBandClass(): number {
    return this.view.getUint32(24, true);
  }

  // 0x1c: u32
  get cdmaBandClass(): number {
    return this.view.getUint32(28, true);
  }

  // 0x20: pointer
  get customBandClass(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(32, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x28: u32
  get smsCaps(): number {
    return this.view.getUint32(40, true);
  }

  // 0x2c: u32
  get controlCaps(): number {
    return this.view.getUint32(44, true);
  }

  // 0x30: pointer
  get deviceID(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(48, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x38: pointer
  get manufacturer(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(56, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x40: pointer
  get model(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(64, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x48: pointer
  get firmwareInfo(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(72, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: i32
  set cellularClass(value: number) {
    this.view.setInt32(0, value, true);
  }

  // 0x04: i32
  set voiceClass(value: number) {
    this.view.setInt32(4, value, true);
  }

  // 0x08: u32
  set dataClass(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: pad4

  // 0x10: pointer
  set customDataClass(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(16, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x18: u32
  set gsmBandClass(value: number) {
    this.view.setUint32(24, value, true);
  }

  // 0x1c: u32
  set cdmaBandClass(value: number) {
    this.view.setUint32(28, value, true);
  }

  // 0x20: pointer
  set customBandClass(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(32, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x28: u32
  set smsCaps(value: number) {
    this.view.setUint32(40, value, true);
  }

  // 0x2c: u32
  set controlCaps(value: number) {
    this.view.setUint32(44, value, true);
  }

  // 0x30: pointer
  set deviceID(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(48, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x38: pointer
  set manufacturer(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(56, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x40: pointer
  set model(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(64, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x48: pointer
  set firmwareInfo(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(72, util.toBigInt(util.toPointer(value)), true);
  }
}

/**
 * Windows.Win32.NetworkManagement.MobileBroadband.MBN_PROVIDER (size: 32)
 */
export interface MBN_PROVIDER {
  /** Windows.Win32.Foundation.BSTR */
  providerID: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  providerState: number;
  /** Windows.Win32.Foundation.BSTR */
  providerName: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  dataClass: number;
}

export const sizeofMBN_PROVIDER = 32;

export function allocMBN_PROVIDER(data?: Partial<MBN_PROVIDER>): Uint8Array {
  const buf = new Uint8Array(sizeofMBN_PROVIDER);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.providerID !== undefined) view.setBigUint64(0, data.providerID === null ? 0n : util.toBigInt(util.toPointer(data.providerID)), true);
  // 0x08: u32
  if (data?.providerState !== undefined) view.setUint32(8, Number(data.providerState), true);
  // 0x0c: pad4
  // 0x10: pointer
  if (data?.providerName !== undefined) view.setBigUint64(16, data.providerName === null ? 0n : util.toBigInt(util.toPointer(data.providerName)), true);
  // 0x18: u32
  if (data?.dataClass !== undefined) view.setUint32(24, Number(data.dataClass), true);
  // 0x1c: pad4
  return buf;
}

export class MBN_PROVIDERView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get providerID(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x08: u32
  get providerState(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: pad4

  // 0x10: pointer
  get providerName(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(16, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x18: u32
  get dataClass(): number {
    return this.view.getUint32(24, true);
  }

  // 0x1c: pad4

  // 0x00: pointer
  set providerID(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(0, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x08: u32
  set providerState(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: pad4

  // 0x10: pointer
  set providerName(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(16, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x18: u32
  set dataClass(value: number) {
    this.view.setUint32(24, value, true);
  }

  // 0x1c: pad4
}

/**
 * Windows.Win32.NetworkManagement.MobileBroadband.MBN_PROVIDER2 (size: 24)
 */
export interface MBN_PROVIDER2 {
  /** Windows.Win32.NetworkManagement.MobileBroadband.MBN_PROVIDER */
  provider: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.NetworkManagement.MobileBroadband.MBN_CELLULAR_CLASS */
  cellularClass: MBN_CELLULAR_CLASS;
  /** u32 */
  signalStrength: number;
  /** u32 */
  signalError: number;
}

export const sizeofMBN_PROVIDER2 = 24;

export function allocMBN_PROVIDER2(data?: Partial<MBN_PROVIDER2>): Uint8Array {
  const buf = new Uint8Array(sizeofMBN_PROVIDER2);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.provider !== undefined) view.setBigUint64(0, data.provider === null ? 0n : util.toBigInt(util.toPointer(data.provider)), true);
  // 0x08: i32
  if (data?.cellularClass !== undefined) view.setInt32(8, Number(data.cellularClass), true);
  // 0x0c: u32
  if (data?.signalStrength !== undefined) view.setUint32(12, Number(data.signalStrength), true);
  // 0x10: u32
  if (data?.signalError !== undefined) view.setUint32(16, Number(data.signalError), true);
  // 0x14: pad4
  return buf;
}

export class MBN_PROVIDER2View {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get provider(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x08: i32
  get cellularClass(): number {
    return this.view.getInt32(8, true);
  }

  // 0x0c: u32
  get signalStrength(): number {
    return this.view.getUint32(12, true);
  }

  // 0x10: u32
  get signalError(): number {
    return this.view.getUint32(16, true);
  }

  // 0x14: pad4

  // 0x00: pointer
  set provider(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(0, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x08: i32
  set cellularClass(value: number) {
    this.view.setInt32(8, value, true);
  }

  // 0x0c: u32
  set signalStrength(value: number) {
    this.view.setUint32(12, value, true);
  }

  // 0x10: u32
  set signalError(value: number) {
    this.view.setUint32(16, value, true);
  }

  // 0x14: pad4
}

/**
 * Windows.Win32.NetworkManagement.MobileBroadband.MBN_PIN_INFO (size: 16)
 */
export interface MBN_PIN_INFO {
  /** Windows.Win32.NetworkManagement.MobileBroadband.MBN_PIN_STATE */
  pinState: MBN_PIN_STATE;
  /** Windows.Win32.NetworkManagement.MobileBroadband.MBN_PIN_TYPE */
  pinType: MBN_PIN_TYPE;
  /** u32 */
  attemptsRemaining: number;
}

export const sizeofMBN_PIN_INFO = 16;

export function allocMBN_PIN_INFO(data?: Partial<MBN_PIN_INFO>): Uint8Array {
  const buf = new Uint8Array(sizeofMBN_PIN_INFO);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.pinState !== undefined) view.setInt32(0, Number(data.pinState), true);
  // 0x04: i32
  if (data?.pinType !== undefined) view.setInt32(4, Number(data.pinType), true);
  // 0x08: u32
  if (data?.attemptsRemaining !== undefined) view.setUint32(8, Number(data.attemptsRemaining), true);
  // 0x0c: pad4
  return buf;
}

export class MBN_PIN_INFOView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: i32
  get pinState(): number {
    return this.view.getInt32(0, true);
  }

  // 0x04: i32
  get pinType(): number {
    return this.view.getInt32(4, true);
  }

  // 0x08: u32
  get attemptsRemaining(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: pad4

  // 0x00: i32
  set pinState(value: number) {
    this.view.setInt32(0, value, true);
  }

  // 0x04: i32
  set pinType(value: number) {
    this.view.setInt32(4, value, true);
  }

  // 0x08: u32
  set attemptsRemaining(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: pad4
}

/**
 * Windows.Win32.NetworkManagement.MobileBroadband.MBN_CONTEXT (size: 40)
 */
export interface MBN_CONTEXT {
  /** u32 */
  contextID: number;
  /** Windows.Win32.NetworkManagement.MobileBroadband.MBN_CONTEXT_TYPE */
  contextType: MBN_CONTEXT_TYPE;
  /** Windows.Win32.Foundation.BSTR */
  accessString: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Foundation.BSTR */
  userName: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Foundation.BSTR */
  password: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.NetworkManagement.MobileBroadband.MBN_COMPRESSION */
  compression: MBN_COMPRESSION;
  /** Windows.Win32.NetworkManagement.MobileBroadband.MBN_AUTH_PROTOCOL */
  authType: MBN_AUTH_PROTOCOL;
}

export const sizeofMBN_CONTEXT = 40;

export function allocMBN_CONTEXT(data?: Partial<MBN_CONTEXT>): Uint8Array {
  const buf = new Uint8Array(sizeofMBN_CONTEXT);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.contextID !== undefined) view.setUint32(0, Number(data.contextID), true);
  // 0x04: i32
  if (data?.contextType !== undefined) view.setInt32(4, Number(data.contextType), true);
  // 0x08: pointer
  if (data?.accessString !== undefined) view.setBigUint64(8, data.accessString === null ? 0n : util.toBigInt(util.toPointer(data.accessString)), true);
  // 0x10: pointer
  if (data?.userName !== undefined) view.setBigUint64(16, data.userName === null ? 0n : util.toBigInt(util.toPointer(data.userName)), true);
  // 0x18: pointer
  if (data?.password !== undefined) view.setBigUint64(24, data.password === null ? 0n : util.toBigInt(util.toPointer(data.password)), true);
  // 0x20: i32
  if (data?.compression !== undefined) view.setInt32(32, Number(data.compression), true);
  // 0x24: i32
  if (data?.authType !== undefined) view.setInt32(36, Number(data.authType), true);
  return buf;
}

export class MBN_CONTEXTView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get contextID(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: i32
  get contextType(): number {
    return this.view.getInt32(4, true);
  }

  // 0x08: pointer
  get accessString(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: pointer
  get userName(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(16, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x18: pointer
  get password(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(24, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x20: i32
  get compression(): number {
    return this.view.getInt32(32, true);
  }

  // 0x24: i32
  get authType(): number {
    return this.view.getInt32(36, true);
  }

  // 0x00: u32
  set contextID(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: i32
  set contextType(value: number) {
    this.view.setInt32(4, value, true);
  }

  // 0x08: pointer
  set accessString(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x10: pointer
  set userName(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(16, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x18: pointer
  set password(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(24, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x20: i32
  set compression(value: number) {
    this.view.setInt32(32, value, true);
  }

  // 0x24: i32
  set authType(value: number) {
    this.view.setInt32(36, value, true);
  }
}

/**
 * Windows.Win32.NetworkManagement.MobileBroadband.MBN_SMS_FILTER (size: 8)
 */
export interface MBN_SMS_FILTER {
  /** Windows.Win32.NetworkManagement.MobileBroadband.MBN_SMS_FLAG */
  flag: MBN_SMS_FLAG;
  /** u32 */
  messageIndex: number;
}

export const sizeofMBN_SMS_FILTER = 8;

export function allocMBN_SMS_FILTER(data?: Partial<MBN_SMS_FILTER>): Uint8Array {
  const buf = new Uint8Array(sizeofMBN_SMS_FILTER);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.flag !== undefined) view.setInt32(0, Number(data.flag), true);
  // 0x04: u32
  if (data?.messageIndex !== undefined) view.setUint32(4, Number(data.messageIndex), true);
  return buf;
}

export class MBN_SMS_FILTERView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: i32
  get flag(): number {
    return this.view.getInt32(0, true);
  }

  // 0x04: u32
  get messageIndex(): number {
    return this.view.getUint32(4, true);
  }

  // 0x00: i32
  set flag(value: number) {
    this.view.setInt32(0, value, true);
  }

  // 0x04: u32
  set messageIndex(value: number) {
    this.view.setUint32(4, value, true);
  }
}

/**
 * Windows.Win32.NetworkManagement.MobileBroadband.MBN_SMS_STATUS_INFO (size: 8)
 */
export interface MBN_SMS_STATUS_INFO {
  /** u32 */
  flag: number;
  /** u32 */
  messageIndex: number;
}

export const sizeofMBN_SMS_STATUS_INFO = 8;

export function allocMBN_SMS_STATUS_INFO(data?: Partial<MBN_SMS_STATUS_INFO>): Uint8Array {
  const buf = new Uint8Array(sizeofMBN_SMS_STATUS_INFO);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.flag !== undefined) view.setUint32(0, Number(data.flag), true);
  // 0x04: u32
  if (data?.messageIndex !== undefined) view.setUint32(4, Number(data.messageIndex), true);
  return buf;
}

export class MBN_SMS_STATUS_INFOView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get flag(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: u32
  get messageIndex(): number {
    return this.view.getUint32(4, true);
  }

  // 0x00: u32
  set flag(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: u32
  set messageIndex(value: number) {
    this.view.setUint32(4, value, true);
  }
}

/**
 * Windows.Win32.NetworkManagement.MobileBroadband.MBN_DEVICE_SERVICE (size: 16)
 */
export interface MBN_DEVICE_SERVICE {
  /** Windows.Win32.Foundation.BSTR */
  deviceServiceID: Uint8Array | Deno.PointerValue | null;
  /** i16 */
  dataWriteSupported: number;
  /** i16 */
  dataReadSupported: number;
}

export const sizeofMBN_DEVICE_SERVICE = 16;

export function allocMBN_DEVICE_SERVICE(data?: Partial<MBN_DEVICE_SERVICE>): Uint8Array {
  const buf = new Uint8Array(sizeofMBN_DEVICE_SERVICE);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.deviceServiceID !== undefined) view.setBigUint64(0, data.deviceServiceID === null ? 0n : util.toBigInt(util.toPointer(data.deviceServiceID)), true);
  // 0x08: i16
  if (data?.dataWriteSupported !== undefined) view.setInt16(8, Number(data.dataWriteSupported), true);
  // 0x0a: i16
  if (data?.dataReadSupported !== undefined) view.setInt16(10, Number(data.dataReadSupported), true);
  // 0x0c: pad4
  return buf;
}

export class MBN_DEVICE_SERVICEView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get deviceServiceID(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x08: i16
  get dataWriteSupported(): number {
    return this.view.getInt16(8, true);
  }

  // 0x0a: i16
  get dataReadSupported(): number {
    return this.view.getInt16(10, true);
  }

  // 0x0c: pad4

  // 0x00: pointer
  set deviceServiceID(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(0, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x08: i16
  set dataWriteSupported(value: number) {
    this.view.setInt16(8, value, true);
  }

  // 0x0a: i16
  set dataReadSupported(value: number) {
    this.view.setInt16(10, value, true);
  }

  // 0x0c: pad4
}

/**
 * Windows.Win32.NetworkManagement.MobileBroadband.__mbnapi_ReferenceRemainingTypes__ (size: 56)
 */
export interface __mbnapi_ReferenceRemainingTypes__ {
  /** Windows.Win32.NetworkManagement.MobileBroadband.MBN_BAND_CLASS */
  bandClass: MBN_BAND_CLASS;
  /** Windows.Win32.NetworkManagement.MobileBroadband.MBN_CONTEXT_CONSTANTS */
  contextConstants: MBN_CONTEXT_CONSTANTS;
  /** Windows.Win32.NetworkManagement.MobileBroadband.MBN_CTRL_CAPS */
  ctrlCaps: MBN_CTRL_CAPS;
  /** Windows.Win32.NetworkManagement.MobileBroadband.MBN_DATA_CLASS */
  dataClass: MBN_DATA_CLASS;
  /** Windows.Win32.NetworkManagement.MobileBroadband.MBN_INTERFACE_CAPS_CONSTANTS */
  interfaceCapsConstants: MBN_INTERFACE_CAPS_CONSTANTS;
  /** Windows.Win32.NetworkManagement.MobileBroadband.MBN_PIN_CONSTANTS */
  pinConstants: MBN_PIN_CONSTANTS;
  /** Windows.Win32.NetworkManagement.MobileBroadband.MBN_PROVIDER_CONSTANTS */
  providerConstants: MBN_PROVIDER_CONSTANTS;
  /** Windows.Win32.NetworkManagement.MobileBroadband.MBN_PROVIDER_STATE */
  providerState: MBN_PROVIDER_STATE;
  /** Windows.Win32.NetworkManagement.MobileBroadband.MBN_REGISTRATION_CONSTANTS */
  registrationConstants: MBN_REGISTRATION_CONSTANTS;
  /** Windows.Win32.NetworkManagement.MobileBroadband.MBN_SIGNAL_CONSTANTS */
  signalConstants: MBN_SIGNAL_CONSTANTS;
  /** Windows.Win32.NetworkManagement.MobileBroadband.MBN_SMS_CAPS */
  smsCaps: MBN_SMS_CAPS;
  /** Windows.Win32.NetworkManagement.MobileBroadband.WWAEXT_SMS_CONSTANTS */
  smsConstants: WWAEXT_SMS_CONSTANTS;
  /** Windows.Win32.NetworkManagement.MobileBroadband.WWAEXT_SMS_CONSTANTS */
  wwaextSmsConstants: WWAEXT_SMS_CONSTANTS;
  /** Windows.Win32.NetworkManagement.MobileBroadband.MBN_SMS_STATUS_FLAG */
  smsStatusFlag: MBN_SMS_STATUS_FLAG;
}

export const sizeof__mbnapi_ReferenceRemainingTypes__ = 56;

export function alloc__mbnapi_ReferenceRemainingTypes__(data?: Partial<__mbnapi_ReferenceRemainingTypes__>): Uint8Array {
  const buf = new Uint8Array(sizeof__mbnapi_ReferenceRemainingTypes__);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.bandClass !== undefined) view.setInt32(0, Number(data.bandClass), true);
  // 0x04: i32
  if (data?.contextConstants !== undefined) view.setInt32(4, Number(data.contextConstants), true);
  // 0x08: i32
  if (data?.ctrlCaps !== undefined) view.setInt32(8, Number(data.ctrlCaps), true);
  // 0x0c: i32
  if (data?.dataClass !== undefined) view.setInt32(12, Number(data.dataClass), true);
  // 0x10: i32
  if (data?.interfaceCapsConstants !== undefined) view.setInt32(16, Number(data.interfaceCapsConstants), true);
  // 0x14: i32
  if (data?.pinConstants !== undefined) view.setInt32(20, Number(data.pinConstants), true);
  // 0x18: i32
  if (data?.providerConstants !== undefined) view.setInt32(24, Number(data.providerConstants), true);
  // 0x1c: i32
  if (data?.providerState !== undefined) view.setInt32(28, Number(data.providerState), true);
  // 0x20: i32
  if (data?.registrationConstants !== undefined) view.setInt32(32, Number(data.registrationConstants), true);
  // 0x24: i32
  if (data?.signalConstants !== undefined) view.setInt32(36, Number(data.signalConstants), true);
  // 0x28: i32
  if (data?.smsCaps !== undefined) view.setInt32(40, Number(data.smsCaps), true);
  // 0x2c: i32
  if (data?.smsConstants !== undefined) view.setInt32(44, Number(data.smsConstants), true);
  // 0x30: i32
  if (data?.wwaextSmsConstants !== undefined) view.setInt32(48, Number(data.wwaextSmsConstants), true);
  // 0x34: i32
  if (data?.smsStatusFlag !== undefined) view.setInt32(52, Number(data.smsStatusFlag), true);
  return buf;
}

export class __mbnapi_ReferenceRemainingTypes__View {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: i32
  get bandClass(): number {
    return this.view.getInt32(0, true);
  }

  // 0x04: i32
  get contextConstants(): number {
    return this.view.getInt32(4, true);
  }

  // 0x08: i32
  get ctrlCaps(): number {
    return this.view.getInt32(8, true);
  }

  // 0x0c: i32
  get dataClass(): number {
    return this.view.getInt32(12, true);
  }

  // 0x10: i32
  get interfaceCapsConstants(): number {
    return this.view.getInt32(16, true);
  }

  // 0x14: i32
  get pinConstants(): number {
    return this.view.getInt32(20, true);
  }

  // 0x18: i32
  get providerConstants(): number {
    return this.view.getInt32(24, true);
  }

  // 0x1c: i32
  get providerState(): number {
    return this.view.getInt32(28, true);
  }

  // 0x20: i32
  get registrationConstants(): number {
    return this.view.getInt32(32, true);
  }

  // 0x24: i32
  get signalConstants(): number {
    return this.view.getInt32(36, true);
  }

  // 0x28: i32
  get smsCaps(): number {
    return this.view.getInt32(40, true);
  }

  // 0x2c: i32
  get smsConstants(): number {
    return this.view.getInt32(44, true);
  }

  // 0x30: i32
  get wwaextSmsConstants(): number {
    return this.view.getInt32(48, true);
  }

  // 0x34: i32
  get smsStatusFlag(): number {
    return this.view.getInt32(52, true);
  }

  // 0x00: i32
  set bandClass(value: number) {
    this.view.setInt32(0, value, true);
  }

  // 0x04: i32
  set contextConstants(value: number) {
    this.view.setInt32(4, value, true);
  }

  // 0x08: i32
  set ctrlCaps(value: number) {
    this.view.setInt32(8, value, true);
  }

  // 0x0c: i32
  set dataClass(value: number) {
    this.view.setInt32(12, value, true);
  }

  // 0x10: i32
  set interfaceCapsConstants(value: number) {
    this.view.setInt32(16, value, true);
  }

  // 0x14: i32
  set pinConstants(value: number) {
    this.view.setInt32(20, value, true);
  }

  // 0x18: i32
  set providerConstants(value: number) {
    this.view.setInt32(24, value, true);
  }

  // 0x1c: i32
  set providerState(value: number) {
    this.view.setInt32(28, value, true);
  }

  // 0x20: i32
  set registrationConstants(value: number) {
    this.view.setInt32(32, value, true);
  }

  // 0x24: i32
  set signalConstants(value: number) {
    this.view.setInt32(36, value, true);
  }

  // 0x28: i32
  set smsCaps(value: number) {
    this.view.setInt32(40, value, true);
  }

  // 0x2c: i32
  set smsConstants(value: number) {
    this.view.setInt32(44, value, true);
  }

  // 0x30: i32
  set wwaextSmsConstants(value: number) {
    this.view.setInt32(48, value, true);
  }

  // 0x34: i32
  set smsStatusFlag(value: number) {
    this.view.setInt32(52, value, true);
  }
}

/**
 * Windows.Win32.NetworkManagement.MobileBroadband.__DummyPinType__ (size: 8)
 */
export interface __DummyPinType__ {
  /** u32 */
  pinType: number;
}

export const sizeof__DummyPinType__ = 8;

export function alloc__DummyPinType__(data?: Partial<__DummyPinType__>): Uint8Array {
  const buf = new Uint8Array(sizeof__DummyPinType__);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.pinType !== undefined) view.setUint32(0, Number(data.pinType), true);
  // 0x04: pad4
  return buf;
}

export class __DummyPinType__View {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get pinType(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: pad4

  // 0x00: u32
  set pinType(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: pad4
}

// Native Libraries

// Symbols

