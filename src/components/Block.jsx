import * as React from 'react';
import styled from 'styled-components';
import FaEllipsisH from 'react-icons/lib/fa/ellipsis-h';

const animationTime = '0.2s';

const TitleRow = styled.div`
  display: flex;
  flew-direction: row;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
`;

const Title = styled.div`
  color: #a2a5ff;
`;

export default class Block extends React.Component {
  state = { collapsed: true };

  toggle = () => {
    this.setState(previousState => {
      return { collapsed: !previousState.collapsed };
    });
  };

  computeStyle = itemsCount => {
    const { collapsed } = this.state;
    let style = {};

    if (collapsed) {
      style.height = itemsCount * 50 + 'px';
    } else {
      style.height = 0;
    }

    style.transition = `height ${animationTime} ease-out`;
    style.overflow = 'hidden';

    return style;
  };

  render() {
    const { title } = this.props;
    let itemsCount = 0;
    if (this.props.children) {
      itemsCount = this.props.children.length || 1;
    }

    return (
      <div>
        <TitleRow onClick={this.toggle} className="titleRow">
          <Title>{title}</Title>
          <Title>
            <FaEllipsisH />
          </Title>
        </TitleRow>
        <div style={this.computeStyle(itemsCount)}>
          {/*collapsed ? this.props.children : null*/}
          {this.props.children}
        </div>
      </div>
    );
  }
}
