import { Notification } from "grommet";
import { Clipboard } from "grommet-icons";
import { useEffect, useState } from "react";
import _ from "lodash";
import { getJD, getMJD, toMilli } from "../functions/time";
import { TimeDisplay } from "./TimeDisplay";

import { copy } from "../functions/clipboard";
interface ITimesNow {
  mjd: number;
  jd: number;
  iso: String;
  local: String;
  milli: number;
}

const computeTimesNow = (): ITimesNow => {
  let now = new Date();
  return {
    mjd: getMJD(now),
    jd: getJD(now),
    iso: now.toISOString(),
    local: now.toLocaleTimeString() + " - " + now.toLocaleDateString(),
    milli: toMilli(now),
  };
};

function AllTimes() {
  const [timesNow, setTimesNow] = useState(computeTimesNow());
  const [visible, setVisible] = useState<boolean | undefined>(false);
  const onOpen = () => setVisible(true);
  const onClose = () => setVisible(undefined);
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
