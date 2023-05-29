import { Box, Paragraph, Text } from "grommet";
import { POP2 } from "../../functions/colors";

export function Information() {
  return (
    <Box margin={"medium"}>
      <Text size="xlarge" color={POP2}>
        <b>Why Did I Make This?</b>
      </Text>
      <Paragraph size="large">
        Well a variety of reasons. Sometimes I need reliable inputs to test time
        conversion functions. Sometimes I need to sanity check the MJD epoch
        when looking at data output. Sometimes I need inputs to test functions.
        In any case, I thought it would be helpful to have a one-stop-shop
        webpage for all the time systems I work with.
      </Paragraph>
    </Box>
  );
}
