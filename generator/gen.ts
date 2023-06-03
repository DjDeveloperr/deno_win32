import ProgressBar from "https://deno.land/x/progress@v1.2.8/mod.ts";

const win32 = JSON.parse(Deno.readTextFileSync("./win32_apis.json"));

const TARGET_DIR = "api";
await Deno.remove(TARGET_DIR, { recursive: true }).catch(() => {});
await Deno.mkdir(TARGET_DIR);

const title = "win32 codegen:";
const total = Object.keys(win32).length;
const progress = new ProgressBar({
  title,
  total,
});
let completed = 0;

const enumCache: Record<string, [string, string]> = {};
const structCache: Set<string> = new Set();

const exclude = [
  "RtlCaptureContext2",
];

const callbackSymbols = [
  "GetMessageA",
  "GetMessageW",
  "PeekMessageA",
  "PeekMessageW",
  "TranslateMessage",
  "DispatchMessageA",
  "DispatchMessageW",
  "CallWindowProcA",
  "CallWindowProcW",
  "PostMessageA",
  "PostMessageW",
  "PostQuitMessage",
  "DefWindowProcA",
  "DefWindowProcW",
  "SendMessageA",
  "SendMessageW",
];

const asyncSymbols = [
  "GetOverlappedResult",
  "CreateFileA",
  "CreateFileW",
];

const specialTypes: Record<string, {
  jsType: string;
  jsRtype: string;
  ffiType: Deno.NativeResultType;
  toFfi: string;
  fromFfi: string;
}> = {
  "Windows.Win32.Foundation.PWSTR": {
    jsType: "string | null | Uint8Array | Uint16Array",
    jsRtype: "string | null",
    ffiType: "buffer",
    toFfi: "util.pwstrToFfi",
    fromFfi: "util.pwstrFromFfi",
  },

  "Windows.Win32.Foundation.PSTR": {
    jsType: "string | null | Uint8Array",
    jsRtype: "string | null",
    ffiType: "buffer",
    toFfi: "util.pstrToFfi",
    fromFfi: "util.pstrFromFfi",
  },

  "Windows.Win32.Foundation.BOOL": {
    jsType: "boolean",
    jsRtype: "boolean",
    ffiType: "i32",
    toFfi: "util.boolToFfi",
    fromFfi: "util.boolFromFfi",
  },

  "Windows.Win32.Foundation.HWND": {
    jsType: "Deno.PointerValue",
    jsRtype: "Deno.PointerValue",
    ffiType: "pointer",
    toFfi: "",
    fromFfi: "",
  },

  "Windows.Win32.Foundation.CHAR": {
    jsType: "string | number",
    jsRtype: "string",
    ffiType: "u8",
    toFfi: "util.charToFfi",
    fromFfi: "util.charFromFfi",
  },
};

function typeToJS(ty: string, result = false) {
  switch (ty) {
    case "u8":
    case "i8":
    case "u16":
    case "i16":
    case "u32":
    case "i32":
      return "number";
    case "u64":
    case "i64":
    case "isize":
    case "usize":
      return "bigint | number";
    case "f32":
    case "f64":
      return "number";
    case "bool":
      return result ? "boolean" : "boolean | number";
    case "string":
      return "string | Uint8Array | null";
    case "void":
      return "void";
    case "ptr":
      return result ? "Deno.PointerValue" : "Deno.PointerValue | Uint8Array";
    case "array":
      return "Deno.PointerValue";
    default:
      if (ty in enumCache) {
        return ty.split(".").pop()!;
      }
      if (ty in specialTypes) {
        return result ? specialTypes[ty].jsRtype : specialTypes[ty].jsType;
      }
      return result ? "Deno.PointerValue" : "Uint8Array | Deno.PointerValue";
  }
}

function typeToFFI(ty: string): Deno.NativeResultType {
  switch (ty) {
    case "u8":
    case "i8":
    case "u16":
    case "i16":
    case "u32":
    case "i32":
    case "u64":
    case "i64":
    case "isize":
    case "usize":
    case "f32":
    case "f64":
    case "bool":
    case "void":
      return ty;
    case "string":
    case "ptr":
    case "array":
      return "pointer";
    default:
      if (ty in enumCache) {
        return typeToFFI(enumCache[ty][1]);
      }
      if (ty in specialTypes) {
        return specialTypes[ty].ffiType;
      }
      return "pointer";
  }
}

function jsify(name: string) {
  if (
    name === "function" || name === "in" || name === "class" ||
    name === "var" || name === "let" || name === "arguments" ||
    name === "const" || name === "yield" || name === "await" ||
    name === "async" || name === "enum" || name === "export" ||
    name === "import" || name === "extends" || name === "implements" ||
    name === "interface" || name === "package" ||
    name === "private" || name === "protected" || name === "public" ||
    name === "static" || name === "super" ||
    name === "switch" || name === "this" || name === "throw" ||
    name === "try" || name === "typeof" || name === "void" ||
    name === "while" || name === "with" || name === "delete" || name === "do" ||
    name === "if" || name === "new" ||
    name === "return" || name === "case" || name === "catch" ||
    name === "debugger" || name === "default" || name === "else" ||
    name === "finally" || name === "for" || name === "instanceof" ||
    name === "null" || name === "true" || name === "false" ||
    name === "NaN" || name === "Infinity" || name === "undefined" ||
    name === "abstract" || name === "boolean"
  ) {
    return name + "__";
  } else return name.replaceAll("-", "_").replaceAll(".", "_");
}

function camelCase(name: string) {
  return name.length > 1 ? `${name[0].toUpperCase()}${name.slice(1)}` : name;
}

function sizeof(ty: Deno.NativeResultType) {
  switch (ty) {
    case "u8":
    case "i8":
      return 1;
    case "u16":
    case "i16":
      return 2;
    case "u32":
    case "i32":
    case "f32":
      return 4;
    case "u64":
    case "i64":
    case "f64":
    case "usize":
    case "isize":
      return 8;
    case "pointer":
    case "buffer":
      return 8;
    case "void":
      return 0;
    default:
      throw new Error("Unsupported type: " + ty);
  }
}

const files: string[] = [];

for (const api in win32) {
  if (!api.startsWith("Windows.Win32.")) {
    throw new Error(`Invalid API name: ${api}`);
  }

  const parts = api.split(".");
  parts.shift(); // Windows
  parts.shift(); // Win32
  parts.pop(); // Apis
  const file = parts.pop();
  const path = parts.join("/") + (parts.length ? "/" : "") + file + ".ts";

  let content = `/// Auto-generated by Deno Win32: ${api}\n\n`;
  content += `import * as util from "${
    "../".repeat(parts.length + 1)
  }util.ts";\n\n`;

  const {
    consts,
    enums,
    structs,
    symbols,
  } = win32[api];

  let hasEnums = false;
  for (const name in enums) {
    if (!hasEnums) {
      content += `// Enums\n`;
      hasEnums = true;
    }
    const ty = typeToJS(enums[name]);
    enumCache[name] = [ty, enums[name]];
    content += `export type ${name.split(".").pop()} = ${ty};\n`;
  }
  if (hasEnums) {
    content += `\n`;
  }

  let hasConsts = false;
  for (const name in consts) {
    if (!hasConsts) {
      content += `// Constants\n`;
      hasConsts = true;
    }
    const value = consts[name];
    if ((value + "").match(/^[0-9]+n?$/)) {
      const ir = String(value).replaceAll(/^0+/g, "");
      content += `export const ${name} = ${
        ir === "" ? "0" : ir === "n" ? "0n" : ir
      };\n`;
    } else {
      content += `export const ${name} = \`${
        value.toString().replaceAll("`", "\`").replaceAll("\\", "\\\\")
          .replaceAll(
            "\0",
            "\\0",
          ).replaceAll("\r", "\\r").replaceAll("\t", "\\t").replaceAll(
            "\v",
            "\\v",
          ).replaceAll("\b", "\\b").replaceAll("\f", "\\f").replaceAll(
            "\n",
            "\\n",
          ).split("").map((c: string) => {
            if (c.match(/^[ -~]$/)) {
              return c;
            } else {
              return `\\x${c.charCodeAt(0).toString(16).padStart(2, "0")}`;
            }
          }).join("")
      }\`;\n`;
    }
  }
  if (hasConsts) {
    content += `\n`;
  }

  let hasStructs = false;
  for (const name in structs) {
    if (!hasStructs) {
      content += `// Structs\n\n`;
      hasStructs = true;
    }
    structCache.add(name);
    const dispName = name.split(".").pop()!;
    if (dispName === "Apis") continue; // ?
    const fields = Object.entries(structs[name]) as [string, string][];
    if (fields.length === 0) {
      continue;
    } else if (fields.length === 1 && fields[0][0] === "Value") {
      content += `export type ${dispName} = ${typeToJS(fields[0][1])};\n\n`;
    } else {
      const layout: string[] = [];
      let size = 0;
      let align = 0;
      fields.forEach(([, type]) => {
        const ty = typeToFFI(type);
        switch (ty) {
          case "u8":
          case "i8":
          case "u16":
          case "i16":
          case "u32":
          case "i32":
          case "f32": {
            size += sizeof(ty);
            align += sizeof(ty);
            align = align % 8;
            layout.push(ty);
            break;
          }

          case "buffer":
          case "pointer":
          case "isize":
          case "usize":
          case "u64":
          case "i64":
          case "f64": {
            if (align > 0) {
              const pad = 8 - align;
              size += pad;
              layout.push(`pad${pad}`);
              align = 0;
            }
            layout.push(ty);
            size += sizeof(ty);
            break;
          }
        }
      });
      if (align > 0) {
        const pad = 8 - align;
        size += pad;
        layout.push(`pad${pad}`);
        align = 0;
      }

      content += `/**\n * ${name} (size: ${size})\n */\n`;
      content += `export interface ${dispName} {\n`;
      for (const [field, ty] of fields) {
        content += `  /** ${ty} */\n`;
        content += `  ${jsify(field)}: ${typeToJS(ty)};\n`;
      }
      content += `}\n\n`;

      content += `export const sizeof${camelCase(dispName)} = ${size};\n\n`;

      content += `export function alloc${
        camelCase(dispName)
      }(data?: Partial<${dispName}>): Uint8Array {\n`;
      content += `  const buf = new Uint8Array(sizeof${
        camelCase(dispName)
      });\n`;
      content += `  const view = new DataView(buf.buffer);\n`;
      let i = 0;
      let offset = 0;
      layout.forEach((ty) => {
        content += `  // 0x${offset.toString(16).padStart(2, "0")}: ${ty}\n`;
        if (ty.startsWith("pad")) {
          offset += parseInt(ty.slice(3));
        } else {
          const field = { name: jsify(fields[i][0]) };
          content += `  if (data?.${field.name} !== undefined) `;
          switch (ty) {
            case "u8": {
              content +=
                `view.setUint8(${offset}, Number(data.${field.name}));\n`;
              break;
            }

            case "i8": {
              content +=
                `view.setInt8(${offset}, Number(data.${field.name}));\n`;
              break;
            }

            case "u16": {
              content +=
                `view.setUint16(${offset}, Number(data.${field.name}), true);\n`;
              break;
            }

            case "i16": {
              content +=
                `view.setInt16(${offset}, Number(data.${field.name}), true);\n`;
              break;
            }

            case "u32": {
              content +=
                `view.setUint32(${offset}, Number(data.${field.name}), true);\n`;
              break;
            }

            case "i32": {
              content +=
                `view.setInt32(${offset}, Number(data.${field.name}), true);\n`;
              break;
            }

            case "f32": {
              content +=
                `view.setFloat32(${offset}, Number(data.${field.name}), true);\n`;
              break;
            }

            case "u64": {
              content +=
                `view.setBigUint64(${offset}, BigInt(data.${field.name}), true);\n`;
              break;
            }

            case "i64": {
              content +=
                `view.setBigInt64(${offset}, BigInt(data.${field.name}), true);\n`;
              break;
            }

            case "f64": {
              content +=
                `view.setFloat64(${offset}, Number(data.${field.name}), true);\n`;
              break;
            }

            case "buffer": {
              const special = specialTypes[fields[i][1]];
              // Attach the buffer to the view so it doesn't get GC'd
              content += `{\n    (buf as any)._f${offset} = ${
                special ? (special.toFfi + "(") : ""
              }data.${field.name}${special ? ")" : ""};\n`;
              content +=
                `    view.setBigUint64(${offset}, (buf as any)._f${offset} === null ? 0n : BigInt(Deno.UnsafePointer.value(Deno.UnsafePointer.of((buf as any)._f${offset}))), true);\n`;
              content += "  }\n";
              break;
            }

            case "pointer": {
              content +=
                `view.setBigUint64(${offset}, data.${field.name} === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.${field.name}))), true);\n`;
              break;
            }

            case "isize": {
              content +=
                `view.setBigInt64(${offset}, BigInt(data.${field.name}), true);\n`;
              break;
            }

            case "usize": {
              content +=
                `view.setBigUint64(${offset}, BigInt(data.${field.name}), true);\n`;
              break;
            }

            default:
              throw new Error("Unsupported type");
          }
          offset += sizeof(ty as Deno.NativeType);
          i++;
        }
      });
      content += `  return buf;\n`;
      content += `}\n\n`;
      content += `export class ${dispName}View {\n`;
      content += `  private readonly view: DataView;\n`;
      content += `  constructor(private readonly buf: Uint8Array) {\n`;
      content += `    this.view = new DataView(buf.buffer);\n`;
      content += `  }\n\n`;
      content += `  get buffer(): Uint8Array {\n`;
      content += `    return this.buf;\n`;
      content += `  }\n`;
      i = 0;
      offset = 0;
      layout.forEach((ty) => {
        content += `\n  // 0x${offset.toString(16).padStart(2, "0")}: ${ty}\n`;
        if (ty.startsWith("pad")) {
          offset += parseInt(ty.slice(3));
        } else {
          const field = { name: jsify(fields[i][0]) };
          content += `  get ${field.name}(): ${typeToJS(ty)} {\n`;
          switch (ty) {
            case "u8": {
              content += `    return this.view.getUint8(${offset});\n`;
              break;
            }

            case "i8": {
              content += `    return this.view.getInt8(${offset});\n`;
              break;
            }

            case "u16": {
              content += `    return this.view.getUint16(${offset}, true);\n`;
              break;
            }

            case "i16": {
              content += `    return this.view.getInt16(${offset}, true);\n`;
              break;
            }

            case "u32": {
              content += `    return this.view.getUint32(${offset}, true);\n`;
              break;
            }

            case "i32": {
              content += `    return this.view.getInt32(${offset}, true);\n`;
              break;
            }

            case "f32": {
              content += `    return this.view.getFloat32(${offset}, true);\n`;
              break;
            }

            case "u64": {
              content +=
                `    return Number(this.view.getBigUint64(${offset}, true));\n`;
              break;
            }

            case "i64": {
              content +=
                `    return Number(this.view.getBigInt64(${offset}, true));\n`;
              break;
            }

            case "f64": {
              content += `    return this.view.getFloat64(${offset}, true);\n`;
              break;
            }

            case "buffer": {
              content +=
                `    const ptr = this.view.getBigUint64(${offset}, true);\n`;
              content += `    return Deno.UnsafePointer.create(ptr);\n`;
              break;
            }

            case "pointer": {
              content +=
                `    const ptr = this.view.getBigUint64(${offset}, true);\n`;
              content += `    return Deno.UnsafePointer.create(ptr);\n`;
              break;
            }

            case "isize": {
              content +=
                `    return Number(this.view.getBigInt64(${offset}, true));\n`;
              break;
            }

            case "usize": {
              content +=
                `    return Number(this.view.getBigUint64(${offset}, true));\n`;
              break;
            }

            default:
              throw new Error("Unsupported type");
          }
          i++;
          content += `  }\n`;
          offset += sizeof(ty as Deno.NativeType);
        }
      });

      // setters
      i = 0;
      offset = 0;
      layout.forEach((ty) => {
        content += `\n  // 0x${offset.toString(16).padStart(2, "0")}: ${ty}\n`;
        if (ty.startsWith("pad")) {
          offset += parseInt(ty.slice(3));
        } else {
          const field = { name: jsify(fields[i][0]) };
          content += `  set ${field.name}(value: ${typeToJS(ty)}) {\n`;
          switch (ty) {
            case "u8": {
              content += `    this.view.setUint8(${offset}, value);\n`;
              break;
            }

            case "i8": {
              content += `    this.view.setInt8(${offset}, value);\n`;
              break;
            }

            case "u16": {
              content += `    this.view.setUint16(${offset}, value, true);\n`;
              break;
            }

            case "i16": {
              content += `    this.view.setInt16(${offset}, value, true);\n`;
              break;
            }

            case "u32": {
              content += `    this.view.setUint32(${offset}, value, true);\n`;
              break;
            }

            case "i32": {
              content += `    this.view.setInt32(${offset}, value, true);\n`;
              break;
            }

            case "f32": {
              content += `    this.view.setFloat32(${offset}, value, true);\n`;
              break;
            }

            case "u64": {
              content +=
                `    this.view.setBigUint64(${offset}, BigInt(value), true);\n`;
              break;
            }

            case "i64": {
              content +=
                `    this.view.setBigInt64(${offset}, BigInt(value), true);\n`;
              break;
            }

            case "f64": {
              content += `    this.view.setFloat64(${offset}, value, true);\n`;
              break;
            }

            case "buffer": {
              const special = specialTypes[fields[i][1]];
              // Attach the buffer to the view so it doesn't get GC'd
              content += `    (this.buf as any)._f${offset} = value;\n`;
              content +=
                `    this.view.setBigUint64(${offset}, BigInt(Deno.UnsafePointer.value(util.toPointer((this.buf as any)._f${offset}))), true);\n`;
              break;
            }

            case "pointer": {
              content +=
                `    this.view.setBigUint64(${offset}, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);\n`;
              break;
            }

            case "isize": {
              content +=
                `    this.view.setBigInt64(${offset}, BigInt(value), true);\n`;
              break;
            }

            case "usize": {
              content +=
                `    this.view.setBigUint64(${offset}, BigInt(value), true);\n`;
              break;
            }

            default:
              throw new Error("Unsupported type");
          }
          i++;
          content += `  }\n`;
          offset += sizeof(ty as Deno.NativeType);
        }
      });
      content += "}\n\n";
    }
  }

  const libs: Record<string, Deno.ForeignLibraryInterface> = {};

  for (const name in symbols) {
    const { dll, parameters, result } = symbols[name];
    if (!(dll in libs)) {
      libs[dll] = {};
    }
    if (!(name in libs[dll])) {
      libs[dll][name] = {
        parameters: parameters.map((e: [string, string]) => typeToFFI(e[1])),
        result: typeToFFI(result),
      };
    }
  }

  content += "// Native Libraries\n\n";
  for (const lib in libs) {
    content += `try {\n`;
    content += `  var lib${jsify(lib)} = Deno.dlopen(${
      JSON.stringify(lib)
    }, {\n`;
    for (const name in libs[lib]) {
      if (exclude.includes(name)) {
        continue;
      }
      const { parameters, result } = libs[lib][name] as Deno.ForeignFunction;
      content += `    ${name}: {\n`;
      if (callbackSymbols.includes(name)) {
        content += `      callback: true,\n`;
      }
      content += `      parameters: [${
        parameters.map((e) => JSON.stringify(e)).join(", ")
      }],\n`;
      content += `      result: ${JSON.stringify(result)},\n`;
      content += `      optional: true,\n`;
      content += `    },\n`;
      if (asyncSymbols.includes(name)) {
        content += `    ${name}Async: {\n`;
        content += `      name: ${JSON.stringify(name)},\n`;
        content += `      nonblocking: true,\n`;
        content += `      parameters: [${
          parameters.map((e) => JSON.stringify(e)).join(", ")
        }],\n`;
        content += `      result: ${JSON.stringify(result)},\n`;
        content += `      optional: true,\n`;
        content += `    },\n`;
      }
    }
    content += `  }).symbols;\n`;
    content += `} catch(e) { /* ignore */ }\n\n`;
  }

  content += "// Symbols\n\n";
  for (const name in symbols) {
    if (exclude.includes(name)) {
      continue;
    }
    const { dll, parameters, result } = symbols[name];
    const args = parameters.map((e: [string, string]) =>
      (jsify(e[0]) + ": " + typeToJS(e[1])) + " /* " + e[1] + " */,"
    ).join("\n  ");
    const ret = typeToJS(result, true);
    const retFfi = typeToFFI(result);
    const retSpecial = specialTypes[result];
    content += `export function ${name}${
      parameters.length ? `(\n  ${args}\n)` : "()"
    }: ${ret} /* ${result} */ {\n`;
    content += `  return ${retSpecial ? `${retSpecial.fromFfi}(` : ""}lib${
      jsify(dll)
    }.${name}!(${
      parameters.map((e: [string, string]) => {
        const special = specialTypes[e[1]];
        if (special) {
          return `${special.toFfi}(${jsify(e[0])})`;
        }
        const ffi = typeToFFI(e[1]);
        if (ffi === "pointer") {
          return `util.toPointer(${jsify(e[0])})`;
        }
        return jsify(e[0]);
      }).join(", ")
    })${retSpecial ? ")" : ""};\n`;
    content += `}\n\n`;
    if (asyncSymbols.includes(name)) {
      content += `export async function ${name}Async${
        parameters.length ? `(\n  ${args}\n)` : "()"
      }: Promise<${ret}> /* ${result} */ {\n`;
      content += `  return ${
        retSpecial ? `${retSpecial.fromFfi}(` : ""
      }await lib${jsify(dll)}.${name}Async(${
        parameters.map((e: [string, string]) => {
          const special = specialTypes[e[1]];
          if (special) {
            return `${special.toFfi}(${jsify(e[0])})`;
          }
          const ffi = typeToFFI(e[1]);
          if (ffi === "pointer") {
            return `util.toPointer(${jsify(e[0])})`;
          }
          return jsify(e[0]);
        }).join(", ")
      })${retSpecial ? ")" : ""};\n`;
      content += `}\n\n`;
    }
  }

  files.push(path.replaceAll("/", ".").replace(".ts", "").trim());
  await Deno.mkdir(TARGET_DIR + "/" + parts.join("/"), { recursive: true })
    .catch(() => {});
  await Deno.writeTextFile(TARGET_DIR + "/" + path, content);

  progress.render(++completed);
}

function handleEntries(
  path: string,
  entries: Deno.DirEntry[],
) {
  Deno.writeTextFileSync(
    path + "/mod.ts",
    entries.map((entry) => {
      if (entry.isDirectory) {
        handleEntries(path + "/" + entry.name, [
          ...Deno.readDirSync(path + "/" + entry.name),
        ]);
        return `export * as ${entry.name}Apis from "./${entry.name}/mod.ts";`;
      } else {
        return `export * as ${
          entry.name.split(".ts")[0]
        } from "./${entry.name}";`;
      }
    }).join("\n") + "\n",
  );
}

const entries = [...Deno.readDirSync(TARGET_DIR)];
handleEntries(TARGET_DIR, entries);

await Deno.writeTextFile(
  TARGET_DIR + "/all.json",
  JSON.stringify(files, null, 2),
);
