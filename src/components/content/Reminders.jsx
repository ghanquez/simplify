import React from "react";
import styled from "styled-components";
import Reminder from "./Reminder";

const Panel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;

class Reminders extends React.Component {
  render() {
    const { reminders = [] } = this.props;
    return (
      <Panel>
        {reminders.map((reminder, idx) => {
          return <Reminder reminder={reminder} key={idx} />;
        })}
      </Panel>
    );
  }
}

export default Reminders;
