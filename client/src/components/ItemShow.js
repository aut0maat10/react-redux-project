import React from 'react';
import { connect } from 'react-redux';

const ItemShow = ({ item }) => 
    <div className="container">
      <h3>{ item.name }</h3>
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


export default connect(mapStateToProps)(ItemShow)