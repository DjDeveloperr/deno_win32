/// Auto-generated by Deno Win32: Windows.Win32.Graphics.Direct3D.Dxc.Apis

import * as util from "../../../util.ts";

// Enums
export type DXC_CP = number;
export type DXC_OUT_KIND = number;

// Constants
export const DXC_CP_ACP = 0;
export const DXC_CP_UTF16 = 1200;
export const DXC_CP_UTF8 = 65001;
export const DXC_HASHFLAG_INCLUDES_SOURCE = 1;
export const DxcValidatorFlags_Default = 0;
export const DxcValidatorFlags_InPlaceEdit = 1;
export const DxcValidatorFlags_RootSignatureOnly = 2;
export const DxcValidatorFlags_ModuleOnly = 4;
export const DxcValidatorFlags_ValidMask = 7;
export const DxcVersionInfoFlags_None = 0;
export const DxcVersionInfoFlags_Debug = 1;
export const DxcVersionInfoFlags_Internal = 2;
export const DXC_OUT_NONE = 0;
export const DXC_OUT_OBJECT = 1;
export const DXC_OUT_ERRORS = 2;
export const DXC_OUT_PDB = 3;
export const DXC_OUT_SHADER_HASH = 4;
export const DXC_OUT_DISASSEMBLY = 5;
export const DXC_OUT_HLSL = 6;
export const DXC_OUT_TEXT = 7;
export const DXC_OUT_REFLECTION = 8;
export const DXC_OUT_ROOT_SIGNATURE = 9;
export const DXC_OUT_EXTRA_OUTPUTS = 10;
export const DXC_OUT_FORCE_DWORD = "-1";

// Structs

/**
 * Windows.Win32.Graphics.Direct3D.Dxc.DxcShaderHash (size: 16)
 */
export interface DxcShaderHash {
  /** u32 */
  Flags: number;
  /** array */
  HashDigest: Deno.PointerValue | null;
}

export const sizeofDxcShaderHash = 16;

export function allocDxcShaderHash(data?: Partial<DxcShaderHash>): Uint8Array {
  const buf = new Uint8Array(sizeofDxcShaderHash);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.Flags !== undefined) view.setUint32(0, Number(data.Flags), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.HashDigest !== undefined) view.setBigUint64(8, data.HashDigest === null ? 0n : BigInt(util.toPointer(data.HashDigest)), true);
  return buf;
}

/**
 * Windows.Win32.Graphics.Direct3D.Dxc.DxcBuffer (size: 24)
 */
export interface DxcBuffer {
  /** ptr */
  Ptr: Deno.PointerValue | Uint8Array | null;
  /** usize */
  Size: Deno.PointerValue;
  /** u32 */
  Encoding: number;
}

export const sizeofDxcBuffer = 24;

export function allocDxcBuffer(data?: Partial<DxcBuffer>): Uint8Array {
  const buf = new Uint8Array(sizeofDxcBuffer);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.Ptr !== undefined) view.setBigUint64(0, data.Ptr === null ? 0n : BigInt(util.toPointer(data.Ptr)), true);
  // 0x08: usize
  if (data?.Size !== undefined) view.setBigUint64(8, BigInt(data.Size), true);
  // 0x10: u32
  if (data?.Encoding !== undefined) view.setUint32(16, Number(data.Encoding), true);
  // 0x14: pad4
  return buf;
}

export type PWSTR = Deno.PointerValue | Uint8Array | null;

/**
 * Windows.Win32.Graphics.Direct3D.Dxc.DxcDefine (size: 16)
 */
export interface DxcDefine {
  /** Windows.Win32.Foundation.PWSTR */
  Name: string | null;
  /** Windows.Win32.Foundation.PWSTR */
  Value: string | null;
}

export const sizeofDxcDefine = 16;

export function allocDxcDefine(data?: Partial<DxcDefine>): Uint8Array {
  const buf = new Uint8Array(sizeofDxcDefine);
  const view = new DataView(buf.buffer);
  // 0x00: buffer
  if (data?.Name !== undefined) {
    (buf as any)._f0 = util.pwstrToFfi(data.Name);
    view.setBigUint64(0, (buf as any)._f0 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f0)), true);
  }
  // 0x08: buffer
  if (data?.Value !== undefined) {
    (buf as any)._f8 = util.pwstrToFfi(data.Value);
    view.setBigUint64(8, (buf as any)._f8 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f8)), true);
  }
  return buf;
}

/**
 * Windows.Win32.Graphics.Direct3D.Dxc.DxcArgPair (size: 16)
 */
export interface DxcArgPair {
  /** Windows.Win32.Foundation.PWSTR */
  pName: string | null;
  /** Windows.Win32.Foundation.PWSTR */
  pValue: string | null;
}

export const sizeofDxcArgPair = 16;

export function allocDxcArgPair(data?: Partial<DxcArgPair>): Uint8Array {
  const buf = new Uint8Array(sizeofDxcArgPair);
  const view = new DataView(buf.buffer);
  // 0x00: buffer
  if (data?.pName !== undefined) {
    (buf as any)._f0 = util.pwstrToFfi(data.pName);
    view.setBigUint64(0, (buf as any)._f0 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f0)), true);
  }
  // 0x08: buffer
  if (data?.pValue !== undefined) {
    (buf as any)._f8 = util.pwstrToFfi(data.pValue);
    view.setBigUint64(8, (buf as any)._f8 === null ? 0n : BigInt(Deno.UnsafePointer.of((buf as any)._f8)), true);
  }
  return buf;
}

export type HRESULT = number;

// Native Libraries

try {
  var libdxcompiler = Deno.dlopen("dxcompiler", {
    DxcCreateInstance: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "pointer",
    },
    DxcCreateInstance2: {
      parameters: ["pointer", "pointer", "pointer", "pointer"],
      result: "pointer",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function DxcCreateInstance(
  rclsid: Deno.PointerValue | Uint8Array | null /* ptr */,
  riid: Deno.PointerValue | Uint8Array | null /* ptr */,
  ppv: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libdxcompiler.DxcCreateInstance(util.toPointer(rclsid), util.toPointer(riid), util.toPointer(ppv)));
}

export function DxcCreateInstance2(
  pMalloc: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.Com.IMalloc */,
  rclsid: Deno.PointerValue | Uint8Array | null /* ptr */,
  riid: Deno.PointerValue | Uint8Array | null /* ptr */,
  ppv: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libdxcompiler.DxcCreateInstance2(util.toPointer(pMalloc), util.toPointer(rclsid), util.toPointer(riid), util.toPointer(ppv)));
}

