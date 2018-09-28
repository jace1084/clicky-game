import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import matches from "./matchcards.json";


// set varibles to store your users guesses, score, and event message (in this case a "click" event). 
// These varibles will be set as "let" becasue their values will change as the game goes along.

// all values will be set to 0 to begin the game at 0.

let correctGuesses = 0 
let bestScore = 0
let clickStatement =

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
