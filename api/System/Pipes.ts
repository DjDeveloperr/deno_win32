/// Auto-generated by Deno Win32: Windows.Win32.System.Pipes.Apis

import * as util from "../../util.ts";

// Enums
export type NAMED_PIPE_MODE = number;
export type FILE_FLAGS_AND_ATTRIBUTES = number;

// Constants
export const PIPE_WAIT = 0;
export const PIPE_NOWAIT = 1;
export const PIPE_READMODE_BYTE = 0;
export const PIPE_READMODE_MESSAGE = 2;
export const PIPE_CLIENT_END = 0;
export const PIPE_SERVER_END = 1;
export const PIPE_TYPE_BYTE = 0;
export const PIPE_TYPE_MESSAGE = 4;
export const PIPE_ACCEPT_REMOTE_CLIENTS = 0;
export const PIPE_REJECT_REMOTE_CLIENTS = 8;
export const PIPE_UNLIMITED_INSTANCES = 255;
export const NMPWAIT_WAIT_FOREVER = 4294967295;
export const NMPWAIT_NOWAIT = 1;
export const NMPWAIT_USE_DEFAULT_WAIT = 0;
export const FILE_ATTRIBUTE_READONLY = 1;
export const FILE_ATTRIBUTE_HIDDEN = 2;
export const FILE_ATTRIBUTE_SYSTEM = 4;
export const FILE_ATTRIBUTE_DIRECTORY = 16;
export const FILE_ATTRIBUTE_ARCHIVE = 32;
export const FILE_ATTRIBUTE_DEVICE = 64;
export const FILE_ATTRIBUTE_NORMAL = 128;
export const FILE_ATTRIBUTE_TEMPORARY = 256;
export const FILE_ATTRIBUTE_SPARSE_FILE = 512;
export const FILE_ATTRIBUTE_REPARSE_POINT = 1024;
export const FILE_ATTRIBUTE_COMPRESSED = 2048;
export const FILE_ATTRIBUTE_OFFLINE = 4096;
export const FILE_ATTRIBUTE_NOT_CONTENT_INDEXED = 8192;
export const FILE_ATTRIBUTE_ENCRYPTED = 16384;
export const FILE_ATTRIBUTE_INTEGRITY_STREAM = 32768;
export const FILE_ATTRIBUTE_VIRTUAL = 65536;
export const FILE_ATTRIBUTE_NO_SCRUB_DATA = 131072;
export const FILE_ATTRIBUTE_EA = 262144;
export const FILE_ATTRIBUTE_PINNED = 524288;
export const FILE_ATTRIBUTE_UNPINNED = 1048576;
export const FILE_ATTRIBUTE_RECALL_ON_OPEN = 262144;
export const FILE_ATTRIBUTE_RECALL_ON_DATA_ACCESS = 4194304;
export const FILE_FLAG_WRITE_THROUGH = 2147483648;
export const FILE_FLAG_OVERLAPPED = 1073741824;
export const FILE_FLAG_NO_BUFFERING = 536870912;
export const FILE_FLAG_RANDOM_ACCESS = 268435456;
export const FILE_FLAG_SEQUENTIAL_SCAN = 134217728;
export const FILE_FLAG_DELETE_ON_CLOSE = 67108864;
export const FILE_FLAG_BACKUP_SEMANTICS = 33554432;
export const FILE_FLAG_POSIX_SEMANTICS = 16777216;
export const FILE_FLAG_SESSION_AWARE = 8388608;
export const FILE_FLAG_OPEN_REPARSE_POINT = 2097152;
export const FILE_FLAG_OPEN_NO_RECALL = 1048576;
export const FILE_FLAG_FIRST_PIPE_INSTANCE = 524288;
export const PIPE_ACCESS_DUPLEX = 3;
export const PIPE_ACCESS_INBOUND = 1;
export const PIPE_ACCESS_OUTBOUND = 2;
export const SECURITY_ANONYMOUS = 0;
export const SECURITY_IDENTIFICATION = 65536;
export const SECURITY_IMPERSONATION = 131072;
export const SECURITY_DELEGATION = 196608;
export const SECURITY_CONTEXT_TRACKING = 262144;
export const SECURITY_EFFECTIVE_ONLY = 524288;
export const SECURITY_SQOS_PRESENT = 1048576;
export const SECURITY_VALID_SQOS_FLAGS = 2031616;

// Structs

export type BOOL = number;

export type HANDLE = bigint | number;

export type PWSTR = Deno.PointerValue | Uint8Array;

export type PSTR = Deno.PointerValue | Uint8Array;

// Native Libraries

try {
  var libKERNEL32_dll = Deno.dlopen("KERNEL32.dll", {
    CreatePipe: {
      parameters: ["pointer", "pointer", "pointer", "u32"],
      result: "i32",
    },
    ConnectNamedPipe: {
      parameters: ["pointer", "pointer"],
      result: "i32",
    },
    DisconnectNamedPipe: {
      parameters: ["pointer"],
      result: "i32",
    },
    SetNamedPipeHandleState: {
      parameters: ["pointer", "pointer", "pointer", "pointer"],
      result: "i32",
    },
    PeekNamedPipe: {
      parameters: ["pointer", "pointer", "u32", "pointer", "pointer", "pointer"],
      result: "i32",
    },
    TransactNamedPipe: {
      parameters: ["pointer", "pointer", "u32", "pointer", "u32", "pointer", "pointer"],
      result: "i32",
    },
    CreateNamedPipeW: {
      parameters: ["buffer", "u32", "u32", "u32", "u32", "u32", "u32", "pointer"],
      result: "pointer",
    },
    WaitNamedPipeW: {
      parameters: ["buffer", "u32"],
      result: "i32",
    },
    GetNamedPipeClientComputerNameW: {
      parameters: ["pointer", "buffer", "u32"],
      result: "i32",
    },
    GetNamedPipeInfo: {
      parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"],
      result: "i32",
    },
    GetNamedPipeHandleStateW: {
      parameters: ["pointer", "pointer", "pointer", "pointer", "pointer", "buffer", "u32"],
      result: "i32",
    },
    CallNamedPipeW: {
      parameters: ["buffer", "pointer", "u32", "pointer", "u32", "pointer", "u32"],
      result: "i32",
    },
    CreateNamedPipeA: {
      parameters: ["buffer", "u32", "u32", "u32", "u32", "u32", "u32", "pointer"],
      result: "pointer",
    },
    GetNamedPipeHandleStateA: {
      parameters: ["pointer", "pointer", "pointer", "pointer", "pointer", "buffer", "u32"],
      result: "i32",
    },
    CallNamedPipeA: {
      parameters: ["buffer", "pointer", "u32", "pointer", "u32", "pointer", "u32"],
      result: "i32",
    },
    WaitNamedPipeA: {
      parameters: ["buffer", "u32"],
      result: "i32",
    },
    GetNamedPipeClientComputerNameA: {
      parameters: ["pointer", "buffer", "u32"],
      result: "i32",
    },
    GetNamedPipeClientProcessId: {
      parameters: ["pointer", "pointer"],
      result: "i32",
    },
    GetNamedPipeClientSessionId: {
      parameters: ["pointer", "pointer"],
      result: "i32",
    },
    GetNamedPipeServerProcessId: {
      parameters: ["pointer", "pointer"],
      result: "i32",
    },
    GetNamedPipeServerSessionId: {
      parameters: ["pointer", "pointer"],
      result: "i32",
    },
  }).symbols;
} catch(e) { /* ignore */ }

try {
  var libADVAPI32_dll = Deno.dlopen("ADVAPI32.dll", {
    ImpersonateNamedPipeClient: {
      parameters: ["pointer"],
      result: "i32",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function CreatePipe(
  hReadPipe: Deno.PointerValue | Uint8Array /* ptr */,
  hWritePipe: Deno.PointerValue | Uint8Array /* ptr */,
  lpPipeAttributes: Deno.PointerValue | Uint8Array /* ptr */,
  nSize: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.CreatePipe(util.toPointer(hReadPipe), util.toPointer(hWritePipe), util.toPointer(lpPipeAttributes), nSize));
}

export function ConnectNamedPipe(
  hNamedPipe: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  lpOverlapped: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.ConnectNamedPipe(util.toPointer(hNamedPipe), util.toPointer(lpOverlapped)));
}

export function DisconnectNamedPipe(
  hNamedPipe: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.DisconnectNamedPipe(util.toPointer(hNamedPipe)));
}

export function SetNamedPipeHandleState(
  hNamedPipe: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  lpMode: Deno.PointerValue | Uint8Array /* ptr */,
  lpMaxCollectionCount: Deno.PointerValue | Uint8Array /* ptr */,
  lpCollectDataTimeout: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.SetNamedPipeHandleState(util.toPointer(hNamedPipe), util.toPointer(lpMode), util.toPointer(lpMaxCollectionCount), util.toPointer(lpCollectDataTimeout)));
}

export function PeekNamedPipe(
  hNamedPipe: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  lpBuffer: Deno.PointerValue | Uint8Array /* ptr */,
  nBufferSize: number /* u32 */,
  lpBytesRead: Deno.PointerValue | Uint8Array /* ptr */,
  lpTotalBytesAvail: Deno.PointerValue | Uint8Array /* ptr */,
  lpBytesLeftThisMessage: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.PeekNamedPipe(util.toPointer(hNamedPipe), util.toPointer(lpBuffer), nBufferSize, util.toPointer(lpBytesRead), util.toPointer(lpTotalBytesAvail), util.toPointer(lpBytesLeftThisMessage)));
}

export function TransactNamedPipe(
  hNamedPipe: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  lpInBuffer: Deno.PointerValue | Uint8Array /* ptr */,
  nInBufferSize: number /* u32 */,
  lpOutBuffer: Deno.PointerValue | Uint8Array /* ptr */,
  nOutBufferSize: number /* u32 */,
  lpBytesRead: Deno.PointerValue | Uint8Array /* ptr */,
  lpOverlapped: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.TransactNamedPipe(util.toPointer(hNamedPipe), util.toPointer(lpInBuffer), nInBufferSize, util.toPointer(lpOutBuffer), nOutBufferSize, util.toPointer(lpBytesRead), util.toPointer(lpOverlapped)));
}

export function CreateNamedPipeW(
  lpName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  dwOpenMode: FILE_FLAGS_AND_ATTRIBUTES /* Windows.Win32.Storage.FileSystem.FILE_FLAGS_AND_ATTRIBUTES */,
  dwPipeMode: NAMED_PIPE_MODE /* Windows.Win32.System.Pipes.NAMED_PIPE_MODE */,
  nMaxInstances: number /* u32 */,
  nOutBufferSize: number /* u32 */,
  nInBufferSize: number /* u32 */,
  nDefaultTimeOut: number /* u32 */,
  lpSecurityAttributes: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */ {
  return libKERNEL32_dll.CreateNamedPipeW(util.pwstrToFfi(lpName), dwOpenMode, dwPipeMode, nMaxInstances, nOutBufferSize, nInBufferSize, nDefaultTimeOut, util.toPointer(lpSecurityAttributes));
}

export function WaitNamedPipeW(
  lpNamedPipeName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  nTimeOut: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.WaitNamedPipeW(util.pwstrToFfi(lpNamedPipeName), nTimeOut));
}

export function GetNamedPipeClientComputerNameW(
  Pipe: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  ClientComputerName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  ClientComputerNameLength: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.GetNamedPipeClientComputerNameW(util.toPointer(Pipe), util.pwstrToFfi(ClientComputerName), ClientComputerNameLength));
}

export function ImpersonateNamedPipeClient(
  hNamedPipe: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libADVAPI32_dll.ImpersonateNamedPipeClient(util.toPointer(hNamedPipe)));
}

export function GetNamedPipeInfo(
  hNamedPipe: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  lpFlags: Deno.PointerValue | Uint8Array /* ptr */,
  lpOutBufferSize: Deno.PointerValue | Uint8Array /* ptr */,
  lpInBufferSize: Deno.PointerValue | Uint8Array /* ptr */,
  lpMaxInstances: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.GetNamedPipeInfo(util.toPointer(hNamedPipe), util.toPointer(lpFlags), util.toPointer(lpOutBufferSize), util.toPointer(lpInBufferSize), util.toPointer(lpMaxInstances)));
}

export function GetNamedPipeHandleStateW(
  hNamedPipe: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  lpState: Deno.PointerValue | Uint8Array /* ptr */,
  lpCurInstances: Deno.PointerValue | Uint8Array /* ptr */,
  lpMaxCollectionCount: Deno.PointerValue | Uint8Array /* ptr */,
  lpCollectDataTimeout: Deno.PointerValue | Uint8Array /* ptr */,
  lpUserName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  nMaxUserNameSize: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.GetNamedPipeHandleStateW(util.toPointer(hNamedPipe), util.toPointer(lpState), util.toPointer(lpCurInstances), util.toPointer(lpMaxCollectionCount), util.toPointer(lpCollectDataTimeout), util.pwstrToFfi(lpUserName), nMaxUserNameSize));
}

export function CallNamedPipeW(
  lpNamedPipeName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  lpInBuffer: Deno.PointerValue | Uint8Array /* ptr */,
  nInBufferSize: number /* u32 */,
  lpOutBuffer: Deno.PointerValue | Uint8Array /* ptr */,
  nOutBufferSize: number /* u32 */,
  lpBytesRead: Deno.PointerValue | Uint8Array /* ptr */,
  nTimeOut: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.CallNamedPipeW(util.pwstrToFfi(lpNamedPipeName), util.toPointer(lpInBuffer), nInBufferSize, util.toPointer(lpOutBuffer), nOutBufferSize, util.toPointer(lpBytesRead), nTimeOut));
}

export function CreateNamedPipeA(
  lpName: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  dwOpenMode: FILE_FLAGS_AND_ATTRIBUTES /* Windows.Win32.Storage.FileSystem.FILE_FLAGS_AND_ATTRIBUTES */,
  dwPipeMode: NAMED_PIPE_MODE /* Windows.Win32.System.Pipes.NAMED_PIPE_MODE */,
  nMaxInstances: number /* u32 */,
  nOutBufferSize: number /* u32 */,
  nInBufferSize: number /* u32 */,
  nDefaultTimeOut: number /* u32 */,
  lpSecurityAttributes: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */ {
  return libKERNEL32_dll.CreateNamedPipeA(util.pstrToFfi(lpName), dwOpenMode, dwPipeMode, nMaxInstances, nOutBufferSize, nInBufferSize, nDefaultTimeOut, util.toPointer(lpSecurityAttributes));
}

export function GetNamedPipeHandleStateA(
  hNamedPipe: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  lpState: Deno.PointerValue | Uint8Array /* ptr */,
  lpCurInstances: Deno.PointerValue | Uint8Array /* ptr */,
  lpMaxCollectionCount: Deno.PointerValue | Uint8Array /* ptr */,
  lpCollectDataTimeout: Deno.PointerValue | Uint8Array /* ptr */,
  lpUserName: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  nMaxUserNameSize: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.GetNamedPipeHandleStateA(util.toPointer(hNamedPipe), util.toPointer(lpState), util.toPointer(lpCurInstances), util.toPointer(lpMaxCollectionCount), util.toPointer(lpCollectDataTimeout), util.pstrToFfi(lpUserName), nMaxUserNameSize));
}

export function CallNamedPipeA(
  lpNamedPipeName: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  lpInBuffer: Deno.PointerValue | Uint8Array /* ptr */,
  nInBufferSize: number /* u32 */,
  lpOutBuffer: Deno.PointerValue | Uint8Array /* ptr */,
  nOutBufferSize: number /* u32 */,
  lpBytesRead: Deno.PointerValue | Uint8Array /* ptr */,
  nTimeOut: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.CallNamedPipeA(util.pstrToFfi(lpNamedPipeName), util.toPointer(lpInBuffer), nInBufferSize, util.toPointer(lpOutBuffer), nOutBufferSize, util.toPointer(lpBytesRead), nTimeOut));
}

export function WaitNamedPipeA(
  lpNamedPipeName: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  nTimeOut: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.WaitNamedPipeA(util.pstrToFfi(lpNamedPipeName), nTimeOut));
}

export function GetNamedPipeClientComputerNameA(
  Pipe: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  ClientComputerName: string | null | Uint8Array /* Windows.Win32.Foundation.PSTR */,
  ClientComputerNameLength: number /* u32 */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.GetNamedPipeClientComputerNameA(util.toPointer(Pipe), util.pstrToFfi(ClientComputerName), ClientComputerNameLength));
}

export function GetNamedPipeClientProcessId(
  Pipe: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  ClientProcessId: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.GetNamedPipeClientProcessId(util.toPointer(Pipe), util.toPointer(ClientProcessId)));
}

export function GetNamedPipeClientSessionId(
  Pipe: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  ClientSessionId: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.GetNamedPipeClientSessionId(util.toPointer(Pipe), util.toPointer(ClientSessionId)));
}

export function GetNamedPipeServerProcessId(
  Pipe: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  ServerProcessId: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.GetNamedPipeServerProcessId(util.toPointer(Pipe), util.toPointer(ServerProcessId)));
}

export function GetNamedPipeServerSessionId(
  Pipe: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  ServerSessionId: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.GetNamedPipeServerSessionId(util.toPointer(Pipe), util.toPointer(ServerSessionId)));
}

