import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addLike } from '../actions/index'
import axios from 'axios';
const API_URL = "http://localhost:3001/api/v1";
//import { ADD_LIKE } from '../actions/types' 

class LikeButton extends React.Component {
  
  handleOnClick = () => {
    //console.log(this.props.item)
    this.props.addLike(this.props.item)
  }
  callApi = () => {
    console.log('a')
    //console.log(this.props.item)
    axios.get(`${API_URL}/itemfdsfdsfdss`)
      .then(data => {
        
        console.log('b',data); 
      })
      .catch(err => console.log('c', err))
      console.log('d')

      // a d b + data

      // a c + err d
  }
  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>&hearts; {this.props.item.likes}</button>
        <button onClick={this.callApi}>Call Api</button>
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