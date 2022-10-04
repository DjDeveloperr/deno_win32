import { Scope } from "./scope.ts";
import { TypeDef } from "./typedef.ts";
import { TypeTuple } from "./typetuple.ts";

export class Field {
  #initialized = false;
  #name = "";
  #type!: TypeDef;
  #attr = 0;
  #sig!: Uint8Array;
  #cPlusTypeFlag = 0;
  #pValue!: bigint;
  #cchValue!: number;

  constructor(public scope: Scope, public token: number) {}

  #initialize() {
    if (!this.#initialized) {
      const szField = new Uint16Array(256);
      const pchField = new Uint32Array(1);
      const pdwAttr = new Uint32Array(1);
      const ppvSigBlob = new BigUint64Array(1);
      const pcbSigBlob = new Uint32Array(1);
      const ptkTypeDef = new Uint32Array(1);
      const ppValue = new BigUint64Array(1);
      const pcchValue = new Uint32Array(1);
      const pdwCPlusTypeFlag = new Uint32Array(1);

      const hr = this.scope.com.GetFieldProps(
        this.token,
        ptkTypeDef,
        szField,
        szField.length,
        pchField,
        pdwAttr,
        ppvSigBlob,
        pcbSigBlob,
        pdwCPlusTypeFlag,
        ppValue,
        pcchValue,
      );

      if (hr === 0) {
        this.#name = new TextDecoder("utf-16le").decode(
          szField.subarray(0, szField.indexOf(0)),
        );
        this.#attr = pdwAttr[0];
        this.#cPlusTypeFlag = pdwCPlusTypeFlag[0];
        this.#sig = new Uint8Array(Number(pcbSigBlob[0]));
        new Deno.UnsafePointerView(ppvSigBlob[0])
          .copyInto(
            this.#sig,
          );
        this.#type = new TypeDef(this.scope, ptkTypeDef[0]);
        this.#pValue = ppValue[0];
        this.#cchValue = pcchValue[0];

        this.#initialized = true;
      }
    }
  }

  get name() {
    this.#initialize();
    return this.#name;
  }

  get attr() {
    this.#initialize();
    return this.#attr;
  }

  get sig() {
    this.#initialize();
    return this.#sig;
  }

  get type() {
    this.#initialize();
    return new TypeTuple(this.scope, this.#sig.subarray(1)).type;
  }

  get cPlusTypeFlag() {
    this.#initialize();
    return this.#cPlusTypeFlag;
  }

  get pValue() {
    this.#initialize();
    return this.#pValue;
  }

  get cchValue() {
    this.#initialize();
    return this.#cchValue;
  }

  get isStatic() {
    return (this.#attr & 0x0010) !== 0;
  }

  [Symbol.for("Deno.customInspect")]() {
    return `Field(${this.name}: ${Deno.inspect(this.type)})`;
  }
}
