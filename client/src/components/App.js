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


// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   constructor() {
//     super(); 
//     this.state = {
//       items: []
//     }
//   }
//   componentDidMount() {
//     this.getItems()
//   }

//   getItems() {
//     fetch('api/v1/items')
//     .then(items => {
//       this.setState({items: items})
//     })
//   }
//   // componentDidMount() {
//   //   window.fetch('api/items')
//   //     .then(response => response.json)
//   //     .then(json => console.log(json))
//   //     .catch(error => console.log(error))
//   // }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
       
//         {/* <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p> */}
//       </div>
//     );
//   }
// }

// export default App;
