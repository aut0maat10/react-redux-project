import {GET_ITEMS} from '../actions/types';

const INITIAL_STATE = {items: [], item: null};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, items: action.payload.data };
    default:
      return state;
  }
}