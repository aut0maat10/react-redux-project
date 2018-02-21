import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Home</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={2} href="/forsale">
          For Sale
        </NavItem>
        <NavItem eventKey={1} href="/items/new">
          Create
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default NavBar; 

