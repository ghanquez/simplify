import React from "react";
import styled from "styled-components";

const Panel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

class HeaderInfo extends React.Component {
  render() {
    const { date, assignedBy } = this.props;
    return (
      <Panel>
        <div>{date}</div>
        <div>{assignedBy}</div>
      </Panel>
    );
  }
}

export default HeaderInfo;
