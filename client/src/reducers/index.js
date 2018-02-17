import { combineReducers } from 'redux';
//import { routerReducer } from 'react-router-redux';
import itemsReducer from './itemsReducer';

const rootReducer = combineReducers({items: itemsReducer})

export default rootReducer;
