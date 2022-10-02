# Deno Win32

[![Tags](https://img.shields.io/github/release/DjDeveloperr/deno_win32)](https://github.com/DjDeveloperr/deno_win32/releases)
[![Doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/win@0.1.0/mod.ts)
[![Checks](https://github.com/DjDeveloperr/deno_win32/actions/workflows/ci.yml/badge.svg)](https://github.com/DjDeveloperr/deno_win32/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/DjDeveloperr/deno_win32)](https://github.com/DjDeveloperr/deno_win32/blob/master/LICENSE)
[![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/DjDeveloperr)

Fast and complete Win32 API bindings for Deno using FFI.

## Example

```ts
import {
  MB_OKCANCEL,
  MessageBoxA,
} from "https://deno.land/x/win@0.1.0/api/UI/WindowsAndMessaging.ts";

const result = MessageBoxA(
  null,
  "Hello, world!",
  "Hello",
  MB_OKCANCEL,
); // 1 (OK) or 2 (Cancel)
```

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

Check out the complete API reference
[here](https://doc.deno.land/https://deno.land/x/win@0.1.0/mod.ts).

## Contributing

Code is formatted using `deno fmt` and linted using `deno lint`. Please make
sure to run these commands before committing.

## License

Apache-2.0. Check [LICENSE](LICENSE) for more details.

Copyright 2022 © DjDeveloperr
