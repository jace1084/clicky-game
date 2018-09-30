import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import matches from "./matchcards.json";
// const Shuffle = window.Shuffle;


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
    clickStatement
};
  };

setClicked = id => {
  const matches = this.state.matches;
  const clickedMatch = matches.filter(match => match.id === id);


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

  clickMessage = "Victory is yours! You haven't selected that card yet";

  if (correctGuesses > bestScore){
      bestScore = correctGuesses;
      this.setState({ bestScore });
  }

  shuffleData = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };

} else {

  // Set its value to true
  clickedMatch[0].clicked = true;

  // restart the guess counter
  correctGuesses = 0;

  
  clickMessage = "WOW!!! You got ALL of them!!! Now, let's see if you can do it again!";
  bestScore = 12;
  this.setState({ bestScore });
  
  for (let i = 0 ; i < matches.length ; i++){
      matches[i].clicked = false;
  };

  shuffleData = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };

  // render() {
  //   return (
  //       <Wrapper>
  //           <Title>Family Guy Memory Game</Title>
    
  //           <h3 className="scoreSummary">
  //               {this.state.clickMessage}
  //           </h3>
            
  //           <h3 className="scoreSummary">
  //               Correct Guesses: {this.state.correctGuesses} 
  //               <br />
  //               Best Score: {this.state.bestScore} 
  //           </h3>

  //           {this.state.matches.map(match => (
  //               <MatchCard
  //                   setClicked={this.setClicked}
  //                   id={match.id}
  //                   key={match.id}
  //                   image={match.image}
  //               />
  //           ))}
  //       </Wrapper>
  // }
  //   );
    export default App;
