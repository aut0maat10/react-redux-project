import React, { Component} from 'react';
import NewItemForm from './NewItemForm';
import { bindActionCreators } from 'redux';
//import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createItem } from '../actions/index';

class NewItem extends Component {
  submit = values => {
    this.props.createItem(values);
    this.props.history.push('/forsale');
  }
  render() {
    return (
      <div className="container">
        <NewItemForm onSubmit={this.submit} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    form: 'new-item-form',
   }  
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createItem: createItem
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewItem)
