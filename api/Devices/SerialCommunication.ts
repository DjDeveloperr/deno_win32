/// Auto-generated by Deno Win32: Windows.Win32.Devices.SerialCommunication.Apis

import * as util from "../../util.ts";

// Constants
export const COMDB_MIN_PORTS_ARBITRATED = 256;
export const COMDB_MAX_PORTS_ARBITRATED = 4096;
export const CDB_REPORT_BITS = 0;
export const CDB_REPORT_BYTES = 1;

// Structs

export type HCOMDB = number | bigint;

export type BOOL = number;

// Native Libraries

try {
  var libMSPORTS_dll = Deno.dlopen("MSPORTS.dll", {
    ComDBOpen: {
      parameters: ["pointer"],
      result: "i32",
    },
    ComDBClose: {
      parameters: ["pointer"],
      result: "i32",
    },
    ComDBGetCurrentPortUsage: {
      parameters: ["pointer", "pointer", "u32", "u32", "pointer"],
      result: "i32",
    },
    ComDBClaimNextFreePort: {
      parameters: ["pointer", "pointer"],
      result: "i32",
    },
    ComDBClaimPort: {
      parameters: ["pointer", "u32", "i32", "pointer"],
      result: "i32",
    },
    ComDBReleasePort: {
      parameters: ["pointer", "u32"],
      result: "i32",
    },
    ComDBResizeDatabase: {
      parameters: ["pointer", "u32"],
      result: "i32",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function ComDBOpen(
  PHComDB: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* i32 */ {
  return libMSPORTS_dll.ComDBOpen(util.toPointer(PHComDB));
}

export function ComDBClose(
  HComDB: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Devices.SerialCommunication.HCOMDB */,
): number /* i32 */ {
  return libMSPORTS_dll.ComDBClose(util.toPointer(HComDB));
}

export function ComDBGetCurrentPortUsage(
  HComDB: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Devices.SerialCommunication.HCOMDB */,
  Buffer: Deno.PointerValue | Uint8Array | null /* ptr */,
  BufferSize: number /* u32 */,
  ReportType: number /* u32 */,
  MaxPortsReported: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* i32 */ {
  return libMSPORTS_dll.ComDBGetCurrentPortUsage(util.toPointer(HComDB), util.toPointer(Buffer), BufferSize, ReportType, util.toPointer(MaxPortsReported));
}

export function ComDBClaimNextFreePort(
  HComDB: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Devices.SerialCommunication.HCOMDB */,
  ComNumber: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* i32 */ {
  return libMSPORTS_dll.ComDBClaimNextFreePort(util.toPointer(HComDB), util.toPointer(ComNumber));
}

export function ComDBClaimPort(
  HComDB: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Devices.SerialCommunication.HCOMDB */,
  ComNumber: number /* u32 */,
  ForceClaim: boolean /* Windows.Win32.Foundation.BOOL */,
  Forced: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* i32 */ {
  return libMSPORTS_dll.ComDBClaimPort(util.toPointer(HComDB), ComNumber, util.boolToFfi(ForceClaim), util.toPointer(Forced));
}

export function ComDBReleasePort(
  HComDB: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Devices.SerialCommunication.HCOMDB */,
  ComNumber: number /* u32 */,
): number /* i32 */ {
  return libMSPORTS_dll.ComDBReleasePort(util.toPointer(HComDB), ComNumber);
}

export function ComDBResizeDatabase(
  HComDB: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Devices.SerialCommunication.HCOMDB */,
  NewSize: number /* u32 */,
): number /* i32 */ {
  return libMSPORTS_dll.ComDBResizeDatabase(util.toPointer(HComDB), NewSize);
}

