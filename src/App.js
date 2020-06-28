import React, {Component } from 'react';
import './App.css'
import { Route, Link } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

import Welcome from './components/Welcome'
import User from './components/User'
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
     
    <div className="container"> 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <Link to="/" className="navbar-brand">Home</Link>
     <div className="collapse navbar-collapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <Link to="/otp" className="nav-link">Login</Link>
      </li>
      <li className="nav-item">
        <Link to="/signup" className="nav-link">Signup</Link>
      </li>
      </ul>
      </div>

    </nav>
    
    <Route path="/" exact component = {Home} />
    <Route  exact path="/otp" component={Login} />
    <Route  path="/signup" component={Signup} />
    <Route path="/welcome" component={Welcome} />
    <Route path="/user" component={User} />
   
    </div>
    
   </>
  );
}

export default App;
