import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { getItems } from '../actions/index';
import { Link } from 'react-router-dom';

class ItemsIndex extends Component {
  componentWillMount() {
    this.props.getItems();
  }
  render() {
    return (
      <div className="container">
        <h1>Index</h1>
        <Link to="/items/new">Create</Link>
      </div>
    ); 
  }
}

export default connect(null, {getItems})(ItemsIndex)

