import { Box, Text, Notification } from "grommet";
import { Clipboard } from "grommet-icons";
import React, { useEffect, useState } from "react";
import { TimeDisplay } from "./components/TimeDisplay";
import { getJD, getMJD } from "./functions/time";
import _ from "lodash";
import { copy } from "./functions/clipboard";
interface ITimesNow {
  mjd: number;
  jd: number;
  iso: String;
  local: String;
}

const computeTimesNow = (): ITimesNow => {
  let now = new Date();
  return {
    mjd: getMJD(now),
    jd: getJD(now),
    iso: now.toISOString(),
    local: now.toLocaleTimeString() + " - " + now.toLocaleDateString(),
  };
};

function App() {
  const [timesNow, setTimesNow] = useState(computeTimesNow());
  const [visible, setVisible] = useState<any>(false);
  const onOpen = () => setVisible(true);
  const onClose = () => setVisible(undefined);
  useEffect(() => {
    setTimeout(() => {
      setTimesNow(computeTimesNow());
    }, 1000);
  });

  return (
    <Box margin={"small"} direction="column">
      <Text color={"#8ABBFF"} size="xxlarge">
        What Time is It Right Now
      </Text>
      <br />
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
    </Box>
  );
}

export default App;
