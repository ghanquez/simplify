import React from 'react';
import styled from 'styled-components';

const Panel = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 200px;
`;

class ProgressBar extends React.Component {
  computeColor(status) {
    if (status === 'PENDING') {
      return 'red';
    } else if (status === 'DELAYED') {
      return 'yellow';
    } else if (status === 'IN PROGRESS') {
      return 'blue';
    }
  }

  render() {
    const { progress, status } = this.props;

    const progressColor = this.computeColor(status);

    const ProgressPanel = styled.div`
height:5px;
background-color: ${progressColor};
width: ${progress / 100 * 150 + 3}px;
border: 1px solid ${progressColor};
border-radius: 5px;
`;

    return (
      <Panel>
        <ProgressPanel />
        <div>{progress} %</div>
      </Panel>
    );
  }
}

export default ProgressBar;
