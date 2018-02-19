import React, { Component } from 'react';

export default class ItemShow extends Component {
  render() {
    return (
      <div className="container">
        Item Name: {this.props.params.name}
      </div>
    );
  }
}