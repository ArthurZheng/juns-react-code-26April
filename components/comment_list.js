import React from 'react';
import Comment from './comment';

const CommentList = React.createClass({
  render: function(){
    let commentNodes = this.props.comments.map((comment) => {
      return (
        <Comment key={comment.id} author={comment.author} text={comment.text}>
        </Comment>
      )
    })

    return (
      <div className='comment-list'>
        <h4>3. Comment List</h4>
        {commentNodes}
      </div>
    )
  },
});


export default CommentList;
