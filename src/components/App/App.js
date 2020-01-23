import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

import HomePage from '../HomePage/HomePage';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' exact component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
