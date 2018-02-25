import React from 'react';
import { connect } from 'react-redux';
import { addLike } from '../actions/index'
//import { ADD_LIKE } from '../actions/types' 

class LikeButton extends React.Component {
  handleClick = () => {
  
  // this.props.items.map(item => {
  //   item.id === 
  // })
  
  this.props.addLike(this.props.items.id)
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>&hearts; {this.props.items.likes}</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //debugger
  return { items: state.items.all }
}

function mapDispatchToProps(dispatch) {
  return {
    addLike: addLike
    // addLike: () => dispatch(addLike())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton)