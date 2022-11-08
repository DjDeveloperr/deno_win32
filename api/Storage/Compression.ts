/// Auto-generated by Deno Win32: Windows.Win32.Storage.Compression.Apis

import * as util from "../../util.ts";

// Enums
export type COMPRESS_ALGORITHM = number;
export type COMPRESS_INFORMATION_CLASS = number;

// Constants
export const COMPRESS_ALGORITHM_MSZIP = 2;
export const COMPRESS_ALGORITHM_XPRESS = 3;
export const COMPRESS_ALGORITHM_XPRESS_HUFF = 4;
export const COMPRESS_ALGORITHM_LZMS = 5;
export const COMPRESS_ALGORITHM_INVALID = 0;
export const COMPRESS_ALGORITHM_NULL = 1;
export const COMPRESS_ALGORITHM_MAX = 6;
export const COMPRESS_RAW = 536870912;
export const COMPRESS_INFORMATION_CLASS_INVALID = 0;
export const COMPRESS_INFORMATION_CLASS_BLOCK_SIZE = 1;
export const COMPRESS_INFORMATION_CLASS_LEVEL = 2;

// Structs

export type COMPRESSOR_HANDLE = Deno.PointerValue;

/**
 * Windows.Win32.Storage.Compression.COMPRESS_ALLOCATION_ROUTINES (size: 24)
 */
export interface COMPRESS_ALLOCATION_ROUTINES {
  /** Windows.Win32.Storage.Compression.PFN_COMPRESS_ALLOCATE */
  Allocate: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Storage.Compression.PFN_COMPRESS_FREE */
  Free: Uint8Array | Deno.PointerValue | null;
  /** ptr */
  UserContext: Deno.PointerValue | Uint8Array | null;
}

export const sizeofCOMPRESS_ALLOCATION_ROUTINES = 24;

export function allocCOMPRESS_ALLOCATION_ROUTINES(data?: Partial<COMPRESS_ALLOCATION_ROUTINES>): Uint8Array {
  const buf = new Uint8Array(sizeofCOMPRESS_ALLOCATION_ROUTINES);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.Allocate !== undefined) view.setBigUint64(0, data.Allocate === null ? 0n : BigInt(util.toPointer(data.Allocate)), true);
  // 0x08: pointer
  if (data?.Free !== undefined) view.setBigUint64(8, data.Free === null ? 0n : BigInt(util.toPointer(data.Free)), true);
  // 0x10: pointer
  if (data?.UserContext !== undefined) view.setBigUint64(16, data.UserContext === null ? 0n : BigInt(util.toPointer(data.UserContext)), true);
  return buf;
}

export class COMPRESS_ALLOCATION_ROUTINESView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get Allocate(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x08: pointer
  get Free(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: pointer
  get UserContext(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(16, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: pointer
  set Allocate(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(0, BigInt(util.toPointer(value)), true);
  }

  // 0x08: pointer
  set Free(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, BigInt(util.toPointer(value)), true);
  }

  // 0x10: pointer
  set UserContext(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(16, BigInt(util.toPointer(value)), true);
  }
}

export type BOOL = number;

// Native Libraries

try {
  var libCabinet_dll = Deno.dlopen("Cabinet.dll", {
    CreateCompressor: {
      parameters: ["u32", "pointer", "pointer"],
      result: "i32",
    },
    SetCompressorInformation: {
      parameters: ["pointer", "i32", "pointer", "usize"],
      result: "i32",
    },
    QueryCompressorInformation: {
      parameters: ["pointer", "i32", "pointer", "usize"],
      result: "i32",
    },
    Compress: {
      parameters: ["pointer", "pointer", "usize", "pointer", "usize", "pointer"],
      result: "i32",
    },
    ResetCompressor: {
      parameters: ["pointer"],
      result: "i32",
    },
    CloseCompressor: {
      parameters: ["pointer"],
      result: "i32",
    },
    CreateDecompressor: {
      parameters: ["u32", "pointer", "pointer"],
      result: "i32",
    },
    SetDecompressorInformation: {
      parameters: ["isize", "i32", "pointer", "usize"],
      result: "i32",
    },
    QueryDecompressorInformation: {
      parameters: ["isize", "i32", "pointer", "usize"],
      result: "i32",
    },
    Decompress: {
      parameters: ["isize", "pointer", "usize", "pointer", "usize", "pointer"],
      result: "i32",
    },
    ResetDecompressor: {
      parameters: ["isize"],
      result: "i32",
    },
    CloseDecompressor: {
      parameters: ["isize"],
      result: "i32",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function CreateCompressor(
  Algorithm: COMPRESS_ALGORITHM /* Windows.Win32.Storage.Compression.COMPRESS_ALGORITHM */,
  AllocationRoutines: Deno.PointerValue | Uint8Array | null /* ptr */,
  CompressorHandle: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libCabinet_dll.CreateCompressor(Algorithm, util.toPointer(AllocationRoutines), util.toPointer(CompressorHandle)));
}

export function SetCompressorInformation(
  CompressorHandle: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Compression.COMPRESSOR_HANDLE */,
  CompressInformationClass: COMPRESS_INFORMATION_CLASS /* Windows.Win32.Storage.Compression.COMPRESS_INFORMATION_CLASS */,
  CompressInformation: Deno.PointerValue | Uint8Array | null /* ptr */,
  CompressInformationSize: Deno.PointerValue /* usize */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libCabinet_dll.SetCompressorInformation(util.toPointer(CompressorHandle), CompressInformationClass, util.toPointer(CompressInformation), CompressInformationSize));
}

export function QueryCompressorInformation(
  CompressorHandle: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Compression.COMPRESSOR_HANDLE */,
  CompressInformationClass: COMPRESS_INFORMATION_CLASS /* Windows.Win32.Storage.Compression.COMPRESS_INFORMATION_CLASS */,
  CompressInformation: Deno.PointerValue | Uint8Array | null /* ptr */,
  CompressInformationSize: Deno.PointerValue /* usize */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libCabinet_dll.QueryCompressorInformation(util.toPointer(CompressorHandle), CompressInformationClass, util.toPointer(CompressInformation), CompressInformationSize));
}

export function Compress(
  CompressorHandle: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Compression.COMPRESSOR_HANDLE */,
  UncompressedData: Deno.PointerValue | Uint8Array | null /* ptr */,
  UncompressedDataSize: Deno.PointerValue /* usize */,
  CompressedBuffer: Deno.PointerValue | Uint8Array | null /* ptr */,
  CompressedBufferSize: Deno.PointerValue /* usize */,
  CompressedDataSize: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libCabinet_dll.Compress(util.toPointer(CompressorHandle), util.toPointer(UncompressedData), UncompressedDataSize, util.toPointer(CompressedBuffer), CompressedBufferSize, util.toPointer(CompressedDataSize)));
}

export function ResetCompressor(
  CompressorHandle: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Compression.COMPRESSOR_HANDLE */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libCabinet_dll.ResetCompressor(util.toPointer(CompressorHandle)));
}

export function CloseCompressor(
  CompressorHandle: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Storage.Compression.COMPRESSOR_HANDLE */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libCabinet_dll.CloseCompressor(util.toPointer(CompressorHandle)));
}

export function CreateDecompressor(
  Algorithm: COMPRESS_ALGORITHM /* Windows.Win32.Storage.Compression.COMPRESS_ALGORITHM */,
  AllocationRoutines: Deno.PointerValue | Uint8Array | null /* ptr */,
  DecompressorHandle: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libCabinet_dll.CreateDecompressor(Algorithm, util.toPointer(AllocationRoutines), util.toPointer(DecompressorHandle)));
}

export function SetDecompressorInformation(
  DecompressorHandle: Deno.PointerValue /* isize */,
  CompressInformationClass: COMPRESS_INFORMATION_CLASS /* Windows.Win32.Storage.Compression.COMPRESS_INFORMATION_CLASS */,
  CompressInformation: Deno.PointerValue | Uint8Array | null /* ptr */,
  CompressInformationSize: Deno.PointerValue /* usize */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libCabinet_dll.SetDecompressorInformation(DecompressorHandle, CompressInformationClass, util.toPointer(CompressInformation), CompressInformationSize));
}

export function QueryDecompressorInformation(
  DecompressorHandle: Deno.PointerValue /* isize */,
  CompressInformationClass: COMPRESS_INFORMATION_CLASS /* Windows.Win32.Storage.Compression.COMPRESS_INFORMATION_CLASS */,
  CompressInformation: Deno.PointerValue | Uint8Array | null /* ptr */,
  CompressInformationSize: Deno.PointerValue /* usize */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libCabinet_dll.QueryDecompressorInformation(DecompressorHandle, CompressInformationClass, util.toPointer(CompressInformation), CompressInformationSize));
}

export function Decompress(
  DecompressorHandle: Deno.PointerValue /* isize */,
  CompressedData: Deno.PointerValue | Uint8Array | null /* ptr */,
  CompressedDataSize: Deno.PointerValue /* usize */,
  UncompressedBuffer: Deno.PointerValue | Uint8Array | null /* ptr */,
  UncompressedBufferSize: Deno.PointerValue /* usize */,
  UncompressedDataSize: Deno.PointerValue | Uint8Array | null /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libCabinet_dll.Decompress(DecompressorHandle, util.toPointer(CompressedData), CompressedDataSize, util.toPointer(UncompressedBuffer), UncompressedBufferSize, util.toPointer(UncompressedDataSize)));
}

export function ResetDecompressor(
  DecompressorHandle: Deno.PointerValue /* isize */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libCabinet_dll.ResetDecompressor(DecompressorHandle));
}

export function CloseDecompressor(
  DecompressorHandle: Deno.PointerValue /* isize */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libCabinet_dll.CloseDecompressor(DecompressorHandle));
}

