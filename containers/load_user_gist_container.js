import React, {PropTypes} from 'react';
import $ from 'jquery';

class LoadUserGistContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      lastGistUrl: ''
    }
    this.loadGistFromSever = this.loadGistFromSever.bind(this);
  }

  loadGistFromSever(){
    this.serverRequest = $.get(this.props.source, (result) => {
      let lastGist = result[0];
      this.setState({
        username: lastGist.owner.login,
        lastGistUrl: lastGist.html_url
      })
    })
  }

  componentDidMount(){
    this.loadGistFromSever()
  }

  compoentWillUnmount(){
    this.serverRequest.abort();
  }

  render(){
    return (
      <div>
        <hr />
        <h2>Getting Latest Gist from Github</h2>
        <p>{this.state.username}s lasttest gist is -- {this.state.lastGistUrl} here</p>
      </div>
    )
  }
}

export default LoadUserGistContainer
