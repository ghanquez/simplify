import * as React from 'react';
import styled from 'styled-components';
import FaEllipsisH from 'react-icons/lib/fa/ellipsis-h';

const TitleRow = styled.div`
  display: flex;
  flew-direction: row;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
`;

export default class Block extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <TitleRow className="titleRow">
          <div>{title}</div>
          <div>
            <FaEllipsisH />
          </div>
        </TitleRow>
        {this.props.children}
      </div>
    );
  }
}
