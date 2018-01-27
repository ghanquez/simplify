import * as React from "react";
import styled from "styled-components";
import FaEllipsisH from "react-icons/lib/fa/ellipsis-h";

const TitleRow = styled.div`
  display: flex;
  flew-direction: row;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
`;

export default class Block extends React.Component {
  state = { collapsed: true };

  toggle = () => {
    this.setState(previousState => {
      return { collapsed: !previousState.collapsed };
    });
  };

  computeStyle = () => {
    const { collapsed } = this.state;
    let style = {};

    if (collapsed) {
      style.height = this.props.height + "px";
    } else {
      style.height = 0;
    }

    style.transition = "height 0.05s ease-out";
    style.overflow = "hidden";

    return style;
  };

  render() {
    const { title } = this.props;
    return (
      <div>
        <TitleRow onClick={this.toggle} className="titleRow">
          <div>{title}</div>
          <div>
            <FaEllipsisH />
          </div>
        </TitleRow>
        <div style={this.computeStyle()}>
          {/*collapsed ? this.props.children : null*/}
          {this.props.children}
        </div>
      </div>
    );
  }
}
