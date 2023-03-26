import './App.css';
import Header from './semantics/Header';
import Body from './semantics/Body';
import Footer from './semantics/Footer';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './other/nav';
import AboutPage from './other/about';
import ReservationPage from './other/reservation';
import MenuPage from './other/menu';
import HomePage from './';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={HomePage} />
          <Route path="/other/about" component={AboutPage} />
          <Route path="/other/reservation" component={ReservationPage} />
          <Route path="/other/menu" component={MenuPage} />
        </div>
      </Router>
    </div>
  );
}

export default App;
