import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import PokemonMove from "./PokemonMove";
import "./PokemonMoves.css";

let url = "https://pokeapi.co/api/v2/pokemon/";
class PokemonMoves extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: props.location.pathname.replace("/moves/", ""),
        data: {moves: []}

    };
    
  }

  componentDidMount(){
    fetch(url + this.state.id.toLowerCase())
    .then((response) => response.json())
    .then((data) => {
      this.setState({ data: data});
      console.log(data);
    })
  }
  render() { 
    console.log(this.state.id) 
    console.log(this.state.data) 

    const moves = this.state.data.moves.map((character) => (
        <PokemonMove
          nameMove={character.move.name}
          key={character.move.name}
          urlMove={character.move.url}
        />
      ));
    return (
        <div className = "o-cardmoves">
      <div className= "o-CardPokemonMoves">
        <div className="o-moves">{this.state.data.moves.length > 0 ? moves: <div></div>}</div>
        <div className = "o-button">
        <button className = "o-buttonVolver"><Link to = {"/"}>Volver</Link> </button>
        </div>
      </div>
      </div>
    );
  }
}


export default withRouter (PokemonMoves);
