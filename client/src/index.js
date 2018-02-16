import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Main from './components/Main';
import Single from './components/Single';
import IndexGrid from './components/IndexGrid';

import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Link, Route } from 'react-router-dom';

const router = (
  <BrowserRouter>
    <Route path="/" component={Main}>
      <Route component={IndexGrid}></Route>
      <Route path="/view/:postId"></Route>
    </Route>
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
