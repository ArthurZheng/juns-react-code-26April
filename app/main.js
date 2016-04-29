import '../public/css/style.css';

import ReactDOM from 'react-dom';
import React from 'react';

import CommentBox from '../components/comment_box';
import Counter from '../components/counter';
import FilteredList from '../components/filtered_list';

import QuoteListContainer from '../containers/quote_list_container';
import ShoppingCartContainer from '../containers/shopping_cart_container';
import CounterES6 from '../components/counter_es6class';
import StatelessComponentContainer from '../containers/stateless_component_container';
// import HelloReactTimer from '../components/hello_react_timer';
import LikeButton from '../components/like_button';
import LoadUserGistContainer from '../containers/load_user_gist_container';

let rootElement = document.getElementById('content');
ReactDOM.render(
  <div className='react-root-component'>
    <CommentBox url='../comments.json' pollInterval={2000} />
    <Counter />
    <FilteredList />
    <QuoteListContainer />
    <ShoppingCartContainer />
    <CounterES6 initialCount={'hello-world'}/>
    <StatelessComponentContainer words={'have a good day'}/>
    <LikeButton />
    <LoadUserGistContainer source='https://api.github.com/users/octocat/gists' />
  </div>,
  rootElement
);
