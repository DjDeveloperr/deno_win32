/// Auto-generated by Deno Win32: Windows.Win32.System.TpmBaseServices.Apis

import * as util from "../../util.ts";

// Enums
export type TBS_COMMAND_PRIORITY = number;
export type TBS_COMMAND_LOCALITY = number;

// Constants
export const TBS_COMMAND_PRIORITY_LOW = 100;
export const TBS_COMMAND_PRIORITY_NORMAL = 200;
export const TBS_COMMAND_PRIORITY_SYSTEM = 400;
export const TBS_COMMAND_PRIORITY_HIGH = 300;
export const TBS_COMMAND_PRIORITY_MAX = 2147483648;
export const TBS_COMMAND_LOCALITY_ZERO = 0;
export const TBS_COMMAND_LOCALITY_ONE = 1;
export const TBS_COMMAND_LOCALITY_TWO = 2;
export const TBS_COMMAND_LOCALITY_THREE = 3;
export const TBS_COMMAND_LOCALITY_FOUR = 4;
export const TBS_CONTEXT_VERSION_ONE = 1;
export const TBS_SUCCESS = 0;
export const TBS_OWNERAUTH_TYPE_FULL = 1;
export const TBS_OWNERAUTH_TYPE_ADMIN = 2;
export const TBS_OWNERAUTH_TYPE_USER = 3;
export const TBS_OWNERAUTH_TYPE_ENDORSEMENT = 4;
export const TBS_OWNERAUTH_TYPE_ENDORSEMENT_20 = 12;
export const TBS_OWNERAUTH_TYPE_STORAGE_20 = 13;
export const TBS_CONTEXT_VERSION_TWO = 2;
export const TPM_WNF_INFO_CLEAR_SUCCESSFUL = 1;
export const TPM_WNF_INFO_OWNERSHIP_SUCCESSFUL = 2;
export const TPM_WNF_INFO_NO_REBOOT_REQUIRED = 1;
export const TPM_VERSION_UNKNOWN = 0;
export const TPM_VERSION_12 = 1;
export const TPM_VERSION_20 = 2;
export const TPM_IFTYPE_UNKNOWN = 0;
export const TPM_IFTYPE_1 = 1;
export const TPM_IFTYPE_TRUSTZONE = 2;
export const TPM_IFTYPE_HW = 3;
export const TPM_IFTYPE_EMULATOR = 4;
export const TPM_IFTYPE_SPB = 5;
export const TBS_TCGLOG_SRTM_CURRENT = 0;
export const TBS_TCGLOG_DRTM_CURRENT = 1;
export const TBS_TCGLOG_SRTM_BOOT = 2;
export const TBS_TCGLOG_SRTM_RESUME = 3;
export const TBS_TCGLOG_DRTM_BOOT = 4;
export const TBS_TCGLOG_DRTM_RESUME = 5;

// Structs

/**
 * Windows.Win32.System.TpmBaseServices.TBS_CONTEXT_PARAMS (size: 8)
 */
export interface TBS_CONTEXT_PARAMS {
  /** u32 */
  version: number;
}

export const sizeofTBS_CONTEXT_PARAMS = 8;

export function allocTBS_CONTEXT_PARAMS(data?: Partial<TBS_CONTEXT_PARAMS>): Uint8Array {
  const buf = new Uint8Array(sizeofTBS_CONTEXT_PARAMS);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.version !== undefined) view.setUint32(0, Number(data.version), true);
  // 0x04: pad4
  return buf;
}

/**
 * _Anonymous_e__Struct (size: 16)
 */
export interface _Anonymous_e__Struct {
  /** u64 */
  Alignment: Deno.PointerValue;
  /** u64 */
  Region: Deno.PointerValue;
}

export const sizeof_Anonymous_e__Struct = 16;

export function alloc_Anonymous_e__Struct(data?: Partial<_Anonymous_e__Struct>): Uint8Array {
  const buf = new Uint8Array(sizeof_Anonymous_e__Struct);
  const view = new DataView(buf.buffer);
  // 0x00: u64
  if (data?.Alignment !== undefined) view.setBigUint64(0, BigInt(data.Alignment), true);
  // 0x08: u64
  if (data?.Region !== undefined) view.setBigUint64(8, BigInt(data.Region), true);
  return buf;
}

/**
 * _Anonymous_e__Union (size: 16)
 */
export interface _Anonymous_e__Union {
  /** _Anonymous_e__Struct */
  Anonymous: Uint8Array | Deno.PointerValue | null;
  /** array */
  X: Deno.PointerValue | null;
}

export const sizeof_Anonymous_e__Union = 16;

export function alloc_Anonymous_e__Union(data?: Partial<_Anonymous_e__Union>): Uint8Array {
  const buf = new Uint8Array(sizeof_Anonymous_e__Union);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.Anonymous !== undefined) view.setBigUint64(0, data.Anonymous === null ? 0n : BigInt(util.toPointer(data.Anonymous)), true);
  // 0x08: pointer
  if (data?.X !== undefined) view.setBigUint64(8, data.X === null ? 0n : BigInt(util.toPointer(data.X)), true);
  return buf;
}

/**
 * Windows.Win32.System.TpmBaseServices.TBS_CONTEXT_PARAMS2 (size: 16)
 */
export interface TBS_CONTEXT_PARAMS2 {
  /** u32 */
  version: number;
  /** _Anonymous_e__Union */
  Anonymous: Uint8Array | Deno.PointerValue | null;
}

export const sizeofTBS_CONTEXT_PARAMS2 = 16;

export function allocTBS_CONTEXT_PARAMS2(data?: Partial<TBS_CONTEXT_PARAMS2>): Uint8Array {
  const buf = new Uint8Array(sizeofTBS_CONTEXT_PARAMS2);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.version !== undefined) view.setUint32(0, Number(data.version), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.Anonymous !== undefined) view.setBigUint64(8, data.Anonymous === null ? 0n : BigInt(util.toPointer(data.Anonymous)), true);
  return buf;
}

/**
 * Windows.Win32.System.TpmBaseServices.tdTPM_WNF_PROVISIONING (size: 16)
 */
export interface tdTPM_WNF_PROVISIONING {
  /** u32 */
  status: number;
  /** array */
  message: Deno.PointerValue | null;
}

export const sizeofTdTPM_WNF_PROVISIONING = 16;

export function allocTdTPM_WNF_PROVISIONING(data?: Partial<tdTPM_WNF_PROVISIONING>): Uint8Array {
  const buf = new Uint8Array(sizeofTdTPM_WNF_PROVISIONING);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.status !== undefined) view.setUint32(0, Number(data.status), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.message !== undefined) view.setBigUint64(8, data.message === null ? 0n : BigInt(util.toPointer(data.message)), true);
  return buf;
}

/**
 * Windows.Win32.System.TpmBaseServices.TPM_DEVICE_INFO (size: 16)
 */
export interface TPM_DEVICE_INFO {
  /** u32 */
  structVersion: number;
  /** u32 */
  tpmVersion: number;
  /** u32 */
  tpmInterfaceType: number;
  /** u32 */
  tpmImpRevision: number;
}

export const sizeofTPM_DEVICE_INFO = 16;

export function allocTPM_DEVICE_INFO(data?: Partial<TPM_DEVICE_INFO>): Uint8Array {
  const buf = new Uint8Array(sizeofTPM_DEVICE_INFO);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.structVersion !== undefined) view.setUint32(0, Number(data.structVersion), true);
  // 0x04: u32
  if (data?.tpmVersion !== undefined) view.setUint32(4, Number(data.tpmVersion), true);
  // 0x08: u32
  if (data?.tpmInterfaceType !== undefined) view.setUint32(8, Number(data.tpmInterfaceType), true);
  // 0x0c: u32
  if (data?.tpmImpRevision !== undefined) view.setUint32(12, Number(data.tpmImpRevision), true);
  return buf;
}

export type HRESULT = number;

export type PWSTR = Deno.PointerValue | Uint8Array | null;

// Native Libraries

try {
  var libtbs = Deno.dlopen("tbs", {
    Tbsi_Context_Create: {
      parameters: ["pointer", "pointer"],
      result: "u32",
    },
    Tbsip_Context_Close: {
      parameters: ["pointer"],
      result: "u32",
    },
    Tbsip_Submit_Command: {
      parameters: ["pointer", "u32", "u32", "pointer", "u32", "pointer", "pointer"],
      result: "u32",
    },
    Tbsip_Cancel_Commands: {
      parameters: ["pointer"],
      result: "u32",
    },
    Tbsi_Physical_Presence_Command: {
      parameters: ["pointer", "pointer", "u32", "pointer", "pointer"],
      result: "u32",
    },
    Tbsi_Get_TCG_Log: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "u32",
    },
    Tbsi_GetDeviceInfo: {
      parameters: ["u32", "pointer"],
      result: "u32",
    },
    Tbsi_Get_OwnerAuth: {
      parameters: ["pointer", "u32", "pointer", "pointer"],
      result: "u32",
    },
    Tbsi_Revoke_Attestation: {
      parameters: [],
      result: "u32",
    },
    GetDeviceID: {
      parameters: ["pointer", "u32", "pointer", "pointer"],
      result: "pointer",
    },
    GetDeviceIDString: {
      parameters: ["buffer", "u32", "pointer", "pointer"],
      result: "pointer",
    },
    Tbsi_Create_Windows_Key: {
      parameters: ["u32"],
      result: "u32",
    },
    Tbsi_Get_TCG_Log_Ex: {
      parameters: ["u32", "pointer", "pointer"],
      result: "u32",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function Tbsi_Context_Create(
  pContextParams: Deno.PointerValue | Uint8Array | null /* ptr */,
  phContext: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libtbs.Tbsi_Context_Create(util.toPointer(pContextParams), util.toPointer(phContext));
}

export function Tbsip_Context_Close(
  hContext: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libtbs.Tbsip_Context_Close(util.toPointer(hContext));
}

export function Tbsip_Submit_Command(
  hContext: Deno.PointerValue | Uint8Array | null /* ptr */,
  Locality: TBS_COMMAND_LOCALITY /* Windows.Win32.System.TpmBaseServices.TBS_COMMAND_LOCALITY */,
  Priority: TBS_COMMAND_PRIORITY /* Windows.Win32.System.TpmBaseServices.TBS_COMMAND_PRIORITY */,
  pabCommand: Deno.PointerValue | Uint8Array | null /* ptr */,
  cbCommand: number /* u32 */,
  pabResult: Deno.PointerValue | Uint8Array | null /* ptr */,
  pcbResult: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libtbs.Tbsip_Submit_Command(util.toPointer(hContext), Locality, Priority, util.toPointer(pabCommand), cbCommand, util.toPointer(pabResult), util.toPointer(pcbResult));
}

export function Tbsip_Cancel_Commands(
  hContext: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libtbs.Tbsip_Cancel_Commands(util.toPointer(hContext));
}

export function Tbsi_Physical_Presence_Command(
  hContext: Deno.PointerValue | Uint8Array | null /* ptr */,
  pabInput: Deno.PointerValue | Uint8Array | null /* ptr */,
  cbInput: number /* u32 */,
  pabOutput: Deno.PointerValue | Uint8Array | null /* ptr */,
  pcbOutput: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libtbs.Tbsi_Physical_Presence_Command(util.toPointer(hContext), util.toPointer(pabInput), cbInput, util.toPointer(pabOutput), util.toPointer(pcbOutput));
}

export function Tbsi_Get_TCG_Log(
  hContext: Deno.PointerValue | Uint8Array | null /* ptr */,
  pOutputBuf: Deno.PointerValue | Uint8Array | null /* ptr */,
  pOutputBufLen: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libtbs.Tbsi_Get_TCG_Log(util.toPointer(hContext), util.toPointer(pOutputBuf), util.toPointer(pOutputBufLen));
}

export function Tbsi_GetDeviceInfo(
  Size: number /* u32 */,
  Info: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libtbs.Tbsi_GetDeviceInfo(Size, util.toPointer(Info));
}

export function Tbsi_Get_OwnerAuth(
  hContext: Deno.PointerValue | Uint8Array | null /* ptr */,
  ownerauthType: number /* u32 */,
  pOutputBuf: Deno.PointerValue | Uint8Array | null /* ptr */,
  pOutputBufLen: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libtbs.Tbsi_Get_OwnerAuth(util.toPointer(hContext), ownerauthType, util.toPointer(pOutputBuf), util.toPointer(pOutputBufLen));
}

export function Tbsi_Revoke_Attestation(): number /* u32 */ {
  return libtbs.Tbsi_Revoke_Attestation();
}

export function GetDeviceID(
  pbWindowsAIK: Deno.PointerValue | Uint8Array | null /* ptr */,
  cbWindowsAIK: number /* u32 */,
  pcbResult: Deno.PointerValue | Uint8Array | null /* ptr */,
  pfProtectedByTPM: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libtbs.GetDeviceID(util.toPointer(pbWindowsAIK), cbWindowsAIK, util.toPointer(pcbResult), util.toPointer(pfProtectedByTPM)));
}

export function GetDeviceIDString(
  pszWindowsAIK: string | null /* Windows.Win32.Foundation.PWSTR */,
  cchWindowsAIK: number /* u32 */,
  pcchResult: Deno.PointerValue | Uint8Array | null /* ptr */,
  pfProtectedByTPM: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libtbs.GetDeviceIDString(util.pwstrToFfi(pszWindowsAIK), cchWindowsAIK, util.toPointer(pcchResult), util.toPointer(pfProtectedByTPM)));
}

export function Tbsi_Create_Windows_Key(
  keyHandle: number /* u32 */,
): number /* u32 */ {
  return libtbs.Tbsi_Create_Windows_Key(keyHandle);
}

export function Tbsi_Get_TCG_Log_Ex(
  logType: number /* u32 */,
  pbOutput: Deno.PointerValue | Uint8Array | null /* ptr */,
  pcbOutput: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libtbs.Tbsi_Get_TCG_Log_Ex(logType, util.toPointer(pbOutput), util.toPointer(pcbOutput));
}

