import { GET_ITEMS, CREATE_ITEM, ADD_LIKE } from '../actions/types';

const initialState = {
  all: [],
};

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return Object.assign({}, state, {all: action.payload.data}) 
    case CREATE_ITEM:
      return Object.assign({}, state, {all: action.payload.data} )
    case ADD_LIKE:
      const index = state.all.findIndex(item => item.id === action.payload.id);
      return {
        all: [
          ...state.all.slice(0, index),
          {...state.all[index], likes: state.all[index].likes + 1},
          ...state.all.slice(index + 1),
        ]
      };
    default:
      return state;
  }
}

