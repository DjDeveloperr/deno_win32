/// Auto-generated by Deno Win32: Windows.Win32.Storage.Vss.Apis

import * as util from "../../util.ts";

// Enums
export type VSS_OBJECT_TYPE = number;
export type VSS_SNAPSHOT_STATE = number;
export type VSS_VOLUME_SNAPSHOT_ATTRIBUTES = number;
export type VSS_SNAPSHOT_CONTEXT = number;
export type VSS_PROVIDER_CAPABILITIES = number;
export type VSS_HARDWARE_OPTIONS = number;
export type VSS_RECOVERY_OPTIONS = number;
export type VSS_WRITER_STATE = number;
export type VSS_BACKUP_TYPE = number;
export type VSS_RESTORE_TYPE = number;
export type VSS_ROLLFORWARD_TYPE = number;
export type VSS_PROVIDER_TYPE = number;
export type VSS_APPLICATION_LEVEL = number;
export type VSS_SNAPSHOT_COMPATIBILITY = number;
export type VSS_SNAPSHOT_PROPERTY_ID = number;
export type VSS_FILE_SPEC_BACKUP_TYPE = number;
export type VSS_BACKUP_SCHEMA = number;
export type VSS_USAGE_TYPE = number;
export type VSS_SOURCE_TYPE = number;
export type VSS_RESTOREMETHOD_ENUM = number;
export type VSS_WRITERRESTORE_ENUM = number;
export type VSS_COMPONENT_TYPE = number;
export type VSS_ALTERNATE_WRITER_STATE = number;
export type VSS_SUBSCRIBE_MASK = number;
export type VSS_RESTORE_TARGET = number;
export type VSS_FILE_RESTORE_STATUS = number;
export type VSS_COMPONENT_FLAGS = number;
export type VSS_MGMT_OBJECT_TYPE = number;
export type VSS_PROTECTION_LEVEL = number;
export type VSS_PROTECTION_FAULT = number;

// Constants
export const VSS_ASSOC_NO_MAX_SPACE = `-1`;
export const VSS_ASSOC_REMOVE = 0;
export const VSS_E_BAD_STATE = 298084218687464193n;
export const VSS_E_UNEXPECTED = 298085318199091970n;
export const VSS_E_PROVIDER_ALREADY_REGISTERED = 298086417710719747n;
export const VSS_E_PROVIDER_NOT_REGISTERED = 298088616733975300n;
export const VSS_E_PROVIDER_VETO = 298089716245603078n;
export const VSS_E_PROVIDER_IN_USE = 298090815757230855n;
export const VSS_E_OBJECT_NOT_FOUND = 298091915268858632n;
export const VSS_S_ASYNC_PENDING = 298093012633002761n;
export const VSS_S_ASYNC_FINISHED = 298094112144630538n;
export const VSS_S_ASYNC_CANCELLED = 298095211656258315n;
export const VSS_E_VOLUME_NOT_SUPPORTED = 298097412826997516n;
export const VSS_E_VOLUME_NOT_SUPPORTED_BY_PROVIDER = 298096313315369742n;
export const VSS_E_OBJECT_ALREADY_EXISTS = 298098512338625293n;
export const VSS_E_UNEXPECTED_PROVIDER_ERROR = 298099611850253071n;
export const VSS_E_CORRUPT_XML_DOCUMENT = 298100711361880848n;
export const VSS_E_INVALID_XML_DOCUMENT = 298101810873508625n;
export const VSS_E_MAXIMUM_NUMBER_OF_VOLUMES_REACHED = 298102910385136402n;
export const VSS_E_FLUSH_WRITES_TIMEOUT = 298104009896764179n;
export const VSS_E_HOLD_WRITES_TIMEOUT = 298105109408391956n;
export const VSS_E_UNEXPECTED_WRITER_ERROR = 298106208920019733n;
export const VSS_E_SNAPSHOT_SET_IN_PROGRESS = 298107308431647510n;
export const VSS_E_MAXIMUM_NUMBER_OF_SNAPSHOTS_REACHED = 298108407943275287n;
export const VSS_E_WRITER_INFRASTRUCTURE = 298109507454903064n;
export const VSS_E_WRITER_NOT_RESPONDING = 298110606966530841n;
export const VSS_E_WRITER_ALREADY_SUBSCRIBED = 298111706478158618n;
export const VSS_E_UNSUPPORTED_CONTEXT = 298113905501414171n;
export const VSS_E_VOLUME_IN_USE = 298115005013041949n;
export const VSS_E_MAXIMUM_DIFFAREA_ASSOCIATIONS_REACHED = 298116104524669726n;
export const VSS_E_INSUFFICIENT_STORAGE = 298117204036297503n;
export const VSS_E_NO_SNAPSHOTS_IMPORTED = 298118303547925280n;
export const VSS_S_SOME_SNAPSHOTS_NOT_IMPORTED = 298118301400441633n;
export const VSS_E_SOME_SNAPSHOTS_NOT_IMPORTED = 298119403059553057n;
export const VSS_E_MAXIMUM_NUMBER_OF_REMOTE_MACHINES_REACHED = 298120502571180834n;
export const VSS_E_REMOTE_SERVER_UNAVAILABLE = 298121602082808611n;
export const VSS_E_REMOTE_SERVER_UNSUPPORTED = 298122701594436388n;
export const VSS_E_REVERT_IN_PROGRESS = 298123801106064165n;
export const VSS_E_REVERT_VOLUME_LOST = 298124900617691942n;
export const VSS_E_REBOOT_REQUIRED = 298126000129319719n;
export const VSS_E_TRANSACTION_FREEZE_TIMEOUT = 298127099640947496n;
export const VSS_E_TRANSACTION_THAW_TIMEOUT = 298131497687458601n;
export const VSS_E_VOLUME_NOT_LOCAL = 298132597199086381n;
export const VSS_E_CLUSTER_TIMEOUT = 298345902454874926n;
export const VSS_E_WRITERERROR_INCONSISTENTSNAPSHOT = 298347001966502896n;
export const VSS_E_WRITERERROR_OUTOFRESOURCES = 298348101478130673n;
export const VSS_E_WRITERERROR_TIMEOUT = 298349200989758450n;
export const VSS_E_WRITERERROR_RETRYABLE = 298350300501386227n;
export const VSS_E_WRITERERROR_NONRETRYABLE = 298351400013014004n;
export const VSS_E_WRITERERROR_RECOVERY_FAILED = 298352499524641781n;
export const VSS_E_BREAK_REVERT_ID_FAILED = 298353599036269558n;
export const VSS_E_LEGACY_PROVIDER = 298354698547897335n;
export const VSS_E_MISSING_DISK = 298355798059525112n;
export const VSS_E_MISSING_HIDDEN_VOLUME = 298356897571152889n;
export const VSS_E_MISSING_VOLUME = 298357997082780666n;
export const VSS_E_AUTORECOVERY_FAILED = 298359096594408443n;
export const VSS_E_DYNAMIC_DISK_ERROR = 298360196106036220n;
export const VSS_E_NONTRANSPORTABLE_BCD = 298361295617663997n;
export const VSS_E_CANNOT_REVERT_DISKID = 298362395129291774n;
export const VSS_E_RESYNC_IN_PROGRESS = 298128199152575487n;
export const VSS_E_CLUSTER_ERROR = 298364594152547328n;
export const VSS_E_UNSELECTED_VOLUME = 298129298664203050n;
export const VSS_E_SNAPSHOT_NOT_IN_SET = 298130398175830827n;
export const VSS_E_NESTED_VOLUME_LIMIT = 298133696710714156n;
export const VSS_E_NOT_SUPPORTED = 298141393292108591n;
export const VSS_E_WRITERERROR_PARTIAL_FAILURE = 1225260610128978742n;
export const VSS_E_ASRERROR_DISK_ASSIGNMENT_FAILED = 298365693664175105n;
export const VSS_E_ASRERROR_DISK_RECREATION_FAILED = 298366793175802882n;
export const VSS_E_ASRERROR_NO_ARCPATH = 298367892687430659n;
export const VSS_E_ASRERROR_MISSING_DYNDISK = 298368992199058436n;
export const VSS_E_ASRERROR_SHARED_CRIDISK = 298370091710686213n;
export const VSS_E_ASRERROR_DATADISK_RDISK0 = 298371191222313990n;
export const VSS_E_ASRERROR_RDISK0_TOOSMALL = 298372290733941767n;
export const VSS_E_ASRERROR_CRITICAL_DISKS_TOO_SMALL = 298373390245569544n;
export const VSS_E_WRITER_STATUS_NOT_AVAILABLE = 298374489757197321n;
export const VSS_E_ASRERROR_DYNAMIC_VHD_NOT_SUPPORTED = 298375589268825098n;
export const VSS_E_CRITICAL_VOLUME_ON_INVALID_DISK = 298383285850219537n;
export const VSS_E_ASRERROR_RDISK_FOR_SYSTEM_DISK_NOT_FOUND = 298384385361847314n;
export const VSS_E_ASRERROR_NO_PHYSICAL_DISK_AVAILABLE = 298385484873475091n;
export const VSS_E_ASRERROR_FIXED_PHYSICAL_DISK_AVAILABLE_AFTER_DISK_EXCLUSION = 298386584385102868n;
export const VSS_E_ASRERROR_CRITICAL_DISK_CANNOT_BE_EXCLUDED = 298387683896730645n;
export const VSS_E_ASRERROR_SYSTEM_PARTITION_HIDDEN = 298388783408358422n;
export const VSS_E_FSS_TIMEOUT = 298389882919986199n;
export const VSS_OBJECT_UNKNOWN = 0;
export const VSS_OBJECT_NONE = 1;
export const VSS_OBJECT_SNAPSHOT_SET = 2;
export const VSS_OBJECT_SNAPSHOT = 3;
export const VSS_OBJECT_PROVIDER = 4;
export const VSS_OBJECT_TYPE_COUNT = 5;
export const VSS_SS_UNKNOWN = 0;
export const VSS_SS_PREPARING = 1;
export const VSS_SS_PROCESSING_PREPARE = 2;
export const VSS_SS_PREPARED = 3;
export const VSS_SS_PROCESSING_PRECOMMIT = 4;
export const VSS_SS_PRECOMMITTED = 5;
export const VSS_SS_PROCESSING_COMMIT = 6;
export const VSS_SS_COMMITTED = 7;
export const VSS_SS_PROCESSING_POSTCOMMIT = 8;
export const VSS_SS_PROCESSING_PREFINALCOMMIT = 9;
export const VSS_SS_PREFINALCOMMITTED = 10;
export const VSS_SS_PROCESSING_POSTFINALCOMMIT = 11;
export const VSS_SS_CREATED = 12;
export const VSS_SS_ABORTED = 13;
export const VSS_SS_DELETED = 14;
export const VSS_SS_POSTCOMMITTED = 15;
export const VSS_SS_COUNT = 16;
export const VSS_VOLSNAP_ATTR_PERSISTENT = 1;
export const VSS_VOLSNAP_ATTR_NO_AUTORECOVERY = 2;
export const VSS_VOLSNAP_ATTR_CLIENT_ACCESSIBLE = 4;
export const VSS_VOLSNAP_ATTR_NO_AUTO_RELEASE = 8;
export const VSS_VOLSNAP_ATTR_NO_WRITERS = 16;
export const VSS_VOLSNAP_ATTR_TRANSPORTABLE = 32;
export const VSS_VOLSNAP_ATTR_NOT_SURFACED = 64;
export const VSS_VOLSNAP_ATTR_NOT_TRANSACTED = 128;
export const VSS_VOLSNAP_ATTR_HARDWARE_ASSISTED = 65536;
export const VSS_VOLSNAP_ATTR_DIFFERENTIAL = 131072;
export const VSS_VOLSNAP_ATTR_PLEX = 262144;
export const VSS_VOLSNAP_ATTR_IMPORTED = 524288;
export const VSS_VOLSNAP_ATTR_EXPOSED_LOCALLY = 1048576;
export const VSS_VOLSNAP_ATTR_EXPOSED_REMOTELY = 2097152;
export const VSS_VOLSNAP_ATTR_AUTORECOVER = 4194304;
export const VSS_VOLSNAP_ATTR_ROLLBACK_RECOVERY = 8388608;
export const VSS_VOLSNAP_ATTR_DELAYED_POSTSNAPSHOT = 16777216;
export const VSS_VOLSNAP_ATTR_TXF_RECOVERY = 33554432;
export const VSS_VOLSNAP_ATTR_FILE_SHARE = 67108864;
export const VSS_CTX_BACKUP = 0;
export const VSS_CTX_FILE_SHARE_BACKUP = 16;
export const VSS_CTX_NAS_ROLLBACK = 25;
export const VSS_CTX_APP_ROLLBACK = 9;
export const VSS_CTX_CLIENT_ACCESSIBLE = 29;
export const VSS_CTX_CLIENT_ACCESSIBLE_WRITERS = 13;
export const VSS_CTX_ALL = `-1`;
export const VSS_PRV_CAPABILITY_LEGACY = 1;
export const VSS_PRV_CAPABILITY_COMPLIANT = 2;
export const VSS_PRV_CAPABILITY_LUN_REPOINT = 4;
export const VSS_PRV_CAPABILITY_LUN_RESYNC = 8;
export const VSS_PRV_CAPABILITY_OFFLINE_CREATION = 16;
export const VSS_PRV_CAPABILITY_MULTIPLE_IMPORT = 32;
export const VSS_PRV_CAPABILITY_RECYCLING = 64;
export const VSS_PRV_CAPABILITY_PLEX = 128;
export const VSS_PRV_CAPABILITY_DIFFERENTIAL = 256;
export const VSS_PRV_CAPABILITY_CLUSTERED = 512;
export const VSS_BREAKEX_FLAG_MASK_LUNS = 1;
export const VSS_BREAKEX_FLAG_MAKE_READ_WRITE = 2;
export const VSS_BREAKEX_FLAG_REVERT_IDENTITY_ALL = 4;
export const VSS_BREAKEX_FLAG_REVERT_IDENTITY_NONE = 8;
export const VSS_ONLUNSTATECHANGE_NOTIFY_READ_WRITE = 256;
export const VSS_ONLUNSTATECHANGE_NOTIFY_LUN_PRE_RECOVERY = 512;
export const VSS_ONLUNSTATECHANGE_NOTIFY_LUN_POST_RECOVERY = 1024;
export const VSS_ONLUNSTATECHANGE_DO_MASK_LUNS = 2048;
export const VSS_RECOVERY_REVERT_IDENTITY_ALL = 256;
export const VSS_RECOVERY_NO_VOLUME_CHECK = 512;
export const VSS_WS_UNKNOWN = 0;
export const VSS_WS_STABLE = 1;
export const VSS_WS_WAITING_FOR_FREEZE = 2;
export const VSS_WS_WAITING_FOR_THAW = 3;
export const VSS_WS_WAITING_FOR_POST_SNAPSHOT = 4;
export const VSS_WS_WAITING_FOR_BACKUP_COMPLETE = 5;
export const VSS_WS_FAILED_AT_IDENTIFY = 6;
export const VSS_WS_FAILED_AT_PREPARE_BACKUP = 7;
export const VSS_WS_FAILED_AT_PREPARE_SNAPSHOT = 8;
export const VSS_WS_FAILED_AT_FREEZE = 9;
export const VSS_WS_FAILED_AT_THAW = 10;
export const VSS_WS_FAILED_AT_POST_SNAPSHOT = 11;
export const VSS_WS_FAILED_AT_BACKUP_COMPLETE = 12;
export const VSS_WS_FAILED_AT_PRE_RESTORE = 13;
export const VSS_WS_FAILED_AT_POST_RESTORE = 14;
export const VSS_WS_FAILED_AT_BACKUPSHUTDOWN = 15;
export const VSS_WS_COUNT = 16;
export const VSS_BT_UNDEFINED = 0;
export const VSS_BT_FULL = 1;
export const VSS_BT_INCREMENTAL = 2;
export const VSS_BT_DIFFERENTIAL = 3;
export const VSS_BT_LOG = 4;
export const VSS_BT_COPY = 5;
export const VSS_BT_OTHER = 6;
export const VSS_RTYPE_UNDEFINED = 0;
export const VSS_RTYPE_BY_COPY = 1;
export const VSS_RTYPE_IMPORT = 2;
export const VSS_RTYPE_OTHER = 3;
export const VSS_RF_UNDEFINED = 0;
export const VSS_RF_NONE = 1;
export const VSS_RF_ALL = 2;
export const VSS_RF_PARTIAL = 3;
export const VSS_PROV_UNKNOWN = 0;
export const VSS_PROV_SYSTEM = 1;
export const VSS_PROV_SOFTWARE = 2;
export const VSS_PROV_HARDWARE = 3;
export const VSS_PROV_FILESHARE = 4;
export const VSS_APP_UNKNOWN = 0;
export const VSS_APP_SYSTEM = 1;
export const VSS_APP_BACK_END = 2;
export const VSS_APP_FRONT_END = 3;
export const VSS_APP_SYSTEM_RM = 4;
export const VSS_APP_AUTO = `-1`;
export const VSS_SC_DISABLE_DEFRAG = 1;
export const VSS_SC_DISABLE_CONTENTINDEX = 2;
export const VSS_SPROPID_UNKNOWN = 0;
export const VSS_SPROPID_SNAPSHOT_ID = 1;
export const VSS_SPROPID_SNAPSHOT_SET_ID = 2;
export const VSS_SPROPID_SNAPSHOTS_COUNT = 3;
export const VSS_SPROPID_SNAPSHOT_DEVICE = 4;
export const VSS_SPROPID_ORIGINAL_VOLUME = 5;
export const VSS_SPROPID_ORIGINATING_MACHINE = 6;
export const VSS_SPROPID_SERVICE_MACHINE = 7;
export const VSS_SPROPID_EXPOSED_NAME = 8;
export const VSS_SPROPID_EXPOSED_PATH = 9;
export const VSS_SPROPID_PROVIDER_ID = 10;
export const VSS_SPROPID_SNAPSHOT_ATTRIBUTES = 11;
export const VSS_SPROPID_CREATION_TIMESTAMP = 12;
export const VSS_SPROPID_STATUS = 13;
export const VSS_FSBT_FULL_BACKUP_REQUIRED = 1;
export const VSS_FSBT_DIFFERENTIAL_BACKUP_REQUIRED = 2;
export const VSS_FSBT_INCREMENTAL_BACKUP_REQUIRED = 4;
export const VSS_FSBT_LOG_BACKUP_REQUIRED = 8;
export const VSS_FSBT_FULL_SNAPSHOT_REQUIRED = 256;
export const VSS_FSBT_DIFFERENTIAL_SNAPSHOT_REQUIRED = 512;
export const VSS_FSBT_INCREMENTAL_SNAPSHOT_REQUIRED = 1024;
export const VSS_FSBT_LOG_SNAPSHOT_REQUIRED = 2048;
export const VSS_FSBT_CREATED_DURING_BACKUP = 65536;
export const VSS_FSBT_ALL_BACKUP_REQUIRED = 15;
export const VSS_FSBT_ALL_SNAPSHOT_REQUIRED = 3840;
export const VSS_BS_UNDEFINED = 0;
export const VSS_BS_DIFFERENTIAL = 1;
export const VSS_BS_INCREMENTAL = 2;
export const VSS_BS_EXCLUSIVE_INCREMENTAL_DIFFERENTIAL = 4;
export const VSS_BS_LOG = 8;
export const VSS_BS_COPY = 16;
export const VSS_BS_TIMESTAMPED = 32;
export const VSS_BS_LAST_MODIFY = 64;
export const VSS_BS_LSN = 128;
export const VSS_BS_WRITER_SUPPORTS_NEW_TARGET = 256;
export const VSS_BS_WRITER_SUPPORTS_RESTORE_WITH_MOVE = 512;
export const VSS_BS_INDEPENDENT_SYSTEM_STATE = 1024;
export const VSS_BS_ROLLFORWARD_RESTORE = 4096;
export const VSS_BS_RESTORE_RENAME = 8192;
export const VSS_BS_AUTHORITATIVE_RESTORE = 16384;
export const VSS_BS_WRITER_SUPPORTS_PARALLEL_RESTORES = 32768;
export const VSS_UT_UNDEFINED = 0;
export const VSS_UT_BOOTABLESYSTEMSTATE = 1;
export const VSS_UT_SYSTEMSERVICE = 2;
export const VSS_UT_USERDATA = 3;
export const VSS_UT_OTHER = 4;
export const VSS_ST_UNDEFINED = 0;
export const VSS_ST_TRANSACTEDDB = 1;
export const VSS_ST_NONTRANSACTEDDB = 2;
export const VSS_ST_OTHER = 3;
export const VSS_RME_UNDEFINED = 0;
export const VSS_RME_RESTORE_IF_NOT_THERE = 1;
export const VSS_RME_RESTORE_IF_CAN_REPLACE = 2;
export const VSS_RME_STOP_RESTORE_START = 3;
export const VSS_RME_RESTORE_TO_ALTERNATE_LOCATION = 4;
export const VSS_RME_RESTORE_AT_REBOOT = 5;
export const VSS_RME_RESTORE_AT_REBOOT_IF_CANNOT_REPLACE = 6;
export const VSS_RME_CUSTOM = 7;
export const VSS_RME_RESTORE_STOP_START = 8;
export const VSS_WRE_UNDEFINED = 0;
export const VSS_WRE_NEVER = 1;
export const VSS_WRE_IF_REPLACE_FAILS = 2;
export const VSS_WRE_ALWAYS = 3;
export const VSS_CT_UNDEFINED = 0;
export const VSS_CT_DATABASE = 1;
export const VSS_CT_FILEGROUP = 2;
export const VSS_AWS_UNDEFINED = 0;
export const VSS_AWS_NO_ALTERNATE_WRITER = 1;
export const VSS_AWS_ALTERNATE_WRITER_EXISTS = 2;
export const VSS_AWS_THIS_IS_ALTERNATE_WRITER = 3;
export const VSS_SM_POST_SNAPSHOT_FLAG = 1;
export const VSS_SM_BACKUP_EVENTS_FLAG = 2;
export const VSS_SM_RESTORE_EVENTS_FLAG = 4;
export const VSS_SM_IO_THROTTLING_FLAG = 8;
export const VSS_SM_ALL_FLAGS = `-1`;
export const VSS_RT_UNDEFINED = 0;
export const VSS_RT_ORIGINAL = 1;
export const VSS_RT_ALTERNATE = 2;
export const VSS_RT_DIRECTED = 3;
export const VSS_RT_ORIGINAL_LOCATION = 4;
export const VSS_RS_UNDEFINED = 0;
export const VSS_RS_NONE = 1;
export const VSS_RS_ALL = 2;
export const VSS_RS_FAILED = 3;
export const VSS_CF_BACKUP_RECOVERY = 1;
export const VSS_CF_APP_ROLLBACK_RECOVERY = 2;
export const VSS_CF_NOT_SYSTEM_STATE = 4;
export const VSS_MGMT_OBJECT_UNKNOWN = 0;
export const VSS_MGMT_OBJECT_VOLUME = 1;
export const VSS_MGMT_OBJECT_DIFF_VOLUME = 2;
export const VSS_MGMT_OBJECT_DIFF_AREA = 3;
export const VSS_PROTECTION_LEVEL_ORIGINAL_VOLUME = 0;
export const VSS_PROTECTION_LEVEL_SNAPSHOT = 1;
export const VSS_PROTECTION_FAULT_NONE = 0;
export const VSS_PROTECTION_FAULT_DIFF_AREA_MISSING = 1;
export const VSS_PROTECTION_FAULT_IO_FAILURE_DURING_ONLINE = 2;
export const VSS_PROTECTION_FAULT_META_DATA_CORRUPTION = 3;
export const VSS_PROTECTION_FAULT_MEMORY_ALLOCATION_FAILURE = 4;
export const VSS_PROTECTION_FAULT_MAPPED_MEMORY_FAILURE = 5;
export const VSS_PROTECTION_FAULT_COW_READ_FAILURE = 6;
export const VSS_PROTECTION_FAULT_COW_WRITE_FAILURE = 7;
export const VSS_PROTECTION_FAULT_DIFF_AREA_FULL = 8;
export const VSS_PROTECTION_FAULT_GROW_TOO_SLOW = 9;
export const VSS_PROTECTION_FAULT_GROW_FAILED = 10;
export const VSS_PROTECTION_FAULT_DESTROY_ALL_SNAPSHOTS = 11;
export const VSS_PROTECTION_FAULT_FILE_SYSTEM_FAILURE = 12;
export const VSS_PROTECTION_FAULT_IO_FAILURE = 13;
export const VSS_PROTECTION_FAULT_DIFF_AREA_REMOVED = 14;
export const VSS_PROTECTION_FAULT_EXTERNAL_WRITER_TO_DIFF_AREA = 15;
export const VSS_PROTECTION_FAULT_MOUNT_DURING_CLUSTER_OFFLINE = 16;

// Structs

/**
 * Windows.Win32.Storage.Vss.VSS_SNAPSHOT_PROP (size: 104)
 */
export interface VSS_SNAPSHOT_PROP {
  /** System.Guid */
  m_SnapshotId: Uint8Array | Deno.PointerValue | null;
  /** System.Guid */
  m_SnapshotSetId: Uint8Array | Deno.PointerValue | null;
  /** i32 */
  m_lSnapshotsCount: number;
  /** ptr */
  m_pwszSnapshotDeviceObject: Deno.PointerValue | Uint8Array | null;
  /** ptr */
  m_pwszOriginalVolumeName: Deno.PointerValue | Uint8Array | null;
  /** ptr */
  m_pwszOriginatingMachine: Deno.PointerValue | Uint8Array | null;
  /** ptr */
  m_pwszServiceMachine: Deno.PointerValue | Uint8Array | null;
  /** ptr */
  m_pwszExposedName: Deno.PointerValue | Uint8Array | null;
  /** ptr */
  m_pwszExposedPath: Deno.PointerValue | Uint8Array | null;
  /** System.Guid */
  m_ProviderId: Uint8Array | Deno.PointerValue | null;
  /** i32 */
  m_lSnapshotAttributes: number;
  /** i64 */
  m_tsCreationTimestamp: Deno.PointerValue;
  /** Windows.Win32.Storage.Vss.VSS_SNAPSHOT_STATE */
  m_eStatus: VSS_SNAPSHOT_STATE;
}

export const sizeofVSS_SNAPSHOT_PROP = 104;

export function allocVSS_SNAPSHOT_PROP(data?: Partial<VSS_SNAPSHOT_PROP>): Uint8Array {
  const buf = new Uint8Array(sizeofVSS_SNAPSHOT_PROP);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.m_SnapshotId !== undefined) view.setBigUint64(0, data.m_SnapshotId === null ? 0n : BigInt(util.toPointer(data.m_SnapshotId)), true);
  // 0x08: pointer
  if (data?.m_SnapshotSetId !== undefined) view.setBigUint64(8, data.m_SnapshotSetId === null ? 0n : BigInt(util.toPointer(data.m_SnapshotSetId)), true);
  // 0x10: i32
  if (data?.m_lSnapshotsCount !== undefined) view.setInt32(16, Number(data.m_lSnapshotsCount), true);
  // 0x14: pad4
  // 0x18: pointer
  if (data?.m_pwszSnapshotDeviceObject !== undefined) view.setBigUint64(24, data.m_pwszSnapshotDeviceObject === null ? 0n : BigInt(util.toPointer(data.m_pwszSnapshotDeviceObject)), true);
  // 0x20: pointer
  if (data?.m_pwszOriginalVolumeName !== undefined) view.setBigUint64(32, data.m_pwszOriginalVolumeName === null ? 0n : BigInt(util.toPointer(data.m_pwszOriginalVolumeName)), true);
  // 0x28: pointer
  if (data?.m_pwszOriginatingMachine !== undefined) view.setBigUint64(40, data.m_pwszOriginatingMachine === null ? 0n : BigInt(util.toPointer(data.m_pwszOriginatingMachine)), true);
  // 0x30: pointer
  if (data?.m_pwszServiceMachine !== undefined) view.setBigUint64(48, data.m_pwszServiceMachine === null ? 0n : BigInt(util.toPointer(data.m_pwszServiceMachine)), true);
  // 0x38: pointer
  if (data?.m_pwszExposedName !== undefined) view.setBigUint64(56, data.m_pwszExposedName === null ? 0n : BigInt(util.toPointer(data.m_pwszExposedName)), true);
  // 0x40: pointer
  if (data?.m_pwszExposedPath !== undefined) view.setBigUint64(64, data.m_pwszExposedPath === null ? 0n : BigInt(util.toPointer(data.m_pwszExposedPath)), true);
  // 0x48: pointer
  if (data?.m_ProviderId !== undefined) view.setBigUint64(72, data.m_ProviderId === null ? 0n : BigInt(util.toPointer(data.m_ProviderId)), true);
  // 0x50: i32
  if (data?.m_lSnapshotAttributes !== undefined) view.setInt32(80, Number(data.m_lSnapshotAttributes), true);
  // 0x54: pad4
  // 0x58: i64
  if (data?.m_tsCreationTimestamp !== undefined) view.setBigInt64(88, BigInt(data.m_tsCreationTimestamp), true);
  // 0x60: i32
  if (data?.m_eStatus !== undefined) view.setInt32(96, Number(data.m_eStatus), true);
  // 0x64: pad4
  return buf;
}

/**
 * Windows.Win32.Storage.Vss.VSS_PROVIDER_PROP (size: 48)
 */
export interface VSS_PROVIDER_PROP {
  /** System.Guid */
  m_ProviderId: Uint8Array | Deno.PointerValue | null;
  /** ptr */
  m_pwszProviderName: Deno.PointerValue | Uint8Array | null;
  /** Windows.Win32.Storage.Vss.VSS_PROVIDER_TYPE */
  m_eProviderType: VSS_PROVIDER_TYPE;
  /** ptr */
  m_pwszProviderVersion: Deno.PointerValue | Uint8Array | null;
  /** System.Guid */
  m_ProviderVersionId: Uint8Array | Deno.PointerValue | null;
  /** System.Guid */
  m_ClassId: Uint8Array | Deno.PointerValue | null;
}

export const sizeofVSS_PROVIDER_PROP = 48;

export function allocVSS_PROVIDER_PROP(data?: Partial<VSS_PROVIDER_PROP>): Uint8Array {
  const buf = new Uint8Array(sizeofVSS_PROVIDER_PROP);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.m_ProviderId !== undefined) view.setBigUint64(0, data.m_ProviderId === null ? 0n : BigInt(util.toPointer(data.m_ProviderId)), true);
  // 0x08: pointer
  if (data?.m_pwszProviderName !== undefined) view.setBigUint64(8, data.m_pwszProviderName === null ? 0n : BigInt(util.toPointer(data.m_pwszProviderName)), true);
  // 0x10: i32
  if (data?.m_eProviderType !== undefined) view.setInt32(16, Number(data.m_eProviderType), true);
  // 0x14: pad4
  // 0x18: pointer
  if (data?.m_pwszProviderVersion !== undefined) view.setBigUint64(24, data.m_pwszProviderVersion === null ? 0n : BigInt(util.toPointer(data.m_pwszProviderVersion)), true);
  // 0x20: pointer
  if (data?.m_ProviderVersionId !== undefined) view.setBigUint64(32, data.m_ProviderVersionId === null ? 0n : BigInt(util.toPointer(data.m_ProviderVersionId)), true);
  // 0x28: pointer
  if (data?.m_ClassId !== undefined) view.setBigUint64(40, data.m_ClassId === null ? 0n : BigInt(util.toPointer(data.m_ClassId)), true);
  return buf;
}

/**
 * Windows.Win32.Storage.Vss.VSS_OBJECT_UNION (size: 16)
 */
export interface VSS_OBJECT_UNION {
  /** Windows.Win32.Storage.Vss.VSS_SNAPSHOT_PROP */
  Snap: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Storage.Vss.VSS_PROVIDER_PROP */
  Prov: Uint8Array | Deno.PointerValue | null;
}

export const sizeofVSS_OBJECT_UNION = 16;

export function allocVSS_OBJECT_UNION(data?: Partial<VSS_OBJECT_UNION>): Uint8Array {
  const buf = new Uint8Array(sizeofVSS_OBJECT_UNION);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.Snap !== undefined) view.setBigUint64(0, data.Snap === null ? 0n : BigInt(util.toPointer(data.Snap)), true);
  // 0x08: pointer
  if (data?.Prov !== undefined) view.setBigUint64(8, data.Prov === null ? 0n : BigInt(util.toPointer(data.Prov)), true);
  return buf;
}

/**
 * Windows.Win32.Storage.Vss.VSS_OBJECT_PROP (size: 16)
 */
export interface VSS_OBJECT_PROP {
  /** Windows.Win32.Storage.Vss.VSS_OBJECT_TYPE */
  Type: VSS_OBJECT_TYPE;
  /** Windows.Win32.Storage.Vss.VSS_OBJECT_UNION */
  Obj: Uint8Array | Deno.PointerValue | null;
}

export const sizeofVSS_OBJECT_PROP = 16;

export function allocVSS_OBJECT_PROP(data?: Partial<VSS_OBJECT_PROP>): Uint8Array {
  const buf = new Uint8Array(sizeofVSS_OBJECT_PROP);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.Type !== undefined) view.setInt32(0, Number(data.Type), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.Obj !== undefined) view.setBigUint64(8, data.Obj === null ? 0n : BigInt(util.toPointer(data.Obj)), true);
  return buf;
}

/**
 * Windows.Win32.Storage.Vss.VSS_VOLUME_PROP (size: 16)
 */
export interface VSS_VOLUME_PROP {
  /** ptr */
  m_pwszVolumeName: Deno.PointerValue | Uint8Array | null;
  /** ptr */
  m_pwszVolumeDisplayName: Deno.PointerValue | Uint8Array | null;
}

export const sizeofVSS_VOLUME_PROP = 16;

export function allocVSS_VOLUME_PROP(data?: Partial<VSS_VOLUME_PROP>): Uint8Array {
  const buf = new Uint8Array(sizeofVSS_VOLUME_PROP);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.m_pwszVolumeName !== undefined) view.setBigUint64(0, data.m_pwszVolumeName === null ? 0n : BigInt(util.toPointer(data.m_pwszVolumeName)), true);
  // 0x08: pointer
  if (data?.m_pwszVolumeDisplayName !== undefined) view.setBigUint64(8, data.m_pwszVolumeDisplayName === null ? 0n : BigInt(util.toPointer(data.m_pwszVolumeDisplayName)), true);
  return buf;
}

/**
 * Windows.Win32.Storage.Vss.VSS_DIFF_VOLUME_PROP (size: 32)
 */
export interface VSS_DIFF_VOLUME_PROP {
  /** ptr */
  m_pwszVolumeName: Deno.PointerValue | Uint8Array | null;
  /** ptr */
  m_pwszVolumeDisplayName: Deno.PointerValue | Uint8Array | null;
  /** i64 */
  m_llVolumeFreeSpace: Deno.PointerValue;
  /** i64 */
  m_llVolumeTotalSpace: Deno.PointerValue;
}

export const sizeofVSS_DIFF_VOLUME_PROP = 32;

export function allocVSS_DIFF_VOLUME_PROP(data?: Partial<VSS_DIFF_VOLUME_PROP>): Uint8Array {
  const buf = new Uint8Array(sizeofVSS_DIFF_VOLUME_PROP);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.m_pwszVolumeName !== undefined) view.setBigUint64(0, data.m_pwszVolumeName === null ? 0n : BigInt(util.toPointer(data.m_pwszVolumeName)), true);
  // 0x08: pointer
  if (data?.m_pwszVolumeDisplayName !== undefined) view.setBigUint64(8, data.m_pwszVolumeDisplayName === null ? 0n : BigInt(util.toPointer(data.m_pwszVolumeDisplayName)), true);
  // 0x10: i64
  if (data?.m_llVolumeFreeSpace !== undefined) view.setBigInt64(16, BigInt(data.m_llVolumeFreeSpace), true);
  // 0x18: i64
  if (data?.m_llVolumeTotalSpace !== undefined) view.setBigInt64(24, BigInt(data.m_llVolumeTotalSpace), true);
  return buf;
}

/**
 * Windows.Win32.Storage.Vss.VSS_DIFF_AREA_PROP (size: 40)
 */
export interface VSS_DIFF_AREA_PROP {
  /** ptr */
  m_pwszVolumeName: Deno.PointerValue | Uint8Array | null;
  /** ptr */
  m_pwszDiffAreaVolumeName: Deno.PointerValue | Uint8Array | null;
  /** i64 */
  m_llMaximumDiffSpace: Deno.PointerValue;
  /** i64 */
  m_llAllocatedDiffSpace: Deno.PointerValue;
  /** i64 */
  m_llUsedDiffSpace: Deno.PointerValue;
}

export const sizeofVSS_DIFF_AREA_PROP = 40;

export function allocVSS_DIFF_AREA_PROP(data?: Partial<VSS_DIFF_AREA_PROP>): Uint8Array {
  const buf = new Uint8Array(sizeofVSS_DIFF_AREA_PROP);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.m_pwszVolumeName !== undefined) view.setBigUint64(0, data.m_pwszVolumeName === null ? 0n : BigInt(util.toPointer(data.m_pwszVolumeName)), true);
  // 0x08: pointer
  if (data?.m_pwszDiffAreaVolumeName !== undefined) view.setBigUint64(8, data.m_pwszDiffAreaVolumeName === null ? 0n : BigInt(util.toPointer(data.m_pwszDiffAreaVolumeName)), true);
  // 0x10: i64
  if (data?.m_llMaximumDiffSpace !== undefined) view.setBigInt64(16, BigInt(data.m_llMaximumDiffSpace), true);
  // 0x18: i64
  if (data?.m_llAllocatedDiffSpace !== undefined) view.setBigInt64(24, BigInt(data.m_llAllocatedDiffSpace), true);
  // 0x20: i64
  if (data?.m_llUsedDiffSpace !== undefined) view.setBigInt64(32, BigInt(data.m_llUsedDiffSpace), true);
  return buf;
}

/**
 * Windows.Win32.Storage.Vss.VSS_MGMT_OBJECT_UNION (size: 24)
 */
export interface VSS_MGMT_OBJECT_UNION {
  /** Windows.Win32.Storage.Vss.VSS_VOLUME_PROP */
  Vol: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Storage.Vss.VSS_DIFF_VOLUME_PROP */
  DiffVol: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Storage.Vss.VSS_DIFF_AREA_PROP */
  DiffArea: Uint8Array | Deno.PointerValue | null;
}

export const sizeofVSS_MGMT_OBJECT_UNION = 24;

export function allocVSS_MGMT_OBJECT_UNION(data?: Partial<VSS_MGMT_OBJECT_UNION>): Uint8Array {
  const buf = new Uint8Array(sizeofVSS_MGMT_OBJECT_UNION);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.Vol !== undefined) view.setBigUint64(0, data.Vol === null ? 0n : BigInt(util.toPointer(data.Vol)), true);
  // 0x08: pointer
  if (data?.DiffVol !== undefined) view.setBigUint64(8, data.DiffVol === null ? 0n : BigInt(util.toPointer(data.DiffVol)), true);
  // 0x10: pointer
  if (data?.DiffArea !== undefined) view.setBigUint64(16, data.DiffArea === null ? 0n : BigInt(util.toPointer(data.DiffArea)), true);
  return buf;
}

/**
 * Windows.Win32.Storage.Vss.VSS_MGMT_OBJECT_PROP (size: 16)
 */
export interface VSS_MGMT_OBJECT_PROP {
  /** Windows.Win32.Storage.Vss.VSS_MGMT_OBJECT_TYPE */
  Type: VSS_MGMT_OBJECT_TYPE;
  /** Windows.Win32.Storage.Vss.VSS_MGMT_OBJECT_UNION */
  Obj: Uint8Array | Deno.PointerValue | null;
}

export const sizeofVSS_MGMT_OBJECT_PROP = 16;

export function allocVSS_MGMT_OBJECT_PROP(data?: Partial<VSS_MGMT_OBJECT_PROP>): Uint8Array {
  const buf = new Uint8Array(sizeofVSS_MGMT_OBJECT_PROP);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.Type !== undefined) view.setInt32(0, Number(data.Type), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.Obj !== undefined) view.setBigUint64(8, data.Obj === null ? 0n : BigInt(util.toPointer(data.Obj)), true);
  return buf;
}

export type BOOL = number;

/**
 * Windows.Win32.Storage.Vss.VSS_VOLUME_PROTECTION_INFO (size: 24)
 */
export interface VSS_VOLUME_PROTECTION_INFO {
  /** Windows.Win32.Storage.Vss.VSS_PROTECTION_LEVEL */
  m_protectionLevel: VSS_PROTECTION_LEVEL;
  /** Windows.Win32.Foundation.BOOL */
  m_volumeIsOfflineForProtection: boolean;
  /** Windows.Win32.Storage.Vss.VSS_PROTECTION_FAULT */
  m_protectionFault: VSS_PROTECTION_FAULT;
  /** i32 */
  m_failureStatus: number;
  /** Windows.Win32.Foundation.BOOL */
  m_volumeHasUnusedDiffArea: boolean;
  /** u32 */
  m_reserved: number;
}

export const sizeofVSS_VOLUME_PROTECTION_INFO = 24;

export function allocVSS_VOLUME_PROTECTION_INFO(data?: Partial<VSS_VOLUME_PROTECTION_INFO>): Uint8Array {
  const buf = new Uint8Array(sizeofVSS_VOLUME_PROTECTION_INFO);
  const view = new DataView(buf.buffer);
  // 0x00: i32
  if (data?.m_protectionLevel !== undefined) view.setInt32(0, Number(data.m_protectionLevel), true);
  // 0x04: i32
  if (data?.m_volumeIsOfflineForProtection !== undefined) view.setInt32(4, Number(data.m_volumeIsOfflineForProtection), true);
  // 0x08: i32
  if (data?.m_protectionFault !== undefined) view.setInt32(8, Number(data.m_protectionFault), true);
  // 0x0c: i32
  if (data?.m_failureStatus !== undefined) view.setInt32(12, Number(data.m_failureStatus), true);
  // 0x10: i32
  if (data?.m_volumeHasUnusedDiffArea !== undefined) view.setInt32(16, Number(data.m_volumeHasUnusedDiffArea), true);
  // 0x14: u32
  if (data?.m_reserved !== undefined) view.setUint32(20, Number(data.m_reserved), true);
  return buf;
}

export type HRESULT = number;

// Native Libraries

try {
  var libVSSAPI_dll = Deno.dlopen("VSSAPI.dll", {
    CreateVssExpressWriterInternal: {
      parameters: ["pointer"],
      result: "pointer",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function CreateVssExpressWriterInternal(
  ppWriter: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libVSSAPI_dll.CreateVssExpressWriterInternal(util.toPointer(ppWriter)));
}

