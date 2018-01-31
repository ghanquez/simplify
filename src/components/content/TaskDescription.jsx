import React from "react";

class TaskDescription extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default TaskDescription;
