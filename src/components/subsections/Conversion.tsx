import { Box, Button, Form, FormField, Select, TextInput, Text } from "grommet";
import {  Update } from "grommet-icons";
import React from "react";
import { options, TimeType } from "../../functions";
import { convert } from "../../functions/convert";
import { isoNow } from "../../functions/now";

export interface IState {
  fromType: TimeType;
  fromValue: string | number;
  toType: TimeType;
}

interface IProps {}
class Conversion extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      fromValue: isoNow(),
      fromType: TimeType.ISO,
      toType: TimeType.MJD,
    };
  }

  /**
   * fetch the current converted value based on state
   * @returns
   */
  toValue = (): string | number => {
    return convert(
      this.state.fromValue,
      this.state.fromType,
      this.state.toType
    );
  };

  render() {
    return (
      <Box margin={"large"}>
        <Form>
          <FormField>
            <Select
              style={{ color: "#8F99A8" }}
              id="selectFrom"
              placeholder={this.state.fromType}
              value={this.state.fromType}
              options={options}
              onChange={({ option }) => {
                this.setState({
                  fromType: option,
                  fromValue: convert(
                    this.state.fromValue,
                    this.state.fromType,
                    option
                  ),
                });
              }}
            />
            <TextInput
              value={this.state.fromValue}
              size="large"
              onChange={(e) => {
                this.setState({
                  fromValue: e.target.value,
                });
              }}
            />
          </FormField>
          <FormField>
            <div>
              &nbsp;&nbsp;&nbsp;
              <Button
                hoverIndicator="light-1"
                onClick={() => {
                  this.setState({
                    fromValue: this.toValue(),
                    fromType: this.state.toType,
                    toType: this.state.fromType,
                  });
                }}
                active
              >
                <Box pad="small" direction="row" align="center" gap="small">
                  <Update color="black" />
                  <Text>Swap</Text>
                </Box>
              </Button>
            </div>
          </FormField>
          <FormField>
            <Select
              style={{ color: "#8F99A8" }}
              id="selectTo"
              placeholder={this.state.fromType}
              value={this.state.toType}
              options={options}
              onChange={({ option }) => {
                this.setState({
                  toType: option,
                });
              }}
            />
            <TextInput value={this.toValue()} size="large" />
          </FormField>
        </Form>
      </Box>
    );
  }
}

export default Conversion;
export { Conversion };
