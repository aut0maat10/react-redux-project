import { GET_ITEMS, CREATE_ITEM, ADD_LIKE } from '../actions/types';

const initialState = {
  all: [{likes: 0}],
};

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return Object.assign({}, state, {all: action.payload.data}) 
    case CREATE_ITEM:
      return Object.assign({}, state, {all: action.payload.data} )
    case ADD_LIKE:
      const index = action.index;
      return [
        ...state.slice(0, index),
        {...state[index], likes: state[index].likes + 1},
        ...state.slice(index + 1),
      ];
     
    default:
      return state;
  }
}
