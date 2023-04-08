import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Reservation from './components/Reservation';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reservation" component={Reservation} />
          <Route path="/menu" component={Menu} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
