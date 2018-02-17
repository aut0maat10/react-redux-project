import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // constructor() {
  //   super(); 
  //   this.state = {
  //     items: []
  //   }
  // }
  // componentDidMount() {
  //   this.getItems()
  // }

  // getItems() {
  //   fetch('/dummy-data/items')
  //   .then(items => {
  //     this.setState({items: items})
  //   })
  // }
  // componentDidMount() {
  //   window.fetch('api/items')
  //     .then(response => response.json)
  //     .then(json => console.log(json))
  //     .catch(error => console.log(error))
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       
        <div className="App-intro">
          
        </div>
      </div>
    );
  }
}

export default App;
