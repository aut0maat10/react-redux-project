import { createStore, compose } from 'redux';
import { synchHistoryWithStore } from 'react-router-redux';
//import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import items from './dummy-data/items';

// create object for default data

const initialState = {
  items: items
}

const store = createStore(rootReducer, initialState);

//export const history = synchHistoryWithStore(browserHistory, store)
export default store 