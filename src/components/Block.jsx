import * as React from 'react';

export default class Block extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <div>{title}</div>
        {this.props.children}
      </div>
    );
  }
}
