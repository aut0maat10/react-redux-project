import React from 'react';
import { connect } from 'react-redux';
import { addLike } from '../actions/index'
//import { ADD_LIKE } from '../actions/types' 

class LikeButton extends React.Component {

  handleClick = () => {
    //debugger
    this.props.store.dispatch(addLike(0))
    // this.props.dispatch({
    //   type: ADD_LIKE,
    // });
  }
  render() {
    return (
      <div>
        <button onClick={this.props.handleClick}>&hearts; {this.props.likes}</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //debugger
  return { likes: state.likes }
}

export default connect(mapStateToProps)(LikeButton)