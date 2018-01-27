import React, { Component } from "react";
import LeftSide from "./components/LeftSide";
import Tasks from "./components/Tasks";
import Content from "./components/Content";
import styled from "styled-components";

const backgroundColor = "#280264";
const buttonBackgroundColor = "#5760FF";

const Row = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: ${backgroundColor};
  color: white;

  button {
    background-color: ${buttonBackgroundColor};
    color: white;
    width: 150px;
    height: 30px;
    border: none;
    box-shadow: 0 2px 20px -2px #5760ff;
  }
`;

class App extends Component {
  render() {
    return (
      <Row>
        <LeftSide />
        <Tasks />
        <Content />
      </Row>
    );
  }
}

export default App;
