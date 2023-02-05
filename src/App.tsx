import { Box, Collapsible } from "grommet";
import { useState } from "react";
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
