import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ItemsIndex from './ItemsIndex';
import NewItem from './NewItem';
import ItemShow from './ItemShow';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path='/' component={Home} /> 
          <Route path='/items/:itemId' component={ItemShow} />
          <Route exact path='/items/new' component={NewItem} />
          <Route exact path='/forsale' component={ItemsIndex} />
        </div>
      </Router>
    )
  }
}
export default App;