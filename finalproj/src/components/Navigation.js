import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/reservation" activeClassName="active">
            Reservation
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" activeClassName="active">
            Menu
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
