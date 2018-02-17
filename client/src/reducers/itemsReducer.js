// a reducer takes in 2 things: 
// 1. the action (info about what happened)
// 2. a copy of the current state

export default function itemsReducer(state = {items: [] }, action) {
  switch (action.type) {
    case 'LOADING_ITEMS':
      return Object.assign({}, state )
    case 'FETCH_ITEMS':
      return { items: action.payload }
    default:
     return state; 
  }
}
