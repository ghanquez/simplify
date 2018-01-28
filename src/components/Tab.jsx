import * as React from "react";
import styled from "styled-components";

const Panel = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 3px solid #440784;
`;

export default class Tab extends React.Component {
  render() {
    return <Panel>{this.props.children}</Panel>;
  }
}
