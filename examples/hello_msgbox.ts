import { MB_OKCANCEL, MessageBoxA } from "../api/UI/WindowsAndMessaging.ts";

const result = MessageBoxA(
  null,
  "Hello, world!",
  "Hello",
  MB_OKCANCEL,
);
console.log(result);
