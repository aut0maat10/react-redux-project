import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { getItems } from '../actions/index';
import ItemsList from './ItemsList';

class ItemsIndex extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  // CUT HERE

  render() {
    return (
      <div className="container">
        <h1>Index</h1>
        <ul className="list-group">
          <ItemsList items={this.props.items} />
          {this.props.children}
        </ul>
      </div>
    ); 
  }
}
  
function mapStateToProps(state) {
  return { items: state.items.all }
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: () => dispatch(getItems())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsIndex) 

