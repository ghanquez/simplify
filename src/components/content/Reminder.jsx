import * as React from "react";
import styled from "styled-components";
import FaEllipsisH from "react-icons/lib/fa/ellipsis-h";
import FaClockO from "react-icons/lib/fa/clock-o";
import FaPlus from "react-icons/lib/fa/plus";
import members from "../../data/members";

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

const Members = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  border-bottom: 1px solid ${defaultColor};
`;

const Ellipsis = styled(FaEllipsisH)`
  font-size: smaller;
  color: ${defaultColor};
`;

const MembersHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
`;

const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    border-radius: 50%;
    border: 2px solid white;
    position: relative;
    margin-left: -10px;
    left: 10px;
  }
`;

export default class Reminder extends React.Component {
  render() {
    const { title, email, date } = this.props.reminder;
    return (
      <ReminderPanel>
        <Header>
          <div style={{ fontWeight: "bold" }}>{title}</div>
          <Ellipsis />
        </Header>
        <Infos>
          <div>{email}</div>
          <div>
            <FaClockO style={{ color: "#A89BFF" }} />
            {date}
          </div>
        </Infos>

        <Members>
          <MembersHeader>
            <div>
              {members.length} member{members.length > 1 ? "s" : ""}
            </div>
            <div>
              <FaPlus />
            </div>
          </MembersHeader>
          <MembersHeader>
            <Profile>
              {members.map((member, idx) => {
                return <img src={member} alt={member} />;
              })}
            </Profile>
            <div>+5 more</div>
          </MembersHeader>
        </Members>
      </ReminderPanel>
    );
  }
}
