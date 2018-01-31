import React from 'react';
import styled from 'styled-components';

class Status extends React.Component {
  computeBackgroundColor(status) {
    if (status === 'PENDING') {
      return 'red';
    } else if (status === 'DELAYED') {
      return 'yellow';
    } else if (status === 'IN PROGRESS') {
      return 'blue';
    }
  }

  computeColor(status) {
    if (status === 'PENDING') {
      return '#910027';
    } else if (status === 'DELAYED') {
      return '#946000';
    } else if (status === 'IN PROGRESS') {
      return '#1C6166';
    }
  }

  render() {
    const { status } = this.props;
    const Panel = styled.div`
  background-color: ${this.computeBackgroundColor(status)};
  color: ${this.computeColor(status)};
  `;
    return <Panel>{status}</Panel>;
  }
}

export default Status;
