/// Auto-generated by Deno Win32: Windows.Win32.Storage.Xps.Printing.Apis

import * as util from "../../../util.ts";

// Enums
export type XPS_JOB_COMPLETION = number;
export type PrintDocumentPackageCompletion = number;

// Constants
export const XPS_JOB_IN_PROGRESS = 0;
export const XPS_JOB_COMPLETED = 1;
export const XPS_JOB_CANCELLED = 2;
export const XPS_JOB_FAILED = 3;
export const PrintDocumentPackageCompletion_InProgress = 0;
export const PrintDocumentPackageCompletion_Completed = 1;
export const PrintDocumentPackageCompletion_Canceled = 2;
export const PrintDocumentPackageCompletion_Failed = 3;

// Structs

export type HRESULT = number;

/**
 * Windows.Win32.Storage.Xps.Printing.XPS_JOB_STATUS (size: 32)
 */
export interface XPS_JOB_STATUS {
  /** u32 */
  jobId: number;
  /** i32 */
  currentDocument: number;
  /** i32 */
  currentPage: number;
  /** i32 */
  currentPageTotal: number;
  /** Windows.Win32.Storage.Xps.Printing.XPS_JOB_COMPLETION */
  completion: XPS_JOB_COMPLETION;
  /** Windows.Win32.Foundation.HRESULT */
  jobStatus: Uint8Array | Deno.PointerValue;
}

export const sizeofXPS_JOB_STATUS = 32;

export function allocXPS_JOB_STATUS(data?: Partial<XPS_JOB_STATUS>): Uint8Array {
  const buf = new Uint8Array(sizeofXPS_JOB_STATUS);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.jobId !== undefined) view.setUint32(0, Number(data.jobId), true);
  // 0x04: i32
  if (data?.currentDocument !== undefined) view.setInt32(4, Number(data.currentDocument), true);
  // 0x08: i32
  if (data?.currentPage !== undefined) view.setInt32(8, Number(data.currentPage), true);
  // 0x0c: i32
  if (data?.currentPageTotal !== undefined) view.setInt32(12, Number(data.currentPageTotal), true);
  // 0x10: i32
  if (data?.completion !== undefined) view.setInt32(16, Number(data.completion), true);
  // 0x14: pad4
  // 0x18: pointer
  if (data?.jobStatus !== undefined) view.setBigUint64(24, data.jobStatus === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.jobStatus))), true);
  return buf;
}

export class XPS_JOB_STATUSView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get jobId(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: i32
  get currentDocument(): number {
    return this.view.getInt32(4, true);
  }

  // 0x08: i32
  get currentPage(): number {
    return this.view.getInt32(8, true);
  }

  // 0x0c: i32
  get currentPageTotal(): number {
    return this.view.getInt32(12, true);
  }

  // 0x10: i32
  get completion(): number {
    return this.view.getInt32(16, true);
  }

  // 0x14: pad4

  // 0x18: pointer
  get jobStatus(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(24, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: u32
  set jobId(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: i32
  set currentDocument(value: number) {
    this.view.setInt32(4, value, true);
  }

  // 0x08: i32
  set currentPage(value: number) {
    this.view.setInt32(8, value, true);
  }

  // 0x0c: i32
  set currentPageTotal(value: number) {
    this.view.setInt32(12, value, true);
  }

  // 0x10: i32
  set completion(value: number) {
    this.view.setInt32(16, value, true);
  }

  // 0x14: pad4

  // 0x18: pointer
  set jobStatus(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }
}

/**
 * Windows.Win32.Storage.Xps.Printing.PrintDocumentPackageStatus (size: 32)
 */
export interface PrintDocumentPackageStatus {
  /** u32 */
  JobId: number;
  /** i32 */
  CurrentDocument: number;
  /** i32 */
  CurrentPage: number;
  /** i32 */
  CurrentPageTotal: number;
  /** Windows.Win32.Storage.Xps.Printing.PrintDocumentPackageCompletion */
  Completion: PrintDocumentPackageCompletion;
  /** Windows.Win32.Foundation.HRESULT */
  PackageStatus: Uint8Array | Deno.PointerValue;
}

export const sizeofPrintDocumentPackageStatus = 32;

export function allocPrintDocumentPackageStatus(data?: Partial<PrintDocumentPackageStatus>): Uint8Array {
  const buf = new Uint8Array(sizeofPrintDocumentPackageStatus);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.JobId !== undefined) view.setUint32(0, Number(data.JobId), true);
  // 0x04: i32
  if (data?.CurrentDocument !== undefined) view.setInt32(4, Number(data.CurrentDocument), true);
  // 0x08: i32
  if (data?.CurrentPage !== undefined) view.setInt32(8, Number(data.CurrentPage), true);
  // 0x0c: i32
  if (data?.CurrentPageTotal !== undefined) view.setInt32(12, Number(data.CurrentPageTotal), true);
  // 0x10: i32
  if (data?.Completion !== undefined) view.setInt32(16, Number(data.Completion), true);
  // 0x14: pad4
  // 0x18: pointer
  if (data?.PackageStatus !== undefined) view.setBigUint64(24, data.PackageStatus === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.PackageStatus))), true);
  return buf;
}

export class PrintDocumentPackageStatusView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get JobId(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: i32
  get CurrentDocument(): number {
    return this.view.getInt32(4, true);
  }

  // 0x08: i32
  get CurrentPage(): number {
    return this.view.getInt32(8, true);
  }

  // 0x0c: i32
  get CurrentPageTotal(): number {
    return this.view.getInt32(12, true);
  }

  // 0x10: i32
  get Completion(): number {
    return this.view.getInt32(16, true);
  }

  // 0x14: pad4

  // 0x18: pointer
  get PackageStatus(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(24, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: u32
  set JobId(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: i32
  set CurrentDocument(value: number) {
    this.view.setInt32(4, value, true);
  }

  // 0x08: i32
  set CurrentPage(value: number) {
    this.view.setInt32(8, value, true);
  }

  // 0x0c: i32
  set CurrentPageTotal(value: number) {
    this.view.setInt32(12, value, true);
  }

  // 0x10: i32
  set Completion(value: number) {
    this.view.setInt32(16, value, true);
  }

  // 0x14: pad4

  // 0x18: pointer
  set PackageStatus(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }
}

export type PWSTR = Deno.PointerValue | Uint8Array;

export type HANDLE = bigint | number;

// Native Libraries

try {
  var libXPSPRINT_dll = Deno.dlopen("XPSPRINT.dll", {
    StartXpsPrintJob: {
      parameters: ["buffer", "buffer", "buffer", "pointer", "pointer", "pointer", "u32", "pointer", "pointer", "pointer"],
      result: "pointer",
    },
    StartXpsPrintJob1: {
      parameters: ["buffer", "buffer", "buffer", "pointer", "pointer", "pointer", "pointer"],
      result: "pointer",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function StartXpsPrintJob(
  printerName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  jobName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  outputFileName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  progressEvent: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  completionEvent: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  printablePagesOn: Deno.PointerValue | Uint8Array /* ptr */,
  printablePagesOnCount: number /* u32 */,
  xpsPrintJob: Deno.PointerValue | Uint8Array /* ptr */,
  documentStream: Deno.PointerValue | Uint8Array /* ptr */,
  printTicketStream: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libXPSPRINT_dll.StartXpsPrintJob(util.pwstrToFfi(printerName), util.pwstrToFfi(jobName), util.pwstrToFfi(outputFileName), util.toPointer(progressEvent), util.toPointer(completionEvent), util.toPointer(printablePagesOn), printablePagesOnCount, util.toPointer(xpsPrintJob), util.toPointer(documentStream), util.toPointer(printTicketStream));
}

export function StartXpsPrintJob1(
  printerName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  jobName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  outputFileName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  progressEvent: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  completionEvent: Uint8Array | Deno.PointerValue /* Windows.Win32.Foundation.HANDLE */,
  xpsPrintJob: Deno.PointerValue | Uint8Array /* ptr */,
  printContentReceiver: Deno.PointerValue | Uint8Array /* ptr */,
): Deno.PointerValue /* Windows.Win32.Foundation.HRESULT */ {
  return libXPSPRINT_dll.StartXpsPrintJob1(util.pwstrToFfi(printerName), util.pwstrToFfi(jobName), util.pwstrToFfi(outputFileName), util.toPointer(progressEvent), util.toPointer(completionEvent), util.toPointer(xpsPrintJob), util.toPointer(printContentReceiver));
}

