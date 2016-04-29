import React, {PropTypes} from 'react';

class LikeButton extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      like: props.liked,
      pageLink: props.facebookLink
    }
    this.handleClick = this.handleClick.bind(this);// Function.prototype.bind()
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleClick(e){
    this.setState({like: !this.state.like})
  }

  handleInputChange(e){
    this.setState({pageLink: e.target.value})
  }

  render(){
    return(
      <div>
        <hr />
        <h2>Like me or not</h2>
        <p>May the force be with you</p><button onClick={this.handleClick}>LIKE</button>
        <p>You have {this.state.like === true ? 'liked' : 'not liked'} the quote above.</p>
        <input onChange={this.handleInputChange} type='text' placeholder='type in a keyword for facebook avatar' />
        <img src={'https://graph.facebook.com/'  + this.state.pageLink + '/picture'} />
      </div>
    )
  }

}

LikeButton.propTypes = {
  liked: React.PropTypes.bool.isRquired
}

LikeButton.defaultProps = {
  liked: false,
  facebookLink: ''
}

export default LikeButton;
