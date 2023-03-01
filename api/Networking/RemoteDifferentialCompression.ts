/// Auto-generated by Deno Win32: Windows.Win32.Networking.RemoteDifferentialCompression.Apis

import * as util from "../../util.ts";

// Enums
export type RDC_ErrorCode = number;
export type GeneratorParametersType = number;
export type RdcNeedType = number;
export type RdcCreatedTables = number;
export type RdcMappingAccessMode = number;

// Constants
export const RDCE_TABLE_FULL = 2147745793;
export const RDCE_TABLE_CORRUPT = 2147745794;
export const MSRDC_SIGNATURE_HASHSIZE = 16;
export const SimilarityFileIdMinSize = 4;
export const SimilarityFileIdMaxSize = 32;
export const MSRDC_VERSION = 65536;
export const MSRDC_MINIMUM_COMPATIBLE_APP_VERSION = 65536;
export const MSRDC_MINIMUM_DEPTH = 1;
export const MSRDC_MAXIMUM_DEPTH = 8;
export const MSRDC_MINIMUM_COMPAREBUFFER = 100000;
export const MSRDC_MAXIMUM_COMPAREBUFFER = 1073741824;
export const MSRDC_DEFAULT_COMPAREBUFFER = 3200000;
export const MSRDC_MINIMUM_INPUTBUFFERSIZE = 1024;
export const MSRDC_MINIMUM_HORIZONSIZE = 128;
export const MSRDC_MAXIMUM_HORIZONSIZE = 16384;
export const MSRDC_MINIMUM_HASHWINDOWSIZE = 2;
export const MSRDC_MAXIMUM_HASHWINDOWSIZE = 96;
export const MSRDC_DEFAULT_HASHWINDOWSIZE_1 = 48;
export const MSRDC_DEFAULT_HORIZONSIZE_1 = 1024;
export const MSRDC_DEFAULT_HASHWINDOWSIZE_N = 2;
export const MSRDC_DEFAULT_HORIZONSIZE_N = 128;
export const MSRDC_MAXIMUM_TRAITVALUE = 63;
export const MSRDC_MINIMUM_MATCHESREQUIRED = 1;
export const MSRDC_MAXIMUM_MATCHESREQUIRED = 16;
export const RDC_NoError = 0;
export const RDC_HeaderVersionNewer = 1;
export const RDC_HeaderVersionOlder = 2;
export const RDC_HeaderMissingOrCorrupt = 3;
export const RDC_HeaderWrongType = 4;
export const RDC_DataMissingOrCorrupt = 5;
export const RDC_DataTooManyRecords = 6;
export const RDC_FileChecksumMismatch = 7;
export const RDC_ApplicationError = 8;
export const RDC_Aborted = 9;
export const RDC_Win32Error = 10;
export const RDCGENTYPE_Unused = 0;
export const RDCGENTYPE_FilterMax = 1;
export const RDCNEED_SOURCE = 0;
export const RDCNEED_TARGET = 1;
export const RDCNEED_SEED = 2;
export const RDCNEED_SEED_MAX = 255;
export const RDCTABLE_InvalidOrUnknown = 0;
export const RDCTABLE_Existing = 1;
export const RDCTABLE_New = 2;
export const RDCMAPPING_Undefined = 0;
export const RDCMAPPING_ReadOnly = 1;
export const RDCMAPPING_ReadWrite = 2;

// Structs

/**
 * Windows.Win32.Networking.RemoteDifferentialCompression.RdcNeed (size: 24)
 */
export interface RdcNeed {
  /** Windows.Win32.Networking.RemoteDifferentialCompression.RdcNeedType */
  m_BlockType: RdcNeedType;
  /** u64 */
  m_FileOffset: number | bigint;
  /** u64 */
  m_BlockLength: number | bigint;
}

export const sizeofRdcNeed = 24;

export function allocRdcNeed(data?: Partial<RdcNeed>): Uint8Array {
  const buf = new Uint8Array(sizeofRdcNeed);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.m_BlockType !== undefined) view.setInt32(0, Number(data.m_BlockType), true);
  // 0x04: pad4
  // 0x08: u64
  if (data?.m_FileOffset !== undefined) view.setBigUint64(8, util.toBigInt(data.m_FileOffset), true);
  // 0x10: u64
  if (data?.m_BlockLength !== undefined) view.setBigUint64(16, util.toBigInt(data.m_BlockLength), true);
  return buf;
}

export class RdcNeedView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: i32
  get m_BlockType(): number {
    return this.view.getInt32(0, true);
  }

  // 0x04: pad4

  // 0x08: u64
  get m_FileOffset(): number | bigint {
    return this.view.getBigUint64(8, true);
  }

  // 0x10: u64
  get m_BlockLength(): number | bigint {
    return this.view.getBigUint64(16, true);
  }

  // 0x00: i32
  set m_BlockType(value: number) {
    this.view.setInt32(0, value, true);
  }

  // 0x04: pad4

  // 0x08: u64
  set m_FileOffset(value: number | bigint) {
    this.view.setBigUint64(8, util.toBigInt(value), true);
  }

  // 0x10: u64
  set m_BlockLength(value: number | bigint) {
    this.view.setBigUint64(16, util.toBigInt(value), true);
  }
}

/**
 * Windows.Win32.Networking.RemoteDifferentialCompression.RdcBufferPointer (size: 16)
 */
export interface RdcBufferPointer {
  /** u32 */
  m_Size: number;
  /** u32 */
  m_Used: number;
  /** ptr */
  m_Data: Deno.PointerValue | Uint8Array | null;
}

export const sizeofRdcBufferPointer = 16;

export function allocRdcBufferPointer(data?: Partial<RdcBufferPointer>): Uint8Array {
  const buf = new Uint8Array(sizeofRdcBufferPointer);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.m_Size !== undefined) view.setUint32(0, Number(data.m_Size), true);
  // 0x04: u32
  if (data?.m_Used !== undefined) view.setUint32(4, Number(data.m_Used), true);
  // 0x08: pointer
  if (data?.m_Data !== undefined) view.setBigUint64(8, data.m_Data === null ? 0n : util.toBigInt(util.toPointer(data.m_Data)), true);
  return buf;
}

export class RdcBufferPointerView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get m_Size(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: u32
  get m_Used(): number {
    return this.view.getUint32(4, true);
  }

  // 0x08: pointer
  get m_Data(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: u32
  set m_Size(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: u32
  set m_Used(value: number) {
    this.view.setUint32(4, value, true);
  }

  // 0x08: pointer
  set m_Data(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, util.toBigInt(util.toPointer(value)), true);
  }
}

/**
 * Windows.Win32.Networking.RemoteDifferentialCompression.RdcNeedPointer (size: 16)
 */
export interface RdcNeedPointer {
  /** u32 */
  m_Size: number;
  /** u32 */
  m_Used: number;
  /** ptr */
  m_Data: Deno.PointerValue | Uint8Array | null;
}

export const sizeofRdcNeedPointer = 16;

export function allocRdcNeedPointer(data?: Partial<RdcNeedPointer>): Uint8Array {
  const buf = new Uint8Array(sizeofRdcNeedPointer);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.m_Size !== undefined) view.setUint32(0, Number(data.m_Size), true);
  // 0x04: u32
  if (data?.m_Used !== undefined) view.setUint32(4, Number(data.m_Used), true);
  // 0x08: pointer
  if (data?.m_Data !== undefined) view.setBigUint64(8, data.m_Data === null ? 0n : util.toBigInt(util.toPointer(data.m_Data)), true);
  return buf;
}

export class RdcNeedPointerView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get m_Size(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: u32
  get m_Used(): number {
    return this.view.getUint32(4, true);
  }

  // 0x08: pointer
  get m_Data(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: u32
  set m_Size(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: u32
  set m_Used(value: number) {
    this.view.setUint32(4, value, true);
  }

  // 0x08: pointer
  set m_Data(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, util.toBigInt(util.toPointer(value)), true);
  }
}

/**
 * Windows.Win32.Networking.RemoteDifferentialCompression.RdcSignature (size: 16)
 */
export interface RdcSignature {
  /** array */
  m_Signature: Deno.PointerValue | null;
  /** u16 */
  m_BlockLength: number;
}

export const sizeofRdcSignature = 16;

export function allocRdcSignature(data?: Partial<RdcSignature>): Uint8Array {
  const buf = new Uint8Array(sizeofRdcSignature);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.m_Signature !== undefined) view.setBigUint64(0, data.m_Signature === null ? 0n : util.toBigInt(util.toPointer(data.m_Signature)), true);
  // 0x08: u16
  if (data?.m_BlockLength !== undefined) view.setUint16(8, Number(data.m_BlockLength), true);
  // 0x0a: pad6
  return buf;
}

export class RdcSignatureView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get m_Signature(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x08: u16
  get m_BlockLength(): number {
    return this.view.getUint16(8, true);
  }

  // 0x0a: pad6

  // 0x00: pointer
  set m_Signature(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(0, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x08: u16
  set m_BlockLength(value: number) {
    this.view.setUint16(8, value, true);
  }

  // 0x0a: pad6
}

/**
 * Windows.Win32.Networking.RemoteDifferentialCompression.RdcSignaturePointer (size: 16)
 */
export interface RdcSignaturePointer {
  /** u32 */
  m_Size: number;
  /** u32 */
  m_Used: number;
  /** ptr */
  m_Data: Deno.PointerValue | Uint8Array | null;
}

export const sizeofRdcSignaturePointer = 16;

export function allocRdcSignaturePointer(data?: Partial<RdcSignaturePointer>): Uint8Array {
  const buf = new Uint8Array(sizeofRdcSignaturePointer);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.m_Size !== undefined) view.setUint32(0, Number(data.m_Size), true);
  // 0x04: u32
  if (data?.m_Used !== undefined) view.setUint32(4, Number(data.m_Used), true);
  // 0x08: pointer
  if (data?.m_Data !== undefined) view.setBigUint64(8, data.m_Data === null ? 0n : util.toBigInt(util.toPointer(data.m_Data)), true);
  return buf;
}

export class RdcSignaturePointerView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get m_Size(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: u32
  get m_Used(): number {
    return this.view.getUint32(4, true);
  }

  // 0x08: pointer
  get m_Data(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: u32
  set m_Size(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: u32
  set m_Used(value: number) {
    this.view.setUint32(4, value, true);
  }

  // 0x08: pointer
  set m_Data(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, util.toBigInt(util.toPointer(value)), true);
  }
}

/**
 * Windows.Win32.Networking.RemoteDifferentialCompression.SimilarityMappedViewInfo (size: 16)
 */
export interface SimilarityMappedViewInfo {
  /** ptr */
  m_Data: Deno.PointerValue | Uint8Array | null;
  /** u32 */
  m_Length: number;
}

export const sizeofSimilarityMappedViewInfo = 16;

export function allocSimilarityMappedViewInfo(data?: Partial<SimilarityMappedViewInfo>): Uint8Array {
  const buf = new Uint8Array(sizeofSimilarityMappedViewInfo);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.m_Data !== undefined) view.setBigUint64(0, data.m_Data === null ? 0n : util.toBigInt(util.toPointer(data.m_Data)), true);
  // 0x08: u32
  if (data?.m_Length !== undefined) view.setUint32(8, Number(data.m_Length), true);
  // 0x0c: pad4
  return buf;
}

export class SimilarityMappedViewInfoView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get m_Data(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x08: u32
  get m_Length(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: pad4

  // 0x00: pointer
  set m_Data(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(0, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x08: u32
  set m_Length(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: pad4
}

/**
 * Windows.Win32.Networking.RemoteDifferentialCompression.SimilarityData (size: 8)
 */
export interface SimilarityData {
  /** array */
  m_Data: Deno.PointerValue | null;
}

export const sizeofSimilarityData = 8;

export function allocSimilarityData(data?: Partial<SimilarityData>): Uint8Array {
  const buf = new Uint8Array(sizeofSimilarityData);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.m_Data !== undefined) view.setBigUint64(0, data.m_Data === null ? 0n : util.toBigInt(util.toPointer(data.m_Data)), true);
  return buf;
}

export class SimilarityDataView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get m_Data(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: pointer
  set m_Data(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(0, util.toBigInt(util.toPointer(value)), true);
  }
}

/**
 * Windows.Win32.Networking.RemoteDifferentialCompression.FindSimilarFileIndexResults (size: 8)
 */
export interface FindSimilarFileIndexResults {
  /** u32 */
  m_FileIndex: number;
  /** u32 */
  m_MatchCount: number;
}

export const sizeofFindSimilarFileIndexResults = 8;

export function allocFindSimilarFileIndexResults(data?: Partial<FindSimilarFileIndexResults>): Uint8Array {
  const buf = new Uint8Array(sizeofFindSimilarFileIndexResults);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.m_FileIndex !== undefined) view.setUint32(0, Number(data.m_FileIndex), true);
  // 0x04: u32
  if (data?.m_MatchCount !== undefined) view.setUint32(4, Number(data.m_MatchCount), true);
  return buf;
}

export class FindSimilarFileIndexResultsView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get m_FileIndex(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: u32
  get m_MatchCount(): number {
    return this.view.getUint32(4, true);
  }

  // 0x00: u32
  set m_FileIndex(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: u32
  set m_MatchCount(value: number) {
    this.view.setUint32(4, value, true);
  }
}

/**
 * Windows.Win32.Networking.RemoteDifferentialCompression.SimilarityDumpData (size: 16)
 */
export interface SimilarityDumpData {
  /** u32 */
  m_FileIndex: number;
  /** Windows.Win32.Networking.RemoteDifferentialCompression.SimilarityData */
  m_Data: Uint8Array | Deno.PointerValue | null;
}

export const sizeofSimilarityDumpData = 16;

export function allocSimilarityDumpData(data?: Partial<SimilarityDumpData>): Uint8Array {
  const buf = new Uint8Array(sizeofSimilarityDumpData);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.m_FileIndex !== undefined) view.setUint32(0, Number(data.m_FileIndex), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.m_Data !== undefined) view.setBigUint64(8, data.m_Data === null ? 0n : util.toBigInt(util.toPointer(data.m_Data)), true);
  return buf;
}

export class SimilarityDumpDataView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get m_FileIndex(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  get m_Data(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: u32
  set m_FileIndex(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  set m_Data(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, util.toBigInt(util.toPointer(value)), true);
  }
}

/**
 * Windows.Win32.Networking.RemoteDifferentialCompression.SimilarityFileId (size: 8)
 */
export interface SimilarityFileId {
  /** array */
  m_FileId: Deno.PointerValue | null;
}

export const sizeofSimilarityFileId = 8;

export function allocSimilarityFileId(data?: Partial<SimilarityFileId>): Uint8Array {
  const buf = new Uint8Array(sizeofSimilarityFileId);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.m_FileId !== undefined) view.setBigUint64(0, data.m_FileId === null ? 0n : util.toBigInt(util.toPointer(data.m_FileId)), true);
  return buf;
}

export class SimilarityFileIdView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get m_FileId(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: pointer
  set m_FileId(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(0, util.toBigInt(util.toPointer(value)), true);
  }
}

// Native Libraries

// Symbols

