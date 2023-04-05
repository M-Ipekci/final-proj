import './App.css';
import Header from './semantics/Header';
import Body from './semantics/Body';
import Footer from './semantics/Footer';
import React from 'react';
import ReservationPage from './other/reservation';
import MenuPage from './other/menu';
import HomePage from './other/homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './other/Navigation';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Navigation />
        <Body>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/menu" element={<MenuPage />} />
          </Routes>
        </Body>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
