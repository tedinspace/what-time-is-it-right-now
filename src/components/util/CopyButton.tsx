import { Box, Button } from "grommet";
import { Copy } from "grommet-icons";
import {  POP2 } from "../../functions/colors";
interface IProps {
  onClick(): void;
}
export function CopyButton(props: IProps) {
  return (
    <Button  hoverIndicator={POP2} onClick={props.onClick} active>
      <Box pad="xxsmall" direction="row" align="center" gap="small">
        <Copy color="black" size="15px" />
      </Box>
    </Button>
  );
}
