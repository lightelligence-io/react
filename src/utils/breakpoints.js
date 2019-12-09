/**
 * get the min-width for the given active breakpoint (e.g. "768px")
 *
 * @param breakpoint (e.g. "xl")
 * @returns number
 * @example
 *  getWidthForBreakpoint('xl') -> "1200"
 */
export const getBreakpointWidth = (breakpoint) =>
  convertBreakpointValueToNumber(getBreakpointValue(breakpoint));

/**
 * get the value for the given active breakpoint (e.g. "768px")
 *
 * @param breakpoint (e.g. "xl")
 * @returns string
 * @example
 *  getWidthForBreakpoint('xl') -> "1200px"
 */
export const getBreakpointValue = (breakpoint) =>
  getComputedStyle(document.documentElement)
    .getPropertyValue(`--olt-breakpoint-${breakpoint}`)
    .trim();

/**
 * Get the name of the breakpoint that is currently "active"
 *
 * @returns string
 * @example
 *  getCurrentBreakpoint() -> "lg"
 */
export const getCurrentBreakpoint = () =>
  getComputedStyle(document.documentElement)
    .getPropertyValue(`--olt-breakpoint-current`)
    .trim();

/**
 * Converts the value (e.g. "1200px") to a number (e.g. 1200)
 *
 * @param value (string)
 * @returns number
 * @example
 *  convertBreakpointValueToNumber('1200px') -> 1200
 */
export const convertBreakpointValueToNumber = (value) =>
  Number(value.replace(/\D/g, ''));
