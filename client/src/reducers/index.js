import { createStore, combineReducers, applyMiddleware } from 'redux';
import itemsReducer from './itemsReducer';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
  items: itemsReducer,
  form: formReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
//export default rootReducer;