import React, { Component } from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
=======
import Item from './Item';
>>>>>>> refactoring
 
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

<<<<<<< HEAD
export default connect(mapStateToProps)(ItemShow)



=======
export default connect(mapStateToProps)(ItemShow)
>>>>>>> refactoring
