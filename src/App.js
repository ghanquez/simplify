import React, { Component } from 'react';
import LeftSide from './components/LeftSide';
import Tasks from './components/Tasks';
import Content from './components/Content';
import styled from 'styled-components';

const Row = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
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
