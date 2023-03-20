/// Auto-generated by Deno Win32: Windows.Win32.System.SubsystemForLinux.Apis

import * as util from "../../util.ts";

// Enums
export type WSL_DISTRIBUTION_FLAGS = number;

// Constants
export const WSL_DISTRIBUTION_FLAGS_NONE = 0;
export const WSL_DISTRIBUTION_FLAGS_ENABLE_INTEROP = 1;
export const WSL_DISTRIBUTION_FLAGS_APPEND_NT_PATH = 2;
export const WSL_DISTRIBUTION_FLAGS_ENABLE_DRIVE_MOUNTING = 4;

// Structs

export type PWSTR = Deno.PointerValue | Uint8Array;

export type BOOL = number;

export type HRESULT = number;

export type HANDLE = bigint | number;

// Native Libraries

try {
  var libApi_ms_win_wsl_api_l1_1_0_dll = Deno.dlopen("Api-ms-win-wsl-api-l1-1-0.dll", {
    WslIsDistributionRegistered: {
      parameters: ["buffer"],
      result: "i32",
    },
    WslRegisterDistribution: {
      parameters: ["buffer", "buffer"],
      result: "pointer",
    },
    WslUnregisterDistribution: {
      parameters: ["buffer"],
      result: "pointer",
    },
    WslConfigureDistribution: {
      parameters: ["buffer", "u32", "u32"],
      result: "pointer",
    },
    WslGetDistributionConfiguration: {
      parameters: ["buffer", "pointer", "pointer", "pointer", "pointer", "pointer"],
      result: "pointer",
    },
    WslLaunchInteractive: {
      parameters: ["buffer", "buffer", "i32", "pointer"],
      result: "pointer",
    },
    WslLaunch: {
      parameters: ["buffer", "buffer", "i32", "pointer", "pointer", "pointer", "pointer"],
      result: "pointer",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function WslIsDistributionRegistered(
  distributionName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): boolean /* Windows.Win32.Foundation.BOOL */ {
  return util.boolFromFfi(libApi_ms_win_wsl_api_l1_1_0_dll.WslIsDistributionRegistered(util.pwstrToFfi(distributionName)));
}

export function WslRegisterDistribution(
  distributionName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  tarGzFilename: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libApi_ms_win_wsl_api_l1_1_0_dll.WslRegisterDistribution(util.pwstrToFfi(distributionName), util.pwstrToFfi(tarGzFilename));
}

export function WslUnregisterDistribution(
  distributionName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libApi_ms_win_wsl_api_l1_1_0_dll.WslUnregisterDistribution(util.pwstrToFfi(distributionName));
}

export function WslConfigureDistribution(
  distributionName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  defaultUID: number /* u32 */,
  wslDistributionFlags: WSL_DISTRIBUTION_FLAGS /* Windows.Win32.System.SubsystemForLinux.WSL_DISTRIBUTION_FLAGS */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libApi_ms_win_wsl_api_l1_1_0_dll.WslConfigureDistribution(util.pwstrToFfi(distributionName), defaultUID, wslDistributionFlags);
}

export function WslGetDistributionConfiguration(
  distributionName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  distributionVersion: Deno.PointerValue | Uint8Array /* ptr */,
  defaultUID: Deno.PointerValue | Uint8Array /* ptr */,
  wslDistributionFlags: Deno.PointerValue | Uint8Array /* ptr */,
  defaultEnvironmentVariables: Deno.PointerValue | Uint8Array /* ptr */,
  defaultEnvironmentVariableCount: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libApi_ms_win_wsl_api_l1_1_0_dll.WslGetDistributionConfiguration(util.pwstrToFfi(distributionName), util.toPointer(distributionVersion), util.toPointer(defaultUID), util.toPointer(wslDistributionFlags), util.toPointer(defaultEnvironmentVariables), util.toPointer(defaultEnvironmentVariableCount));
}

export function WslLaunchInteractive(
  distributionName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  command: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  useCurrentWorkingDirectory: boolean /* Windows.Win32.Foundation.BOOL */,
  exitCode: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libApi_ms_win_wsl_api_l1_1_0_dll.WslLaunchInteractive(util.pwstrToFfi(distributionName), util.pwstrToFfi(command), util.boolToFfi(useCurrentWorkingDirectory), util.toPointer(exitCode));
}

export function WslLaunch(
  distributionName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  command: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  useCurrentWorkingDirectory: boolean /* Windows.Win32.Foundation.BOOL */,
  stdIn: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  stdOut: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  stdErr: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  process: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libApi_ms_win_wsl_api_l1_1_0_dll.WslLaunch(util.pwstrToFfi(distributionName), util.pwstrToFfi(command), util.boolToFfi(useCurrentWorkingDirectory), util.toPointer(stdIn), util.toPointer(stdOut), util.toPointer(stdErr), util.toPointer(process));
}

