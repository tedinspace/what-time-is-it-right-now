import { Box, Text } from "grommet";
import { Add, CircleInformation, Subtract } from "grommet-icons";

interface IProps {
  isOpen: boolean;
  setIsOpen(isOpen: boolean): void;
}
export function InfoSubHeader(props: IProps) {
  return (
    <Box
      fill="horizontal"
      direction="row"
      background={"level1"}
      pad="xsmall"
      onClick={() => {
        props.setIsOpen(!props.isOpen);
      }}
      border={{
        side: "bottom",
        color: "bar_accent",
        size: "3px",
      }}
    >
      <Box direction="row" justify="start" fill="horizontal">
        <CircleInformation size="large" color="header" />
        &nbsp;&nbsp;
        <Text size="xxlarge" color={"header"} alignSelf="center">
          <i>Info</i>
        </Text>
      </Box>
      <Box fill="vertical" alignSelf="center">
        {props.isOpen ? <Subtract size="medium" /> : <Add size="medium" />}
      </Box>
      &nbsp;&nbsp;
    </Box>
  );
}
