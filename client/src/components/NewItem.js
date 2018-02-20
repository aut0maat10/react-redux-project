import React, { Component} from 'react';
import NewItemForm from './NewItemForm';
import { createItem } from '../actions/index';

export default class NewItem extends Component {
  submit = values => {
    createItem(values);
  }
  render() {
    return (
      <div className="container">
        <NewItemForm onSubmit={this.submit} />
      </div>
    )
  }
}
