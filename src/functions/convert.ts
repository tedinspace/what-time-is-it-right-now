import { TimeType } from ".";
import {
  getJD,
  getMJD,
  jd2date,
  mjd2jd,
  toISO,
  toLocal,
  toMilli,
} from "./time";

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
 *
 * @param iso
 * @param to
 * @returns
 */
export const isoTo = (iso: string, to: TimeType): string | number => {
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
 *
 * @param local
 * @param to
 * @returns
 */
export const localTo = (local: string, to: TimeType): string | number => {
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

export const millTo = (milli: number, to: TimeType): string | number => {
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

export const mjdTo = (mjd: number, to: TimeType): string | number => {
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

export const jdTo = (jd: number, to: TimeType): string | number => {
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
