/// Auto-generated by Deno Win32: Windows.Win32.Security.Authorization.UI.Apis

import * as util from "../../../util.ts";

// Enums
export type SECURITY_INFO_PAGE_FLAGS = number;
export type SI_OBJECT_INFO_FLAGS = number;
export type ACE_FLAGS = number;
export type SI_PAGE_TYPE = number;
export type SI_PAGE_ACTIVATED = number;

// Constants
export const SI_ADVANCED = 16;
export const SI_EDIT_AUDITS = 2;
export const SI_EDIT_PROPERTIES = 128;
export const SI_AUDITS_ELEVATION_REQUIRED = 33554432;
export const SI_DISABLE_DENY_ACE = 2147483648;
export const SI_EDIT_EFFECTIVE = 131072;
export const SI_ENABLE_CENTRAL_POLICY = 1073741824;
export const SI_ENABLE_EDIT_ATTRIBUTE_CONDITION = 536870912;
export const SI_MAY_WRITE = 268435456;
export const SI_NO_ADDITIONAL_PERMISSION = 2097152;
export const SI_OWNER_ELEVATION_REQUIRED = 67108864;
export const SI_PERMS_ELEVATION_REQUIRED = 16777216;
export const SI_RESET_DACL = 262144;
export const SI_RESET_OWNER = 1048576;
export const SI_RESET_SACL = 524288;
export const SI_SCOPE_ELEVATION_REQUIRED = 134217728;
export const SI_VIEW_ONLY = 4194304;
export const SI_EDIT_PERMS = 0;
export const SI_EDIT_OWNER = 1;
export const SI_CONTAINER = 4;
export const SI_READONLY = 8;
export const SI_RESET = 32;
export const SI_OWNER_READONLY = 64;
export const SI_OWNER_RECURSE = 256;
export const SI_NO_ACL_PROTECT = 512;
export const SI_NO_TREE_APPLY = 1024;
export const SI_PAGE_TITLE = 2048;
export const SI_SERVER_IS_DC = 4096;
export const SI_RESET_DACL_TREE = 16384;
export const SI_RESET_SACL_TREE = 32768;
export const SI_OBJECT_GUID = 65536;
export const SI_ACCESS_SPECIFIC = 65536;
export const SI_ACCESS_GENERAL = 131072;
export const SI_ACCESS_CONTAINER = 262144;
export const SI_ACCESS_PROPERTY = 524288;
export const DOBJ_RES_CONT = 1;
export const DOBJ_RES_ROOT = 2;
export const DOBJ_VOL_NTACLS = 4;
export const DOBJ_COND_NTACLS = 8;
export const DOBJ_RIBBON_LAUNCH = 16;
export const CFSTR_ACLUI_SID_INFO_LIST = `CFSTR_ACLUI_SID_INFO_LIST`;
export const SECURITY_OBJECT_ID_OBJECT_SD = 1;
export const SECURITY_OBJECT_ID_SHARE = 2;
export const SECURITY_OBJECT_ID_CENTRAL_POLICY = 3;
export const SECURITY_OBJECT_ID_CENTRAL_ACCESS_RULE = 4;
export const CONTAINER_INHERIT_ACE = 2;
export const FAILED_ACCESS_ACE_FLAG = 128;
export const INHERIT_ONLY_ACE = 8;
export const INHERITED_ACE = 16;
export const NO_PROPAGATE_INHERIT_ACE = 4;
export const OBJECT_INHERIT_ACE = 1;
export const SUCCESSFUL_ACCESS_ACE_FLAG = 64;
export const SUB_CONTAINERS_AND_OBJECTS_INHERIT = 3;
export const SUB_CONTAINERS_ONLY_INHERIT = 2;
export const SUB_OBJECTS_ONLY_INHERIT = 1;
export const INHERIT_NO_PROPAGATE = 4;
export const INHERIT_ONLY = 8;
export const NO_INHERITANCE = 0;
export const SI_PAGE_PERM = 0;
export const SI_PAGE_ADVPERM = 1;
export const SI_PAGE_AUDIT = 2;
export const SI_PAGE_OWNER = 3;
export const SI_PAGE_EFFECTIVE = 4;
export const SI_PAGE_TAKEOWNERSHIP = 5;
export const SI_PAGE_SHARE = 6;
export const SI_SHOW_DEFAULT = 0;
export const SI_SHOW_PERM_ACTIVATED = 1;
export const SI_SHOW_AUDIT_ACTIVATED = 2;
export const SI_SHOW_OWNER_ACTIVATED = 3;
export const SI_SHOW_EFFECTIVE_ACTIVATED = 4;
export const SI_SHOW_SHARE_ACTIVATED = 5;
export const SI_SHOW_CENTRAL_POLICY_ACTIVATED = 6;

// Structs

export type HINSTANCE = bigint | number;

export type PWSTR = Deno.PointerValue | Uint8Array;

/**
 * Windows.Win32.Security.Authorization.UI.SI_OBJECT_INFO (size: 48)
 */
export interface SI_OBJECT_INFO {
  /** Windows.Win32.Security.Authorization.UI.SI_OBJECT_INFO_FLAGS */
  dwFlags: SI_OBJECT_INFO_FLAGS;
  /** Windows.Win32.Foundation.HINSTANCE */
  hInstance: Uint8Array | Deno.PointerValue;
  /** Windows.Win32.Foundation.PWSTR */
  pszServerName: string | null | Uint8Array | Uint16Array;
  /** Windows.Win32.Foundation.PWSTR */
  pszObjectName: string | null | Uint8Array | Uint16Array;
  /** Windows.Win32.Foundation.PWSTR */
  pszPageTitle: string | null | Uint8Array | Uint16Array;
  /** System.Guid */
  guidObjectType: Uint8Array | Deno.PointerValue;
}

export const sizeofSI_OBJECT_INFO = 48;

export function allocSI_OBJECT_INFO(data?: Partial<SI_OBJECT_INFO>): Uint8Array {
  const buf = new Uint8Array(sizeofSI_OBJECT_INFO);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.dwFlags !== undefined) view.setUint32(0, Number(data.dwFlags), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.hInstance !== undefined) view.setBigUint64(8, data.hInstance === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.hInstance))), true);
  // 0x10: buffer
  if (data?.pszServerName !== undefined) {
    (buf as any)._f16 = util.pwstrToFfi(data.pszServerName);
    view.setBigUint64(16, (buf as any)._f16 === null ? 0n : BigInt(Deno.UnsafePointer.value(Deno.UnsafePointer.of((buf as any)._f16))), true);
  }
  // 0x18: buffer
  if (data?.pszObjectName !== undefined) {
    (buf as any)._f24 = util.pwstrToFfi(data.pszObjectName);
    view.setBigUint64(24, (buf as any)._f24 === null ? 0n : BigInt(Deno.UnsafePointer.value(Deno.UnsafePointer.of((buf as any)._f24))), true);
  }
  // 0x20: buffer
  if (data?.pszPageTitle !== undefined) {
    (buf as any)._f32 = util.pwstrToFfi(data.pszPageTitle);
    view.setBigUint64(32, (buf as any)._f32 === null ? 0n : BigInt(Deno.UnsafePointer.value(Deno.UnsafePointer.of((buf as any)._f32))), true);
  }
  // 0x28: pointer
  if (data?.guidObjectType !== undefined) view.setBigUint64(40, data.guidObjectType === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.guidObjectType))), true);
  return buf;
}

export class SI_OBJECT_INFOView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get dwFlags(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  get hInstance(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x10: buffer
  get pszServerName(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(16, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x18: buffer
  get pszObjectName(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(24, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x20: buffer
  get pszPageTitle(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(32, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x28: pointer
  get guidObjectType(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(40, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: u32
  set dwFlags(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  set hInstance(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x10: buffer
  set pszServerName(value: Uint8Array | Deno.PointerValue) {
    (this.buf as any)._f16 = value;
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(util.toPointer((this.buf as any)._f16))), true);
  }

  // 0x18: buffer
  set pszObjectName(value: Uint8Array | Deno.PointerValue) {
    (this.buf as any)._f24 = value;
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(util.toPointer((this.buf as any)._f24))), true);
  }

  // 0x20: buffer
  set pszPageTitle(value: Uint8Array | Deno.PointerValue) {
    (this.buf as any)._f32 = value;
    this.view.setBigUint64(32, BigInt(Deno.UnsafePointer.value(util.toPointer((this.buf as any)._f32))), true);
  }

  // 0x28: pointer
  set guidObjectType(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(40, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }
}

/**
 * Windows.Win32.Security.Authorization.UI.SI_ACCESS (size: 32)
 */
export interface SI_ACCESS {
  /** ptr */
  pguid: Deno.PointerValue | Uint8Array;
  /** u32 */
  mask: number;
  /** Windows.Win32.Foundation.PWSTR */
  pszName: string | null | Uint8Array | Uint16Array;
  /** u32 */
  dwFlags: number;
}

export const sizeofSI_ACCESS = 32;

export function allocSI_ACCESS(data?: Partial<SI_ACCESS>): Uint8Array {
  const buf = new Uint8Array(sizeofSI_ACCESS);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.pguid !== undefined) view.setBigUint64(0, data.pguid === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.pguid))), true);
  // 0x08: u32
  if (data?.mask !== undefined) view.setUint32(8, Number(data.mask), true);
  // 0x0c: pad4
  // 0x10: buffer
  if (data?.pszName !== undefined) {
    (buf as any)._f16 = util.pwstrToFfi(data.pszName);
    view.setBigUint64(16, (buf as any)._f16 === null ? 0n : BigInt(Deno.UnsafePointer.value(Deno.UnsafePointer.of((buf as any)._f16))), true);
  }
  // 0x18: u32
  if (data?.dwFlags !== undefined) view.setUint32(24, Number(data.dwFlags), true);
  // 0x1c: pad4
  return buf;
}

export class SI_ACCESSView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get pguid(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(0, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x08: u32
  get mask(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: pad4

  // 0x10: buffer
  get pszName(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(16, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x18: u32
  get dwFlags(): number {
    return this.view.getUint32(24, true);
  }

  // 0x1c: pad4

  // 0x00: pointer
  set pguid(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x08: u32
  set mask(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: pad4

  // 0x10: buffer
  set pszName(value: Uint8Array | Deno.PointerValue) {
    (this.buf as any)._f16 = value;
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(util.toPointer((this.buf as any)._f16))), true);
  }

  // 0x18: u32
  set dwFlags(value: number) {
    this.view.setUint32(24, value, true);
  }

  // 0x1c: pad4
}

/**
 * Windows.Win32.Security.Authorization.UI.SI_INHERIT_TYPE (size: 24)
 */
export interface SI_INHERIT_TYPE {
  /** ptr */
  pguid: Deno.PointerValue | Uint8Array;
  /** Windows.Win32.Security.ACE_FLAGS */
  dwFlags: ACE_FLAGS;
  /** Windows.Win32.Foundation.PWSTR */
  pszName: string | null | Uint8Array | Uint16Array;
}

export const sizeofSI_INHERIT_TYPE = 24;

export function allocSI_INHERIT_TYPE(data?: Partial<SI_INHERIT_TYPE>): Uint8Array {
  const buf = new Uint8Array(sizeofSI_INHERIT_TYPE);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.pguid !== undefined) view.setBigUint64(0, data.pguid === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.pguid))), true);
  // 0x08: u32
  if (data?.dwFlags !== undefined) view.setUint32(8, Number(data.dwFlags), true);
  // 0x0c: pad4
  // 0x10: buffer
  if (data?.pszName !== undefined) {
    (buf as any)._f16 = util.pwstrToFfi(data.pszName);
    view.setBigUint64(16, (buf as any)._f16 === null ? 0n : BigInt(Deno.UnsafePointer.value(Deno.UnsafePointer.of((buf as any)._f16))), true);
  }
  return buf;
}

export class SI_INHERIT_TYPEView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get pguid(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(0, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x08: u32
  get dwFlags(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: pad4

  // 0x10: buffer
  get pszName(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(16, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: pointer
  set pguid(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x08: u32
  set dwFlags(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: pad4

  // 0x10: buffer
  set pszName(value: Uint8Array | Deno.PointerValue) {
    (this.buf as any)._f16 = value;
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(util.toPointer((this.buf as any)._f16))), true);
  }
}

export type PSID = Deno.PointerValue | Uint8Array;

/**
 * Windows.Win32.Security.Authorization.UI.SID_INFO (size: 32)
 */
export interface SID_INFO {
  /** Windows.Win32.Foundation.PSID */
  pSid: Uint8Array | Deno.PointerValue;
  /** Windows.Win32.Foundation.PWSTR */
  pwzCommonName: string | null | Uint8Array | Uint16Array;
  /** Windows.Win32.Foundation.PWSTR */
  pwzClass: string | null | Uint8Array | Uint16Array;
  /** Windows.Win32.Foundation.PWSTR */
  pwzUPN: string | null | Uint8Array | Uint16Array;
}

export const sizeofSID_INFO = 32;

export function allocSID_INFO(data?: Partial<SID_INFO>): Uint8Array {
  const buf = new Uint8Array(sizeofSID_INFO);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.pSid !== undefined) view.setBigUint64(0, data.pSid === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.pSid))), true);
  // 0x08: buffer
  if (data?.pwzCommonName !== undefined) {
    (buf as any)._f8 = util.pwstrToFfi(data.pwzCommonName);
    view.setBigUint64(8, (buf as any)._f8 === null ? 0n : BigInt(Deno.UnsafePointer.value(Deno.UnsafePointer.of((buf as any)._f8))), true);
  }
  // 0x10: buffer
  if (data?.pwzClass !== undefined) {
    (buf as any)._f16 = util.pwstrToFfi(data.pwzClass);
    view.setBigUint64(16, (buf as any)._f16 === null ? 0n : BigInt(Deno.UnsafePointer.value(Deno.UnsafePointer.of((buf as any)._f16))), true);
  }
  // 0x18: buffer
  if (data?.pwzUPN !== undefined) {
    (buf as any)._f24 = util.pwstrToFfi(data.pwzUPN);
    view.setBigUint64(24, (buf as any)._f24 === null ? 0n : BigInt(Deno.UnsafePointer.value(Deno.UnsafePointer.of((buf as any)._f24))), true);
  }
  return buf;
}

export class SID_INFOView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get pSid(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(0, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x08: buffer
  get pwzCommonName(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x10: buffer
  get pwzClass(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(16, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x18: buffer
  get pwzUPN(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(24, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: pointer
  set pSid(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x08: buffer
  set pwzCommonName(value: Uint8Array | Deno.PointerValue) {
    (this.buf as any)._f8 = value;
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer((this.buf as any)._f8))), true);
  }

  // 0x10: buffer
  set pwzClass(value: Uint8Array | Deno.PointerValue) {
    (this.buf as any)._f16 = value;
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(util.toPointer((this.buf as any)._f16))), true);
  }

  // 0x18: buffer
  set pwzUPN(value: Uint8Array | Deno.PointerValue) {
    (this.buf as any)._f24 = value;
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(util.toPointer((this.buf as any)._f24))), true);
  }
}

/**
 * Windows.Win32.Security.Authorization.UI.SID_INFO_LIST (size: 16)
 */
export interface SID_INFO_LIST {
  /** u32 */
  cItems: number;
  /** array */
  aSidInfo: Deno.PointerValue;
}

export const sizeofSID_INFO_LIST = 16;

export function allocSID_INFO_LIST(data?: Partial<SID_INFO_LIST>): Uint8Array {
  const buf = new Uint8Array(sizeofSID_INFO_LIST);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.cItems !== undefined) view.setUint32(0, Number(data.cItems), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.aSidInfo !== undefined) view.setBigUint64(8, data.aSidInfo === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.aSidInfo))), true);
  return buf;
}

export class SID_INFO_LISTView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get cItems(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  get aSidInfo(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: u32
  set cItems(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  set aSidInfo(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }
}

export type BOOLEAN = number;

/**
 * Windows.Win32.Security.Authorization.UI.SECURITY_OBJECT (size: 48)
 */
export interface SECURITY_OBJECT {
  /** Windows.Win32.Foundation.PWSTR */
  pwszName: string | null | Uint8Array | Uint16Array;
  /** ptr */
  pData: Deno.PointerValue | Uint8Array;
  /** u32 */
  cbData: number;
  /** ptr */
  pData2: Deno.PointerValue | Uint8Array;
  /** u32 */
  cbData2: number;
  /** u32 */
  Id: number;
  /** Windows.Win32.Foundation.BOOLEAN */
  fWellKnown: Uint8Array | Deno.PointerValue;
}

export const sizeofSECURITY_OBJECT = 48;

export function allocSECURITY_OBJECT(data?: Partial<SECURITY_OBJECT>): Uint8Array {
  const buf = new Uint8Array(sizeofSECURITY_OBJECT);
  const view = new DataView(buf.buffer);
  // 0x00: buffer
  if (data?.pwszName !== undefined) {
    (buf as any)._f0 = util.pwstrToFfi(data.pwszName);
    view.setBigUint64(0, (buf as any)._f0 === null ? 0n : BigInt(Deno.UnsafePointer.value(Deno.UnsafePointer.of((buf as any)._f0))), true);
  }
  // 0x08: pointer
  if (data?.pData !== undefined) view.setBigUint64(8, data.pData === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.pData))), true);
  // 0x10: u32
  if (data?.cbData !== undefined) view.setUint32(16, Number(data.cbData), true);
  // 0x14: pad4
  // 0x18: pointer
  if (data?.pData2 !== undefined) view.setBigUint64(24, data.pData2 === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.pData2))), true);
  // 0x20: u32
  if (data?.cbData2 !== undefined) view.setUint32(32, Number(data.cbData2), true);
  // 0x24: u32
  if (data?.Id !== undefined) view.setUint32(36, Number(data.Id), true);
  // 0x28: pointer
  if (data?.fWellKnown !== undefined) view.setBigUint64(40, data.fWellKnown === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.fWellKnown))), true);
  return buf;
}

export class SECURITY_OBJECTView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: buffer
  get pwszName(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(0, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x08: pointer
  get pData(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x10: u32
  get cbData(): number {
    return this.view.getUint32(16, true);
  }

  // 0x14: pad4

  // 0x18: pointer
  get pData2(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(24, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x20: u32
  get cbData2(): number {
    return this.view.getUint32(32, true);
  }

  // 0x24: u32
  get Id(): number {
    return this.view.getUint32(36, true);
  }

  // 0x28: pointer
  get fWellKnown(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(40, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: buffer
  set pwszName(value: Uint8Array | Deno.PointerValue) {
    (this.buf as any)._f0 = value;
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(util.toPointer((this.buf as any)._f0))), true);
  }

  // 0x08: pointer
  set pData(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x10: u32
  set cbData(value: number) {
    this.view.setUint32(16, value, true);
  }

  // 0x14: pad4

  // 0x18: pointer
  set pData2(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x20: u32
  set cbData2(value: number) {
    this.view.setUint32(32, value, true);
  }

  // 0x24: u32
  set Id(value: number) {
    this.view.setUint32(36, value, true);
  }

  // 0x28: pointer
  set fWellKnown(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(40, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }
}

/**
 * Windows.Win32.Security.Authorization.UI.EFFPERM_RESULT_LIST (size: 32)
 */
export interface EFFPERM_RESULT_LIST {
  /** Windows.Win32.Foundation.BOOLEAN */
  fEvaluated: Uint8Array | Deno.PointerValue;
  /** u32 */
  cObjectTypeListLength: number;
  /** ptr */
  pObjectTypeList: Deno.PointerValue | Uint8Array;
  /** ptr */
  pGrantedAccessList: Deno.PointerValue | Uint8Array;
}

export const sizeofEFFPERM_RESULT_LIST = 32;

export function allocEFFPERM_RESULT_LIST(data?: Partial<EFFPERM_RESULT_LIST>): Uint8Array {
  const buf = new Uint8Array(sizeofEFFPERM_RESULT_LIST);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.fEvaluated !== undefined) view.setBigUint64(0, data.fEvaluated === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.fEvaluated))), true);
  // 0x08: u32
  if (data?.cObjectTypeListLength !== undefined) view.setUint32(8, Number(data.cObjectTypeListLength), true);
  // 0x0c: pad4
  // 0x10: pointer
  if (data?.pObjectTypeList !== undefined) view.setBigUint64(16, data.pObjectTypeList === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.pObjectTypeList))), true);
  // 0x18: pointer
  if (data?.pGrantedAccessList !== undefined) view.setBigUint64(24, data.pGrantedAccessList === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.pGrantedAccessList))), true);
  return buf;
}

export class EFFPERM_RESULT_LISTView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get fEvaluated(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(0, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x08: u32
  get cObjectTypeListLength(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: pad4

  // 0x10: pointer
  get pObjectTypeList(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(16, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x18: pointer
  get pGrantedAccessList(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(24, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: pointer
  set fEvaluated(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x08: u32
  set cObjectTypeListLength(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: pad4

  // 0x10: pointer
  set pObjectTypeList(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }

  // 0x18: pointer
  set pGrantedAccessList(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }
}

export type HPROPSHEETPAGE = bigint | number;

export type HWND = bigint | number;

export type BOOL = number;

export type HRESULT = number;

// Native Libraries

try {
  var libACLUI_dll = Deno.dlopen("ACLUI.dll", {
    CreateSecurityPage: {
      parameters: ["pointer"],
      result: "pointer",
      optional: true,
    },
    EditSecurity: {
      parameters: ["pointer", "pointer"],
      result: "i32",
      optional: true,
    },
    EditSecurityAdvanced: {
      parameters: ["pointer", "pointer", "i32"],
      result: "pointer",
      optional: true,
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function CreateSecurityPage(
  psi: Uint8Array | Deno.PointerValue /* Windows.Win32.Security.Authorization.UI.ISecurityInformation */,
): Deno.PointerValue /* Windows.Win32.UI.Controls.HPROPSHEETPAGE */ {
  return libACLUI_dll.CreateSecurityPage!(util.toPointer(psi));
}

export function EditSecurity(
  hwndOwner: Deno.PointerValue /* Windows.Win32.Foundation.HWND */,
  psi: Uint8Array | Deno.PointerValue /* Windows.Win32.Security.Authorization.UI.ISecurityInformation */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libACLUI_dll.EditSecurity!((hwndOwner), util.toPointer(psi)));
}

export function EditSecurityAdvanced(
  hwndOwner: Deno.PointerValue /* Windows.Win32.Foundation.HWND */,
  psi: Uint8Array | Deno.PointerValue /* Windows.Win32.Security.Authorization.UI.ISecurityInformation */,
  uSIPage: SI_PAGE_TYPE /* Windows.Win32.Security.Authorization.UI.SI_PAGE_TYPE */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libACLUI_dll.EditSecurityAdvanced!((hwndOwner), util.toPointer(psi), uSIPage);
}

