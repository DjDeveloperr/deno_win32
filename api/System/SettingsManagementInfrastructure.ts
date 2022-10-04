/// Auto-generated by Deno Win32: Windows.Win32.System.SettingsManagementInfrastructure.Apis

import * as util from "../../util.ts";

// Enums
export type WcmTargetMode = number;
export type WcmNamespaceEnumerationFlags = number;
export type WcmDataType = number;
export type WcmSettingType = number;
export type WcmRestrictionFacets = number;
export type WcmUserStatus = number;
export type WcmNamespaceAccess = number;

// Constants
export const WCM_SETTINGS_ID_NAME = `name`;
export const WCM_SETTINGS_ID_VERSION = `version`;
export const WCM_SETTINGS_ID_LANGUAGE = `language`;
export const WCM_SETTINGS_ID_ARCHITECTURE = `architecture`;
export const WCM_SETTINGS_ID_TOKEN = `token`;
export const WCM_SETTINGS_ID_URI = `uri`;
export const WCM_SETTINGS_ID_VERSION_SCOPE = `versionScope`;
export const WCM_SETTINGS_ID_FLAG_REFERENCE = 0;
export const WCM_SETTINGS_ID_FLAG_DEFINITION = 1;
export const LINK_STORE_TO_ENGINE_INSTANCE = 1;
export const LIMITED_VALIDATION_MODE = 1;
export const WCM_E_INTERNALERROR = 2449959316130758656n;
export const WCM_E_STATENODENOTFOUND = 2449960415642386433n;
export const WCM_E_STATENODENOTALLOWED = 2449961515154014210n;
export const WCM_E_ATTRIBUTENOTFOUND = 2449962614665641987n;
export const WCM_E_ATTRIBUTENOTALLOWED = 2449963714177269764n;
export const WCM_E_INVALIDVALUE = 2449964813688897541n;
export const WCM_E_INVALIDVALUEFORMAT = 2449965913200525318n;
export const WCM_E_TYPENOTSPECIFIED = 2449967012712153095n;
export const WCM_E_INVALIDDATATYPE = 2449968112223780872n;
export const WCM_E_NOTPOSITIONED = 2449969211735408649n;
export const WCM_E_READONLYITEM = 2449970311247036426n;
export const WCM_E_INVALIDPATH = 2449971410758664203n;
export const WCM_E_WRONGESCAPESTRING = 2449972510270291980n;
export const WCM_E_INVALIDVERSIONFORMAT = 2449973609781919757n;
export const WCM_E_INVALIDLANGUAGEFORMAT = 2449974709293547534n;
export const WCM_E_KEYNOTCHANGEABLE = 2449975808805175311n;
export const WCM_E_EXPRESSIONNOTFOUND = 2449976908316803088n;
export const WCM_E_SUBSTITUTIONNOTFOUND = 2449978007828430865n;
export const WCM_E_USERALREADYREGISTERED = 2449979107340058642n;
export const WCM_E_USERNOTFOUND = 2449980206851686419n;
export const WCM_E_NAMESPACENOTFOUND = 2449981306363314196n;
export const WCM_E_NAMESPACEALREADYREGISTERED = 2449982405874941973n;
export const WCM_E_STORECORRUPTED = 2449983505386569750n;
export const WCM_E_INVALIDEXPRESSIONSYNTAX = 2449984604898197527n;
export const WCM_E_NOTIFICATIONNOTFOUND = 2449985704409825304n;
export const WCM_E_CONFLICTINGASSERTION = 2449986803921453081n;
export const WCM_E_ASSERTIONFAILED = 2449987903433080858n;
export const WCM_E_DUPLICATENAME = 2449989002944708635n;
export const WCM_E_INVALIDKEY = 2449990102456336412n;
export const WCM_E_INVALIDSTREAM = 2449991201967964189n;
export const WCM_E_HANDLERNOTFOUND = 2449992301479591966n;
export const WCM_E_INVALIDHANDLERSYNTAX = 2449993400991219743n;
export const WCM_E_VALIDATIONFAILED = 2449994500502847520n;
export const WCM_E_RESTRICTIONFAILED = 2449995600014475297n;
export const WCM_E_MANIFESTCOMPILATIONFAILED = 2449996699526103074n;
export const WCM_E_CYCLICREFERENCE = 2449997799037730851n;
export const WCM_E_MIXTYPEASSERTION = 2449998898549358628n;
export const WCM_E_NOTSUPPORTEDFUNCTION = 2449999998060986405n;
export const WCM_E_VALUETOOBIG = 2450001097572614182n;
export const WCM_E_INVALIDATTRIBUTECOMBINATION = 2450002197084241959n;
export const WCM_E_ABORTOPERATION = 2450003296595869736n;
export const WCM_E_MISSINGCONFIGURATION = 2450004396107497513n;
export const WCM_E_INVALIDPROCESSORFORMAT = 2450005495619125290n;
export const WCM_E_SOURCEMANEMPTYVALUE = 2454462915758129195n;
export const WCM_S_INTERNALERROR = 1225823570821779456n;
export const WCM_S_ATTRIBUTENOTFOUND = 2454464013122277377n;
export const WCM_S_LEGACYSETTINGWARNING = 2454466212145532930n;
export const WCM_S_INVALIDATTRIBUTECOMBINATION = 2454467311657160708n;
export const WCM_S_ATTRIBUTENOTALLOWED = 2454468411168788485n;
export const WCM_S_NAMESPACENOTFOUND = 2454465112633905158n;
export const WCM_E_UNKNOWNRESULT = 1226386531512619011n;
export const OfflineMode = 1;
export const OnlineMode = 2;
export const SharedEnumeration = 1;
export const UserEnumeration = 2;
export const AllEnumeration = 3;
export const dataTypeByte = 1;
export const dataTypeSByte = 2;
export const dataTypeUInt16 = 3;
export const dataTypeInt16 = 4;
export const dataTypeUInt32 = 5;
export const dataTypeInt32 = 6;
export const dataTypeUInt64 = 7;
export const dataTypeInt64 = 8;
export const dataTypeBoolean = 11;
export const dataTypeString = 12;
export const dataTypeFlagArray = 32768;
export const settingTypeScalar = 1;
export const settingTypeComplex = 2;
export const settingTypeList = 3;
export const restrictionFacetMaxLength = 1;
export const restrictionFacetEnumeration = 2;
export const restrictionFacetMaxInclusive = 4;
export const restrictionFacetMinInclusive = 8;
export const UnknownStatus = 0;
export const UserRegistered = 1;
export const UserUnregistered = 2;
export const UserLoaded = 3;
export const UserUnloaded = 4;
export const ReadOnlyAccess = 1;
export const ReadWriteAccess = 2;

// Structs

// Native Libraries

// Symbols

