import { Box, Paragraph, Text } from "grommet";

export function Information() {
  return (
    <Box margin={"medium"}>
      <Text size="xlarge">
        <b>ISO / UTC</b>
      </Text>
      <Paragraph>
        <div>
          <Text size="large">Q: What is UTC?</Text>
        </div>
      </Paragraph>
      <Paragraph>
        <div>
          <Text size="large">A: UTC</Text>
        </div>
      </Paragraph>
      <Box margin={"small"}></Box>
    </Box>
  );
}
