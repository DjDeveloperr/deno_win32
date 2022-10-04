import { GUID } from "../guid.ts";
import { IMetaDataImport } from "./IMetaDataImport.ts";

export class IMetaDataImport2 extends IMetaDataImport {
  static GUID = GUID.fromString("{FCE5EFA0-8BBA-4f8E-A036-8F2022B08466}");

  [Symbol.for("COMObject.name")]() {
    return "IMetaDataImport2";
  }
}
