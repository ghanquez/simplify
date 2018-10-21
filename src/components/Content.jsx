import * as React from 'react';
import styled from 'styled-components';
import Header from './content/Header';
import HeaderInfo from './content/HeaderInfo';
import TaskTitle from './content/TaskTitle';
import TaskDescription from './content/TaskDescription';
import TaskAttachment from './content/TaskAttachment';
import TaskComments from './content/TaskComments';
import TaskFollowers from './content/TaskFollowers';
import Reminders from './content/Reminders';
import reminders from '../data/reminders';

const Panel = styled.div`
  width: 100%;
`;

const selectedTask = {
  date: '27TH JUL 2018',
  assignedBy: 'Jenita L',
  title: 'The Rope Task Client',
  description:
    'The monkey-rope is found in all whalers; but it was only in the Pequod that the monkey. Tousled food polaroid, salvia bespoke small batch Pinterest Marfa. Fingertache authentic craft beer, food truck Banksy Carles kale chips...',
  attachments: ['Files.zip'],
  comments: [],
  followers: ['KO', 'LO', 'DA'],
};

export default class Content extends React.Component {
  render() {
    const {
      date,
      assignedBy,
      title,
      description,
      attachments,
      // comments,
      followers,
    } = selectedTask;

    return (
      <Panel>
        <Header />
        <HeaderInfo date={date} assignedBy={assignedBy} />
        <TaskTitle>{title}</TaskTitle>
        <TaskDescription>{description}</TaskDescription>
        <TaskAttachment attachments={attachments} />
        <hr />
        <TaskComments />
        <TaskFollowers followers={followers} />
        <Reminders reminders={reminders} />
      </Panel>
    );
  }
}
