import { Scope } from "./scope.ts";
import { TypeDef } from "./typedef.ts";
import { TypeId } from "./typeid.ts";

export function uncompressedData(rawBytes: Uint8Array): [number, number] {
  if (rawBytes.byteLength === 0) {
    throw new Error("Bad Signature");
  }

  if ((rawBytes[0] & 0x80) === 0x00) {
    return [rawBytes[0], 1];
  } else if ((rawBytes[0] & 0xC0) === 0x80) {
    if (rawBytes.length < 2) {
      throw new Error("Bad Signature");
    } else {
      return [
        (rawBytes[0] & 0x3F) << 8 | rawBytes[1],
        2,
      ];
    }
  } else if ((rawBytes[0] & 0xE0) === 0xC0) {
    if (rawBytes.length < 4) {
      throw new Error("Bad Signature");
    } else {
      return [
        (rawBytes[0] & 0x1F) << 24 |
        rawBytes[1] << 16 |
        rawBytes[2] << 8 |
        rawBytes[3],
        4,
      ];
    }
  } else {
    throw new Error("Bad Signature");
  }
}

function unencodeDefRefSpecToken(encoded: number): number {
  const token = encoded >> 2;

  if ((encoded & 0x03) === 0x00) {
    return 0x02000000 | token;
  } else if ((encoded & 0x03) === 0x01) {
    return 0x01000000 | token;
  } else if ((encoded & 0x03) === 0x02) {
    return 0x1b000000 | token;
  } else {
    return 0;
  }
}

export class TypeTuple {
  type!: TypeId;
  offsetLength = 0;

  constructor(scope: Scope, sig: Uint8Array) {
    this.type = TypeId.fromValue(sig[0]);

    switch (this.type.base) {
      case "valuetype":
      case "class": {
        const uncompressed = uncompressedData(sig.subarray(1));
        this.offsetLength = uncompressed[1] + 1;
        const token = unencodeDefRefSpecToken(uncompressed[0]);
        const td = new TypeDef(scope, token);
        this.type.name = td.name;
        this.type.type = td;
        break;
      }

      case "byref": {
        if (sig[1] === 0x1D) {
          this.type.base = "array";
        }
        break;
      }

      case "ptr": {
        const tup = new TypeTuple(scope, sig.subarray(1));
        this.type.typeArg = tup.type;
        this.offsetLength = 1 + tup.offsetLength;
        break;
      }

      case "genericinst": {
        const classTup = new TypeTuple(scope, sig.subarray(1));
        this.type.name = classTup.type.name;
        const argc = sig[1 + classTup.offsetLength];
        this.offsetLength = classTup.offsetLength + 2;
        let argPtr = this.type;
        for (let i = 0; i < argc; i++) {
          const arg = new TypeTuple(scope, sig.subarray(this.offsetLength));
          this.offsetLength += arg.offsetLength;
          argPtr.typeArg = arg.type;
          argPtr = argPtr.typeArg;
        }
        break;
      }

      case "array": {
        const tup = new TypeTuple(scope, sig.subarray(1));
        this.offsetLength = 1 + tup.offsetLength;
        this.type.typeArg = tup.type;
        const dimsCount = sig[this.offsetLength++];
        const dimUpperBounds = new Array(dimsCount).fill(0);
        const numSizes = sig[this.offsetLength++];
        for (let i = 0; i < numSizes; i++) {
          const uncompressed = uncompressedData(
            sig.subarray(this.offsetLength),
          );
          this.offsetLength += uncompressed[1];
          dimUpperBounds[i] = uncompressed[0];
        }
        this.type.arrayDimensions = dimUpperBounds;
        break;
      }

      case "var":
      case "mvar": {
        const uncompressed = uncompressedData(sig.subarray(1));
        this.type.genericParameterSequence = uncompressed[0];
        this.offsetLength = 2;
        this.type.name = this.type.base;
        break;
      }

      default: {
        this.offsetLength = 1;
      }
    }
  }
}
