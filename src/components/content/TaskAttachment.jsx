import React from "react";
import styled from "styled-components";
import MdAttachFile from "react-icons/lib/md/attach-file";
import MdClose from "react-icons/lib/md/close";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

class TaskAttachment extends React.Component {
  render() {
    const { attachments } = this.props;

    return (
      <div>
        {attachments.map((attachment, idx) => {
          return (
            <Row key={idx}>
              <div>
                <MdAttachFile /> {attachment}
              </div>
              <MdClose />
            </Row>
          );
        })}
      </div>
    );
  }
}

export default TaskAttachment;
