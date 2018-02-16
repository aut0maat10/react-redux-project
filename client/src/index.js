import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

import Main from './components/Main';
import Single from './components/Single';
import IndexGrid from './components/IndexGrid';

import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route } from 'react-router-dom';

const router = (
  <BrowserRouter>
    <Route exact path="/" component={Main}>
      <Route component={IndexGrid}></Route>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
