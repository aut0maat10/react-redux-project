// 
export function fetchItems() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_ITEMS' });
    return fetch('http://localhost:3001/api/items')
      .then(response => response.json())
      .then(items => dispatch({ type: 'FETCH_ITEMS', payload: items }));
      console.log(payload)
  };
}