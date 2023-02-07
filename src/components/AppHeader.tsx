import { Box, Clock, Text } from "grommet";
import { TED } from "./util/TedHeader";

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
          <b>
            What Time is It{" "}
            <u style={{ color: TED }}>
              <i>Right Now</i>
            </u>
            ?
          </b>
        </Text>
      </Box>
    </Box>
  );
}
