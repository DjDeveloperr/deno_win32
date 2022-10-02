/// Auto-generated by Deno Win32: Windows.Win32.Devices.Pwm.Apis

import * as util from "../../util.ts";

// Enums
export type PWM_POLARITY = number;

// Constants
export const IOCTL_PWM_CONTROLLER_GET_INFO = 262144;
export const IOCTL_PWM_CONTROLLER_GET_ACTUAL_PERIOD = 262148;
export const IOCTL_PWM_CONTROLLER_SET_DESIRED_PERIOD = 294920;
export const IOCTL_PWM_PIN_GET_ACTIVE_DUTY_CYCLE_PERCENTAGE = 262544;
export const IOCTL_PWM_PIN_SET_ACTIVE_DUTY_CYCLE_PERCENTAGE = 295316;
export const IOCTL_PWM_PIN_GET_POLARITY = 262552;
export const IOCTL_PWM_PIN_SET_POLARITY = 295324;
export const IOCTL_PWM_PIN_START = 295331;
export const IOCTL_PWM_PIN_STOP = 295335;
export const IOCTL_PWM_PIN_IS_STARTED = 262568;
export const PWM_IOCTL_ID_CONTROLLER_GET_INFO = 0;
export const PWM_IOCTL_ID_CONTROLLER_GET_ACTUAL_PERIOD = 1;
export const PWM_IOCTL_ID_CONTROLLER_SET_DESIRED_PERIOD = 2;
export const PWM_IOCTL_ID_PIN_GET_ACTIVE_DUTY_CYCLE_PERCENTAGE = 100;
export const PWM_IOCTL_ID_PIN_SET_ACTIVE_DUTY_CYCLE_PERCENTAGE = 101;
export const PWM_IOCTL_ID_PIN_GET_POLARITY = 102;
export const PWM_IOCTL_ID_PIN_SET_POLARITY = 103;
export const PWM_IOCTL_ID_PIN_START = 104;
export const PWM_IOCTL_ID_PIN_STOP = 105;
export const PWM_IOCTL_ID_PIN_IS_STARTED = 106;
export const PWM_ACTIVE_HIGH = 0;
export const PWM_ACTIVE_LOW = 1;

// Structs

/**
 * Windows.Win32.Devices.Pwm.Apis (size: 8)
 */
export interface Apis {
  /** System.Guid */
  GUID_DEVINTERFACE_PWM_CONTROLLER: Uint8Array | Deno.PointerValue | null;
}

export const sizeofApis = 8;

export function allocApis(data?: Partial<Apis>): Uint8Array {
  const buf = new Uint8Array(sizeofApis);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.GUID_DEVINTERFACE_PWM_CONTROLLER !== undefined) view.setBigUint64(0, data.GUID_DEVINTERFACE_PWM_CONTROLLER === null ? 0n : BigInt(util.toPointer(data.GUID_DEVINTERFACE_PWM_CONTROLLER)), true);
  return buf;
}

/**
 * Windows.Win32.Devices.Pwm.PWM_CONTROLLER_INFO (size: 32)
 */
export interface PWM_CONTROLLER_INFO {
  /** usize */
  Size: Deno.PointerValue;
  /** u32 */
  PinCount: number;
  /** u64 */
  MinimumPeriod: Deno.PointerValue;
  /** u64 */
  MaximumPeriod: Deno.PointerValue;
}

export const sizeofPWM_CONTROLLER_INFO = 32;

export function allocPWM_CONTROLLER_INFO(data?: Partial<PWM_CONTROLLER_INFO>): Uint8Array {
  const buf = new Uint8Array(sizeofPWM_CONTROLLER_INFO);
  const view = new DataView(buf.buffer);
  // 0x00: usize
  if (data?.Size !== undefined) view.setBigUint64(0, BigInt(data.Size), true);
  // 0x08: u32
  if (data?.PinCount !== undefined) view.setUint32(8, Number(data.PinCount), true);
  // 0x0c: pad4
  // 0x10: u64
  if (data?.MinimumPeriod !== undefined) view.setBigUint64(16, BigInt(data.MinimumPeriod), true);
  // 0x18: u64
  if (data?.MaximumPeriod !== undefined) view.setBigUint64(24, BigInt(data.MaximumPeriod), true);
  return buf;
}

/**
 * Windows.Win32.Devices.Pwm.PWM_CONTROLLER_GET_ACTUAL_PERIOD_OUTPUT (size: 8)
 */
export interface PWM_CONTROLLER_GET_ACTUAL_PERIOD_OUTPUT {
  /** u64 */
  ActualPeriod: Deno.PointerValue;
}

export const sizeofPWM_CONTROLLER_GET_ACTUAL_PERIOD_OUTPUT = 8;

export function allocPWM_CONTROLLER_GET_ACTUAL_PERIOD_OUTPUT(data?: Partial<PWM_CONTROLLER_GET_ACTUAL_PERIOD_OUTPUT>): Uint8Array {
  const buf = new Uint8Array(sizeofPWM_CONTROLLER_GET_ACTUAL_PERIOD_OUTPUT);
  const view = new DataView(buf.buffer);
  // 0x00: u64
  if (data?.ActualPeriod !== undefined) view.setBigUint64(0, BigInt(data.ActualPeriod), true);
  return buf;
}

/**
 * Windows.Win32.Devices.Pwm.PWM_CONTROLLER_SET_DESIRED_PERIOD_INPUT (size: 8)
 */
export interface PWM_CONTROLLER_SET_DESIRED_PERIOD_INPUT {
  /** u64 */
  DesiredPeriod: Deno.PointerValue;
}

export const sizeofPWM_CONTROLLER_SET_DESIRED_PERIOD_INPUT = 8;

export function allocPWM_CONTROLLER_SET_DESIRED_PERIOD_INPUT(data?: Partial<PWM_CONTROLLER_SET_DESIRED_PERIOD_INPUT>): Uint8Array {
  const buf = new Uint8Array(sizeofPWM_CONTROLLER_SET_DESIRED_PERIOD_INPUT);
  const view = new DataView(buf.buffer);
  // 0x00: u64
  if (data?.DesiredPeriod !== undefined) view.setBigUint64(0, BigInt(data.DesiredPeriod), true);
  return buf;
}

/**
 * Windows.Win32.Devices.Pwm.PWM_CONTROLLER_SET_DESIRED_PERIOD_OUTPUT (size: 8)
 */
export interface PWM_CONTROLLER_SET_DESIRED_PERIOD_OUTPUT {
  /** u64 */
  ActualPeriod: Deno.PointerValue;
}

export const sizeofPWM_CONTROLLER_SET_DESIRED_PERIOD_OUTPUT = 8;

export function allocPWM_CONTROLLER_SET_DESIRED_PERIOD_OUTPUT(data?: Partial<PWM_CONTROLLER_SET_DESIRED_PERIOD_OUTPUT>): Uint8Array {
  const buf = new Uint8Array(sizeofPWM_CONTROLLER_SET_DESIRED_PERIOD_OUTPUT);
  const view = new DataView(buf.buffer);
  // 0x00: u64
  if (data?.ActualPeriod !== undefined) view.setBigUint64(0, BigInt(data.ActualPeriod), true);
  return buf;
}

/**
 * Windows.Win32.Devices.Pwm.PWM_PIN_GET_ACTIVE_DUTY_CYCLE_PERCENTAGE_OUTPUT (size: 8)
 */
export interface PWM_PIN_GET_ACTIVE_DUTY_CYCLE_PERCENTAGE_OUTPUT {
  /** u64 */
  Percentage: Deno.PointerValue;
}

export const sizeofPWM_PIN_GET_ACTIVE_DUTY_CYCLE_PERCENTAGE_OUTPUT = 8;

export function allocPWM_PIN_GET_ACTIVE_DUTY_CYCLE_PERCENTAGE_OUTPUT(data?: Partial<PWM_PIN_GET_ACTIVE_DUTY_CYCLE_PERCENTAGE_OUTPUT>): Uint8Array {
  const buf = new Uint8Array(sizeofPWM_PIN_GET_ACTIVE_DUTY_CYCLE_PERCENTAGE_OUTPUT);
  const view = new DataView(buf.buffer);
  // 0x00: u64
  if (data?.Percentage !== undefined) view.setBigUint64(0, BigInt(data.Percentage), true);
  return buf;
}

/**
 * Windows.Win32.Devices.Pwm.PWM_PIN_SET_ACTIVE_DUTY_CYCLE_PERCENTAGE_INPUT (size: 8)
 */
export interface PWM_PIN_SET_ACTIVE_DUTY_CYCLE_PERCENTAGE_INPUT {
  /** u64 */
  Percentage: Deno.PointerValue;
}

export const sizeofPWM_PIN_SET_ACTIVE_DUTY_CYCLE_PERCENTAGE_INPUT = 8;

export function allocPWM_PIN_SET_ACTIVE_DUTY_CYCLE_PERCENTAGE_INPUT(data?: Partial<PWM_PIN_SET_ACTIVE_DUTY_CYCLE_PERCENTAGE_INPUT>): Uint8Array {
  const buf = new Uint8Array(sizeofPWM_PIN_SET_ACTIVE_DUTY_CYCLE_PERCENTAGE_INPUT);
  const view = new DataView(buf.buffer);
  // 0x00: u64
  if (data?.Percentage !== undefined) view.setBigUint64(0, BigInt(data.Percentage), true);
  return buf;
}

/**
 * Windows.Win32.Devices.Pwm.PWM_PIN_GET_POLARITY_OUTPUT (size: 8)
 */
export interface PWM_PIN_GET_POLARITY_OUTPUT {
  /** Windows.Win32.Devices.Pwm.PWM_POLARITY */
  Polarity: PWM_POLARITY;
}

export const sizeofPWM_PIN_GET_POLARITY_OUTPUT = 8;

export function allocPWM_PIN_GET_POLARITY_OUTPUT(data?: Partial<PWM_PIN_GET_POLARITY_OUTPUT>): Uint8Array {
  const buf = new Uint8Array(sizeofPWM_PIN_GET_POLARITY_OUTPUT);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.Polarity !== undefined) view.setInt32(0, Number(data.Polarity), true);
  // 0x04: pad4
  return buf;
}

/**
 * Windows.Win32.Devices.Pwm.PWM_PIN_SET_POLARITY_INPUT (size: 8)
 */
export interface PWM_PIN_SET_POLARITY_INPUT {
  /** Windows.Win32.Devices.Pwm.PWM_POLARITY */
  Polarity: PWM_POLARITY;
}

export const sizeofPWM_PIN_SET_POLARITY_INPUT = 8;

export function allocPWM_PIN_SET_POLARITY_INPUT(data?: Partial<PWM_PIN_SET_POLARITY_INPUT>): Uint8Array {
  const buf = new Uint8Array(sizeofPWM_PIN_SET_POLARITY_INPUT);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.Polarity !== undefined) view.setInt32(0, Number(data.Polarity), true);
  // 0x04: pad4
  return buf;
}

export type BOOLEAN = number;

/**
 * Windows.Win32.Devices.Pwm.PWM_PIN_IS_STARTED_OUTPUT (size: 8)
 */
export interface PWM_PIN_IS_STARTED_OUTPUT {
  /** Windows.Win32.Foundation.BOOLEAN */
  IsStarted: Uint8Array | Deno.PointerValue | null;
}

export const sizeofPWM_PIN_IS_STARTED_OUTPUT = 8;

export function allocPWM_PIN_IS_STARTED_OUTPUT(data?: Partial<PWM_PIN_IS_STARTED_OUTPUT>): Uint8Array {
  const buf = new Uint8Array(sizeofPWM_PIN_IS_STARTED_OUTPUT);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.IsStarted !== undefined) view.setBigUint64(0, data.IsStarted === null ? 0n : BigInt(util.toPointer(data.IsStarted)), true);
  return buf;
}

// Native Libraries

// Symbols

