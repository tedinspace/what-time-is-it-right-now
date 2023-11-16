import { Box, Text } from "grommet";
import { Add, Update, Subtract } from "grommet-icons";

interface IProps {
  isOpen: boolean;
  setIsOpen(isOpen: boolean): void;
}
export function ConvertSubHeader(props: IProps) {
  return (
    <Box
      fill="horizontal"
      direction="row"
      pad="xsmall"
      onClick={() => {
        props.setIsOpen(!props.isOpen);
      }}
      background={"level1"}
      border={{
        side: "bottom",
        color: "bar_accent",
        size: "3px",
      }}
    >
      <Box direction="row" justify="start" fill="horizontal">
        <Update size="large" color="header" />
        &nbsp;&nbsp;
        <Text size="xxlarge" color={"header"} alignSelf="center">
          <i>Convert</i>
        </Text>
      </Box>
      <Box fill="vertical" alignSelf="center">
        {props.isOpen ? <Subtract size="medium" /> : <Add size="medium" />}
      </Box>
      &nbsp;&nbsp;
    </Box>
  );
}
