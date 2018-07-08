import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return ( < div className = "App" >
             <header className = "App-header" >
            <img src = { logo }
            className = "App-logo"
            alt = "logo" />
            <h1 className = "App-title" > React App v.0.0.1 </h1> </header > <p className = "App-intro" >
            Soon to come more FN details. </p > 
            <p>Maybe a redbull swag shop? or symphony on the potomac? maybe a place to make smart contracts with youor friends for making bets?</p></div> 
        );
    }
}

export default App;