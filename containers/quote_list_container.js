import React from 'react';
import QuoteList from '../components/quote_list';
import $ from 'jquery';

export default class QuoteListContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      quotes: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '../my-quotes.json',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({quotes: data})
      }.bind(this),
      error: function(xhr, status, err){
        console.error(url, status, err.toString())
      }
    })
  }

  render(){
    return <QuoteList quotes={this.state.quotes} />
  }
}
