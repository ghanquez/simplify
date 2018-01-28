import * as React from "react";
import styled from "styled-components";

const Panel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default class NavBar extends React.Component {
  render() {
    return <Panel>{this.props.children}</Panel>;
  }
}
