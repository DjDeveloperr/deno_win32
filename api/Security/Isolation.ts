/// Auto-generated by Deno Win32: Windows.Win32.Security.Isolation.Apis

import * as util from "../../util.ts";

// Structs

export type BOOL = number;

/**
 * Windows.Win32.Security.Isolation.IsolatedAppLauncherTelemetryParameters (size: 16)
 */
export interface IsolatedAppLauncherTelemetryParameters {
  /** Windows.Win32.Foundation.BOOL */
  EnableForLaunch: boolean;
  /** System.Guid */
  CorrelationGUID: Uint8Array | Deno.PointerValue;
}

export const sizeofIsolatedAppLauncherTelemetryParameters = 16;

export function allocIsolatedAppLauncherTelemetryParameters(data?: Partial<IsolatedAppLauncherTelemetryParameters>): Uint8Array {
  const buf = new Uint8Array(sizeofIsolatedAppLauncherTelemetryParameters);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.EnableForLaunch !== undefined) view.setInt32(0, Number(data.EnableForLaunch), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.CorrelationGUID !== undefined) view.setBigUint64(8, data.CorrelationGUID === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.CorrelationGUID))), true);
  return buf;
}

export class IsolatedAppLauncherTelemetryParametersView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: i32
  get EnableForLaunch(): number {
    return this.view.getInt32(0, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  get CorrelationGUID(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: i32
  set EnableForLaunch(value: number) {
    this.view.setInt32(0, value, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  set CorrelationGUID(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }
}

export type HANDLE = Deno.PointerValue;

export type PSID = Deno.PointerValue | Uint8Array;

export type PWSTR = Deno.PointerValue | Uint8Array;

export type HRESULT = number;

// Native Libraries

try {
  var libKERNEL32_dll = Deno.dlopen("KERNEL32.dll", {
    GetAppContainerNamedObjectPath: {
      parameters: ["pointer", "pointer", "u32", "buffer", "pointer"],
      result: "i32",
    },
  }).symbols;
} catch(e) { /* ignore */ }

try {
  var libapi_ms_win_security_isolatedcontainer_l1_1_1_dll = Deno.dlopen("api-ms-win-security-isolatedcontainer-l1-1-1.dll", {
    IsProcessInWDAGContainer: {
      parameters: ["pointer", "pointer"],
      result: "pointer",
    },
  }).symbols;
} catch(e) { /* ignore */ }

try {
  var libapi_ms_win_security_isolatedcontainer_l1_1_0_dll = Deno.dlopen("api-ms-win-security-isolatedcontainer-l1-1-0.dll", {
    IsProcessInIsolatedContainer: {
      parameters: ["pointer"],
      result: "pointer",
    },
  }).symbols;
} catch(e) { /* ignore */ }

try {
  var libIsolatedWindowsEnvironmentUtils_dll = Deno.dlopen("IsolatedWindowsEnvironmentUtils.dll", {
    IsProcessInIsolatedWindowsEnvironment: {
      parameters: ["pointer"],
      result: "pointer",
    },
  }).symbols;
} catch(e) { /* ignore */ }

try {
  var libUSERENV_dll = Deno.dlopen("USERENV.dll", {
    CreateAppContainerProfile: {
      parameters: ["buffer", "buffer", "buffer", "pointer", "u32", "pointer"],
      result: "pointer",
    },
    DeleteAppContainerProfile: {
      parameters: ["buffer"],
      result: "pointer",
    },
    GetAppContainerRegistryLocation: {
      parameters: ["u32", "pointer"],
      result: "pointer",
    },
    GetAppContainerFolderPath: {
      parameters: ["buffer", "pointer"],
      result: "pointer",
    },
    DeriveRestrictedAppContainerSidFromAppContainerSidAndRestrictedName: {
      parameters: ["pointer", "buffer", "pointer"],
      result: "pointer",
    },
    DeriveAppContainerSidFromAppContainerName: {
      parameters: ["buffer", "pointer"],
      result: "pointer",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function GetAppContainerNamedObjectPath(
  Token: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  AppContainerSid: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.PSID */,
  ObjectPathLength: number /* u32 */,
  ObjectPath: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  ReturnLength: Deno.PointerValue | Uint8Array /* ptr */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libKERNEL32_dll.GetAppContainerNamedObjectPath(util.toPointer(Token), util.toPointer(AppContainerSid), ObjectPathLength, util.pwstrToFfi(ObjectPath), util.toPointer(ReturnLength)));
}

export function IsProcessInWDAGContainer(
  Reserved: Deno.PointerValue | Uint8Array /* ptr */,
  isProcessInWDAGContainer: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libapi_ms_win_security_isolatedcontainer_l1_1_1_dll.IsProcessInWDAGContainer(util.toPointer(Reserved), util.toPointer(isProcessInWDAGContainer));
}

export function IsProcessInIsolatedContainer(
  isProcessInIsolatedContainer: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libapi_ms_win_security_isolatedcontainer_l1_1_0_dll.IsProcessInIsolatedContainer(util.toPointer(isProcessInIsolatedContainer));
}

export function IsProcessInIsolatedWindowsEnvironment(
  isProcessInIsolatedWindowsEnvironment: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libIsolatedWindowsEnvironmentUtils_dll.IsProcessInIsolatedWindowsEnvironment(util.toPointer(isProcessInIsolatedWindowsEnvironment));
}

export function CreateAppContainerProfile(
  pszAppContainerName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  pszDisplayName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  pszDescription: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  pCapabilities: Deno.PointerValue | Uint8Array /* ptr */,
  dwCapabilityCount: number /* u32 */,
  ppSidAppContainerSid: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libUSERENV_dll.CreateAppContainerProfile(util.pwstrToFfi(pszAppContainerName), util.pwstrToFfi(pszDisplayName), util.pwstrToFfi(pszDescription), util.toPointer(pCapabilities), dwCapabilityCount, util.toPointer(ppSidAppContainerSid));
}

export function DeleteAppContainerProfile(
  pszAppContainerName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libUSERENV_dll.DeleteAppContainerProfile(util.pwstrToFfi(pszAppContainerName));
}

export function GetAppContainerRegistryLocation(
  desiredAccess: number /* u32 */,
  phAppContainerKey: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libUSERENV_dll.GetAppContainerRegistryLocation(desiredAccess, util.toPointer(phAppContainerKey));
}

export function GetAppContainerFolderPath(
  pszAppContainerSid: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  ppszPath: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libUSERENV_dll.GetAppContainerFolderPath(util.pwstrToFfi(pszAppContainerSid), util.toPointer(ppszPath));
}

export function DeriveRestrictedAppContainerSidFromAppContainerSidAndRestrictedName(
  psidAppContainerSid: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.PSID */,
  pszRestrictedAppContainerName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  ppsidRestrictedAppContainerSid: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libUSERENV_dll.DeriveRestrictedAppContainerSidFromAppContainerSidAndRestrictedName(util.toPointer(psidAppContainerSid), util.pwstrToFfi(pszRestrictedAppContainerName), util.toPointer(ppsidRestrictedAppContainerSid));
}

export function DeriveAppContainerSidFromAppContainerName(
  pszAppContainerName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  ppsidAppContainerSid: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libUSERENV_dll.DeriveAppContainerSidFromAppContainerName(util.pwstrToFfi(pszAppContainerName), util.toPointer(ppsidAppContainerSid));
}

