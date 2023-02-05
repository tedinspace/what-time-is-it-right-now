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
  return new Date().getTime() / 86400000 + 2440587.5;
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
 * MJD --> JD
 * @param mjd
 * @returns
 */
export const mjd2jd = (mjd: number): number => {
  return mjd + 2400000.5;
};
/**
 * JD --> MJD
 * @param jd
 * @returns
 */
export const jd2mjd = (jd: number): number => {
  return jd - 2400000.5;
};
