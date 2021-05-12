import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonInputs from './components/PersonInputs/PersonInputs';
import { BrowserRouter as Router, Redirect, Route, Switch, } from "react-router-dom";
import Login from './components/Login/Login';


const App = () => {
  const [isAuth,setIsAuth] =useState(true)
  return (
    <div>
      <Router>
        <Switch> 
          <Route path='/user'>{isAuth?<PersonInputs/>:<Redirect to='/'/>}</Route>
          <Route exact path="/" component={() => <Login isAuth={isAuth} setIsAuth={setIsAuth} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
