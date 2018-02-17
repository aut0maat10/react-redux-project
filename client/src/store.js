import { createStore, applyMiddleware } from 'redux'; // applyMiddleware
import { synchHistoryWithStore } from 'react-router-redux';
import { browserRouter } from 'react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

import items from './dummy-data/items';

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
} 