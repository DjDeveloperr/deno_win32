/// Auto-generated by Deno Win32: Windows.Win32.NetworkManagement.WebDav.Apis

import * as util from "../../util.ts";

// Enums
export type AUTHNEXTSTEP = number;

// Constants
export const DAV_AUTHN_SCHEME_BASIC = 1;
export const DAV_AUTHN_SCHEME_NTLM = 2;
export const DAV_AUTHN_SCHEME_PASSPORT = 4;
export const DAV_AUTHN_SCHEME_DIGEST = 8;
export const DAV_AUTHN_SCHEME_NEGOTIATE = 16;
export const DAV_AUTHN_SCHEME_CERT = 65536;
export const DAV_AUTHN_SCHEME_FBA = 1048576;
export const DefaultBehavior = 0;
export const RetryRequest = 1;
export const CancelRequest = 2;

// Structs

/**
 * Windows.Win32.NetworkManagement.WebDav.DAV_CALLBACK_AUTH_BLOB (size: 16)
 */
export interface DAV_CALLBACK_AUTH_BLOB {
  /** ptr */
  pBuffer: Deno.PointerValue | Uint8Array;
  /** u32 */
  ulSize: number;
  /** u32 */
  ulType: number;
}

export const sizeofDAV_CALLBACK_AUTH_BLOB = 16;

export function allocDAV_CALLBACK_AUTH_BLOB(data?: Partial<DAV_CALLBACK_AUTH_BLOB>): Uint8Array {
  const buf = new Uint8Array(sizeofDAV_CALLBACK_AUTH_BLOB);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.pBuffer !== undefined) view.setBigUint64(0, data.pBuffer === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.pBuffer))), true);
  // 0x08: u32
  if (data?.ulSize !== undefined) view.setUint32(8, Number(data.ulSize), true);
  // 0x0c: u32
  if (data?.ulType !== undefined) view.setUint32(12, Number(data.ulType), true);
  return buf;
}

export class DAV_CALLBACK_AUTH_BLOBView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get pBuffer(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(0, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x08: u32
  get ulSize(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: u32
  get ulType(): number {
    return this.view.getUint32(12, true);
  }

  // 0x00: pointer
  set pBuffer(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x08: u32
  set ulSize(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: u32
  set ulType(value: number) {
    this.view.setUint32(12, value, true);
  }
}

export type PWSTR = Deno.PointerValue | Uint8Array;

/**
 * Windows.Win32.NetworkManagement.WebDav.DAV_CALLBACK_AUTH_UNP (size: 32)
 */
export interface DAV_CALLBACK_AUTH_UNP {
  /** Windows.Win32.Foundation.PWSTR */
  pszUserName: string | null | Uint8Array | Uint16Array;
  /** u32 */
  ulUserNameLength: number;
  /** Windows.Win32.Foundation.PWSTR */
  pszPassword: string | null | Uint8Array | Uint16Array;
  /** u32 */
  ulPasswordLength: number;
}

export const sizeofDAV_CALLBACK_AUTH_UNP = 32;

export function allocDAV_CALLBACK_AUTH_UNP(data?: Partial<DAV_CALLBACK_AUTH_UNP>): Uint8Array {
  const buf = new Uint8Array(sizeofDAV_CALLBACK_AUTH_UNP);
  const view = new DataView(buf.buffer);
  // 0x00: buffer
  if (data?.pszUserName !== undefined) {
    (buf as any)._f0 = util.pwstrToFfi(data.pszUserName);
    view.setBigUint64(0, (buf as any)._f0 === null ? 0n : BigInt(Deno.UnsafePointer.value(Deno.UnsafePointer.of((buf as any)._f0))), true);
  }
  // 0x08: u32
  if (data?.ulUserNameLength !== undefined) view.setUint32(8, Number(data.ulUserNameLength), true);
  // 0x0c: pad4
  // 0x10: buffer
  if (data?.pszPassword !== undefined) {
    (buf as any)._f16 = util.pwstrToFfi(data.pszPassword);
    view.setBigUint64(16, (buf as any)._f16 === null ? 0n : BigInt(Deno.UnsafePointer.value(Deno.UnsafePointer.of((buf as any)._f16))), true);
  }
  // 0x18: u32
  if (data?.ulPasswordLength !== undefined) view.setUint32(24, Number(data.ulPasswordLength), true);
  // 0x1c: pad4
  return buf;
}

export class DAV_CALLBACK_AUTH_UNPView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: buffer
  get pszUserName(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(0, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x08: u32
  get ulUserNameLength(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: pad4

  // 0x10: buffer
  get pszPassword(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(16, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x18: u32
  get ulPasswordLength(): number {
    return this.view.getUint32(24, true);
  }

  // 0x1c: pad4

  // 0x00: buffer
  set pszUserName(value: Uint8Array | Deno.PointerValue) {
    (this.buf as any)._f0 = value;
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(util.toPointer((this.buf as any)._f0))), true);
  }

  // 0x08: u32
  set ulUserNameLength(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: pad4

  // 0x10: buffer
  set pszPassword(value: Uint8Array | Deno.PointerValue) {
    (this.buf as any)._f16 = value;
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(util.toPointer((this.buf as any)._f16))), true);
  }

  // 0x18: u32
  set ulPasswordLength(value: number) {
    this.view.setUint32(24, value, true);
  }

  // 0x1c: pad4
}

export type BOOL = number;

/**
 * Windows.Win32.NetworkManagement.WebDav.DAV_CALLBACK_CRED (size: 24)
 */
export interface DAV_CALLBACK_CRED {
  /** Windows.Win32.NetworkManagement.WebDav.DAV_CALLBACK_AUTH_BLOB */
  AuthBlob: Uint8Array | Deno.PointerValue;
  /** Windows.Win32.NetworkManagement.WebDav.DAV_CALLBACK_AUTH_UNP */
  UNPBlob: Uint8Array | Deno.PointerValue;
  /** Windows.Win32.Foundation.BOOL */
  bAuthBlobValid: boolean;
  /** Windows.Win32.Foundation.BOOL */
  bSave: boolean;
}

export const sizeofDAV_CALLBACK_CRED = 24;

export function allocDAV_CALLBACK_CRED(data?: Partial<DAV_CALLBACK_CRED>): Uint8Array {
  const buf = new Uint8Array(sizeofDAV_CALLBACK_CRED);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.AuthBlob !== undefined) view.setBigUint64(0, data.AuthBlob === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.AuthBlob))), true);
  // 0x08: pointer
  if (data?.UNPBlob !== undefined) view.setBigUint64(8, data.UNPBlob === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.UNPBlob))), true);
  // 0x10: i32
  if (data?.bAuthBlobValid !== undefined) view.setInt32(16, Number(data.bAuthBlobValid), true);
  // 0x14: i32
  if (data?.bSave !== undefined) view.setInt32(20, Number(data.bSave), true);
  return buf;
}

export class DAV_CALLBACK_CREDView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get AuthBlob(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(0, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x08: pointer
  get UNPBlob(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x10: i32
  get bAuthBlobValid(): number {
    return this.view.getInt32(16, true);
  }

  // 0x14: i32
  get bSave(): number {
    return this.view.getInt32(20, true);
  }

  // 0x00: pointer
  set AuthBlob(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x08: pointer
  set UNPBlob(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x10: i32
  set bAuthBlobValid(value: number) {
    this.view.setInt32(16, value, true);
  }

  // 0x14: i32
  set bSave(value: number) {
    this.view.setInt32(20, value, true);
  }
}

export type HANDLE = bigint | number;

// Native Libraries

try {
  var libNETAPI32_dll = Deno.dlopen("NETAPI32.dll", {
    DavAddConnection: {
      parameters: ["pointer", "buffer", "buffer", "buffer", "pointer", "u32"],
      result: "u32",
    },
    DavDeleteConnection: {
      parameters: ["pointer"],
      result: "u32",
    },
    DavGetUNCFromHTTPPath: {
      parameters: ["buffer", "buffer", "pointer"],
      result: "u32",
    },
    DavGetHTTPFromUNCPath: {
      parameters: ["buffer", "buffer", "pointer"],
      result: "u32",
    },
    DavGetExtendedError: {
      parameters: ["pointer", "pointer", "buffer", "pointer"],
      result: "u32",
    },
    DavFlushFile: {
      parameters: ["pointer"],
      result: "u32",
    },
  }).symbols;
} catch(e) { /* ignore */ }

try {
  var libdavclnt_dll = Deno.dlopen("davclnt.dll", {
    DavGetTheLockOwnerOfTheFile: {
      parameters: ["buffer", "buffer", "pointer"],
      result: "u32",
    },
    DavInvalidateCache: {
      parameters: ["buffer"],
      result: "u32",
    },
    DavCancelConnectionsToServer: {
      parameters: ["buffer", "i32"],
      result: "u32",
    },
    DavRegisterAuthCallback: {
      parameters: ["pointer", "u32"],
      result: "u32",
    },
    DavUnregisterAuthCallback: {
      parameters: ["u32"],
      result: "void",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function DavAddConnection(
  ConnectionHandle: Deno.PointerValue | Uint8Array /* ptr */,
  RemoteName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  UserName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  Password: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  ClientCert: Deno.PointerValue | Uint8Array /* ptr */,
  CertSize: number /* u32 */,
): number /* u32 */ {
  return libNETAPI32_dll.DavAddConnection(util.toPointer(ConnectionHandle), util.pwstrToFfi(RemoteName), util.pwstrToFfi(UserName), util.pwstrToFfi(Password), util.toPointer(ClientCert), CertSize);
}

export function DavDeleteConnection(
  ConnectionHandle: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
): number /* u32 */ {
  return libNETAPI32_dll.DavDeleteConnection(util.toPointer(ConnectionHandle));
}

export function DavGetUNCFromHTTPPath(
  Url: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  UncPath: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  lpSize: Deno.PointerValue | Uint8Array /* ptr */,
): number /* u32 */ {
  return libNETAPI32_dll.DavGetUNCFromHTTPPath(util.pwstrToFfi(Url), util.pwstrToFfi(UncPath), util.toPointer(lpSize));
}

export function DavGetHTTPFromUNCPath(
  UncPath: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  Url: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  lpSize: Deno.PointerValue | Uint8Array /* ptr */,
): number /* u32 */ {
  return libNETAPI32_dll.DavGetHTTPFromUNCPath(util.pwstrToFfi(UncPath), util.pwstrToFfi(Url), util.toPointer(lpSize));
}

export function DavGetTheLockOwnerOfTheFile(
  FileName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  LockOwnerName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  LockOwnerNameLengthInBytes: Deno.PointerValue | Uint8Array /* ptr */,
): number /* u32 */ {
  return libdavclnt_dll.DavGetTheLockOwnerOfTheFile(util.pwstrToFfi(FileName), util.pwstrToFfi(LockOwnerName), util.toPointer(LockOwnerNameLengthInBytes));
}

export function DavGetExtendedError(
  hFile: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  ExtError: Deno.PointerValue | Uint8Array /* ptr */,
  ExtErrorString: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  cChSize: Deno.PointerValue | Uint8Array /* ptr */,
): number /* u32 */ {
  return libNETAPI32_dll.DavGetExtendedError(util.toPointer(hFile), util.toPointer(ExtError), util.pwstrToFfi(ExtErrorString), util.toPointer(cChSize));
}

export function DavFlushFile(
  hFile: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
): number /* u32 */ {
  return libNETAPI32_dll.DavFlushFile(util.toPointer(hFile));
}

export function DavInvalidateCache(
  URLName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): number /* u32 */ {
  return libdavclnt_dll.DavInvalidateCache(util.pwstrToFfi(URLName));
}

export function DavCancelConnectionsToServer(
  lpName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  fForce: boolean /* Windows.Win32.Foundation.BOOL */,
): number /* u32 */ {
  return libdavclnt_dll.DavCancelConnectionsToServer(util.pwstrToFfi(lpName), util.boolToFfi(fForce));
}

export function DavRegisterAuthCallback(
  CallBack: Uint8Array | Deno.PointerValue /* Windows.Win32.NetworkManagement.WebDav.PFNDAVAUTHCALLBACK */,
  Version: number /* u32 */,
): number /* u32 */ {
  return libdavclnt_dll.DavRegisterAuthCallback(util.toPointer(CallBack), Version);
}

export function DavUnregisterAuthCallback(
  hCallback: number /* u32 */,
): void /* void */ {
  return libdavclnt_dll.DavUnregisterAuthCallback(hCallback);
}

