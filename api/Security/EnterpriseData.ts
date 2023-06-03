/// Auto-generated by Deno Win32: Windows.Win32.Security.EnterpriseData.Apis

import * as util from "../../util.ts";

// Enums
export type ENTERPRISE_DATA_POLICIES = number;
export type SRPHOSTING_TYPE = number;
export type SRPHOSTING_VERSION = number;

// Constants
export const ENTERPRISE_POLICY_NONE = 0;
export const ENTERPRISE_POLICY_ALLOWED = 1;
export const ENTERPRISE_POLICY_ENLIGHTENED = 2;
export const ENTERPRISE_POLICY_EXEMPT = 4;
export const SRPHOSTING_TYPE_NONE = 0;
export const SRPHOSTING_TYPE_WINHTTP = 1;
export const SRPHOSTING_TYPE_WININET = 2;
export const SRPHOSTING_VERSION1 = 1;

// Structs

export type HANDLE = bigint | number;

/**
 * Windows.Win32.Security.EnterpriseData.HTHREAD_NETWORK_CONTEXT (size: 16)
 */
export interface HTHREAD_NETWORK_CONTEXT {
  /** u32 */
  ThreadId: number;
  /** Windows.Win32.Foundation.HANDLE */
  ThreadContext: Uint8Array | Deno.PointerValue;
}

export const sizeofHTHREAD_NETWORK_CONTEXT = 16;

export function allocHTHREAD_NETWORK_CONTEXT(data?: Partial<HTHREAD_NETWORK_CONTEXT>): Uint8Array {
  const buf = new Uint8Array(sizeofHTHREAD_NETWORK_CONTEXT);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.ThreadId !== undefined) view.setUint32(0, Number(data.ThreadId), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.ThreadContext !== undefined) view.setBigUint64(8, data.ThreadContext === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.ThreadContext))), true);
  return buf;
}

export class HTHREAD_NETWORK_CONTEXTView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get ThreadId(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  get ThreadContext(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: u32
  set ThreadId(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  set ThreadContext(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }
}

/**
 * Windows.Win32.Security.EnterpriseData.FILE_UNPROTECT_OPTIONS (size: 8)
 */
export interface FILE_UNPROTECT_OPTIONS {
  /** u8 */
  audit: number;
}

export const sizeofFILE_UNPROTECT_OPTIONS = 8;

export function allocFILE_UNPROTECT_OPTIONS(data?: Partial<FILE_UNPROTECT_OPTIONS>): Uint8Array {
  const buf = new Uint8Array(sizeofFILE_UNPROTECT_OPTIONS);
  const view = new DataView(buf.buffer);
  // 0x00: u8
  if (data?.audit !== undefined) view.setUint8(0, Number(data.audit));
  // 0x01: pad7
  return buf;
}

export class FILE_UNPROTECT_OPTIONSView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u8
  get audit(): number {
    return this.view.getUint8(0);
  }

  // 0x01: pad7

  // 0x00: u8
  set audit(value: number) {
    this.view.setUint8(0, value);
  }

  // 0x01: pad7
}

export type PWSTR = Deno.PointerValue | Uint8Array;

export type HRESULT = number;

export type NTSTATUS = number;

// Native Libraries

try {
  var libsrpapi_dll = Deno.dlopen("srpapi.dll", {
    SrpCreateThreadNetworkContext: {
      parameters: ["buffer", "pointer"],
      result: "pointer",
      optional: true,
    },
    SrpCloseThreadNetworkContext: {
      parameters: ["pointer"],
      result: "pointer",
      optional: true,
    },
    SrpSetTokenEnterpriseId: {
      parameters: ["pointer", "buffer"],
      result: "pointer",
      optional: true,
    },
    SrpGetEnterpriseIds: {
      parameters: ["pointer", "pointer", "pointer", "pointer"],
      result: "pointer",
      optional: true,
    },
    SrpEnablePermissiveModeFileEncryption: {
      parameters: ["buffer"],
      result: "pointer",
      optional: true,
    },
    SrpDisablePermissiveModeFileEncryption: {
      parameters: [],
      result: "pointer",
      optional: true,
    },
    SrpGetEnterprisePolicy: {
      parameters: ["pointer", "pointer"],
      result: "pointer",
      optional: true,
    },
    SrpIsTokenService: {
      parameters: ["pointer", "pointer"],
      result: "pointer",
      optional: true,
    },
    SrpDoesPolicyAllowAppExecution: {
      parameters: ["pointer", "pointer"],
      result: "pointer",
      optional: true,
    },
    SrpHostingInitialize: {
      parameters: ["i32", "i32", "pointer", "u32"],
      result: "pointer",
      optional: true,
    },
    SrpHostingTerminate: {
      parameters: ["i32"],
      result: "void",
      optional: true,
    },
  }).symbols;
} catch(e) { /* ignore */ }

try {
  var libefswrt_dll = Deno.dlopen("efswrt.dll", {
    ProtectFileToEnterpriseIdentity: {
      parameters: ["buffer", "buffer"],
      result: "pointer",
      optional: true,
    },
    UnprotectFile: {
      parameters: ["buffer", "pointer"],
      result: "pointer",
      optional: true,
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function SrpCreateThreadNetworkContext(
  enterpriseId: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  threadNetworkContext: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libsrpapi_dll.SrpCreateThreadNetworkContext!(util.pwstrToFfi(enterpriseId), util.toPointer(threadNetworkContext));
}

export function SrpCloseThreadNetworkContext(
  threadNetworkContext: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libsrpapi_dll.SrpCloseThreadNetworkContext!(util.toPointer(threadNetworkContext));
}

export function SrpSetTokenEnterpriseId(
  tokenHandle: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  enterpriseId: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libsrpapi_dll.SrpSetTokenEnterpriseId!(util.toPointer(tokenHandle), util.pwstrToFfi(enterpriseId));
}

export function SrpGetEnterpriseIds(
  tokenHandle: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  numberOfBytes: Deno.PointerValue | Uint8Array /* ptr */,
  enterpriseIds: Deno.PointerValue | Uint8Array /* ptr */,
  enterpriseIdCount: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libsrpapi_dll.SrpGetEnterpriseIds!(util.toPointer(tokenHandle), util.toPointer(numberOfBytes), util.toPointer(enterpriseIds), util.toPointer(enterpriseIdCount));
}

export function SrpEnablePermissiveModeFileEncryption(
  enterpriseId: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libsrpapi_dll.SrpEnablePermissiveModeFileEncryption!(util.pwstrToFfi(enterpriseId));
}

export function SrpDisablePermissiveModeFileEncryption(): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libsrpapi_dll.SrpDisablePermissiveModeFileEncryption!();
}

export function SrpGetEnterprisePolicy(
  tokenHandle: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  policyFlags: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libsrpapi_dll.SrpGetEnterprisePolicy!(util.toPointer(tokenHandle), util.toPointer(policyFlags));
}

export function SrpIsTokenService(
  TokenHandle: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  IsTokenService: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.NTSTATUS */ {
  return libsrpapi_dll.SrpIsTokenService!(util.toPointer(TokenHandle), util.toPointer(IsTokenService));
}

export function SrpDoesPolicyAllowAppExecution(
  packageId: Deno.PointerValue | Uint8Array /* ptr */,
  isAllowed: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libsrpapi_dll.SrpDoesPolicyAllowAppExecution!(util.toPointer(packageId), util.toPointer(isAllowed));
}

export function SrpHostingInitialize(
  Version: SRPHOSTING_VERSION /* Windows.Win32.Security.EnterpriseData.SRPHOSTING_VERSION */,
  Type: SRPHOSTING_TYPE /* Windows.Win32.Security.EnterpriseData.SRPHOSTING_TYPE */,
  pvData: Deno.PointerValue | Uint8Array /* ptr */,
  cbData: number /* u32 */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libsrpapi_dll.SrpHostingInitialize!(Version, Type, util.toPointer(pvData), cbData);
}

export function SrpHostingTerminate(
  Type: SRPHOSTING_TYPE /* Windows.Win32.Security.EnterpriseData.SRPHOSTING_TYPE */,
): void /* void */ {
  return libsrpapi_dll.SrpHostingTerminate!(Type);
}

export function ProtectFileToEnterpriseIdentity(
  fileOrFolderPath: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  identity: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libefswrt_dll.ProtectFileToEnterpriseIdentity!(util.pwstrToFfi(fileOrFolderPath), util.pwstrToFfi(identity));
}

export function UnprotectFile(
  fileOrFolderPath: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  options: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libefswrt_dll.UnprotectFile!(util.pwstrToFfi(fileOrFolderPath), util.toPointer(options));
}

