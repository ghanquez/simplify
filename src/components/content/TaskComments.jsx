import React from "react";

const commentImgPath =
  "https://rawgit.com/Kribou/simplify/66983ce6e4242211f2b05d1417435c35b26145d4/src/img/1033.jpg";

class TaskComments extends React.Component {
  render() {
    return (
      <div>
        <img style={{ borderRadius: "50%" }} src={commentImgPath} alt={'comment'}/>
      </div>
    );
  }
}

export default TaskComments;
