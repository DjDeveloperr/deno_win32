/// Auto-generated by Deno Win32: Windows.Win32.System.TaskScheduler.Apis

import * as util from "../../util.ts";

// Enums
export type TASK_TRIGGER_TYPE = number;
export type TASKPAGE = number;
export type TASK_RUN_FLAGS = number;
export type TASK_ENUM_FLAGS = number;
export type TASK_LOGON_TYPE = number;
export type TASK_RUNLEVEL_TYPE = number;
export type TASK_PROCESSTOKENSID_TYPE = number;
export type TASK_STATE = number;
export type TASK_CREATION = number;
export type TASK_TRIGGER_TYPE2 = number;
export type TASK_SESSION_STATE_CHANGE_TYPE = number;
export type TASK_ACTION_TYPE = number;
export type TASK_INSTANCES_POLICY = number;
export type TASK_COMPATIBILITY = number;

// Constants
export const TASK_SUNDAY = 1;
export const TASK_MONDAY = 2;
export const TASK_TUESDAY = 4;
export const TASK_WEDNESDAY = 8;
export const TASK_THURSDAY = 16;
export const TASK_FRIDAY = 32;
export const TASK_SATURDAY = 64;
export const TASK_FIRST_WEEK = 1;
export const TASK_SECOND_WEEK = 2;
export const TASK_THIRD_WEEK = 3;
export const TASK_FOURTH_WEEK = 4;
export const TASK_LAST_WEEK = 5;
export const TASK_JANUARY = 1;
export const TASK_FEBRUARY = 2;
export const TASK_MARCH = 4;
export const TASK_APRIL = 8;
export const TASK_MAY = 16;
export const TASK_JUNE = 32;
export const TASK_JULY = 64;
export const TASK_AUGUST = 128;
export const TASK_SEPTEMBER = 256;
export const TASK_OCTOBER = 512;
export const TASK_NOVEMBER = 1024;
export const TASK_DECEMBER = 2048;
export const TASK_FLAG_INTERACTIVE = 1;
export const TASK_FLAG_DELETE_WHEN_DONE = 2;
export const TASK_FLAG_DISABLED = 4;
export const TASK_FLAG_START_ONLY_IF_IDLE = 16;
export const TASK_FLAG_KILL_ON_IDLE_END = 32;
export const TASK_FLAG_DONT_START_IF_ON_BATTERIES = 64;
export const TASK_FLAG_KILL_IF_GOING_ON_BATTERIES = 128;
export const TASK_FLAG_RUN_ONLY_IF_DOCKED = 256;
export const TASK_FLAG_HIDDEN = 512;
export const TASK_FLAG_RUN_IF_CONNECTED_TO_INTERNET = 1024;
export const TASK_FLAG_RESTART_ON_IDLE_RESUME = 2048;
export const TASK_FLAG_SYSTEM_REQUIRED = 4096;
export const TASK_FLAG_RUN_ONLY_IF_LOGGED_ON = 8192;
export const TASK_TRIGGER_FLAG_HAS_END_DATE = 1;
export const TASK_TRIGGER_FLAG_KILL_AT_DURATION_END = 2;
export const TASK_TRIGGER_FLAG_DISABLED = 4;
export const TASK_MAX_RUN_TIMES = 1440;
export const TASK_TIME_TRIGGER_ONCE = 0;
export const TASK_TIME_TRIGGER_DAILY = 1;
export const TASK_TIME_TRIGGER_WEEKLY = 2;
export const TASK_TIME_TRIGGER_MONTHLYDATE = 3;
export const TASK_TIME_TRIGGER_MONTHLYDOW = 4;
export const TASK_EVENT_TRIGGER_ON_IDLE = 5;
export const TASK_EVENT_TRIGGER_AT_SYSTEMSTART = 6;
export const TASK_EVENT_TRIGGER_AT_LOGON = 7;
export const TASKPAGE_TASK = 0;
export const TASKPAGE_SCHEDULE = 1;
export const TASKPAGE_SETTINGS = 2;
export const TASK_RUN_NO_FLAGS = 0;
export const TASK_RUN_AS_SELF = 1;
export const TASK_RUN_IGNORE_CONSTRAINTS = 2;
export const TASK_RUN_USE_SESSION_ID = 4;
export const TASK_RUN_USER_SID = 8;
export const TASK_ENUM_HIDDEN = 1;
export const TASK_LOGON_NONE = 0;
export const TASK_LOGON_PASSWORD = 1;
export const TASK_LOGON_S4U = 2;
export const TASK_LOGON_INTERACTIVE_TOKEN = 3;
export const TASK_LOGON_GROUP = 4;
export const TASK_LOGON_SERVICE_ACCOUNT = 5;
export const TASK_LOGON_INTERACTIVE_TOKEN_OR_PASSWORD = 6;
export const TASK_RUNLEVEL_LUA = 0;
export const TASK_RUNLEVEL_HIGHEST = 1;
export const TASK_PROCESSTOKENSID_NONE = 0;
export const TASK_PROCESSTOKENSID_UNRESTRICTED = 1;
export const TASK_PROCESSTOKENSID_DEFAULT = 2;
export const TASK_STATE_UNKNOWN = 0;
export const TASK_STATE_DISABLED = 1;
export const TASK_STATE_QUEUED = 2;
export const TASK_STATE_READY = 3;
export const TASK_STATE_RUNNING = 4;
export const TASK_VALIDATE_ONLY = 1;
export const TASK_CREATE = 2;
export const TASK_UPDATE = 4;
export const TASK_CREATE_OR_UPDATE = 6;
export const TASK_DISABLE = 8;
export const TASK_DONT_ADD_PRINCIPAL_ACE = 16;
export const TASK_IGNORE_REGISTRATION_TRIGGERS = 32;
export const TASK_TRIGGER_EVENT = 0;
export const TASK_TRIGGER_TIME = 1;
export const TASK_TRIGGER_DAILY = 2;
export const TASK_TRIGGER_WEEKLY = 3;
export const TASK_TRIGGER_MONTHLY = 4;
export const TASK_TRIGGER_MONTHLYDOW = 5;
export const TASK_TRIGGER_IDLE = 6;
export const TASK_TRIGGER_REGISTRATION = 7;
export const TASK_TRIGGER_BOOT = 8;
export const TASK_TRIGGER_LOGON = 9;
export const TASK_TRIGGER_SESSION_STATE_CHANGE = 11;
export const TASK_TRIGGER_CUSTOM_TRIGGER_01 = 12;
export const TASK_CONSOLE_CONNECT = 1;
export const TASK_CONSOLE_DISCONNECT = 2;
export const TASK_REMOTE_CONNECT = 3;
export const TASK_REMOTE_DISCONNECT = 4;
export const TASK_SESSION_LOCK = 7;
export const TASK_SESSION_UNLOCK = 8;
export const TASK_ACTION_EXEC = 0;
export const TASK_ACTION_COM_HANDLER = 5;
export const TASK_ACTION_SEND_EMAIL = 6;
export const TASK_ACTION_SHOW_MESSAGE = 7;
export const TASK_INSTANCES_PARALLEL = 0;
export const TASK_INSTANCES_QUEUE = 1;
export const TASK_INSTANCES_IGNORE_NEW = 2;
export const TASK_INSTANCES_STOP_EXISTING = 3;
export const TASK_COMPATIBILITY_AT = 0;
export const TASK_COMPATIBILITY_V1 = 1;
export const TASK_COMPATIBILITY_V2 = 2;
export const TASK_COMPATIBILITY_V2_1 = 3;
export const TASK_COMPATIBILITY_V2_2 = 4;
export const TASK_COMPATIBILITY_V2_3 = 5;
export const TASK_COMPATIBILITY_V2_4 = 6;

// Structs

/**
 * Windows.Win32.System.TaskScheduler.DAILY (size: 8)
 */
export interface DAILY {
  /** u16 */
  DaysInterval: number;
}

export const sizeofDAILY = 8;

export function allocDAILY(data?: Partial<DAILY>): Uint8Array {
  const buf = new Uint8Array(sizeofDAILY);
  const view = new DataView(buf.buffer);
  // 0x00: u16
  if (data?.DaysInterval !== undefined) view.setUint16(0, Number(data.DaysInterval), true);
  // 0x02: pad6
  return buf;
}

export class DAILYView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u16
  get DaysInterval(): number {
    return this.view.getUint16(0, true);
  }

  // 0x02: pad6

  // 0x00: u16
  set DaysInterval(value: number) {
    this.view.setUint16(0, value, true);
  }

  // 0x02: pad6
}

/**
 * Windows.Win32.System.TaskScheduler.WEEKLY (size: 8)
 */
export interface WEEKLY {
  /** u16 */
  WeeksInterval: number;
  /** u16 */
  rgfDaysOfTheWeek: number;
}

export const sizeofWEEKLY = 8;

export function allocWEEKLY(data?: Partial<WEEKLY>): Uint8Array {
  const buf = new Uint8Array(sizeofWEEKLY);
  const view = new DataView(buf.buffer);
  // 0x00: u16
  if (data?.WeeksInterval !== undefined) view.setUint16(0, Number(data.WeeksInterval), true);
  // 0x02: u16
  if (data?.rgfDaysOfTheWeek !== undefined) view.setUint16(2, Number(data.rgfDaysOfTheWeek), true);
  // 0x04: pad4
  return buf;
}

export class WEEKLYView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u16
  get WeeksInterval(): number {
    return this.view.getUint16(0, true);
  }

  // 0x02: u16
  get rgfDaysOfTheWeek(): number {
    return this.view.getUint16(2, true);
  }

  // 0x04: pad4

  // 0x00: u16
  set WeeksInterval(value: number) {
    this.view.setUint16(0, value, true);
  }

  // 0x02: u16
  set rgfDaysOfTheWeek(value: number) {
    this.view.setUint16(2, value, true);
  }

  // 0x04: pad4
}

/**
 * Windows.Win32.System.TaskScheduler.MONTHLYDATE (size: 8)
 */
export interface MONTHLYDATE {
  /** u32 */
  rgfDays: number;
  /** u16 */
  rgfMonths: number;
}

export const sizeofMONTHLYDATE = 8;

export function allocMONTHLYDATE(data?: Partial<MONTHLYDATE>): Uint8Array {
  const buf = new Uint8Array(sizeofMONTHLYDATE);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.rgfDays !== undefined) view.setUint32(0, Number(data.rgfDays), true);
  // 0x04: u16
  if (data?.rgfMonths !== undefined) view.setUint16(4, Number(data.rgfMonths), true);
  // 0x06: pad2
  return buf;
}

export class MONTHLYDATEView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get rgfDays(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: u16
  get rgfMonths(): number {
    return this.view.getUint16(4, true);
  }

  // 0x06: pad2

  // 0x00: u32
  set rgfDays(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: u16
  set rgfMonths(value: number) {
    this.view.setUint16(4, value, true);
  }

  // 0x06: pad2
}

/**
 * Windows.Win32.System.TaskScheduler.MONTHLYDOW (size: 8)
 */
export interface MONTHLYDOW {
  /** u16 */
  wWhichWeek: number;
  /** u16 */
  rgfDaysOfTheWeek: number;
  /** u16 */
  rgfMonths: number;
}

export const sizeofMONTHLYDOW = 8;

export function allocMONTHLYDOW(data?: Partial<MONTHLYDOW>): Uint8Array {
  const buf = new Uint8Array(sizeofMONTHLYDOW);
  const view = new DataView(buf.buffer);
  // 0x00: u16
  if (data?.wWhichWeek !== undefined) view.setUint16(0, Number(data.wWhichWeek), true);
  // 0x02: u16
  if (data?.rgfDaysOfTheWeek !== undefined) view.setUint16(2, Number(data.rgfDaysOfTheWeek), true);
  // 0x04: u16
  if (data?.rgfMonths !== undefined) view.setUint16(4, Number(data.rgfMonths), true);
  // 0x06: pad2
  return buf;
}

export class MONTHLYDOWView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u16
  get wWhichWeek(): number {
    return this.view.getUint16(0, true);
  }

  // 0x02: u16
  get rgfDaysOfTheWeek(): number {
    return this.view.getUint16(2, true);
  }

  // 0x04: u16
  get rgfMonths(): number {
    return this.view.getUint16(4, true);
  }

  // 0x06: pad2

  // 0x00: u16
  set wWhichWeek(value: number) {
    this.view.setUint16(0, value, true);
  }

  // 0x02: u16
  set rgfDaysOfTheWeek(value: number) {
    this.view.setUint16(2, value, true);
  }

  // 0x04: u16
  set rgfMonths(value: number) {
    this.view.setUint16(4, value, true);
  }

  // 0x06: pad2
}

/**
 * Windows.Win32.System.TaskScheduler.TRIGGER_TYPE_UNION (size: 32)
 */
export interface TRIGGER_TYPE_UNION {
  /** Windows.Win32.System.TaskScheduler.DAILY */
  Daily: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.System.TaskScheduler.WEEKLY */
  Weekly: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.System.TaskScheduler.MONTHLYDATE */
  MonthlyDate: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.System.TaskScheduler.MONTHLYDOW */
  MonthlyDOW: Uint8Array | Deno.PointerValue | null;
}

export const sizeofTRIGGER_TYPE_UNION = 32;

export function allocTRIGGER_TYPE_UNION(data?: Partial<TRIGGER_TYPE_UNION>): Uint8Array {
  const buf = new Uint8Array(sizeofTRIGGER_TYPE_UNION);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.Daily !== undefined) view.setBigUint64(0, data.Daily === null ? 0n : util.toBigInt(util.toPointer(data.Daily)), true);
  // 0x08: pointer
  if (data?.Weekly !== undefined) view.setBigUint64(8, data.Weekly === null ? 0n : util.toBigInt(util.toPointer(data.Weekly)), true);
  // 0x10: pointer
  if (data?.MonthlyDate !== undefined) view.setBigUint64(16, data.MonthlyDate === null ? 0n : util.toBigInt(util.toPointer(data.MonthlyDate)), true);
  // 0x18: pointer
  if (data?.MonthlyDOW !== undefined) view.setBigUint64(24, data.MonthlyDOW === null ? 0n : util.toBigInt(util.toPointer(data.MonthlyDOW)), true);
  return buf;
}

export class TRIGGER_TYPE_UNIONView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get Daily(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x08: pointer
  get Weekly(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: pointer
  get MonthlyDate(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(16, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x18: pointer
  get MonthlyDOW(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(24, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: pointer
  set Daily(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(0, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x08: pointer
  set Weekly(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x10: pointer
  set MonthlyDate(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(16, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x18: pointer
  set MonthlyDOW(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(24, util.toBigInt(util.toPointer(value)), true);
  }
}

/**
 * Windows.Win32.System.TaskScheduler.TASK_TRIGGER (size: 56)
 */
export interface TASK_TRIGGER {
  /** u16 */
  cbTriggerSize: number;
  /** u16 */
  Reserved1: number;
  /** u16 */
  wBeginYear: number;
  /** u16 */
  wBeginMonth: number;
  /** u16 */
  wBeginDay: number;
  /** u16 */
  wEndYear: number;
  /** u16 */
  wEndMonth: number;
  /** u16 */
  wEndDay: number;
  /** u16 */
  wStartHour: number;
  /** u16 */
  wStartMinute: number;
  /** u32 */
  MinutesDuration: number;
  /** u32 */
  MinutesInterval: number;
  /** u32 */
  rgFlags: number;
  /** Windows.Win32.System.TaskScheduler.TASK_TRIGGER_TYPE */
  TriggerType: TASK_TRIGGER_TYPE;
  /** Windows.Win32.System.TaskScheduler.TRIGGER_TYPE_UNION */
  Type: Uint8Array | Deno.PointerValue | null;
  /** u16 */
  Reserved2: number;
  /** u16 */
  wRandomMinutesInterval: number;
}

export const sizeofTASK_TRIGGER = 56;

export function allocTASK_TRIGGER(data?: Partial<TASK_TRIGGER>): Uint8Array {
  const buf = new Uint8Array(sizeofTASK_TRIGGER);
  const view = new DataView(buf.buffer);
  // 0x00: u16
  if (data?.cbTriggerSize !== undefined) view.setUint16(0, Number(data.cbTriggerSize), true);
  // 0x02: u16
  if (data?.Reserved1 !== undefined) view.setUint16(2, Number(data.Reserved1), true);
  // 0x04: u16
  if (data?.wBeginYear !== undefined) view.setUint16(4, Number(data.wBeginYear), true);
  // 0x06: u16
  if (data?.wBeginMonth !== undefined) view.setUint16(6, Number(data.wBeginMonth), true);
  // 0x08: u16
  if (data?.wBeginDay !== undefined) view.setUint16(8, Number(data.wBeginDay), true);
  // 0x0a: u16
  if (data?.wEndYear !== undefined) view.setUint16(10, Number(data.wEndYear), true);
  // 0x0c: u16
  if (data?.wEndMonth !== undefined) view.setUint16(12, Number(data.wEndMonth), true);
  // 0x0e: u16
  if (data?.wEndDay !== undefined) view.setUint16(14, Number(data.wEndDay), true);
  // 0x10: u16
  if (data?.wStartHour !== undefined) view.setUint16(16, Number(data.wStartHour), true);
  // 0x12: u16
  if (data?.wStartMinute !== undefined) view.setUint16(18, Number(data.wStartMinute), true);
  // 0x14: u32
  if (data?.MinutesDuration !== undefined) view.setUint32(20, Number(data.MinutesDuration), true);
  // 0x18: u32
  if (data?.MinutesInterval !== undefined) view.setUint32(24, Number(data.MinutesInterval), true);
  // 0x1c: u32
  if (data?.rgFlags !== undefined) view.setUint32(28, Number(data.rgFlags), true);
  // 0x20: i32
  if (data?.TriggerType !== undefined) view.setInt32(32, Number(data.TriggerType), true);
  // 0x24: pad4
  // 0x28: pointer
  if (data?.Type !== undefined) view.setBigUint64(40, data.Type === null ? 0n : util.toBigInt(util.toPointer(data.Type)), true);
  // 0x30: u16
  if (data?.Reserved2 !== undefined) view.setUint16(48, Number(data.Reserved2), true);
  // 0x32: u16
  if (data?.wRandomMinutesInterval !== undefined) view.setUint16(50, Number(data.wRandomMinutesInterval), true);
  // 0x34: pad4
  return buf;
}

export class TASK_TRIGGERView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u16
  get cbTriggerSize(): number {
    return this.view.getUint16(0, true);
  }

  // 0x02: u16
  get Reserved1(): number {
    return this.view.getUint16(2, true);
  }

  // 0x04: u16
  get wBeginYear(): number {
    return this.view.getUint16(4, true);
  }

  // 0x06: u16
  get wBeginMonth(): number {
    return this.view.getUint16(6, true);
  }

  // 0x08: u16
  get wBeginDay(): number {
    return this.view.getUint16(8, true);
  }

  // 0x0a: u16
  get wEndYear(): number {
    return this.view.getUint16(10, true);
  }

  // 0x0c: u16
  get wEndMonth(): number {
    return this.view.getUint16(12, true);
  }

  // 0x0e: u16
  get wEndDay(): number {
    return this.view.getUint16(14, true);
  }

  // 0x10: u16
  get wStartHour(): number {
    return this.view.getUint16(16, true);
  }

  // 0x12: u16
  get wStartMinute(): number {
    return this.view.getUint16(18, true);
  }

  // 0x14: u32
  get MinutesDuration(): number {
    return this.view.getUint32(20, true);
  }

  // 0x18: u32
  get MinutesInterval(): number {
    return this.view.getUint32(24, true);
  }

  // 0x1c: u32
  get rgFlags(): number {
    return this.view.getUint32(28, true);
  }

  // 0x20: i32
  get TriggerType(): number {
    return this.view.getInt32(32, true);
  }

  // 0x24: pad4

  // 0x28: pointer
  get Type(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(40, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x30: u16
  get Reserved2(): number {
    return this.view.getUint16(48, true);
  }

  // 0x32: u16
  get wRandomMinutesInterval(): number {
    return this.view.getUint16(50, true);
  }

  // 0x34: pad4

  // 0x00: u16
  set cbTriggerSize(value: number) {
    this.view.setUint16(0, value, true);
  }

  // 0x02: u16
  set Reserved1(value: number) {
    this.view.setUint16(2, value, true);
  }

  // 0x04: u16
  set wBeginYear(value: number) {
    this.view.setUint16(4, value, true);
  }

  // 0x06: u16
  set wBeginMonth(value: number) {
    this.view.setUint16(6, value, true);
  }

  // 0x08: u16
  set wBeginDay(value: number) {
    this.view.setUint16(8, value, true);
  }

  // 0x0a: u16
  set wEndYear(value: number) {
    this.view.setUint16(10, value, true);
  }

  // 0x0c: u16
  set wEndMonth(value: number) {
    this.view.setUint16(12, value, true);
  }

  // 0x0e: u16
  set wEndDay(value: number) {
    this.view.setUint16(14, value, true);
  }

  // 0x10: u16
  set wStartHour(value: number) {
    this.view.setUint16(16, value, true);
  }

  // 0x12: u16
  set wStartMinute(value: number) {
    this.view.setUint16(18, value, true);
  }

  // 0x14: u32
  set MinutesDuration(value: number) {
    this.view.setUint32(20, value, true);
  }

  // 0x18: u32
  set MinutesInterval(value: number) {
    this.view.setUint32(24, value, true);
  }

  // 0x1c: u32
  set rgFlags(value: number) {
    this.view.setUint32(28, value, true);
  }

  // 0x20: i32
  set TriggerType(value: number) {
    this.view.setInt32(32, value, true);
  }

  // 0x24: pad4

  // 0x28: pointer
  set Type(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(40, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x30: u16
  set Reserved2(value: number) {
    this.view.setUint16(48, value, true);
  }

  // 0x32: u16
  set wRandomMinutesInterval(value: number) {
    this.view.setUint16(50, value, true);
  }

  // 0x34: pad4
}

// Native Libraries

// Symbols

