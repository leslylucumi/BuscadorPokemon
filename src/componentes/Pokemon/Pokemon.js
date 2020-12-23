import React, { Component } from "react";
import PokemonAbilities from "../PokemonAbilities/PokemonAbilities";
import {Link} from "react-router-dom";
import "./Pokemon.css";



class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
}


  render() {
    const {
      pokemonName,
      pokemonImage,
      pokemonAbilities,
    } = this.props;
    const abilities = pokemonAbilities.map((character) => (
      <PokemonAbilities
        nameAbility={character.ability.name}
        key={character.slot}
        url={character.ability.url}
      />
    ));
    
    return (
        
      <div className="o-cardpokemon">
          <div className="o-titlepokemon">Pokedex Data</div>
        <div className = "o-nameandimg">
        <div className="o-Pname">Name: {pokemonName}</div>
        <div className="o-imgpokemon">
          <img src={pokemonImage}></img>
        </div>
        </div>
        <div className = "o-infopokemon">
        <div className="o-abilities">Abilities: {abilities}</div>
        <div class="o-button">
            <Link to = {"/moves/" + pokemonName}><button className="o-btn">Ver moves</button></Link>
        </div>
        </div>
      </div>
    );
  }
}

export default Pokemon;
