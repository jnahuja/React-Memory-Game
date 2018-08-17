import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

import NavTabs from "./components/NavTabs";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topScore: 0,
    gameResult: "",
    guessedArray: []
  };

  printScore = () => {

  }

  handleClick = id => {
    this.removeFriend(id);
    // if (friend.id)   FINISH THIS LINE OF CODE!
    // if (id)
    let gameResult = this.state.gameResult;
    this.scoreUpdate(gameResult);

  }

  scoreUpdate = result => {
    let score = this.state.score;
    let topScore = this.state.topScore;
    let guessedArray = this.state.guessedArray;
    if (result=="win") {
      score = score + 1;
      if (topScore < score) {
        topScore = score;
      }
    } else if (result=="lose") {
      score = 0;
      guessedArray = [];
    }
    this.setState({ score });
    this.setState({ topScore });
    this.setState({ guessedArray });
    this.printScore();
  }

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);

    // let score = this.state.score;
    let guessedArray = this.state.guessedArray;
    let gameResult = this.state.gameResult;
    gameResult = "win";
    for (i = 0; i<guessedArray.length; i++) {
      if (guessedArray[i] == id) {
        // score = 0;
        gameResult = "lose";
        // SCORE is ZERO AND LOSE THE GAME AND RESTART
      }
    }

    // guessedArray.indexOf(id)


    const friends = this.state.friends;

    if (gameResult == "win") {
      var j, x, i;
        for (i = friends.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = friends[i];
            friends[i] = friends[j];
            friends[j] = x;
        }
    }

    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
    // this.setState({ score });
    // this.setState({ guessedArray });
    this.setState({ gameResult });
  };

    // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Router>
        <NavTabs
          scoreUpdate={this.scoreUpdate}
          score={this.state.score}
          topScore={this.state.topScore}
        />
      </Router>
      <Title>Clicky Game!</Title>
      <Wrapper>
        {/* <Title>Clicky Game!</Title> */}
        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
