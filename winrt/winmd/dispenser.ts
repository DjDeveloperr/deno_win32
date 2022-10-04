import { IMetaDataDispenser } from "../com/IMetaDataDispenser.ts";
import { IMetaDataImport2 } from "../com/IMetaDataImport2.ts";
import { Scope } from "./scope.ts";

export class MetaDataDispenser {
  com: IMetaDataDispenser;

  constructor() {
    this.com = IMetaDataDispenser.createInstance();
  }

  openScope(scope: string, flags = 0) {
    return new Scope(this.com.OpenScope(scope, flags, IMetaDataImport2));
  }
}
