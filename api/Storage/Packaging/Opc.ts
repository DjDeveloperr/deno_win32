/// Auto-generated by Deno Win32: Windows.Win32.Storage.Packaging.Opc.Apis

import * as util from "../../../util.ts";

// Enums
export type OPC_URI_TARGET_MODE = number;
export type OPC_COMPRESSION_OPTIONS = number;
export type OPC_STREAM_IO_MODE = number;
export type OPC_READ_FLAGS = number;
export type OPC_WRITE_FLAGS = number;
export type OPC_SIGNATURE_VALIDATION_RESULT = number;
export type OPC_CANONICALIZATION_METHOD = number;
export type OPC_RELATIONSHIP_SELECTOR = number;
export type OPC_RELATIONSHIPS_SIGNING_OPTION = number;
export type OPC_CERTIFICATE_EMBEDDING_OPTION = number;
export type OPC_SIGNATURE_TIME_FORMAT = number;

// Constants
export const OPC_E_NONCONFORMING_URI = 5836667335428079617n;
export const OPC_E_RELATIVE_URI_REQUIRED = 5836668434939707394n;
export const OPC_E_RELATIONSHIP_URI_REQUIRED = 5836669534451335171n;
export const OPC_E_PART_CANNOT_BE_DIRECTORY = 5836670633962962948n;
export const OPC_E_UNEXPECTED_CONTENT_TYPE = 5836671733474590725n;
export const OPC_E_INVALID_CONTENT_TYPE_XML = 5836672832986218502n;
export const OPC_E_MISSING_CONTENT_TYPES = 5836673932497846279n;
export const OPC_E_NONCONFORMING_CONTENT_TYPES_XML = 5836675032009474056n;
export const OPC_E_NONCONFORMING_RELS_XML = 5836676131521101833n;
export const OPC_E_INVALID_RELS_XML = 5836677231032729610n;
export const OPC_E_DUPLICATE_PART = 5836678330544357387n;
export const OPC_E_INVALID_OVERRIDE_PART_NAME = 5836679430055985164n;
export const OPC_E_DUPLICATE_OVERRIDE_PART = 5836680529567612941n;
export const OPC_E_INVALID_DEFAULT_EXTENSION = 5836681629079240718n;
export const OPC_E_DUPLICATE_DEFAULT_EXTENSION = 5836682728590868495n;
export const OPC_E_INVALID_RELATIONSHIP_ID = 5836683828102496272n;
export const OPC_E_INVALID_RELATIONSHIP_TYPE = 5836684927614124049n;
export const OPC_E_INVALID_RELATIONSHIP_TARGET = 5836686027125751826n;
export const OPC_E_DUPLICATE_RELATIONSHIP = 5836687126637379603n;
export const OPC_E_CONFLICTING_SETTINGS = 5836688226149007380n;
export const OPC_E_DUPLICATE_PIECE = 5836689325660635157n;
export const OPC_E_INVALID_PIECE = 5836690425172262934n;
export const OPC_E_MISSING_PIECE = 5836691524683890711n;
export const OPC_E_NO_SUCH_PART = 5836692624195518488n;
export const OPC_E_DS_SIGNATURE_CORRUPT = 5836693723707146265n;
export const OPC_E_DS_DIGEST_VALUE_ERROR = 5836694823218774042n;
export const OPC_E_DS_DUPLICATE_SIGNATURE_ORIGIN_RELATIONSHIP = 5836695922730401819n;
export const OPC_E_DS_INVALID_SIGNATURE_ORIGIN_RELATIONSHIP = 5836697022242029596n;
export const OPC_E_DS_INVALID_CERTIFICATE_RELATIONSHIP = 5836698121753657373n;
export const OPC_E_DS_EXTERNAL_SIGNATURE = 5836699221265285150n;
export const OPC_E_DS_MISSING_SIGNATURE_ORIGIN_PART = 5836700320776912927n;
export const OPC_E_DS_MISSING_SIGNATURE_PART = 5836701420288540704n;
export const OPC_E_DS_INVALID_RELATIONSHIP_TRANSFORM_XML = 5836702519800168481n;
export const OPC_E_DS_INVALID_CANONICALIZATION_METHOD = 5836703619311796258n;
export const OPC_E_DS_INVALID_RELATIONSHIPS_SIGNING_OPTION = 5836704718823424035n;
export const OPC_E_DS_INVALID_OPC_SIGNATURE_TIME_FORMAT = 5836705818335051812n;
export const OPC_E_DS_PACKAGE_REFERENCE_URI_RESERVED = 5836706917846679589n;
export const OPC_E_DS_MISSING_SIGNATURE_PROPERTIES_ELEMENT = 5836708017358307366n;
export const OPC_E_DS_MISSING_SIGNATURE_PROPERTY_ELEMENT = 5836709116869935143n;
export const OPC_E_DS_DUPLICATE_SIGNATURE_PROPERTY_ELEMENT = 5836710216381562920n;
export const OPC_E_DS_MISSING_SIGNATURE_TIME_PROPERTY = 5836711315893190697n;
export const OPC_E_DS_INVALID_SIGNATURE_XML = 5836712415404818474n;
export const OPC_E_DS_INVALID_SIGNATURE_COUNT = 5836713514916446251n;
export const OPC_E_DS_MISSING_SIGNATURE_ALGORITHM = 5836714614428074028n;
export const OPC_E_DS_DUPLICATE_PACKAGE_OBJECT_REFERENCES = 5836715713939701805n;
export const OPC_E_DS_MISSING_PACKAGE_OBJECT_REFERENCE = 5836716813451329582n;
export const OPC_E_DS_EXTERNAL_SIGNATURE_REFERENCE = 5836717912962957359n;
export const OPC_E_DS_REFERENCE_MISSING_CONTENT_TYPE = 5836719012474585136n;
export const OPC_E_DS_MULTIPLE_RELATIONSHIP_TRANSFORMS = 5836720111986212913n;
export const OPC_E_DS_MISSING_CANONICALIZATION_TRANSFORM = 5836721211497840690n;
export const OPC_E_MC_UNEXPECTED_ELEMENT = 5836722311009468467n;
export const OPC_E_MC_UNEXPECTED_REQUIRES_ATTR = 5836723410521096244n;
export const OPC_E_MC_MISSING_REQUIRES_ATTR = 5836724510032724021n;
export const OPC_E_MC_UNEXPECTED_ATTR = 5836725609544351798n;
export const OPC_E_MC_INVALID_PREFIX_LIST = 5836726709055979575n;
export const OPC_E_MC_INVALID_QNAME_LIST = 5836727808567607352n;
export const OPC_E_MC_NESTED_ALTERNATE_CONTENT = 5836728908079235129n;
export const OPC_E_MC_UNEXPECTED_CHOICE = 5836730007590862906n;
export const OPC_E_MC_MISSING_CHOICE = 5836731107102490683n;
export const OPC_E_MC_INVALID_ENUM_TYPE = 5836733306125746236n;
export const OPC_E_MC_UNKNOWN_NAMESPACE = 5836734405637374014n;
export const OPC_E_MC_UNKNOWN_PREFIX = 5836735505149001791n;
export const OPC_E_MC_INVALID_ATTRIBUTES_ON_IGNORABLE_ELEMENT = 5836736604660629568n;
export const OPC_E_MC_INVALID_XMLNS_ATTRIBUTE = 5836737704172257345n;
export const OPC_E_INVALID_XML_ENCODING = 5836738803683885122n;
export const OPC_E_DS_SIGNATURE_REFERENCE_MISSING_URI = 5836739903195512899n;
export const OPC_E_INVALID_CONTENT_TYPE = 5836741002707140676n;
export const OPC_E_DS_SIGNATURE_PROPERTY_MISSING_TARGET = 5836742102218768453n;
export const OPC_E_DS_SIGNATURE_METHOD_NOT_SET = 5836743201730396230n;
export const OPC_E_DS_DEFAULT_DIGEST_METHOD_NOT_SET = 5836744301242024007n;
export const OPC_E_NO_SUCH_RELATIONSHIP = 5836745400753651784n;
export const OPC_E_MC_MULTIPLE_FALLBACK_ELEMENTS = 5836746500265279561n;
export const OPC_E_MC_INCONSISTENT_PROCESS_CONTENT = 5836747599776907338n;
export const OPC_E_MC_INCONSISTENT_PRESERVE_ATTRIBUTES = 5836748699288535115n;
export const OPC_E_MC_INCONSISTENT_PRESERVE_ELEMENTS = 5836749798800162892n;
export const OPC_E_INVALID_RELATIONSHIP_TARGET_MODE = 5836750898311790669n;
export const OPC_E_COULD_NOT_RECOVER = 5836751997823418446n;
export const OPC_E_UNSUPPORTED_PACKAGE = 5836753097335046223n;
export const OPC_E_ENUM_COLLECTION_CHANGED = 5836754196846674000n;
export const OPC_E_ENUM_CANNOT_MOVE_NEXT = 5836755296358301777n;
export const OPC_E_ENUM_CANNOT_MOVE_PREVIOUS = 5836756395869929554n;
export const OPC_E_ENUM_INVALID_POSITION = 5836757495381557331n;
export const OPC_E_DS_SIGNATURE_ORIGIN_EXISTS = 5836758594893185108n;
export const OPC_E_DS_UNSIGNED_PACKAGE = 5836759694404812885n;
export const OPC_E_DS_MISSING_CERTIFICATE_PART = 5836760793916440662n;
export const OPC_E_NO_SUCH_SETTINGS = 5841169835543822423n;
export const OPC_E_ZIP_INCORRECT_DATA_SIZE = 5841170935055454209n;
export const OPC_E_ZIP_CORRUPTED_ARCHIVE = 5841172034567081986n;
export const OPC_E_ZIP_COMPRESSION_FAILED = 5841173134078709763n;
export const OPC_E_ZIP_DECOMPRESSION_FAILED = 5841174233590337540n;
export const OPC_E_ZIP_INCONSISTENT_FILEITEM = 5841175333101965317n;
export const OPC_E_ZIP_INCONSISTENT_DIRECTORY = 5841176432613593094n;
export const OPC_E_ZIP_MISSING_DATA_DESCRIPTOR = 5841177532125220871n;
export const OPC_E_ZIP_UNSUPPORTEDARCHIVE = 5841178631636848648n;
export const OPC_E_ZIP_CENTRAL_DIRECTORY_TOO_LARGE = 5841179731148476425n;
export const OPC_E_ZIP_NAME_TOO_LARGE = 5841180830660104202n;
export const OPC_E_ZIP_DUPLICATE_NAME = 5841181930171731979n;
export const OPC_E_ZIP_COMMENT_TOO_LARGE = 5841183029683359756n;
export const OPC_E_ZIP_EXTRA_FIELDS_TOO_LARGE = 5841184129194987533n;
export const OPC_E_ZIP_FILE_HEADER_TOO_LARGE = 5841185228706615310n;
export const OPC_E_ZIP_MISSING_END_OF_CENTRAL_DIRECTORY = 5841186328218243087n;
export const OPC_E_ZIP_REQUIRES_64_BIT = 17005593380514762768n;
export const OPC_URI_TARGET_MODE_INTERNAL = 0;
export const OPC_URI_TARGET_MODE_EXTERNAL = 1;
export const OPC_COMPRESSION_NONE = "-1";
export const OPC_COMPRESSION_NORMAL = 0;
export const OPC_COMPRESSION_MAXIMUM = 1;
export const OPC_COMPRESSION_FAST = 2;
export const OPC_COMPRESSION_SUPERFAST = 3;
export const OPC_STREAM_IO_READ = 1;
export const OPC_STREAM_IO_WRITE = 2;
export const OPC_READ_DEFAULT = 0;
export const OPC_VALIDATE_ON_LOAD = 1;
export const OPC_CACHE_ON_ACCESS = 2;
export const OPC_WRITE_DEFAULT = 0;
export const OPC_WRITE_FORCE_ZIP32 = 1;
export const OPC_SIGNATURE_VALID = 0;
export const OPC_SIGNATURE_INVALID = "-1";
export const OPC_CANONICALIZATION_NONE = 0;
export const OPC_CANONICALIZATION_C14N = 1;
export const OPC_CANONICALIZATION_C14N_WITH_COMMENTS = 2;
export const OPC_RELATIONSHIP_SELECT_BY_ID = 0;
export const OPC_RELATIONSHIP_SELECT_BY_TYPE = 1;
export const OPC_RELATIONSHIP_SIGN_USING_SELECTORS = 0;
export const OPC_RELATIONSHIP_SIGN_PART = 1;
export const OPC_CERTIFICATE_IN_CERTIFICATE_PART = 0;
export const OPC_CERTIFICATE_IN_SIGNATURE_PART = 1;
export const OPC_CERTIFICATE_NOT_EMBEDDED = 2;
export const OPC_SIGNATURE_TIME_FORMAT_MILLISECONDS = 0;
export const OPC_SIGNATURE_TIME_FORMAT_SECONDS = 1;
export const OPC_SIGNATURE_TIME_FORMAT_MINUTES = 2;
export const OPC_SIGNATURE_TIME_FORMAT_DAYS = 3;
export const OPC_SIGNATURE_TIME_FORMAT_MONTHS = 4;
export const OPC_SIGNATURE_TIME_FORMAT_YEARS = 5;

// Structs

// Native Libraries

// Symbols
