import {GET_ITEMS, CREATE_ITEM } from './types';
import axios from 'axios';

const API_URL = "http://localhost:3001/api/v1";

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

export function createItem(props) {
  console.log('in createItem()')
  debugger
  const request = axios.post(`${API_URL}/items`, props);
  return {
    type: CREATE_ITEM,
    payload: request
  };
}


// export function getItems() {
//   return function(dispatch) {
//   dispatch({type: LOADING_ITEMS})
//   return fetch(`${API_URL}/items`)
//     .then(res => {
//       return res.json()
//     }).then(responseJson => {
//       dispatch({
//         type: GET_ITEMS,
//         payload: responseJson
//       })
//     })
//   }
// }

// export function deleteItem(id) {
//   const request = axios.delete(`${API_URL}/items/${id}`);
//   return {
//     type: DELETE_ITEM,
//     payload: request
//   };
// }

// export function getItems() {
//   axios.get(`${API_URL}/items`)
//     .then((response) => {
//     console.log(response.data)
//     return {
//       type: GET_ITEMS,
//       payload: response
//     }
//   })
// }




