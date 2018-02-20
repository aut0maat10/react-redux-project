
import {GET_ITEMS, GET_ITEM} from '../actions/types';

const initialState = {
  all: []
};

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, all: action.payload.data };
      //return Object.assign({}, state, {all: action.payload.data}) 
    case GET_ITEM:
      return { ...state, item: action.payload.data }; 
      //return Object.assign({}, state, { item: action.payload.data })
    default:
      return state;
  }
}
