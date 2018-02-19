import React, { Component } from 'react'; 
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux'
import { getItems } from '../actions/index';
import { Link } from 'react-router-dom';
//import * as actions from '../actions/types'

class ItemsIndex extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  renderItems() {
    return this.props.items.map((item) => {
      return (
        <li key="item.id">
          <Link to={"items/" + item.id}>
            <h4>{item.name}</h4>
          </Link>
        </li>
      )
    });
  }
  render() {
    return (
      <div className="container">
        <div>
          <h1>Index</h1>
          <Link to="/items/new">Create</Link>
        </div>

          <ul className="list-group">
            {this.renderItems()}
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

// function mapDispatchToProps(dispatch) {
//   return { actions: bindActionCreators(actions, dispatch) }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(ItemsIndex)
export default connect(mapStateToProps, mapDispatchToProps)(ItemsIndex) //{ getItems: getItems }

