import { Notification } from "grommet";
import { Clipboard } from "grommet-icons";
import { useEffect, useState } from "react";
import _ from "lodash";
import { getJD, getMJD, toDOY, toISO, toLocal, toMilli } from "../../functions/time";
import { TimeDisplay } from "../util/TimeDisplay";

import { copy } from "../../functions/clipboard";
interface ITimesNow {
  mjd: number;
  jd: number;
  iso: String;
  local: String;
  milli: number;
  doy:number
}

/**
 * compute all times
 * @returns ITimesNow object
 */
const computeTimesNow = (): ITimesNow => {
  let now = new Date();
  return {
    mjd: getMJD(now),
    jd: getJD(now),
    iso: toISO(now),
    local: toLocal(now),
    milli: toMilli(now),
    doy: toDOY(now)
  };
};

function AllTimes() {
  /* Hooks */
  const [timesNow, setTimesNow] = useState(computeTimesNow());
  const [visible, setVisible] = useState<boolean | undefined>(false);
  /* Hooks - update */
  const onOpen = () => setVisible(true);
  const onClose = () => setVisible(undefined);
  /* Timer */
  useEffect(() => {
    setTimeout(() => {
      setTimesNow(computeTimesNow());
    }, 1000);
  });

  return (
    <>
      <TimeDisplay
        title="Local"
        now={timesNow.local}
        onClick={() => {
          copy(timesNow.local);
          onOpen();
        }}
      />
      <TimeDisplay
        title="UTC DOY"
        now={timesNow.doy}
        onClick={() => {
          copy(timesNow.doy);
          onOpen();
        }}
      />
      <TimeDisplay
        title="ISO / UTC"
        now={timesNow.iso}
        onClick={() => {
          copy(timesNow.iso);
          onOpen();
        }}
      />
      <TimeDisplay
        title="Modified Julian Date (MJD)"
        now={_.round(timesNow.mjd, 5)}
        onClick={() => {
          copy(timesNow.mjd);
          onOpen();
        }}
      />
      <TimeDisplay
        title="Julian Date (JD)"
        now={_.round(timesNow.jd, 5)}
        onClick={() => {
          copy(timesNow.jd);
          onOpen();
        }}
      />
      <TimeDisplay
        title="Milliseconds Since Unix Epoch"
        now={_.round(timesNow.milli, 5)}
        onClick={() => {
          copy(timesNow.milli);
          onOpen();
        }}
      />
      {visible && (
        <Notification
          toast
          title="copied time to clipboard"
          onClose={onClose}
          time={1000}
          icon={<Clipboard />}
          status="normal"
        />
      )}
    </>
  );
}

export default AllTimes;
