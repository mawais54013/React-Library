import React, { Component } from 'react';
import Timer from "./components/Timer";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Pomodoro Timer</p>
        </header>
        <br />
        <div className="App">
            <Timer />
        </div>
      </div>
    );
  }
}

export default App;
