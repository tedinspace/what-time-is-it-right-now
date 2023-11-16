import { Box, Clock, Text } from "grommet";
import "../../index.css";
export function AppHeader(props: { darkMode: boolean }) {
  return (
    <Box
      direction="row"
      id={props.darkMode ? "grid-pattern" : "grid-pattern-light"}
      border={{
        side: "all",
        size: "3px",
        color: "level1",
      }}
    >
      <Box round="full">
        <Clock type="analog" size={"medium"} />
      </Box>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Box fill alignSelf="center">
        <Box direction="row">
          <Text color={"swap_soft"} size="xxlarge">
            <b>What</b>
          </Text>
          &nbsp;
          <Text color={"orange_medium"} size="xxlarge">
            <b>
              <i>Time</i>
            </b>
          </Text>
          &nbsp;
          <Text color={"swap_soft"} size="xxlarge">
            <b>is It</b>
          </Text>
          &nbsp;
          <Text color={"light_blue"} size="xxlarge">
            <b>
              <i>Right Now</i>
            </b>
          </Text>
          &nbsp;
          <Text color={"swap_soft"} size="xxlarge">
            <b>?</b>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
