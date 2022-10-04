import { TypeDef } from "./typedef.ts";

export const ELEMENT_TYPE_MAP = {
  end: 0x0,
  void: 0x1,
  bool: 0x2,
  char: 0x3,
  i8: 0x4,
  u8: 0x5,
  i16: 0x6,
  u16: 0x7,
  i32: 0x8,
  u32: 0x9,
  i64: 0xa,
  u64: 0xb,
  f32: 0xc,
  f64: 0xd,
  string: 0xe,
  ptr: 0xf,
  byref: 0x10,
  valuetype: 0x11,
  class: 0x12,
  var: 0x13,
  array: 0x14,
  genericinst: 0x15,
  typedbyref: 0x16,
  isize: 0x18,
  usize: 0x19,
  fnptr: 0x1b,
  object: 0x1c,
  szarray: 0x1d,
  mvar: 0x1e,
  cmode_reqd: 0x1f,
  cmode_opt: 0x20,
  internal: 0x21,
  max: 0x22,
  modifier: 0x40,
  sentinel: 0x41,
  pinned: 0x45,
} as const;

export type ElementType = keyof typeof ELEMENT_TYPE_MAP;

export class TypeId {
  base!: ElementType;
  arrayDimensions?: number[];
  genericParameterSequence?: number;
  name?: string;
  type?: TypeDef;
  typeArg?: TypeId;

  static fromValue(value: number) {
    const id = new TypeId();
    id.base = Object.entries(ELEMENT_TYPE_MAP).find((e) =>
      e[1] === value
    )![0] as ElementType;
    return id;
  }

  toString() {
    return `${this.name ? `${this.name}(` : ""}${this.base}${
      this.typeArg ? `<${this.typeArg}>` : ""
    }${this.arrayDimensions ? `[${this.arrayDimensions.join(", ")}]` : ""}${
      this.name ? ")" : ""
    }`;
  }
}
