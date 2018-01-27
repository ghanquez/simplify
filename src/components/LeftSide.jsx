import * as React from "react";
import styled from "styled-components";
import Block from "./Block";
import BlockItem from "./BlockItem";
import FaUser from "react-icons/lib/fa/user";
import FaInBox from "react-icons/lib/fa/inbox";
import FaShareAlt from "react-icons/lib/fa/share-alt";
import FaSliders from "react-icons/lib/fa/sliders";
import FaCalendar from "react-icons/lib/fa/calendar";
import ErrorBoundary from "../util/ErrorBoundary";

const Panel = styled.div`
  height: 100%;
  width: 390px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid black;
  line-height: 50px;
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

const Infos = styled.div`margin-left: 15px;`;

const imgRootPath =
  "https://rawgit.com/Kribou/simplify/66983ce6e4242211f2b05d1417435c35b26145d4/src/img/";

const members = ["1033", "694", "565", "3", "468"];

export default class LeftSide extends React.Component {
  /* constructor(props) {
    super(props);
    this.state = { members: [] };
  } */

  /* addARandomImage = () => {
    const width = 30;
    const height = 30;
    const urlToFetch = `https://picsum.photos/${width}/${height}/?random`;
    fetch(urlToFetch).then(response => {
      this.setState(previousState => {
        return { members: [...previousState.members, response.url] };
      });
    });
  }; */

  /* componentWillMount() {
    for (let i = 0; i < 5; i++) {
      this.addARandomImage();
    }
  } */

  render() {
    //const { members } = this.state;
    return (
      <Panel>
        <button>Add Task</button>
        <Block title="RECENT" height={200}>
          <div>
            <FaUser />Profile
          </div>
          <div>
            <FaInBox />Tasks
          </div>

          <div>
            <FaShareAlt />Shared Items
          </div>
          <div>
            <FaSliders />Admin Dash
          </div>
          <div>
            <FaCalendar /> Calendar
          </div>
        </Block>
        {members ? (
          <Block title="TEAM" height={50}>
            <Profile>
              {members.map((member, idx) => {
                const path = `${imgRootPath}/${member}.jpg`;
                return <img title={path} alt={path} key={idx} src={path} />;
              })}
              <Infos>+ 35 more</Infos>
            </Profile>
          </Block>
        ) : null}
      </Panel>
    );
  }
}
