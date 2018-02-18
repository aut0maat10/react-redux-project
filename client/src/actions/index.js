import {GET_ITEMS, CREATE_ITEM, GET_ITEM} from './types';
import axios from 'axios';

const API_URL = "http://localhost:3001/api/v1";

export function getItems() {
  const request = axios.get(`${API_URL}/items`);
    return {
      type: GET_ITEMS,
      payload: request
    }; 
}

export function createItem(props) {
  const request = axios.post(`${API_URL}/items`, props);
  return {
    type: CREATE_ITEM,
    payload: request
  };
}
