import React from 'react';
import { Link } from 'react-router-dom';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Home Page</Link>
        </h1>
        {/* { React.cloneElement(this.props.children, this.props)} */}
      </div>
    )
  }
}