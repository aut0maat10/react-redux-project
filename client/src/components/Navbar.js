import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Home</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer to="/forsale">
          <NavItem eventKey={2}>
            For Sale
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/items/new">
          <NavItem eventKey={1}>
            Create
          </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  )
}

export default NavBar; 

