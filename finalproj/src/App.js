import './App.css';
import Header from './semantics/Header';
import Body from './semantics/Body';
import Footer from './semantics/Footer';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AboutPage from './AboutPage';
import ReservationPage from './ReservationPage';
import MenuPage from './MenuPage';
import HomePage from './HomePage'; // add import for HomePage component

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
          <Route path="/about" component={AboutPage} />
          <Route path="/reservation" component={ReservationPage} />
          <Route path="/menu" component={MenuPage} />
        </div>
      </Router>
    </div>
  );
}

export default App;
