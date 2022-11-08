/// Auto-generated by Deno Win32: Windows.Win32.Graphics.Direct3D9on12.Apis

import * as util from "../../util.ts";

// Constants
export const MAX_D3D9ON12_QUEUES = 2;

// Structs

export type BOOL = number;

/**
 * Windows.Win32.Graphics.Direct3D9on12.D3D9ON12_ARGS (size: 32)
 */
export interface D3D9ON12_ARGS {
  /** Windows.Win32.Foundation.BOOL */
  Enable9On12: boolean;
  /** Windows.Win32.System.Com.IUnknown */
  pD3D12Device: Uint8Array | Deno.PointerValue | null;
  /** array */
  ppD3D12Queues: Deno.PointerValue | null;
  /** u32 */
  NumQueues: number;
  /** u32 */
  NodeMask: number;
}

export const sizeofD3D9ON12_ARGS = 32;

export function allocD3D9ON12_ARGS(data?: Partial<D3D9ON12_ARGS>): Uint8Array {
  const buf = new Uint8Array(sizeofD3D9ON12_ARGS);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.Enable9On12 !== undefined) view.setInt32(0, Number(data.Enable9On12), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.pD3D12Device !== undefined) view.setBigUint64(8, data.pD3D12Device === null ? 0n : BigInt(util.toPointer(data.pD3D12Device)), true);
  // 0x10: pointer
  if (data?.ppD3D12Queues !== undefined) view.setBigUint64(16, data.ppD3D12Queues === null ? 0n : BigInt(util.toPointer(data.ppD3D12Queues)), true);
  // 0x18: u32
  if (data?.NumQueues !== undefined) view.setUint32(24, Number(data.NumQueues), true);
  // 0x1c: u32
  if (data?.NodeMask !== undefined) view.setUint32(28, Number(data.NodeMask), true);
  return buf;
}

export class D3D9ON12_ARGSView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: i32
  get Enable9On12(): number {
    return this.view.getInt32(0, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  get pD3D12Device(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: pointer
  get ppD3D12Queues(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(16, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x18: u32
  get NumQueues(): number {
    return this.view.getUint32(24, true);
  }

  // 0x1c: u32
  get NodeMask(): number {
    return this.view.getUint32(28, true);
  }

  // 0x00: i32
  set Enable9On12(value: number) {
    this.view.setInt32(0, value, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  set pD3D12Device(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, BigInt(util.toPointer(value)), true);
  }

  // 0x10: pointer
  set ppD3D12Queues(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(16, BigInt(util.toPointer(value)), true);
  }

  // 0x18: u32
  set NumQueues(value: number) {
    this.view.setUint32(24, value, true);
  }

  // 0x1c: u32
  set NodeMask(value: number) {
    this.view.setUint32(28, value, true);
  }
}

export type HRESULT = number;

// Native Libraries

try {
  var libd3d9_dll = Deno.dlopen("d3d9.dll", {
    Direct3DCreate9On12Ex: {
      parameters: ["u32", "pointer", "u32", "pointer"],
      result: "pointer",
    },
    Direct3DCreate9On12: {
      parameters: ["u32", "pointer", "u32"],
      result: "pointer",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function Direct3DCreate9On12Ex(
  SDKVersion: number /* u32 */,
  pOverrideList: Deno.PointerValue | Uint8Array | null /* ptr */,
  NumOverrideEntries: number /* u32 */,
  ppOutputInterface: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libd3d9_dll.Direct3DCreate9On12Ex(SDKVersion, util.toPointer(pOverrideList), NumOverrideEntries, util.toPointer(ppOutputInterface)));
}

export function Direct3DCreate9On12(
  SDKVersion: number /* u32 */,
  pOverrideList: Deno.PointerValue | Uint8Array | null /* ptr */,
  NumOverrideEntries: number /* u32 */,
): Deno.PointerValue | null /* Windows.Win32.Graphics.Direct3D9.IDirect3D9 */ {
  return util.pointerFromFfi(libd3d9_dll.Direct3DCreate9On12(SDKVersion, util.toPointer(pOverrideList), NumOverrideEntries));
}

