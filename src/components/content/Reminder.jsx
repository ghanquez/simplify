import * as React from "react";
import styled from "styled-components";
import FaEllipsisH from "react-icons/lib/fa/ellipsis-h";

const defaultColor = "#7451C0";

const ReminderPanel = styled.div`
  height: 300px;
  width: 300px;
  background-color: #3b007a;
  border-radius: 15px;
  margin-right: 30px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid ${defaultColor};
  color: ${defaultColor};
`;

const Members = styled.div``;

const Ellipsis = styled(FaEllipsisH)`
  font-size: smaller;
  color: ${defaultColor};
`;

export default class Reminder extends React.Component {
  render() {
    const { title, email, date, members } = this.props.reminder;
    return (
      <ReminderPanel>
        <Header>
          <div style={{ fontWeight: "bold" }}>{title}</div>
          <Ellipsis />
        </Header>
        <Infos>
          <div>{email}</div>
          <div>{date}</div>
        </Infos>

        <Members>
          <div>
            {members.length} member{members.length > 1 ? "s" : ""}
          </div>
          <div>{members}</div>
        </Members>
      </ReminderPanel>
    );
  }
}
