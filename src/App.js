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
        <Route path='/' exact component={Home}/>
        <Route path='/knowledge' exact component={Knowledge}/>
        <Route path='/contact' exact component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
