import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="container">
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/about" exact>About</NavLink>
      <NavLink to="/items/new" exact>Create</NavLink>
    </div>
  )
}

export default NavBar;