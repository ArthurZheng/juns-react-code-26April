import React from 'react';

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
export default CommentForm;
