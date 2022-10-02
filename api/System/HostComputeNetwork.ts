/// Auto-generated by Deno Win32: Windows.Win32.System.HostComputeNetwork.Apis

import * as util from "../../util.ts";

// Enums
export type HCN_NOTIFICATIONS = number;
export type HCN_PORT_PROTOCOL = number;
export type HCN_PORT_ACCESS = number;

// Constants
export const HcnNotificationInvalid = 0;
export const HcnNotificationNetworkPreCreate = 1;
export const HcnNotificationNetworkCreate = 2;
export const HcnNotificationNetworkPreDelete = 3;
export const HcnNotificationNetworkDelete = 4;
export const HcnNotificationNamespaceCreate = 5;
export const HcnNotificationNamespaceDelete = 6;
export const HcnNotificationGuestNetworkServiceCreate = 7;
export const HcnNotificationGuestNetworkServiceDelete = 8;
export const HcnNotificationNetworkEndpointAttached = 9;
export const HcnNotificationNetworkEndpointDetached = 16;
export const HcnNotificationGuestNetworkServiceStateChanged = 17;
export const HcnNotificationGuestNetworkServiceInterfaceStateChanged = 18;
export const HcnNotificationServiceDisconnect = 16777216;
export const HcnNotificationFlagsReserved = "-268435456";
export const HCN_PORT_PROTOCOL_TCP = 1;
export const HCN_PORT_PROTOCOL_UDP = 2;
export const HCN_PORT_PROTOCOL_BOTH = 3;
export const HCN_PORT_ACCESS_EXCLUSIVE = 1;
export const HCN_PORT_ACCESS_SHARED = 2;

// Structs

/**
 * Windows.Win32.System.HostComputeNetwork.HCN_PORT_RANGE_RESERVATION (size: 8)
 */
export interface HCN_PORT_RANGE_RESERVATION {
  /** u16 */
  startingPort: number;
  /** u16 */
  endingPort: number;
}

export const sizeofHCN_PORT_RANGE_RESERVATION = 8;

export function allocHCN_PORT_RANGE_RESERVATION(data?: Partial<HCN_PORT_RANGE_RESERVATION>): Uint8Array {
  const buf = new Uint8Array(sizeofHCN_PORT_RANGE_RESERVATION);
  const view = new DataView(buf.buffer);
  // 0x00: u16
  if (data?.startingPort !== undefined) view.setUint16(0, Number(data.startingPort), true);
  // 0x02: u16
  if (data?.endingPort !== undefined) view.setUint16(2, Number(data.endingPort), true);
  // 0x04: pad4
  return buf;
}

/**
 * Windows.Win32.System.HostComputeNetwork.HCN_PORT_RANGE_ENTRY (size: 48)
 */
export interface HCN_PORT_RANGE_ENTRY {
  /** System.Guid */
  OwningPartitionId: Uint8Array | Deno.PointerValue | null;
  /** System.Guid */
  TargetPartitionId: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.System.HostComputeNetwork.HCN_PORT_PROTOCOL */
  Protocol: HCN_PORT_PROTOCOL;
  /** u64 */
  Priority: Deno.PointerValue;
  /** u32 */
  ReservationType: number;
  /** u32 */
  SharingFlags: number;
  /** u32 */
  DeliveryMode: number;
  /** u16 */
  StartingPort: number;
  /** u16 */
  EndingPort: number;
}

export const sizeofHCN_PORT_RANGE_ENTRY = 48;

export function allocHCN_PORT_RANGE_ENTRY(data?: Partial<HCN_PORT_RANGE_ENTRY>): Uint8Array {
  const buf = new Uint8Array(sizeofHCN_PORT_RANGE_ENTRY);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.OwningPartitionId !== undefined) view.setBigUint64(0, data.OwningPartitionId === null ? 0n : BigInt(util.toPointer(data.OwningPartitionId)), true);
  // 0x08: pointer
  if (data?.TargetPartitionId !== undefined) view.setBigUint64(8, data.TargetPartitionId === null ? 0n : BigInt(util.toPointer(data.TargetPartitionId)), true);
  // 0x10: i32
  if (data?.Protocol !== undefined) view.setInt32(16, Number(data.Protocol), true);
  // 0x14: pad4
  // 0x18: u64
  if (data?.Priority !== undefined) view.setBigUint64(24, BigInt(data.Priority), true);
  // 0x20: u32
  if (data?.ReservationType !== undefined) view.setUint32(32, Number(data.ReservationType), true);
  // 0x24: u32
  if (data?.SharingFlags !== undefined) view.setUint32(36, Number(data.SharingFlags), true);
  // 0x28: u32
  if (data?.DeliveryMode !== undefined) view.setUint32(40, Number(data.DeliveryMode), true);
  // 0x2c: u16
  if (data?.StartingPort !== undefined) view.setUint16(44, Number(data.StartingPort), true);
  // 0x2e: u16
  if (data?.EndingPort !== undefined) view.setUint16(46, Number(data.EndingPort), true);
  return buf;
}

export type PWSTR = Deno.PointerValue | Uint8Array | null;

export type HRESULT = number;

export type HANDLE = Deno.PointerValue;

// Native Libraries

try {
  var libcomputenetwork = Deno.dlopen("computenetwork", {
    HcnEnumerateNetworks: {
      parameters: ["buffer", "pointer", "pointer"],
      result: "pointer",
    },
    HcnCreateNetwork: {
      parameters: ["pointer", "buffer", "pointer", "pointer"],
      result: "pointer",
    },
    HcnOpenNetwork: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "pointer",
    },
    HcnModifyNetwork: {
      parameters: ["pointer", "buffer", "pointer"],
      result: "pointer",
    },
    HcnQueryNetworkProperties: {
      parameters: ["pointer", "buffer", "pointer", "pointer"],
      result: "pointer",
    },
    HcnDeleteNetwork: {
      parameters: ["pointer", "pointer"],
      result: "pointer",
    },
    HcnCloseNetwork: {
      parameters: ["pointer"],
      result: "pointer",
    },
    HcnEnumerateNamespaces: {
      parameters: ["buffer", "pointer", "pointer"],
      result: "pointer",
    },
    HcnCreateNamespace: {
      parameters: ["pointer", "buffer", "pointer", "pointer"],
      result: "pointer",
    },
    HcnOpenNamespace: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "pointer",
    },
    HcnModifyNamespace: {
      parameters: ["pointer", "buffer", "pointer"],
      result: "pointer",
    },
    HcnQueryNamespaceProperties: {
      parameters: ["pointer", "buffer", "pointer", "pointer"],
      result: "pointer",
    },
    HcnDeleteNamespace: {
      parameters: ["pointer", "pointer"],
      result: "pointer",
    },
    HcnCloseNamespace: {
      parameters: ["pointer"],
      result: "pointer",
    },
    HcnEnumerateEndpoints: {
      parameters: ["buffer", "pointer", "pointer"],
      result: "pointer",
    },
    HcnCreateEndpoint: {
      parameters: ["pointer", "pointer", "buffer", "pointer", "pointer"],
      result: "pointer",
    },
    HcnOpenEndpoint: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "pointer",
    },
    HcnModifyEndpoint: {
      parameters: ["pointer", "buffer", "pointer"],
      result: "pointer",
    },
    HcnQueryEndpointProperties: {
      parameters: ["pointer", "buffer", "pointer", "pointer"],
      result: "pointer",
    },
    HcnDeleteEndpoint: {
      parameters: ["pointer", "pointer"],
      result: "pointer",
    },
    HcnCloseEndpoint: {
      parameters: ["pointer"],
      result: "pointer",
    },
    HcnEnumerateLoadBalancers: {
      parameters: ["buffer", "pointer", "pointer"],
      result: "pointer",
    },
    HcnCreateLoadBalancer: {
      parameters: ["pointer", "buffer", "pointer", "pointer"],
      result: "pointer",
    },
    HcnOpenLoadBalancer: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "pointer",
    },
    HcnModifyLoadBalancer: {
      parameters: ["pointer", "buffer", "pointer"],
      result: "pointer",
    },
    HcnQueryLoadBalancerProperties: {
      parameters: ["pointer", "buffer", "pointer", "pointer"],
      result: "pointer",
    },
    HcnDeleteLoadBalancer: {
      parameters: ["pointer", "pointer"],
      result: "pointer",
    },
    HcnCloseLoadBalancer: {
      parameters: ["pointer"],
      result: "pointer",
    },
    HcnRegisterServiceCallback: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "pointer",
    },
    HcnUnregisterServiceCallback: {
      parameters: ["pointer"],
      result: "pointer",
    },
    HcnRegisterGuestNetworkServiceCallback: {
      parameters: ["pointer", "pointer", "pointer", "pointer"],
      result: "pointer",
    },
    HcnUnregisterGuestNetworkServiceCallback: {
      parameters: ["pointer"],
      result: "pointer",
    },
    HcnCreateGuestNetworkService: {
      parameters: ["pointer", "buffer", "pointer", "pointer"],
      result: "pointer",
    },
    HcnCloseGuestNetworkService: {
      parameters: ["pointer"],
      result: "pointer",
    },
    HcnModifyGuestNetworkService: {
      parameters: ["pointer", "buffer", "pointer"],
      result: "pointer",
    },
    HcnDeleteGuestNetworkService: {
      parameters: ["pointer", "pointer"],
      result: "pointer",
    },
    HcnReserveGuestNetworkServicePort: {
      parameters: ["pointer", "i32", "i32", "u16", "pointer"],
      result: "pointer",
    },
    HcnReserveGuestNetworkServicePortRange: {
      parameters: ["pointer", "u16", "pointer", "pointer"],
      result: "pointer",
    },
    HcnReleaseGuestNetworkServicePortReservationHandle: {
      parameters: ["pointer"],
      result: "pointer",
    },
    HcnEnumerateGuestNetworkPortReservations: {
      parameters: ["pointer", "pointer"],
      result: "pointer",
    },
    HcnFreeGuestNetworkPortReservations: {
      parameters: ["pointer"],
      result: "void",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function HcnEnumerateNetworks(
  Query: string | null /* Windows.Win32.Foundation.PWSTR */,
  Networks: Deno.PointerValue | Uint8Array | null /* ptr */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnEnumerateNetworks(util.pwstrToFfi(Query), util.toPointer(Networks), util.toPointer(ErrorRecord)));
}

export function HcnCreateNetwork(
  Id: Deno.PointerValue | Uint8Array | null /* ptr */,
  Settings: string | null /* Windows.Win32.Foundation.PWSTR */,
  Network: Deno.PointerValue | Uint8Array | null /* ptr */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnCreateNetwork(util.toPointer(Id), util.pwstrToFfi(Settings), util.toPointer(Network), util.toPointer(ErrorRecord)));
}

export function HcnOpenNetwork(
  Id: Deno.PointerValue | Uint8Array | null /* ptr */,
  Network: Deno.PointerValue | Uint8Array | null /* ptr */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnOpenNetwork(util.toPointer(Id), util.toPointer(Network), util.toPointer(ErrorRecord)));
}

export function HcnModifyNetwork(
  Network: Deno.PointerValue | Uint8Array | null /* ptr */,
  Settings: string | null /* Windows.Win32.Foundation.PWSTR */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnModifyNetwork(util.toPointer(Network), util.pwstrToFfi(Settings), util.toPointer(ErrorRecord)));
}

export function HcnQueryNetworkProperties(
  Network: Deno.PointerValue | Uint8Array | null /* ptr */,
  Query: string | null /* Windows.Win32.Foundation.PWSTR */,
  Properties: Deno.PointerValue | Uint8Array | null /* ptr */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnQueryNetworkProperties(util.toPointer(Network), util.pwstrToFfi(Query), util.toPointer(Properties), util.toPointer(ErrorRecord)));
}

export function HcnDeleteNetwork(
  Id: Deno.PointerValue | Uint8Array | null /* ptr */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnDeleteNetwork(util.toPointer(Id), util.toPointer(ErrorRecord)));
}

export function HcnCloseNetwork(
  Network: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnCloseNetwork(util.toPointer(Network)));
}

export function HcnEnumerateNamespaces(
  Query: string | null /* Windows.Win32.Foundation.PWSTR */,
  Namespaces: Deno.PointerValue | Uint8Array | null /* ptr */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnEnumerateNamespaces(util.pwstrToFfi(Query), util.toPointer(Namespaces), util.toPointer(ErrorRecord)));
}

export function HcnCreateNamespace(
  Id: Deno.PointerValue | Uint8Array | null /* ptr */,
  Settings: string | null /* Windows.Win32.Foundation.PWSTR */,
  Namespace: Deno.PointerValue | Uint8Array | null /* ptr */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnCreateNamespace(util.toPointer(Id), util.pwstrToFfi(Settings), util.toPointer(Namespace), util.toPointer(ErrorRecord)));
}

export function HcnOpenNamespace(
  Id: Deno.PointerValue | Uint8Array | null /* ptr */,
  Namespace: Deno.PointerValue | Uint8Array | null /* ptr */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnOpenNamespace(util.toPointer(Id), util.toPointer(Namespace), util.toPointer(ErrorRecord)));
}

export function HcnModifyNamespace(
  Namespace: Deno.PointerValue | Uint8Array | null /* ptr */,
  Settings: string | null /* Windows.Win32.Foundation.PWSTR */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnModifyNamespace(util.toPointer(Namespace), util.pwstrToFfi(Settings), util.toPointer(ErrorRecord)));
}

export function HcnQueryNamespaceProperties(
  Namespace: Deno.PointerValue | Uint8Array | null /* ptr */,
  Query: string | null /* Windows.Win32.Foundation.PWSTR */,
  Properties: Deno.PointerValue | Uint8Array | null /* ptr */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnQueryNamespaceProperties(util.toPointer(Namespace), util.pwstrToFfi(Query), util.toPointer(Properties), util.toPointer(ErrorRecord)));
}

export function HcnDeleteNamespace(
  Id: Deno.PointerValue | Uint8Array | null /* ptr */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnDeleteNamespace(util.toPointer(Id), util.toPointer(ErrorRecord)));
}

export function HcnCloseNamespace(
  Namespace: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnCloseNamespace(util.toPointer(Namespace)));
}

export function HcnEnumerateEndpoints(
  Query: string | null /* Windows.Win32.Foundation.PWSTR */,
  Endpoints: Deno.PointerValue | Uint8Array | null /* ptr */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnEnumerateEndpoints(util.pwstrToFfi(Query), util.toPointer(Endpoints), util.toPointer(ErrorRecord)));
}

export function HcnCreateEndpoint(
  Network: Deno.PointerValue | Uint8Array | null /* ptr */,
  Id: Deno.PointerValue | Uint8Array | null /* ptr */,
  Settings: string | null /* Windows.Win32.Foundation.PWSTR */,
  Endpoint: Deno.PointerValue | Uint8Array | null /* ptr */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnCreateEndpoint(util.toPointer(Network), util.toPointer(Id), util.pwstrToFfi(Settings), util.toPointer(Endpoint), util.toPointer(ErrorRecord)));
}

export function HcnOpenEndpoint(
  Id: Deno.PointerValue | Uint8Array | null /* ptr */,
  Endpoint: Deno.PointerValue | Uint8Array | null /* ptr */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnOpenEndpoint(util.toPointer(Id), util.toPointer(Endpoint), util.toPointer(ErrorRecord)));
}

export function HcnModifyEndpoint(
  Endpoint: Deno.PointerValue | Uint8Array | null /* ptr */,
  Settings: string | null /* Windows.Win32.Foundation.PWSTR */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnModifyEndpoint(util.toPointer(Endpoint), util.pwstrToFfi(Settings), util.toPointer(ErrorRecord)));
}

export function HcnQueryEndpointProperties(
  Endpoint: Deno.PointerValue | Uint8Array | null /* ptr */,
  Query: string | null /* Windows.Win32.Foundation.PWSTR */,
  Properties: Deno.PointerValue | Uint8Array | null /* ptr */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnQueryEndpointProperties(util.toPointer(Endpoint), util.pwstrToFfi(Query), util.toPointer(Properties), util.toPointer(ErrorRecord)));
}

export function HcnDeleteEndpoint(
  Id: Deno.PointerValue | Uint8Array | null /* ptr */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnDeleteEndpoint(util.toPointer(Id), util.toPointer(ErrorRecord)));
}

export function HcnCloseEndpoint(
  Endpoint: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnCloseEndpoint(util.toPointer(Endpoint)));
}

export function HcnEnumerateLoadBalancers(
  Query: string | null /* Windows.Win32.Foundation.PWSTR */,
  LoadBalancer: Deno.PointerValue | Uint8Array | null /* ptr */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnEnumerateLoadBalancers(util.pwstrToFfi(Query), util.toPointer(LoadBalancer), util.toPointer(ErrorRecord)));
}

export function HcnCreateLoadBalancer(
  Id: Deno.PointerValue | Uint8Array | null /* ptr */,
  Settings: string | null /* Windows.Win32.Foundation.PWSTR */,
  LoadBalancer: Deno.PointerValue | Uint8Array | null /* ptr */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnCreateLoadBalancer(util.toPointer(Id), util.pwstrToFfi(Settings), util.toPointer(LoadBalancer), util.toPointer(ErrorRecord)));
}

export function HcnOpenLoadBalancer(
  Id: Deno.PointerValue | Uint8Array | null /* ptr */,
  LoadBalancer: Deno.PointerValue | Uint8Array | null /* ptr */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnOpenLoadBalancer(util.toPointer(Id), util.toPointer(LoadBalancer), util.toPointer(ErrorRecord)));
}

export function HcnModifyLoadBalancer(
  LoadBalancer: Deno.PointerValue | Uint8Array | null /* ptr */,
  Settings: string | null /* Windows.Win32.Foundation.PWSTR */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnModifyLoadBalancer(util.toPointer(LoadBalancer), util.pwstrToFfi(Settings), util.toPointer(ErrorRecord)));
}

export function HcnQueryLoadBalancerProperties(
  LoadBalancer: Deno.PointerValue | Uint8Array | null /* ptr */,
  Query: string | null /* Windows.Win32.Foundation.PWSTR */,
  Properties: Deno.PointerValue | Uint8Array | null /* ptr */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnQueryLoadBalancerProperties(util.toPointer(LoadBalancer), util.pwstrToFfi(Query), util.toPointer(Properties), util.toPointer(ErrorRecord)));
}

export function HcnDeleteLoadBalancer(
  Id: Deno.PointerValue | Uint8Array | null /* ptr */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnDeleteLoadBalancer(util.toPointer(Id), util.toPointer(ErrorRecord)));
}

export function HcnCloseLoadBalancer(
  LoadBalancer: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnCloseLoadBalancer(util.toPointer(LoadBalancer)));
}

export function HcnRegisterServiceCallback(
  Callback: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.HostComputeNetwork.HCN_NOTIFICATION_CALLBACK */,
  Context: Deno.PointerValue | Uint8Array | null /* ptr */,
  CallbackHandle: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnRegisterServiceCallback(util.toPointer(Callback), util.toPointer(Context), util.toPointer(CallbackHandle)));
}

export function HcnUnregisterServiceCallback(
  CallbackHandle: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnUnregisterServiceCallback(util.toPointer(CallbackHandle)));
}

export function HcnRegisterGuestNetworkServiceCallback(
  GuestNetworkService: Deno.PointerValue | Uint8Array | null /* ptr */,
  Callback: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.HostComputeNetwork.HCN_NOTIFICATION_CALLBACK */,
  Context: Deno.PointerValue | Uint8Array | null /* ptr */,
  CallbackHandle: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnRegisterGuestNetworkServiceCallback(util.toPointer(GuestNetworkService), util.toPointer(Callback), util.toPointer(Context), util.toPointer(CallbackHandle)));
}

export function HcnUnregisterGuestNetworkServiceCallback(
  CallbackHandle: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnUnregisterGuestNetworkServiceCallback(util.toPointer(CallbackHandle)));
}

export function HcnCreateGuestNetworkService(
  Id: Deno.PointerValue | Uint8Array | null /* ptr */,
  Settings: string | null /* Windows.Win32.Foundation.PWSTR */,
  GuestNetworkService: Deno.PointerValue | Uint8Array | null /* ptr */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnCreateGuestNetworkService(util.toPointer(Id), util.pwstrToFfi(Settings), util.toPointer(GuestNetworkService), util.toPointer(ErrorRecord)));
}

export function HcnCloseGuestNetworkService(
  GuestNetworkService: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnCloseGuestNetworkService(util.toPointer(GuestNetworkService)));
}

export function HcnModifyGuestNetworkService(
  GuestNetworkService: Deno.PointerValue | Uint8Array | null /* ptr */,
  Settings: string | null /* Windows.Win32.Foundation.PWSTR */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnModifyGuestNetworkService(util.toPointer(GuestNetworkService), util.pwstrToFfi(Settings), util.toPointer(ErrorRecord)));
}

export function HcnDeleteGuestNetworkService(
  Id: Deno.PointerValue | Uint8Array | null /* ptr */,
  ErrorRecord: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnDeleteGuestNetworkService(util.toPointer(Id), util.toPointer(ErrorRecord)));
}

export function HcnReserveGuestNetworkServicePort(
  GuestNetworkService: Deno.PointerValue | Uint8Array | null /* ptr */,
  Protocol: HCN_PORT_PROTOCOL /* Windows.Win32.System.HostComputeNetwork.HCN_PORT_PROTOCOL */,
  Access: HCN_PORT_ACCESS /* Windows.Win32.System.HostComputeNetwork.HCN_PORT_ACCESS */,
  Port: number /* u16 */,
  PortReservationHandle: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnReserveGuestNetworkServicePort(util.toPointer(GuestNetworkService), Protocol, Access, Port, util.toPointer(PortReservationHandle)));
}

export function HcnReserveGuestNetworkServicePortRange(
  GuestNetworkService: Deno.PointerValue | Uint8Array | null /* ptr */,
  PortCount: number /* u16 */,
  PortRangeReservation: Deno.PointerValue | Uint8Array | null /* ptr */,
  PortReservationHandle: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnReserveGuestNetworkServicePortRange(util.toPointer(GuestNetworkService), PortCount, util.toPointer(PortRangeReservation), util.toPointer(PortReservationHandle)));
}

export function HcnReleaseGuestNetworkServicePortReservationHandle(
  PortReservationHandle: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnReleaseGuestNetworkServicePortReservationHandle(util.toPointer(PortReservationHandle)));
}

export function HcnEnumerateGuestNetworkPortReservations(
  ReturnCount: Deno.PointerValue | Uint8Array | null /* ptr */,
  PortEntries: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libcomputenetwork.HcnEnumerateGuestNetworkPortReservations(util.toPointer(ReturnCount), util.toPointer(PortEntries)));
}

export function HcnFreeGuestNetworkPortReservations(
  PortEntries: Deno.PointerValue | Uint8Array | null /* ptr */,
): void /* void */ {
  return libcomputenetwork.HcnFreeGuestNetworkPortReservations(util.toPointer(PortEntries));
}
