import { Box, Clock, Text } from "grommet";
import { POP1, TED } from "../functions/colors";

export function AppHeader() {
  return (
    <Box
      direction="row"
      background={"#10151a"}
      style={{ border: "3px solid #111418" }}
    >
      <Box round="full">
        <Clock type="analog" size={"medium"} />
      </Box>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Box fill alignSelf="center">
        <Text color={"#FFFFFF"} size="xxlarge">
          <b>
            What <i style={{color:POP1}}>Time</i> is It{" "}
            <span style={{ color: TED }}>
              <i>Right Now</i>
            </span>
            ?
          </b>
        </Text>
      </Box>
    </Box>
  );
}
