/// Auto-generated by Deno Win32: Windows.Win32.Graphics.DirectManipulation.Apis

import * as util from "../../util.ts";

// Enums
export type DIRECTMANIPULATION_STATUS = number;
export type DIRECTMANIPULATION_HITTEST_TYPE = number;
export type DIRECTMANIPULATION_CONFIGURATION = number;
export type DIRECTMANIPULATION_GESTURE_CONFIGURATION = number;
export type DIRECTMANIPULATION_MOTION_TYPES = number;
export type DIRECTMANIPULATION_VIEWPORT_OPTIONS = number;
export type DIRECTMANIPULATION_SNAPPOINT_TYPE = number;
export type DIRECTMANIPULATION_SNAPPOINT_COORDINATE = number;
export type DIRECTMANIPULATION_HORIZONTALALIGNMENT = number;
export type DIRECTMANIPULATION_VERTICALALIGNMENT = number;
export type DIRECTMANIPULATION_INPUT_MODE = number;
export type DIRECTMANIPULATION_DRAG_DROP_STATUS = number;
export type DIRECTMANIPULATION_DRAG_DROP_CONFIGURATION = number;
export type DIRECTMANIPULATION_INTERACTION_TYPE = number;
export type DIRECTMANIPULATION_AUTOSCROLL_CONFIGURATION = number;

// Constants
export const DIRECTMANIPULATION_KEYBOARDFOCUS = 4294967294;
export const DIRECTMANIPULATION_MOUSEFOCUS = 4294967293;
export const DIRECTMANIPULATION_BUILDING = 0;
export const DIRECTMANIPULATION_ENABLED = 1;
export const DIRECTMANIPULATION_DISABLED = 2;
export const DIRECTMANIPULATION_RUNNING = 3;
export const DIRECTMANIPULATION_INERTIA = 4;
export const DIRECTMANIPULATION_READY = 5;
export const DIRECTMANIPULATION_SUSPENDED = 6;
export const DIRECTMANIPULATION_HITTEST_TYPE_ASYNCHRONOUS = 0;
export const DIRECTMANIPULATION_HITTEST_TYPE_SYNCHRONOUS = 1;
export const DIRECTMANIPULATION_HITTEST_TYPE_AUTO_SYNCHRONOUS = 2;
export const DIRECTMANIPULATION_CONFIGURATION_NONE = 0;
export const DIRECTMANIPULATION_CONFIGURATION_INTERACTION = 1;
export const DIRECTMANIPULATION_CONFIGURATION_TRANSLATION_X = 2;
export const DIRECTMANIPULATION_CONFIGURATION_TRANSLATION_Y = 4;
export const DIRECTMANIPULATION_CONFIGURATION_SCALING = 16;
export const DIRECTMANIPULATION_CONFIGURATION_TRANSLATION_INERTIA = 32;
export const DIRECTMANIPULATION_CONFIGURATION_SCALING_INERTIA = 128;
export const DIRECTMANIPULATION_CONFIGURATION_RAILS_X = 256;
export const DIRECTMANIPULATION_CONFIGURATION_RAILS_Y = 512;
export const DIRECTMANIPULATION_GESTURE_NONE = 0;
export const DIRECTMANIPULATION_GESTURE_DEFAULT = 0;
export const DIRECTMANIPULATION_GESTURE_CROSS_SLIDE_VERTICAL = 8;
export const DIRECTMANIPULATION_GESTURE_CROSS_SLIDE_HORIZONTAL = 16;
export const DIRECTMANIPULATION_GESTURE_PINCH_ZOOM = 32;
export const DIRECTMANIPULATION_MOTION_NONE = 0;
export const DIRECTMANIPULATION_MOTION_TRANSLATEX = 1;
export const DIRECTMANIPULATION_MOTION_TRANSLATEY = 2;
export const DIRECTMANIPULATION_MOTION_ZOOM = 4;
export const DIRECTMANIPULATION_MOTION_CENTERX = 16;
export const DIRECTMANIPULATION_MOTION_CENTERY = 32;
export const DIRECTMANIPULATION_MOTION_ALL = 55;
export const DIRECTMANIPULATION_VIEWPORT_OPTIONS_DEFAULT = 0;
export const DIRECTMANIPULATION_VIEWPORT_OPTIONS_AUTODISABLE = 1;
export const DIRECTMANIPULATION_VIEWPORT_OPTIONS_MANUALUPDATE = 2;
export const DIRECTMANIPULATION_VIEWPORT_OPTIONS_INPUT = 4;
export const DIRECTMANIPULATION_VIEWPORT_OPTIONS_EXPLICITHITTEST = 8;
export const DIRECTMANIPULATION_VIEWPORT_OPTIONS_DISABLEPIXELSNAPPING = 16;
export const DIRECTMANIPULATION_SNAPPOINT_MANDATORY = 0;
export const DIRECTMANIPULATION_SNAPPOINT_OPTIONAL = 1;
export const DIRECTMANIPULATION_SNAPPOINT_MANDATORY_SINGLE = 2;
export const DIRECTMANIPULATION_SNAPPOINT_OPTIONAL_SINGLE = 3;
export const DIRECTMANIPULATION_COORDINATE_BOUNDARY = 0;
export const DIRECTMANIPULATION_COORDINATE_ORIGIN = 1;
export const DIRECTMANIPULATION_COORDINATE_MIRRORED = 16;
export const DIRECTMANIPULATION_HORIZONTALALIGNMENT_NONE = 0;
export const DIRECTMANIPULATION_HORIZONTALALIGNMENT_LEFT = 1;
export const DIRECTMANIPULATION_HORIZONTALALIGNMENT_CENTER = 2;
export const DIRECTMANIPULATION_HORIZONTALALIGNMENT_RIGHT = 4;
export const DIRECTMANIPULATION_HORIZONTALALIGNMENT_UNLOCKCENTER = 8;
export const DIRECTMANIPULATION_VERTICALALIGNMENT_NONE = 0;
export const DIRECTMANIPULATION_VERTICALALIGNMENT_TOP = 1;
export const DIRECTMANIPULATION_VERTICALALIGNMENT_CENTER = 2;
export const DIRECTMANIPULATION_VERTICALALIGNMENT_BOTTOM = 4;
export const DIRECTMANIPULATION_VERTICALALIGNMENT_UNLOCKCENTER = 8;
export const DIRECTMANIPULATION_INPUT_MODE_AUTOMATIC = 0;
export const DIRECTMANIPULATION_INPUT_MODE_MANUAL = 1;
export const DIRECTMANIPULATION_DRAG_DROP_READY = 0;
export const DIRECTMANIPULATION_DRAG_DROP_PRESELECT = 1;
export const DIRECTMANIPULATION_DRAG_DROP_SELECTING = 2;
export const DIRECTMANIPULATION_DRAG_DROP_DRAGGING = 3;
export const DIRECTMANIPULATION_DRAG_DROP_CANCELLED = 4;
export const DIRECTMANIPULATION_DRAG_DROP_COMMITTED = 5;
export const DIRECTMANIPULATION_DRAG_DROP_CONFIGURATION_VERTICAL = 1;
export const DIRECTMANIPULATION_DRAG_DROP_CONFIGURATION_HORIZONTAL = 2;
export const DIRECTMANIPULATION_DRAG_DROP_CONFIGURATION_SELECT_ONLY = 16;
export const DIRECTMANIPULATION_DRAG_DROP_CONFIGURATION_SELECT_DRAG = 32;
export const DIRECTMANIPULATION_DRAG_DROP_CONFIGURATION_HOLD_DRAG = 64;
export const DIRECTMANIPULATION_INTERACTION_BEGIN = 0;
export const DIRECTMANIPULATION_INTERACTION_TYPE_MANIPULATION = 1;
export const DIRECTMANIPULATION_INTERACTION_TYPE_GESTURE_TAP = 2;
export const DIRECTMANIPULATION_INTERACTION_TYPE_GESTURE_HOLD = 3;
export const DIRECTMANIPULATION_INTERACTION_TYPE_GESTURE_CROSS_SLIDE = 4;
export const DIRECTMANIPULATION_INTERACTION_TYPE_GESTURE_PINCH_ZOOM = 5;
export const DIRECTMANIPULATION_INTERACTION_END = 100;
export const DIRECTMANIPULATION_AUTOSCROLL_CONFIGURATION_STOP = 0;
export const DIRECTMANIPULATION_AUTOSCROLL_CONFIGURATION_FORWARD = 1;
export const DIRECTMANIPULATION_AUTOSCROLL_CONFIGURATION_REVERSE = 2;

// Structs

// Native Libraries

// Symbols

