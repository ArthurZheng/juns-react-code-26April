import '../public/css/style.css';

import ReactDOM from 'react-dom';
import React from 'react';
import $ from 'jquery';

const Comment = React.createClass({
  render: function(){
    return (
      <div className='comment'>
        <h2>Author: {this.props.author}</h2>
        <p>Text: {this.props.text}</p>
      </div>
    )
  },
});

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

const CommentForm = React.createClass({
  getInitialState: function(){
      return ({
        author: '',
        text: '',
      });
  },

  handleAuthorSubmit: function(e){
    this.setState({author: e.target.value});
    console.log('handleAuthorSubmit triggered ', e.target.value);
  },

  handleTextSubmit: function(e){
    this.setState({text: e.target.value})
    console.log('handleTextSubmit triggered ', e.target.value);
  },
  handleCommentFormSubmit: function(e){
    e.preventDefault();
    let author = this.state.author.trim();
    let text = this.state.text.trim();
    if (!author || !text) {
      alert('Please fill in both fields');
      return
    }

    //TODO: send comment to server;
    // pass newly entered text (author, text) back to parent component CommentBox;
    this.props.onCommentSubmit({author: author, text: text});
    // set the input fields to be empty after user submits the comment
    this.setState({author: '/..', text: '...'})
  },

  render: function(){
    return (
      <div className='comment-form'>
        <form className='comment-form' onSubmit={this.handleCommentFormSubmit}>
          <input
            type='text'
            placeholder='author'
            value={this.state.author}
            onChange={this.handleAuthorSubmit}
            />
          <input
            type='text'
            placeholder='write some text'
            value={this.state.text}
            onChange={this.handleTextSubmit}
            />
          <input type='submit' value='Add Comment' />
        </form>
      </div>
    )
  },
});

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

let rootElement = document.getElementById('content');
ReactDOM.render(
  <CommentBox url='../comments.json' pollInterval={2000} />,
  rootElement
)
