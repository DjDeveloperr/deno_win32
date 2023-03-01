/// Auto-generated by Deno Win32: Windows.Win32.NetworkManagement.Multicast.Apis

import * as util from "../../util.ts";

// Constants
export const MCAST_CLIENT_ID_LEN = 17;
export const MCAST_API_CURRENT_VERSION = 1;
export const MCAST_API_VERSION_0 = 0;
export const MCAST_API_VERSION_1 = 1;

// Structs

/**
 * Windows.Win32.NetworkManagement.Multicast.IPNG_ADDRESS (size: 16)
 */
export interface IPNG_ADDRESS {
  /** u32 */
  IpAddrV4: number;
  /** array */
  IpAddrV6: Deno.PointerValue | null;
}

export const sizeofIPNG_ADDRESS = 16;

export function allocIPNG_ADDRESS(data?: Partial<IPNG_ADDRESS>): Uint8Array {
  const buf = new Uint8Array(sizeofIPNG_ADDRESS);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.IpAddrV4 !== undefined) view.setUint32(0, Number(data.IpAddrV4), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.IpAddrV6 !== undefined) view.setBigUint64(8, data.IpAddrV6 === null ? 0n : util.toBigInt(util.toPointer(data.IpAddrV6)), true);
  return buf;
}

export class IPNG_ADDRESSView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get IpAddrV4(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  get IpAddrV6(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: u32
  set IpAddrV4(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  set IpAddrV6(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, util.toBigInt(util.toPointer(value)), true);
  }
}

/**
 * Windows.Win32.NetworkManagement.Multicast.MCAST_CLIENT_UID (size: 16)
 */
export interface MCAST_CLIENT_UID {
  /** ptr */
  ClientUID: Deno.PointerValue | Uint8Array | null;
  /** u32 */
  ClientUIDLength: number;
}

export const sizeofMCAST_CLIENT_UID = 16;

export function allocMCAST_CLIENT_UID(data?: Partial<MCAST_CLIENT_UID>): Uint8Array {
  const buf = new Uint8Array(sizeofMCAST_CLIENT_UID);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.ClientUID !== undefined) view.setBigUint64(0, data.ClientUID === null ? 0n : util.toBigInt(util.toPointer(data.ClientUID)), true);
  // 0x08: u32
  if (data?.ClientUIDLength !== undefined) view.setUint32(8, Number(data.ClientUIDLength), true);
  // 0x0c: pad4
  return buf;
}

export class MCAST_CLIENT_UIDView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get ClientUID(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x08: u32
  get ClientUIDLength(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: pad4

  // 0x00: pointer
  set ClientUID(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(0, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x08: u32
  set ClientUIDLength(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: pad4
}

/**
 * Windows.Win32.NetworkManagement.Multicast.MCAST_SCOPE_CTX (size: 24)
 */
export interface MCAST_SCOPE_CTX {
  /** Windows.Win32.NetworkManagement.Multicast.IPNG_ADDRESS */
  ScopeID: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.NetworkManagement.Multicast.IPNG_ADDRESS */
  Interface: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.NetworkManagement.Multicast.IPNG_ADDRESS */
  ServerID: Uint8Array | Deno.PointerValue | null;
}

export const sizeofMCAST_SCOPE_CTX = 24;

export function allocMCAST_SCOPE_CTX(data?: Partial<MCAST_SCOPE_CTX>): Uint8Array {
  const buf = new Uint8Array(sizeofMCAST_SCOPE_CTX);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.ScopeID !== undefined) view.setBigUint64(0, data.ScopeID === null ? 0n : util.toBigInt(util.toPointer(data.ScopeID)), true);
  // 0x08: pointer
  if (data?.Interface !== undefined) view.setBigUint64(8, data.Interface === null ? 0n : util.toBigInt(util.toPointer(data.Interface)), true);
  // 0x10: pointer
  if (data?.ServerID !== undefined) view.setBigUint64(16, data.ServerID === null ? 0n : util.toBigInt(util.toPointer(data.ServerID)), true);
  return buf;
}

export class MCAST_SCOPE_CTXView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get ScopeID(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x08: pointer
  get Interface(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: pointer
  get ServerID(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(16, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: pointer
  set ScopeID(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(0, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x08: pointer
  set Interface(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x10: pointer
  set ServerID(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(16, util.toBigInt(util.toPointer(value)), true);
  }
}

export type PWSTR = Deno.PointerValue | Uint8Array | null;

/**
 * Windows.Win32.Foundation.UNICODE_STRING (size: 16)
 */
export interface UNICODE_STRING {
  /** u16 */
  Length: number;
  /** u16 */
  MaximumLength: number;
  /** Windows.Win32.Foundation.PWSTR */
  Buffer: string | null | Uint8Array | Uint16Array;
}

export const sizeofUNICODE_STRING = 16;

export function allocUNICODE_STRING(data?: Partial<UNICODE_STRING>): Uint8Array {
  const buf = new Uint8Array(sizeofUNICODE_STRING);
  const view = new DataView(buf.buffer);
  // 0x00: u16
  if (data?.Length !== undefined) view.setUint16(0, Number(data.Length), true);
  // 0x02: u16
  if (data?.MaximumLength !== undefined) view.setUint16(2, Number(data.MaximumLength), true);
  // 0x04: pad4
  // 0x08: buffer
  if (data?.Buffer !== undefined) {
    (buf as any)._f8 = util.pwstrToFfi(data.Buffer);
    view.setBigUint64(8, (buf as any)._f8 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f8)), true);
  }
  return buf;
}

export class UNICODE_STRINGView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u16
  get Length(): number {
    return this.view.getUint16(0, true);
  }

  // 0x02: u16
  get MaximumLength(): number {
    return this.view.getUint16(2, true);
  }

  // 0x04: pad4

  // 0x08: buffer
  get Buffer(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: u16
  set Length(value: number) {
    this.view.setUint16(0, value, true);
  }

  // 0x02: u16
  set MaximumLength(value: number) {
    this.view.setUint16(2, value, true);
  }

  // 0x04: pad4

  // 0x08: buffer
  set Buffer(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f8 = value;
    this.view.setBigUint64(8, util.toBigInt(util.toPointer((this.buf as any)._f8)), true);
  }
}

/**
 * Windows.Win32.NetworkManagement.Multicast.MCAST_SCOPE_ENTRY (size: 32)
 */
export interface MCAST_SCOPE_ENTRY {
  /** Windows.Win32.NetworkManagement.Multicast.MCAST_SCOPE_CTX */
  ScopeCtx: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.NetworkManagement.Multicast.IPNG_ADDRESS */
  LastAddr: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  TTL: number;
  /** Windows.Win32.Foundation.UNICODE_STRING */
  ScopeDesc: Uint8Array | Deno.PointerValue | null;
}

export const sizeofMCAST_SCOPE_ENTRY = 32;

export function allocMCAST_SCOPE_ENTRY(data?: Partial<MCAST_SCOPE_ENTRY>): Uint8Array {
  const buf = new Uint8Array(sizeofMCAST_SCOPE_ENTRY);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.ScopeCtx !== undefined) view.setBigUint64(0, data.ScopeCtx === null ? 0n : util.toBigInt(util.toPointer(data.ScopeCtx)), true);
  // 0x08: pointer
  if (data?.LastAddr !== undefined) view.setBigUint64(8, data.LastAddr === null ? 0n : util.toBigInt(util.toPointer(data.LastAddr)), true);
  // 0x10: u32
  if (data?.TTL !== undefined) view.setUint32(16, Number(data.TTL), true);
  // 0x14: pad4
  // 0x18: pointer
  if (data?.ScopeDesc !== undefined) view.setBigUint64(24, data.ScopeDesc === null ? 0n : util.toBigInt(util.toPointer(data.ScopeDesc)), true);
  return buf;
}

export class MCAST_SCOPE_ENTRYView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get ScopeCtx(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x08: pointer
  get LastAddr(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: u32
  get TTL(): number {
    return this.view.getUint32(16, true);
  }

  // 0x14: pad4

  // 0x18: pointer
  get ScopeDesc(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(24, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: pointer
  set ScopeCtx(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(0, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x08: pointer
  set LastAddr(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x10: u32
  set TTL(value: number) {
    this.view.setUint32(16, value, true);
  }

  // 0x14: pad4

  // 0x18: pointer
  set ScopeDesc(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(24, util.toBigInt(util.toPointer(value)), true);
  }
}

/**
 * Windows.Win32.NetworkManagement.Multicast.MCAST_LEASE_REQUEST (size: 40)
 */
export interface MCAST_LEASE_REQUEST {
  /** i32 */
  LeaseStartTime: number;
  /** i32 */
  MaxLeaseStartTime: number;
  /** u32 */
  LeaseDuration: number;
  /** u32 */
  MinLeaseDuration: number;
  /** Windows.Win32.NetworkManagement.Multicast.IPNG_ADDRESS */
  ServerAddress: Uint8Array | Deno.PointerValue | null;
  /** u16 */
  MinAddrCount: number;
  /** u16 */
  AddrCount: number;
  /** ptr */
  pAddrBuf: Deno.PointerValue | Uint8Array | null;
}

export const sizeofMCAST_LEASE_REQUEST = 40;

export function allocMCAST_LEASE_REQUEST(data?: Partial<MCAST_LEASE_REQUEST>): Uint8Array {
  const buf = new Uint8Array(sizeofMCAST_LEASE_REQUEST);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.LeaseStartTime !== undefined) view.setInt32(0, Number(data.LeaseStartTime), true);
  // 0x04: i32
  if (data?.MaxLeaseStartTime !== undefined) view.setInt32(4, Number(data.MaxLeaseStartTime), true);
  // 0x08: u32
  if (data?.LeaseDuration !== undefined) view.setUint32(8, Number(data.LeaseDuration), true);
  // 0x0c: u32
  if (data?.MinLeaseDuration !== undefined) view.setUint32(12, Number(data.MinLeaseDuration), true);
  // 0x10: pointer
  if (data?.ServerAddress !== undefined) view.setBigUint64(16, data.ServerAddress === null ? 0n : util.toBigInt(util.toPointer(data.ServerAddress)), true);
  // 0x18: u16
  if (data?.MinAddrCount !== undefined) view.setUint16(24, Number(data.MinAddrCount), true);
  // 0x1a: u16
  if (data?.AddrCount !== undefined) view.setUint16(26, Number(data.AddrCount), true);
  // 0x1c: pad4
  // 0x20: pointer
  if (data?.pAddrBuf !== undefined) view.setBigUint64(32, data.pAddrBuf === null ? 0n : util.toBigInt(util.toPointer(data.pAddrBuf)), true);
  return buf;
}

export class MCAST_LEASE_REQUESTView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: i32
  get LeaseStartTime(): number {
    return this.view.getInt32(0, true);
  }

  // 0x04: i32
  get MaxLeaseStartTime(): number {
    return this.view.getInt32(4, true);
  }

  // 0x08: u32
  get LeaseDuration(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: u32
  get MinLeaseDuration(): number {
    return this.view.getUint32(12, true);
  }

  // 0x10: pointer
  get ServerAddress(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(16, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x18: u16
  get MinAddrCount(): number {
    return this.view.getUint16(24, true);
  }

  // 0x1a: u16
  get AddrCount(): number {
    return this.view.getUint16(26, true);
  }

  // 0x1c: pad4

  // 0x20: pointer
  get pAddrBuf(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(32, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: i32
  set LeaseStartTime(value: number) {
    this.view.setInt32(0, value, true);
  }

  // 0x04: i32
  set MaxLeaseStartTime(value: number) {
    this.view.setInt32(4, value, true);
  }

  // 0x08: u32
  set LeaseDuration(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: u32
  set MinLeaseDuration(value: number) {
    this.view.setUint32(12, value, true);
  }

  // 0x10: pointer
  set ServerAddress(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(16, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x18: u16
  set MinAddrCount(value: number) {
    this.view.setUint16(24, value, true);
  }

  // 0x1a: u16
  set AddrCount(value: number) {
    this.view.setUint16(26, value, true);
  }

  // 0x1c: pad4

  // 0x20: pointer
  set pAddrBuf(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(32, util.toBigInt(util.toPointer(value)), true);
  }
}

/**
 * Windows.Win32.NetworkManagement.Multicast.MCAST_LEASE_RESPONSE (size: 32)
 */
export interface MCAST_LEASE_RESPONSE {
  /** i32 */
  LeaseStartTime: number;
  /** i32 */
  LeaseEndTime: number;
  /** Windows.Win32.NetworkManagement.Multicast.IPNG_ADDRESS */
  ServerAddress: Uint8Array | Deno.PointerValue | null;
  /** u16 */
  AddrCount: number;
  /** ptr */
  pAddrBuf: Deno.PointerValue | Uint8Array | null;
}

export const sizeofMCAST_LEASE_RESPONSE = 32;

export function allocMCAST_LEASE_RESPONSE(data?: Partial<MCAST_LEASE_RESPONSE>): Uint8Array {
  const buf = new Uint8Array(sizeofMCAST_LEASE_RESPONSE);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.LeaseStartTime !== undefined) view.setInt32(0, Number(data.LeaseStartTime), true);
  // 0x04: i32
  if (data?.LeaseEndTime !== undefined) view.setInt32(4, Number(data.LeaseEndTime), true);
  // 0x08: pointer
  if (data?.ServerAddress !== undefined) view.setBigUint64(8, data.ServerAddress === null ? 0n : util.toBigInt(util.toPointer(data.ServerAddress)), true);
  // 0x10: u16
  if (data?.AddrCount !== undefined) view.setUint16(16, Number(data.AddrCount), true);
  // 0x12: pad6
  // 0x18: pointer
  if (data?.pAddrBuf !== undefined) view.setBigUint64(24, data.pAddrBuf === null ? 0n : util.toBigInt(util.toPointer(data.pAddrBuf)), true);
  return buf;
}

export class MCAST_LEASE_RESPONSEView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: i32
  get LeaseStartTime(): number {
    return this.view.getInt32(0, true);
  }

  // 0x04: i32
  get LeaseEndTime(): number {
    return this.view.getInt32(4, true);
  }

  // 0x08: pointer
  get ServerAddress(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: u16
  get AddrCount(): number {
    return this.view.getUint16(16, true);
  }

  // 0x12: pad6

  // 0x18: pointer
  get pAddrBuf(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(24, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: i32
  set LeaseStartTime(value: number) {
    this.view.setInt32(0, value, true);
  }

  // 0x04: i32
  set LeaseEndTime(value: number) {
    this.view.setInt32(4, value, true);
  }

  // 0x08: pointer
  set ServerAddress(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x10: u16
  set AddrCount(value: number) {
    this.view.setUint16(16, value, true);
  }

  // 0x12: pad6

  // 0x18: pointer
  set pAddrBuf(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(24, util.toBigInt(util.toPointer(value)), true);
  }
}

export type BOOL = number;

// Native Libraries

try {
  var libdhcpcsvc_dll = Deno.dlopen("dhcpcsvc.dll", {
    McastApiStartup: {
      parameters: ["pointer"],
      result: "u32",
    },
    McastApiCleanup: {
      parameters: [],
      result: "void",
    },
    McastGenUID: {
      parameters: ["pointer"],
      result: "u32",
    },
    McastEnumerateScopes: {
      parameters: ["u16", "i32", "pointer", "pointer", "pointer"],
      result: "u32",
    },
    McastRequestAddress: {
      parameters: ["u16", "pointer", "pointer", "pointer", "pointer"],
      result: "u32",
    },
    McastRenewAddress: {
      parameters: ["u16", "pointer", "pointer", "pointer"],
      result: "u32",
    },
    McastReleaseAddress: {
      parameters: ["u16", "pointer", "pointer"],
      result: "u32",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function McastApiStartup(
  Version: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libdhcpcsvc_dll.McastApiStartup(util.toPointer(Version));
}

export function McastApiCleanup(): void /* void */ {
  return libdhcpcsvc_dll.McastApiCleanup();
}

export function McastGenUID(
  pRequestID: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libdhcpcsvc_dll.McastGenUID(util.toPointer(pRequestID));
}

export function McastEnumerateScopes(
  AddrFamily: number /* u16 */,
  ReQuery: boolean /* Windows.Win32.Foundation.BOOL */,
  pScopeList: Deno.PointerValue | Uint8Array | null /* ptr */,
  pScopeLen: Deno.PointerValue | Uint8Array | null /* ptr */,
  pScopeCount: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libdhcpcsvc_dll.McastEnumerateScopes(AddrFamily, util.boolToFfi(ReQuery), util.toPointer(pScopeList), util.toPointer(pScopeLen), util.toPointer(pScopeCount));
}

export function McastRequestAddress(
  AddrFamily: number /* u16 */,
  pRequestID: Deno.PointerValue | Uint8Array | null /* ptr */,
  pScopeCtx: Deno.PointerValue | Uint8Array | null /* ptr */,
  pAddrRequest: Deno.PointerValue | Uint8Array | null /* ptr */,
  pAddrResponse: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libdhcpcsvc_dll.McastRequestAddress(AddrFamily, util.toPointer(pRequestID), util.toPointer(pScopeCtx), util.toPointer(pAddrRequest), util.toPointer(pAddrResponse));
}

export function McastRenewAddress(
  AddrFamily: number /* u16 */,
  pRequestID: Deno.PointerValue | Uint8Array | null /* ptr */,
  pRenewRequest: Deno.PointerValue | Uint8Array | null /* ptr */,
  pRenewResponse: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libdhcpcsvc_dll.McastRenewAddress(AddrFamily, util.toPointer(pRequestID), util.toPointer(pRenewRequest), util.toPointer(pRenewResponse));
}

export function McastReleaseAddress(
  AddrFamily: number /* u16 */,
  pRequestID: Deno.PointerValue | Uint8Array | null /* ptr */,
  pReleaseRequest: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libdhcpcsvc_dll.McastReleaseAddress(AddrFamily, util.toPointer(pRequestID), util.toPointer(pReleaseRequest));
}

