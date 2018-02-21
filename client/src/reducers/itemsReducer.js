
import { GET_ITEMS } from '../actions/types';

const initialState = {
  all: [],
};

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return Object.assign({}, state, {all: action.payload.data}) 
    default:
      return state;
  }
}
