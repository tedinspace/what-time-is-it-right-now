import { Box, Collapsible } from "grommet";
import { useState } from "react";
import AllTimes from "./components/AllTimes";
import { AppHeader } from "./components/AppHeader";
import { Information } from "./components/Information";
import { InfoSubHeader } from "./components/InfoSubHeader";
import { NowSubHeader } from "./components/NowSubHeader";

function App() {
  const [nowIsOpen, setNowIsOpen] = useState<boolean>(true);
  const [infoIsOpen, setInfoIsOpen] = useState<boolean>(true);
  return (
    <Box direction="column">
      <AppHeader />
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
