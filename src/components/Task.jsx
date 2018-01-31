import React from 'react';
import ProgressBar from './ProgressBar';
import styled from 'styled-components';
import Status from './Status';

const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;
const Description = styled.div``;
const Footer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

class Task extends React.Component {
  render() {
    const task = this.props.task;
    const { progress, description, status, date } = this.props.task;
    return (
      <div>
        <Header task={task}>
          <Status status={status} />
          <div>{date}</div>
        </Header>
        <Description>{description}</Description>
        <Footer>
          <ProgressBar progress={progress} status={status} />
          {/*<FaCheckSquareO />*/}
        </Footer>
      </div>
    );
  }
}

export default Task;
