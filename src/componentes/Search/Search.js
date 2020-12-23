import React, { Component } from "react";
import Pokemon from "../Pokemon/Pokemon";
import PokemonMoves from "../PokemonMoves/PokemonMoves";
import "./Search.css";


let url = "https://pokeapi.co/api/v2/pokemon/";
let searchString = "";

class search extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      word: "",
      error: false,
    };
  }

  getPokemon = (e) => {
    let { word } = this.state;
    searchString = word;
    console.log(word);
    if (word.length > 0) {
      e.preventDefault();
      this.setState ({data: null});
      fetch(url + word.toLowerCase())
        .then((response) => response.json())
        .then((data) => {
          this.setState({ data: data, word: "", error: false });
          console.log(data);
        })
        .catch((error) => {
          console.log("error");
          this.setState({ error: true});
        });
    }
  };

  render() {
    let { word } = this.state;
    return (
      <div>
        <div class="o-buscador">
          <form onSubmit={(e) => this.getPokemon(e)}>
            <div className = "o-input">
            <input
              name="firstName"
              onChange={(e) => this.setState({ word: e.target.value })}
              type="text"
              id="formulario"
              class="form-control o-textinput"
              placeholder="Buscar pokemon"
              value={word}
            /> </div>
            <div className = "o-button">
            <button className= "o-buttonBuscar" type="submit">Buscar</button>
            </div>
          </form>
        </div>
        <div className="o-personajes">
          {this.state.data ? (
            <Pokemon
              pokemonName={this.state.data.name}
              pokemonImage={this.state.data.sprites.front_default}
              pokemonAbilities={this.state.data.abilities}
              pokemonMoves={this.state.data.moves}
            />
          
          ) : this.state.error ? (
            <div>Pokémon {searchString} not found</div>
          ):(
            <div></div>
          )}
        </div>
      </div>
    );
  }
}

export default search;
