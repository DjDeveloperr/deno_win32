export function toPointer(
  v: Deno.PointerValue | Uint8Array | null,
): Deno.PointerValue {
  if (v === null) {
    return 0;
  } else if (v instanceof Uint8Array) {
    return Number(Deno.UnsafePointer.of(v));
  } else {
    return v;
  }
}

export function pointerFromFfi(v: Deno.PointerValue): Deno.PointerValue | null {
  if (v === 0) {
    return null;
  } else {
    return v;
  }
}

export function pstrToFfi(str: string | null): Uint8Array | null {
  if (str === null) {
    return null;
  }
  return new TextEncoder().encode(str + "\0");
}

export function pstrFromFfi(ptr: Deno.PointerValue): string | null {
  if (ptr === 0) {
    return null;
  }
  return Deno.UnsafePointerView.getCString(ptr);
}

export function pwstrToFfi(str: string | null): Uint8Array | null {
  if (str === null) {
    return null;
  }
  return new Uint8Array(
    new Uint16Array(new TextEncoder().encode(str + "\0")).buffer,
  );
}

export function pwstrFromFfi(ptr: Deno.PointerValue): string | null {
  if (ptr === 0) {
    return null;
  }
  let res = "";
  const view = new Deno.UnsafePointerView(BigInt(ptr));
  for (let i = 0;; i += 2) {
    const code = view.getUint16(i);
    if (code === 0) {
      break;
    }
    res += String.fromCharCode(code);
  }
  return res;
}

export function boolToFfi(b: boolean): number {
  return b ? 1 : 0;
}

export function boolFromFfi(b: number): boolean {
  return b !== 0;
}

export function hwndFromFfi(ptr: Deno.PointerValue): Deno.PointerValue | null {
  return ptr === 0 ? null : ptr;
}

export function hwndToFfi(ptr: Deno.PointerValue | null): Deno.PointerValue {
  return ptr === null ? 0 : ptr;
}
