import React from "react";

class CommentForm extends React.Component {
  render() {
    return (
      <div>
        <input className="Person-Name" type="text" placeholder="name" />
        <input
          className="comment-box"
          type="text"
          placeholder="comment something here..."
        />
        <button type="submit">Comment</button>
      </div>
    );
  }
}

export default CommentForm;

//when putting the comments in the video.js file it has to be rendered with each card
