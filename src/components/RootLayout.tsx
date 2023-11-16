import { Box, Collapsible } from "grommet";
import { useState } from "react";
import { AppHeader } from "./util/AppHeader";
import { ConvertSubHeader } from "./subheaders/ConvertSubHeader";
import { InfoSubHeader } from "./subheaders/InfoSubHeader";
import { NowSubHeader } from "./subheaders/NowSubHeader";
import AllTimes from "./subsections/AllTimes";
import Conversion from "./subsections/Conversion";
import { Information } from "./subsections/Information";

function RootLayout(props:{darkMode:boolean}) {
  const [nowIsOpen, setNowIsOpen] = useState<boolean>(true);
  const [convertIsOpen, setConvertIsOpen] = useState<boolean>(true);
  const [infoIsOpen, setInfoIsOpen] = useState<boolean>(true);
  return (
    <Box direction="column">
      <AppHeader darkMode={props.darkMode} />
      <NowSubHeader isOpen={nowIsOpen} setIsOpen={setNowIsOpen} />
      <Collapsible open={nowIsOpen}>
        <AllTimes />
      </Collapsible>
      <ConvertSubHeader isOpen={convertIsOpen} setIsOpen={setConvertIsOpen} />
      <Collapsible open={convertIsOpen}>
        <Conversion />
      </Collapsible>
      <InfoSubHeader isOpen={infoIsOpen} setIsOpen={setInfoIsOpen} />
      <Collapsible open={infoIsOpen}>
        <Information />
      </Collapsible>
    </Box>
  );
}

export default RootLayout;
