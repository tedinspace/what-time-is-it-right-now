import { Box, Button } from "grommet";
import { Copy } from "grommet-icons";
import { theme } from "../../shared/themes";
interface IProps {
  onClick(): void;
}
export function CopyButton(props: IProps) {
  return (
    <Button
      onClick={props.onClick}
      active
      hoverIndicator={theme.global.colors.orange_medium}
    >
      <Box pad="xxsmall" direction="row" align="center" gap="small">
        <Copy color="black" size="15px" />
      </Box>
    </Button>
  );
}
