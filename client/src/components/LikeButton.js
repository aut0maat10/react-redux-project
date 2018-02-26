import React from 'react';
import { connect } from 'react-redux';
import { addLike } from '../actions/index'
//import { ADD_LIKE } from '../actions/types' 

class LikeButton extends React.Component {
  
  handleOnClick = () => {
    //debugger
    console.log(this.props.item.id)
    this.props.addLike(this.props.item.id)
  }
  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>&hearts; {this.props.item.likes}</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return { items: state.items.all }
}

function mapDispatchToProps(dispatch) {
  return {
    addLike: addLike
    //addLike: () => dispatch(addLike())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton)