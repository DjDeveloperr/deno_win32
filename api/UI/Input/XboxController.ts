/// Auto-generated by Deno Win32: Windows.Win32.UI.Input.XboxController.Apis

import * as util from "../../../util.ts";

// Enums
export type XINPUT_VIRTUAL_KEY = number;
export type BATTERY_TYPE = number;
export type BATTERY_LEVEL = number;
export type BATTERY_DEVTYPE = number;
export type XINPUT_DEVTYPE = number;
export type XINPUT_DEVSUBTYPE = number;
export type XINPUT_CAPABILITIES_FLAGS = number;
export type XINPUT_GAMEPAD_BUTTON_FLAGS = number;
export type XINPUT_KEYSTROKE_FLAGS = number;
export type XINPUT_FLAG = number;

// Constants
export const VK_PAD_A = 22528;
export const VK_PAD_B = 22529;
export const VK_PAD_X = 22530;
export const VK_PAD_Y = 22531;
export const VK_PAD_RSHOULDER = 22532;
export const VK_PAD_LSHOULDER = 22533;
export const VK_PAD_LTRIGGER = 22534;
export const VK_PAD_RTRIGGER = 22535;
export const VK_PAD_DPAD_UP = 22544;
export const VK_PAD_DPAD_DOWN = 22545;
export const VK_PAD_DPAD_LEFT = 22546;
export const VK_PAD_DPAD_RIGHT = 22547;
export const VK_PAD_START = 22548;
export const VK_PAD_BACK = 22549;
export const VK_PAD_LTHUMB_PRESS = 22550;
export const VK_PAD_RTHUMB_PRESS = 22551;
export const VK_PAD_LTHUMB_UP = 22560;
export const VK_PAD_LTHUMB_DOWN = 22561;
export const VK_PAD_LTHUMB_RIGHT = 22562;
export const VK_PAD_LTHUMB_LEFT = 22563;
export const VK_PAD_LTHUMB_UPLEFT = 22564;
export const VK_PAD_LTHUMB_UPRIGHT = 22565;
export const VK_PAD_LTHUMB_DOWNRIGHT = 22566;
export const VK_PAD_LTHUMB_DOWNLEFT = 22567;
export const VK_PAD_RTHUMB_UP = 22576;
export const VK_PAD_RTHUMB_DOWN = 22577;
export const VK_PAD_RTHUMB_RIGHT = 22578;
export const VK_PAD_RTHUMB_LEFT = 22579;
export const VK_PAD_RTHUMB_UPLEFT = 22580;
export const VK_PAD_RTHUMB_UPRIGHT = 22581;
export const VK_PAD_RTHUMB_DOWNRIGHT = 22582;
export const VK_PAD_RTHUMB_DOWNLEFT = 22583;
export const BATTERY_TYPE_DISCONNECTED = 0;
export const BATTERY_TYPE_WIRED = 1;
export const BATTERY_TYPE_ALKALINE = 2;
export const BATTERY_TYPE_NIMH = 3;
export const BATTERY_TYPE_UNKNOWN = 255;
export const BATTERY_LEVEL_EMPTY = 0;
export const BATTERY_LEVEL_LOW = 1;
export const BATTERY_LEVEL_MEDIUM = 2;
export const BATTERY_LEVEL_FULL = 3;
export const BATTERY_DEVTYPE_GAMEPAD = 0;
export const BATTERY_DEVTYPE_HEADSET = 1;
export const XINPUT_DEVTYPE_GAMEPAD = 1;
export const XINPUT_DEVSUBTYPE_GAMEPAD = 1;
export const XINPUT_DEVSUBTYPE_UNKNOWN = 0;
export const XINPUT_DEVSUBTYPE_WHEEL = 2;
export const XINPUT_DEVSUBTYPE_ARCADE_STICK = 3;
export const XINPUT_DEVSUBTYPE_FLIGHT_STICK = 4;
export const XINPUT_DEVSUBTYPE_DANCE_PAD = 5;
export const XINPUT_DEVSUBTYPE_GUITAR = 6;
export const XINPUT_DEVSUBTYPE_GUITAR_ALTERNATE = 7;
export const XINPUT_DEVSUBTYPE_DRUM_KIT = 8;
export const XINPUT_DEVSUBTYPE_GUITAR_BASS = 11;
export const XINPUT_DEVSUBTYPE_ARCADE_PAD = 19;
export const XINPUT_CAPS_VOICE_SUPPORTED = 4;
export const XINPUT_CAPS_FFB_SUPPORTED = 1;
export const XINPUT_CAPS_WIRELESS = 2;
export const XINPUT_CAPS_PMD_SUPPORTED = 8;
export const XINPUT_CAPS_NO_NAVIGATION = 16;
export const XINPUT_GAMEPAD_DPAD_UP = 1;
export const XINPUT_GAMEPAD_DPAD_DOWN = 2;
export const XINPUT_GAMEPAD_DPAD_LEFT = 4;
export const XINPUT_GAMEPAD_DPAD_RIGHT = 8;
export const XINPUT_GAMEPAD_START = 16;
export const XINPUT_GAMEPAD_BACK = 32;
export const XINPUT_GAMEPAD_LEFT_THUMB = 64;
export const XINPUT_GAMEPAD_RIGHT_THUMB = 128;
export const XINPUT_GAMEPAD_LEFT_SHOULDER = 256;
export const XINPUT_GAMEPAD_RIGHT_SHOULDER = 512;
export const XINPUT_GAMEPAD_A = 4096;
export const XINPUT_GAMEPAD_B = 8192;
export const XINPUT_GAMEPAD_X = 16384;
export const XINPUT_GAMEPAD_Y = 32768;
export const XINPUT_GAMEPAD_LEFT_THUMB_DEADZONE = 7849;
export const XINPUT_GAMEPAD_RIGHT_THUMB_DEADZONE = 8689;
export const XINPUT_GAMEPAD_TRIGGER_THRESHOLD = 30;
export const XINPUT_KEYSTROKE_KEYDOWN = 1;
export const XINPUT_KEYSTROKE_KEYUP = 2;
export const XINPUT_KEYSTROKE_REPEAT = 4;
export const XINPUT_FLAG_ALL = 0;
export const XINPUT_FLAG_GAMEPAD = 1;
export const XINPUT_DLL_A = `xinput1_4.dll`;
export const XINPUT_DLL_W = `xinput1_4.dll`;
export const XINPUT_DLL = `xinput1_4.dll`;
export const XUSER_MAX_COUNT = 4;
export const XUSER_INDEX_ANY = 255;

// Structs

/**
 * Windows.Win32.UI.Input.XboxController.XINPUT_GAMEPAD (size: 16)
 */
export interface XINPUT_GAMEPAD {
  /** Windows.Win32.UI.Input.XboxController.XINPUT_GAMEPAD_BUTTON_FLAGS */
  wButtons: XINPUT_GAMEPAD_BUTTON_FLAGS;
  /** u8 */
  bLeftTrigger: number;
  /** u8 */
  bRightTrigger: number;
  /** i16 */
  sThumbLX: number;
  /** i16 */
  sThumbLY: number;
  /** i16 */
  sThumbRX: number;
  /** i16 */
  sThumbRY: number;
}

export const sizeofXINPUT_GAMEPAD = 16;

export function allocXINPUT_GAMEPAD(data?: Partial<XINPUT_GAMEPAD>): Uint8Array {
  const buf = new Uint8Array(sizeofXINPUT_GAMEPAD);
  const view = new DataView(buf.buffer);
  // 0x00: u16
  if (data?.wButtons !== undefined) view.setUint16(0, Number(data.wButtons), true);
  // 0x02: u8
  if (data?.bLeftTrigger !== undefined) view.setUint8(2, Number(data.bLeftTrigger));
  // 0x03: u8
  if (data?.bRightTrigger !== undefined) view.setUint8(3, Number(data.bRightTrigger));
  // 0x04: i16
  if (data?.sThumbLX !== undefined) view.setInt16(4, Number(data.sThumbLX), true);
  // 0x06: i16
  if (data?.sThumbLY !== undefined) view.setInt16(6, Number(data.sThumbLY), true);
  // 0x08: i16
  if (data?.sThumbRX !== undefined) view.setInt16(8, Number(data.sThumbRX), true);
  // 0x0a: i16
  if (data?.sThumbRY !== undefined) view.setInt16(10, Number(data.sThumbRY), true);
  // 0x0c: pad4
  return buf;
}

/**
 * Windows.Win32.UI.Input.XboxController.XINPUT_STATE (size: 16)
 */
export interface XINPUT_STATE {
  /** u32 */
  dwPacketNumber: number;
  /** Windows.Win32.UI.Input.XboxController.XINPUT_GAMEPAD */
  Gamepad: Uint8Array | Deno.PointerValue | null;
}

export const sizeofXINPUT_STATE = 16;

export function allocXINPUT_STATE(data?: Partial<XINPUT_STATE>): Uint8Array {
  const buf = new Uint8Array(sizeofXINPUT_STATE);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.dwPacketNumber !== undefined) view.setUint32(0, Number(data.dwPacketNumber), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.Gamepad !== undefined) view.setBigUint64(8, data.Gamepad === null ? 0n : BigInt(util.toPointer(data.Gamepad)), true);
  return buf;
}

/**
 * Windows.Win32.UI.Input.XboxController.XINPUT_VIBRATION (size: 8)
 */
export interface XINPUT_VIBRATION {
  /** u16 */
  wLeftMotorSpeed: number;
  /** u16 */
  wRightMotorSpeed: number;
}

export const sizeofXINPUT_VIBRATION = 8;

export function allocXINPUT_VIBRATION(data?: Partial<XINPUT_VIBRATION>): Uint8Array {
  const buf = new Uint8Array(sizeofXINPUT_VIBRATION);
  const view = new DataView(buf.buffer);
  // 0x00: u16
  if (data?.wLeftMotorSpeed !== undefined) view.setUint16(0, Number(data.wLeftMotorSpeed), true);
  // 0x02: u16
  if (data?.wRightMotorSpeed !== undefined) view.setUint16(2, Number(data.wRightMotorSpeed), true);
  // 0x04: pad4
  return buf;
}

/**
 * Windows.Win32.UI.Input.XboxController.XINPUT_CAPABILITIES (size: 32)
 */
export interface XINPUT_CAPABILITIES {
  /** Windows.Win32.UI.Input.XboxController.XINPUT_DEVTYPE */
  Type: XINPUT_DEVTYPE;
  /** Windows.Win32.UI.Input.XboxController.XINPUT_DEVSUBTYPE */
  SubType: XINPUT_DEVSUBTYPE;
  /** Windows.Win32.UI.Input.XboxController.XINPUT_CAPABILITIES_FLAGS */
  Flags: XINPUT_CAPABILITIES_FLAGS;
  /** Windows.Win32.UI.Input.XboxController.XINPUT_GAMEPAD */
  Gamepad: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.UI.Input.XboxController.XINPUT_VIBRATION */
  Vibration: Uint8Array | Deno.PointerValue | null;
}

export const sizeofXINPUT_CAPABILITIES = 32;

export function allocXINPUT_CAPABILITIES(data?: Partial<XINPUT_CAPABILITIES>): Uint8Array {
  const buf = new Uint8Array(sizeofXINPUT_CAPABILITIES);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.Type !== undefined) view.setUint32(0, Number(data.Type), true);
  // 0x04: u32
  if (data?.SubType !== undefined) view.setUint32(4, Number(data.SubType), true);
  // 0x08: u16
  if (data?.Flags !== undefined) view.setUint16(8, Number(data.Flags), true);
  // 0x0a: pad6
  // 0x10: pointer
  if (data?.Gamepad !== undefined) view.setBigUint64(16, data.Gamepad === null ? 0n : BigInt(util.toPointer(data.Gamepad)), true);
  // 0x18: pointer
  if (data?.Vibration !== undefined) view.setBigUint64(24, data.Vibration === null ? 0n : BigInt(util.toPointer(data.Vibration)), true);
  return buf;
}

/**
 * Windows.Win32.UI.Input.XboxController.XINPUT_BATTERY_INFORMATION (size: 8)
 */
export interface XINPUT_BATTERY_INFORMATION {
  /** Windows.Win32.UI.Input.XboxController.BATTERY_TYPE */
  BatteryType: BATTERY_TYPE;
  /** Windows.Win32.UI.Input.XboxController.BATTERY_LEVEL */
  BatteryLevel: BATTERY_LEVEL;
}

export const sizeofXINPUT_BATTERY_INFORMATION = 8;

export function allocXINPUT_BATTERY_INFORMATION(data?: Partial<XINPUT_BATTERY_INFORMATION>): Uint8Array {
  const buf = new Uint8Array(sizeofXINPUT_BATTERY_INFORMATION);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.BatteryType !== undefined) view.setUint32(0, Number(data.BatteryType), true);
  // 0x04: u32
  if (data?.BatteryLevel !== undefined) view.setUint32(4, Number(data.BatteryLevel), true);
  return buf;
}

/**
 * Windows.Win32.UI.Input.XboxController.XINPUT_KEYSTROKE (size: 24)
 */
export interface XINPUT_KEYSTROKE {
  /** Windows.Win32.UI.Input.XboxController.XINPUT_VIRTUAL_KEY */
  VirtualKey: XINPUT_VIRTUAL_KEY;
  /** char */
  Unicode: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.UI.Input.XboxController.XINPUT_KEYSTROKE_FLAGS */
  Flags: XINPUT_KEYSTROKE_FLAGS;
  /** u8 */
  UserIndex: number;
  /** u8 */
  HidCode: number;
}

export const sizeofXINPUT_KEYSTROKE = 24;

export function allocXINPUT_KEYSTROKE(data?: Partial<XINPUT_KEYSTROKE>): Uint8Array {
  const buf = new Uint8Array(sizeofXINPUT_KEYSTROKE);
  const view = new DataView(buf.buffer);
  // 0x00: u16
  if (data?.VirtualKey !== undefined) view.setUint16(0, Number(data.VirtualKey), true);
  // 0x02: pad6
  // 0x08: pointer
  if (data?.Unicode !== undefined) view.setBigUint64(8, data.Unicode === null ? 0n : BigInt(util.toPointer(data.Unicode)), true);
  // 0x10: u16
  if (data?.Flags !== undefined) view.setUint16(16, Number(data.Flags), true);
  // 0x12: u8
  if (data?.UserIndex !== undefined) view.setUint8(18, Number(data.UserIndex));
  // 0x13: u8
  if (data?.HidCode !== undefined) view.setUint8(19, Number(data.HidCode));
  // 0x14: pad4
  return buf;
}

export type BOOL = number;

export type PWSTR = Deno.PointerValue | Uint8Array | null;

// Native Libraries

try {
  var libxinput1_4_dll = Deno.dlopen("xinput1_4.dll", {
    XInputGetState: {
      parameters: ["u32", "pointer"],
      result: "u32",
    },
    XInputSetState: {
      parameters: ["u32", "pointer"],
      result: "u32",
    },
    XInputGetCapabilities: {
      parameters: ["u32", "u32", "pointer"],
      result: "u32",
    },
    XInputEnable: {
      parameters: ["i32"],
      result: "void",
    },
    XInputGetAudioDeviceIds: {
      parameters: ["u32", "buffer", "pointer", "buffer", "pointer"],
      result: "u32",
    },
    XInputGetBatteryInformation: {
      parameters: ["u32", "u32", "pointer"],
      result: "u32",
    },
    XInputGetKeystroke: {
      parameters: ["u32", "u32", "pointer"],
      result: "u32",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function XInputGetState(
  dwUserIndex: number /* u32 */,
  pState: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libxinput1_4_dll.XInputGetState(dwUserIndex, util.toPointer(pState));
}

export function XInputSetState(
  dwUserIndex: number /* u32 */,
  pVibration: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libxinput1_4_dll.XInputSetState(dwUserIndex, util.toPointer(pVibration));
}

export function XInputGetCapabilities(
  dwUserIndex: number /* u32 */,
  dwFlags: XINPUT_FLAG /* Windows.Win32.UI.Input.XboxController.XINPUT_FLAG */,
  pCapabilities: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libxinput1_4_dll.XInputGetCapabilities(dwUserIndex, dwFlags, util.toPointer(pCapabilities));
}

export function XInputEnable(
  enable: boolean /* Windows.Win32.Foundation.BOOL */,
): void /* void */ {
  return libxinput1_4_dll.XInputEnable(util.boolToFfi(enable));
}

export function XInputGetAudioDeviceIds(
  dwUserIndex: number /* u32 */,
  pRenderDeviceId: string | null /* Windows.Win32.Foundation.PWSTR */,
  pRenderCount: Deno.PointerValue | Uint8Array | null /* ptr */,
  pCaptureDeviceId: string | null /* Windows.Win32.Foundation.PWSTR */,
  pCaptureCount: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libxinput1_4_dll.XInputGetAudioDeviceIds(dwUserIndex, util.pwstrToFfi(pRenderDeviceId), util.toPointer(pRenderCount), util.pwstrToFfi(pCaptureDeviceId), util.toPointer(pCaptureCount));
}

export function XInputGetBatteryInformation(
  dwUserIndex: number /* u32 */,
  devType: BATTERY_DEVTYPE /* Windows.Win32.UI.Input.XboxController.BATTERY_DEVTYPE */,
  pBatteryInformation: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libxinput1_4_dll.XInputGetBatteryInformation(dwUserIndex, devType, util.toPointer(pBatteryInformation));
}

export function XInputGetKeystroke(
  dwUserIndex: number /* u32 */,
  dwReserved: number /* u32 */,
  pKeystroke: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libxinput1_4_dll.XInputGetKeystroke(dwUserIndex, dwReserved, util.toPointer(pKeystroke));
}

