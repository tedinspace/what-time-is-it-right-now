import { TimeType } from ".";
import {
  getJD,
  getMJD,
  toISO,
  toLocal,
  toMilli,
} from "./time";

/**
 * primary convert functoin
 * @param from - value to convert
 * @param fromType - value type
 * @param toType - type to convert to
 * @returns
 */
export const convert = (
  from: string | number,
  fromType: TimeType,
  toType: TimeType
) => {
  switch (fromType) {
    case TimeType.ISO:
      return isoTo(from + "", toType);
    case TimeType.JD:
      return jdTo(+from, toType);
    case TimeType.LOCAL:
      return localTo(from + "", toType);
    case TimeType.MILLI:
      return millTo(+from, toType);
    case TimeType.MJD:
      return mjdTo(+from, toType);
    default:
      return "";
  }
};

/**
 * convert iso string to ____
 * @param iso - iso string
 * @param to - type to convert to
 * @returns iso as ____
 */
const isoTo = (iso: string, to: TimeType): string | number => {
  let asDate = new Date(iso);
  switch (to) {
    case TimeType.ISO:
      return iso;
    case TimeType.JD:
      return getJD(asDate);
    case TimeType.LOCAL:
      return toLocal(asDate);
    case TimeType.MILLI:
      return toMilli(asDate);
    case TimeType.MJD:
      return getMJD(asDate);
    default:
      return "";
  }
};

/**
 * convert local string to ____
 * @param local - local string
 * @param to - type to convert to
 * @returns local string as ____
 */
const localTo = (local: string, to: TimeType): string | number => {
  let asDate = new Date(local);
  switch (to) {
    case TimeType.ISO:
      return toISO(asDate);
    case TimeType.JD:
      return getJD(asDate);
    case TimeType.LOCAL:
      return local;
    case TimeType.MILLI:
      return toMilli(asDate);
    case TimeType.MJD:
      return getMJD(asDate);
    default:
      return "";
  }
};

/**
 * convert milli to ____
 * @param milli - milli value
 * @param to - type to convert to
 * @returns milli as ____
 */
const millTo = (milli: number, to: TimeType): string | number => {
  let asDate = new Date(milli);
  switch (to) {
    case TimeType.ISO:
      return toISO(asDate);
    case TimeType.JD:
      return getJD(asDate);
    case TimeType.LOCAL:
      return toLocal(asDate);
    case TimeType.MILLI:
      return milli;
    case TimeType.MJD:
      return getMJD(asDate);
    default:
      return "";
  }
};

/**
 * convert MJD to _____
 * @param mjd - mjd value
 * @param to type to convert to
 * @returns MJD as _____
 */
const mjdTo = (mjd: number, to: TimeType): string | number => {
  let asDate: Date = jd2date(mjd2jd(mjd));
  switch (to) {
    case TimeType.ISO:
      return toISO(asDate);
    case TimeType.JD:
      return getJD(asDate);
    case TimeType.LOCAL:
      return toLocal(asDate);
    case TimeType.MILLI:
      return toMilli(asDate);
    case TimeType.MJD:
      return mjd;
    default:
      return "";
  }
};
/**
 * convert JD to _____
 * @param jd - jd value
 * @param to - type to convert to
 * @returns JD as _____
 */
const jdTo = (jd: number, to: TimeType): string | number => {
  let asDate: Date = jd2date(jd);
  switch (to) {
    case TimeType.ISO:
      return toISO(asDate);
    case TimeType.JD:
      return jd;
    case TimeType.LOCAL:
      return toLocal(asDate);
    case TimeType.MILLI:
      return toMilli(asDate);
    case TimeType.MJD:
      return getMJD(asDate);
    default:
      return "";
  }
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
/**
 * JD --> Date
 * @param jd 
 * @returns 
 */
export const jd2date = (jd: number): Date => {
  return new Date(jd2milli(jd));
};
/**
 * JD --> Milli
 * @param jd 
 * @returns 
 */
export const jd2milli = (jd: number) => {
  let milli = (jd - 2440587.5) * 86400000 
  return milli;
};
