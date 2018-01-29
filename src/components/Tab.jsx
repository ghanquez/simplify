import * as React from 'react';
import styled from 'styled-components';
import theme from '../config/theme';

const Panel = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 3px solid ${theme.tab.borderColor};
`;

export default class Tab extends React.Component {
  render() {
    return <Panel>{this.props.children}</Panel>;
  }
}
