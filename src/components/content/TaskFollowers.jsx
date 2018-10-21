import React from "react";
import styled from "styled-components";
import TaskFollower from "./TaskFollower";
import FaPlus from "react-icons/lib/fa/plus";

const Panel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 30px;
`;

const FollowersPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const AddAFollower = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: blue;
  border-radius: 50%;
  margin-left: 5px;
  cursor: pointer;
`;

export default class TaskFollowers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { followers: this.props.followers };
  }

  computeFollowerColor = follower => {
    if (follower === "KO") {
      return "green";
    } else if (follower === "LO") {
      return "red";
    } else if (follower === "DA") {
      return "orange";
    } else {
      return "yellow";
    }
  };

  addFollower = () => {
    this.setState(previousState => ({
      followers: [...previousState.followers, "KK"]
    }));
  };

  render() {
    const { followers } = this.state;
    return (
      <Panel>
        <FollowersPanel>
          <div>Followers</div>
          {followers.map((follower, idx) => {
            const color = this.computeFollowerColor(follower);
            return <TaskFollower follower={follower} color={color} />;
          })}
          <AddAFollower onClick={this.addFollower}>
            <FaPlus />
          </AddAFollower>
        </FollowersPanel>
        <a style={{ textDecoration: "underline" }} href="/">Follow Task</a>
      </Panel>
    );
  }
}
