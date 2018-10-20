import React, { Component } from 'react';
import LeftSide from './components/LeftSide';
import Tasks from './components/Tasks';
import Content from './components/Content';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import theme from './config/theme';

const Row = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: ${theme.global.backgroundColor};
  color: white;
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
