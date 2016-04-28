import '../public/css/style.css';

import ReactDOM from 'react-dom';
import React from 'react';

import CommentBox from '../components/comment_box';
import Counter from '../components/counter';
import FilteredList from '../components/filtered_list';

import QuoteListContainer from '../containers/quote_list_container';
import ShoppingCartContainer from '../containers/shopping_cart_container';

let rootElement = document.getElementById('content');
ReactDOM.render(
  <div className='react-root-component'>
    <CommentBox url='../comments.json' pollInterval={2000} />
    <Counter />
    <FilteredList />
    <QuoteListContainer />
    <ShoppingCartContainer />
  </div>,
  rootElement
);
