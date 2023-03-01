/// Auto-generated by Deno Win32: Windows.Win32.System.SecurityCenter.Apis

import * as util from "../../util.ts";

// Enums
export type WSC_SECURITY_PRODUCT_SUBSTATUS = number;
export type WSC_SECURITY_PRODUCT_STATE = number;
export type SECURITY_PRODUCT_TYPE = number;
export type WSC_SECURITY_SIGNATURE_STATUS = number;
export type WSC_SECURITY_PROVIDER = number;
export type WSC_SECURITY_PROVIDER_HEALTH = number;

// Constants
export const WSC_SECURITY_PRODUCT_SUBSTATUS_NOT_SET = 0;
export const WSC_SECURITY_PRODUCT_SUBSTATUS_NO_ACTION = 1;
export const WSC_SECURITY_PRODUCT_SUBSTATUS_ACTION_RECOMMENDED = 2;
export const WSC_SECURITY_PRODUCT_SUBSTATUS_ACTION_NEEDED = 3;
export const WSC_SECURITY_PRODUCT_STATE_ON = 0;
export const WSC_SECURITY_PRODUCT_STATE_OFF = 1;
export const WSC_SECURITY_PRODUCT_STATE_SNOOZED = 2;
export const WSC_SECURITY_PRODUCT_STATE_EXPIRED = 3;
export const SECURITY_PRODUCT_TYPE_ANTIVIRUS = 0;
export const SECURITY_PRODUCT_TYPE_FIREWALL = 1;
export const SECURITY_PRODUCT_TYPE_ANTISPYWARE = 2;
export const WSC_SECURITY_PRODUCT_OUT_OF_DATE = 0;
export const WSC_SECURITY_PRODUCT_UP_TO_DATE = 1;
export const WSC_SECURITY_PROVIDER_FIREWALL = 1;
export const WSC_SECURITY_PROVIDER_AUTOUPDATE_SETTINGS = 2;
export const WSC_SECURITY_PROVIDER_ANTIVIRUS = 4;
export const WSC_SECURITY_PROVIDER_ANTISPYWARE = 8;
export const WSC_SECURITY_PROVIDER_INTERNET_SETTINGS = 16;
export const WSC_SECURITY_PROVIDER_USER_ACCOUNT_CONTROL = 32;
export const WSC_SECURITY_PROVIDER_SERVICE = 64;
export const WSC_SECURITY_PROVIDER_NONE = 0;
export const WSC_SECURITY_PROVIDER_ALL = 127;
export const WSC_SECURITY_PROVIDER_HEALTH_GOOD = 0;
export const WSC_SECURITY_PROVIDER_HEALTH_NOTMONITORED = 1;
export const WSC_SECURITY_PROVIDER_HEALTH_POOR = 2;
export const WSC_SECURITY_PROVIDER_HEALTH_SNOOZE = 3;

// Structs

export type HRESULT = number;

export type HANDLE = number | bigint;

// Native Libraries

try {
  var libWSCAPI_dll = Deno.dlopen("WSCAPI.dll", {
    WscRegisterForChanges: {
      parameters: ["pointer", "pointer", "pointer", "pointer"],
      result: "pointer",
    },
    WscUnRegisterChanges: {
      parameters: ["pointer"],
      result: "pointer",
    },
    WscRegisterForUserNotifications: {
      parameters: [],
      result: "pointer",
    },
    WscGetSecurityProviderHealth: {
      parameters: ["u32", "pointer"],
      result: "pointer",
    },
    WscQueryAntiMalwareUri: {
      parameters: [],
      result: "pointer",
    },
    WscGetAntiMalwareUri: {
      parameters: ["pointer"],
      result: "pointer",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function WscRegisterForChanges(
  Reserved: Deno.PointerValue | Uint8Array | null /* ptr */,
  phCallbackRegistration: Deno.PointerValue | Uint8Array | null /* ptr */,
  lpCallbackAddress: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.Threading.LPTHREAD_START_ROUTINE */,
  pContext: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libWSCAPI_dll.WscRegisterForChanges(util.toPointer(Reserved), util.toPointer(phCallbackRegistration), util.toPointer(lpCallbackAddress), util.toPointer(pContext)));
}

export function WscUnRegisterChanges(
  hRegistrationHandle: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libWSCAPI_dll.WscUnRegisterChanges(util.toPointer(hRegistrationHandle)));
}

export function WscRegisterForUserNotifications(): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libWSCAPI_dll.WscRegisterForUserNotifications());
}

export function WscGetSecurityProviderHealth(
  Providers: number /* u32 */,
  pHealth: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libWSCAPI_dll.WscGetSecurityProviderHealth(Providers, util.toPointer(pHealth)));
}

export function WscQueryAntiMalwareUri(): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libWSCAPI_dll.WscQueryAntiMalwareUri());
}

export function WscGetAntiMalwareUri(
  ppszUri: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libWSCAPI_dll.WscGetAntiMalwareUri(util.toPointer(ppszUri)));
}

