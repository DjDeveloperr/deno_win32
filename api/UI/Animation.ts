/// Auto-generated by Deno Win32: Windows.Win32.UI.Animation.Apis

import * as util from "../../util.ts";

// Enums
export type UI_ANIMATION_UPDATE_RESULT = number;
export type UI_ANIMATION_MANAGER_STATUS = number;
export type UI_ANIMATION_MODE = number;
export type UI_ANIMATION_REPEAT_MODE = number;
export type UI_ANIMATION_ROUNDING_MODE = number;
export type UI_ANIMATION_STORYBOARD_STATUS = number;
export type UI_ANIMATION_SCHEDULING_RESULT = number;
export type UI_ANIMATION_PRIORITY_EFFECT = number;
export type UI_ANIMATION_SLOPE = number;
export type UI_ANIMATION_DEPENDENCIES = number;
export type UI_ANIMATION_IDLE_BEHAVIOR = number;
export type UI_ANIMATION_TIMER_CLIENT_STATUS = number;

// Constants
export const UI_ANIMATION_SECONDS_EVENTUALLY = "-1";
export const UI_ANIMATION_REPEAT_INDEFINITELY = "-1";
export const UI_ANIMATION_REPEAT_INDEFINITELY_CONCLUDE_AT_END = "-1";
export const UI_ANIMATION_REPEAT_INDEFINITELY_CONCLUDE_AT_START = "-2";
export const UI_ANIMATION_SECONDS_INFINITE = "-1";
export const UI_ANIMATION_UPDATE_NO_CHANGE = 0;
export const UI_ANIMATION_UPDATE_VARIABLES_CHANGED = 1;
export const UI_ANIMATION_MANAGER_IDLE = 0;
export const UI_ANIMATION_MANAGER_BUSY = 1;
export const UI_ANIMATION_MODE_DISABLED = 0;
export const UI_ANIMATION_MODE_SYSTEM_DEFAULT = 1;
export const UI_ANIMATION_MODE_ENABLED = 2;
export const UI_ANIMATION_REPEAT_MODE_NORMAL = 0;
export const UI_ANIMATION_REPEAT_MODE_ALTERNATE = 1;
export const UI_ANIMATION_ROUNDING_NEAREST = 0;
export const UI_ANIMATION_ROUNDING_FLOOR = 1;
export const UI_ANIMATION_ROUNDING_CEILING = 2;
export const UI_ANIMATION_STORYBOARD_BUILDING = 0;
export const UI_ANIMATION_STORYBOARD_SCHEDULED = 1;
export const UI_ANIMATION_STORYBOARD_CANCELLED = 2;
export const UI_ANIMATION_STORYBOARD_PLAYING = 3;
export const UI_ANIMATION_STORYBOARD_TRUNCATED = 4;
export const UI_ANIMATION_STORYBOARD_FINISHED = 5;
export const UI_ANIMATION_STORYBOARD_READY = 6;
export const UI_ANIMATION_STORYBOARD_INSUFFICIENT_PRIORITY = 7;
export const UI_ANIMATION_SCHEDULING_UNEXPECTED_FAILURE = 0;
export const UI_ANIMATION_SCHEDULING_INSUFFICIENT_PRIORITY = 1;
export const UI_ANIMATION_SCHEDULING_ALREADY_SCHEDULED = 2;
export const UI_ANIMATION_SCHEDULING_SUCCEEDED = 3;
export const UI_ANIMATION_SCHEDULING_DEFERRED = 4;
export const UI_ANIMATION_PRIORITY_EFFECT_FAILURE = 0;
export const UI_ANIMATION_PRIORITY_EFFECT_DELAY = 1;
export const UI_ANIMATION_SLOPE_INCREASING = 0;
export const UI_ANIMATION_SLOPE_DECREASING = 1;
export const UI_ANIMATION_DEPENDENCY_NONE = 0;
export const UI_ANIMATION_DEPENDENCY_INTERMEDIATE_VALUES = 1;
export const UI_ANIMATION_DEPENDENCY_FINAL_VALUE = 2;
export const UI_ANIMATION_DEPENDENCY_FINAL_VELOCITY = 4;
export const UI_ANIMATION_DEPENDENCY_DURATION = 8;
export const UI_ANIMATION_IDLE_BEHAVIOR_CONTINUE = 0;
export const UI_ANIMATION_IDLE_BEHAVIOR_DISABLE = 1;
export const UI_ANIMATION_TIMER_CLIENT_IDLE = 0;
export const UI_ANIMATION_TIMER_CLIENT_BUSY = 1;

// Structs

export type UI_ANIMATION_KEYFRAME = Deno.PointerValue;

// Native Libraries

// Symbols

