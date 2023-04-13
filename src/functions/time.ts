import { jd2mjd } from "./convert";

/**
 * convert JS date to Modified Julian Date (MJD)
 * @param d - Date
 * @returns MJD
 */
export const getMJD = (d: Date): number => {
  return jd2mjd(getJD(d));
};
/**
 * get Date object as Julian Date
 * @param d
 * @returns
 */
export const getJD = (d: Date): number => {
  return new Date(d).getTime() / 86400000 + 2440587.5;
};
/**
 * convert Date to ISO string
 * @param d
 * @returns
 */
export const toISO = (d: Date): string => {
  return d.toISOString();
};

/**
 * Date to milliseconds
 * @param d
 * @returns
 */
export const toMilli = (d: Date): number => {
  return +d;
};
/**
 * Date to Local string
 * @param d
 * @returns
 */
export const toLocal = (d: Date): string => {
  return d.toLocaleString();
};

/**
 * 
 * @param d 
 * @returns 
 */
export const toDOY = (d: Date): number => {
  let start = new Date(d.getFullYear(), 0, 0);
  let diff =
    +d -
    +start +
    (start.getTimezoneOffset() - d.getTimezoneOffset()) * 60 * 1000;
  let oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};
