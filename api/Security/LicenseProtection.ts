/// Auto-generated by Deno Win32: Windows.Win32.Security.LicenseProtection.Apis

import * as util from "../../util.ts";

// Enums
export type LicenseProtectionStatus = number;

// Constants
export const Success = 0;
export const LicenseKeyNotFound = 1;
export const LicenseKeyUnprotected = 2;
export const LicenseKeyCorrupted = 3;
export const LicenseKeyAlreadyExists = 4;

// Structs

export type PWSTR = Deno.PointerValue | Uint8Array;

export type HRESULT = number;

// Native Libraries

try {
  var liblicenseprotection_dll = Deno.dlopen("licenseprotection.dll", {
    RegisterLicenseKeyWithExpiration: {
      parameters: ["buffer", "u32", "pointer"],
      result: "pointer",
    },
    ValidateLicenseKeyProtection: {
      parameters: ["buffer", "pointer", "pointer", "pointer"],
      result: "pointer",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function RegisterLicenseKeyWithExpiration(
  licenseKey: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  validityInDays: number /* u32 */,
  status: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return liblicenseprotection_dll.RegisterLicenseKeyWithExpiration(util.pwstrToFfi(licenseKey), validityInDays, util.toPointer(status));
}

export function ValidateLicenseKeyProtection(
  licenseKey: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  notValidBefore: Deno.PointerValue | Uint8Array /* ptr */,
  notValidAfter: Deno.PointerValue | Uint8Array /* ptr */,
  status: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return liblicenseprotection_dll.ValidateLicenseKeyProtection(util.pwstrToFfi(licenseKey), util.toPointer(notValidBefore), util.toPointer(notValidAfter), util.toPointer(status));
}

