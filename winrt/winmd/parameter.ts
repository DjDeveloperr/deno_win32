import { Scope } from "./scope.ts";
import { ELEMENT_TYPE_MAP, TypeId } from "./typeid.ts";

export class Parameter {
  #initialized = false;
  #name = "";
  #sequence = 0;
  #attr = 0;
  #cPlusTypeFlag = 0;
  #sig!: Uint8Array;
  #type!: TypeId;

  constructor(public scope: Scope, public token: number) {}

  initFromType(type: TypeId) {
    this.#type = type;
    this.#initialized = true;
    return this;
  }

  #initialize() {
    if (!this.#initialized) {
      const ptkMethodDef = new Uint32Array(1);
      const pulSequence = new Uint32Array(1);
      const szName = new Uint16Array(256);
      const pchName = new Uint32Array(1);
      const pdwAttr = new Uint32Array(1);
      const pdwCPlusTypeFlag = new Uint32Array(1);
      const ppValue = new BigUint64Array(1);
      const pcchValue = new BigUint64Array(1);

      const hr = this.scope.com.GetParamProps(
        this.token,
        ptkMethodDef,
        pulSequence,
        szName,
        szName.length,
        pchName,
        pdwAttr,
        pdwCPlusTypeFlag,
        ppValue,
        pcchValue,
      );

      if (hr === 0) {
        this.#name = new TextDecoder("utf-16le").decode(
          szName.subarray(0, szName.indexOf(0)),
        );
        this.#sequence = pulSequence[0];
        this.#attr = pdwAttr[0];
        this.#cPlusTypeFlag = pdwCPlusTypeFlag[0];
        this.#sig = new Uint8Array(Number(pcchValue[0]));
        new Deno.UnsafePointerView(ppValue[0]).copyInto(
          this.#sig,
        );
        this.#type = TypeId.fromValue(this.#cPlusTypeFlag);

        this.#initialized = true;
      }
    }
  }

  get name() {
    this.#initialize();
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get sequence(): number {
    this.#initialize();
    return this.#sequence;
  }

  get attr() {
    this.#initialize();
    return this.#attr;
  }

  get cPlusTypeFlag() {
    this.#initialize();
    return this.#cPlusTypeFlag;
  }

  get sig() {
    this.#initialize();
    return this.#sig;
  }

  get isIn() {
    return (this.attr & 0x0001) === 0x0001;
  }

  get isOut() {
    return (this.attr & 0x0002) === 0x0002;
  }

  get isOptional() {
    return (this.attr & 0x0010) === 0x0010;
  }

  get hasDefault() {
    return (this.attr & 0x1000) === 0x1000;
  }

  get hasFieldMarshal() {
    return (this.attr & 0x2000) === 0x2000;
  }

  get type() {
    this.#initialize();
    return this.#type;
  }

  [Symbol.for("Deno.customInspect")]() {
    return `Parameter(${this.sequence}, ${this.name}, ${this.attr}, ${this.cPlusTypeFlag})`;
  }
}
