import * as React from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import NavBar from './NavBar';
import Tab from './Tab';
import TaskList from './TaskList';

const Panel = styled.div`
  height: 100%;
  width: 390px;
  display: flex;
  flex-direction: column;
`;

const SearchInputStyle = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

const tasks = [
  {
    status: 'PENDING',
    date: '3 min ago',
    description:
      'The monkey-rope is found in all whalers; but it was only in the Pequod that the monkey...',
    progress: 0
  },
  {
    status: 'DELAYED',
    date: '3 min ago',
    description:
      'The monkey-rope is found in all whalers; but it was only in the Pequod that the monkey...',
    progress: 94
  },
  {
    status: 'IN PROGRESS',
    date: '3 min ago',
    description:
      'The monkey-rope is found in all whalers; but it was only in the Pequod that the monkey...',
    progress: 34
  }
];

export default class Tasks extends React.Component {
  render() {
    return (
      <Panel>
        <SearchInputStyle>
          <SearchInput />
        </SearchInputStyle>
        <NavBar>
          <Tab>My Tasks</Tab>
          <Tab>In Progress</Tab>
          <Tab>Projects</Tab>
        </NavBar>
        <TaskList tasks={tasks} />
      </Panel>
    );
  }
}
