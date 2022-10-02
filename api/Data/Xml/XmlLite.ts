/// Auto-generated by Deno Win32: Windows.Win32.Data.Xml.XmlLite.Apis

import * as util from "../../../util.ts";

// Enums
export type XmlNodeType = number;
export type XmlConformanceLevel = number;
export type DtdProcessing = number;
export type XmlReadState = number;
export type XmlReaderProperty = number;
export type XmlError = number;
export type XmlStandalone = number;
export type XmlWriterProperty = number;

// Constants
export const XmlNodeType_None = 0;
export const XmlNodeType_Element = 1;
export const XmlNodeType_Attribute = 2;
export const XmlNodeType_Text = 3;
export const XmlNodeType_CDATA = 4;
export const XmlNodeType_ProcessingInstruction = 7;
export const XmlNodeType_Comment = 8;
export const XmlNodeType_DocumentType = 10;
export const XmlNodeType_Whitespace = 13;
export const XmlNodeType_EndElement = 15;
export const XmlNodeType_XmlDeclaration = 17;
export const _XmlNodeType_Last = 17;
export const XmlConformanceLevel_Auto = 0;
export const XmlConformanceLevel_Fragment = 1;
export const XmlConformanceLevel_Document = 2;
export const _XmlConformanceLevel_Last = 2;
export const DtdProcessing_Prohibit = 0;
export const DtdProcessing_Parse = 1;
export const _DtdProcessing_Last = 1;
export const XmlReadState_Initial = 0;
export const XmlReadState_Interactive = 1;
export const XmlReadState_Error = 2;
export const XmlReadState_EndOfFile = 3;
export const XmlReadState_Closed = 4;
export const XmlReaderProperty_MultiLanguage = 0;
export const XmlReaderProperty_ConformanceLevel = 1;
export const XmlReaderProperty_RandomAccess = 2;
export const XmlReaderProperty_XmlResolver = 3;
export const XmlReaderProperty_DtdProcessing = 4;
export const XmlReaderProperty_ReadState = 5;
export const XmlReaderProperty_MaxElementDepth = 6;
export const XmlReaderProperty_MaxEntityExpansion = 7;
export const _XmlReaderProperty_Last = 7;
export const MX_E_MX = "-1072894464";
export const MX_E_INPUTEND = "-1072894463";
export const MX_E_ENCODING = "-1072894462";
export const MX_E_ENCODINGSWITCH = "-1072894461";
export const MX_E_ENCODINGSIGNATURE = "-1072894460";
export const WC_E_WC = "-1072894432";
export const WC_E_WHITESPACE = "-1072894431";
export const WC_E_SEMICOLON = "-1072894430";
export const WC_E_GREATERTHAN = "-1072894429";
export const WC_E_QUOTE = "-1072894428";
export const WC_E_EQUAL = "-1072894427";
export const WC_E_LESSTHAN = "-1072894426";
export const WC_E_HEXDIGIT = "-1072894425";
export const WC_E_DIGIT = "-1072894424";
export const WC_E_LEFTBRACKET = "-1072894423";
export const WC_E_LEFTPAREN = "-1072894422";
export const WC_E_XMLCHARACTER = "-1072894421";
export const WC_E_NAMECHARACTER = "-1072894420";
export const WC_E_SYNTAX = "-1072894419";
export const WC_E_CDSECT = "-1072894418";
export const WC_E_COMMENT = "-1072894417";
export const WC_E_CONDSECT = "-1072894416";
export const WC_E_DECLATTLIST = "-1072894415";
export const WC_E_DECLDOCTYPE = "-1072894414";
export const WC_E_DECLELEMENT = "-1072894413";
export const WC_E_DECLENTITY = "-1072894412";
export const WC_E_DECLNOTATION = "-1072894411";
export const WC_E_NDATA = "-1072894410";
export const WC_E_PUBLIC = "-1072894409";
export const WC_E_SYSTEM = "-1072894408";
export const WC_E_NAME = "-1072894407";
export const WC_E_ROOTELEMENT = "-1072894406";
export const WC_E_ELEMENTMATCH = "-1072894405";
export const WC_E_UNIQUEATTRIBUTE = "-1072894404";
export const WC_E_TEXTXMLDECL = "-1072894403";
export const WC_E_LEADINGXML = "-1072894402";
export const WC_E_TEXTDECL = "-1072894401";
export const WC_E_XMLDECL = "-1072894400";
export const WC_E_ENCNAME = "-1072894399";
export const WC_E_PUBLICID = "-1072894398";
export const WC_E_PESINTERNALSUBSET = "-1072894397";
export const WC_E_PESBETWEENDECLS = "-1072894396";
export const WC_E_NORECURSION = "-1072894395";
export const WC_E_ENTITYCONTENT = "-1072894394";
export const WC_E_UNDECLAREDENTITY = "-1072894393";
export const WC_E_PARSEDENTITY = "-1072894392";
export const WC_E_NOEXTERNALENTITYREF = "-1072894391";
export const WC_E_PI = "-1072894390";
export const WC_E_SYSTEMID = "-1072894389";
export const WC_E_QUESTIONMARK = "-1072894388";
export const WC_E_CDSECTEND = "-1072894387";
export const WC_E_MOREDATA = "-1072894386";
export const WC_E_DTDPROHIBITED = "-1072894385";
export const WC_E_INVALIDXMLSPACE = "-1072894384";
export const NC_E_NC = "-1072894368";
export const NC_E_QNAMECHARACTER = "-1072894367";
export const NC_E_QNAMECOLON = "-1072894366";
export const NC_E_NAMECOLON = "-1072894365";
export const NC_E_DECLAREDPREFIX = "-1072894364";
export const NC_E_UNDECLAREDPREFIX = "-1072894363";
export const NC_E_EMPTYURI = "-1072894362";
export const NC_E_XMLPREFIXRESERVED = "-1072894361";
export const NC_E_XMLNSPREFIXRESERVED = "-1072894360";
export const NC_E_XMLURIRESERVED = "-1072894359";
export const NC_E_XMLNSURIRESERVED = "-1072894358";
export const SC_E_SC = "-1072894336";
export const SC_E_MAXELEMENTDEPTH = "-1072894335";
export const SC_E_MAXENTITYEXPANSION = "-1072894334";
export const WR_E_WR = "-1072894208";
export const WR_E_NONWHITESPACE = "-1072894207";
export const WR_E_NSPREFIXDECLARED = "-1072894206";
export const WR_E_NSPREFIXWITHEMPTYNSURI = "-1072894205";
export const WR_E_DUPLICATEATTRIBUTE = "-1072894204";
export const WR_E_XMLNSPREFIXDECLARATION = "-1072894203";
export const WR_E_XMLPREFIXDECLARATION = "-1072894202";
export const WR_E_XMLURIDECLARATION = "-1072894201";
export const WR_E_XMLNSURIDECLARATION = "-1072894200";
export const WR_E_NAMESPACEUNDECLARED = "-1072894199";
export const WR_E_INVALIDXMLSPACE = "-1072894198";
export const WR_E_INVALIDACTION = "-1072894197";
export const WR_E_INVALIDSURROGATEPAIR = "-1072894196";
export const XML_E_INVALID_DECIMAL = "-1072898019";
export const XML_E_INVALID_HEXIDECIMAL = "-1072898018";
export const XML_E_INVALID_UNICODE = "-1072898017";
export const XML_E_INVALIDENCODING = "-1072897938";
export const XmlStandalone_Omit = 0;
export const XmlStandalone_Yes = 1;
export const XmlStandalone_No = 2;
export const _XmlStandalone_Last = 2;
export const XmlWriterProperty_MultiLanguage = 0;
export const XmlWriterProperty_Indent = 1;
export const XmlWriterProperty_ByteOrderMark = 2;
export const XmlWriterProperty_OmitXmlDeclaration = 3;
export const XmlWriterProperty_ConformanceLevel = 4;
export const XmlWriterProperty_CompactEmptyElement = 5;
export const _XmlWriterProperty_Last = 5;

// Structs

export type HRESULT = number;

export type BOOL = number;

export type PWSTR = Deno.PointerValue | Uint8Array | null;

// Native Libraries

try {
  var libXmlLite = Deno.dlopen("XmlLite", {
    CreateXmlReader: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "pointer",
    },
    CreateXmlReaderInputWithEncodingCodePage: {
      parameters: ["pointer", "pointer", "u32", "i32", "buffer", "pointer"],
      result: "pointer",
    },
    CreateXmlReaderInputWithEncodingName: {
      parameters: ["pointer", "pointer", "buffer", "i32", "buffer", "pointer"],
      result: "pointer",
    },
    CreateXmlWriter: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "pointer",
    },
    CreateXmlWriterOutputWithEncodingCodePage: {
      parameters: ["pointer", "pointer", "u32", "pointer"],
      result: "pointer",
    },
    CreateXmlWriterOutputWithEncodingName: {
      parameters: ["pointer", "pointer", "buffer", "pointer"],
      result: "pointer",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function CreateXmlReader(
  riid: Deno.PointerValue | Uint8Array | null /* ptr */,
  ppvObject: Deno.PointerValue | Uint8Array | null /* ptr */,
  pMalloc: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.Com.IMalloc */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libXmlLite.CreateXmlReader(util.toPointer(riid), util.toPointer(ppvObject), util.toPointer(pMalloc)));
}

export function CreateXmlReaderInputWithEncodingCodePage(
  pInputStream: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.Com.IUnknown */,
  pMalloc: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.Com.IMalloc */,
  nEncodingCodePage: number /* u32 */,
  fEncodingHint: boolean /* Windows.Win32.Foundation.BOOL */,
  pwszBaseUri: string | null /* Windows.Win32.Foundation.PWSTR */,
  ppInput: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libXmlLite.CreateXmlReaderInputWithEncodingCodePage(util.toPointer(pInputStream), util.toPointer(pMalloc), nEncodingCodePage, util.boolToFfi(fEncodingHint), util.pwstrToFfi(pwszBaseUri), util.toPointer(ppInput)));
}

export function CreateXmlReaderInputWithEncodingName(
  pInputStream: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.Com.IUnknown */,
  pMalloc: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.Com.IMalloc */,
  pwszEncodingName: string | null /* Windows.Win32.Foundation.PWSTR */,
  fEncodingHint: boolean /* Windows.Win32.Foundation.BOOL */,
  pwszBaseUri: string | null /* Windows.Win32.Foundation.PWSTR */,
  ppInput: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libXmlLite.CreateXmlReaderInputWithEncodingName(util.toPointer(pInputStream), util.toPointer(pMalloc), util.pwstrToFfi(pwszEncodingName), util.boolToFfi(fEncodingHint), util.pwstrToFfi(pwszBaseUri), util.toPointer(ppInput)));
}

export function CreateXmlWriter(
  riid: Deno.PointerValue | Uint8Array | null /* ptr */,
  ppvObject: Deno.PointerValue | Uint8Array | null /* ptr */,
  pMalloc: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.Com.IMalloc */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libXmlLite.CreateXmlWriter(util.toPointer(riid), util.toPointer(ppvObject), util.toPointer(pMalloc)));
}

export function CreateXmlWriterOutputWithEncodingCodePage(
  pOutputStream: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.Com.IUnknown */,
  pMalloc: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.Com.IMalloc */,
  nEncodingCodePage: number /* u32 */,
  ppOutput: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libXmlLite.CreateXmlWriterOutputWithEncodingCodePage(util.toPointer(pOutputStream), util.toPointer(pMalloc), nEncodingCodePage, util.toPointer(ppOutput)));
}

export function CreateXmlWriterOutputWithEncodingName(
  pOutputStream: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.Com.IUnknown */,
  pMalloc: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.Com.IMalloc */,
  pwszEncodingName: string | null /* Windows.Win32.Foundation.PWSTR */,
  ppOutput: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libXmlLite.CreateXmlWriterOutputWithEncodingName(util.toPointer(pOutputStream), util.toPointer(pMalloc), util.pwstrToFfi(pwszEncodingName), util.toPointer(ppOutput)));
}
