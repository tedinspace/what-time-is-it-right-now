import { Box, Collapsible } from "grommet";
import { useState } from "react";
import AllTimes from "./components/subsections/AllTimes";
import { AppHeader } from "./components/AppHeader";
import { ConvertSubHeader } from "./components/subheaders/ConvertSubHeader";
import { Information } from "./components/subsections/Information";
import { InfoSubHeader } from "./components/subheaders/InfoSubHeader";
import { NowSubHeader } from "./components/subheaders/NowSubHeader";
import { Conversion } from "./components/subsections/Conversion";

function App() {
  const [nowIsOpen, setNowIsOpen] = useState<boolean>(true);
  const [convertIsOpen, setConvertIsOpen] = useState<boolean>(true);
  const [infoIsOpen, setInfoIsOpen] = useState<boolean>(true);
  return (
    <Box direction="column">
      <AppHeader />
      <ConvertSubHeader isOpen={convertIsOpen} setIsOpen={setConvertIsOpen} />
      <Collapsible open={convertIsOpen}>
        <Conversion />
      </Collapsible>
      <NowSubHeader isOpen={nowIsOpen} setIsOpen={setNowIsOpen} />
      <Collapsible open={nowIsOpen}>
        <AllTimes />
      </Collapsible>
      <InfoSubHeader isOpen={infoIsOpen} setIsOpen={setInfoIsOpen} />
      <Collapsible open={infoIsOpen}>
        <Information />
      </Collapsible>
    </Box>
  );
}

export default App;
