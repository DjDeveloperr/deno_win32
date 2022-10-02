import * as Wm from "../api/UI/WindowsAndMessaging.ts";
import * as Gfx from "../api/Graphics/OpenGL.ts";
import * as Gdi from "../api/Graphics/Gdi.ts";

function display() {
  Gfx.glClear(Gfx.GL_COLOR_BUFFER_BIT);
  Gfx.glBegin(Gfx.GL_TRIANGLES);
  Gfx.glColor3f(1.0, 0.0, 0.0);
  Gfx.glVertex2i(0, 1);
  Gfx.glColor3f(0.0, 1.0, 0.0);
  Gfx.glVertex2i(-1, -1);
  Gfx.glColor3f(0.0, 0.0, 1.0);
  Gfx.glVertex2i(1, -1);
  Gfx.glEnd();
  Gfx.glFlush();
}

const ps = Gdi.allocPAINTSTRUCT();

let clicks1 = 0, clicks2 = 0;

const cb = new Deno.UnsafeCallback(
  {
    parameters: ["pointer", "u32", "pointer", "pointer"],
    result: "i32",
  } as const,
  (hWnd, msg, wParam, lParam) => {
    switch (msg) {
      case Wm.WM_PAINT: {
        display();
        Gdi.BeginPaint(hWnd, ps);
        Gdi.EndPaint(hWnd, ps);
        return 0;
      }

      case Wm.WM_SIZE: {
        Gfx.glViewport(0, 0, Number(lParam) & 0xffff, Number(lParam) >> 16);
        Wm.PostMessageA(hWnd, Wm.WM_PAINT, null, null);
        return 0;
      }

      case Wm.WM_COMMAND: {
        if ((Number(wParam) & 0xffff) === Wm.BN_CLICKED) {
          if (lParam === button1) {
            Wm.SendMessageA(
              staticText1,
              Wm.WM_SETTEXT,
              null,
              new TextEncoder().encode(`Clicks: ${++clicks1}\0`),
            );
          } else if (lParam === button2) {
            Wm.SendMessageA(
              staticText2,
              Wm.WM_SETTEXT,
              null,
              new TextEncoder().encode(`Clicks: ${++clicks2}\0`),
            );
          }
        }
        return 0;
      }

      case Wm.WM_CLOSE: {
        Wm.PostQuitMessage(0);
        return 0;
      }
    }
    return Number(
      Wm.DefWindowProcA(
        hWnd,
        msg,
        wParam,
        lParam,
      ),
    );
  },
);

const wc = Wm.allocWNDCLASSA({
  style: Wm.CS_OWNDC,
  lpfnWndProc: cb.pointer,
  cbClsExtra: 0,
  cbWndExtra: 0,
  hIcon: Wm.LoadIconA(null, "IDI_APPLICATION"),
  hCursor: Wm.LoadCursorA(null, "IDC_ARROW"),
  hbrBackground: null,
  lpszMenuName: null,
  lpszClassName: "OpenGL",
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

function createOpenGLWindow(
  title: string,
  x: number,
  y: number,
  width: number,
  height: number,
  type: number,
  flags: number,
) {
  const hWnd = Wm.CreateWindowExA(
    Wm.WS_EX_OVERLAPPEDWINDOW,
    "OpenGL",
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
    dwFlags: Gdi.PFD_DRAW_TO_WINDOW | Gdi.PFD_SUPPORT_OPENGL | flags,
    iPixelType: type,
    cColorBits: 32,
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

const hWnd = createOpenGLWindow(
  "Deno Win32 OpenGL",
  0,
  0,
  800,
  600,
  Gdi.PFD_TYPE_RGBA,
  0,
);
if (!hWnd) {
  Deno.exit(1);
}

const button1 = Wm.CreateWindowExA(
  0,
  "Button",
  "button1",
  Wm.WS_CHILD | Wm.WS_VISIBLE,
  50,
  50,
  200,
  25,
  hWnd,
  null,
  null,
  null,
);
const button2 = Wm.CreateWindowExA(
  0,
  "Button",
  "button2",
  Wm.WS_CHILD | Wm.WS_VISIBLE,
  50,
  100,
  200,
  75,
  hWnd,
  null,
  null,
  null,
);
const staticText1 = Wm.CreateWindowExA(
  0,
  "Static",
  "Clicks: 0",
  Wm.WS_CHILD | Wm.WS_VISIBLE,
  50,
  200,
  200,
  23,
  hWnd,
  null,
  null,
  null,
);
const staticText2 = Wm.CreateWindowExA(
  0,
  "Static",
  "Clicks: 0",
  Wm.WS_CHILD | Wm.WS_VISIBLE,
  50,
  230,
  200,
  23,
  hWnd,
  null,
  null,
  null,
);

const hDC = Gdi.GetDC(hWnd);
const hRC = Gfx.wglCreateContext(hDC);
Gfx.wglMakeCurrent(hDC, hRC);

Wm.ShowWindow(hWnd, 1);

while (Wm.GetMessageA(msg, null, 0, 0)) {
  Wm.TranslateMessage(msg);
  Wm.DispatchMessageA(msg);
}

Gfx.wglMakeCurrent(null, null);
Gdi.ReleaseDC(hWnd, hDC);
Gfx.wglDeleteContext(hRC);
Wm.DestroyWindow(hWnd);
