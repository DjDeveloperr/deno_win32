/// Auto-generated by Deno Win32: Windows.Win32.Storage.EnhancedStorage.Apis

import * as util from "../../util.ts";

// Enums
export type ACT_AUTHORIZATION_STATE_VALUE = number;

// Constants
export const ENHANCED_STORAGE_AUTHN_STATE_UNKNOWN = 0;
export const ENHANCED_STORAGE_AUTHN_STATE_NO_AUTHENTICATION_REQUIRED = 1;
export const ENHANCED_STORAGE_AUTHN_STATE_NOT_AUTHENTICATED = 2;
export const ENHANCED_STORAGE_AUTHN_STATE_AUTHENTICATED = 3;
export const ENHANCED_STORAGE_AUTHN_STATE_AUTHENTICATION_DENIED = 2147483649;
export const ENHANCED_STORAGE_AUTHN_STATE_DEVICE_ERROR = 2147483650;
export const CERT_TYPE_EMPTY = 0;
export const CERT_TYPE_ASCm = 1;
export const CERT_TYPE_PCp = 2;
export const CERT_TYPE_ASCh = 3;
export const CERT_TYPE_HCh = 4;
export const CERT_TYPE_SIGNER = 6;
export const CERT_VALIDATION_POLICY_RESERVED = 0;
export const CERT_VALIDATION_POLICY_NONE = 1;
export const CERT_VALIDATION_POLICY_BASIC = 2;
export const CERT_VALIDATION_POLICY_EXTENDED = 3;
export const CERT_CAPABILITY_HASH_ALG = 1;
export const CERT_CAPABILITY_ASYMMETRIC_KEY_CRYPTOGRAPHY = 2;
export const CERT_CAPABILITY_SIGNATURE_ALG = 3;
export const CERT_CAPABILITY_CERTIFICATE_SUPPORT = 4;
export const CERT_CAPABILITY_OPTIONAL_FEATURES = 5;
export const CERT_MAX_CAPABILITY = 255;
export const CERT_RSA_1024_OID = `1.2.840.113549.1.1.1,1024`;
export const CERT_RSA_2048_OID = `1.2.840.113549.1.1.1,2048`;
export const CERT_RSA_3072_OID = `1.2.840.113549.1.1.1,3072`;
export const CERT_RSASSA_PSS_SHA1_OID = `1.2.840.113549.1.1.10,1.3.14.3.2.26`;
export const CERT_RSASSA_PSS_SHA256_OID = `1.2.840.113549.1.1.10,2.16.840.1.101.3.4.2.1`;
export const CERT_RSASSA_PSS_SHA384_OID = `1.2.840.113549.1.1.10,2.16.840.1.101.3.4.2.2`;
export const CERT_RSASSA_PSS_SHA512_OID = `1.2.840.113549.1.1.10,2.16.840.1.101.3.4.2.3`;
export const AUDIO_CHANNELCOUNT_MONO = 1;
export const AUDIO_CHANNELCOUNT_STEREO = 2;
export const CREATOROPENWITHUIOPTION_HIDDEN = 0;
export const CREATOROPENWITHUIOPTION_VISIBLE = 1;
export const ISDEFAULTSAVE_NONE = 0;
export const ISDEFAULTSAVE_OWNER = 1;
export const ISDEFAULTSAVE_NONOWNER = 2;
export const ISDEFAULTSAVE_BOTH = 3;
export const FILEOFFLINEAVAILABILITYSTATUS_NOTAVAILABLEOFFLINE = 0;
export const FILEOFFLINEAVAILABILITYSTATUS_PARTIAL = 1;
export const FILEOFFLINEAVAILABILITYSTATUS_COMPLETE = 2;
export const FILEOFFLINEAVAILABILITYSTATUS_COMPLETE_PINNED = 3;
export const FILEOFFLINEAVAILABILITYSTATUS_EXCLUDED = 4;
export const FILEOFFLINEAVAILABILITYSTATUS_FOLDER_EMPTY = 5;
export const FLAGSTATUS_NOTFLAGGED = 0;
export const FLAGSTATUS_COMPLETED = 1;
export const FLAGSTATUS_FOLLOWUP = 2;
export const IMPORTANCE_LOW_MIN = 0;
export const IMPORTANCE_LOW_SET = 1;
export const IMPORTANCE_LOW_MAX = 1;
export const IMPORTANCE_NORMAL_MIN = 2;
export const IMPORTANCE_NORMAL_SET = 3;
export const IMPORTANCE_NORMAL_MAX = 4;
export const IMPORTANCE_HIGH_MIN = 5;
export const IMPORTANCE_HIGH_SET = 5;
export const IMPORTANCE_HIGH_MAX = 5;
export const KIND_CALENDAR = `calendar`;
export const KIND_COMMUNICATION = `communication`;
export const KIND_CONTACT = `contact`;
export const KIND_DOCUMENT = `document`;
export const KIND_EMAIL = `email`;
export const KIND_FEED = `feed`;
export const KIND_FOLDER = `folder`;
export const KIND_GAME = `game`;
export const KIND_INSTANTMESSAGE = `instantmessage`;
export const KIND_JOURNAL = `journal`;
export const KIND_LINK = `link`;
export const KIND_MOVIE = `movie`;
export const KIND_MUSIC = `music`;
export const KIND_NOTE = `note`;
export const KIND_PICTURE = `picture`;
export const KIND_PLAYLIST = `playlist`;
export const KIND_PROGRAM = `program`;
export const KIND_RECORDEDTV = `recordedtv`;
export const KIND_SEARCHFOLDER = `searchfolder`;
export const KIND_TASK = `task`;
export const KIND_VIDEO = `video`;
export const KIND_WEBHISTORY = `webhistory`;
export const KIND_UNKNOWN = `unknown`;
export const OFFLINEAVAILABILITY_NOT_AVAILABLE = 0;
export const OFFLINEAVAILABILITY_AVAILABLE = 1;
export const OFFLINEAVAILABILITY_ALWAYS_AVAILABLE = 2;
export const OFFLINESTATUS_ONLINE = 0;
export const OFFLINESTATUS_OFFLINE = 1;
export const OFFLINESTATUS_OFFLINE_FORCED = 2;
export const OFFLINESTATUS_OFFLINE_SLOW = 3;
export const OFFLINESTATUS_OFFLINE_ERROR = 4;
export const OFFLINESTATUS_OFFLINE_ITEM_VERSION_CONFLICT = 5;
export const OFFLINESTATUS_OFFLINE_SUSPENDED = 6;
export const RATING_ONE_STAR_MIN = 1;
export const RATING_ONE_STAR_SET = 1;
export const RATING_ONE_STAR_MAX = 12;
export const RATING_TWO_STARS_MIN = 13;
export const RATING_TWO_STARS_SET = 25;
export const RATING_TWO_STARS_MAX = 37;
export const RATING_THREE_STARS_MIN = 38;
export const RATING_THREE_STARS_SET = 50;
export const RATING_THREE_STARS_MAX = 62;
export const RATING_FOUR_STARS_MIN = 63;
export const RATING_FOUR_STARS_SET = 75;
export const RATING_FOUR_STARS_MAX = 87;
export const RATING_FIVE_STARS_MIN = 88;
export const RATING_FIVE_STARS_SET = 99;
export const RATING_FIVE_STARS_MAX = 99;
export const SHARINGSTATUS_NOTSHARED = 0;
export const SHARINGSTATUS_SHARED = 1;
export const SHARINGSTATUS_PRIVATE = 2;
export const STORAGE_PROVIDER_SHARE_STATUS_PRIVATE = `Private`;
export const STORAGE_PROVIDER_SHARE_STATUS_SHARED = `Shared`;
export const STORAGE_PROVIDER_SHARE_STATUS_PUBLIC = `Public`;
export const STORAGE_PROVIDER_SHARE_STATUS_GROUP = `Group`;
export const STORAGE_PROVIDER_SHARE_STATUS_OWNER = `Owner`;
export const STORAGE_PROVIDER_SHARINGSTATUS_NOTSHARED = 0;
export const STORAGE_PROVIDER_SHARINGSTATUS_SHARED = 1;
export const STORAGE_PROVIDER_SHARINGSTATUS_PRIVATE = 2;
export const STORAGE_PROVIDER_SHARINGSTATUS_PUBLIC = 3;
export const STORAGE_PROVIDER_SHARINGSTATUS_SHARED_OWNED = 4;
export const STORAGE_PROVIDER_SHARINGSTATUS_SHARED_COOWNED = 5;
export const STORAGE_PROVIDER_SHARINGSTATUS_PUBLIC_OWNED = 6;
export const STORAGE_PROVIDER_SHARINGSTATUS_PUBLIC_COOWNED = 7;
export const BLUETOOTH_ADDRESS_TYPE_PUBLIC = 0;
export const BLUETOOTH_ADDRESS_TYPE_RANDOM = 1;
export const BLUETOOTH_CACHE_MODE_CACHED = 0;
export const BLUETOOTH_CACHED_MODE_UNCACHED = 1;
export const PLAYBACKSTATE_UNKNOWN = 0;
export const PLAYBACKSTATE_STOPPED = 1;
export const PLAYBACKSTATE_PLAYING = 2;
export const PLAYBACKSTATE_TRANSITIONING = 3;
export const PLAYBACKSTATE_PAUSED = 4;
export const PLAYBACKSTATE_RECORDINGPAUSED = 5;
export const PLAYBACKSTATE_RECORDING = 6;
export const PLAYBACKSTATE_NOMEDIA = 7;
export const LAYOUTPATTERN_CVMFB_ALPHA = `alpha`;
export const LAYOUTPATTERN_CVMFB_BETA = `beta`;
export const LAYOUTPATTERN_CVMFB_GAMMA = `gamma`;
export const LAYOUTPATTERN_CVMFB_DELTA = `delta`;
export const LAYOUTPATTERN_CVMFS_ALPHA = `alpha`;
export const LAYOUTPATTERN_CVMFS_BETA = `beta`;
export const LAYOUTPATTERN_CVMFS_GAMMA = `gamma`;
export const LAYOUTPATTERN_CVMFS_DELTA = `delta`;
export const LINK_STATUS_RESOLVED = 1;
export const LINK_STATUS_BROKEN = 2;
export const PHOTO_CONTRAST_NORMAL = 0;
export const PHOTO_CONTRAST_SOFT = 1;
export const PHOTO_CONTRAST_HARD = 2;
export const PHOTO_EXPOSUREPROGRAM_UNKNOWN = 0;
export const PHOTO_EXPOSUREPROGRAM_MANUAL = 1;
export const PHOTO_EXPOSUREPROGRAM_NORMAL = 2;
export const PHOTO_EXPOSUREPROGRAM_APERTURE = 3;
export const PHOTO_EXPOSUREPROGRAM_SHUTTER = 4;
export const PHOTO_EXPOSUREPROGRAM_CREATIVE = 5;
export const PHOTO_EXPOSUREPROGRAM_ACTION = 6;
export const PHOTO_EXPOSUREPROGRAM_PORTRAIT = 7;
export const PHOTO_EXPOSUREPROGRAM_LANDSCAPE = 8;
export const PHOTO_FLASH_NONE = 0;
export const PHOTO_FLASH_FLASH = 1;
export const PHOTO_FLASH_WITHOUTSTROBE = 5;
export const PHOTO_FLASH_WITHSTROBE = 7;
export const PHOTO_FLASH_FLASH_COMPULSORY = 9;
export const PHOTO_FLASH_FLASH_COMPULSORY_NORETURNLIGHT = 13;
export const PHOTO_FLASH_FLASH_COMPULSORY_RETURNLIGHT = 15;
export const PHOTO_FLASH_NONE_COMPULSORY = 16;
export const PHOTO_FLASH_NONE_AUTO = 24;
export const PHOTO_FLASH_FLASH_AUTO = 25;
export const PHOTO_FLASH_FLASH_AUTO_NORETURNLIGHT = 29;
export const PHOTO_FLASH_FLASH_AUTO_RETURNLIGHT = 31;
export const PHOTO_FLASH_NOFUNCTION = 32;
export const PHOTO_FLASH_FLASH_REDEYE = 65;
export const PHOTO_FLASH_FLASH_REDEYE_NORETURNLIGHT = 69;
export const PHOTO_FLASH_FLASH_REDEYE_RETURNLIGHT = 71;
export const PHOTO_FLASH_FLASH_COMPULSORY_REDEYE = 73;
export const PHOTO_FLASH_FLASH_COMPULSORY_REDEYE_NORETURNLIGHT = 77;
export const PHOTO_FLASH_FLASH_COMPULSORY_REDEYE_RETURNLIGHT = 79;
export const PHOTO_FLASH_FLASH_AUTO_REDEYE = 89;
export const PHOTO_FLASH_FLASH_AUTO_REDEYE_NORETURNLIGHT = 93;
export const PHOTO_FLASH_FLASH_AUTO_REDEYE_RETURNLIGHT = 95;
export const PHOTO_GAINCONTROL_NONE = 0;
export const PHOTO_GAINCONTROL_LOWGAINUP = 1;
export const PHOTO_GAINCONTROL_HIGHGAINUP = 2;
export const PHOTO_GAINCONTROL_LOWGAINDOWN = 3;
export const PHOTO_GAINCONTROL_HIGHGAINDOWN = 4;
export const PHOTO_LIGHTSOURCE_UNKNOWN = 0;
export const PHOTO_LIGHTSOURCE_DAYLIGHT = 1;
export const PHOTO_LIGHTSOURCE_FLUORESCENT = 2;
export const PHOTO_LIGHTSOURCE_TUNGSTEN = 3;
export const PHOTO_LIGHTSOURCE_STANDARD_A = 17;
export const PHOTO_LIGHTSOURCE_STANDARD_B = 18;
export const PHOTO_LIGHTSOURCE_STANDARD_C = 19;
export const PHOTO_LIGHTSOURCE_D55 = 20;
export const PHOTO_LIGHTSOURCE_D65 = 21;
export const PHOTO_LIGHTSOURCE_D75 = 22;
export const PHOTO_PROGRAMMODE_NOTDEFINED = 0;
export const PHOTO_PROGRAMMODE_MANUAL = 1;
export const PHOTO_PROGRAMMODE_NORMAL = 2;
export const PHOTO_PROGRAMMODE_APERTURE = 3;
export const PHOTO_PROGRAMMODE_SHUTTER = 4;
export const PHOTO_PROGRAMMODE_CREATIVE = 5;
export const PHOTO_PROGRAMMODE_ACTION = 6;
export const PHOTO_PROGRAMMODE_PORTRAIT = 7;
export const PHOTO_PROGRAMMODE_LANDSCAPE = 8;
export const PHOTO_SATURATION_NORMAL = 0;
export const PHOTO_SATURATION_LOW = 1;
export const PHOTO_SATURATION_HIGH = 2;
export const PHOTO_SHARPNESS_NORMAL = 0;
export const PHOTO_SHARPNESS_SOFT = 1;
export const PHOTO_SHARPNESS_HARD = 2;
export const PHOTO_WHITEBALANCE_AUTO = 0;
export const PHOTO_WHITEBALANCE_MANUAL = 1;
export const SFGAOSTR_FILESYS = `filesys`;
export const SFGAOSTR_FILEANC = `fileanc`;
export const SFGAOSTR_STORAGEANC = `storageanc`;
export const SFGAOSTR_STREAM = `stream`;
export const SFGAOSTR_LINK = `link`;
export const SFGAOSTR_HIDDEN = `hidden`;
export const SFGAOSTR_SUPERHIDDEN = `superhidden`;
export const SFGAOSTR_FOLDER = `folder`;
export const SFGAOSTR_NONENUM = `nonenum`;
export const SFGAOSTR_BROWSABLE = `browsable`;
export const SFGAOSTR_SYSTEM = `system`;
export const SFGAOSTR_PLACEHOLDER = `placeholder`;
export const APPUSERMODEL_STARTPINOPTION_DEFAULT = 0;
export const APPUSERMODEL_STARTPINOPTION_NOPINONINSTALL = 1;
export const APPUSERMODEL_STARTPINOPTION_USERPINNED = 2;
export const SYNC_HANDLERTYPE_OTHER = 0;
export const SYNC_HANDLERTYPE_PROGRAMS = 1;
export const SYNC_HANDLERTYPE_DEVICES = 2;
export const SYNC_HANDLERTYPE_FOLDERS = 3;
export const SYNC_HANDLERTYPE_WEBSERVICES = 4;
export const SYNC_HANDLERTYPE_COMPUTERS = 5;
export const SYNC_STATE_NOTSETUP = 0;
export const SYNC_STATE_SYNCNOTRUN = 1;
export const SYNC_STATE_IDLE = 2;
export const SYNC_STATE_ERROR = 3;
export const SYNC_STATE_PENDING = 4;
export const SYNC_STATE_SYNCING = 5;
export const ACT_AUTHORIZE_ON_RESUME = 1;
export const ACT_AUTHORIZE_ON_SESSION_UNLOCK = 2;
export const ACT_UNAUTHORIZE_ON_SUSPEND = 1;
export const ACT_UNAUTHORIZE_ON_SESSION_LOCK = 2;
export const ES_RESERVED_COM_ERROR_START = 0;
export const ES_RESERVED_COM_ERROR_END = 511;
export const ES_GENERAL_ERROR_START = 512;
export const ES_GENERAL_ERROR_END = 1023;
export const ES_AUTHN_ERROR_START = 1024;
export const ES_AUTHN_ERROR_END = 1279;
export const ES_RESERVED_SILO_ERROR_START = 1280;
export const ES_RESERVED_SILO_ERROR_END = 4095;
export const ES_PW_SILO_ERROR_START = 4352;
export const ES_PW_SILO_ERROR_END = 4607;
export const ES_RESERVED_SILO_SPECIFIC_ERROR_START = 4608;
export const ES_RESERVED_SILO_SPECIFIC_ERROR_END = 49151;
export const ES_VENDOR_ERROR_START = 49152;
export const ES_VENDOR_ERROR_END = 65535;
export const FACILITY_ENHANCED_STORAGE = 4;
export const ACT_UNAUTHORIZED = 0;
export const ACT_AUTHORIZED = 1;

// Structs

/**
 * Windows.Win32.UI.Shell.PropertiesSystem.PROPERTYKEY (size: 16)
 */
export interface PROPERTYKEY {
  /** System.Guid */
  fmtid: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  pid: number;
}

export const sizeofPROPERTYKEY = 16;

export function allocPROPERTYKEY(data?: Partial<PROPERTYKEY>): Uint8Array {
  const buf = new Uint8Array(sizeofPROPERTYKEY);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.fmtid !== undefined) view.setBigUint64(0, data.fmtid === null ? 0n : util.toBigInt(util.toPointer(data.fmtid)), true);
  // 0x08: u32
  if (data?.pid !== undefined) view.setUint32(8, Number(data.pid), true);
  // 0x0c: pad4
  return buf;
}

export class PROPERTYKEYView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get fmtid(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x08: u32
  get pid(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: pad4

  // 0x00: pointer
  set fmtid(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(0, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x08: u32
  set pid(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: pad4
}

export type BOOL = number;

/**
 * Windows.Win32.Storage.EnhancedStorage.ENHANCED_STORAGE_PASSWORD_SILO_INFORMATION (size: 72)
 */
export interface ENHANCED_STORAGE_PASSWORD_SILO_INFORMATION {
  /** u8 */
  CurrentAdminFailures: number;
  /** u8 */
  CurrentUserFailures: number;
  /** u32 */
  TotalUserAuthenticationCount: number;
  /** u32 */
  TotalAdminAuthenticationCount: number;
  /** Windows.Win32.Foundation.BOOL */
  FipsCompliant: boolean;
  /** Windows.Win32.Foundation.BOOL */
  SecurityIDAvailable: boolean;
  /** Windows.Win32.Foundation.BOOL */
  InitializeInProgress: boolean;
  /** Windows.Win32.Foundation.BOOL */
  ITMSArmed: boolean;
  /** Windows.Win32.Foundation.BOOL */
  ITMSArmable: boolean;
  /** Windows.Win32.Foundation.BOOL */
  UserCreated: boolean;
  /** Windows.Win32.Foundation.BOOL */
  ResetOnPORDefault: boolean;
  /** Windows.Win32.Foundation.BOOL */
  ResetOnPORCurrent: boolean;
  /** u8 */
  MaxAdminFailures: number;
  /** u8 */
  MaxUserFailures: number;
  /** u32 */
  TimeToCompleteInitialization: number;
  /** u32 */
  TimeRemainingToCompleteInitialization: number;
  /** u32 */
  MinTimeToAuthenticate: number;
  /** u8 */
  MaxAdminPasswordSize: number;
  /** u8 */
  MinAdminPasswordSize: number;
  /** u8 */
  MaxAdminHintSize: number;
  /** u8 */
  MaxUserPasswordSize: number;
  /** u8 */
  MinUserPasswordSize: number;
  /** u8 */
  MaxUserHintSize: number;
  /** u8 */
  MaxUserNameSize: number;
  /** u8 */
  MaxSiloNameSize: number;
  /** u16 */
  MaxChallengeSize: number;
}

export const sizeofENHANCED_STORAGE_PASSWORD_SILO_INFORMATION = 72;

export function allocENHANCED_STORAGE_PASSWORD_SILO_INFORMATION(data?: Partial<ENHANCED_STORAGE_PASSWORD_SILO_INFORMATION>): Uint8Array {
  const buf = new Uint8Array(sizeofENHANCED_STORAGE_PASSWORD_SILO_INFORMATION);
  const view = new DataView(buf.buffer);
  // 0x00: u8
  if (data?.CurrentAdminFailures !== undefined) view.setUint8(0, Number(data.CurrentAdminFailures));
  // 0x01: u8
  if (data?.CurrentUserFailures !== undefined) view.setUint8(1, Number(data.CurrentUserFailures));
  // 0x02: u32
  if (data?.TotalUserAuthenticationCount !== undefined) view.setUint32(2, Number(data.TotalUserAuthenticationCount), true);
  // 0x06: u32
  if (data?.TotalAdminAuthenticationCount !== undefined) view.setUint32(6, Number(data.TotalAdminAuthenticationCount), true);
  // 0x0a: i32
  if (data?.FipsCompliant !== undefined) view.setInt32(10, Number(data.FipsCompliant), true);
  // 0x0e: i32
  if (data?.SecurityIDAvailable !== undefined) view.setInt32(14, Number(data.SecurityIDAvailable), true);
  // 0x12: i32
  if (data?.InitializeInProgress !== undefined) view.setInt32(18, Number(data.InitializeInProgress), true);
  // 0x16: i32
  if (data?.ITMSArmed !== undefined) view.setInt32(22, Number(data.ITMSArmed), true);
  // 0x1a: i32
  if (data?.ITMSArmable !== undefined) view.setInt32(26, Number(data.ITMSArmable), true);
  // 0x1e: i32
  if (data?.UserCreated !== undefined) view.setInt32(30, Number(data.UserCreated), true);
  // 0x22: i32
  if (data?.ResetOnPORDefault !== undefined) view.setInt32(34, Number(data.ResetOnPORDefault), true);
  // 0x26: i32
  if (data?.ResetOnPORCurrent !== undefined) view.setInt32(38, Number(data.ResetOnPORCurrent), true);
  // 0x2a: u8
  if (data?.MaxAdminFailures !== undefined) view.setUint8(42, Number(data.MaxAdminFailures));
  // 0x2b: u8
  if (data?.MaxUserFailures !== undefined) view.setUint8(43, Number(data.MaxUserFailures));
  // 0x2c: u32
  if (data?.TimeToCompleteInitialization !== undefined) view.setUint32(44, Number(data.TimeToCompleteInitialization), true);
  // 0x30: u32
  if (data?.TimeRemainingToCompleteInitialization !== undefined) view.setUint32(48, Number(data.TimeRemainingToCompleteInitialization), true);
  // 0x34: u32
  if (data?.MinTimeToAuthenticate !== undefined) view.setUint32(52, Number(data.MinTimeToAuthenticate), true);
  // 0x38: u8
  if (data?.MaxAdminPasswordSize !== undefined) view.setUint8(56, Number(data.MaxAdminPasswordSize));
  // 0x39: u8
  if (data?.MinAdminPasswordSize !== undefined) view.setUint8(57, Number(data.MinAdminPasswordSize));
  // 0x3a: u8
  if (data?.MaxAdminHintSize !== undefined) view.setUint8(58, Number(data.MaxAdminHintSize));
  // 0x3b: u8
  if (data?.MaxUserPasswordSize !== undefined) view.setUint8(59, Number(data.MaxUserPasswordSize));
  // 0x3c: u8
  if (data?.MinUserPasswordSize !== undefined) view.setUint8(60, Number(data.MinUserPasswordSize));
  // 0x3d: u8
  if (data?.MaxUserHintSize !== undefined) view.setUint8(61, Number(data.MaxUserHintSize));
  // 0x3e: u8
  if (data?.MaxUserNameSize !== undefined) view.setUint8(62, Number(data.MaxUserNameSize));
  // 0x3f: u8
  if (data?.MaxSiloNameSize !== undefined) view.setUint8(63, Number(data.MaxSiloNameSize));
  // 0x40: u16
  if (data?.MaxChallengeSize !== undefined) view.setUint16(64, Number(data.MaxChallengeSize), true);
  // 0x42: pad6
  return buf;
}

export class ENHANCED_STORAGE_PASSWORD_SILO_INFORMATIONView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u8
  get CurrentAdminFailures(): number {
    return this.view.getUint8(0);
  }

  // 0x01: u8
  get CurrentUserFailures(): number {
    return this.view.getUint8(1);
  }

  // 0x02: u32
  get TotalUserAuthenticationCount(): number {
    return this.view.getUint32(2, true);
  }

  // 0x06: u32
  get TotalAdminAuthenticationCount(): number {
    return this.view.getUint32(6, true);
  }

  // 0x0a: i32
  get FipsCompliant(): number {
    return this.view.getInt32(10, true);
  }

  // 0x0e: i32
  get SecurityIDAvailable(): number {
    return this.view.getInt32(14, true);
  }

  // 0x12: i32
  get InitializeInProgress(): number {
    return this.view.getInt32(18, true);
  }

  // 0x16: i32
  get ITMSArmed(): number {
    return this.view.getInt32(22, true);
  }

  // 0x1a: i32
  get ITMSArmable(): number {
    return this.view.getInt32(26, true);
  }

  // 0x1e: i32
  get UserCreated(): number {
    return this.view.getInt32(30, true);
  }

  // 0x22: i32
  get ResetOnPORDefault(): number {
    return this.view.getInt32(34, true);
  }

  // 0x26: i32
  get ResetOnPORCurrent(): number {
    return this.view.getInt32(38, true);
  }

  // 0x2a: u8
  get MaxAdminFailures(): number {
    return this.view.getUint8(42);
  }

  // 0x2b: u8
  get MaxUserFailures(): number {
    return this.view.getUint8(43);
  }

  // 0x2c: u32
  get TimeToCompleteInitialization(): number {
    return this.view.getUint32(44, true);
  }

  // 0x30: u32
  get TimeRemainingToCompleteInitialization(): number {
    return this.view.getUint32(48, true);
  }

  // 0x34: u32
  get MinTimeToAuthenticate(): number {
    return this.view.getUint32(52, true);
  }

  // 0x38: u8
  get MaxAdminPasswordSize(): number {
    return this.view.getUint8(56);
  }

  // 0x39: u8
  get MinAdminPasswordSize(): number {
    return this.view.getUint8(57);
  }

  // 0x3a: u8
  get MaxAdminHintSize(): number {
    return this.view.getUint8(58);
  }

  // 0x3b: u8
  get MaxUserPasswordSize(): number {
    return this.view.getUint8(59);
  }

  // 0x3c: u8
  get MinUserPasswordSize(): number {
    return this.view.getUint8(60);
  }

  // 0x3d: u8
  get MaxUserHintSize(): number {
    return this.view.getUint8(61);
  }

  // 0x3e: u8
  get MaxUserNameSize(): number {
    return this.view.getUint8(62);
  }

  // 0x3f: u8
  get MaxSiloNameSize(): number {
    return this.view.getUint8(63);
  }

  // 0x40: u16
  get MaxChallengeSize(): number {
    return this.view.getUint16(64, true);
  }

  // 0x42: pad6

  // 0x00: u8
  set CurrentAdminFailures(value: number) {
    this.view.setUint8(0, value);
  }

  // 0x01: u8
  set CurrentUserFailures(value: number) {
    this.view.setUint8(1, value);
  }

  // 0x02: u32
  set TotalUserAuthenticationCount(value: number) {
    this.view.setUint32(2, value, true);
  }

  // 0x06: u32
  set TotalAdminAuthenticationCount(value: number) {
    this.view.setUint32(6, value, true);
  }

  // 0x0a: i32
  set FipsCompliant(value: number) {
    this.view.setInt32(10, value, true);
  }

  // 0x0e: i32
  set SecurityIDAvailable(value: number) {
    this.view.setInt32(14, value, true);
  }

  // 0x12: i32
  set InitializeInProgress(value: number) {
    this.view.setInt32(18, value, true);
  }

  // 0x16: i32
  set ITMSArmed(value: number) {
    this.view.setInt32(22, value, true);
  }

  // 0x1a: i32
  set ITMSArmable(value: number) {
    this.view.setInt32(26, value, true);
  }

  // 0x1e: i32
  set UserCreated(value: number) {
    this.view.setInt32(30, value, true);
  }

  // 0x22: i32
  set ResetOnPORDefault(value: number) {
    this.view.setInt32(34, value, true);
  }

  // 0x26: i32
  set ResetOnPORCurrent(value: number) {
    this.view.setInt32(38, value, true);
  }

  // 0x2a: u8
  set MaxAdminFailures(value: number) {
    this.view.setUint8(42, value);
  }

  // 0x2b: u8
  set MaxUserFailures(value: number) {
    this.view.setUint8(43, value);
  }

  // 0x2c: u32
  set TimeToCompleteInitialization(value: number) {
    this.view.setUint32(44, value, true);
  }

  // 0x30: u32
  set TimeRemainingToCompleteInitialization(value: number) {
    this.view.setUint32(48, value, true);
  }

  // 0x34: u32
  set MinTimeToAuthenticate(value: number) {
    this.view.setUint32(52, value, true);
  }

  // 0x38: u8
  set MaxAdminPasswordSize(value: number) {
    this.view.setUint8(56, value);
  }

  // 0x39: u8
  set MinAdminPasswordSize(value: number) {
    this.view.setUint8(57, value);
  }

  // 0x3a: u8
  set MaxAdminHintSize(value: number) {
    this.view.setUint8(58, value);
  }

  // 0x3b: u8
  set MaxUserPasswordSize(value: number) {
    this.view.setUint8(59, value);
  }

  // 0x3c: u8
  set MinUserPasswordSize(value: number) {
    this.view.setUint8(60, value);
  }

  // 0x3d: u8
  set MaxUserHintSize(value: number) {
    this.view.setUint8(61, value);
  }

  // 0x3e: u8
  set MaxUserNameSize(value: number) {
    this.view.setUint8(62, value);
  }

  // 0x3f: u8
  set MaxSiloNameSize(value: number) {
    this.view.setUint8(63, value);
  }

  // 0x40: u16
  set MaxChallengeSize(value: number) {
    this.view.setUint16(64, value, true);
  }

  // 0x42: pad6
}

/**
 * Windows.Win32.Storage.EnhancedStorage.ACT_AUTHORIZATION_STATE (size: 8)
 */
export interface ACT_AUTHORIZATION_STATE {
  /** u32 */
  ulState: number;
}

export const sizeofACT_AUTHORIZATION_STATE = 8;

export function allocACT_AUTHORIZATION_STATE(data?: Partial<ACT_AUTHORIZATION_STATE>): Uint8Array {
  const buf = new Uint8Array(sizeofACT_AUTHORIZATION_STATE);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.ulState !== undefined) view.setUint32(0, Number(data.ulState), true);
  // 0x04: pad4
  return buf;
}

export class ACT_AUTHORIZATION_STATEView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get ulState(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: pad4

  // 0x00: u32
  set ulState(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: pad4
}

/**
 * Windows.Win32.Storage.EnhancedStorage.SILO_INFO (size: 16)
 */
export interface SILO_INFO {
  /** u32 */
  ulSTID: number;
  /** u8 */
  SpecificationMajor: number;
  /** u8 */
  SpecificationMinor: number;
  /** u8 */
  ImplementationMajor: number;
  /** u8 */
  ImplementationMinor: number;
  /** u8 */
  type: number;
  /** u8 */
  capabilities: number;
}

export const sizeofSILO_INFO = 16;

export function allocSILO_INFO(data?: Partial<SILO_INFO>): Uint8Array {
  const buf = new Uint8Array(sizeofSILO_INFO);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.ulSTID !== undefined) view.setUint32(0, Number(data.ulSTID), true);
  // 0x04: u8
  if (data?.SpecificationMajor !== undefined) view.setUint8(4, Number(data.SpecificationMajor));
  // 0x05: u8
  if (data?.SpecificationMinor !== undefined) view.setUint8(5, Number(data.SpecificationMinor));
  // 0x06: u8
  if (data?.ImplementationMajor !== undefined) view.setUint8(6, Number(data.ImplementationMajor));
  // 0x07: u8
  if (data?.ImplementationMinor !== undefined) view.setUint8(7, Number(data.ImplementationMinor));
  // 0x08: u8
  if (data?.type !== undefined) view.setUint8(8, Number(data.type));
  // 0x09: u8
  if (data?.capabilities !== undefined) view.setUint8(9, Number(data.capabilities));
  // 0x0a: pad6
  return buf;
}

export class SILO_INFOView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get ulSTID(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: u8
  get SpecificationMajor(): number {
    return this.view.getUint8(4);
  }

  // 0x05: u8
  get SpecificationMinor(): number {
    return this.view.getUint8(5);
  }

  // 0x06: u8
  get ImplementationMajor(): number {
    return this.view.getUint8(6);
  }

  // 0x07: u8
  get ImplementationMinor(): number {
    return this.view.getUint8(7);
  }

  // 0x08: u8
  get type(): number {
    return this.view.getUint8(8);
  }

  // 0x09: u8
  get capabilities(): number {
    return this.view.getUint8(9);
  }

  // 0x0a: pad6

  // 0x00: u32
  set ulSTID(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: u8
  set SpecificationMajor(value: number) {
    this.view.setUint8(4, value);
  }

  // 0x05: u8
  set SpecificationMinor(value: number) {
    this.view.setUint8(5, value);
  }

  // 0x06: u8
  set ImplementationMajor(value: number) {
    this.view.setUint8(6, value);
  }

  // 0x07: u8
  set ImplementationMinor(value: number) {
    this.view.setUint8(7, value);
  }

  // 0x08: u8
  set type(value: number) {
    this.view.setUint8(8, value);
  }

  // 0x09: u8
  set capabilities(value: number) {
    this.view.setUint8(9, value);
  }

  // 0x0a: pad6
}

// Native Libraries

// Symbols

