import * as React from 'react';
import Header from './content/Header';
import HeaderInfo from './content/HeaderInfo';
import TaskTitle from './content/TaskTitle';
import TaskDescription from './content/TaskDescription';
import TaskAttachment from './content/TaskAttachment';
import TaskComments from './content/TaskComments';
import TaskFollowers from './content/TaskFollowers';
import Reminders from './content/Reminders';

export default class Content extends React.Component {
  render() {
    const {
      date,
      assignedBy,
      title,
      description,
      attachments,
      comments,
      followers
    } = this.props.task;

    return (
      <div>
        <Header />
        <HeaderInfo />
        <TaskTitle />
        <TaskDescription />
        <TaskAttachment />
        <TaskComments />
        <TaskFollowers />
        <Reminders />
      </div>
    );
  }
}
