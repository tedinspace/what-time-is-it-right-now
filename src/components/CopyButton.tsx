import { Box, Button } from "grommet";
import { Copy } from "grommet-icons";
import React from "react";
interface IProps {
  onClick(): void;
}
export  function CopyButton(props: IProps) {
  return <Button hoverIndicator="light-1" onClick={props.onClick} active>
    <Box pad="xsmall" direction="row" align="center" gap="small">
      <Copy color="black" />
    </Box>
  </Button>;
}
