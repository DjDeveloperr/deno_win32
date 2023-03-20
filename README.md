# Deno Win32

[![Tags](https://img.shields.io/github/release/DjDeveloperr/deno_win32)](https://github.com/DjDeveloperr/deno_win32/releases)
[![Checks](https://github.com/DjDeveloperr/deno_win32/actions/workflows/ci.yml/badge.svg)](https://github.com/DjDeveloperr/deno_win32/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/DjDeveloperr/deno_win32)](https://github.com/DjDeveloperr/deno_win32/blob/master/LICENSE)
[![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/DjDeveloperr)

Fast and complete Win32 API bindings for Deno using FFI.

## Example

```ts
import {
  MB_OKCANCEL,
  MessageBoxA,
} from "https://win32.deno.dev/0.4.1/UI.WindowsAndMessaging";

const result = MessageBoxA(
  null,
  "Hello, world!",
  "Hello",
  MB_OKCANCEL,
); // 1 (OK) or 2 (Cancel)
```

More in `examples/` such as demonstrating OpenGL API usage.

## Usage

You need to pass `--allow-ffi` and `--unstable` flags in order to access the
Win32 API.

```sh
deno run --allow-ffi --unstable <file>
```

Note: It is highly recommended to import only APIs you need. Do not import from
`mod.ts` as it will import all sub modules which you might not even need. WinAPI
is huge, so are the bindings.

## Documentation

It is recommened to read the official documentation of
[Win32 API](https://learn.microsoft.com/en-us/windows/win32/api/).

APIs almost map 1:1 with the official ones, just certain types have to be
transformed to be sent into C-land like `string` is first converted into
null-terminated string depending on the argument (PSTR or PWSTR).

Constants are exported as-is. Structs are defined as interfaces with
corresponding JS types in fields. We also export a helper function
`alloc${STRUCT}` which accepts `Partial<${STRUCT}>` to create a new struct and
return its buffer as `Uint8Array`. A constant called `sizeof${camelCasedStruct}`
is exported which is the size of the struct in bytes.

Some APIs have been (manually) marked as Async capable which adds a
`${name}Async` variant of the function along with original one which runs on a
different thread natively and returns a promise. If you want any other API to be
Async capable, please open an issue or a PR. Note that Async calls cannot go
through v8 fastapi path, so they have more overhead than normal ones.

## Contributing

Code is formatted using `deno fmt` and linted using `deno lint`. Please make
sure to run these commands before committing.

## License

Apache-2.0. Check [LICENSE](LICENSE) for more details.

Copyright 2022-2023 © DjDeveloperr
