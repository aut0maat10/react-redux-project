import React from 'react';
import { connect } from 'react-redux';

const ItemShow = ({ item }) => 
    <div className="container">
      <h3>{ item.name }</h3>
      <p>{item.description}</p>
    </div>
  

const mapStateToProps = (state, ownProps) => {

  const item = state.items.all.find(item => item.id === 
    +ownProps.match.params.itemId)
  
  if (item) {
    return { item }
  } else {
    return { item: {} }
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleOnClick: (id) => {
//       dispatch(deleteItem(id))
//     }
//   }
// }


export default connect(mapStateToProps)(ItemShow)