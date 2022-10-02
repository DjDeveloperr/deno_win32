/// Auto-generated by Deno Win32: Windows.Win32.System.MessageQueuing.Apis

import * as util from "../../util.ts";

// Enums
export type MQCALG = number;
export type MQTRANSACTION = number;
export type RELOPS = number;
export type MQCERT_REGISTER = number;
export type MQMSGCURSOR = number;
export type MQMSGCLASS = number;
export type MQMSGDELIVERY = number;
export type MQMSGACKNOWLEDGEMENT = number;
export type MQMSGJOURNAL = number;
export type MQMSGTRACE = number;
export type MQMSGSENDERIDTYPE = number;
export type MQMSGPRIVLEVEL = number;
export type MQMSGAUTHLEVEL = number;
export type MQMSGIDSIZE = number;
export type MQMSGMAX = number;
export type MQMSGAUTHENTICATION = number;
export type MQSHARE = number;
export type MQACCESS = number;
export type MQJOURNAL = number;
export type MQTRANSACTIONAL = number;
export type MQAUTHENTICATE = number;
export type MQPRIVLEVEL = number;
export type MQPRIORITY = number;
export type MQMAX = number;
export type QUEUE_TYPE = number;
export type FOREIGN_STATUS = number;
export type XACT_STATUS = number;
export type QUEUE_STATE = number;
export type MQDEFAULT = number;
export type MQERROR = number;
export type MQWARNING = number;

// Constants
export const PRLT = 0;
export const PRLE = 1;
export const PRGT = 2;
export const PRGE = 3;
export const PREQ = 4;
export const PRNE = 5;
export const QUERY_SORTASCEND = 0;
export const QUERY_SORTDESCEND = 1;
export const MQ_MOVE_ACCESS = 4;
export const MQ_ACTION_RECEIVE = 0;
export const MQ_ACTION_PEEK_CURRENT = 2147483648;
export const MQ_ACTION_PEEK_NEXT = 2147483649;
export const MQ_LOOKUP_PEEK_CURRENT = 1073741840;
export const MQ_LOOKUP_PEEK_NEXT = 1073741841;
export const MQ_LOOKUP_PEEK_PREV = 1073741842;
export const MQ_LOOKUP_PEEK_FIRST = 1073741844;
export const MQ_LOOKUP_PEEK_LAST = 1073741848;
export const MQ_LOOKUP_RECEIVE_CURRENT = 1073741856;
export const MQ_LOOKUP_RECEIVE_NEXT = 1073741857;
export const MQ_LOOKUP_RECEIVE_PREV = 1073741858;
export const MQ_LOOKUP_RECEIVE_FIRST = 1073741860;
export const MQ_LOOKUP_RECEIVE_LAST = 1073741864;
export const MQ_LOOKUP_RECEIVE_ALLOW_PEEK = 1073742112;
export const PROPID_M_BASE = 0;
export const PROPID_M_CLASS = 1;
export const PROPID_M_MSGID = 2;
export const PROPID_M_CORRELATIONID = 3;
export const PROPID_M_PRIORITY = 4;
export const PROPID_M_DELIVERY = 5;
export const PROPID_M_ACKNOWLEDGE = 6;
export const PROPID_M_JOURNAL = 7;
export const PROPID_M_APPSPECIFIC = 8;
export const PROPID_M_BODY = 9;
export const PROPID_M_BODY_SIZE = 10;
export const PROPID_M_LABEL = 11;
export const PROPID_M_LABEL_LEN = 12;
export const PROPID_M_TIME_TO_REACH_QUEUE = 13;
export const PROPID_M_TIME_TO_BE_RECEIVED = 14;
export const PROPID_M_RESP_QUEUE = 15;
export const PROPID_M_RESP_QUEUE_LEN = 16;
export const PROPID_M_ADMIN_QUEUE = 17;
export const PROPID_M_ADMIN_QUEUE_LEN = 18;
export const PROPID_M_VERSION = 19;
export const PROPID_M_SENDERID = 20;
export const PROPID_M_SENDERID_LEN = 21;
export const PROPID_M_SENDERID_TYPE = 22;
export const PROPID_M_PRIV_LEVEL = 23;
export const PROPID_M_AUTH_LEVEL = 24;
export const PROPID_M_AUTHENTICATED = 25;
export const PROPID_M_HASH_ALG = 26;
export const PROPID_M_ENCRYPTION_ALG = 27;
export const PROPID_M_SENDER_CERT = 28;
export const PROPID_M_SENDER_CERT_LEN = 29;
export const PROPID_M_SRC_MACHINE_ID = 30;
export const PROPID_M_SENTTIME = 31;
export const PROPID_M_ARRIVEDTIME = 32;
export const PROPID_M_DEST_QUEUE = 33;
export const PROPID_M_DEST_QUEUE_LEN = 34;
export const PROPID_M_EXTENSION = 35;
export const PROPID_M_EXTENSION_LEN = 36;
export const PROPID_M_SECURITY_CONTEXT = 37;
export const PROPID_M_CONNECTOR_TYPE = 38;
export const PROPID_M_XACT_STATUS_QUEUE = 39;
export const PROPID_M_XACT_STATUS_QUEUE_LEN = 40;
export const PROPID_M_TRACE = 41;
export const PROPID_M_BODY_TYPE = 42;
export const PROPID_M_DEST_SYMM_KEY = 43;
export const PROPID_M_DEST_SYMM_KEY_LEN = 44;
export const PROPID_M_SIGNATURE = 45;
export const PROPID_M_SIGNATURE_LEN = 46;
export const PROPID_M_PROV_TYPE = 47;
export const PROPID_M_PROV_NAME = 48;
export const PROPID_M_PROV_NAME_LEN = 49;
export const PROPID_M_FIRST_IN_XACT = 50;
export const PROPID_M_LAST_IN_XACT = 51;
export const PROPID_M_XACTID = 52;
export const PROPID_M_AUTHENTICATED_EX = 53;
export const PROPID_M_RESP_FORMAT_NAME = 54;
export const PROPID_M_RESP_FORMAT_NAME_LEN = 55;
export const PROPID_M_DEST_FORMAT_NAME = 58;
export const PROPID_M_DEST_FORMAT_NAME_LEN = 59;
export const PROPID_M_LOOKUPID = 60;
export const PROPID_M_SOAP_ENVELOPE = 61;
export const PROPID_M_SOAP_ENVELOPE_LEN = 62;
export const PROPID_M_COMPOUND_MESSAGE = 63;
export const PROPID_M_COMPOUND_MESSAGE_SIZE = 64;
export const PROPID_M_SOAP_HEADER = 65;
export const PROPID_M_SOAP_BODY = 66;
export const PROPID_M_DEADLETTER_QUEUE = 67;
export const PROPID_M_DEADLETTER_QUEUE_LEN = 68;
export const PROPID_M_ABORT_COUNT = 69;
export const PROPID_M_MOVE_COUNT = 70;
export const PROPID_M_LAST_MOVE_TIME = 75;
export const PROPID_M_MSGID_SIZE = 20;
export const PROPID_M_CORRELATIONID_SIZE = 20;
export const PROPID_M_XACTID_SIZE = 20;
export const MQMSG_PRIV_LEVEL_BODY_AES = 5;
export const MQMSG_AUTHENTICATED_QM_MESSAGE = 11;
export const MQMSG_NOT_FIRST_IN_XACT = 0;
export const MQMSG_FIRST_IN_XACT = 1;
export const MQMSG_NOT_LAST_IN_XACT = 0;
export const MQMSG_LAST_IN_XACT = 1;
export const PROPID_Q_BASE = 100;
export const PROPID_Q_INSTANCE = 101;
export const PROPID_Q_TYPE = 102;
export const PROPID_Q_PATHNAME = 103;
export const PROPID_Q_JOURNAL = 104;
export const PROPID_Q_QUOTA = 105;
export const PROPID_Q_BASEPRIORITY = 106;
export const PROPID_Q_JOURNAL_QUOTA = 107;
export const PROPID_Q_LABEL = 108;
export const PROPID_Q_CREATE_TIME = 109;
export const PROPID_Q_MODIFY_TIME = 110;
export const PROPID_Q_AUTHENTICATE = 111;
export const PROPID_Q_PRIV_LEVEL = 112;
export const PROPID_Q_TRANSACTION = 113;
export const PROPID_Q_PATHNAME_DNS = 124;
export const PROPID_Q_MULTICAST_ADDRESS = 125;
export const PROPID_Q_ADS_PATH = 126;
export const PROPID_QM_BASE = 200;
export const PROPID_QM_SITE_ID = 201;
export const PROPID_QM_MACHINE_ID = 202;
export const PROPID_QM_PATHNAME = 203;
export const PROPID_QM_CONNECTION = 204;
export const PROPID_QM_ENCRYPTION_PK = 205;
export const PROPID_QM_ENCRYPTION_PK_BASE = 231;
export const PROPID_QM_ENCRYPTION_PK_ENHANCED = 232;
export const PROPID_QM_PATHNAME_DNS = 233;
export const PROPID_QM_ENCRYPTION_PK_AES = 244;
export const PROPID_PC_BASE = 5800;
export const PROPID_PC_VERSION = 5801;
export const PROPID_PC_DS_ENABLED = 5802;
export const PROPID_MGMT_MSMQ_BASE = 0;
export const PROPID_MGMT_MSMQ_ACTIVEQUEUES = 1;
export const PROPID_MGMT_MSMQ_PRIVATEQ = 2;
export const PROPID_MGMT_MSMQ_DSSERVER = 3;
export const PROPID_MGMT_MSMQ_CONNECTED = 4;
export const PROPID_MGMT_MSMQ_TYPE = 5;
export const PROPID_MGMT_MSMQ_BYTES_IN_ALL_QUEUES = 6;
export const PROPID_MGMT_QUEUE_BASE = 0;
export const PROPID_MGMT_QUEUE_PATHNAME = 1;
export const PROPID_MGMT_QUEUE_FORMATNAME = 2;
export const PROPID_MGMT_QUEUE_TYPE = 3;
export const PROPID_MGMT_QUEUE_LOCATION = 4;
export const PROPID_MGMT_QUEUE_XACT = 5;
export const PROPID_MGMT_QUEUE_FOREIGN = 6;
export const PROPID_MGMT_QUEUE_MESSAGE_COUNT = 7;
export const PROPID_MGMT_QUEUE_BYTES_IN_QUEUE = 8;
export const PROPID_MGMT_QUEUE_JOURNAL_MESSAGE_COUNT = 9;
export const PROPID_MGMT_QUEUE_BYTES_IN_JOURNAL = 10;
export const PROPID_MGMT_QUEUE_STATE = 11;
export const PROPID_MGMT_QUEUE_NEXTHOPS = 12;
export const PROPID_MGMT_QUEUE_EOD_LAST_ACK = 13;
export const PROPID_MGMT_QUEUE_EOD_LAST_ACK_TIME = 14;
export const PROPID_MGMT_QUEUE_EOD_LAST_ACK_COUNT = 15;
export const PROPID_MGMT_QUEUE_EOD_FIRST_NON_ACK = 16;
export const PROPID_MGMT_QUEUE_EOD_LAST_NON_ACK = 17;
export const PROPID_MGMT_QUEUE_EOD_NEXT_SEQ = 18;
export const PROPID_MGMT_QUEUE_EOD_NO_READ_COUNT = 19;
export const PROPID_MGMT_QUEUE_EOD_NO_ACK_COUNT = 20;
export const PROPID_MGMT_QUEUE_EOD_RESEND_TIME = 21;
export const PROPID_MGMT_QUEUE_EOD_RESEND_INTERVAL = 22;
export const PROPID_MGMT_QUEUE_EOD_RESEND_COUNT = 23;
export const PROPID_MGMT_QUEUE_EOD_SOURCE_INFO = 24;
export const PROPID_MGMT_QUEUE_CONNECTION_HISTORY = 25;
export const PROPID_MGMT_QUEUE_SUBQUEUE_COUNT = 26;
export const PROPID_MGMT_QUEUE_SUBQUEUE_NAMES = 27;
export const PROPID_MGMT_QUEUE_USED_QUOTA = 8;
export const PROPID_MGMT_QUEUE_JOURNAL_USED_QUOTA = 10;
export const LONG_LIVED = 4294967294;
export const MQSEC_DELETE_MESSAGE = 1;
export const MQSEC_PEEK_MESSAGE = 2;
export const MQSEC_WRITE_MESSAGE = 4;
export const MQSEC_DELETE_JOURNAL_MESSAGE = 8;
export const MQSEC_SET_QUEUE_PROPERTIES = 16;
export const MQSEC_GET_QUEUE_PROPERTIES = 32;
export const MQSEC_DELETE_QUEUE = 65536;
export const MQSEC_CHANGE_QUEUE_PERMISSIONS = 262144;
export const MQSEC_TAKE_QUEUE_OWNERSHIP = 524288;
export const MQSEC_QUEUE_GENERIC_EXECUTE = 0;
export const MQ_OK = 72057611217797120n;
export const MQ_ERROR_RESOLVE_ADDRESS = 1008975661723680921n;
export const MQ_ERROR_TOO_MANY_PROPERTIES = 1008976761235308698n;
export const MQ_ERROR_MESSAGE_NOT_AUTHENTICATED = 1008977860746936475n;
export const MQ_ERROR_MESSAGE_LOCKED_UNDER_TRANSACTION = 1801441039581315228n;
export const MQMSG_CALG_MD2 = 32769;
export const MQMSG_CALG_MD4 = 32770;
export const MQMSG_CALG_MD5 = 32771;
export const MQMSG_CALG_SHA = 32772;
export const MQMSG_CALG_SHA1 = 32772;
export const MQMSG_CALG_MAC = 32773;
export const MQMSG_CALG_RSA_SIGN = 9216;
export const MQMSG_CALG_DSS_SIGN = 8704;
export const MQMSG_CALG_RSA_KEYX = 41984;
export const MQMSG_CALG_DES = 26113;
export const MQMSG_CALG_RC2 = 26114;
export const MQMSG_CALG_RC4 = 26625;
export const MQMSG_CALG_SEAL = 26626;
export const MQ_NO_TRANSACTION = 0;
export const MQ_MTS_TRANSACTION = 1;
export const MQ_XA_TRANSACTION = 2;
export const MQ_SINGLE_MESSAGE = 3;
export const REL_NOP = 0;
export const REL_EQ = 1;
export const REL_NEQ = 2;
export const REL_LT = 3;
export const REL_GT = 4;
export const REL_LE = 5;
export const REL_GE = 6;
export const MQCERT_REGISTER_ALWAYS = 1;
export const MQCERT_REGISTER_IF_NOT_EXIST = 2;
export const MQMSG_FIRST = 0;
export const MQMSG_CURRENT = 1;
export const MQMSG_NEXT = 2;
export const MQMSG_CLASS_NORMAL = 0;
export const MQMSG_CLASS_REPORT = 1;
export const MQMSG_CLASS_ACK_REACH_QUEUE = 2;
export const MQMSG_CLASS_ACK_RECEIVE = 16384;
export const MQMSG_CLASS_NACK_BAD_DST_Q = 32768;
export const MQMSG_CLASS_NACK_PURGED = 32769;
export const MQMSG_CLASS_NACK_REACH_QUEUE_TIMEOUT = 32770;
export const MQMSG_CLASS_NACK_Q_EXCEED_QUOTA = 32771;
export const MQMSG_CLASS_NACK_ACCESS_DENIED = 32772;
export const MQMSG_CLASS_NACK_HOP_COUNT_EXCEEDED = 32773;
export const MQMSG_CLASS_NACK_BAD_SIGNATURE = 32774;
export const MQMSG_CLASS_NACK_BAD_ENCRYPTION = 32775;
export const MQMSG_CLASS_NACK_COULD_NOT_ENCRYPT = 32776;
export const MQMSG_CLASS_NACK_NOT_TRANSACTIONAL_Q = 32777;
export const MQMSG_CLASS_NACK_NOT_TRANSACTIONAL_MSG = 32778;
export const MQMSG_CLASS_NACK_UNSUPPORTED_CRYPTO_PROVIDER = 32779;
export const MQMSG_CLASS_NACK_SOURCE_COMPUTER_GUID_CHANGED = 32780;
export const MQMSG_CLASS_NACK_Q_DELETED = 49152;
export const MQMSG_CLASS_NACK_Q_PURGED = 49153;
export const MQMSG_CLASS_NACK_RECEIVE_TIMEOUT = 49154;
export const MQMSG_CLASS_NACK_RECEIVE_TIMEOUT_AT_SENDER = 49155;
export const MQMSG_DELIVERY_EXPRESS = 0;
export const MQMSG_DELIVERY_RECOVERABLE = 1;
export const MQMSG_ACKNOWLEDGMENT_NONE = 0;
export const MQMSG_ACKNOWLEDGMENT_POS_ARRIVAL = 1;
export const MQMSG_ACKNOWLEDGMENT_POS_RECEIVE = 2;
export const MQMSG_ACKNOWLEDGMENT_NEG_ARRIVAL = 4;
export const MQMSG_ACKNOWLEDGMENT_NEG_RECEIVE = 8;
export const MQMSG_ACKNOWLEDGMENT_NACK_REACH_QUEUE = 4;
export const MQMSG_ACKNOWLEDGMENT_FULL_REACH_QUEUE = 5;
export const MQMSG_ACKNOWLEDGMENT_NACK_RECEIVE = 12;
export const MQMSG_ACKNOWLEDGMENT_FULL_RECEIVE = 14;
export const MQMSG_JOURNAL_NONE = 0;
export const MQMSG_DEADLETTER = 1;
export const MQMSG_JOURNAL = 2;
export const MQMSG_TRACE_NONE = 0;
export const MQMSG_SEND_ROUTE_TO_REPORT_QUEUE = 1;
export const MQMSG_SENDERID_TYPE_NONE = 0;
export const MQMSG_SENDERID_TYPE_SID = 1;
export const MQMSG_PRIV_LEVEL_NONE = 0;
export const MQMSG_PRIV_LEVEL_BODY_BASE = 1;
export const MQMSG_PRIV_LEVEL_BODY_ENHANCED = 3;
export const MQMSG_AUTH_LEVEL_NONE = 0;
export const MQMSG_AUTH_LEVEL_ALWAYS = 1;
export const MQMSG_AUTH_LEVEL_MSMQ10 = 2;
export const MQMSG_AUTH_LEVEL_SIG10 = 2;
export const MQMSG_AUTH_LEVEL_MSMQ20 = 4;
export const MQMSG_AUTH_LEVEL_SIG20 = 4;
export const MQMSG_AUTH_LEVEL_SIG30 = 8;
export const MQMSG_MSGID_SIZE = 20;
export const MQMSG_CORRELATIONID_SIZE = 20;
export const MQMSG_XACTID_SIZE = 20;
export const MQ_MAX_MSG_LABEL_LEN = 249;
export const MQMSG_AUTHENTICATION_NOT_REQUESTED = 0;
export const MQMSG_AUTHENTICATION_REQUESTED = 1;
export const MQMSG_AUTHENTICATED_SIG10 = 1;
export const MQMSG_AUTHENTICATION_REQUESTED_EX = 3;
export const MQMSG_AUTHENTICATED_SIG20 = 3;
export const MQMSG_AUTHENTICATED_SIG30 = 5;
export const MQMSG_AUTHENTICATED_SIGXML = 9;
export const MQ_DENY_NONE = 0;
export const MQ_DENY_RECEIVE_SHARE = 1;
export const MQ_RECEIVE_ACCESS = 1;
export const MQ_SEND_ACCESS = 2;
export const MQ_PEEK_ACCESS = 32;
export const MQ_ADMIN_ACCESS = 128;
export const MQ_JOURNAL_NONE = 0;
export const MQ_JOURNAL = 1;
export const MQ_TRANSACTIONAL_NONE = 0;
export const MQ_TRANSACTIONAL = 1;
export const MQ_AUTHENTICATE_NONE = 0;
export const MQ_AUTHENTICATE = 1;
export const MQ_PRIV_LEVEL_NONE = 0;
export const MQ_PRIV_LEVEL_OPTIONAL = 1;
export const MQ_PRIV_LEVEL_BODY = 2;
export const MQ_MIN_PRIORITY = 0;
export const MQ_MAX_PRIORITY = 7;
export const MQ_MAX_Q_NAME_LEN = 124;
export const MQ_MAX_Q_LABEL_LEN = 124;
export const MQ_TYPE_PUBLIC = 0;
export const MQ_TYPE_PRIVATE = 1;
export const MQ_TYPE_MACHINE = 2;
export const MQ_TYPE_CONNECTOR = 3;
export const MQ_TYPE_MULTICAST = 4;
export const MQ_STATUS_FOREIGN = 0;
export const MQ_STATUS_NOT_FOREIGN = 1;
export const MQ_STATUS_UNKNOWN = 2;
export const MQ_XACT_STATUS_XACT = 0;
export const MQ_XACT_STATUS_NOT_XACT = 1;
export const MQ_XACT_STATUS_UNKNOWN = 2;
export const MQ_QUEUE_STATE_LOCAL_CONNECTION = 0;
export const MQ_QUEUE_STATE_DISCONNECTED = 1;
export const MQ_QUEUE_STATE_WAITING = 2;
export const MQ_QUEUE_STATE_NEEDVALIDATE = 3;
export const MQ_QUEUE_STATE_ONHOLD = 4;
export const MQ_QUEUE_STATE_NONACTIVE = 5;
export const MQ_QUEUE_STATE_CONNECTED = 6;
export const MQ_QUEUE_STATE_DISCONNECTING = 7;
export const MQ_QUEUE_STATE_LOCKED = 8;
export const DEFAULT_M_PRIORITY = 3;
export const DEFAULT_M_DELIVERY = 0;
export const DEFAULT_M_ACKNOWLEDGE = 0;
export const DEFAULT_M_JOURNAL = 0;
export const DEFAULT_M_APPSPECIFIC = 0;
export const DEFAULT_M_PRIV_LEVEL = 0;
export const DEFAULT_M_AUTH_LEVEL = 0;
export const DEFAULT_M_SENDERID_TYPE = 1;
export const DEFAULT_Q_JOURNAL = 0;
export const DEFAULT_Q_BASEPRIORITY = 0;
export const DEFAULT_Q_QUOTA = "-1";
export const DEFAULT_Q_JOURNAL_QUOTA = "-1";
export const DEFAULT_Q_TRANSACTION = 0;
export const DEFAULT_Q_AUTHENTICATE = 0;
export const DEFAULT_Q_PRIV_LEVEL = 1;
export const DEFAULT_M_LOOKUPID = 0;
export const MQ_ERROR = "-1072824319";
export const MQ_ERROR_PROPERTY = "-1072824318";
export const MQ_ERROR_QUEUE_NOT_FOUND = "-1072824317";
export const MQ_ERROR_QUEUE_NOT_ACTIVE = "-1072824316";
export const MQ_ERROR_QUEUE_EXISTS = "-1072824315";
export const MQ_ERROR_INVALID_PARAMETER = "-1072824314";
export const MQ_ERROR_INVALID_HANDLE = "-1072824313";
export const MQ_ERROR_OPERATION_CANCELLED = "-1072824312";
export const MQ_ERROR_SHARING_VIOLATION = "-1072824311";
export const MQ_ERROR_SERVICE_NOT_AVAILABLE = "-1072824309";
export const MQ_ERROR_MACHINE_NOT_FOUND = "-1072824307";
export const MQ_ERROR_ILLEGAL_SORT = "-1072824304";
export const MQ_ERROR_ILLEGAL_USER = "-1072824303";
export const MQ_ERROR_NO_DS = "-1072824301";
export const MQ_ERROR_ILLEGAL_QUEUE_PATHNAME = "-1072824300";
export const MQ_ERROR_ILLEGAL_PROPERTY_VALUE = "-1072824296";
export const MQ_ERROR_ILLEGAL_PROPERTY_VT = "-1072824295";
export const MQ_ERROR_BUFFER_OVERFLOW = "-1072824294";
export const MQ_ERROR_IO_TIMEOUT = "-1072824293";
export const MQ_ERROR_ILLEGAL_CURSOR_ACTION = "-1072824292";
export const MQ_ERROR_MESSAGE_ALREADY_RECEIVED = "-1072824291";
export const MQ_ERROR_ILLEGAL_FORMATNAME = "-1072824290";
export const MQ_ERROR_FORMATNAME_BUFFER_TOO_SMALL = "-1072824289";
export const MQ_ERROR_UNSUPPORTED_FORMATNAME_OPERATION = "-1072824288";
export const MQ_ERROR_ILLEGAL_SECURITY_DESCRIPTOR = "-1072824287";
export const MQ_ERROR_SENDERID_BUFFER_TOO_SMALL = "-1072824286";
export const MQ_ERROR_SECURITY_DESCRIPTOR_TOO_SMALL = "-1072824285";
export const MQ_ERROR_CANNOT_IMPERSONATE_CLIENT = "-1072824284";
export const MQ_ERROR_ACCESS_DENIED = "-1072824283";
export const MQ_ERROR_PRIVILEGE_NOT_HELD = "-1072824282";
export const MQ_ERROR_INSUFFICIENT_RESOURCES = "-1072824281";
export const MQ_ERROR_USER_BUFFER_TOO_SMALL = "-1072824280";
export const MQ_ERROR_MESSAGE_STORAGE_FAILED = "-1072824278";
export const MQ_ERROR_SENDER_CERT_BUFFER_TOO_SMALL = "-1072824277";
export const MQ_ERROR_INVALID_CERTIFICATE = "-1072824276";
export const MQ_ERROR_CORRUPTED_INTERNAL_CERTIFICATE = "-1072824275";
export const MQ_ERROR_INTERNAL_USER_CERT_EXIST = "-1072824274";
export const MQ_ERROR_NO_INTERNAL_USER_CERT = "-1072824273";
export const MQ_ERROR_CORRUPTED_SECURITY_DATA = "-1072824272";
export const MQ_ERROR_CORRUPTED_PERSONAL_CERT_STORE = "-1072824271";
export const MQ_ERROR_COMPUTER_DOES_NOT_SUPPORT_ENCRYPTION = "-1072824269";
export const MQ_ERROR_BAD_SECURITY_CONTEXT = "-1072824267";
export const MQ_ERROR_COULD_NOT_GET_USER_SID = "-1072824266";
export const MQ_ERROR_COULD_NOT_GET_ACCOUNT_INFO = "-1072824265";
export const MQ_ERROR_ILLEGAL_MQCOLUMNS = "-1072824264";
export const MQ_ERROR_ILLEGAL_PROPID = "-1072824263";
export const MQ_ERROR_ILLEGAL_RELATION = "-1072824262";
export const MQ_ERROR_ILLEGAL_PROPERTY_SIZE = "-1072824261";
export const MQ_ERROR_ILLEGAL_RESTRICTION_PROPID = "-1072824260";
export const MQ_ERROR_ILLEGAL_MQQUEUEPROPS = "-1072824259";
export const MQ_ERROR_PROPERTY_NOTALLOWED = "-1072824258";
export const MQ_ERROR_INSUFFICIENT_PROPERTIES = "-1072824257";
export const MQ_ERROR_MACHINE_EXISTS = "-1072824256";
export const MQ_ERROR_ILLEGAL_MQQMPROPS = "-1072824255";
export const MQ_ERROR_DS_IS_FULL = "-1072824254";
export const MQ_ERROR_DS_ERROR = "-1072824253";
export const MQ_ERROR_INVALID_OWNER = "-1072824252";
export const MQ_ERROR_UNSUPPORTED_ACCESS_MODE = "-1072824251";
export const MQ_ERROR_RESULT_BUFFER_TOO_SMALL = "-1072824250";
export const MQ_ERROR_DELETE_CN_IN_USE = "-1072824248";
export const MQ_ERROR_NO_RESPONSE_FROM_OBJECT_SERVER = "-1072824247";
export const MQ_ERROR_OBJECT_SERVER_NOT_AVAILABLE = "-1072824246";
export const MQ_ERROR_QUEUE_NOT_AVAILABLE = "-1072824245";
export const MQ_ERROR_DTC_CONNECT = "-1072824244";
export const MQ_ERROR_TRANSACTION_IMPORT = "-1072824242";
export const MQ_ERROR_TRANSACTION_USAGE = "-1072824240";
export const MQ_ERROR_TRANSACTION_SEQUENCE = "-1072824239";
export const MQ_ERROR_MISSING_CONNECTOR_TYPE = "-1072824235";
export const MQ_ERROR_STALE_HANDLE = "-1072824234";
export const MQ_ERROR_TRANSACTION_ENLIST = "-1072824232";
export const MQ_ERROR_QUEUE_DELETED = "-1072824230";
export const MQ_ERROR_ILLEGAL_CONTEXT = "-1072824229";
export const MQ_ERROR_ILLEGAL_SORT_PROPID = "-1072824228";
export const MQ_ERROR_LABEL_TOO_LONG = "-1072824227";
export const MQ_ERROR_LABEL_BUFFER_TOO_SMALL = "-1072824226";
export const MQ_ERROR_MQIS_SERVER_EMPTY = "-1072824225";
export const MQ_ERROR_MQIS_READONLY_MODE = "-1072824224";
export const MQ_ERROR_SYMM_KEY_BUFFER_TOO_SMALL = "-1072824223";
export const MQ_ERROR_SIGNATURE_BUFFER_TOO_SMALL = "-1072824222";
export const MQ_ERROR_PROV_NAME_BUFFER_TOO_SMALL = "-1072824221";
export const MQ_ERROR_ILLEGAL_OPERATION = "-1072824220";
export const MQ_ERROR_WRITE_NOT_ALLOWED = "-1072824219";
export const MQ_ERROR_WKS_CANT_SERVE_CLIENT = "-1072824218";
export const MQ_ERROR_DEPEND_WKS_LICENSE_OVERFLOW = "-1072824217";
export const MQ_CORRUPTED_QUEUE_WAS_DELETED = "-1072824216";
export const MQ_ERROR_REMOTE_MACHINE_NOT_AVAILABLE = "-1072824215";
export const MQ_ERROR_UNSUPPORTED_OPERATION = "-1072824214";
export const MQ_ERROR_ENCRYPTION_PROVIDER_NOT_SUPPORTED = "-1072824213";
export const MQ_ERROR_CANNOT_SET_CRYPTO_SEC_DESCR = "-1072824212";
export const MQ_ERROR_CERTIFICATE_NOT_PROVIDED = "-1072824211";
export const MQ_ERROR_Q_DNS_PROPERTY_NOT_SUPPORTED = "-1072824210";
export const MQ_ERROR_CANT_CREATE_CERT_STORE = "-1072824209";
export const MQ_ERROR_CANNOT_CREATE_CERT_STORE = "-1072824209";
export const MQ_ERROR_CANT_OPEN_CERT_STORE = "-1072824208";
export const MQ_ERROR_CANNOT_OPEN_CERT_STORE = "-1072824208";
export const MQ_ERROR_ILLEGAL_ENTERPRISE_OPERATION = "-1072824207";
export const MQ_ERROR_CANNOT_GRANT_ADD_GUID = "-1072824206";
export const MQ_ERROR_CANNOT_LOAD_MSMQOCM = "-1072824205";
export const MQ_ERROR_NO_ENTRY_POINT_MSMQOCM = "-1072824204";
export const MQ_ERROR_NO_MSMQ_SERVERS_ON_DC = "-1072824203";
export const MQ_ERROR_CANNOT_JOIN_DOMAIN = "-1072824202";
export const MQ_ERROR_CANNOT_CREATE_ON_GC = "-1072824201";
export const MQ_ERROR_GUID_NOT_MATCHING = "-1072824200";
export const MQ_ERROR_PUBLIC_KEY_NOT_FOUND = "-1072824199";
export const MQ_ERROR_PUBLIC_KEY_DOES_NOT_EXIST = "-1072824198";
export const MQ_ERROR_ILLEGAL_MQPRIVATEPROPS = "-1072824197";
export const MQ_ERROR_NO_GC_IN_DOMAIN = "-1072824196";
export const MQ_ERROR_NO_MSMQ_SERVERS_ON_GC = "-1072824195";
export const MQ_ERROR_CANNOT_GET_DN = "-1072824194";
export const MQ_ERROR_CANNOT_HASH_DATA_EX = "-1072824193";
export const MQ_ERROR_CANNOT_SIGN_DATA_EX = "-1072824192";
export const MQ_ERROR_CANNOT_CREATE_HASH_EX = "-1072824191";
export const MQ_ERROR_FAIL_VERIFY_SIGNATURE_EX = "-1072824190";
export const MQ_ERROR_CANNOT_DELETE_PSC_OBJECTS = "-1072824189";
export const MQ_ERROR_NO_MQUSER_OU = "-1072824188";
export const MQ_ERROR_CANNOT_LOAD_MQAD = "-1072824187";
export const MQ_ERROR_CANNOT_LOAD_MQDSSRV = "-1072824186";
export const MQ_ERROR_PROPERTIES_CONFLICT = "-1072824185";
export const MQ_ERROR_MESSAGE_NOT_FOUND = "-1072824184";
export const MQ_ERROR_CANT_RESOLVE_SITES = "-1072824183";
export const MQ_ERROR_NOT_SUPPORTED_BY_DEPENDENT_CLIENTS = "-1072824182";
export const MQ_ERROR_OPERATION_NOT_SUPPORTED_BY_REMOTE_COMPUTER = "-1072824181";
export const MQ_ERROR_NOT_A_CORRECT_OBJECT_CLASS = "-1072824180";
export const MQ_ERROR_MULTI_SORT_KEYS = "-1072824179";
export const MQ_ERROR_GC_NEEDED = "-1072824178";
export const MQ_ERROR_DS_BIND_ROOT_FOREST = "-1072824177";
export const MQ_ERROR_DS_LOCAL_USER = "-1072824176";
export const MQ_ERROR_Q_ADS_PROPERTY_NOT_SUPPORTED = "-1072824175";
export const MQ_ERROR_BAD_XML_FORMAT = "-1072824174";
export const MQ_ERROR_UNSUPPORTED_CLASS = "-1072824173";
export const MQ_ERROR_UNINITIALIZED_OBJECT = "-1072824172";
export const MQ_ERROR_CANNOT_CREATE_PSC_OBJECTS = "-1072824171";
export const MQ_ERROR_CANNOT_UPDATE_PSC_OBJECTS = "-1072824170";
export const MQ_INFORMATION_PROPERTY = 1074659329;
export const MQ_INFORMATION_ILLEGAL_PROPERTY = 1074659330;
export const MQ_INFORMATION_PROPERTY_IGNORED = 1074659331;
export const MQ_INFORMATION_UNSUPPORTED_PROPERTY = 1074659332;
export const MQ_INFORMATION_DUPLICATE_PROPERTY = 1074659333;
export const MQ_INFORMATION_OPERATION_PENDING = 1074659334;
export const MQ_INFORMATION_FORMATNAME_BUFFER_TOO_SMALL = 1074659337;
export const MQ_INFORMATION_INTERNAL_USER_CERT_EXIST = 1074659338;
export const MQ_INFORMATION_OWNER_IGNORED = 1074659339;

// Structs

// Native Libraries

// Symbols
