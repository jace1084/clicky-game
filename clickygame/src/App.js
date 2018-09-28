import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from ".components/Card"

class App extends Component {

  state = {
    images:["../assets/images/fbcleavland.jpg"],
    score: 0,
    highscore: 0
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <div>
            {this.state.images.map(datum => imageSrc {datum})}
          </div>

      </div>
    );
  }
}

export default App;
