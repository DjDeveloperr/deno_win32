/// Auto-generated by Deno Win32: Windows.Win32.System.Contacts.Apis

import * as util from "../../util.ts";

// Enums
export type CONTACT_AGGREGATION_CREATE_OR_OPEN_OPTIONS = number;
export type CONTACT_AGGREGATION_COLLECTION_OPTIONS = number;

// Constants
export const CGD_DEFAULT = 0;
export const CGD_UNKNOWN_PROPERTY = 0;
export const CGD_STRING_PROPERTY = 1;
export const CGD_DATE_PROPERTY = 2;
export const CGD_BINARY_PROPERTY = 4;
export const CGD_ARRAY_NODE = 8;
export const CONTACTPROP_PUB_NOTES = `Notes`;
export const CONTACTPROP_PUB_MAILER = `Mailer`;
export const CONTACTPROP_PUB_PROGID = `ProgID`;
export const CONTACTPROP_PUB_GENDER = `Gender`;
export const CONTACTPROP_PUB_GENDER_UNSPECIFIED = `Unspecified`;
export const CONTACTPROP_PUB_GENDER_MALE = `Male`;
export const CONTACTPROP_PUB_GENDER_FEMALE = `Female`;
export const CONTACTPROP_PUB_CREATIONDATE = `CreationDate`;
export const CONTACTPROP_PUB_L1_CONTACTIDCOLLECTION = `ContactIDCollection`;
export const CONTACTPROP_PUB_L2_CONTACTID = `/ContactID`;
export const CONTACTPROP_PUB_L3_VALUE = `/Value`;
export const CONTACTPROP_PUB_L1_NAMECOLLECTION = `NameCollection`;
export const CONTACTPROP_PUB_L2_NAME = `/Name`;
export const CONTACTPROP_PUB_L3_FORMATTEDNAME = `/FormattedName`;
export const CONTACTPROP_PUB_L3_PHONETIC = `/Phonetic`;
export const CONTACTPROP_PUB_L3_PREFIX = `/Prefix`;
export const CONTACTPROP_PUB_L3_TITLE = `/Title`;
export const CONTACTPROP_PUB_L3_GIVENNAME = `/GivenName`;
export const CONTACTPROP_PUB_L3_FAMILYNAME = `/FamilyName`;
export const CONTACTPROP_PUB_L3_MIDDLENAME = `/MiddleName`;
export const CONTACTPROP_PUB_L3_GENERATION = `/Generation`;
export const CONTACTPROP_PUB_L3_SUFFIX = `/Suffix`;
export const CONTACTPROP_PUB_L3_NICKNAME = `/NickName`;
export const CONTACTPROP_PUB_L1_POSITIONCOLLECTION = `PositionCollection`;
export const CONTACTPROP_PUB_L2_POSITION = `/Position`;
export const CONTACTPROP_PUB_L3_ORGANIZATION = `/Organization`;
export const CONTACTPROP_PUB_L3_COMPANY = `/Company`;
export const CONTACTPROP_PUB_L3_DEPARTMENT = `/Department`;
export const CONTACTPROP_PUB_L3_OFFICE = `/Office`;
export const CONTACTPROP_PUB_L3_JOB_TITLE = `/JobTitle`;
export const CONTACTPROP_PUB_L3_PROFESSION = `/Profession`;
export const CONTACTPROP_PUB_L3_ROLE = `/Role`;
export const CONTACTPROP_PUB_L1_PERSONCOLLECTION = `PersonCollection`;
export const CONTACTPROP_PUB_L2_PERSON = `/Person`;
export const CONTACTPROP_PUB_L3_PERSONID = `/PersonID`;
export const CONTACTPROP_PUB_L1_DATECOLLECTION = `DateCollection`;
export const CONTACTPROP_PUB_L2_DATE = `/Date`;
export const CONTACTPROP_PUB_L1_EMAILADDRESSCOLLECTION = `EmailAddressCollection`;
export const CONTACTPROP_PUB_L2_EMAILADDRESS = `/EmailAddress`;
export const CONTACTPROP_PUB_L3_ADDRESS = `/Address`;
export const CONTACTPROP_PUB_L3_TYPE = `/Type`;
export const CONTACTPROP_PUB_L1_CERTIFICATECOLLECTION = `CertificateCollection`;
export const CONTACTPROP_PUB_L2_CERTIFICATE = `/Certificate`;
export const CONTACTPROP_PUB_L3_THUMBPRINT = `/ThumbPrint`;
export const CONTACTPROP_PUB_L1_PHONENUMBERCOLLECTION = `PhoneNumberCollection`;
export const CONTACTPROP_PUB_L2_PHONENUMBER = `/PhoneNumber`;
export const CONTACTPROP_PUB_L3_NUMBER = `/Number`;
export const CONTACTPROP_PUB_L3_ALTERNATE = `/Alternate`;
export const CONTACTPROP_PUB_L1_PHYSICALADDRESSCOLLECTION = `PhysicalAddressCollection`;
export const CONTACTPROP_PUB_L2_PHYSICALADDRESS = `/PhysicalAddress`;
export const CONTACTPROP_PUB_L3_ADDRESSLABEL = `/AddressLabel`;
export const CONTACTPROP_PUB_L3_STREET = `/Street`;
export const CONTACTPROP_PUB_L3_LOCALITY = `/Locality`;
export const CONTACTPROP_PUB_L3_REGION = `/Region`;
export const CONTACTPROP_PUB_L3_POSTALCODE = `/PostalCode`;
export const CONTACTPROP_PUB_L3_COUNTRY = `/Country`;
export const CONTACTPROP_PUB_L3_POBOX = `/POBox`;
export const CONTACTPROP_PUB_L3_EXTENDEDADDRESS = `/ExtendedAddress`;
export const CONTACTPROP_PUB_L1_IMADDRESSCOLLECTION = `IMAddressCollection`;
export const CONTACTPROP_PUB_L2_IMADDRESSENTRY = `/IMAddress`;
export const CONTACTPROP_PUB_L3_PROTOCOL = `/Protocol`;
export const CONTACTPROP_PUB_L1_URLCOLLECTION = `UrlCollection`;
export const CONTACTPROP_PUB_L2_URL = `/Url`;
export const CONTACTPROP_PUB_L1_PHOTOCOLLECTION = `PhotoCollection`;
export const CONTACTPROP_PUB_L2_PHOTO = `/Photo`;
export const CONTACTPROP_PUB_L3_URL = `/Url`;
export const CONTACTLABEL_PUB_PREFERRED = `Preferred`;
export const CONTACTLABEL_PUB_PERSONAL = `Personal`;
export const CONTACTLABEL_PUB_BUSINESS = `Business`;
export const CONTACTLABEL_PUB_OTHER = `Other`;
export const CONTACTLABEL_PUB_VOICE = `Voice`;
export const CONTACTLABEL_PUB_MOBILE = `Mobile`;
export const CONTACTLABEL_PUB_PCS = `PCS`;
export const CONTACTLABEL_PUB_CELLULAR = `Cellular`;
export const CONTACTLABEL_PUB_CAR = `Car`;
export const CONTACTLABEL_PUB_PAGER = `Pager`;
export const CONTACTLABEL_PUB_TTY = `TTY`;
export const CONTACTLABEL_PUB_FAX = `Fax`;
export const CONTACTLABEL_PUB_VIDEO = `Video`;
export const CONTACTLABEL_PUB_MODEM = `Modem`;
export const CONTACTLABEL_PUB_BBS = `BBS`;
export const CONTACTLABEL_PUB_ISDN = `ISDN`;
export const CONTACTLABEL_PUB_AGENT = `Agent`;
export const CONTACTLABEL_PUB_DOMESTIC = `Domestic`;
export const CONTACTLABEL_PUB_INTERNATIONAL = `International`;
export const CONTACTLABEL_PUB_POSTAL = `Postal`;
export const CONTACTLABEL_PUB_PARCEL = `Parcel`;
export const CONTACTLABEL_PUB_USERTILE = `UserTile`;
export const CONTACTLABEL_PUB_LOGO = `Logo`;
export const CONTACTLABEL_WAB_SPOUSE = `wab:Spouse`;
export const CONTACTLABEL_WAB_CHILD = `wab:Child`;
export const CONTACTLABEL_WAB_MANAGER = `wab:Manager`;
export const CONTACTLABEL_WAB_ASSISTANT = `wab:Assistant`;
export const CONTACTLABEL_WAB_BIRTHDAY = `wab:Birthday`;
export const CONTACTLABEL_WAB_ANNIVERSARY = `wab:Anniversary`;
export const CONTACTLABEL_WAB_SOCIALNETWORK = `wab:SocialNetwork`;
export const CONTACTLABEL_WAB_SCHOOL = `wab:School`;
export const CONTACTLABEL_WAB_WISHLIST = `wab:WishList`;
export const CA_CREATE_LOCAL = 0;
export const CA_CREATE_EXTERNAL = 1;
export const CACO_DEFAULT = 0;
export const CACO_INCLUDE_EXTERNAL = 1;
export const CACO_EXTERNAL_ONLY = 2;

// Structs

/**
 * Windows.Win32.System.Contacts.CONTACT_AGGREGATION_BLOB (size: 16)
 */
export interface CONTACT_AGGREGATION_BLOB {
  /** u32 */
  dwCount: number;
  /** ptr */
  lpb: Deno.PointerValue | Uint8Array;
}

export const sizeofCONTACT_AGGREGATION_BLOB = 16;

export function allocCONTACT_AGGREGATION_BLOB(data?: Partial<CONTACT_AGGREGATION_BLOB>): Uint8Array {
  const buf = new Uint8Array(sizeofCONTACT_AGGREGATION_BLOB);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.dwCount !== undefined) view.setUint32(0, Number(data.dwCount), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.lpb !== undefined) view.setBigUint64(8, data.lpb === null ? 0n : BigInt(Deno.UnsafePointer.value(util.toPointer(data.lpb))), true);
  return buf;
}

export class CONTACT_AGGREGATION_BLOBView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get dwCount(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  get lpb(): Uint8Array | Deno.PointerValue {
    const ptr = this.view.getBigUint64(8, true);
    return Deno.UnsafePointer.create(ptr);
  }

  // 0x00: u32
  set dwCount(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  set lpb(value: Uint8Array | Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(util.toPointer(value))), true);
  }
}

// Native Libraries

// Symbols

