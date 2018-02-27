import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addLike } from '../actions/index'
//import { ADD_LIKE } from '../actions/types' 

class LikeButton extends React.Component {
  
  handleOnClick = () => {
    console.log(this.props.item)
    this.props.addLike(this.props.item)
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
  return bindActionCreators({
    addLike: addLike
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton)