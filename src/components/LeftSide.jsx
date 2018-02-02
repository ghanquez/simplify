import * as React from "react";
import styled from "styled-components";
import Block from "./Block";
import BlockItem from "./BlockItem";
import FaUser from "react-icons/lib/fa/user";
import FaInBox from "react-icons/lib/fa/inbox";
import FaShareAlt from "react-icons/lib/fa/share-alt";
import FaSliders from "react-icons/lib/fa/sliders";
import FaCalendar from "react-icons/lib/fa/calendar";
import theme from "../config/theme";
import members from "../data/members";
import { DropdownButton, MenuItem, ButtonToolbar } from "react-bootstrap";

const Panel = styled.div`
  height: 100%;
  width: 390px;
  min-width: 80px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid black;
  line-height: 50px;
`;

const Header = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
`;

const MyButton = styled.button`
  background-color: ${theme.global.button.backgroundColor};
  color: white;
  width: 60%;
  height: auto;
  border: none;
  box-shadow: 0 2px 20px -2px ${theme.global.button.backgroundColor};
`;

const Blocks = styled.div``;

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

const MyDropdownButton = styled(DropdownButton)`
  background-color: transparent;
  width: 100%;
`;

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
    const BUTTONS = ["Simplify"];
    //const { members } = this.state;
    return (
      <Panel>
        <Header style={{ textAlign: "center" }}>
          <ButtonToolbar>
            {BUTTONS.map((title, i) => {
              return (
                <MyDropdownButton
                  bsStyle={title}
                  title={title}
                  key={i}
                  id={`dropdown-basic-${i}`}
                >
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem eventKey="2">Another action</MenuItem>
                  <MenuItem eventKey="3" active>
                    Active Item
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">Separated link</MenuItem>
                </MyDropdownButton>
              );
            })}
          </ButtonToolbar>
          <hr />
          <MyButton>Add Task</MyButton>
        </Header>
        <Blocks>
          <Block title="RECENT">
            <BlockItem icon={<FaUser />}>Profile</BlockItem>
            <BlockItem icon={<FaInBox />}>Tasks</BlockItem>
            <BlockItem icon={<FaShareAlt />}>Shared Items</BlockItem>
            <BlockItem icon={<FaSliders />}>Admin Dash</BlockItem>
            <BlockItem icon={<FaCalendar />}>Calendar</BlockItem>
          </Block>
          {members ? (
            <Block title="TEAM">
              <Profile>
                {members.map((path, idx) => {
                  return <img title={path} alt={path} key={idx} src={path} />;
                })}
                <Infos>+ 35 more</Infos>
              </Profile>
            </Block>
          ) : null}
        </Blocks>
      </Panel>
    );
  }
}
