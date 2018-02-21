import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
 
//const ItemShow = ({ item }) => {

// const ItemShow = (props) => {
//   return (
//     <div className="container">
//       <h3>{props.item.name}</h3>
//       <h4>{props.item.price}</h4>
//       <p>{props.item.description}</p>
//       <p>{props.item.seller_name}</p>
//       <p>{props.item.seller_phone}</p>
//     </div>
//   )
// }
class ItemShow extends Component {

  render() {
    return (
      <div class="container">
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