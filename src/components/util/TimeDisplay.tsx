import { Box, Text } from "grommet";
import { CopyButton } from "./CopyButton";
interface IProps {
  title: string;
  now: any;
  onClick(): void;
}
export function TimeDisplay(props: IProps) {
  return (
    <Box margin={"medium"}>
      <Text size="medium" color={"header"}>
        <b>{props.title}</b>
      </Text>
      <Box margin={"small"}>
        <div>
          <CopyButton onClick={props.onClick} />
          &nbsp;&nbsp;&nbsp;
          <Text size="xlarge" style={{ fontFamily: "Courier New" }}>
            {props.now}
          </Text>
        </div>
      </Box>
      <Box fill="horizontal" style={{borderTop:"1px solid #0b0d0f"}}></Box>
    </Box>
  );
}
