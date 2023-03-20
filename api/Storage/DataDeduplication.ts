/// Auto-generated by Deno Win32: Windows.Win32.Storage.DataDeduplication.Apis

import * as util from "../../util.ts";

// Enums
export type DEDUP_BACKUP_SUPPORT_PARAM_TYPE = number;
export type DEDUP_SET_PARAM_TYPE = number;
export type DedupDataPortManagerOption = number;
export type DedupDataPortVolumeStatus = number;
export type DedupDataPortRequestStatus = number;
export type DedupChunkFlags = number;
export type DedupChunkingAlgorithm = number;
export type DedupHashingAlgorithm = number;
export type DedupCompressionAlgorithm = number;

// Constants
export const DEDUP_CHUNKLIB_MAX_CHUNKS_ENUM = 1024;
export const DEDUP_RECONSTRUCT_UNOPTIMIZED = 1;
export const DEDUP_RECONSTRUCT_OPTIMIZED = 2;
export const DEDUP_PT_MinChunkSizeBytes = 1;
export const DEDUP_PT_MaxChunkSizeBytes = 2;
export const DEDUP_PT_AvgChunkSizeBytes = 3;
export const DEDUP_PT_InvariantChunking = 4;
export const DEDUP_PT_DisableStrongHashComputation = 5;
export const DedupDataPortManagerOption_None = 0;
export const DedupDataPortManagerOption_AutoStart = 1;
export const DedupDataPortManagerOption_SkipReconciliation = 2;
export const DedupDataPortVolumeStatus_Unknown = 0;
export const DedupDataPortVolumeStatus_NotEnabled = 1;
export const DedupDataPortVolumeStatus_NotAvailable = 2;
export const DedupDataPortVolumeStatus_Initializing = 3;
export const DedupDataPortVolumeStatus_Ready = 4;
export const DedupDataPortVolumeStatus_Maintenance = 5;
export const DedupDataPortVolumeStatus_Shutdown = 6;
export const DedupDataPortRequestStatus_Unknown = 0;
export const DedupDataPortRequestStatus_Queued = 1;
export const DedupDataPortRequestStatus_Processing = 2;
export const DedupDataPortRequestStatus_Partial = 3;
export const DedupDataPortRequestStatus_Complete = 4;
export const DedupDataPortRequestStatus_Failed = 5;
export const DedupChunkFlags_None = 0;
export const DedupChunkFlags_Compressed = 1;
export const DedupChunkingAlgorithm_Unknonwn = 0;
export const DedupChunkingAlgorithm_V1 = 1;
export const DedupHashingAlgorithm_Unknonwn = 0;
export const DedupHashingAlgorithm_V1 = 1;
export const DedupCompressionAlgorithm_Unknonwn = 0;
export const DedupCompressionAlgorithm_Xpress = 1;

// Structs

/**
 * Windows.Win32.Storage.DataDeduplication.DEDUP_CONTAINER_EXTENT (size: 24)
 */
export interface DEDUP_CONTAINER_EXTENT {
  /** u32 */
  ContainerIndex: number;
  /** i64 */
  StartOffset: bigint | number;
  /** i64 */
  Length: bigint | number;
}

export const sizeofDEDUP_CONTAINER_EXTENT = 24;

export function allocDEDUP_CONTAINER_EXTENT(data?: Partial<DEDUP_CONTAINER_EXTENT>): Uint8Array {
  const buf = new Uint8Array(sizeofDEDUP_CONTAINER_EXTENT);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.ContainerIndex !== undefined) view.setUint32(0, Number(data.ContainerIndex), true);
  // 0x04: pad4
  // 0x08: i64
  if (data?.StartOffset !== undefined) view.setBigInt64(8, BigInt(data.StartOffset), true);
  // 0x10: i64
  if (data?.Length !== undefined) view.setBigInt64(16, BigInt(data.Length), true);
  return buf;
}

export class DEDUP_CONTAINER_EXTENTView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get ContainerIndex(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: pad4

  // 0x08: i64
  get StartOffset(): bigint | number {
    return Number(this.view.getBigInt64(8, true));
  }

  // 0x10: i64
  get Length(): bigint | number {
    return Number(this.view.getBigInt64(16, true));
  }

  // 0x00: u32
  set ContainerIndex(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: pad4

  // 0x08: i64
  set StartOffset(value: bigint | number) {
    this.view.setBigInt64(8, BigInt(value), true);
  }

  // 0x10: i64
  set Length(value: bigint | number) {
    this.view.setBigInt64(16, BigInt(value), true);
  }
}

/**
 * Windows.Win32.Storage.DataDeduplication.DDP_FILE_EXTENT (size: 16)
 */
export interface DDP_FILE_EXTENT {
  /** i64 */
  Length: bigint | number;
  /** i64 */
  Offset: bigint | number;
}

export const sizeofDDP_FILE_EXTENT = 16;

export function allocDDP_FILE_EXTENT(data?: Partial<DDP_FILE_EXTENT>): Uint8Array {
  const buf = new Uint8Array(sizeofDDP_FILE_EXTENT);
  const view = new DataView(buf.buffer);
  // 0x00: i64
  if (data?.Length !== undefined) view.setBigInt64(0, BigInt(data.Length), true);
  // 0x08: i64
  if (data?.Offset !== undefined) view.setBigInt64(8, BigInt(data.Offset), true);
  return buf;
}

export class DDP_FILE_EXTENTView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: i64
  get Length(): bigint | number {
    return Number(this.view.getBigInt64(0, true));
  }

  // 0x08: i64
  get Offset(): bigint | number {
    return Number(this.view.getBigInt64(8, true));
  }

  // 0x00: i64
  set Length(value: bigint | number) {
    this.view.setBigInt64(0, BigInt(value), true);
  }

  // 0x08: i64
  set Offset(value: bigint | number) {
    this.view.setBigInt64(8, BigInt(value), true);
  }
}

/**
 * Windows.Win32.Storage.DataDeduplication.DEDUP_CHUNK_INFO_HASH32 (size: 32)
 */
export interface DEDUP_CHUNK_INFO_HASH32 {
  /** u32 */
  ChunkFlags: number;
  /** u64 */
  ChunkOffsetInStream: bigint | number;
  /** u64 */
  ChunkSize: bigint | number;
  /** array */
  HashVal: Deno.PointerValue;
}

export const sizeofDEDUP_CHUNK_INFO_HASH32 = 32;

export function allocDEDUP_CHUNK_INFO_HASH32(data?: Partial<DEDUP_CHUNK_INFO_HASH32>): Uint8Array {
  const buf = new Uint8Array(sizeofDEDUP_CHUNK_INFO_HASH32);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.ChunkFlags !== undefined) view.setUint32(0, Number(data.ChunkFlags), true);
  // 0x04: pad4
  // 0x08: u64
  if (data?.ChunkOffsetInStream !== undefined) view.setBigUint64(8, BigInt(data.ChunkOffsetInStream), true);
  // 0x10: u64
  if (data?.ChunkSize !== undefined) view.setBigUint64(16, BigInt(data.ChunkSize), true);
  // 0x18: pointer
  if (data?.HashVal !== undefined) view.setBigUint64(24, data.HashVal === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.HashVal))), true);
  return buf;
}

export class DEDUP_CHUNK_INFO_HASH32View {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get ChunkFlags(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: pad4

  // 0x08: u64
  get ChunkOffsetInStream(): bigint | number {
    return Number(this.view.getBigUint64(8, true));
  }

  // 0x10: u64
  get ChunkSize(): bigint | number {
    return Number(this.view.getBigUint64(16, true));
  }

  // 0x18: pointer
  get HashVal(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(24, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: u32
  set ChunkFlags(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: pad4

  // 0x08: u64
  set ChunkOffsetInStream(value: bigint | number) {
    this.view.setBigUint64(8, BigInt(value), true);
  }

  // 0x10: u64
  set ChunkSize(value: bigint | number) {
    this.view.setBigUint64(16, BigInt(value), true);
  }

  // 0x18: pointer
  set HashVal(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }
}

/**
 * Windows.Win32.Storage.DataDeduplication.DedupHash (size: 8)
 */
export interface DedupHash {
  /** array */
  Hash: Deno.PointerValue;
}

export const sizeofDedupHash = 8;

export function allocDedupHash(data?: Partial<DedupHash>): Uint8Array {
  const buf = new Uint8Array(sizeofDedupHash);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.Hash !== undefined) view.setBigUint64(0, data.Hash === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.Hash))), true);
  return buf;
}

export class DedupHashView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get Hash(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(0, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: pointer
  set Hash(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }
}

/**
 * Windows.Win32.Storage.DataDeduplication.DedupChunk (size: 24)
 */
export interface DedupChunk {
  /** Windows.Win32.Storage.DataDeduplication.DedupHash */
  Hash: Uint8Array | Deno.PointerValue;
  /** Windows.Win32.Storage.DataDeduplication.DedupChunkFlags */
  Flags: DedupChunkFlags;
  /** u32 */
  LogicalSize: number;
  /** u32 */
  DataSize: number;
}

export const sizeofDedupChunk = 24;

export function allocDedupChunk(data?: Partial<DedupChunk>): Uint8Array {
  const buf = new Uint8Array(sizeofDedupChunk);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.Hash !== undefined) view.setBigUint64(0, data.Hash === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.Hash))), true);
  // 0x08: i32
  if (data?.Flags !== undefined) view.setInt32(8, Number(data.Flags), true);
  // 0x0c: u32
  if (data?.LogicalSize !== undefined) view.setUint32(12, Number(data.LogicalSize), true);
  // 0x10: u32
  if (data?.DataSize !== undefined) view.setUint32(16, Number(data.DataSize), true);
  // 0x14: pad4
  return buf;
}

export class DedupChunkView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get Hash(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(0, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x08: i32
  get Flags(): number {
    return this.view.getInt32(8, true);
  }

  // 0x0c: u32
  get LogicalSize(): number {
    return this.view.getUint32(12, true);
  }

  // 0x10: u32
  get DataSize(): number {
    return this.view.getUint32(16, true);
  }

  // 0x14: pad4

  // 0x00: pointer
  set Hash(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x08: i32
  set Flags(value: number) {
    this.view.setInt32(8, value, true);
  }

  // 0x0c: u32
  set LogicalSize(value: number) {
    this.view.setUint32(12, value, true);
  }

  // 0x10: u32
  set DataSize(value: number) {
    this.view.setUint32(16, value, true);
  }

  // 0x14: pad4
}

/**
 * Windows.Win32.Storage.DataDeduplication.DedupStreamEntry (size: 24)
 */
export interface DedupStreamEntry {
  /** Windows.Win32.Storage.DataDeduplication.DedupHash */
  Hash: Uint8Array | Deno.PointerValue;
  /** u32 */
  LogicalSize: number;
  /** u64 */
  Offset: bigint | number;
}

export const sizeofDedupStreamEntry = 24;

export function allocDedupStreamEntry(data?: Partial<DedupStreamEntry>): Uint8Array {
  const buf = new Uint8Array(sizeofDedupStreamEntry);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.Hash !== undefined) view.setBigUint64(0, data.Hash === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.Hash))), true);
  // 0x08: u32
  if (data?.LogicalSize !== undefined) view.setUint32(8, Number(data.LogicalSize), true);
  // 0x0c: pad4
  // 0x10: u64
  if (data?.Offset !== undefined) view.setBigUint64(16, BigInt(data.Offset), true);
  return buf;
}

export class DedupStreamEntryView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get Hash(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(0, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x08: u32
  get LogicalSize(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: pad4

  // 0x10: u64
  get Offset(): bigint | number {
    return Number(this.view.getBigUint64(16, true));
  }

  // 0x00: pointer
  set Hash(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x08: u32
  set LogicalSize(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: pad4

  // 0x10: u64
  set Offset(value: bigint | number) {
    this.view.setBigUint64(16, BigInt(value), true);
  }
}

export type BSTR = Deno.PointerValue | Uint8Array;

/**
 * Windows.Win32.Storage.DataDeduplication.DedupStream (size: 32)
 */
export interface DedupStream {
  /** Windows.Win32.Foundation.BSTR */
  Path: Uint8Array | Deno.PointerValue;
  /** u64 */
  Offset: bigint | number;
  /** u64 */
  Length: bigint | number;
  /** u32 */
  ChunkCount: number;
}

export const sizeofDedupStream = 32;

export function allocDedupStream(data?: Partial<DedupStream>): Uint8Array {
  const buf = new Uint8Array(sizeofDedupStream);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.Path !== undefined) view.setBigUint64(0, data.Path === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.Path))), true);
  // 0x08: u64
  if (data?.Offset !== undefined) view.setBigUint64(8, BigInt(data.Offset), true);
  // 0x10: u64
  if (data?.Length !== undefined) view.setBigUint64(16, BigInt(data.Length), true);
  // 0x18: u32
  if (data?.ChunkCount !== undefined) view.setUint32(24, Number(data.ChunkCount), true);
  // 0x1c: pad4
  return buf;
}

export class DedupStreamView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get Path(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(0, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x08: u64
  get Offset(): bigint | number {
    return Number(this.view.getBigUint64(8, true));
  }

  // 0x10: u64
  get Length(): bigint | number {
    return Number(this.view.getBigUint64(16, true));
  }

  // 0x18: u32
  get ChunkCount(): number {
    return this.view.getUint32(24, true);
  }

  // 0x1c: pad4

  // 0x00: pointer
  set Path(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x08: u64
  set Offset(value: bigint | number) {
    this.view.setBigUint64(8, BigInt(value), true);
  }

  // 0x10: u64
  set Length(value: bigint | number) {
    this.view.setBigUint64(16, BigInt(value), true);
  }

  // 0x18: u32
  set ChunkCount(value: number) {
    this.view.setUint32(24, value, true);
  }

  // 0x1c: pad4
}

// Native Libraries

// Symbols

