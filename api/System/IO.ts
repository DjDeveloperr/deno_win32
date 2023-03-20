/// Auto-generated by Deno Win32: Windows.Win32.System.IO.Apis

import * as util from "../../util.ts";

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

export type HANDLE = bigint | number;

/**
 * Windows.Win32.System.IO.OVERLAPPED (size: 32)
 */
export interface OVERLAPPED {
  /** usize */
  Internal: bigint | number;
  /** usize */
  InternalHigh: bigint | number;
  /** _Anonymous_e__Union */
  Anonymous: Uint8Array | Deno.PointerValue;
  /** Windows.Win32.Foundation.HANDLE */
  hEvent: Uint8Array | Deno.PointerValue;
}

export const sizeofOVERLAPPED = 32;

export function allocOVERLAPPED(data?: Partial<OVERLAPPED>): Uint8Array {
  const buf = new Uint8Array(sizeofOVERLAPPED);
  const view = new DataView(buf.buffer);
  // 0x00: usize
  if (data?.Internal !== undefined) view.setBigUint64(0, BigInt(data.Internal), true);
  // 0x08: usize
  if (data?.InternalHigh !== undefined) view.setBigUint64(8, BigInt(data.InternalHigh), true);
  // 0x10: pointer
  if (data?.Anonymous !== undefined) view.setBigUint64(16, data.Anonymous === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.Anonymous))), true);
  // 0x18: pointer
  if (data?.hEvent !== undefined) view.setBigUint64(24, data.hEvent === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.hEvent))), true);
  return buf;
}

export class OVERLAPPEDView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: usize
  get Internal(): bigint | number {
    return Number(this.view.getBigUint64(0, true));
  }

  // 0x08: usize
  get InternalHigh(): bigint | number {
    return Number(this.view.getBigUint64(8, true));
  }

  // 0x10: pointer
  get Anonymous(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(16, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x18: pointer
  get hEvent(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(24, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: usize
  set Internal(value: bigint | number) {
    this.view.setBigUint64(0, BigInt(value), true);
  }

  // 0x08: usize
  set InternalHigh(value: bigint | number) {
    this.view.setBigUint64(8, BigInt(value), true);
  }

  // 0x10: pointer
  set Anonymous(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x18: pointer
  set hEvent(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }
}

/**
 * Windows.Win32.System.IO.OVERLAPPED_ENTRY (size: 32)
 */
export interface OVERLAPPED_ENTRY {
  /** usize */
  lpCompletionKey: bigint | number;
  /** ptr */
  lpOverlapped: Deno.PointerValue | Uint8Array;
  /** usize */
  Internal: bigint | number;
  /** u32 */
  dwNumberOfBytesTransferred: number;
}

export const sizeofOVERLAPPED_ENTRY = 32;

export function allocOVERLAPPED_ENTRY(data?: Partial<OVERLAPPED_ENTRY>): Uint8Array {
  const buf = new Uint8Array(sizeofOVERLAPPED_ENTRY);
  const view = new DataView(buf.buffer);
  // 0x00: usize
  if (data?.lpCompletionKey !== undefined) view.setBigUint64(0, BigInt(data.lpCompletionKey), true);
  // 0x08: pointer
  if (data?.lpOverlapped !== undefined) view.setBigUint64(8, data.lpOverlapped === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.lpOverlapped))), true);
  // 0x10: usize
  if (data?.Internal !== undefined) view.setBigUint64(16, BigInt(data.Internal), true);
  // 0x18: u32
  if (data?.dwNumberOfBytesTransferred !== undefined) view.setUint32(24, Number(data.dwNumberOfBytesTransferred), true);
  // 0x1c: pad4
  return buf;
}

export class OVERLAPPED_ENTRYView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: usize
  get lpCompletionKey(): bigint | number {
    return Number(this.view.getBigUint64(0, true));
  }

  // 0x08: pointer
  get lpOverlapped(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x10: usize
  get Internal(): bigint | number {
    return Number(this.view.getBigUint64(16, true));
  }

  // 0x18: u32
  get dwNumberOfBytesTransferred(): number {
    return this.view.getUint32(24, true);
  }

  // 0x1c: pad4

  // 0x00: usize
  set lpCompletionKey(value: bigint | number) {
    this.view.setBigUint64(0, BigInt(value), true);
  }

  // 0x08: pointer
  set lpOverlapped(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x10: usize
  set Internal(value: bigint | number) {
    this.view.setBigUint64(16, BigInt(value), true);
  }

  // 0x18: u32
  set dwNumberOfBytesTransferred(value: number) {
    this.view.setUint32(24, value, true);
  }

  // 0x1c: pad4
}

export type BOOL = number;

// Native Libraries

try {
  var libKERNEL32_dll = Deno.dlopen("KERNEL32.dll", {
    CreateIoCompletionPort: {
      parameters: ["pointer", "pointer", "usize", "u32"],
      result: "pointer",
    },
    GetQueuedCompletionStatus: {
      parameters: ["pointer", "pointer", "pointer", "pointer", "u32"],
      result: "i32",
    },
    GetQueuedCompletionStatusEx: {
      parameters: ["pointer", "pointer", "u32", "pointer", "u32", "i32"],
      result: "i32",
    },
    PostQueuedCompletionStatus: {
      parameters: ["pointer", "u32", "usize", "pointer"],
      result: "i32",
    },
    DeviceIoControl: {
      parameters: ["pointer", "u32", "pointer", "u32", "pointer", "u32", "pointer", "pointer"],
      result: "i32",
    },
    GetOverlappedResult: {
      parameters: ["pointer", "pointer", "pointer", "i32"],
      result: "i32",
    },
    GetOverlappedResultAsync: {
      name: "GetOverlappedResult",
      nonblocking: true,
      parameters: ["pointer", "pointer", "pointer", "i32"],
      result: "i32",
    },
    CancelIoEx: {
      parameters: ["pointer", "pointer"],
      result: "i32",
    },
    CancelIo: {
      parameters: ["pointer"],
      result: "i32",
    },
    GetOverlappedResultEx: {
      parameters: ["pointer", "pointer", "pointer", "u32", "i32"],
      result: "i32",
    },
    CancelSynchronousIo: {
      parameters: ["pointer"],
      result: "i32",
    },
    BindIoCompletionCallback: {
      parameters: ["pointer", "pointer", "u32"],
      result: "i32",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function CreateIoCompletionPort(
  FileHandle: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  ExistingCompletionPort: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  CompletionKey: bigint | number /* usize */,
  NumberOfConcurrentThreads: number /* u32 */,
): Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */ {
  return libKERNEL32_dll.CreateIoCompletionPort(util.toPointer(FileHandle), util.toPointer(ExistingCompletionPort), CompletionKey, NumberOfConcurrentThreads);
}

export function GetQueuedCompletionStatus(
  CompletionPort: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  lpNumberOfBytesTransferred: Deno.PointerValue | Uint8Array /* ptr */,
  lpCompletionKey: Deno.PointerValue | Uint8Array /* ptr */,
  lpOverlapped: Deno.PointerValue | Uint8Array /* ptr */,
  dwMilliseconds: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.GetQueuedCompletionStatus(util.toPointer(CompletionPort), util.toPointer(lpNumberOfBytesTransferred), util.toPointer(lpCompletionKey), util.toPointer(lpOverlapped), dwMilliseconds));
}

export function GetQueuedCompletionStatusEx(
  CompletionPort: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  lpCompletionPortEntries: Deno.PointerValue | Uint8Array /* ptr */,
  ulCount: number /* u32 */,
  ulNumEntriesRemoved: Deno.PointerValue | Uint8Array /* ptr */,
  dwMilliseconds: number /* u32 */,
  fAlertable: boolean /* Windows.Win32.Foundation.BOOL */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.GetQueuedCompletionStatusEx(util.toPointer(CompletionPort), util.toPointer(lpCompletionPortEntries), ulCount, util.toPointer(ulNumEntriesRemoved), dwMilliseconds, util.boolToFfi(fAlertable)));
}

export function PostQueuedCompletionStatus(
  CompletionPort: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  dwNumberOfBytesTransferred: number /* u32 */,
  dwCompletionKey: bigint | number /* usize */,
  lpOverlapped: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.PostQueuedCompletionStatus(util.toPointer(CompletionPort), dwNumberOfBytesTransferred, dwCompletionKey, util.toPointer(lpOverlapped)));
}

export function DeviceIoControl(
  hDevice: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  dwIoControlCode: number /* u32 */,
  lpInBuffer: Deno.PointerValue | Uint8Array /* ptr */,
  nInBufferSize: number /* u32 */,
  lpOutBuffer: Deno.PointerValue | Uint8Array /* ptr */,
  nOutBufferSize: number /* u32 */,
  lpBytesReturned: Deno.PointerValue | Uint8Array /* ptr */,
  lpOverlapped: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.DeviceIoControl(util.toPointer(hDevice), dwIoControlCode, util.toPointer(lpInBuffer), nInBufferSize, util.toPointer(lpOutBuffer), nOutBufferSize, util.toPointer(lpBytesReturned), util.toPointer(lpOverlapped)));
}

export function GetOverlappedResult(
  hFile: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  lpOverlapped: Deno.PointerValue | Uint8Array /* ptr */,
  lpNumberOfBytesTransferred: Deno.PointerValue | Uint8Array /* ptr */,
  bWait: boolean /* Windows.Win32.Foundation.BOOL */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.GetOverlappedResult(util.toPointer(hFile), util.toPointer(lpOverlapped), util.toPointer(lpNumberOfBytesTransferred), util.boolToFfi(bWait)));
}

export async function GetOverlappedResultAsync(
  hFile: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  lpOverlapped: Deno.PointerValue | Uint8Array /* ptr */,
  lpNumberOfBytesTransferred: Deno.PointerValue | Uint8Array /* ptr */,
  bWait: boolean /* Windows.Win32.Foundation.BOOL */,
): Promise<boolean> /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(await libKERNEL32_dll.GetOverlappedResultAsync(util.toPointer(hFile), util.toPointer(lpOverlapped), util.toPointer(lpNumberOfBytesTransferred), util.boolToFfi(bWait)));
}

export function CancelIoEx(
  hFile: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  lpOverlapped: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.CancelIoEx(util.toPointer(hFile), util.toPointer(lpOverlapped)));
}

export function CancelIo(
  hFile: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.CancelIo(util.toPointer(hFile)));
}

export function GetOverlappedResultEx(
  hFile: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  lpOverlapped: Deno.PointerValue | Uint8Array /* ptr */,
  lpNumberOfBytesTransferred: Deno.PointerValue | Uint8Array /* ptr */,
  dwMilliseconds: number /* u32 */,
  bAlertable: boolean /* Windows.Win32.Foundation.BOOL */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.GetOverlappedResultEx(util.toPointer(hFile), util.toPointer(lpOverlapped), util.toPointer(lpNumberOfBytesTransferred), dwMilliseconds, util.boolToFfi(bAlertable)));
}

export function CancelSynchronousIo(
  hThread: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.CancelSynchronousIo(util.toPointer(hThread)));
}

export function BindIoCompletionCallback(
  FileHandle: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  Function: Uint8Array | Deno.PointerValue /* Windows.Win32.System.IO.LPOVERLAPPED_COMPLETION_ROUTINE */,
  Flags: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.BindIoCompletionCallback(util.toPointer(FileHandle), util.toPointer(Function), Flags));
}

