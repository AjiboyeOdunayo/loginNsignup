import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Nav';
import Signup from './components/signup';
import Login from './components/login';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
library.add(faStroopwafel)
class App extends Component {
  

  render() {
    return ( 
      <Router>
        <div className="App">
            <Navigation/>
            
            <Signup/>
            
           
        </div>
      </Router>
    );
  }
}

export default App;
