import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import ItemsIndex from './ItemsIndex';
import NewItem from './NewItem';
import ItemShow from './ItemShow';
import About from './About';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
          <Route exact path='/' component={ItemsIndex} />
          <Route path='/items/:itemId' component={ItemShow} />
          </Switch>
          <Route exact path='/items/new' component={NewItem} />
          <Route exact path='/about' component={About} />
        </div>
      </Router>
    )
  }
}
export default App;