import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Knowledge from './components/pages/Knowledge';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/knowledge' component={Knowledge}/>
        <Route exact path='/contact' component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
