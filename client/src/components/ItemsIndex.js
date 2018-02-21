import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { getItems } from '../actions/index';
import ItemsList from './ItemsList';

class ItemsIndex extends Component {
  componentDidMount() {
    if (this.props.items.length === 0) {
      this.props.getItems();
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Index</h1>
        <div>
          <ul className="list-group">
            <ItemsList items={this.props.items} />
          </ul>
        </div>
        {/* <div>{this.props.children}</div> */}
      </div>
    ); 
  }
}
  
function mapStateToProps(state) {
  return { items: state.items.all }
}

// function mapDispatchToProps(dispatch) {
//   return { actions: bindActionCreators(actions,dispatch)}
// }

function mapDispatchToProps(dispatch) {
  return {
    getItems: () => dispatch(getItems())
  }
}
//export default connect(mapStateToProps, mapDispatchToProps)(ItemsIndex)
export default connect(mapStateToProps, mapDispatchToProps)(ItemsIndex) 

