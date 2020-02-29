import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Common/Header/Header';
import SignIn from './components/SignIn/SignIn';

import Home from './pages/Home/Home';

import './App.css';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signIn" component={SignIn} />
                <Redirect to="/"></Redirect>
            </Switch>
        </div>
    );
}

export default App;
