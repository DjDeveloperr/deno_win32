/// Auto-generated by Deno Win32: Windows.Win32.System.MixedReality.Apis

import * as util from "../../util.ts";

// Structs

/**
 * Windows.Win32.System.MixedReality.PERCEPTION_PAYLOAD_FIELD (size: 16)
 */
export interface PERCEPTION_PAYLOAD_FIELD {
  /** System.Guid */
  FieldId: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  OffsetInBytes: number;
  /** u32 */
  SizeInBytes: number;
}

export const sizeofPERCEPTION_PAYLOAD_FIELD = 16;

export function allocPERCEPTION_PAYLOAD_FIELD(data?: Partial<PERCEPTION_PAYLOAD_FIELD>): Uint8Array {
  const buf = new Uint8Array(sizeofPERCEPTION_PAYLOAD_FIELD);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.FieldId !== undefined) view.setBigUint64(0, data.FieldId === null ? 0n : util.toBigInt(util.toPointer(data.FieldId)), true);
  // 0x08: u32
  if (data?.OffsetInBytes !== undefined) view.setUint32(8, Number(data.OffsetInBytes), true);
  // 0x0c: u32
  if (data?.SizeInBytes !== undefined) view.setUint32(12, Number(data.SizeInBytes), true);
  return buf;
}

export class PERCEPTION_PAYLOAD_FIELDView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get FieldId(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x08: u32
  get OffsetInBytes(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: u32
  get SizeInBytes(): number {
    return this.view.getUint32(12, true);
  }

  // 0x00: pointer
  set FieldId(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(0, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x08: u32
  set OffsetInBytes(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: u32
  set SizeInBytes(value: number) {
    this.view.setUint32(12, value, true);
  }
}

/**
 * Windows.Win32.System.MixedReality.PERCEPTION_STATE_STREAM_TIMESTAMPS (size: 16)
 */
export interface PERCEPTION_STATE_STREAM_TIMESTAMPS {
  /** i64 */
  InputTimestampInQpcCounts: number | bigint;
  /** i64 */
  AvailableTimestampInQpcCounts: number | bigint;
}

export const sizeofPERCEPTION_STATE_STREAM_TIMESTAMPS = 16;

export function allocPERCEPTION_STATE_STREAM_TIMESTAMPS(data?: Partial<PERCEPTION_STATE_STREAM_TIMESTAMPS>): Uint8Array {
  const buf = new Uint8Array(sizeofPERCEPTION_STATE_STREAM_TIMESTAMPS);
  const view = new DataView(buf.buffer);
  // 0x00: i64
  if (data?.InputTimestampInQpcCounts !== undefined) view.setBigInt64(0, util.toBigInt(data.InputTimestampInQpcCounts), true);
  // 0x08: i64
  if (data?.AvailableTimestampInQpcCounts !== undefined) view.setBigInt64(8, util.toBigInt(data.AvailableTimestampInQpcCounts), true);
  return buf;
}

export class PERCEPTION_STATE_STREAM_TIMESTAMPSView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: i64
  get InputTimestampInQpcCounts(): number | bigint {
    return this.view.getBigInt64(0, true);
  }

  // 0x08: i64
  get AvailableTimestampInQpcCounts(): number | bigint {
    return this.view.getBigInt64(8, true);
  }

  // 0x00: i64
  set InputTimestampInQpcCounts(value: number | bigint) {
    this.view.setBigInt64(0, util.toBigInt(value), true);
  }

  // 0x08: i64
  set AvailableTimestampInQpcCounts(value: number | bigint) {
    this.view.setBigInt64(8, util.toBigInt(value), true);
  }
}

// Native Libraries

// Symbols

