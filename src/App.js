import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonInputs from './components/PersonInputs/PersonInputs';
import { BrowserRouter as Router, Redirect, Route, Switch, } from "react-router-dom";
import Login from './components/Login/Login';
import PrivateRoute from './components/protectedRoute'


const App = () => {
  const [isAuth,setIsAuth] =useState(false)
  const test = ()=>{
     setIsAuth(true)
  }
  
  return (
    <div>
      <Router>
        <Switch> 
          <PrivateRoute path='/user' isAuth={isAuth}  Component={PersonInputs}/>
          <Route exact path="/" component={() => <Login test={test} isAuth={isAuth} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
