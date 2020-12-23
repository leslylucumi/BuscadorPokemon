import React from "react"
import "./PokemonMove.css";


const PokemonMove =(props)=>{
    const {nameMove, urlMove} = props;
    return (
        <div className = "o-cardMove">
            <div className = "o-namemove">
               {nameMove}
                </div>  
            <div className = "o-url">
                {urlMove}
            </div>
        </div>
    );
}
export default PokemonMove; 