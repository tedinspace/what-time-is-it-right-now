export enum TimeType {
  LOCAL = "Local Time",
  ISO = "UTC / ISO String",
  MJD = "Modified Julian Date (MJD)",
  JD = "Julian Date (JD)",
  MILLI = "Milliseconds since Unix Epoch",
}

export const options: TimeType[] = [
  TimeType.LOCAL,
  TimeType.ISO,
  TimeType.MJD,
  TimeType.JD,
  TimeType.MILLI,
  
];
