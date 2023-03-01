export function toPointer(
  v: Deno.PointerValue | Uint8Array | bigint | number | null,
): Deno.PointerValue {
  if (v === null) {
    return null;
  } else if (v instanceof Uint8Array) {
    return Deno.UnsafePointer.of(v);
  } else if (typeof v === "number" || typeof v === "bigint") {
    return Deno.UnsafePointer.create(v);
  }
  return v;
}

export function createPointer(
  v: Deno.PointerValue | Uint8Array | number | bigint,
): Deno.PointerValue {
  if (v instanceof Uint8Array) {
    return Deno.UnsafePointer.of(v);
  }
  if (typeof v === "number" || typeof v === "bigint") {
    return Deno.UnsafePointer.create(v);
  }
  return v;
}

export function toBigInt(
  v: Deno.PointerValue | bigint | number | Uint8Array | null,
): bigint {
  if (typeof v === "bigint") return v;
  if (typeof v === "number") return BigInt(v);
  const ptr = toPointer(v);
  return ptr !== null ? BigInt(Deno.UnsafePointer.value(ptr)) : 0n;
}

export function toNumber(
  v: Deno.PointerValue | bigint | number | Uint8Array | null,
): number {
  if (typeof v === "number") return v;
  if (typeof v === "bigint") return Number(v);
  const ptr = toPointer(v);
  return ptr !== null ? Number(Deno.UnsafePointer.value(ptr)) : 0;
}

export function pointerFromFfi(
  v: Deno.PointerValue | bigint,
): Deno.PointerValue | null {
  return typeof v === "bigint" ? Deno.UnsafePointer.create(v) : v;
}

export function pstrToFfi(str: string | Uint8Array | null): Uint8Array | null {
  if (str === null) {
    return null;
  }
  if (str instanceof Uint8Array) {
    return str;
  }
  return new TextEncoder().encode(str + "\0");
}

export function pstrFromFfi(ptr: Deno.PointerValue): string | null {
  return ptr !== null ? Deno.UnsafePointerView.getCString(ptr) : null;
}

export function pwstrToFfi(
  str: string | Uint8Array | Uint16Array | null,
): Uint8Array | null {
  if (str === null) {
    return null;
  }
  if (str instanceof Uint8Array) {
    return str;
  }
  if (str instanceof Uint16Array) {
    return new Uint8Array(str.buffer);
  }
  return new Uint8Array(
    new Uint16Array(new TextEncoder().encode(str + "\0")).buffer,
  );
}

export function pwstrFromFfi(ptr: Deno.PointerValue): string | null {
  if (ptr === null) return null;

  let res = "";
  const view = new Deno.UnsafePointerView(ptr);
  for (let i = 0;; i += 2) {
    const code = view.getUint16(i);
    if (code === 0) {
      break;
    }
    res += String.fromCharCode(code);
  }
  return res;
}

export function boolToFfi(b: boolean | number): number {
  return b ? 1 : 0;
}

export function boolFromFfi(b: number): boolean {
  return b !== 0;
}

export function hwndFromFfi(ptr: Deno.PointerValue): Deno.PointerValue | null {
  return ptr;
}

export function hwndToFfi(ptr: Deno.PointerValue | null): Deno.PointerValue {
  return ptr;
}

export function unwrap(hr: Deno.PointerValue | null): Deno.PointerValue {
  if (hr !== null) {
    throw new Error(`HRESULT: 0x${toBigInt(hr).toString(16).padStart(8, "0")}`);
  }
  return hr;
}

export function charToFfi(c: string | number): number {
  return typeof c === "number" ? c : c.charCodeAt(0);
}

export function charFromFfi(c: number): string {
  return String.fromCharCode(c);
}
