import React from 'react';
import $ from 'jquery';

import CommentList from './comment_list';
import CommentForm from './comment_form';

const CommentBox = React.createClass({
  getInitialState: function(){
    return { comments: [
      {
        'id': 3,
        'author': 'Blah Barabar',
        'text': 'Some placholder text for you',
      },
    ]};
  },

  handleCommentSubmitToServer: function(comment){

    // get the current comments from state;
    let comments = this.state.comments;
    comment.id = Date.now(); // generate a random id for the comment, use a better solution for id in prod;
    let newComments = comments.concat([comment]); // generating a new list of comments by concat
    this.setState({comments: newComments}); // set the current state to the new list of comments, to fool users
    // because once the ajax post finishes; the pollInterval gets the new set of comments from server, and set the new state;

    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data){
        this.setState({comments: data})
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({comments: comments}); // if there's an error, reset the state back to before;
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },

  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({comments: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },

  componentDidMount: function() {
   this.loadCommentsFromServer();
   setInterval(this.loadCommentsFromServer, this.props.pollInterval);
 },
  render: function(){
    return (
      <div className='comment-box'>
        <CommentList comments = {this.state.comments}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmitToServer}/>
      </div>
    )
  },
});

export default CommentBox;
