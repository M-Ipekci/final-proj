// src/App.js
import './App.css';
import Header from './semantics/Header';
import Body from './semantics/Body';
import Footer from './semantics/Footer';
import React, { useState } from 'react';
import AboutPage from './other/about';
import ReservationPage from './other/reservation';
import MenuPage from './other/menu';
import HomePage from './other/HomePage';
import Navigation from './other/Navigation';


function App() {
  const [activePage, setActivePage] = useState('home');

  const handleNavigationClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="App">
      <Header />
      <Navigation handleNavigationClick={handleNavigationClick} />
      <Body>
        {activePage === 'home' && <HomePage />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'reservation' && <ReservationPage />}
        {activePage === 'menu' && <MenuPage />}
      </Body>
      <Footer />
    </div>
  );
}

export default App;