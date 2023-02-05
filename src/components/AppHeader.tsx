import { Box, Clock, Text } from "grommet";

export function AppHeader() {
  return (
    <Box
      direction="row"
      background={"#07090a"}
      style={{ border: "3px solid #111418" }}
    >
      <Box round="full">
        <Clock type="analog" size={"medium"} />
      </Box>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Box fill alignSelf="center">
        <Text color={"#FFFFFF"} size="xxlarge">
          <b>What Time is It Right Now</b>
        </Text>
      </Box>
    </Box>
  );
}
