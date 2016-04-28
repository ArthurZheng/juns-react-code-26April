import React from 'react';


export default class QuoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
      <hr />
        <h2>Famous Quotes Madeup by Jun</h2>
        <ul>
        {
          this.props.quotes.map(quote => <li key={quote.id}>{quote.author} -- {quote.text}</li>)
        }
        </ul>
      </div>

    )
  }

}
