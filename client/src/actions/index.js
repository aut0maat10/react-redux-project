import { GET_ITEMS, CREATE_ITEM, ADD_LIKE } from './types';
import axios from 'axios';

const API_URL = "http://localhost:3001/api/v1";

//get items from Rails API
export function getItems() {
  return dispatch => {
    axios.get(`${API_URL}/items`).then(data => {
      dispatch({
        type: GET_ITEMS,
        payload: data
      });
    });
  }
}

// create item - Redux form 
export function createItem(props) {
  console.log('in createItem()')
  //debugger
  const request = axios.post(`${API_URL}/items`, props);
  return {
    type: CREATE_ITEM,
    payload: request
  };
}


// add like
export function addLike(item) {
  console.log("in action creator")
  console.log(item)
  return dispatch => {
    dispatch({type: ADD_LIKE, payload: item});
    axios.patch(`${API_URL}/items/${item.id}`, item).then(data => {
      dispatch({
        type: 'LIKE_PERSISTENCE_SUCCESS',
        payload: item
      }) 
    }).catch((error) => {type: 'LIKE_PERSISTENCE_FAILED', error})
  }
}




