import * as React from 'react';
import styled from 'styled-components';
import Block from './Block';
import FaUser from 'react-icons/lib/fa/user';
import FaInBox from 'react-icons/lib/fa/inbox';
import FaShareAlt from 'react-icons/lib/fa/share-alt';
import FaSliders from 'react-icons/lib/fa/sliders';
import FaCalendar from 'react-icons/lib/fa/calendar';

const Panel = styled.div`
  height: 100%;
  width: 390px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid black;
`;

export default class LeftSide extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch('https://picsum.photos/list')
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        const datas = data.slice(0, 5).map(d => {
          return d.post_url;
        });
        this.setState({ data: datas });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <Panel>
        <button>Add Task</button>
        <Block title="Recent">
          <div>
            <FaUser /> Profile
          </div>
          <div>
            <FaInBox />Tasks
          </div>
          <div>
            <FaShareAlt />Shared Items
          </div>
          <div>
            <FaSliders />Admin Dash
          </div>
          <div>
            <FaCalendar /> Calendar
          </div>
        </Block>
        {data ? (
          <Block>
            {data.map((d, idx) => {
              return <img key={idx} src={d} />;
            })}
          </Block>
        ) : null}
      </Panel>
    );
  }
}
