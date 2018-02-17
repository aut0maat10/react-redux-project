import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
//import App from './App';
import configureStore from './store';
import Main from './components/Main';
import Single from './components/Single';
import IndexGrid from './components/IndexGrid';

import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

const store = configureStore();


const router = (
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={Main}>
        {/* <Route component={IndexGrid}></Route> */}
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </BrowserRouter>
  </Provider>
  
)

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
