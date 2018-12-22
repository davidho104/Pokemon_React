import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card"
import Header from "./components/Header"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import pokemon from "./pokemon.json"


export default class App extends Component {
constructor(props){
  super(props);
  this.state = {
    clicked:[],
    score:0,
    highScore:0,
    message:"",
    pokemon: pokemon
  };
}
updateScore = () => {
  let newScore = this.state.score + 1;
  this.setState({ score: newScore });
  if (newScore>=this.state.highScore){
    this.setState({ highScore: newScore });    
  } else if (newScore === 12){
    this.setState({ score:0 });
    this.setState({ highScore: 12 });
    this.reset();
  }
}

reset = () => {
  this.state.pokemon.map(pokemon => pokemon.clicked = false);
}

randomizePokemon = arr => {
  for (let i = arr.length -1; i>0; i--){
    let rand = Math.floor(Math.random() * (i+1));
    [arr[i], arr[rand]] = [ arr[rand], arr[i]];
  }
}

checkClicked = id => {
  for (let i=0; i<this.state.pokemon.length; i++){
    let cardState = this.state.pokemon[i];
    if (id === cardState.id && cardState.clicked === false){
      cardState.clicked = true;
    } else{
      this.setState({ score: 0 });
      this.reset();
    }
  }      this.randomizePokemon(pokemon);

}

  render() {
    return (
      <div className="container">
        <Navbar score ={ this.state.score } highScore = { this.state.highScore } message = { this.state.message }/>
        <Header />
        <Main />
          { this.state.pokemon.map(pokemon => (<Card 
            name = { pokemon.name }
            id = { pokemon.id }
            image = { pokemon.image }
            checkClicked = { pokemon.checkClicked }
            clicked = { pokemon.clicked }
          />)) }
      </div>
    );
  }
}