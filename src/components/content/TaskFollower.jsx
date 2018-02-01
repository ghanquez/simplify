import * as React from "react";
import styled from "styled-components";

export default class TaskFollower extends React.Component {
  render() {
    const { follower = "", color } = this.props;
    const TaskFollowerStyle = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px ${color} solid;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-left: 10px;
      margin-right: 10px;
    `;
    return <TaskFollowerStyle>{follower.toUpperCase()}</TaskFollowerStyle>;
  }
}
