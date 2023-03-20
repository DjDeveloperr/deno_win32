import { createCanvas } from "https://deno.land/x/skia_canvas@0.5.2/mod.ts";
import * as Wm from "../api/UI/WindowsAndMessaging.ts";
import * as Gfx from "../api/Graphics/OpenGL.ts";
import * as Gdi from "../api/Graphics/Gdi.ts";

const canvas = createCanvas(800, 600);
const ctx = canvas.getContext("2d");

const w = 50, h = 50;
let x = 100, y = 100;

let prevTime = Date.now(),
  frames = 0,
  fps = 0;

function draw() {
  const time = Date.now();
  const delta = time - prevTime;
  frames++;
  if (delta > 1000) {
    fps = Math.round((frames * 1000) / (delta));
    prevTime = time;
    frames = 0;
  }

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "red";
  ctx.fillRect(x, y, w, h);

  ctx.fillStyle = "black";
  ctx.font = "20px sans-serif";
  ctx.textBaseline = "top";
  ctx.textAlign = "left";
  ctx.fillText(`FPS: ${fps}`, 10, 10);
}

let hDC!: Deno.PointerValue;

function glCreateContext(hWnd: Deno.PointerValue) {
  hDC = Gdi.GetDC(hWnd)!;
  const hRC = Gfx.wglCreateContext(hDC);
  Gfx.wglMakeCurrent(hDC, hRC);
  glInit(hWnd);
  return hRC;
}

const textID = new Uint32Array(1);

function glInit(hWnd: Deno.PointerValue) {
  const rect = Wm.allocRECT();
  const recti32 = new Int32Array(rect.buffer);
  Wm.GetClientRect(hWnd, rect);
  Gfx.glViewport(0, 0, recti32[2], recti32[3]);

  Gfx.glMatrixMode(Gfx.GL_PROJECTION);
  Gfx.glLoadIdentity();
  Gfx.glOrtho(
    0,
    recti32[2],
    recti32[3],
    0,
    2048,
    -2048,
  );

  Gfx.glMatrixMode(Gfx.GL_MODELVIEW);
  Gfx.glLoadIdentity();

  Gfx.glDisable(Gfx.GL_DEPTH_TEST);
  Gfx.glDisable(Gfx.GL_STENCIL_TEST);

  Gfx.glEnable(Gfx.GL_TEXTURE_2D);

  Gfx.glGenTextures(1, new Uint8Array(textID.buffer));
  Gfx.glBindTexture(Gfx.GL_TEXTURE_2D, textID[0]);
  Gfx.glTexParameteri(Gfx.GL_TEXTURE_2D, Gfx.GL_TEXTURE_WRAP_S, Gfx.GL_REPEAT);
  Gfx.glTexParameteri(Gfx.GL_TEXTURE_2D, Gfx.GL_TEXTURE_WRAP_T, Gfx.GL_REPEAT);
  Gfx.glTexParameteri(
    Gfx.GL_TEXTURE_2D,
    Gfx.GL_TEXTURE_MIN_FILTER,
    Gfx.GL_NEAREST,
  );
  Gfx.glTexParameteri(
    Gfx.GL_TEXTURE_2D,
    Gfx.GL_TEXTURE_MAG_FILTER,
    Gfx.GL_NEAREST,
  );

  Gfx.glEnableClientState(Gfx.GL_VERTEX_ARRAY);
  Gfx.glEnableClientState(Gfx.GL_TEXTURE_COORD_ARRAY);

  const wglSwapIntervalEXT = Gfx.wglGetProcAddress("wglSwapIntervalEXT");
  const wglGetSwapIntervalEXT = Gfx.wglGetProcAddress("wglGetSwapIntervalEXT");
  if (wglSwapIntervalEXT && wglGetSwapIntervalEXT) {
    new Deno.UnsafeFnPointer(
      wglSwapIntervalEXT,
      {
        parameters: ["i32"],
        result: "void",
      },
    ).call(1);
    console.log(
      "Enabled VSync",
      new Deno.UnsafeFnPointer(
        wglGetSwapIntervalEXT,
        {
          parameters: [],
          result: "i32",
        },
      ).call(),
    );
  }
}

function glDestroy(hWnd: Deno.PointerValue, hRC: Deno.PointerValue) {
  Gfx.wglMakeCurrent(null, null);
  Gfx.wglDeleteContext(hRC);
  Gdi.ReleaseDC(hWnd, hDC);
}

addEventListener("unload", () => {
  glDestroy(hWnd!, hRC);
  Wm.DestroyWindow(hWnd!);
});

const pixels = new Uint8Array(canvas.width * canvas.height * 4);

function glDraw(hWnd: Deno.PointerValue) {
  draw();

  Gfx.wglMakeCurrent(hDC, hRC);

  const rect = Wm.allocRECT();
  const recti32 = new Int32Array(rect.buffer);
  Wm.GetClientRect(hWnd, rect);

  // deno-fmt-ignore
  const vertices = new Float32Array([
    0, 0, 0, 0,
    recti32[2], 0, 1, 0,
    0, recti32[3], 0, 1,
    recti32[2], recti32[3], 1, 1,
  ]);
  const verticesu8 = new Uint8Array(vertices.buffer);

  Gfx.glClear(Gfx.GL_COLOR_BUFFER_BIT);
  Gfx.glBindTexture(Gfx.GL_TEXTURE_2D, textID[0]);
  canvas.readPixels(0, 0, canvas.width, canvas.height, pixels);
  Gfx.glTexImage2D(
    Gfx.GL_TEXTURE_2D,
    0,
    Gfx.GL_RGB,
    canvas.width,
    canvas.height,
    0,
    Gfx.GL_RGBA,
    Gfx.GL_UNSIGNED_BYTE,
    pixels,
  );

  Gfx.glEnableClientState(Gfx.GL_VERTEX_ARRAY);
  Gfx.glEnableClientState(Gfx.GL_TEXTURE_COORD_ARRAY);

  Gfx.glVertexPointer(2, Gfx.GL_FLOAT, 4 * 4, verticesu8);
  Gfx.glTexCoordPointer(
    2,
    Gfx.GL_FLOAT,
    4 * 4,
    verticesu8.slice(8),
  );

  Gfx.glDrawArrays(Gfx.GL_TRIANGLE_STRIP, 0, 4);

  Gfx.glEnd();
  Gfx.glFlush();
}

const cb = new Deno.UnsafeCallback(
  {
    parameters: ["pointer", "u32", "pointer", "pointer"],
    result: "pointer",
  } as const,
  (hWnd, msg, wParam, lParam) => {
    switch (msg) {
      case Wm.WM_SIZE: {
        const lParamInt = Number(Deno.UnsafePointer.value(lParam));
        Gfx.glViewport(0, 0, lParamInt & 0xffff, lParamInt >> 16);
        Wm.PostMessageA(hWnd, Wm.WM_PAINT, null, null);
        return null;
      }

      case Wm.WM_KEYDOWN: {
        const wParamInt = Number(Deno.UnsafePointer.value(wParam));
        switch (wParamInt) {
          case 0x25: {
            x -= 10;
            break;
          }

          case 0x26: {
            y -= 10;
            break;
          }

          case 0x27: {
            x += 10;
            break;
          }

          case 0x28: {
            y += 10;
            break;
          }
        }
        return null;
      }

      case Wm.WM_CLOSE: {
        dispatchEvent(new Event("unload"));
        Deno.exit(0);
      }
    }
    return Wm.DefWindowProcA(
      hWnd,
      msg,
      wParam,
      lParam,
    );
  },
);

const wc = Wm.allocWNDCLASSA({
  style: Wm.CS_OWNDC,
  lpfnWndProc: cb.pointer,
  lpszClassName: "DenoCanvas",
});

if (!Wm.RegisterClassA(wc)) {
  Wm.MessageBoxA(
    null,
    "RegisterClass() failed: Cannot register window class.",
    "Error",
    0,
  );
  Deno.exit(1);
}

function createWindow(
  title: string,
  x: number,
  y: number,
  width: number,
  height: number,
) {
  const hWnd = Wm.CreateWindowExA(
    Wm.WS_EX_OVERLAPPEDWINDOW,
    "DenoCanvas",
    title,
    Wm.WS_OVERLAPPEDWINDOW | Wm.WS_CLIPSIBLINGS | Wm.WS_CLIPCHILDREN,
    x,
    y,
    width,
    height,
    null,
    null,
    null,
    null,
  );

  if (!hWnd) {
    Wm.MessageBoxA(
      null,
      "CreateWindowEx() failed: Cannot create a window.",
      "Error",
      0,
    );
    return;
  }

  const hdc = Gdi.GetDC(hWnd);

  const pfd = Gfx.allocPIXELFORMATDESCRIPTOR({
    nSize: 40,
    nVersion: 1,
    dwFlags: Gfx.PFD_DRAW_TO_WINDOW | Gfx.PFD_SUPPORT_OPENGL,
    iPixelType: Gfx.PFD_TYPE_RGBA,
    cColorBits: 32,
    cDepthBits: 24,
    iLayerType: Gfx.PFD_MAIN_PLANE,
  });

  const pf = Gfx.ChoosePixelFormat(hdc, pfd);
  if (!pf) {
    Wm.MessageBoxA(
      null,
      "ChoosePixelFormat() failed: Cannot find a suitable pixel format.",
      "Error",
      0,
    );
    return;
  }

  if (!Gfx.SetPixelFormat(hdc, pf, pfd)) {
    Wm.MessageBoxA(
      null,
      "SetPixelFormat() failed: Cannot set format specified.",
      "Error",
      0,
    );
    return;
  }

  Gfx.DescribePixelFormat(hdc, pf, pfd.byteLength, pfd);

  Gdi.ReleaseDC(hWnd, hdc);

  return hWnd;
}

const msg = Wm.allocMSG();

const hWnd = createWindow(
  "Deno Canvas",
  0,
  0,
  800,
  600,
);
if (!hWnd) {
  Deno.exit(1);
}

const hRC = glCreateContext(hWnd)!;
Wm.ShowWindow(hWnd, 1);

while (true) {
  glDraw(hWnd);
  Gfx.SwapBuffers(hDC);

  while (Wm.PeekMessageA(msg, null, 0, 0, Wm.PM_REMOVE)) {
    Wm.TranslateMessage(msg);
    Wm.DispatchMessageA(msg);
  }
}
