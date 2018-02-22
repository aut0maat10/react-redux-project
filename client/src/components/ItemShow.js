import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
 
class ItemShow extends Component {

  render() {
    return (
      <div className="container">
        <Item item={this.props.item}/>
      </div>
    )
  }
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