import React, { Component} from 'react';
//import { Field, reduxForm } from 'redux-form';
import NewItemForm from './NewItemForm';
import { createItem } from '../actions/index';

export default class NewItem extends Component {
  submit = values => {
    createItem(values);
    // print the form values to the console
    console.log(values)
  }
  render() {
    return (
      <div className="container">
        <h1>Create New Item</h1>
        <NewItemForm onSubmit={this.submit} />
        
      </div>
    )
  }
}
