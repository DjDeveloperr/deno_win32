import { GUID } from "../guid.ts";
import { Field } from "./field.ts";
import { Method } from "./method.ts";
import { Scope } from "./scope.ts";
import { TypeId } from "./typeid.ts";
import { TypeTuple } from "./typetuple.ts";

export class TypeDef {
  #initialized = false;
  #name = "";
  #flags = 0;
  #parent?: TypeDef;
  typeSpec?: TypeId;

  constructor(public scope: Scope, public token: number) {}

  get name() {
    this.#initialize();
    return this.#name;
  }

  get flags() {
    this.#initialize();
    return this.#flags;
  }

  get parent() {
    this.#initialize();
    return this.#parent;
  }

  get isClass() {
    return (this.flags & 0x00000020) === 0x00000000;
  }

  get isInterface() {
    return (this.flags & 0x00000020) === 0x00000020;
  }

  get isAbstract() {
    return (this.flags & 0x00000080) === 0x00000080;
  }

  get isSealed() {
    return (this.flags & 0x00000100) === 0x00000100;
  }

  get isSpecialName() {
    return (this.flags & 0x00000400) === 0x00000400;
  }

  get isImport() {
    return (this.flags & 0x00001000) === 0x00001000;
  }

  get isSerializable() {
    return (this.flags & 0x00002000) === 0x00002000;
  }

  get isWindowsRuntime() {
    return (this.flags & 0x00004000) === 0x00004000;
  }

  get isRTSpecialName() {
    return (this.flags & 0x00000800) === 0x00000800;
  }

  get stringFormat() {
    return this.flags & 0x00030000;
  }

  get isBeforeFieldInit() {
    return (this.flags & 0x00100000) === 0x00100000;
  }

  get isForwarder() {
    return (this.flags & 0x00200000) === 0x00200000;
  }

  get isDelegate() {
    return this.parent?.name === "System.MulticastDelegate";
  }

  get isEnum() {
    return this.parent?.name === "System.Enum";
  }

  #initialize(): void {
    if (!this.#initialized) {
      switch (this.token & 0xFF000000) {
        case 0x01000000: {
          // typeref
          const ptkResolutionScope = new Uint32Array(1);
          const outName = new Uint16Array(256);
          const pchName = new Uint32Array(1);

          const hr = this.scope.com.GetTypeRefProps(
            this.token,
            ptkResolutionScope,
            outName,
            outName.length,
            pchName,
          );

          if (hr === 0) {
            this.#name = String.fromCharCode(
              ...outName.subarray(0, pchName[0] - 1),
            );

            if (ptkResolutionScope[0] === 0 && this.token === 0x01000000) {
              this.token = 0x01000000;
              this.#name = "IInspectable";
            } else if (ptkResolutionScope[0] === this.scope.moduleToken) {
              const td = this.scope.typeDefs.find((e) => e.name === this.#name);
              if (td && td.token !== this.token) {
                this.token = td.token;
                return this.#initialize();
              }
            } else if ((ptkResolutionScope[0] & 0xFF000000) === 0x01000000) {
              // TODO
              this.token = 0;
              this.#initialized = true;
              return;
            } else {
              this.token = 0;
              this.#initialized = true;
              return;
            }
          }
          break;
        }

        case 0x02000000: {
          // typedef

          const outName = new Uint16Array(256);
          const chTypeDef = new Uint32Array(1);
          const outFlags = new Uint32Array(1);
          const outExtends = new Uint32Array(1);

          const hr = this.scope.com.GetTypeDefProps(
            this.token,
            outName,
            outName.length,
            chTypeDef,
            outFlags,
            outExtends,
          );

          if (hr === 0) {
            this.#name = String.fromCharCode(
              ...outName.subarray(0, chTypeDef[0] - 1),
            );
            this.#flags = outFlags[0];
            if (outExtends[0] !== 0) {
              this.#parent = new TypeDef(this.scope, outExtends[0]);
            }
          }
          break;
        }

        case 0x1b000000: {
          const ppvSig = new BigUint64Array(1);
          const pcbSig = new Uint32Array(1);

          const hr = this.scope.com.GetTypeSpecFromToken(
            this.token,
            ppvSig,
            pcbSig,
          );

          if (hr === 0) {
            const sig = new Uint8Array(pcbSig[0]);
            new Deno.UnsafePointerView(ppvSig[0])
              .copyInto(sig);
            const tup = new TypeTuple(this.scope, sig).type;
            this.#name = tup.name ?? tup.base;
            this.typeSpec = tup;
          }

          break;
        }
      }

      this.#initialized = true;
    }
  }

  getCustomGuidAttribute(name: string): GUID | undefined {
    const ppData = new BigUint64Array(1);
    const pcbData = new Uint32Array(1);

    const hr = this.scope.com.GetCustomAttributeByName(
      this.token,
      name,
      ppData,
      pcbData,
    );

    if (hr === 0) {
      if (pcbData[0] > 0) {
        const blob = ppData[0];
        const guid = new Uint8Array(16);
        const view = new Deno.UnsafePointerView(blob);
        view.copyInto(guid, 2);
        return new GUID(guid);
      }
      const data = new Uint8Array(Number(pcbData[0]));
      this.scope.com.GetCustomAttributeByName(
        this.token,
        name,
        ppData,
        pcbData,
      );
      data.set(new Uint8Array(ppData.buffer, 0, data.length));
      return new GUID(data);
    }
  }

  get guid() {
    return (this.getCustomGuidAttribute(
      "Windows.Foundation.Metadata.GuidAttribute",
    ) ?? this.getCustomGuidAttribute("Windows.Win32.Interop.GuidAttribute"))!;
  }

  #fields: Field[] = [];

  get fields() {
    if (this.#fields.length === 0) {
      let hr;

      const phEnum = new BigUint64Array(1);
      const rgFields = new Uint32Array(1);
      const pcTokens = new Uint32Array(1);

      hr = this.scope.com.EnumFields(
        phEnum,
        this.token,
        rgFields,
        1,
        pcTokens,
      );

      while (hr === 0) {
        this.#fields.push(new Field(this.scope, rgFields[0]));
        hr = this.scope.com.EnumFields(
          phEnum,
          this.token,
          rgFields,
          1,
          pcTokens,
        );
      }

      this.scope.com.CloseEnum(phEnum[0]);
    }
    return this.#fields;
  }

  #methods: Method[] = [];

  get methods() {
    if (this.#methods.length === 0) {
      let hr;

      const phEnum = new BigUint64Array(1);
      const rgMethods = new Uint32Array(1);
      const pcTokens = new Uint32Array(1);

      hr = this.scope.com.EnumMethods(
        phEnum,
        this.token,
        rgMethods,
        1,
        pcTokens,
      );

      while (hr === 0) {
        this.#methods.push(new Method(this.scope, rgMethods[0]));
        hr = this.scope.com.EnumMethods(
          phEnum,
          this.token,
          rgMethods,
          1,
          pcTokens,
        );
      }

      this.scope.com.CloseEnum(phEnum[0]);
    }

    return this.#methods;
  }

  static processInterfaceToken(scope: Scope, token: number) {
    const ptkClass = new Uint32Array(1);
    const ptkIface = new Uint32Array(1);

    const hr = scope.com.GetInterfaceImplProps(
      token,
      ptkClass,
      ptkIface,
    );

    if (hr === 0) {
      return new TypeDef(scope, ptkIface[0]);
    } else {
      throw new Error("unable to get interface token");
    }
  }

  #interfaces: TypeDef[] = [];
  #interfacesInit = false;

  get interfaces() {
    if (!this.#interfacesInit) {
      const phEnum = new BigUint64Array(1);
      const rImpls = new Uint32Array(1);
      const pcImpls = new Uint32Array(1);

      let hr = this.scope.com.EnumInterfaceImpls(
        phEnum,
        this.token,
        rImpls,
        1,
        pcImpls,
      );

      while (hr === 0) {
        this.#interfaces.push(
          TypeDef.processInterfaceToken(this.scope, rImpls[0]),
        );
        hr = this.scope.com.EnumInterfaceImpls(
          phEnum,
          this.token,
          rImpls,
          1,
          pcImpls,
        );
      }

      this.scope.com.CloseEnum(phEnum[0]);

      this.#interfacesInit = true;
    }
    return this.#interfaces;
  }

  #cachedVtableAddr: number | undefined;

  get baseVtableAddr(): number {
    if (this.interfaces.length === 0) return 0;
    if (this.#cachedVtableAddr) return this.#cachedVtableAddr;
    const iface =
      [...this.interfaces].sort((a, b) =>
        b.baseVtableAddr - a.baseVtableAddr
      )[0];
    return (this.#cachedVtableAddr = iface.baseVtableAddr +
      iface.methods.length);
  }

  get enumBaseType(): TypeId | undefined {
    if (!this.isEnum) return undefined;
    else return this.fields.find((e) => e.name === "value__")!.type;
  }

  [Symbol.for("Deno.customInspect")]() {
    return `TypeDef${this.isClass ? "<Class>" : ""}${
      this.isInterface ? "<Interface>" : ""
    }(${this.name})`;
  }
}
