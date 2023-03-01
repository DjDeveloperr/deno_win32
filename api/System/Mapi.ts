/// Auto-generated by Deno Win32: Windows.Win32.System.Mapi.Apis

import * as util from "../../util.ts";

// Constants
export const MAPI_OLE = 1;
export const MAPI_OLE_STATIC = 2;
export const MAPI_ORIG = 0;
export const MAPI_TO = 1;
export const MAPI_CC = 2;
export const MAPI_BCC = 3;
export const MAPI_UNREAD = 1;
export const MAPI_RECEIPT_REQUESTED = 2;
export const MAPI_SENT = 4;
export const MAPI_LOGON_UI = 1;
export const MAPI_PASSWORD_UI = 131072;
export const MAPI_NEW_SESSION = 2;
export const MAPI_FORCE_DOWNLOAD = 4096;
export const MAPI_EXTENDED = 32;
export const MAPI_DIALOG = 8;
export const MAPI_FORCE_UNICODE = 262144;
export const MAPI_UNREAD_ONLY = 32;
export const MAPI_GUARANTEE_FIFO = 256;
export const MAPI_LONG_MSGID = 16384;
export const MAPI_PEEK = 128;
export const MAPI_SUPPRESS_ATTACH = 2048;
export const MAPI_ENVELOPE_ONLY = 64;
export const MAPI_BODY_AS_FILE = 512;
export const MAPI_AB_NOMODIFY = 1024;
export const SUCCESS_SUCCESS = 0;
export const MAPI_USER_ABORT = 1;
export const MAPI_E_USER_ABORT = 1;
export const MAPI_E_FAILURE = 2;
export const MAPI_E_LOGON_FAILURE = 3;
export const MAPI_E_LOGIN_FAILURE = 3;
export const MAPI_E_DISK_FULL = 4;
export const MAPI_E_INSUFFICIENT_MEMORY = 5;
export const MAPI_E_ACCESS_DENIED = 6;
export const MAPI_E_TOO_MANY_SESSIONS = 8;
export const MAPI_E_TOO_MANY_FILES = 9;
export const MAPI_E_TOO_MANY_RECIPIENTS = 10;
export const MAPI_E_ATTACHMENT_NOT_FOUND = 11;
export const MAPI_E_ATTACHMENT_OPEN_FAILURE = 12;
export const MAPI_E_ATTACHMENT_WRITE_FAILURE = 13;
export const MAPI_E_UNKNOWN_RECIPIENT = 14;
export const MAPI_E_BAD_RECIPTYPE = 15;
export const MAPI_E_NO_MESSAGES = 16;
export const MAPI_E_INVALID_MESSAGE = 17;
export const MAPI_E_TEXT_TOO_LARGE = 18;
export const MAPI_E_INVALID_SESSION = 19;
export const MAPI_E_TYPE_NOT_SUPPORTED = 20;
export const MAPI_E_AMBIGUOUS_RECIPIENT = 21;
export const MAPI_E_AMBIG_RECIP = 21;
export const MAPI_E_MESSAGE_IN_USE = 22;
export const MAPI_E_NETWORK_FAILURE = 23;
export const MAPI_E_INVALID_EDITFIELDS = 24;
export const MAPI_E_INVALID_RECIPS = 25;
export const MAPI_E_NOT_SUPPORTED = 26;
export const MAPI_E_UNICODE_NOT_SUPPORTED = 27;
export const MAPI_E_ATTACHMENT_TOO_LARGE = 28;

// Structs

export type PSTR = Deno.PointerValue | Uint8Array | null;

/**
 * Windows.Win32.System.Mapi.MapiFileDesc (size: 40)
 */
export interface MapiFileDesc {
  /** u32 */
  ulReserved: number;
  /** u32 */
  flFlags: number;
  /** u32 */
  nPosition: number;
  /** Windows.Win32.Foundation.PSTR */
  lpszPathName: string | null | Uint8Array;
  /** Windows.Win32.Foundation.PSTR */
  lpszFileName: string | null | Uint8Array;
  /** ptr */
  lpFileType: Deno.PointerValue | Uint8Array | null;
}

export const sizeofMapiFileDesc = 40;

export function allocMapiFileDesc(data?: Partial<MapiFileDesc>): Uint8Array {
  const buf = new Uint8Array(sizeofMapiFileDesc);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.ulReserved !== undefined) view.setUint32(0, Number(data.ulReserved), true);
  // 0x04: u32
  if (data?.flFlags !== undefined) view.setUint32(4, Number(data.flFlags), true);
  // 0x08: u32
  if (data?.nPosition !== undefined) view.setUint32(8, Number(data.nPosition), true);
  // 0x0c: pad4
  // 0x10: buffer
  if (data?.lpszPathName !== undefined) {
    (buf as any)._f16 = util.pstrToFfi(data.lpszPathName);
    view.setBigUint64(16, (buf as any)._f16 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f16)), true);
  }
  // 0x18: buffer
  if (data?.lpszFileName !== undefined) {
    (buf as any)._f24 = util.pstrToFfi(data.lpszFileName);
    view.setBigUint64(24, (buf as any)._f24 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f24)), true);
  }
  // 0x20: pointer
  if (data?.lpFileType !== undefined) view.setBigUint64(32, data.lpFileType === null ? 0n : util.toBigInt(util.toPointer(data.lpFileType)), true);
  return buf;
}

export class MapiFileDescView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get ulReserved(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: u32
  get flFlags(): number {
    return this.view.getUint32(4, true);
  }

  // 0x08: u32
  get nPosition(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: pad4

  // 0x10: buffer
  get lpszPathName(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(16, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x18: buffer
  get lpszFileName(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(24, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x20: pointer
  get lpFileType(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(32, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: u32
  set ulReserved(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: u32
  set flFlags(value: number) {
    this.view.setUint32(4, value, true);
  }

  // 0x08: u32
  set nPosition(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: pad4

  // 0x10: buffer
  set lpszPathName(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f16 = value;
    this.view.setBigUint64(16, util.toBigInt(util.toPointer((this.buf as any)._f16)), true);
  }

  // 0x18: buffer
  set lpszFileName(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f24 = value;
    this.view.setBigUint64(24, util.toBigInt(util.toPointer((this.buf as any)._f24)), true);
  }

  // 0x20: pointer
  set lpFileType(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(32, util.toBigInt(util.toPointer(value)), true);
  }
}

export type PWSTR = Deno.PointerValue | Uint8Array | null;

/**
 * Windows.Win32.System.Mapi.MapiFileDescW (size: 40)
 */
export interface MapiFileDescW {
  /** u32 */
  ulReserved: number;
  /** u32 */
  flFlags: number;
  /** u32 */
  nPosition: number;
  /** Windows.Win32.Foundation.PWSTR */
  lpszPathName: string | null | Uint8Array | Uint16Array;
  /** Windows.Win32.Foundation.PWSTR */
  lpszFileName: string | null | Uint8Array | Uint16Array;
  /** ptr */
  lpFileType: Deno.PointerValue | Uint8Array | null;
}

export const sizeofMapiFileDescW = 40;

export function allocMapiFileDescW(data?: Partial<MapiFileDescW>): Uint8Array {
  const buf = new Uint8Array(sizeofMapiFileDescW);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.ulReserved !== undefined) view.setUint32(0, Number(data.ulReserved), true);
  // 0x04: u32
  if (data?.flFlags !== undefined) view.setUint32(4, Number(data.flFlags), true);
  // 0x08: u32
  if (data?.nPosition !== undefined) view.setUint32(8, Number(data.nPosition), true);
  // 0x0c: pad4
  // 0x10: buffer
  if (data?.lpszPathName !== undefined) {
    (buf as any)._f16 = util.pwstrToFfi(data.lpszPathName);
    view.setBigUint64(16, (buf as any)._f16 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f16)), true);
  }
  // 0x18: buffer
  if (data?.lpszFileName !== undefined) {
    (buf as any)._f24 = util.pwstrToFfi(data.lpszFileName);
    view.setBigUint64(24, (buf as any)._f24 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f24)), true);
  }
  // 0x20: pointer
  if (data?.lpFileType !== undefined) view.setBigUint64(32, data.lpFileType === null ? 0n : util.toBigInt(util.toPointer(data.lpFileType)), true);
  return buf;
}

export class MapiFileDescWView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get ulReserved(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: u32
  get flFlags(): number {
    return this.view.getUint32(4, true);
  }

  // 0x08: u32
  get nPosition(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: pad4

  // 0x10: buffer
  get lpszPathName(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(16, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x18: buffer
  get lpszFileName(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(24, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x20: pointer
  get lpFileType(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(32, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: u32
  set ulReserved(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: u32
  set flFlags(value: number) {
    this.view.setUint32(4, value, true);
  }

  // 0x08: u32
  set nPosition(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: pad4

  // 0x10: buffer
  set lpszPathName(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f16 = value;
    this.view.setBigUint64(16, util.toBigInt(util.toPointer((this.buf as any)._f16)), true);
  }

  // 0x18: buffer
  set lpszFileName(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f24 = value;
    this.view.setBigUint64(24, util.toBigInt(util.toPointer((this.buf as any)._f24)), true);
  }

  // 0x20: pointer
  set lpFileType(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(32, util.toBigInt(util.toPointer(value)), true);
  }
}

/**
 * Windows.Win32.System.Mapi.MapiFileTagExt (size: 32)
 */
export interface MapiFileTagExt {
  /** u32 */
  ulReserved: number;
  /** u32 */
  cbTag: number;
  /** ptr */
  lpTag: Deno.PointerValue | Uint8Array | null;
  /** u32 */
  cbEncoding: number;
  /** ptr */
  lpEncoding: Deno.PointerValue | Uint8Array | null;
}

export const sizeofMapiFileTagExt = 32;

export function allocMapiFileTagExt(data?: Partial<MapiFileTagExt>): Uint8Array {
  const buf = new Uint8Array(sizeofMapiFileTagExt);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.ulReserved !== undefined) view.setUint32(0, Number(data.ulReserved), true);
  // 0x04: u32
  if (data?.cbTag !== undefined) view.setUint32(4, Number(data.cbTag), true);
  // 0x08: pointer
  if (data?.lpTag !== undefined) view.setBigUint64(8, data.lpTag === null ? 0n : util.toBigInt(util.toPointer(data.lpTag)), true);
  // 0x10: u32
  if (data?.cbEncoding !== undefined) view.setUint32(16, Number(data.cbEncoding), true);
  // 0x14: pad4
  // 0x18: pointer
  if (data?.lpEncoding !== undefined) view.setBigUint64(24, data.lpEncoding === null ? 0n : util.toBigInt(util.toPointer(data.lpEncoding)), true);
  return buf;
}

export class MapiFileTagExtView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get ulReserved(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: u32
  get cbTag(): number {
    return this.view.getUint32(4, true);
  }

  // 0x08: pointer
  get lpTag(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: u32
  get cbEncoding(): number {
    return this.view.getUint32(16, true);
  }

  // 0x14: pad4

  // 0x18: pointer
  get lpEncoding(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(24, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: u32
  set ulReserved(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: u32
  set cbTag(value: number) {
    this.view.setUint32(4, value, true);
  }

  // 0x08: pointer
  set lpTag(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x10: u32
  set cbEncoding(value: number) {
    this.view.setUint32(16, value, true);
  }

  // 0x14: pad4

  // 0x18: pointer
  set lpEncoding(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(24, util.toBigInt(util.toPointer(value)), true);
  }
}

/**
 * Windows.Win32.System.Mapi.MapiRecipDesc (size: 40)
 */
export interface MapiRecipDesc {
  /** u32 */
  ulReserved: number;
  /** u32 */
  ulRecipClass: number;
  /** Windows.Win32.Foundation.PSTR */
  lpszName: string | null | Uint8Array;
  /** Windows.Win32.Foundation.PSTR */
  lpszAddress: string | null | Uint8Array;
  /** u32 */
  ulEIDSize: number;
  /** ptr */
  lpEntryID: Deno.PointerValue | Uint8Array | null;
}

export const sizeofMapiRecipDesc = 40;

export function allocMapiRecipDesc(data?: Partial<MapiRecipDesc>): Uint8Array {
  const buf = new Uint8Array(sizeofMapiRecipDesc);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.ulReserved !== undefined) view.setUint32(0, Number(data.ulReserved), true);
  // 0x04: u32
  if (data?.ulRecipClass !== undefined) view.setUint32(4, Number(data.ulRecipClass), true);
  // 0x08: buffer
  if (data?.lpszName !== undefined) {
    (buf as any)._f8 = util.pstrToFfi(data.lpszName);
    view.setBigUint64(8, (buf as any)._f8 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f8)), true);
  }
  // 0x10: buffer
  if (data?.lpszAddress !== undefined) {
    (buf as any)._f16 = util.pstrToFfi(data.lpszAddress);
    view.setBigUint64(16, (buf as any)._f16 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f16)), true);
  }
  // 0x18: u32
  if (data?.ulEIDSize !== undefined) view.setUint32(24, Number(data.ulEIDSize), true);
  // 0x1c: pad4
  // 0x20: pointer
  if (data?.lpEntryID !== undefined) view.setBigUint64(32, data.lpEntryID === null ? 0n : util.toBigInt(util.toPointer(data.lpEntryID)), true);
  return buf;
}

export class MapiRecipDescView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get ulReserved(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: u32
  get ulRecipClass(): number {
    return this.view.getUint32(4, true);
  }

  // 0x08: buffer
  get lpszName(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: buffer
  get lpszAddress(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(16, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x18: u32
  get ulEIDSize(): number {
    return this.view.getUint32(24, true);
  }

  // 0x1c: pad4

  // 0x20: pointer
  get lpEntryID(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(32, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: u32
  set ulReserved(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: u32
  set ulRecipClass(value: number) {
    this.view.setUint32(4, value, true);
  }

  // 0x08: buffer
  set lpszName(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f8 = value;
    this.view.setBigUint64(8, util.toBigInt(util.toPointer((this.buf as any)._f8)), true);
  }

  // 0x10: buffer
  set lpszAddress(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f16 = value;
    this.view.setBigUint64(16, util.toBigInt(util.toPointer((this.buf as any)._f16)), true);
  }

  // 0x18: u32
  set ulEIDSize(value: number) {
    this.view.setUint32(24, value, true);
  }

  // 0x1c: pad4

  // 0x20: pointer
  set lpEntryID(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(32, util.toBigInt(util.toPointer(value)), true);
  }
}

/**
 * Windows.Win32.System.Mapi.MapiRecipDescW (size: 40)
 */
export interface MapiRecipDescW {
  /** u32 */
  ulReserved: number;
  /** u32 */
  ulRecipClass: number;
  /** Windows.Win32.Foundation.PWSTR */
  lpszName: string | null | Uint8Array | Uint16Array;
  /** Windows.Win32.Foundation.PWSTR */
  lpszAddress: string | null | Uint8Array | Uint16Array;
  /** u32 */
  ulEIDSize: number;
  /** ptr */
  lpEntryID: Deno.PointerValue | Uint8Array | null;
}

export const sizeofMapiRecipDescW = 40;

export function allocMapiRecipDescW(data?: Partial<MapiRecipDescW>): Uint8Array {
  const buf = new Uint8Array(sizeofMapiRecipDescW);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.ulReserved !== undefined) view.setUint32(0, Number(data.ulReserved), true);
  // 0x04: u32
  if (data?.ulRecipClass !== undefined) view.setUint32(4, Number(data.ulRecipClass), true);
  // 0x08: buffer
  if (data?.lpszName !== undefined) {
    (buf as any)._f8 = util.pwstrToFfi(data.lpszName);
    view.setBigUint64(8, (buf as any)._f8 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f8)), true);
  }
  // 0x10: buffer
  if (data?.lpszAddress !== undefined) {
    (buf as any)._f16 = util.pwstrToFfi(data.lpszAddress);
    view.setBigUint64(16, (buf as any)._f16 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f16)), true);
  }
  // 0x18: u32
  if (data?.ulEIDSize !== undefined) view.setUint32(24, Number(data.ulEIDSize), true);
  // 0x1c: pad4
  // 0x20: pointer
  if (data?.lpEntryID !== undefined) view.setBigUint64(32, data.lpEntryID === null ? 0n : util.toBigInt(util.toPointer(data.lpEntryID)), true);
  return buf;
}

export class MapiRecipDescWView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get ulReserved(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: u32
  get ulRecipClass(): number {
    return this.view.getUint32(4, true);
  }

  // 0x08: buffer
  get lpszName(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: buffer
  get lpszAddress(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(16, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x18: u32
  get ulEIDSize(): number {
    return this.view.getUint32(24, true);
  }

  // 0x1c: pad4

  // 0x20: pointer
  get lpEntryID(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(32, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: u32
  set ulReserved(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: u32
  set ulRecipClass(value: number) {
    this.view.setUint32(4, value, true);
  }

  // 0x08: buffer
  set lpszName(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f8 = value;
    this.view.setBigUint64(8, util.toBigInt(util.toPointer((this.buf as any)._f8)), true);
  }

  // 0x10: buffer
  set lpszAddress(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f16 = value;
    this.view.setBigUint64(16, util.toBigInt(util.toPointer((this.buf as any)._f16)), true);
  }

  // 0x18: u32
  set ulEIDSize(value: number) {
    this.view.setUint32(24, value, true);
  }

  // 0x1c: pad4

  // 0x20: pointer
  set lpEntryID(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(32, util.toBigInt(util.toPointer(value)), true);
  }
}

/**
 * Windows.Win32.System.Mapi.MapiMessage (size: 96)
 */
export interface MapiMessage {
  /** u32 */
  ulReserved: number;
  /** Windows.Win32.Foundation.PSTR */
  lpszSubject: string | null | Uint8Array;
  /** Windows.Win32.Foundation.PSTR */
  lpszNoteText: string | null | Uint8Array;
  /** Windows.Win32.Foundation.PSTR */
  lpszMessageType: string | null | Uint8Array;
  /** Windows.Win32.Foundation.PSTR */
  lpszDateReceived: string | null | Uint8Array;
  /** Windows.Win32.Foundation.PSTR */
  lpszConversationID: string | null | Uint8Array;
  /** u32 */
  flFlags: number;
  /** ptr */
  lpOriginator: Deno.PointerValue | Uint8Array | null;
  /** u32 */
  nRecipCount: number;
  /** ptr */
  lpRecips: Deno.PointerValue | Uint8Array | null;
  /** u32 */
  nFileCount: number;
  /** ptr */
  lpFiles: Deno.PointerValue | Uint8Array | null;
}

export const sizeofMapiMessage = 96;

export function allocMapiMessage(data?: Partial<MapiMessage>): Uint8Array {
  const buf = new Uint8Array(sizeofMapiMessage);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.ulReserved !== undefined) view.setUint32(0, Number(data.ulReserved), true);
  // 0x04: pad4
  // 0x08: buffer
  if (data?.lpszSubject !== undefined) {
    (buf as any)._f8 = util.pstrToFfi(data.lpszSubject);
    view.setBigUint64(8, (buf as any)._f8 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f8)), true);
  }
  // 0x10: buffer
  if (data?.lpszNoteText !== undefined) {
    (buf as any)._f16 = util.pstrToFfi(data.lpszNoteText);
    view.setBigUint64(16, (buf as any)._f16 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f16)), true);
  }
  // 0x18: buffer
  if (data?.lpszMessageType !== undefined) {
    (buf as any)._f24 = util.pstrToFfi(data.lpszMessageType);
    view.setBigUint64(24, (buf as any)._f24 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f24)), true);
  }
  // 0x20: buffer
  if (data?.lpszDateReceived !== undefined) {
    (buf as any)._f32 = util.pstrToFfi(data.lpszDateReceived);
    view.setBigUint64(32, (buf as any)._f32 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f32)), true);
  }
  // 0x28: buffer
  if (data?.lpszConversationID !== undefined) {
    (buf as any)._f40 = util.pstrToFfi(data.lpszConversationID);
    view.setBigUint64(40, (buf as any)._f40 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f40)), true);
  }
  // 0x30: u32
  if (data?.flFlags !== undefined) view.setUint32(48, Number(data.flFlags), true);
  // 0x34: pad4
  // 0x38: pointer
  if (data?.lpOriginator !== undefined) view.setBigUint64(56, data.lpOriginator === null ? 0n : util.toBigInt(util.toPointer(data.lpOriginator)), true);
  // 0x40: u32
  if (data?.nRecipCount !== undefined) view.setUint32(64, Number(data.nRecipCount), true);
  // 0x44: pad4
  // 0x48: pointer
  if (data?.lpRecips !== undefined) view.setBigUint64(72, data.lpRecips === null ? 0n : util.toBigInt(util.toPointer(data.lpRecips)), true);
  // 0x50: u32
  if (data?.nFileCount !== undefined) view.setUint32(80, Number(data.nFileCount), true);
  // 0x54: pad4
  // 0x58: pointer
  if (data?.lpFiles !== undefined) view.setBigUint64(88, data.lpFiles === null ? 0n : util.toBigInt(util.toPointer(data.lpFiles)), true);
  return buf;
}

export class MapiMessageView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get ulReserved(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: pad4

  // 0x08: buffer
  get lpszSubject(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: buffer
  get lpszNoteText(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(16, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x18: buffer
  get lpszMessageType(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(24, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x20: buffer
  get lpszDateReceived(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(32, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x28: buffer
  get lpszConversationID(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(40, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x30: u32
  get flFlags(): number {
    return this.view.getUint32(48, true);
  }

  // 0x34: pad4

  // 0x38: pointer
  get lpOriginator(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(56, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x40: u32
  get nRecipCount(): number {
    return this.view.getUint32(64, true);
  }

  // 0x44: pad4

  // 0x48: pointer
  get lpRecips(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(72, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x50: u32
  get nFileCount(): number {
    return this.view.getUint32(80, true);
  }

  // 0x54: pad4

  // 0x58: pointer
  get lpFiles(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(88, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: u32
  set ulReserved(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: pad4

  // 0x08: buffer
  set lpszSubject(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f8 = value;
    this.view.setBigUint64(8, util.toBigInt(util.toPointer((this.buf as any)._f8)), true);
  }

  // 0x10: buffer
  set lpszNoteText(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f16 = value;
    this.view.setBigUint64(16, util.toBigInt(util.toPointer((this.buf as any)._f16)), true);
  }

  // 0x18: buffer
  set lpszMessageType(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f24 = value;
    this.view.setBigUint64(24, util.toBigInt(util.toPointer((this.buf as any)._f24)), true);
  }

  // 0x20: buffer
  set lpszDateReceived(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f32 = value;
    this.view.setBigUint64(32, util.toBigInt(util.toPointer((this.buf as any)._f32)), true);
  }

  // 0x28: buffer
  set lpszConversationID(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f40 = value;
    this.view.setBigUint64(40, util.toBigInt(util.toPointer((this.buf as any)._f40)), true);
  }

  // 0x30: u32
  set flFlags(value: number) {
    this.view.setUint32(48, value, true);
  }

  // 0x34: pad4

  // 0x38: pointer
  set lpOriginator(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(56, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x40: u32
  set nRecipCount(value: number) {
    this.view.setUint32(64, value, true);
  }

  // 0x44: pad4

  // 0x48: pointer
  set lpRecips(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(72, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x50: u32
  set nFileCount(value: number) {
    this.view.setUint32(80, value, true);
  }

  // 0x54: pad4

  // 0x58: pointer
  set lpFiles(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(88, util.toBigInt(util.toPointer(value)), true);
  }
}

/**
 * Windows.Win32.System.Mapi.MapiMessageW (size: 96)
 */
export interface MapiMessageW {
  /** u32 */
  ulReserved: number;
  /** Windows.Win32.Foundation.PWSTR */
  lpszSubject: string | null | Uint8Array | Uint16Array;
  /** Windows.Win32.Foundation.PWSTR */
  lpszNoteText: string | null | Uint8Array | Uint16Array;
  /** Windows.Win32.Foundation.PWSTR */
  lpszMessageType: string | null | Uint8Array | Uint16Array;
  /** Windows.Win32.Foundation.PWSTR */
  lpszDateReceived: string | null | Uint8Array | Uint16Array;
  /** Windows.Win32.Foundation.PWSTR */
  lpszConversationID: string | null | Uint8Array | Uint16Array;
  /** u32 */
  flFlags: number;
  /** ptr */
  lpOriginator: Deno.PointerValue | Uint8Array | null;
  /** u32 */
  nRecipCount: number;
  /** ptr */
  lpRecips: Deno.PointerValue | Uint8Array | null;
  /** u32 */
  nFileCount: number;
  /** ptr */
  lpFiles: Deno.PointerValue | Uint8Array | null;
}

export const sizeofMapiMessageW = 96;

export function allocMapiMessageW(data?: Partial<MapiMessageW>): Uint8Array {
  const buf = new Uint8Array(sizeofMapiMessageW);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.ulReserved !== undefined) view.setUint32(0, Number(data.ulReserved), true);
  // 0x04: pad4
  // 0x08: buffer
  if (data?.lpszSubject !== undefined) {
    (buf as any)._f8 = util.pwstrToFfi(data.lpszSubject);
    view.setBigUint64(8, (buf as any)._f8 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f8)), true);
  }
  // 0x10: buffer
  if (data?.lpszNoteText !== undefined) {
    (buf as any)._f16 = util.pwstrToFfi(data.lpszNoteText);
    view.setBigUint64(16, (buf as any)._f16 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f16)), true);
  }
  // 0x18: buffer
  if (data?.lpszMessageType !== undefined) {
    (buf as any)._f24 = util.pwstrToFfi(data.lpszMessageType);
    view.setBigUint64(24, (buf as any)._f24 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f24)), true);
  }
  // 0x20: buffer
  if (data?.lpszDateReceived !== undefined) {
    (buf as any)._f32 = util.pwstrToFfi(data.lpszDateReceived);
    view.setBigUint64(32, (buf as any)._f32 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f32)), true);
  }
  // 0x28: buffer
  if (data?.lpszConversationID !== undefined) {
    (buf as any)._f40 = util.pwstrToFfi(data.lpszConversationID);
    view.setBigUint64(40, (buf as any)._f40 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f40)), true);
  }
  // 0x30: u32
  if (data?.flFlags !== undefined) view.setUint32(48, Number(data.flFlags), true);
  // 0x34: pad4
  // 0x38: pointer
  if (data?.lpOriginator !== undefined) view.setBigUint64(56, data.lpOriginator === null ? 0n : util.toBigInt(util.toPointer(data.lpOriginator)), true);
  // 0x40: u32
  if (data?.nRecipCount !== undefined) view.setUint32(64, Number(data.nRecipCount), true);
  // 0x44: pad4
  // 0x48: pointer
  if (data?.lpRecips !== undefined) view.setBigUint64(72, data.lpRecips === null ? 0n : util.toBigInt(util.toPointer(data.lpRecips)), true);
  // 0x50: u32
  if (data?.nFileCount !== undefined) view.setUint32(80, Number(data.nFileCount), true);
  // 0x54: pad4
  // 0x58: pointer
  if (data?.lpFiles !== undefined) view.setBigUint64(88, data.lpFiles === null ? 0n : util.toBigInt(util.toPointer(data.lpFiles)), true);
  return buf;
}

export class MapiMessageWView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get ulReserved(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: pad4

  // 0x08: buffer
  get lpszSubject(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: buffer
  get lpszNoteText(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(16, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x18: buffer
  get lpszMessageType(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(24, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x20: buffer
  get lpszDateReceived(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(32, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x28: buffer
  get lpszConversationID(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(40, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x30: u32
  get flFlags(): number {
    return this.view.getUint32(48, true);
  }

  // 0x34: pad4

  // 0x38: pointer
  get lpOriginator(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(56, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x40: u32
  get nRecipCount(): number {
    return this.view.getUint32(64, true);
  }

  // 0x44: pad4

  // 0x48: pointer
  get lpRecips(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(72, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x50: u32
  get nFileCount(): number {
    return this.view.getUint32(80, true);
  }

  // 0x54: pad4

  // 0x58: pointer
  get lpFiles(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(88, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: u32
  set ulReserved(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: pad4

  // 0x08: buffer
  set lpszSubject(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f8 = value;
    this.view.setBigUint64(8, util.toBigInt(util.toPointer((this.buf as any)._f8)), true);
  }

  // 0x10: buffer
  set lpszNoteText(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f16 = value;
    this.view.setBigUint64(16, util.toBigInt(util.toPointer((this.buf as any)._f16)), true);
  }

  // 0x18: buffer
  set lpszMessageType(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f24 = value;
    this.view.setBigUint64(24, util.toBigInt(util.toPointer((this.buf as any)._f24)), true);
  }

  // 0x20: buffer
  set lpszDateReceived(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f32 = value;
    this.view.setBigUint64(32, util.toBigInt(util.toPointer((this.buf as any)._f32)), true);
  }

  // 0x28: buffer
  set lpszConversationID(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f40 = value;
    this.view.setBigUint64(40, util.toBigInt(util.toPointer((this.buf as any)._f40)), true);
  }

  // 0x30: u32
  set flFlags(value: number) {
    this.view.setUint32(48, value, true);
  }

  // 0x34: pad4

  // 0x38: pointer
  set lpOriginator(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(56, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x40: u32
  set nRecipCount(value: number) {
    this.view.setUint32(64, value, true);
  }

  // 0x44: pad4

  // 0x48: pointer
  set lpRecips(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(72, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x50: u32
  set nFileCount(value: number) {
    this.view.setUint32(80, value, true);
  }

  // 0x54: pad4

  // 0x58: pointer
  set lpFiles(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(88, util.toBigInt(util.toPointer(value)), true);
  }
}

// Native Libraries

try {
  var libMAPI32_dll = Deno.dlopen("MAPI32.dll", {
    MAPIFreeBuffer: {
      parameters: ["pointer"],
      result: "u32",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function MAPIFreeBuffer(
  pv: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libMAPI32_dll.MAPIFreeBuffer(util.toPointer(pv));
}

