/// Auto-generated by Deno Win32: Windows.Win32.Networking.BackgroundIntelligentTransferService.Apis

import * as util from "../../util.ts";

// Enums
export type BG_TOKEN = number;
export type BG_ERROR_CONTEXT = number;
export type BG_JOB_PRIORITY = number;
export type BG_JOB_STATE = number;
export type BG_JOB_TYPE = number;
export type BG_JOB_PROXY_USAGE = number;
export type BG_AUTH_TARGET = number;
export type BG_AUTH_SCHEME = number;
export type BG_CERT_STORE_LOCATION = number;
export type BITS_JOB_TRANSFER_POLICY = number;
export type BITS_JOB_PROPERTY_ID = number;
export type BITS_FILE_PROPERTY_ID = number;
export type GROUPPROP = number;

// Constants
export const BG_TOKEN_LOCAL_FILE = 1;
export const BG_TOKEN_NETWORK = 2;
export const BG_NOTIFY_JOB_TRANSFERRED = 1;
export const BG_NOTIFY_JOB_ERROR = 2;
export const BG_NOTIFY_DISABLE = 4;
export const BG_NOTIFY_JOB_MODIFICATION = 8;
export const BG_NOTIFY_FILE_TRANSFERRED = 16;
export const BG_NOTIFY_FILE_RANGES_TRANSFERRED = 32;
export const BG_JOB_ENUM_ALL_USERS = 1;
export const BG_COPY_FILE_OWNER = 1;
export const BG_COPY_FILE_GROUP = 2;
export const BG_COPY_FILE_DACL = 4;
export const BG_COPY_FILE_SACL = 8;
export const BG_COPY_FILE_ALL = 15;
export const BG_SSL_ENABLE_CRL_CHECK = 1;
export const BG_SSL_IGNORE_CERT_CN_INVALID = 2;
export const BG_SSL_IGNORE_CERT_DATE_INVALID = 4;
export const BG_SSL_IGNORE_UNKNOWN_CA = 8;
export const BG_SSL_IGNORE_CERT_WRONG_USAGE = 16;
export const BG_HTTP_REDIRECT_POLICY_MASK = 1792;
export const BG_HTTP_REDIRECT_POLICY_ALLOW_SILENT = 0;
export const BG_HTTP_REDIRECT_POLICY_ALLOW_REPORT = 256;
export const BG_HTTP_REDIRECT_POLICY_DISALLOW = 512;
export const BG_HTTP_REDIRECT_POLICY_ALLOW_HTTPS_TO_HTTP = 2048;
export const BG_ENABLE_PEERCACHING_CLIENT = 1;
export const BG_ENABLE_PEERCACHING_SERVER = 2;
export const BG_DISABLE_BRANCH_CACHE = 4;
export const BG_JOB_ENABLE_PEERCACHING_CLIENT = 1;
export const BG_JOB_ENABLE_PEERCACHING_SERVER = 2;
export const BG_JOB_DISABLE_BRANCH_CACHE = 4;
export const BITS_COST_STATE_UNRESTRICTED = 1;
export const BITS_COST_STATE_CAPPED_USAGE_UNKNOWN = 2;
export const BITS_COST_STATE_BELOW_CAP = 4;
export const BITS_COST_STATE_NEAR_CAP = 8;
export const BITS_COST_STATE_OVERCAP_CHARGED = 16;
export const BITS_COST_STATE_OVERCAP_THROTTLED = 32;
export const BITS_COST_STATE_USAGE_BASED = 64;
export const BITS_COST_STATE_ROAMING = 128;
export const BITS_COST_OPTION_IGNORE_CONGESTION = 2147483648;
export const BITS_COST_STATE_RESERVED = 1073741824;
export const QM_NOTIFY_FILE_DONE = 1;
export const QM_NOTIFY_JOB_DONE = 2;
export const QM_NOTIFY_GROUP_DONE = 4;
export const QM_NOTIFY_DISABLE_NOTIFY = 64;
export const QM_NOTIFY_USE_PROGRESSEX = 128;
export const QM_STATUS_FILE_COMPLETE = 1;
export const QM_STATUS_FILE_INCOMPLETE = 2;
export const QM_STATUS_JOB_COMPLETE = 4;
export const QM_STATUS_JOB_INCOMPLETE = 8;
export const QM_STATUS_JOB_ERROR = 16;
export const QM_STATUS_JOB_FOREGROUND = 32;
export const QM_STATUS_GROUP_COMPLETE = 64;
export const QM_STATUS_GROUP_INCOMPLETE = 128;
export const QM_STATUS_GROUP_SUSPENDED = 256;
export const QM_STATUS_GROUP_ERROR = 512;
export const QM_STATUS_GROUP_FOREGROUND = 1024;
export const QM_PROTOCOL_HTTP = 1;
export const QM_PROTOCOL_FTP = 2;
export const QM_PROTOCOL_SMB = 3;
export const QM_PROTOCOL_CUSTOM = 4;
export const QM_PROGRESS_PERCENT_DONE = 1;
export const QM_PROGRESS_TIME_DONE = 2;
export const QM_PROGRESS_SIZE_DONE = 3;
export const QM_E_INVALID_STATE = 2164264961;
export const QM_E_SERVICE_UNAVAILABLE = 2164264962;
export const QM_E_DOWNLOADER_UNAVAILABLE = 2164264963;
export const QM_E_ITEM_NOT_FOUND = 2164264964;
export const BG_E_NOT_FOUND = `-2145386495`;
export const BG_E_INVALID_STATE = `-2145386494`;
export const BG_E_EMPTY = `-2145386493`;
export const BG_E_FILE_NOT_AVAILABLE = `-2145386492`;
export const BG_E_PROTOCOL_NOT_AVAILABLE = `-2145386491`;
export const BG_S_ERROR_CONTEXT_NONE = 2097158;
export const BG_E_ERROR_CONTEXT_UNKNOWN = `-2145386489`;
export const BG_E_ERROR_CONTEXT_GENERAL_QUEUE_MANAGER = `-2145386488`;
export const BG_E_ERROR_CONTEXT_LOCAL_FILE = `-2145386487`;
export const BG_E_ERROR_CONTEXT_REMOTE_FILE = `-2145386486`;
export const BG_E_ERROR_CONTEXT_GENERAL_TRANSPORT = `-2145386485`;
export const BG_E_ERROR_CONTEXT_QUEUE_MANAGER_NOTIFICATION = `-2145386484`;
export const BG_E_DESTINATION_LOCKED = `-2145386483`;
export const BG_E_VOLUME_CHANGED = `-2145386482`;
export const BG_E_ERROR_INFORMATION_UNAVAILABLE = `-2145386481`;
export const BG_E_NETWORK_DISCONNECTED = `-2145386480`;
export const BG_E_MISSING_FILE_SIZE = `-2145386479`;
export const BG_E_INSUFFICIENT_HTTP_SUPPORT = `-2145386478`;
export const BG_E_INSUFFICIENT_RANGE_SUPPORT = `-2145386477`;
export const BG_E_REMOTE_NOT_SUPPORTED = `-2145386476`;
export const BG_E_NEW_OWNER_DIFF_MAPPING = `-2145386475`;
export const BG_E_NEW_OWNER_NO_FILE_ACCESS = `-2145386474`;
export const BG_S_PARTIAL_COMPLETE = 2097175;
export const BG_E_PROXY_LIST_TOO_LARGE = `-2145386472`;
export const BG_E_PROXY_BYPASS_LIST_TOO_LARGE = `-2145386471`;
export const BG_S_UNABLE_TO_DELETE_FILES = 2097178;
export const BG_E_INVALID_SERVER_RESPONSE = `-2145386469`;
export const BG_E_TOO_MANY_FILES = `-2145386468`;
export const BG_E_LOCAL_FILE_CHANGED = `-2145386467`;
export const BG_E_ERROR_CONTEXT_REMOTE_APPLICATION = `-2145386466`;
export const BG_E_SESSION_NOT_FOUND = `-2145386465`;
export const BG_E_TOO_LARGE = `-2145386464`;
export const BG_E_STRING_TOO_LONG = `-2145386463`;
export const BG_E_CLIENT_SERVER_PROTOCOL_MISMATCH = `-2145386462`;
export const BG_E_SERVER_EXECUTE_ENABLE = `-2145386461`;
export const BG_E_NO_PROGRESS = `-2145386460`;
export const BG_E_USERNAME_TOO_LARGE = `-2145386459`;
export const BG_E_PASSWORD_TOO_LARGE = `-2145386458`;
export const BG_E_INVALID_AUTH_TARGET = `-2145386457`;
export const BG_E_INVALID_AUTH_SCHEME = `-2145386456`;
export const BG_E_FILE_NOT_FOUND = `-2145386455`;
export const BG_S_PROXY_CHANGED = 2097194;
export const BG_E_INVALID_RANGE = `-2145386453`;
export const BG_E_OVERLAPPING_RANGES = `-2145386452`;
export const BG_E_CONNECT_FAILURE = `-2145386451`;
export const BG_E_CONNECTION_CLOSED = `-2145386450`;
export const BG_E_BLOCKED_BY_POLICY = `-2145386434`;
export const BG_E_INVALID_PROXY_INFO = `-2145386433`;
export const BG_E_INVALID_CREDENTIALS = `-2145386432`;
export const BG_E_INVALID_HASH_ALGORITHM = `-2145386431`;
export const BG_E_RECORD_DELETED = `-2145386430`;
export const BG_E_COMMIT_IN_PROGRESS = `-2145386429`;
export const BG_E_DISCOVERY_IN_PROGRESS = `-2145386428`;
export const BG_E_UPNP_ERROR = `-2145386427`;
export const BG_E_TEST_OPTION_BLOCKED_DOWNLOAD = `-2145386426`;
export const BG_E_PEERCACHING_DISABLED = `-2145386425`;
export const BG_E_BUSYCACHERECORD = `-2145386424`;
export const BG_E_TOO_MANY_JOBS_PER_USER = `-2145386423`;
export const BG_E_TOO_MANY_JOBS_PER_MACHINE = `-2145386416`;
export const BG_E_TOO_MANY_FILES_IN_JOB = `-2145386415`;
export const BG_E_TOO_MANY_RANGES_IN_FILE = `-2145386414`;
export const BG_E_VALIDATION_FAILED = `-2145386413`;
export const BG_E_MAXDOWNLOAD_TIMEOUT = `-2145386412`;
export const BG_S_OVERRIDDEN_BY_POLICY = 2097237;
export const BG_E_TOKEN_REQUIRED = `-2145386410`;
export const BG_E_UNKNOWN_PROPERTY_ID = `-2145386409`;
export const BG_E_READ_ONLY_PROPERTY = `-2145386408`;
export const BG_E_BLOCKED_BY_COST_TRANSFER_POLICY = `-2145386407`;
export const BG_E_PROPERTY_SUPPORTED_FOR_DOWNLOAD_JOBS_ONLY = `-2145386400`;
export const BG_E_READ_ONLY_PROPERTY_AFTER_ADDFILE = `-2145386399`;
export const BG_E_READ_ONLY_PROPERTY_AFTER_RESUME = `-2145386398`;
export const BG_E_MAX_DOWNLOAD_SIZE_INVALID_VALUE = `-2145386397`;
export const BG_E_MAX_DOWNLOAD_SIZE_LIMIT_REACHED = `-2145386396`;
export const BG_E_STANDBY_MODE = `-2145386395`;
export const BG_E_USE_STORED_CREDENTIALS_NOT_SUPPORTED = `-2145386394`;
export const BG_E_BLOCKED_BY_BATTERY_POLICY = `-2145386393`;
export const BG_E_BLOCKED_BY_BATTERY_SAVER = `-2145386392`;
export const BG_E_WATCHDOG_TIMEOUT = `-2145386391`;
export const BG_E_APP_PACKAGE_NOT_FOUND = `-2145386390`;
export const BG_E_APP_PACKAGE_SCENARIO_NOT_SUPPORTED = `-2145386389`;
export const BG_E_DATABASE_CORRUPT = `-2145386388`;
export const BG_E_RANDOM_ACCESS_NOT_SUPPORTED = `-2145386387`;
export const BG_E_BLOCKED_BY_BACKGROUND_ACCESS_POLICY = `-2145386386`;
export const BG_E_BLOCKED_BY_GAME_MODE = `-2145386385`;
export const BG_E_BLOCKED_BY_SYSTEM_POLICY = `-2145386384`;
export const BG_E_NOT_SUPPORTED_WITH_CUSTOM_HTTP_METHOD = `-2145386383`;
export const BG_E_UNSUPPORTED_JOB_CONFIGURATION = `-2145386382`;
export const BG_E_REMOTE_FILE_CHANGED = `-2145386381`;
export const BG_E_SERVER_CERT_VALIDATION_INTERFACE_REQUIRED = `-2145386380`;
export const BG_E_READ_ONLY_WHEN_JOB_ACTIVE = `-2145386379`;
export const BG_E_ERROR_CONTEXT_SERVER_CERTIFICATE_CALLBACK = `-2145386378`;
export const BG_E_HTTP_ERROR_100 = `-2145845148`;
export const BG_E_HTTP_ERROR_101 = `-2145845147`;
export const BG_E_HTTP_ERROR_200 = `-2145845048`;
export const BG_E_HTTP_ERROR_201 = `-2145845047`;
export const BG_E_HTTP_ERROR_202 = `-2145845046`;
export const BG_E_HTTP_ERROR_203 = `-2145845045`;
export const BG_E_HTTP_ERROR_204 = `-2145845044`;
export const BG_E_HTTP_ERROR_205 = `-2145845043`;
export const BG_E_HTTP_ERROR_206 = `-2145845042`;
export const BG_E_HTTP_ERROR_300 = `-2145844948`;
export const BG_E_HTTP_ERROR_301 = `-2145844947`;
export const BG_E_HTTP_ERROR_302 = `-2145844946`;
export const BG_E_HTTP_ERROR_303 = `-2145844945`;
export const BG_E_HTTP_ERROR_304 = `-2145844944`;
export const BG_E_HTTP_ERROR_305 = `-2145844943`;
export const BG_E_HTTP_ERROR_307 = `-2145844941`;
export const BG_E_HTTP_ERROR_400 = `-2145844848`;
export const BG_E_HTTP_ERROR_401 = `-2145844847`;
export const BG_E_HTTP_ERROR_402 = `-2145844846`;
export const BG_E_HTTP_ERROR_403 = `-2145844845`;
export const BG_E_HTTP_ERROR_404 = `-2145844844`;
export const BG_E_HTTP_ERROR_405 = `-2145844843`;
export const BG_E_HTTP_ERROR_406 = `-2145844842`;
export const BG_E_HTTP_ERROR_407 = `-2145844841`;
export const BG_E_HTTP_ERROR_408 = `-2145844840`;
export const BG_E_HTTP_ERROR_409 = `-2145844839`;
export const BG_E_HTTP_ERROR_410 = `-2145844838`;
export const BG_E_HTTP_ERROR_411 = `-2145844837`;
export const BG_E_HTTP_ERROR_412 = `-2145844836`;
export const BG_E_HTTP_ERROR_413 = `-2145844835`;
export const BG_E_HTTP_ERROR_414 = `-2145844834`;
export const BG_E_HTTP_ERROR_415 = `-2145844833`;
export const BG_E_HTTP_ERROR_416 = `-2145844832`;
export const BG_E_HTTP_ERROR_417 = `-2145844831`;
export const BG_E_HTTP_ERROR_449 = `-2145844799`;
export const BG_E_HTTP_ERROR_500 = `-2145844748`;
export const BG_E_HTTP_ERROR_501 = `-2145844747`;
export const BG_E_HTTP_ERROR_502 = `-2145844746`;
export const BG_E_HTTP_ERROR_503 = `-2145844745`;
export const BG_E_HTTP_ERROR_504 = `-2145844744`;
export const BG_E_HTTP_ERROR_505 = `-2145844743`;
export const BITS_MC_JOB_CANCELLED = `-2145828864`;
export const BITS_MC_FILE_DELETION_FAILED = `-2145828863`;
export const BITS_MC_FILE_DELETION_FAILED_MORE = `-2145828862`;
export const BITS_MC_JOB_PROPERTY_CHANGE = `-2145828861`;
export const BITS_MC_JOB_TAKE_OWNERSHIP = `-2145828860`;
export const BITS_MC_JOB_SCAVENGED = `-2145828859`;
export const BITS_MC_JOB_NOTIFICATION_FAILURE = `-2145828858`;
export const BITS_MC_STATE_FILE_CORRUPT = `-2145828857`;
export const BITS_MC_FAILED_TO_START = `-2145828856`;
export const BITS_MC_FATAL_IGD_ERROR = `-2145828855`;
export const BITS_MC_PEERCACHING_PORT = `-2145828854`;
export const BITS_MC_WSD_PORT = `-2145828853`;
export const BG_ERROR_CONTEXT_NONE = 0;
export const BG_ERROR_CONTEXT_UNKNOWN = 1;
export const BG_ERROR_CONTEXT_GENERAL_QUEUE_MANAGER = 2;
export const BG_ERROR_CONTEXT_QUEUE_MANAGER_NOTIFICATION = 3;
export const BG_ERROR_CONTEXT_LOCAL_FILE = 4;
export const BG_ERROR_CONTEXT_REMOTE_FILE = 5;
export const BG_ERROR_CONTEXT_GENERAL_TRANSPORT = 6;
export const BG_ERROR_CONTEXT_REMOTE_APPLICATION = 7;
export const BG_ERROR_CONTEXT_SERVER_CERTIFICATE_CALLBACK = 8;
export const BG_JOB_PRIORITY_FOREGROUND = 0;
export const BG_JOB_PRIORITY_HIGH = 1;
export const BG_JOB_PRIORITY_NORMAL = 2;
export const BG_JOB_PRIORITY_LOW = 3;
export const BG_JOB_STATE_QUEUED = 0;
export const BG_JOB_STATE_CONNECTING = 1;
export const BG_JOB_STATE_TRANSFERRING = 2;
export const BG_JOB_STATE_SUSPENDED = 3;
export const BG_JOB_STATE_ERROR = 4;
export const BG_JOB_STATE_TRANSIENT_ERROR = 5;
export const BG_JOB_STATE_TRANSFERRED = 6;
export const BG_JOB_STATE_ACKNOWLEDGED = 7;
export const BG_JOB_STATE_CANCELLED = 8;
export const BG_JOB_TYPE_DOWNLOAD = 0;
export const BG_JOB_TYPE_UPLOAD = 1;
export const BG_JOB_TYPE_UPLOAD_REPLY = 2;
export const BG_JOB_PROXY_USAGE_PRECONFIG = 0;
export const BG_JOB_PROXY_USAGE_NO_PROXY = 1;
export const BG_JOB_PROXY_USAGE_OVERRIDE = 2;
export const BG_JOB_PROXY_USAGE_AUTODETECT = 3;
export const BG_AUTH_TARGET_SERVER = 1;
export const BG_AUTH_TARGET_PROXY = 2;
export const BG_AUTH_SCHEME_BASIC = 1;
export const BG_AUTH_SCHEME_DIGEST = 2;
export const BG_AUTH_SCHEME_NTLM = 3;
export const BG_AUTH_SCHEME_NEGOTIATE = 4;
export const BG_AUTH_SCHEME_PASSPORT = 5;
export const BG_CERT_STORE_LOCATION_CURRENT_USER = 0;
export const BG_CERT_STORE_LOCATION_LOCAL_MACHINE = 1;
export const BG_CERT_STORE_LOCATION_CURRENT_SERVICE = 2;
export const BG_CERT_STORE_LOCATION_SERVICES = 3;
export const BG_CERT_STORE_LOCATION_USERS = 4;
export const BG_CERT_STORE_LOCATION_CURRENT_USER_GROUP_POLICY = 5;
export const BG_CERT_STORE_LOCATION_LOCAL_MACHINE_GROUP_POLICY = 6;
export const BG_CERT_STORE_LOCATION_LOCAL_MACHINE_ENTERPRISE = 7;
export const BITS_JOB_TRANSFER_POLICY_ALWAYS = `-2147483393`;
export const BITS_JOB_TRANSFER_POLICY_NOT_ROAMING = `-2147483521`;
export const BITS_JOB_TRANSFER_POLICY_NO_SURCHARGE = `-2147483537`;
export const BITS_JOB_TRANSFER_POLICY_STANDARD = `-2147483545`;
export const BITS_JOB_TRANSFER_POLICY_UNRESTRICTED = `-2147483615`;
export const BITS_JOB_PROPERTY_ID_COST_FLAGS = 1;
export const BITS_JOB_PROPERTY_NOTIFICATION_CLSID = 2;
export const BITS_JOB_PROPERTY_DYNAMIC_CONTENT = 3;
export const BITS_JOB_PROPERTY_HIGH_PERFORMANCE = 4;
export const BITS_JOB_PROPERTY_MAX_DOWNLOAD_SIZE = 5;
export const BITS_JOB_PROPERTY_USE_STORED_CREDENTIALS = 7;
export const BITS_JOB_PROPERTY_MINIMUM_NOTIFICATION_INTERVAL_MS = 9;
export const BITS_JOB_PROPERTY_ON_DEMAND_MODE = 10;
export const BITS_FILE_PROPERTY_ID_HTTP_RESPONSE_HEADERS = 1;
export const GROUPPROP_PRIORITY = 0;
export const GROUPPROP_REMOTEUSERID = 1;
export const GROUPPROP_REMOTEUSERPWD = 2;
export const GROUPPROP_LOCALUSERID = 3;
export const GROUPPROP_LOCALUSERPWD = 4;
export const GROUPPROP_PROTOCOLFLAGS = 5;
export const GROUPPROP_NOTIFYFLAGS = 6;
export const GROUPPROP_NOTIFYCLSID = 7;
export const GROUPPROP_PROGRESSSIZE = 8;
export const GROUPPROP_PROGRESSPERCENT = 9;
export const GROUPPROP_PROGRESSTIME = 10;
export const GROUPPROP_DISPLAYNAME = 11;
export const GROUPPROP_DESCRIPTION = 12;

// Structs

export type BOOL = number;

/**
 * Windows.Win32.Networking.BackgroundIntelligentTransferService.BG_FILE_PROGRESS (size: 24)
 */
export interface BG_FILE_PROGRESS {
  /** u64 */
  BytesTotal: number | bigint;
  /** u64 */
  BytesTransferred: number | bigint;
  /** Windows.Win32.Foundation.BOOL */
  Completed: boolean;
}

export const sizeofBG_FILE_PROGRESS = 24;

export function allocBG_FILE_PROGRESS(data?: Partial<BG_FILE_PROGRESS>): Uint8Array {
  const buf = new Uint8Array(sizeofBG_FILE_PROGRESS);
  const view = new DataView(buf.buffer);
  // 0x00: u64
  if (data?.BytesTotal !== undefined) view.setBigUint64(0, util.toBigInt(data.BytesTotal), true);
  // 0x08: u64
  if (data?.BytesTransferred !== undefined) view.setBigUint64(8, util.toBigInt(data.BytesTransferred), true);
  // 0x10: i32
  if (data?.Completed !== undefined) view.setInt32(16, Number(data.Completed), true);
  // 0x14: pad4
  return buf;
}

export class BG_FILE_PROGRESSView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u64
  get BytesTotal(): number | bigint {
    return this.view.getBigUint64(0, true);
  }

  // 0x08: u64
  get BytesTransferred(): number | bigint {
    return this.view.getBigUint64(8, true);
  }

  // 0x10: i32
  get Completed(): number {
    return this.view.getInt32(16, true);
  }

  // 0x14: pad4

  // 0x00: u64
  set BytesTotal(value: number | bigint) {
    this.view.setBigUint64(0, util.toBigInt(value), true);
  }

  // 0x08: u64
  set BytesTransferred(value: number | bigint) {
    this.view.setBigUint64(8, util.toBigInt(value), true);
  }

  // 0x10: i32
  set Completed(value: number) {
    this.view.setInt32(16, value, true);
  }

  // 0x14: pad4
}

export type PWSTR = Deno.PointerValue | Uint8Array | null;

/**
 * Windows.Win32.Networking.BackgroundIntelligentTransferService.BG_FILE_INFO (size: 16)
 */
export interface BG_FILE_INFO {
  /** Windows.Win32.Foundation.PWSTR */
  RemoteName: string | null | Uint8Array | Uint16Array;
  /** Windows.Win32.Foundation.PWSTR */
  LocalName: string | null | Uint8Array | Uint16Array;
}

export const sizeofBG_FILE_INFO = 16;

export function allocBG_FILE_INFO(data?: Partial<BG_FILE_INFO>): Uint8Array {
  const buf = new Uint8Array(sizeofBG_FILE_INFO);
  const view = new DataView(buf.buffer);
  // 0x00: buffer
  if (data?.RemoteName !== undefined) {
    (buf as any)._f0 = util.pwstrToFfi(data.RemoteName);
    view.setBigUint64(0, (buf as any)._f0 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f0)), true);
  }
  // 0x08: buffer
  if (data?.LocalName !== undefined) {
    (buf as any)._f8 = util.pwstrToFfi(data.LocalName);
    view.setBigUint64(8, (buf as any)._f8 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f8)), true);
  }
  return buf;
}

export class BG_FILE_INFOView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: buffer
  get RemoteName(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x08: buffer
  get LocalName(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: buffer
  set RemoteName(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f0 = value;
    this.view.setBigUint64(0, util.toBigInt(util.toPointer((this.buf as any)._f0)), true);
  }

  // 0x08: buffer
  set LocalName(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f8 = value;
    this.view.setBigUint64(8, util.toBigInt(util.toPointer((this.buf as any)._f8)), true);
  }
}

/**
 * Windows.Win32.Networking.BackgroundIntelligentTransferService.BG_JOB_PROGRESS (size: 24)
 */
export interface BG_JOB_PROGRESS {
  /** u64 */
  BytesTotal: number | bigint;
  /** u64 */
  BytesTransferred: number | bigint;
  /** u32 */
  FilesTotal: number;
  /** u32 */
  FilesTransferred: number;
}

export const sizeofBG_JOB_PROGRESS = 24;

export function allocBG_JOB_PROGRESS(data?: Partial<BG_JOB_PROGRESS>): Uint8Array {
  const buf = new Uint8Array(sizeofBG_JOB_PROGRESS);
  const view = new DataView(buf.buffer);
  // 0x00: u64
  if (data?.BytesTotal !== undefined) view.setBigUint64(0, util.toBigInt(data.BytesTotal), true);
  // 0x08: u64
  if (data?.BytesTransferred !== undefined) view.setBigUint64(8, util.toBigInt(data.BytesTransferred), true);
  // 0x10: u32
  if (data?.FilesTotal !== undefined) view.setUint32(16, Number(data.FilesTotal), true);
  // 0x14: u32
  if (data?.FilesTransferred !== undefined) view.setUint32(20, Number(data.FilesTransferred), true);
  return buf;
}

export class BG_JOB_PROGRESSView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u64
  get BytesTotal(): number | bigint {
    return this.view.getBigUint64(0, true);
  }

  // 0x08: u64
  get BytesTransferred(): number | bigint {
    return this.view.getBigUint64(8, true);
  }

  // 0x10: u32
  get FilesTotal(): number {
    return this.view.getUint32(16, true);
  }

  // 0x14: u32
  get FilesTransferred(): number {
    return this.view.getUint32(20, true);
  }

  // 0x00: u64
  set BytesTotal(value: number | bigint) {
    this.view.setBigUint64(0, util.toBigInt(value), true);
  }

  // 0x08: u64
  set BytesTransferred(value: number | bigint) {
    this.view.setBigUint64(8, util.toBigInt(value), true);
  }

  // 0x10: u32
  set FilesTotal(value: number) {
    this.view.setUint32(16, value, true);
  }

  // 0x14: u32
  set FilesTransferred(value: number) {
    this.view.setUint32(20, value, true);
  }
}

/**
 * Windows.Win32.Foundation.FILETIME (size: 8)
 */
export interface FILETIME {
  /** u32 */
  dwLowDateTime: number;
  /** u32 */
  dwHighDateTime: number;
}

export const sizeofFILETIME = 8;

export function allocFILETIME(data?: Partial<FILETIME>): Uint8Array {
  const buf = new Uint8Array(sizeofFILETIME);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.dwLowDateTime !== undefined) view.setUint32(0, Number(data.dwLowDateTime), true);
  // 0x04: u32
  if (data?.dwHighDateTime !== undefined) view.setUint32(4, Number(data.dwHighDateTime), true);
  return buf;
}

export class FILETIMEView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get dwLowDateTime(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: u32
  get dwHighDateTime(): number {
    return this.view.getUint32(4, true);
  }

  // 0x00: u32
  set dwLowDateTime(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: u32
  set dwHighDateTime(value: number) {
    this.view.setUint32(4, value, true);
  }
}

/**
 * Windows.Win32.Networking.BackgroundIntelligentTransferService.BG_JOB_TIMES (size: 24)
 */
export interface BG_JOB_TIMES {
  /** Windows.Win32.Foundation.FILETIME */
  CreationTime: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Foundation.FILETIME */
  ModificationTime: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Foundation.FILETIME */
  TransferCompletionTime: Uint8Array | Deno.PointerValue | null;
}

export const sizeofBG_JOB_TIMES = 24;

export function allocBG_JOB_TIMES(data?: Partial<BG_JOB_TIMES>): Uint8Array {
  const buf = new Uint8Array(sizeofBG_JOB_TIMES);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.CreationTime !== undefined) view.setBigUint64(0, data.CreationTime === null ? 0n : util.toBigInt(util.toPointer(data.CreationTime)), true);
  // 0x08: pointer
  if (data?.ModificationTime !== undefined) view.setBigUint64(8, data.ModificationTime === null ? 0n : util.toBigInt(util.toPointer(data.ModificationTime)), true);
  // 0x10: pointer
  if (data?.TransferCompletionTime !== undefined) view.setBigUint64(16, data.TransferCompletionTime === null ? 0n : util.toBigInt(util.toPointer(data.TransferCompletionTime)), true);
  return buf;
}

export class BG_JOB_TIMESView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get CreationTime(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x08: pointer
  get ModificationTime(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: pointer
  get TransferCompletionTime(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(16, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: pointer
  set CreationTime(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(0, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x08: pointer
  set ModificationTime(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x10: pointer
  set TransferCompletionTime(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(16, util.toBigInt(util.toPointer(value)), true);
  }
}

/**
 * Windows.Win32.Networking.BackgroundIntelligentTransferService.BG_JOB_REPLY_PROGRESS (size: 16)
 */
export interface BG_JOB_REPLY_PROGRESS {
  /** u64 */
  BytesTotal: number | bigint;
  /** u64 */
  BytesTransferred: number | bigint;
}

export const sizeofBG_JOB_REPLY_PROGRESS = 16;

export function allocBG_JOB_REPLY_PROGRESS(data?: Partial<BG_JOB_REPLY_PROGRESS>): Uint8Array {
  const buf = new Uint8Array(sizeofBG_JOB_REPLY_PROGRESS);
  const view = new DataView(buf.buffer);
  // 0x00: u64
  if (data?.BytesTotal !== undefined) view.setBigUint64(0, util.toBigInt(data.BytesTotal), true);
  // 0x08: u64
  if (data?.BytesTransferred !== undefined) view.setBigUint64(8, util.toBigInt(data.BytesTransferred), true);
  return buf;
}

export class BG_JOB_REPLY_PROGRESSView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u64
  get BytesTotal(): number | bigint {
    return this.view.getBigUint64(0, true);
  }

  // 0x08: u64
  get BytesTransferred(): number | bigint {
    return this.view.getBigUint64(8, true);
  }

  // 0x00: u64
  set BytesTotal(value: number | bigint) {
    this.view.setBigUint64(0, util.toBigInt(value), true);
  }

  // 0x08: u64
  set BytesTransferred(value: number | bigint) {
    this.view.setBigUint64(8, util.toBigInt(value), true);
  }
}

/**
 * Windows.Win32.Networking.BackgroundIntelligentTransferService.BG_BASIC_CREDENTIALS (size: 16)
 */
export interface BG_BASIC_CREDENTIALS {
  /** Windows.Win32.Foundation.PWSTR */
  UserName: string | null | Uint8Array | Uint16Array;
  /** Windows.Win32.Foundation.PWSTR */
  Password: string | null | Uint8Array | Uint16Array;
}

export const sizeofBG_BASIC_CREDENTIALS = 16;

export function allocBG_BASIC_CREDENTIALS(data?: Partial<BG_BASIC_CREDENTIALS>): Uint8Array {
  const buf = new Uint8Array(sizeofBG_BASIC_CREDENTIALS);
  const view = new DataView(buf.buffer);
  // 0x00: buffer
  if (data?.UserName !== undefined) {
    (buf as any)._f0 = util.pwstrToFfi(data.UserName);
    view.setBigUint64(0, (buf as any)._f0 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f0)), true);
  }
  // 0x08: buffer
  if (data?.Password !== undefined) {
    (buf as any)._f8 = util.pwstrToFfi(data.Password);
    view.setBigUint64(8, (buf as any)._f8 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f8)), true);
  }
  return buf;
}

export class BG_BASIC_CREDENTIALSView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: buffer
  get UserName(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x08: buffer
  get Password(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: buffer
  set UserName(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f0 = value;
    this.view.setBigUint64(0, util.toBigInt(util.toPointer((this.buf as any)._f0)), true);
  }

  // 0x08: buffer
  set Password(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f8 = value;
    this.view.setBigUint64(8, util.toBigInt(util.toPointer((this.buf as any)._f8)), true);
  }
}

/**
 * Windows.Win32.Networking.BackgroundIntelligentTransferService.BG_AUTH_CREDENTIALS_UNION (size: 8)
 */
export interface BG_AUTH_CREDENTIALS_UNION {
  /** Windows.Win32.Networking.BackgroundIntelligentTransferService.BG_BASIC_CREDENTIALS */
  Basic: Uint8Array | Deno.PointerValue | null;
}

export const sizeofBG_AUTH_CREDENTIALS_UNION = 8;

export function allocBG_AUTH_CREDENTIALS_UNION(data?: Partial<BG_AUTH_CREDENTIALS_UNION>): Uint8Array {
  const buf = new Uint8Array(sizeofBG_AUTH_CREDENTIALS_UNION);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.Basic !== undefined) view.setBigUint64(0, data.Basic === null ? 0n : util.toBigInt(util.toPointer(data.Basic)), true);
  return buf;
}

export class BG_AUTH_CREDENTIALS_UNIONView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get Basic(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: pointer
  set Basic(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(0, util.toBigInt(util.toPointer(value)), true);
  }
}

/**
 * Windows.Win32.Networking.BackgroundIntelligentTransferService.BG_AUTH_CREDENTIALS (size: 16)
 */
export interface BG_AUTH_CREDENTIALS {
  /** Windows.Win32.Networking.BackgroundIntelligentTransferService.BG_AUTH_TARGET */
  Target: BG_AUTH_TARGET;
  /** Windows.Win32.Networking.BackgroundIntelligentTransferService.BG_AUTH_SCHEME */
  Scheme: BG_AUTH_SCHEME;
  /** Windows.Win32.Networking.BackgroundIntelligentTransferService.BG_AUTH_CREDENTIALS_UNION */
  Credentials: Uint8Array | Deno.PointerValue | null;
}

export const sizeofBG_AUTH_CREDENTIALS = 16;

export function allocBG_AUTH_CREDENTIALS(data?: Partial<BG_AUTH_CREDENTIALS>): Uint8Array {
  const buf = new Uint8Array(sizeofBG_AUTH_CREDENTIALS);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.Target !== undefined) view.setInt32(0, Number(data.Target), true);
  // 0x04: i32
  if (data?.Scheme !== undefined) view.setInt32(4, Number(data.Scheme), true);
  // 0x08: pointer
  if (data?.Credentials !== undefined) view.setBigUint64(8, data.Credentials === null ? 0n : util.toBigInt(util.toPointer(data.Credentials)), true);
  return buf;
}

export class BG_AUTH_CREDENTIALSView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: i32
  get Target(): number {
    return this.view.getInt32(0, true);
  }

  // 0x04: i32
  get Scheme(): number {
    return this.view.getInt32(4, true);
  }

  // 0x08: pointer
  get Credentials(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: i32
  set Target(value: number) {
    this.view.setInt32(0, value, true);
  }

  // 0x04: i32
  set Scheme(value: number) {
    this.view.setInt32(4, value, true);
  }

  // 0x08: pointer
  set Credentials(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, util.toBigInt(util.toPointer(value)), true);
  }
}

/**
 * Windows.Win32.Networking.BackgroundIntelligentTransferService.BG_FILE_RANGE (size: 16)
 */
export interface BG_FILE_RANGE {
  /** u64 */
  InitialOffset: number | bigint;
  /** u64 */
  Length: number | bigint;
}

export const sizeofBG_FILE_RANGE = 16;

export function allocBG_FILE_RANGE(data?: Partial<BG_FILE_RANGE>): Uint8Array {
  const buf = new Uint8Array(sizeofBG_FILE_RANGE);
  const view = new DataView(buf.buffer);
  // 0x00: u64
  if (data?.InitialOffset !== undefined) view.setBigUint64(0, util.toBigInt(data.InitialOffset), true);
  // 0x08: u64
  if (data?.Length !== undefined) view.setBigUint64(8, util.toBigInt(data.Length), true);
  return buf;
}

export class BG_FILE_RANGEView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u64
  get InitialOffset(): number | bigint {
    return this.view.getBigUint64(0, true);
  }

  // 0x08: u64
  get Length(): number | bigint {
    return this.view.getBigUint64(8, true);
  }

  // 0x00: u64
  set InitialOffset(value: number | bigint) {
    this.view.setBigUint64(0, util.toBigInt(value), true);
  }

  // 0x08: u64
  set Length(value: number | bigint) {
    this.view.setBigUint64(8, util.toBigInt(value), true);
  }
}

/**
 * Windows.Win32.Networking.BackgroundIntelligentTransferService.BITS_JOB_PROPERTY_VALUE (size: 40)
 */
export interface BITS_JOB_PROPERTY_VALUE {
  /** u32 */
  Dword: number;
  /** System.Guid */
  ClsID: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Foundation.BOOL */
  Enable: boolean;
  /** u64 */
  Uint64: number | bigint;
  /** Windows.Win32.Networking.BackgroundIntelligentTransferService.BG_AUTH_TARGET */
  Target: BG_AUTH_TARGET;
}

export const sizeofBITS_JOB_PROPERTY_VALUE = 40;

export function allocBITS_JOB_PROPERTY_VALUE(data?: Partial<BITS_JOB_PROPERTY_VALUE>): Uint8Array {
  const buf = new Uint8Array(sizeofBITS_JOB_PROPERTY_VALUE);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.Dword !== undefined) view.setUint32(0, Number(data.Dword), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.ClsID !== undefined) view.setBigUint64(8, data.ClsID === null ? 0n : util.toBigInt(util.toPointer(data.ClsID)), true);
  // 0x10: i32
  if (data?.Enable !== undefined) view.setInt32(16, Number(data.Enable), true);
  // 0x14: pad4
  // 0x18: u64
  if (data?.Uint64 !== undefined) view.setBigUint64(24, util.toBigInt(data.Uint64), true);
  // 0x20: i32
  if (data?.Target !== undefined) view.setInt32(32, Number(data.Target), true);
  // 0x24: pad4
  return buf;
}

export class BITS_JOB_PROPERTY_VALUEView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get Dword(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  get ClsID(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: i32
  get Enable(): number {
    return this.view.getInt32(16, true);
  }

  // 0x14: pad4

  // 0x18: u64
  get Uint64(): number | bigint {
    return this.view.getBigUint64(24, true);
  }

  // 0x20: i32
  get Target(): number {
    return this.view.getInt32(32, true);
  }

  // 0x24: pad4

  // 0x00: u32
  set Dword(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  set ClsID(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x10: i32
  set Enable(value: number) {
    this.view.setInt32(16, value, true);
  }

  // 0x14: pad4

  // 0x18: u64
  set Uint64(value: number | bigint) {
    this.view.setBigUint64(24, util.toBigInt(value), true);
  }

  // 0x20: i32
  set Target(value: number) {
    this.view.setInt32(32, value, true);
  }

  // 0x24: pad4
}

/**
 * Windows.Win32.Networking.BackgroundIntelligentTransferService.BITS_FILE_PROPERTY_VALUE (size: 8)
 */
export interface BITS_FILE_PROPERTY_VALUE {
  /** Windows.Win32.Foundation.PWSTR */
  String: string | null | Uint8Array | Uint16Array;
}

export const sizeofBITS_FILE_PROPERTY_VALUE = 8;

export function allocBITS_FILE_PROPERTY_VALUE(data?: Partial<BITS_FILE_PROPERTY_VALUE>): Uint8Array {
  const buf = new Uint8Array(sizeofBITS_FILE_PROPERTY_VALUE);
  const view = new DataView(buf.buffer);
  // 0x00: buffer
  if (data?.String !== undefined) {
    (buf as any)._f0 = util.pwstrToFfi(data.String);
    view.setBigUint64(0, (buf as any)._f0 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f0)), true);
  }
  return buf;
}

export class BITS_FILE_PROPERTY_VALUEView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: buffer
  get String(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: buffer
  set String(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f0 = value;
    this.view.setBigUint64(0, util.toBigInt(util.toPointer((this.buf as any)._f0)), true);
  }
}

export type BSTR = Deno.PointerValue | Uint8Array | null;

/**
 * Windows.Win32.Networking.BackgroundIntelligentTransferService.FILESETINFO (size: 24)
 */
export interface FILESETINFO {
  /** Windows.Win32.Foundation.BSTR */
  bstrRemoteFile: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Foundation.BSTR */
  bstrLocalFile: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  dwSizeHint: number;
}

export const sizeofFILESETINFO = 24;

export function allocFILESETINFO(data?: Partial<FILESETINFO>): Uint8Array {
  const buf = new Uint8Array(sizeofFILESETINFO);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.bstrRemoteFile !== undefined) view.setBigUint64(0, data.bstrRemoteFile === null ? 0n : util.toBigInt(util.toPointer(data.bstrRemoteFile)), true);
  // 0x08: pointer
  if (data?.bstrLocalFile !== undefined) view.setBigUint64(8, data.bstrLocalFile === null ? 0n : util.toBigInt(util.toPointer(data.bstrLocalFile)), true);
  // 0x10: u32
  if (data?.dwSizeHint !== undefined) view.setUint32(16, Number(data.dwSizeHint), true);
  // 0x14: pad4
  return buf;
}

export class FILESETINFOView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get bstrRemoteFile(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x08: pointer
  get bstrLocalFile(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: u32
  get dwSizeHint(): number {
    return this.view.getUint32(16, true);
  }

  // 0x14: pad4

  // 0x00: pointer
  set bstrRemoteFile(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(0, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x08: pointer
  set bstrLocalFile(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x10: u32
  set dwSizeHint(value: number) {
    this.view.setUint32(16, value, true);
  }

  // 0x14: pad4
}

// Native Libraries

// Symbols

