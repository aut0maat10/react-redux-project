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
export function addLike(index) {
  return {
    type: ADD_LIKE,
    index
  }
}




