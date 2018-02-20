import React from 'react';
//import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';


// const link = {
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   background: 'blue',
//   textDecoration: 'none',
//   color: 'white',
// }


// function handleSelect(selectedKey) {
//   alert(`selected ${selectedKey}`);
// }

const NavBar = () => {
  return (
    <div className="container">
    <Nav bsStyle="pills" activeKey={1} >
      <NavItem eventKey={1} href="/">
        Home
    </NavItem>
      <NavItem eventKey={1} href="/about">
        About
    </NavItem>
      <NavItem eventKey={1} href="/items/new">
        Create
    </NavItem>
    </Nav>
    </div>
  )
}

export default NavBar; 

/* Add basic styling for NavLinks */


/* add the navbar component */
// const Navbar = () =>
//   <div>
//     <NavLink
//       to="/"
//       /* set exact so it knows to only set activeStyle when route is deeply equal to link */
//       exact
//       /* add styling to Navlink */
//       style={link}
//       /* add prop for activeStyle */
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >Home</NavLink>
//     <NavLink
//       to="/about"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >About</NavLink>
//     <NavLink
//       to="/login"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >Login</NavLink>
//   </div>;