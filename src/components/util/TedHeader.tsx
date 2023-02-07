import { Header, Box, Text } from "grommet";
import { Deploy, Github, Home } from "grommet-icons";

 const DARK3 = "#2F343C"
 const LIGHT0 = "#f0e5e1"
 const TED = "#a4c8de"
export function TedHeader() {
  return (
    <Header
      pad="small"
      background={DARK3}
      style={{
        borderBottom: "2px solid #404854" 
      }}
    >
      <Box direction="row">
      <a href="http://tedsite.com">
          <Deploy size="medium" color={LIGHT0} />
        </a>
        &nbsp;&nbsp;
        <Text size="large">
          <b><span style={{color:TED}}>Ted</span>Site</b>
          <i>.com</i>
        </Text>
      </Box>
      <Box direction="row">
        <a href="https://tedsite.com/">
          <Home color={TED} />
        </a>
        &nbsp;&nbsp;
        <a href="https://github.com/tedinspace">
          <Github color={TED}  />
        </a>
      </Box>
    </Header>
  );
}
