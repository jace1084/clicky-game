import React, { Component } from "react";
import MemCard from "./components/MemCard/Card";
import Wrapper from "./components/WrapperCom/Wrapper";
import Title from "./components/TitleCom/Title";
import matches from "./matchcards.json";
import "./App.css";

let correctGuesses = 0;
let bestScore = 0;
let clickStatement = "It's Futile, you'll never remember all of them. Don't click a card twice!";

class App extends Component {
    
    // Setting this.state.matches to the matches json array
    state = {
        matches,
        correctGuesses,
        bestScore,
        clickStatement
    };

    setClicked = id => {

        // Make a copy of the state matches array to work with
        const matches = this.state.matches;

        // Filter for the clicked match
        const clickedMatch = matches.filter(match => match.id === id);

        // If the matched image's clicked value is already true, 
        // do the game over actions
        if (clickedMatch[0].clicked){

            console.log ("Correct Guesses: " + correctGuesses);
            console.log ("Best Score: " + bestScore);

            correctGuesses = 0;
            clickStatement = "HA! You already clicked on that one! Now you have to start over!"

            for (let i = 0 ; i < matches.length ; i++){
                matches[i].clicked = false;
            }

            this.setState({clickStatement});
            this.setState({ correctGuesses });
            this.setState({matches});

        // Otherwise, if clicked = false, and the user hasn't finished
        } else if (correctGuesses < 11) {

            // Set its value to true
            clickedMatch[0].clicked = true;

            // increment the appropriate counter
            correctGuesses++;
            
            clickStatement = "Amaze-balls! You haven't click on that one yet! Do you dare to keep trying?";

            if (correctGuesses > bestScore){
                bestScore = correctGuesses;
                this.setState({ bestScore });
            }

            // Shuffle the array to be rendered in a random order
            matches.sort(function(a, b){return 0.5 - Math.random()});

            // Set this.state.matches equal to the new matches array
            this.setState({ matches });
            this.setState({correctGuesses});
            this.setState({clickStatement});
        } else {

            // Set its value to true
            clickedMatch[0].clicked = true;

            // restart the guess counter
            correctGuesses = 0;

            // Egg on the user to play again
            clickStatement = "Victory is Yours! You got ALL of them!!!";
            bestScore = 12;
            this.setState({ bestScore });
            
            for (let i = 0 ; i < matches.length ; i++){
                matches[i].clicked = false;
            }

            // Shuffle the array to be rendered in a random order
            matches.sort(function(a, b){return 0.5 - Math.random()});

            // Set this.state.matches equal to the new matches array
            this.setState({ matches });
            this.setState({correctGuesses});
            this.setState({clickStatement});

        }
    };

    render() {
        return (
            <Wrapper>
                <Title>Family Guy Memory Game!</Title>
        
                <h3 className="scoreSummary">
                    {this.state.clickStatement}
                </h3>
                
                <h3 className="scoreSummary">
                    Correct Guesses: {this.state.correctGuesses} 
                    <br />
                    Best Score: {this.state.bestScore} 
                </h3>

                {this.state.matches.map(match => (
                    <MemCard
                        setClicked={this.setClicked}
                        id={match.id}
                        key={match.id}
                        image={match.image}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;