import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'; 
import routes from './routing-config';

class App extends Component {
  render() {
    const dUrl = "https://mysafeinfo.com/api/data?list=presidents&format=json";
    console.log(dUrl);
    return (
      <BrowserRouter>
        <div>
          <h1 className="left" >WEB_EXAM</h1>
          <ul>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/president" >president</NavLink></li>
          </ul>
          
            {routes.map((route,index) => (<Route key={index} path={route.path} component={route.component} exact={route.exact} />))}  
         
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
