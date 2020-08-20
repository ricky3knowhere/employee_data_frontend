import React from 'react';
import './App.css';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import User from './pages/user'
import UserNew from './pages/userNew';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Link to="/">Home</Link> | 
          <Link to="/user">User</Link> | 
          <Link to="/user/new">User New</Link><br /><br />
          <Switch>
            <Route path="/" exact ><Home /></Route>
            <Route path="/user"><User /></Route>
            <Route path="/user/new"><UserNew /></Route>
          </Switch>
        </BrowserRouter>
    </div>  
  );
}

export default App;
