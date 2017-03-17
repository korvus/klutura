import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, browserHistory} from 'react-router';

import App from './pages/App';
import Connect from './pages/Connect';
import './assets/styles/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
  	<Route path="/" component={App} />
  	<Route path="/connection" component={Connect} />
  </Router>,
  document.getElementById('root')
);
