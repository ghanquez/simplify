import React from 'react';
import styled from 'styled-components';

import theme from '../config/theme';

class Status extends React.Component {
  computeBackgroundColor(status) {
    return theme.tasks.status.backgroundColor[status];
  }

  computeColor(status) {
    return theme.tasks.status.color[status];
  }

  render() {
    const { status } = this.props;
    const Panel = styled.div`
      background-color: ${this.computeBackgroundColor(status)};
      color: ${this.computeColor(status)};
      border-radius: 2px;
      padding: 5px 20px;
    `;
    return <Panel>{status}</Panel>;
  }
}

export default Status;
