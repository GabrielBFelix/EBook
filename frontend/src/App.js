import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'


import Header from './components/common/Header/Header';
import HomePage from './pages/Home/HomePage';
import SignInAndSignUpPage from './pages/SignInAndSignUp/SignInAndSignUpPage'
import SignUpPage from './pages/SignUp/SignUpPage'

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path='/signUp' component={SignUpPage}/>
        <Route path='/signIn' component={SignInAndSignUpPage}/>
        <Route exact path='/' component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
