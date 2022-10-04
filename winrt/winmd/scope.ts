import { IMetaDataImport2 } from "../com/IMetaDataImport2.ts";
import { TypeDef } from "./typedef.ts";

export class Scope {
  #typeDefs = new Array<TypeDef>();

  constructor(public com: IMetaDataImport2) {
    this.com = com;
  }

  get moduleToken() {
    const tok = new Uint32Array(1);
    this.com.GetModuleFromScope(tok);
    return tok[0];
  }

  get typeDefs() {
    if (this.#typeDefs.length === 0) {
      const phEnum = new BigUint64Array(1);
      const rgTypeDefs = new Uint32Array(1);
      const pcTypeDefs = new Uint32Array(1);

      let hr;

      hr = this.com.EnumTypeDefs(
        phEnum,
        rgTypeDefs,
        1,
        pcTypeDefs,
      );

      while (hr === 0) {
        this.#typeDefs.push(new TypeDef(this, rgTypeDefs[0]));
        hr = this.com.EnumTypeDefs(
          phEnum,
          rgTypeDefs,
          1,
          pcTypeDefs,
        );
      }

      this.com.CloseEnum(phEnum[0]);
    }
    return this.#typeDefs;
  }
}
