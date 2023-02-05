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
      background={"#1C2127"}
      pad="xsmall"
      onClick={() => {
        props.setIsOpen(!props.isOpen);
      }}
      style={{
        borderBottom: "2px solid black",
      }}
    >
      <Box direction="row" justify="start" fill="horizontal">
        <Update size="large" color="#C5CBD3" />
        &nbsp;&nbsp;
        <Text size="xxlarge" color={"#C5CBD3"} alignSelf="center">
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
