// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const NavBar = () => {
//   return (
//     <div className="navbar nav">
//       <NavLink
//         to="/"
//         exact
//         class="nav-item nav-link"
//       >Home</NavLink>
//       <NavLink
//         to="/about"
//         exact
//         class="nav-item nav-link"
//       >About</NavLink>

//     </div>
//   )
// }

// export default NavBar;

import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbarcheckbootstraplater">
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/about" exact>About</NavLink>
    </div>
  )
}

export default NavBar;