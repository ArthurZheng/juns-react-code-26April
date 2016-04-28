import React from 'react';
import StatelessComponent from '../components/stateless_component';

class StatelessComponentContainer extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      words: props.initialWords
    }
  }
  handleClick(){
    alert('handleClick triggered');
  }


  render(){
    return (
      <StatelessComponent words={this.state.words} />
    )
  }

}

StatelessComponentContainer.propTypes = {
  initialWords: React.PropTypes.string.isRequired
};

StatelessComponentContainer.defaultProps = {
  initialWords: 'Gday React Fan'
}

export default StatelessComponentContainer;
