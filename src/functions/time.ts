/**
 * convert JS date to Modified Julian Date (MJD) 
 * @param d - Date
 * @returns MJD
 */
export const getMJD = (d: Date): number => {
  return jd2mjd(getJD(d));
};

export const getJD = (d: Date): number => {
  return new Date().getTime() / 86400000 + 2440587.5;
};

export const toISO = (d: Date) => {
  return d.toISOString();
};

export const mjd2jd = (mjd: number): number => {
  return mjd + 2400000.5;
};

export const jd2mjd = (jd: number): number => {
  return jd - 2400000.5;
};

export const mjdNow = (): number => {
  return getMJD(new Date());
};

export const jdNow = (): number => {
  return getJD(new Date());
};

export const isoNow = (): string => {
  return toISO(new Date());
};

