import React from "react";
import styled from "styled-components";

const Panel = styled.div`font-size: 30px;`;

class TaskTitle extends React.Component {
  render() {
    return <Panel>{this.props.children}</Panel>;
  }
}

export default TaskTitle;
