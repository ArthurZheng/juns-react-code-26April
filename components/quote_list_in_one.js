import React from 'react';
import $ from 'jquery';

export default class QuoteList extends React.Component {
  constructor(){
    super();
    this.state = { quotes: [
      {
          "id": 1388534400000,
          "author": "Yoda Jedi Master",
          "text": "No more traning do you require"
      },
      {
          "id": 1420070400000,
          "author": "Han Solo",
          "text": "I have a bad feeling about this"
      },
      {
          "id": 1459291632254,
          "author": "Luke Skywalker",
          "text": "May the force be with you"
      },
      {
          "id": 1412332254,
          "author": "Terminator 3",
          "text": "I will be back"
      },
      {
          "id": 1412332254,
          "author": "Princess Leah",
          "text": "Get this walking carpet out of my sight"
      }
    ] }
}
  // 
  // componentDidMount(){
  //   $.ajax({
  //     url: '../my-quotes.json',
  //     cache: false,
  //     dataType: 'json',
  //     success: function(data){
  //       this.setState({quotes: data});
  //       console.log('ajax fetch quote successful');
  //     }.bind(this)
  //   });
  // }

  render(){
    return (
      <div>
      <hr />
      <h2>Famous Quotes of the Day</h2>
        <ul>
          {this.state.quotes.map(quote => <li key={quote.id}>{quote.author} -- {quote.text}</li>
          )}
        </ul>
      </div>
    )
  }
}
