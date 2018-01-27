import * as React from 'react';

export default class BlockItem extends React.Component {
  render() {
    const { icon } = this.props;
    return (
      <div>
        <div>{icon}</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
