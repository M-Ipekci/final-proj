// src/other/Navigation.js
import React from 'react';

function Navigation({ handleNavigationClick }) {
  return (
    <nav>
      <button onClick={() => handleNavigationClick('home')}>Home</button>
      <button onClick={() => handleNavigationClick('about')}>About</button>
      <button onClick={() => handleNavigationClick('reservation')}>Reservation</button>
      <button onClick={() => handleNavigationClick('menu')}>Menu</button>
    </nav>
  );
}

export default Navigation;
