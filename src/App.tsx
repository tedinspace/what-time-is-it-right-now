import { Grommet, grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import { useState } from "react";
import { theme } from "./shared/themes";
import { TedHead } from "./shared/TedHead";
import { fetchThemeSetting, updateThemeSetting } from "./shared/storage";
import RootLayout from "./components/RootLayout";

const theme_merged = deepMerge(grommet, theme);

function App() {
  const [darkMode, toggleDarkLight] = useState(fetchThemeSetting(true));

  return (
    <Grommet full theme={theme_merged} themeMode={darkMode ? "dark" : "light"}>
      <TedHead
        darkMode={darkMode}
        toggleDarkLight={() => {
          toggleDarkLight(!darkMode);
          updateThemeSetting(!darkMode);
        }}
      />
      <RootLayout darkMode={darkMode}/>
    </Grommet>
  );
}

export default App;
