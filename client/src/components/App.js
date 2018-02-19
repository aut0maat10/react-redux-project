import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ItemsIndex from './ItemsIndex';
import NewItem from './NewItem';
import About from './About';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path='/' component={ItemsIndex} />
          <Route exact path='/items/new' component={NewItem} />
          <Route exact path='/about' component={About} />
        </div>
      </Router>
    )
  }
}
export default App;