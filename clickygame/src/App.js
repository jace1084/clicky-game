import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import matches from "./matchcards.json";


// set varibles to store your users guesses, score, and event message (in this case a "click" event). 
// These varibles will be set as "let" becasue their values will change as the game goes along.

// all values will be set to 0 to begin the game at 0.

let correctGuesses = 0; 
let bestScore = 0;
let clickStatement = "Click on your favorite Family Guy character to earn points, but be sure to remember who you clicked...This is a memory game PEOPLE!";



class App extends Component {
  constructor(props) {
    super(props);

  state = {
    matches,
    correctGuesses,
    bestScore,
    clickMessage
};
  };

setClicked = id => {
  const matches = this.state.matches;
  const clickedMatch = matches.filter(match => match.id === id);

  // This statement says if the clicked match is true (already clicked), preform the "game-over" function. 

  if(clickedMatch[0].clicked){

  correctGuesses = 0;
            clickMessage = "Dammit! You memory sucks! You clicked that already"

            matches.map(match => match.id === id);
            matches.clicked = false;

  
            this.setState({clickMessage});
            this.setState({ correctGuesses });
            this.setState({matches});

  } else if(correctGuesses < 11){

  // Set its value to true
  clickedMatch[0].clicked = true;

  // increment the appropriate counter
  correctGuesses++;

  clickMessage = "Great! You haven't click on that one yet! Keep going!";

  if (correctGuesses > bestScore){
      bestScore = correctGuesses;
      this.setState({ bestScore });
  }

export default App;
