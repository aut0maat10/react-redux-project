import React from 'react';

export default class LikeButton extends React.Component {
  constructor() {
    super();

    this.state = {
      likes: 0,
    };
  }

  handleClick = () => {
    this.setState ({
      likes: this.state.likes + 1,
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>&hearts; {this.state.likes}</button>
      </div>
    );
  }
}