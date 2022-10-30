/// Auto-generated by Deno Win32: Windows.Win32.Devices.Properties.Apis

import * as util from "../../util.ts";

// Enums
export type DEVPROPSTORE = number;

// Constants
export const DEVPROP_TYPEMOD_ARRAY = 4096;
export const DEVPROP_TYPEMOD_LIST = 8192;
export const DEVPROP_TYPE_EMPTY = 0;
export const DEVPROP_TYPE_NULL = 1;
export const DEVPROP_TYPE_SBYTE = 2;
export const DEVPROP_TYPE_BYTE = 3;
export const DEVPROP_TYPE_INT16 = 4;
export const DEVPROP_TYPE_UINT16 = 5;
export const DEVPROP_TYPE_INT32 = 6;
export const DEVPROP_TYPE_UINT32 = 7;
export const DEVPROP_TYPE_INT64 = 8;
export const DEVPROP_TYPE_UINT64 = 9;
export const DEVPROP_TYPE_FLOAT = 10;
export const DEVPROP_TYPE_DOUBLE = 11;
export const DEVPROP_TYPE_DECIMAL = 12;
export const DEVPROP_TYPE_GUID = 13;
export const DEVPROP_TYPE_CURRENCY = 14;
export const DEVPROP_TYPE_DATE = 15;
export const DEVPROP_TYPE_FILETIME = 16;
export const DEVPROP_TYPE_BOOLEAN = 17;
export const DEVPROP_TYPE_STRING = 18;
export const DEVPROP_TYPE_SECURITY_DESCRIPTOR = 19;
export const DEVPROP_TYPE_SECURITY_DESCRIPTOR_STRING = 20;
export const DEVPROP_TYPE_DEVPROPKEY = 21;
export const DEVPROP_TYPE_DEVPROPTYPE = 22;
export const DEVPROP_TYPE_ERROR = 23;
export const DEVPROP_TYPE_NTSTATUS = 24;
export const DEVPROP_TYPE_STRING_INDIRECT = 25;
export const MAX_DEVPROP_TYPE = 25;
export const MAX_DEVPROP_TYPEMOD = 8192;
export const DEVPROP_MASK_TYPE = 4095;
export const DEVPROP_MASK_TYPEMOD = 61440;
export const DEVPROPID_FIRST_USABLE = 2;
export const DEVPROP_STORE_SYSTEM = 0;
export const DEVPROP_STORE_USER = 1;

// Structs

/**
 * Windows.Win32.Devices.Properties.DEVPROPKEY (size: 16)
 */
export interface DEVPROPKEY {
  /** System.Guid */
  fmtid: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  pid: number;
}

export const sizeofDEVPROPKEY = 16;

export function allocDEVPROPKEY(data?: Partial<DEVPROPKEY>): Uint8Array {
  const buf = new Uint8Array(sizeofDEVPROPKEY);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.fmtid !== undefined) view.setBigUint64(0, data.fmtid === null ? 0n : BigInt(util.toPointer(data.fmtid)), true);
  // 0x08: u32
  if (data?.pid !== undefined) view.setUint32(8, Number(data.pid), true);
  // 0x0c: pad4
  return buf;
}

export type PWSTR = Deno.PointerValue | Uint8Array | null;

/**
 * Windows.Win32.Devices.Properties.DEVPROPCOMPKEY (size: 24)
 */
export interface DEVPROPCOMPKEY {
  /** Windows.Win32.Devices.Properties.DEVPROPKEY */
  Key: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Devices.Properties.DEVPROPSTORE */
  Store: DEVPROPSTORE;
  /** Windows.Win32.Foundation.PWSTR */
  LocaleName: string | null | Uint8Array | Uint16Array;
}

export const sizeofDEVPROPCOMPKEY = 24;

export function allocDEVPROPCOMPKEY(data?: Partial<DEVPROPCOMPKEY>): Uint8Array {
  const buf = new Uint8Array(sizeofDEVPROPCOMPKEY);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.Key !== undefined) view.setBigUint64(0, data.Key === null ? 0n : BigInt(util.toPointer(data.Key)), true);
  // 0x08: i32
  if (data?.Store !== undefined) view.setInt32(8, Number(data.Store), true);
  // 0x0c: pad4
  // 0x10: buffer
  if (data?.LocaleName !== undefined) {
    (buf as any)._f16 = util.pwstrToFfi(data.LocaleName);
    view.setBigUint64(16, (buf as any)._f16 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f16)), true);
  }
  return buf;
}

/**
 * Windows.Win32.Devices.Properties.DEVPROPERTY (size: 24)
 */
export interface DEVPROPERTY {
  /** Windows.Win32.Devices.Properties.DEVPROPCOMPKEY */
  CompKey: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  Type: number;
  /** u32 */
  BufferSize: number;
  /** ptr */
  Buffer: Deno.PointerValue | Uint8Array | null;
}

export const sizeofDEVPROPERTY = 24;

export function allocDEVPROPERTY(data?: Partial<DEVPROPERTY>): Uint8Array {
  const buf = new Uint8Array(sizeofDEVPROPERTY);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.CompKey !== undefined) view.setBigUint64(0, data.CompKey === null ? 0n : BigInt(util.toPointer(data.CompKey)), true);
  // 0x08: u32
  if (data?.Type !== undefined) view.setUint32(8, Number(data.Type), true);
  // 0x0c: u32
  if (data?.BufferSize !== undefined) view.setUint32(12, Number(data.BufferSize), true);
  // 0x10: pointer
  if (data?.Buffer !== undefined) view.setBigUint64(16, data.Buffer === null ? 0n : BigInt(util.toPointer(data.Buffer)), true);
  return buf;
}

// Native Libraries

// Symbols

