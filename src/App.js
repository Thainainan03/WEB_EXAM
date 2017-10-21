import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'; 
import routes from './routing-config';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1 className="left" >WEB_EXAM</h1>
          <ul>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/president" >president</NavLink></li>
          </ul>
          <switch>
            {routes.map((route,index) => (<Route key={index} path={route.path} component={route.component} exact={route.exact} />))}  
          </switch>   
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
