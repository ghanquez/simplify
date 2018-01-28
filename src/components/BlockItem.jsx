import * as React from "react";
import styled from "styled-components";

const Panel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
const Icon = styled.div`
  margin-left: 5px;
  margin-right: 15px;
`;
const Label = styled.div``;

export default class BlockItem extends React.Component {
  render() {
    const { icon } = this.props;
    return (
      <Panel>
        <Icon>{icon}</Icon>
        <Label>{this.props.children}</Label>
      </Panel>
    );
  }
}
