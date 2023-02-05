import { getJD, getMJD, toISO, toLocal, toMilli } from "./time";

export const mjdNow = (): number => {
  return getMJD(new Date());
};

export const jdNow = (): number => {
  return getJD(new Date());
};

export const isoNow = (): string => {
  return toISO(new Date());
};

export const milliNow = (): number => {
  return toMilli(new Date());
};

export const localNow = ():string=>{
    return toLocal(new Date());
}