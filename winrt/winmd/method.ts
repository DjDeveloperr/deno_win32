import { Parameter } from "./parameter.ts";
import { Scope } from "./scope.ts";
import { TypeDef } from "./typedef.ts";
import { ELEMENT_TYPE_MAP, TypeId } from "./typeid.ts";
import { TypeTuple } from "./typetuple.ts";

export class Method {
  #initialized = false;
  #parent!: TypeDef;
  #name = "";
  #attr = 0;
  #sigs!: Uint8Array;
  #rva = 0;
  #implFlags = 0;
  #parameters: Parameter[] = [];
  #returnType?: Parameter;

  constructor(public scope: Scope, public token: number) {}

  #initialize() {
    if (!this.#initialized) {
      const ptkClass = new Uint32Array(1);
      const szMethod = new Uint16Array(256);
      const pchMethod = new Uint32Array(1);
      const pdwAttr = new Uint32Array(1);
      const ppvSigBlob = new BigUint64Array(1);
      const pcbSigBlob = new Uint32Array(1);
      const pulCodeRVA = new Uint32Array(1);
      const pdvImplFlags = new Uint32Array(1);

      const hr = this.scope.com.GetMethodProps(
        this.token,
        ptkClass,
        szMethod,
        szMethod.length,
        pchMethod,
        pdwAttr,
        ppvSigBlob,
        pcbSigBlob,
        pulCodeRVA,
        pdvImplFlags,
      );

      if (hr === 0) {
        this.#parent = new TypeDef(this.scope, ptkClass[0]);
        this.#name = new TextDecoder("utf-16le").decode(
          szMethod.subarray(0, pchMethod[0] - 1),
        );
        this.#attr = pdwAttr[0];
        this.#sigs = new Uint8Array(pcbSigBlob[0]);
        new Deno.UnsafePointerView(ppvSigBlob[0])
          .copyInto(this.#sigs);
        this.#rva = pulCodeRVA[0];
        this.#implFlags = pdvImplFlags[0];

        this.#initialized = true;

        this.#initializeParameters();
        this.#parseSigs();
      }
    }
  }

  #initializeParameters() {
    const phEnum = new BigUint64Array(1);
    const rParams = new Uint32Array(1);
    const pcTokens = new Uint32Array(1);

    let hr;

    hr = this.scope.com.EnumParams(phEnum, this.token, rParams, 1, pcTokens);

    while (hr === 0) {
      this.#parameters.push(new Parameter(this.scope, rParams[0]));
      hr = this.scope.com.EnumParams(phEnum, this.token, rParams, 1, pcTokens);
    }

    this.scope.com.CloseEnum(phEnum[0]);
  }

  #parseSigs() {
    if (this.isGetter && this.#sigs[0] !== 0x20) {
      this.#parsePropertySig();
    } else {
      this.#parseMethodSig();
    }
  }

  #parsePropertySig() {
    if (this.isGetter) {
      const returnTypeTup = new TypeTuple(
        this.scope,
        this.sigs.subarray(2),
      );
      this.#returnType = new Parameter(this.scope, 0).initFromType(
        returnTypeTup.type,
      );
    } else if (this.isSetter) {
      this.#returnType = undefined;
    }
  }

  #parseMethodSig() {
    let paramIndex = 0;
    let blobPtr = this.hasGenericParams ? 3 : 2;

    if (this.parameters.length !== 0 && this.parameters[0].sequence === 0) {
      this.#returnType = this.#parameters.shift()!;
      const returnTypeTup = new TypeTuple(
        this.scope,
        this.sigs.subarray(blobPtr),
      );
      blobPtr += returnTypeTup.offsetLength;
      this.#returnType.initFromType(returnTypeTup.type);
    } else {
      const returnTypeTup = new TypeTuple(
        this.scope,
        this.sigs.subarray(blobPtr),
      );
      blobPtr += returnTypeTup.offsetLength;
      this.#returnType = new Parameter(this.scope, 0).initFromType(
        returnTypeTup.type,
      );
    }

    while (paramIndex < this.#parameters.length) {
      const runtimeType = new TypeTuple(
        this.scope,
        this.sigs.subarray(blobPtr),
      );
      blobPtr += runtimeType.offsetLength;

      if (runtimeType.type.base === "array") {
        blobPtr += this.#parseArray(paramIndex, this.sigs.subarray(blobPtr));
        paramIndex++;
      } else {
        // Force init
        this.#parameters[paramIndex].name;
        // then update type
        this.#parameters[paramIndex].initFromType(runtimeType.type);
      }
      paramIndex++;
    }
  }

  #parseArray(index: number, sig: Uint8Array) {
    const typeTup = new TypeTuple(this.scope, sig.subarray(2));
    const tid = new TypeId();
    tid.base = "ptr";
    const typeArg = new TypeId();
    typeArg.base = "u32";
    tid.typeArg = typeArg;
    this.#parameters[index].initFromType(tid);
    this.#parameters[index].name = "__valueSize";

    const typePtr = new TypeId();
    typePtr.base = "ptr";
    typePtr.typeArg = typeTup.type;
    this.#parameters.splice(
      index + 1,
      0,
      new Parameter(this.scope, 0).initFromType(typePtr),
    );
    this.#parameters[index + 1].name = "__value";
    return 0;
  }

  get name() {
    this.#initialize();
    return this.#name;
  }

  get parent() {
    this.#initialize();
    return this.#parent;
  }

  get attr() {
    this.#initialize();
    return this.#attr;
  }

  get sigs() {
    this.#initialize();
    return this.#sigs;
  }

  get relativeVirtualAddress() {
    this.#initialize();
    return this.#rva;
  }

  get implFlags() {
    this.#initialize();
    return this.#implFlags;
  }

  get parameters() {
    this.#initialize();
    return this.#parameters;
  }

  get returnType() {
    this.#initialize();
    return this.#returnType;
  }

  get memberAccess() {
    return this.attr & 0x0007;
  }

  get isStatic() {
    return (this.attr & 0x0010) !== 0;
  }

  get isFinal() {
    return (this.attr & 0x0020) !== 0;
  }

  get isVirtual() {
    return (this.attr & 0x0040) !== 0;
  }

  get isHideBySig() {
    return (this.attr & 0x0080) !== 0;
  }

  get vtableLayout() {
    return (this.attr & 0x0100) === 0x0100 ? "new" : "reuse";
  }

  get isCheckAccessOnOverride() {
    return (this.attr & 0x0200) !== 0;
  }

  get isAbstract() {
    return (this.attr & 0x0400) !== 0;
  }

  get isSpecialName() {
    return (this.attr & 0x0800) !== 0;
  }

  get isPinvokeImpl() {
    return (this.attr & 0x2000) !== 0;
  }

  get isUnmanagedExport() {
    return (this.attr & 0x0008) !== 0;
  }

  get isRTSpecialName() {
    return (this.attr & 0x1000) !== 0;
  }

  get isGetter() {
    return this.isSpecialName && this.name.startsWith("get_");
  }

  get isSetter() {
    return this.isSpecialName && this.name.startsWith("put_");
  }

  get isProperty() {
    return this.isGetter || this.isSetter;
  }

  get hasGenericParams() {
    return (this.sigs[0] & 0x10) === 0x10;
  }

  get pinvokeMap() {
    if (this.isPinvokeImpl) {
      const pdwMappingFlags = new Uint32Array(1);
      const szImportName = new Uint16Array(1024);
      const pcchImportName = new Uint32Array(1);
      const phImportDll = new Uint32Array(1);
      const hr = this.scope.com.GetPinvokeMap(
        this.token,
        pdwMappingFlags,
        szImportName,
        szImportName.length,
        pcchImportName,
        phImportDll,
      );
      if (hr !== 0) {
        throw new Error(`GetPinvokeMap failed: ${hr}`);
      }
      const dllname = new Uint16Array(1024);
      const dllnamelen = new Uint32Array(1);
      const hr2 = this.scope.com.GetModuleRefProps(
        phImportDll[0],
        dllname,
        dllname.length,
        dllnamelen,
      );
      if (hr2 !== 0) {
        throw new Error(`GetModuleRefProps failed: ${hr2}`);
      }
      return {
        flags: pdwMappingFlags[0],
        name: String.fromCharCode(
          ...szImportName.subarray(0, pcchImportName[0] - 1),
        ),
        dll: String.fromCharCode(...dllname.subarray(0, dllnamelen[0] - 1)),
      };
    }
    return undefined;
  }

  [Symbol.for("Deno.customInspect")]() {
    return `Method(${this.name}: ${
      [...this.sigs].map((e) => e.toString(16)).join(" ")
    }, ${Deno.inspect(this.parameters)})`;
  }
}
