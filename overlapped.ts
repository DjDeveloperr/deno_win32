import {
  allocOVERLAPPED,
  CancelIoEx,
  GetOverlappedResultAsync,
} from "./api/System/IO.ts";

export type State = "pending" | "rejected" | "resolved" | "cancelled";

export class OverlappedPromise extends Promise<number> {
  #inner = allocOVERLAPPED();
  #bytesTransferred = new Uint32Array(1);
  #state: State = "pending";

  get buffer() {
    return this.#inner;
  }

  get internal() {
    return new BigUint64Array(this.#inner.buffer, 0, 1)[0];
  }

  get internalHigh() {
    return new Uint32Array(this.#inner.buffer, 8, 1)[0];
  }

  constructor(
    hFile:
      | Deno.PointerValue
      | ((
        resolve: (value: number | PromiseLike<number>) => void,
        reject: (reason?: any) => void,
      ) => void),
    signal?: AbortSignal,
  ) {
    if (typeof hFile === "function") {
      super(hFile);
      return;
    }
    let resolve: (value: number) => void;
    let reject: (reason: any) => void;

    super((iresolve, ireject) => {
      resolve = iresolve;
      reject = ireject;
    });

    if (signal) {
      signal.addEventListener("abort", () => {
        if (this.#state === "pending") {
          this.#state = "cancelled";
          CancelIoEx(hFile, this.#inner);
          reject(new DOMException("Aborted", "AbortError"));
        }
      });
    }
    const getResult = (): any =>
      GetOverlappedResultAsync(
        hFile,
        this.#inner,
        new Uint8Array(this.#bytesTransferred.buffer),
        true,
      ).then((result) => {
        if (this.#state === "cancelled") {
          return;
        }
        // why
        if (this.internal === 259n) {
          return getResult();
        }
        if (result) {
          this.#state = "resolved";
          resolve(this.internalHigh);
        } else {
          this.#state = "rejected";
          reject(new Error("GetOverlappedResultAsync failed"));
        }
      });
    getResult();
  }
}
