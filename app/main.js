import '../public/css/style.css';

import ReactDOM from 'react-dom';
import React from 'react';

import CommentBox from '../components/comment_box';

let rootElement = document.getElementById('content');
ReactDOM.render(
  <CommentBox url='../comments.json' pollInterval={2000} />,
  rootElement
)
