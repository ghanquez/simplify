import * as React from 'react';
// import FaCheckSquareO from 'react-icons/lib/fa/check-square-o';
// import styled from 'styled-components';
// import theme from '../config/theme';
import Task from './Task';

/* {
  status: 'PENDING',
    date: '3 min ago',
      description:
  'The monkey-rope is found in all whalers; but it was only in the Pequod that the monkey...',
    progress: 0
}, */

// class Status extends React.Component {
//   render() {
//     const { status } = this.props;
//     const StatusPanel = styled.div`
//       background-color: ${status === 'PENDING' ? 'red' : 'yellow'};
//       color: black;
//     `;
//     return <StatusPanel>{status}</StatusPanel>;
//   }
// }

// class Header extends React.Component {
//   render() {
//     const { status, date } = this.props.task;
//     const Panel = styled.div`
//       display: flex;
//       flex-direction: row;
//       justify-content: space-between;
//       margin-left: 20px;
//     `;
//     return (
//       <Panel>
//         <Status status={status} />
//         {date}
//       </Panel>
//     );
//   }
// }

// class Description extends React.Component {
//   render() {
//     const { description = '' } = this.props;
//     const Panel = styled.div`
//       color: ${theme.searchInput.color};
//     `;
//     return <Panel>{description}</Panel>;
//   }
// }

// class Footer extends React.Component {
//   render() {
//     return <div>{this.props.children}</div>;
//   }
// }

// class ProgressBar extends React.Component {
//   render() {
//     const { progress } = this.props;
//     return <div>{progress}</div>;
//   }
// }

export default class TaskList extends React.Component {
  render() {
    const { tasks } = this.props;

    return (
      <div>
        {tasks.map((task, idx) => {
          return <Task key={idx} task={task} />;
        })}
      </div>
    );
  }
}
