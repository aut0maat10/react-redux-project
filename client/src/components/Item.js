import React, { Component } from 'react';

export default class ItemShow extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.item.name}</h3>
        <h4>{this.props.item.price}</h4>
        <p>{this.props.item.description}</p>
        <p>{this.props.item.seller_name}</p>
        <p>{this.props.item.seller_phone}</p>
      </div>
    )
  }
}