import React from 'react';
import { connect } from 'react-redux';
 
const ItemShow = ({ item }) => {
  
  return (
    <div className="container">
      <h3>{item.name}</h3>
      <h4>{item.price}</h4>
      <p>{item.description}</p>
      <p>{item.seller_name}</p>
      <p>{item.seller_phone}</p>
    </div>
  )
}
    
const mapStateToProps = (state, ownProps) => {

  const item = state.items.all.find(item => item.id === 
    +ownProps.match.params.itemId)
  if (item) {
    return { item }
  } else {
    return { item: {} }
  }
}

export default connect(mapStateToProps)(ItemShow)