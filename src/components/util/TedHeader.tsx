import { Header, Box, Text } from "grommet";
import { Deploy } from "grommet-icons";

export const DARK1 = "#1C2127";
export const DARK3 = "#2F343C"

export const LIGHT0 = "#f0e5e1"
export const POP1 = "#c96d4f"
export const TED = "#a4c8de"
export function TedHeader() {
  return (
    <Header
      pad="small"
      background={DARK3}
      style={{
        borderBottom: "2px solid " + DARK1,
      }}
    >
      <Box direction="row">
        <Deploy size="medium" color={POP1} />
        &nbsp;&nbsp;
        <Text size="large">
          <b><span style={{color:TED}}>Ted</span>Site</b>
          <i>.com</i>
        </Text>
      </Box>
    </Header>
  );
}
