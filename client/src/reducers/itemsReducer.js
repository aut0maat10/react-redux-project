import { GET_ITEMS, CREATE_ITEM } from '../actions/types';

const initialState = {
  all: [],
};

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return Object.assign({}, state, {all: action.payload.data});
    case CREATE_ITEM:
      console.log("in reducer!")
      debugger
      return Object.assign({}, state, {all: action.payload.data}); 
    default:
      return state;
  }
}
