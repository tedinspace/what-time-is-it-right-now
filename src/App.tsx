import { Box, Collapsible, Text } from "grommet";
import { Clock, Add, Subtract } from "grommet-icons";
import React, { useState } from "react";
import _ from "lodash";
import AllTimes from "./components/AllTImes";
import { AppHeader } from "./components/AppHeader";
import { NowSubHeader } from "./components/NowSubHeader";

function App() {
  const [isOpen, setIsOpen] = useState<any>(true);
  return (
    <Box direction="column">
      <AppHeader />
      <NowSubHeader
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Collapsible open={isOpen}>
        <AllTimes />
      </Collapsible>
    </Box>
  );
}

export default App;
