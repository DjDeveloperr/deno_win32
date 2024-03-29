/// Auto-generated by Deno Win32: Windows.Win32.Storage.OfflineFiles.Apis

import * as util from "../../util.ts";

// Enums
export type OFFLINEFILES_ITEM_TYPE = number;
export type OFFLINEFILES_ITEM_COPY = number;
export type OFFLINEFILES_CONNECT_STATE = number;
export type OFFLINEFILES_OFFLINE_REASON = number;
export type OFFLINEFILES_CACHING_MODE = number;
export type OFFLINEFILES_OP_RESPONSE = number;
export type OFFLINEFILES_EVENTS = number;
export type OFFLINEFILES_PATHFILTER_MATCH = number;
export type OFFLINEFILES_SYNC_CONFLICT_RESOLVE = number;
export type OFFLINEFILES_ITEM_TIME = number;
export type OFFLINEFILES_COMPARE = number;
export type OFFLINEFILES_SETTING_VALUE_TYPE = number;
export type OFFLINEFILES_SYNC_OPERATION = number;
export type OFFLINEFILES_SYNC_STATE = number;

// Constants
export const OFFLINEFILES_SYNC_STATE_LOCAL_KNOWN = 1;
export const OFFLINEFILES_SYNC_STATE_REMOTE_KNOWN = 2;
export const OFFLINEFILES_CHANGES_NONE = 0;
export const OFFLINEFILES_CHANGES_LOCAL_SIZE = 1;
export const OFFLINEFILES_CHANGES_LOCAL_ATTRIBUTES = 2;
export const OFFLINEFILES_CHANGES_LOCAL_TIME = 4;
export const OFFLINEFILES_CHANGES_REMOTE_SIZE = 8;
export const OFFLINEFILES_CHANGES_REMOTE_ATTRIBUTES = 16;
export const OFFLINEFILES_CHANGES_REMOTE_TIME = 32;
export const OFFLINEFILES_ITEM_FILTER_FLAG_MODIFIED_DATA = 1;
export const OFFLINEFILES_ITEM_FILTER_FLAG_MODIFIED_ATTRIBUTES = 2;
export const OFFLINEFILES_ITEM_FILTER_FLAG_MODIFIED = 4;
export const OFFLINEFILES_ITEM_FILTER_FLAG_CREATED = 8;
export const OFFLINEFILES_ITEM_FILTER_FLAG_DELETED = 16;
export const OFFLINEFILES_ITEM_FILTER_FLAG_DIRTY = 32;
export const OFFLINEFILES_ITEM_FILTER_FLAG_SPARSE = 64;
export const OFFLINEFILES_ITEM_FILTER_FLAG_FILE = 128;
export const OFFLINEFILES_ITEM_FILTER_FLAG_DIRECTORY = 256;
export const OFFLINEFILES_ITEM_FILTER_FLAG_PINNED_USER = 512;
export const OFFLINEFILES_ITEM_FILTER_FLAG_PINNED_OTHERS = 1024;
export const OFFLINEFILES_ITEM_FILTER_FLAG_PINNED_COMPUTER = 2048;
export const OFFLINEFILES_ITEM_FILTER_FLAG_PINNED = 4096;
export const OFFLINEFILES_ITEM_FILTER_FLAG_GHOST = 8192;
export const OFFLINEFILES_ITEM_FILTER_FLAG_SUSPENDED = 16384;
export const OFFLINEFILES_ITEM_FILTER_FLAG_OFFLINE = 32768;
export const OFFLINEFILES_ITEM_FILTER_FLAG_ONLINE = 65536;
export const OFFLINEFILES_ITEM_FILTER_FLAG_USER_WRITE = 131072;
export const OFFLINEFILES_ITEM_FILTER_FLAG_USER_READ = 262144;
export const OFFLINEFILES_ITEM_FILTER_FLAG_USER_ANYACCESS = 524288;
export const OFFLINEFILES_ITEM_FILTER_FLAG_OTHER_WRITE = 1048576;
export const OFFLINEFILES_ITEM_FILTER_FLAG_OTHER_READ = 2097152;
export const OFFLINEFILES_ITEM_FILTER_FLAG_OTHER_ANYACCESS = 4194304;
export const OFFLINEFILES_ITEM_FILTER_FLAG_GUEST_WRITE = 8388608;
export const OFFLINEFILES_ITEM_FILTER_FLAG_GUEST_READ = 16777216;
export const OFFLINEFILES_ITEM_FILTER_FLAG_GUEST_ANYACCESS = 33554432;
export const OFFLINEFILES_ITEM_QUERY_REMOTEINFO = 1;
export const OFFLINEFILES_ITEM_QUERY_CONNECTIONSTATE = 2;
export const OFFLINEFILES_ITEM_QUERY_LOCALDIRTYBYTECOUNT = 4;
export const OFFLINEFILES_ITEM_QUERY_REMOTEDIRTYBYTECOUNT = 8;
export const OFFLINEFILES_ITEM_QUERY_INCLUDETRANSPARENTCACHE = 16;
export const OFFLINEFILES_ITEM_QUERY_ATTEMPT_TRANSITIONONLINE = 32;
export const OFFLINEFILES_ITEM_QUERY_ADMIN = 2147483648;
export const OFFLINEFILES_ENUM_FLAT = 1;
export const OFFLINEFILES_ENUM_FLAT_FILESONLY = 2;
export const OFFLINEFILES_SETTING_SCOPE_USER = 1;
export const OFFLINEFILES_SETTING_SCOPE_COMPUTER = 2;
export const OFFLINEFILES_SETTING_PinLinkTargets = `LinkTargetCaching`;
export const OFFLINEFILES_PINLINKTARGETS_NEVER = 0;
export const OFFLINEFILES_PINLINKTARGETS_EXPLICIT = 1;
export const OFFLINEFILES_PINLINKTARGETS_ALWAYS = 2;
export const OFFLINEFILES_SYNC_CONTROL_FLAG_FILLSPARSE = 1;
export const OFFLINEFILES_SYNC_CONTROL_FLAG_SYNCIN = 2;
export const OFFLINEFILES_SYNC_CONTROL_FLAG_SYNCOUT = 4;
export const OFFLINEFILES_SYNC_CONTROL_FLAG_PINNEWFILES = 8;
export const OFFLINEFILES_SYNC_CONTROL_FLAG_PINLINKTARGETS = 16;
export const OFFLINEFILES_SYNC_CONTROL_FLAG_PINFORUSER = 32;
export const OFFLINEFILES_SYNC_CONTROL_FLAG_PINFORUSER_POLICY = 64;
export const OFFLINEFILES_SYNC_CONTROL_FLAG_PINFORALL = 128;
export const OFFLINEFILES_SYNC_CONTROL_FLAG_PINFORREDIR = 256;
export const OFFLINEFILES_SYNC_CONTROL_FLAG_LOWPRIORITY = 512;
export const OFFLINEFILES_SYNC_CONTROL_FLAG_ASYNCPROGRESS = 1024;
export const OFFLINEFILES_SYNC_CONTROL_FLAG_INTERACTIVE = 2048;
export const OFFLINEFILES_SYNC_CONTROL_FLAG_CONSOLE = 4096;
export const OFFLINEFILES_SYNC_CONTROL_FLAG_SKIPSUSPENDEDDIRS = 8192;
export const OFFLINEFILES_SYNC_CONTROL_FLAG_BACKGROUND = 65536;
export const OFFLINEFILES_SYNC_CONTROL_FLAG_NONEWFILESOUT = 131072;
export const OFFLINEFILES_SYNC_CONTROL_CR_MASK = 4026531840;
export const OFFLINEFILES_SYNC_CONTROL_CR_DEFAULT = 0;
export const OFFLINEFILES_SYNC_CONTROL_CR_KEEPLOCAL = 268435456;
export const OFFLINEFILES_SYNC_CONTROL_CR_KEEPREMOTE = 536870912;
export const OFFLINEFILES_SYNC_CONTROL_CR_KEEPLATEST = 805306368;
export const OFFLINEFILES_PIN_CONTROL_FLAG_FORUSER = 32;
export const OFFLINEFILES_PIN_CONTROL_FLAG_FORUSER_POLICY = 64;
export const OFFLINEFILES_PIN_CONTROL_FLAG_FORALL = 128;
export const OFFLINEFILES_PIN_CONTROL_FLAG_FORREDIR = 256;
export const OFFLINEFILES_PIN_CONTROL_FLAG_FILL = 1;
export const OFFLINEFILES_PIN_CONTROL_FLAG_LOWPRIORITY = 512;
export const OFFLINEFILES_PIN_CONTROL_FLAG_ASYNCPROGRESS = 1024;
export const OFFLINEFILES_PIN_CONTROL_FLAG_INTERACTIVE = 2048;
export const OFFLINEFILES_PIN_CONTROL_FLAG_CONSOLE = 4096;
export const OFFLINEFILES_PIN_CONTROL_FLAG_PINLINKTARGETS = 16;
export const OFFLINEFILES_PIN_CONTROL_FLAG_BACKGROUND = 65536;
export const OFFLINEFILES_ENCRYPTION_CONTROL_FLAG_LOWPRIORITY = 512;
export const OFFLINEFILES_ENCRYPTION_CONTROL_FLAG_ASYNCPROGRESS = 1024;
export const OFFLINEFILES_ENCRYPTION_CONTROL_FLAG_INTERACTIVE = 2048;
export const OFFLINEFILES_ENCRYPTION_CONTROL_FLAG_CONSOLE = 4096;
export const OFFLINEFILES_ENCRYPTION_CONTROL_FLAG_BACKGROUND = 65536;
export const OFFLINEFILES_DELETE_FLAG_NOAUTOCACHED = 1;
export const OFFLINEFILES_DELETE_FLAG_NOPINNED = 2;
export const OFFLINEFILES_DELETE_FLAG_DELMODIFIED = 4;
export const OFFLINEFILES_DELETE_FLAG_ADMIN = 2147483648;
export const OFFLINEFILES_TRANSITION_FLAG_INTERACTIVE = 1;
export const OFFLINEFILES_TRANSITION_FLAG_CONSOLE = 2;
export const OFFLINEFILES_SYNC_ITEM_CHANGE_NONE = 0;
export const OFFLINEFILES_SYNC_ITEM_CHANGE_CHANGETIME = 1;
export const OFFLINEFILES_SYNC_ITEM_CHANGE_WRITETIME = 2;
export const OFFLINEFILES_SYNC_ITEM_CHANGE_FILESIZE = 4;
export const OFFLINEFILES_SYNC_ITEM_CHANGE_ATTRIBUTES = 8;
export const OFFLINEFILES_ITEM_TYPE_FILE = 0;
export const OFFLINEFILES_ITEM_TYPE_DIRECTORY = 1;
export const OFFLINEFILES_ITEM_TYPE_SHARE = 2;
export const OFFLINEFILES_ITEM_TYPE_SERVER = 3;
export const OFFLINEFILES_ITEM_COPY_LOCAL = 0;
export const OFFLINEFILES_ITEM_COPY_REMOTE = 1;
export const OFFLINEFILES_ITEM_COPY_ORIGINAL = 2;
export const OFFLINEFILES_CONNECT_STATE_UNKNOWN = 0;
export const OFFLINEFILES_CONNECT_STATE_OFFLINE = 1;
export const OFFLINEFILES_CONNECT_STATE_ONLINE = 2;
export const OFFLINEFILES_CONNECT_STATE_TRANSPARENTLY_CACHED = 3;
export const OFFLINEFILES_CONNECT_STATE_PARTLY_TRANSPARENTLY_CACHED = 4;
export const OFFLINEFILES_OFFLINE_REASON_UNKNOWN = 0;
export const OFFLINEFILES_OFFLINE_REASON_NOT_APPLICABLE = 1;
export const OFFLINEFILES_OFFLINE_REASON_CONNECTION_FORCED = 2;
export const OFFLINEFILES_OFFLINE_REASON_CONNECTION_SLOW = 3;
export const OFFLINEFILES_OFFLINE_REASON_CONNECTION_ERROR = 4;
export const OFFLINEFILES_OFFLINE_REASON_ITEM_VERSION_CONFLICT = 5;
export const OFFLINEFILES_OFFLINE_REASON_ITEM_SUSPENDED = 6;
export const OFFLINEFILES_CACHING_MODE_NONE = 0;
export const OFFLINEFILES_CACHING_MODE_NOCACHING = 1;
export const OFFLINEFILES_CACHING_MODE_MANUAL = 2;
export const OFFLINEFILES_CACHING_MODE_AUTO_DOC = 3;
export const OFFLINEFILES_CACHING_MODE_AUTO_PROGANDDOC = 4;
export const OFFLINEFILES_OP_CONTINUE = 0;
export const OFFLINEFILES_OP_RETRY = 1;
export const OFFLINEFILES_OP_ABORT = 2;
export const OFFLINEFILES_EVENT_CACHEMOVED = 0;
export const OFFLINEFILES_EVENT_CACHEISFULL = 1;
export const OFFLINEFILES_EVENT_CACHEISCORRUPTED = 2;
export const OFFLINEFILES_EVENT_ENABLED = 3;
export const OFFLINEFILES_EVENT_ENCRYPTIONCHANGED = 4;
export const OFFLINEFILES_EVENT_SYNCBEGIN = 5;
export const OFFLINEFILES_EVENT_SYNCFILERESULT = 6;
export const OFFLINEFILES_EVENT_SYNCCONFLICTRECADDED = 7;
export const OFFLINEFILES_EVENT_SYNCCONFLICTRECUPDATED = 8;
export const OFFLINEFILES_EVENT_SYNCCONFLICTRECREMOVED = 9;
export const OFFLINEFILES_EVENT_SYNCEND = 10;
export const OFFLINEFILES_EVENT_BACKGROUNDSYNCBEGIN = 11;
export const OFFLINEFILES_EVENT_BACKGROUNDSYNCEND = 12;
export const OFFLINEFILES_EVENT_NETTRANSPORTARRIVED = 13;
export const OFFLINEFILES_EVENT_NONETTRANSPORTS = 14;
export const OFFLINEFILES_EVENT_ITEMDISCONNECTED = 15;
export const OFFLINEFILES_EVENT_ITEMRECONNECTED = 16;
export const OFFLINEFILES_EVENT_ITEMAVAILABLEOFFLINE = 17;
export const OFFLINEFILES_EVENT_ITEMNOTAVAILABLEOFFLINE = 18;
export const OFFLINEFILES_EVENT_ITEMPINNED = 19;
export const OFFLINEFILES_EVENT_ITEMNOTPINNED = 20;
export const OFFLINEFILES_EVENT_ITEMMODIFIED = 21;
export const OFFLINEFILES_EVENT_ITEMADDEDTOCACHE = 22;
export const OFFLINEFILES_EVENT_ITEMDELETEDFROMCACHE = 23;
export const OFFLINEFILES_EVENT_ITEMRENAMED = 24;
export const OFFLINEFILES_EVENT_DATALOST = 25;
export const OFFLINEFILES_EVENT_PING = 26;
export const OFFLINEFILES_EVENT_ITEMRECONNECTBEGIN = 27;
export const OFFLINEFILES_EVENT_ITEMRECONNECTEND = 28;
export const OFFLINEFILES_EVENT_CACHEEVICTBEGIN = 29;
export const OFFLINEFILES_EVENT_CACHEEVICTEND = 30;
export const OFFLINEFILES_EVENT_POLICYCHANGEDETECTED = 31;
export const OFFLINEFILES_EVENT_PREFERENCECHANGEDETECTED = 32;
export const OFFLINEFILES_EVENT_SETTINGSCHANGESAPPLIED = 33;
export const OFFLINEFILES_EVENT_TRANSPARENTCACHEITEMNOTIFY = 34;
export const OFFLINEFILES_EVENT_PREFETCHFILEBEGIN = 35;
export const OFFLINEFILES_EVENT_PREFETCHFILEEND = 36;
export const OFFLINEFILES_EVENT_PREFETCHCLOSEHANDLEBEGIN = 37;
export const OFFLINEFILES_EVENT_PREFETCHCLOSEHANDLEEND = 38;
export const OFFLINEFILES_NUM_EVENTS = 39;
export const OFFLINEFILES_PATHFILTER_SELF = 0;
export const OFFLINEFILES_PATHFILTER_CHILD = 1;
export const OFFLINEFILES_PATHFILTER_DESCENDENT = 2;
export const OFFLINEFILES_PATHFILTER_SELFORCHILD = 3;
export const OFFLINEFILES_PATHFILTER_SELFORDESCENDENT = 4;
export const OFFLINEFILES_SYNC_CONFLICT_RESOLVE_NONE = 0;
export const OFFLINEFILES_SYNC_CONFLICT_RESOLVE_KEEPLOCAL = 1;
export const OFFLINEFILES_SYNC_CONFLICT_RESOLVE_KEEPREMOTE = 2;
export const OFFLINEFILES_SYNC_CONFLICT_RESOLVE_KEEPALLCHANGES = 3;
export const OFFLINEFILES_SYNC_CONFLICT_RESOLVE_KEEPLATEST = 4;
export const OFFLINEFILES_SYNC_CONFLICT_RESOLVE_LOG = 5;
export const OFFLINEFILES_SYNC_CONFLICT_RESOLVE_SKIP = 6;
export const OFFLINEFILES_SYNC_CONFLICT_ABORT = 7;
export const OFFLINEFILES_SYNC_CONFLICT_RESOLVE_NUMCODES = 8;
export const OFFLINEFILES_ITEM_TIME_CREATION = 0;
export const OFFLINEFILES_ITEM_TIME_LASTACCESS = 1;
export const OFFLINEFILES_ITEM_TIME_LASTWRITE = 2;
export const OFFLINEFILES_COMPARE_EQ = 0;
export const OFFLINEFILES_COMPARE_NEQ = 1;
export const OFFLINEFILES_COMPARE_LT = 2;
export const OFFLINEFILES_COMPARE_GT = 3;
export const OFFLINEFILES_COMPARE_LTE = 4;
export const OFFLINEFILES_COMPARE_GTE = 5;
export const OFFLINEFILES_SETTING_VALUE_UI4 = 0;
export const OFFLINEFILES_SETTING_VALUE_BSTR = 1;
export const OFFLINEFILES_SETTING_VALUE_BSTR_DBLNULTERM = 2;
export const OFFLINEFILES_SETTING_VALUE_2DIM_ARRAY_BSTR_UI4 = 3;
export const OFFLINEFILES_SETTING_VALUE_2DIM_ARRAY_BSTR_BSTR = 4;
export const OFFLINEFILES_SYNC_OPERATION_CREATE_COPY_ON_SERVER = 0;
export const OFFLINEFILES_SYNC_OPERATION_CREATE_COPY_ON_CLIENT = 1;
export const OFFLINEFILES_SYNC_OPERATION_SYNC_TO_SERVER = 2;
export const OFFLINEFILES_SYNC_OPERATION_SYNC_TO_CLIENT = 3;
export const OFFLINEFILES_SYNC_OPERATION_DELETE_SERVER_COPY = 4;
export const OFFLINEFILES_SYNC_OPERATION_DELETE_CLIENT_COPY = 5;
export const OFFLINEFILES_SYNC_OPERATION_PIN = 6;
export const OFFLINEFILES_SYNC_OPERATION_PREPARE = 7;
export const OFFLINEFILES_SYNC_STATE_Stable = 0;
export const OFFLINEFILES_SYNC_STATE_FileOnClient_DirOnServer = 1;
export const OFFLINEFILES_SYNC_STATE_FileOnClient_NoServerCopy = 2;
export const OFFLINEFILES_SYNC_STATE_DirOnClient_FileOnServer = 3;
export const OFFLINEFILES_SYNC_STATE_DirOnClient_FileChangedOnServer = 4;
export const OFFLINEFILES_SYNC_STATE_DirOnClient_NoServerCopy = 5;
export const OFFLINEFILES_SYNC_STATE_FileCreatedOnClient_NoServerCopy = 6;
export const OFFLINEFILES_SYNC_STATE_FileCreatedOnClient_FileChangedOnServer = 7;
export const OFFLINEFILES_SYNC_STATE_FileCreatedOnClient_DirChangedOnServer = 8;
export const OFFLINEFILES_SYNC_STATE_FileCreatedOnClient_FileOnServer = 9;
export const OFFLINEFILES_SYNC_STATE_FileCreatedOnClient_DirOnServer = 10;
export const OFFLINEFILES_SYNC_STATE_FileCreatedOnClient_DeletedOnServer = 11;
export const OFFLINEFILES_SYNC_STATE_FileChangedOnClient_ChangedOnServer = 12;
export const OFFLINEFILES_SYNC_STATE_FileChangedOnClient_DirOnServer = 13;
export const OFFLINEFILES_SYNC_STATE_FileChangedOnClient_DirChangedOnServer = 14;
export const OFFLINEFILES_SYNC_STATE_FileChangedOnClient_DeletedOnServer = 15;
export const OFFLINEFILES_SYNC_STATE_FileSparseOnClient_ChangedOnServer = 16;
export const OFFLINEFILES_SYNC_STATE_FileSparseOnClient_DeletedOnServer = 17;
export const OFFLINEFILES_SYNC_STATE_FileSparseOnClient_DirOnServer = 18;
export const OFFLINEFILES_SYNC_STATE_FileSparseOnClient_DirChangedOnServer = 19;
export const OFFLINEFILES_SYNC_STATE_DirCreatedOnClient_NoServerCopy = 20;
export const OFFLINEFILES_SYNC_STATE_DirCreatedOnClient_DirOnServer = 21;
export const OFFLINEFILES_SYNC_STATE_DirCreatedOnClient_FileOnServer = 22;
export const OFFLINEFILES_SYNC_STATE_DirCreatedOnClient_FileChangedOnServer = 23;
export const OFFLINEFILES_SYNC_STATE_DirCreatedOnClient_DirChangedOnServer = 24;
export const OFFLINEFILES_SYNC_STATE_DirCreatedOnClient_DeletedOnServer = 25;
export const OFFLINEFILES_SYNC_STATE_DirChangedOnClient_FileOnServer = 26;
export const OFFLINEFILES_SYNC_STATE_DirChangedOnClient_FileChangedOnServer = 27;
export const OFFLINEFILES_SYNC_STATE_DirChangedOnClient_ChangedOnServer = 28;
export const OFFLINEFILES_SYNC_STATE_DirChangedOnClient_DeletedOnServer = 29;
export const OFFLINEFILES_SYNC_STATE_NoClientCopy_FileOnServer = 30;
export const OFFLINEFILES_SYNC_STATE_NoClientCopy_DirOnServer = 31;
export const OFFLINEFILES_SYNC_STATE_NoClientCopy_FileChangedOnServer = 32;
export const OFFLINEFILES_SYNC_STATE_NoClientCopy_DirChangedOnServer = 33;
export const OFFLINEFILES_SYNC_STATE_DeletedOnClient_FileOnServer = 34;
export const OFFLINEFILES_SYNC_STATE_DeletedOnClient_DirOnServer = 35;
export const OFFLINEFILES_SYNC_STATE_DeletedOnClient_FileChangedOnServer = 36;
export const OFFLINEFILES_SYNC_STATE_DeletedOnClient_DirChangedOnServer = 37;
export const OFFLINEFILES_SYNC_STATE_FileSparseOnClient = 38;
export const OFFLINEFILES_SYNC_STATE_FileChangedOnClient = 39;
export const OFFLINEFILES_SYNC_STATE_FileRenamedOnClient = 40;
export const OFFLINEFILES_SYNC_STATE_DirSparseOnClient = 41;
export const OFFLINEFILES_SYNC_STATE_DirChangedOnClient = 42;
export const OFFLINEFILES_SYNC_STATE_DirRenamedOnClient = 43;
export const OFFLINEFILES_SYNC_STATE_FileChangedOnServer = 44;
export const OFFLINEFILES_SYNC_STATE_FileRenamedOnServer = 45;
export const OFFLINEFILES_SYNC_STATE_FileDeletedOnServer = 46;
export const OFFLINEFILES_SYNC_STATE_DirChangedOnServer = 47;
export const OFFLINEFILES_SYNC_STATE_DirRenamedOnServer = 48;
export const OFFLINEFILES_SYNC_STATE_DirDeletedOnServer = 49;
export const OFFLINEFILES_SYNC_STATE_FileReplacedAndDeletedOnClient_FileOnServer = 50;
export const OFFLINEFILES_SYNC_STATE_FileReplacedAndDeletedOnClient_FileChangedOnServer = 51;
export const OFFLINEFILES_SYNC_STATE_FileReplacedAndDeletedOnClient_DirOnServer = 52;
export const OFFLINEFILES_SYNC_STATE_FileReplacedAndDeletedOnClient_DirChangedOnServer = 53;
export const OFFLINEFILES_SYNC_STATE_NUMSTATES = 54;

// Structs

export type BOOL = number;

// Native Libraries

try {
  var libCSCAPI_dll = Deno.dlopen("CSCAPI.dll", {
    OfflineFilesEnable: {
      parameters: ["i32", "pointer"],
      result: "u32",
      optional: true,
    },
    OfflineFilesStart: {
      parameters: [],
      result: "u32",
      optional: true,
    },
    OfflineFilesQueryStatus: {
      parameters: ["pointer", "pointer"],
      result: "u32",
      optional: true,
    },
    OfflineFilesQueryStatusEx: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "u32",
      optional: true,
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function OfflineFilesEnable(
  bEnable: boolean /* Windows.Win32.Foundation.BOOL */,
  pbRebootRequired: Deno.PointerValue | Uint8Array /* ptr */,
): number /* u32 */ {
  return libCSCAPI_dll.OfflineFilesEnable!(util.boolToFfi(bEnable), util.toPointer(pbRebootRequired));
}

export function OfflineFilesStart(): number /* u32 */ {
  return libCSCAPI_dll.OfflineFilesStart!();
}

export function OfflineFilesQueryStatus(
  pbActive: Deno.PointerValue | Uint8Array /* ptr */,
  pbEnabled: Deno.PointerValue | Uint8Array /* ptr */,
): number /* u32 */ {
  return libCSCAPI_dll.OfflineFilesQueryStatus!(util.toPointer(pbActive), util.toPointer(pbEnabled));
}

export function OfflineFilesQueryStatusEx(
  pbActive: Deno.PointerValue | Uint8Array /* ptr */,
  pbEnabled: Deno.PointerValue | Uint8Array /* ptr */,
  pbAvailable: Deno.PointerValue | Uint8Array /* ptr */,
): number /* u32 */ {
  return libCSCAPI_dll.OfflineFilesQueryStatusEx!(util.toPointer(pbActive), util.toPointer(pbEnabled), util.toPointer(pbAvailable));
}

