import React from 'react';
import { connect } from 'react-redux';
 
const ItemShow = ({ item }) => {
  
  return (
    <div className="container">
      <h3>{item.name}</h3>
      <h4><strong>Price:</strong> {item.price}</h4>
      <p><strong>Description:</strong> {item.description}</p>
      <p><strong>Seller:</strong> {item.seller_name}</p>
      <p><strong>Phone:</strong> {item.seller_phone}</p>
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



