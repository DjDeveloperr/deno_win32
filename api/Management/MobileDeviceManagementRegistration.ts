/// Auto-generated by Deno Win32: Windows.Win32.Management.MobileDeviceManagementRegistration.Apis

import * as util from "../../util.ts";

// Enums
export type REGISTRATION_INFORMATION_CLASS = number;

// Constants
export const MENROLL_E_DEVICE_MESSAGE_FORMAT_ERROR = 1729384475262451713n;
export const MENROLL_E_DEVICE_AUTHENTICATION_ERROR = 1729385574774079490n;
export const MENROLL_E_DEVICE_AUTHORIZATION_ERROR = 1729386674285707267n;
export const MENROLL_E_DEVICE_CERTIFICATEREQUEST_ERROR = 1729387773797335044n;
export const MENROLL_E_DEVICE_CONFIGMGRSERVER_ERROR = 1729388873308962821n;
export const MENROLL_E_DEVICE_INTERNALSERVICE_ERROR = 1729389972820590598n;
export const MENROLL_E_DEVICE_INVALIDSECURITY_ERROR = 1729391072332218375n;
export const MENROLL_E_DEVICE_UNKNOWN_ERROR = 1729392171843846152n;
export const MENROLL_E_ENROLLMENT_IN_PROGRESS = 1729393271355473929n;
export const MENROLL_E_DEVICE_ALREADY_ENROLLED = 1729396569890357258n;
export const MENROLL_E_DISCOVERY_SEC_CERT_DATE_INVALID = 1729397669401985037n;
export const MENROLL_E_PASSWORD_NEEDED = 1729398768913612814n;
export const MENROLL_E_WAB_ERROR = 1729399868425240591n;
export const MENROLL_E_CONNECTIVITY = 1729402067448496144n;
export const MENROLL_E_INVALIDSSLCERT = 1729403166960123922n;
export const MENROLL_E_DEVICEAPREACHED = 1729404266471751699n;
export const MENROLL_E_DEVICENOTSUPPORTED = 1729405365983379476n;
export const MENROLL_E_NOT_SUPPORTED = 1729406465495007253n;
export const MENROLL_E_NOTELIGIBLETORENEW = 1729407565006635030n;
export const MENROLL_E_INMAINTENANCE = 1729408664518262807n;
export const MENROLL_E_USER_LICENSE = 1729409764029890584n;
export const MENROLL_E_ENROLLMENTDATAINVALID = 1729410863541518361n;
export const MENROLL_E_INSECUREREDIRECT = 1729411963053146138n;
export const MENROLL_E_PLATFORM_WRONG_STATE = 1729413062564773915n;
export const MENROLL_E_PLATFORM_LICENSE_ERROR = 1729414162076401692n;
export const MENROLL_E_PLATFORM_UNKNOWN_ERROR = 1729415261588029469n;
export const MENROLL_E_PROV_CSP_CERTSTORE = 1729416361099657246n;
export const MENROLL_E_PROV_CSP_W7 = 1729417460611285023n;
export const MENROLL_E_PROV_CSP_DMCLIENT = 1729418560122912800n;
export const MENROLL_E_PROV_CSP_PFW = 1729419659634540577n;
export const MENROLL_E_PROV_CSP_MISC = 1729420759146168354n;
export const MENROLL_E_PROV_UNKNOWN = 1729421858657796131n;
export const MENROLL_E_PROV_SSLCERTNOTFOUND = 1729422958169423908n;
export const MENROLL_E_PROV_CSP_APPMGMT = 1729424057681051685n;
export const MENROLL_E_DEVICE_MANAGEMENT_BLOCKED = 1729425157192679462n;
export const MENROLL_E_CERTPOLICY_PRIVATEKEYCREATION_FAILED = 1729426256704307239n;
export const MENROLL_E_CERTAUTH_FAILED_TO_FIND_CERT = 1729427356215935016n;
export const MENROLL_E_EMPTY_MESSAGE = 1729435052797329449n;
export const MENROLL_E_USER_CANCELLED = 1729436152308957232n;
export const MENROLL_E_MDM_NOT_CONFIGURED = 1801442069300379697n;
export const MDM_REGISTRATION_FACILITY_CODE = 25;
export const DEVICE_ENROLLER_FACILITY_CODE = 24;
export const MREGISTER_E_DEVICE_MESSAGE_FORMAT_ERROR = 1801443168812072961n;
export const MREGISTER_E_DEVICE_AUTHENTICATION_ERROR = 1801446467346956290n;
export const MREGISTER_E_DEVICE_AUTHORIZATION_ERROR = 1801444268323700739n;
export const MREGISTER_E_DEVICE_CERTIFCATEREQUEST_ERROR = 1801445367835328516n;
export const MENROLL_E_DEVICE_CERTIFCATEREQUEST_ERROR = 1729387773797335044n;
export const MREGISTER_E_DEVICE_CONFIGMGRSERVER_ERROR = 1801769723765522437n;
export const MREGISTER_E_DEVICE_INTERNALSERVICE_ERROR = 1801447566858584070n;
export const MREGISTER_E_DEVICE_INVALIDSECURITY_ERROR = 1801448666370211847n;
export const MREGISTER_E_DEVICE_UNKNOWN_ERROR = 1801450865393467400n;
export const MREGISTER_E_REGISTRATION_IN_PROGRESS = 1801450865393467401n;
export const MREGISTER_E_DEVICE_ALREADY_REGISTERED = 1801451964905095178n;
export const MREGISTER_E_DEVICE_NOT_REGISTERED = 1729394370867167243n;
export const MENROLL_E_DEVICE_NOT_ENROLLED = 1801453064416657419n;
export const MREGISTER_E_DISCOVERY_REDIRECTED = 1801454163928350732n;
export const MREGISTER_E_DEVICE_NOT_AD_REGISTERED_ERROR = 1801455263439978509n;
export const MREGISTER_E_DISCOVERY_FAILED = 1729428455727628302n;
export const MENROLL_E_DEVICECAPREACHED = 1729404266471751699n;
export const MENROLL_E_NOTSUPPORTED = 1729406465495007253n;
export const MENROLL_E_USERLICENSE = 1729409764029890584n;
export const MENROLL_E_USER_CANCELED = 1225542093696925738n;
export const DEVICEREGISTRATIONTYPE_MDM_ONLY = 0;
export const DEVICEREGISTRATIONTYPE_MAM = 5;
export const DEVICEREGISTRATIONTYPE_MDM_DEVICEWIDE_WITH_AAD = 6;
export const DEVICEREGISTRATIONTYPE_MDM_USERSPECIFIC_WITH_AAD = 13;
export const DeviceRegistrationBasicInfo = 1;
export const MaxDeviceInfoClass = 2;

// Structs

export type PWSTR = Deno.PointerValue | Uint8Array;

/**
 * Windows.Win32.Management.MobileDeviceManagementRegistration.MANAGEMENT_SERVICE_INFO (size: 16)
 */
export interface MANAGEMENT_SERVICE_INFO {
  /** Windows.Win32.Foundation.PWSTR */
  pszMDMServiceUri: string | null | Uint8Array | Uint16Array;
  /** Windows.Win32.Foundation.PWSTR */
  pszAuthenticationUri: string | null | Uint8Array | Uint16Array;
}

export const sizeofMANAGEMENT_SERVICE_INFO = 16;

export function allocMANAGEMENT_SERVICE_INFO(data?: Partial<MANAGEMENT_SERVICE_INFO>): Uint8Array {
  const buf = new Uint8Array(sizeofMANAGEMENT_SERVICE_INFO);
  const view = new DataView(buf.buffer);
  // 0x00: buffer
  if (data?.pszMDMServiceUri !== undefined) {
    (buf as any)._f0 = util.pwstrToFfi(data.pszMDMServiceUri);
    view.setBigUint64(0, (buf as any)._f0 === null ? 0n : BigInt(Deno.UnsafePointer.value(Deno.UnsafePointer.of((buf as any)._f0))), true);
  }
  // 0x08: buffer
  if (data?.pszAuthenticationUri !== undefined) {
    (buf as any)._f8 = util.pwstrToFfi(data.pszAuthenticationUri);
    view.setBigUint64(8, (buf as any)._f8 === null ? 0n : BigInt(Deno.UnsafePointer.value(Deno.UnsafePointer.of((buf as any)._f8))), true);
  }
  return buf;
}

export class MANAGEMENT_SERVICE_INFOView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: buffer
  get pszMDMServiceUri(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(0, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x08: buffer
  get pszAuthenticationUri(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: buffer
  set pszMDMServiceUri(value: Uint8Array | Deno.PointerValue) {
    (this.buf as any)._f0 = value;
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(util.toPointer((this.buf as any)._f0))), true);
  }

  // 0x08: buffer
  set pszAuthenticationUri(value: Uint8Array | Deno.PointerValue) {
    (this.buf as any)._f8 = value;
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer((this.buf as any)._f8))), true);
  }
}

export type BOOL = number;

/**
 * Windows.Win32.Management.MobileDeviceManagementRegistration.MANAGEMENT_REGISTRATION_INFO (size: 24)
 */
export interface MANAGEMENT_REGISTRATION_INFO {
  /** Windows.Win32.Foundation.BOOL */
  fDeviceRegisteredWithManagement: boolean;
  /** u32 */
  dwDeviceRegistionKind: number;
  /** Windows.Win32.Foundation.PWSTR */
  pszUPN: string | null | Uint8Array | Uint16Array;
  /** Windows.Win32.Foundation.PWSTR */
  pszMDMServiceUri: string | null | Uint8Array | Uint16Array;
}

export const sizeofMANAGEMENT_REGISTRATION_INFO = 24;

export function allocMANAGEMENT_REGISTRATION_INFO(data?: Partial<MANAGEMENT_REGISTRATION_INFO>): Uint8Array {
  const buf = new Uint8Array(sizeofMANAGEMENT_REGISTRATION_INFO);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.fDeviceRegisteredWithManagement !== undefined) view.setInt32(0, Number(data.fDeviceRegisteredWithManagement), true);
  // 0x04: u32
  if (data?.dwDeviceRegistionKind !== undefined) view.setUint32(4, Number(data.dwDeviceRegistionKind), true);
  // 0x08: buffer
  if (data?.pszUPN !== undefined) {
    (buf as any)._f8 = util.pwstrToFfi(data.pszUPN);
    view.setBigUint64(8, (buf as any)._f8 === null ? 0n : BigInt(Deno.UnsafePointer.value(Deno.UnsafePointer.of((buf as any)._f8))), true);
  }
  // 0x10: buffer
  if (data?.pszMDMServiceUri !== undefined) {
    (buf as any)._f16 = util.pwstrToFfi(data.pszMDMServiceUri);
    view.setBigUint64(16, (buf as any)._f16 === null ? 0n : BigInt(Deno.UnsafePointer.value(Deno.UnsafePointer.of((buf as any)._f16))), true);
  }
  return buf;
}

export class MANAGEMENT_REGISTRATION_INFOView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: i32
  get fDeviceRegisteredWithManagement(): number {
    return this.view.getInt32(0, true);
  }

  // 0x04: u32
  get dwDeviceRegistionKind(): number {
    return this.view.getUint32(4, true);
  }

  // 0x08: buffer
  get pszUPN(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x10: buffer
  get pszMDMServiceUri(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(16, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: i32
  set fDeviceRegisteredWithManagement(value: number) {
    this.view.setInt32(0, value, true);
  }

  // 0x04: u32
  set dwDeviceRegistionKind(value: number) {
    this.view.setUint32(4, value, true);
  }

  // 0x08: buffer
  set pszUPN(value: Uint8Array | Deno.PointerValue) {
    (this.buf as any)._f8 = value;
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer((this.buf as any)._f8))), true);
  }

  // 0x10: buffer
  set pszMDMServiceUri(value: Uint8Array | Deno.PointerValue) {
    (this.buf as any)._f16 = value;
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(util.toPointer((this.buf as any)._f16))), true);
  }
}

export type HRESULT = number;

export type HANDLE = Deno.PointerValue;

// Native Libraries

try {
  var libMDMRegistration_dll = Deno.dlopen("MDMRegistration.dll", {
    GetDeviceRegistrationInfo: {
      parameters: ["i32", "pointer"],
      result: "pointer",
    },
    IsDeviceRegisteredWithManagement: {
      parameters: ["pointer", "u32", "buffer"],
      result: "pointer",
    },
    IsManagementRegistrationAllowed: {
      parameters: ["pointer"],
      result: "pointer",
    },
    IsMdmUxWithoutAadAllowed: {
      parameters: ["pointer"],
      result: "pointer",
    },
    SetManagedExternally: {
      parameters: ["i32"],
      result: "pointer",
    },
    DiscoverManagementService: {
      parameters: ["buffer", "pointer"],
      result: "pointer",
    },
    RegisterDeviceWithManagementUsingAADCredentials: {
      parameters: ["pointer"],
      result: "pointer",
    },
    RegisterDeviceWithManagementUsingAADDeviceCredentials: {
      parameters: [],
      result: "pointer",
    },
    RegisterDeviceWithManagementUsingAADDeviceCredentials2: {
      parameters: ["buffer"],
      result: "pointer",
    },
    RegisterDeviceWithManagement: {
      parameters: ["buffer", "buffer", "buffer"],
      result: "pointer",
    },
    UnregisterDeviceWithManagement: {
      parameters: ["buffer"],
      result: "pointer",
    },
    GetDeviceManagementConfigInfo: {
      parameters: ["buffer", "pointer", "buffer"],
      result: "pointer",
    },
    SetDeviceManagementConfigInfo: {
      parameters: ["buffer", "buffer"],
      result: "pointer",
    },
    GetManagementAppHyperlink: {
      parameters: ["u32", "buffer"],
      result: "pointer",
    },
    DiscoverManagementServiceEx: {
      parameters: ["buffer", "buffer", "pointer"],
      result: "pointer",
    },
  }).symbols;
} catch(e) { /* ignore */ }

try {
  var libMDMLocalManagement_dll = Deno.dlopen("MDMLocalManagement.dll", {
    RegisterDeviceWithLocalManagement: {
      parameters: ["pointer"],
      result: "pointer",
    },
    ApplyLocalManagementSyncML: {
      parameters: ["buffer", "pointer"],
      result: "pointer",
    },
    UnregisterDeviceWithLocalManagement: {
      parameters: [],
      result: "pointer",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function GetDeviceRegistrationInfo(
  DeviceInformationClass: REGISTRATION_INFORMATION_CLASS /* Windows.Win32.Management.MobileDeviceManagementRegistration.REGISTRATION_INFORMATION_CLASS */,
  ppDeviceRegistrationInfo: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libMDMRegistration_dll.GetDeviceRegistrationInfo(DeviceInformationClass, util.toPointer(ppDeviceRegistrationInfo));
}

export function IsDeviceRegisteredWithManagement(
  pfIsDeviceRegisteredWithManagement: Deno.PointerValue | Uint8Array /* ptr */,
  cchUPN: number /* u32 */,
  pszUPN: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libMDMRegistration_dll.IsDeviceRegisteredWithManagement(util.toPointer(pfIsDeviceRegisteredWithManagement), cchUPN, util.pwstrToFfi(pszUPN));
}

export function IsManagementRegistrationAllowed(
  pfIsManagementRegistrationAllowed: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libMDMRegistration_dll.IsManagementRegistrationAllowed(util.toPointer(pfIsManagementRegistrationAllowed));
}

export function IsMdmUxWithoutAadAllowed(
  isEnrollmentAllowed: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libMDMRegistration_dll.IsMdmUxWithoutAadAllowed(util.toPointer(isEnrollmentAllowed));
}

export function SetManagedExternally(
  IsManagedExternally: boolean /* Windows.Win32.Foundation.BOOL */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libMDMRegistration_dll.SetManagedExternally(util.boolToFfi(IsManagedExternally));
}

export function DiscoverManagementService(
  pszUPN: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  ppMgmtInfo: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libMDMRegistration_dll.DiscoverManagementService(util.pwstrToFfi(pszUPN), util.toPointer(ppMgmtInfo));
}

export function RegisterDeviceWithManagementUsingAADCredentials(
  UserToken: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libMDMRegistration_dll.RegisterDeviceWithManagementUsingAADCredentials(util.toPointer(UserToken));
}

export function RegisterDeviceWithManagementUsingAADDeviceCredentials(): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libMDMRegistration_dll.RegisterDeviceWithManagementUsingAADDeviceCredentials();
}

export function RegisterDeviceWithManagementUsingAADDeviceCredentials2(
  MDMApplicationID: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libMDMRegistration_dll.RegisterDeviceWithManagementUsingAADDeviceCredentials2(util.pwstrToFfi(MDMApplicationID));
}

export function RegisterDeviceWithManagement(
  pszUPN: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  ppszMDMServiceUri: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  ppzsAccessToken: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libMDMRegistration_dll.RegisterDeviceWithManagement(util.pwstrToFfi(pszUPN), util.pwstrToFfi(ppszMDMServiceUri), util.pwstrToFfi(ppzsAccessToken));
}

export function UnregisterDeviceWithManagement(
  enrollmentID: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libMDMRegistration_dll.UnregisterDeviceWithManagement(util.pwstrToFfi(enrollmentID));
}

export function GetDeviceManagementConfigInfo(
  providerID: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  configStringBufferLength: Deno.PointerValue | Uint8Array /* ptr */,
  configString: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libMDMRegistration_dll.GetDeviceManagementConfigInfo(util.pwstrToFfi(providerID), util.toPointer(configStringBufferLength), util.pwstrToFfi(configString));
}

export function SetDeviceManagementConfigInfo(
  providerID: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  configString: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libMDMRegistration_dll.SetDeviceManagementConfigInfo(util.pwstrToFfi(providerID), util.pwstrToFfi(configString));
}

export function GetManagementAppHyperlink(
  cchHyperlink: number /* u32 */,
  pszHyperlink: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libMDMRegistration_dll.GetManagementAppHyperlink(cchHyperlink, util.pwstrToFfi(pszHyperlink));
}

export function DiscoverManagementServiceEx(
  pszUPN: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  pszDiscoveryServiceCandidate: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  ppMgmtInfo: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libMDMRegistration_dll.DiscoverManagementServiceEx(util.pwstrToFfi(pszUPN), util.pwstrToFfi(pszDiscoveryServiceCandidate), util.toPointer(ppMgmtInfo));
}

export function RegisterDeviceWithLocalManagement(
  alreadyRegistered: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libMDMLocalManagement_dll.RegisterDeviceWithLocalManagement(util.toPointer(alreadyRegistered));
}

export function ApplyLocalManagementSyncML(
  syncMLRequest: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  syncMLResult: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libMDMLocalManagement_dll.ApplyLocalManagementSyncML(util.pwstrToFfi(syncMLRequest), util.toPointer(syncMLResult));
}

export function UnregisterDeviceWithLocalManagement(): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libMDMLocalManagement_dll.UnregisterDeviceWithLocalManagement();
}

