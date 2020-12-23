import React from "react"
import "./PokemonAbilities.css";


const Abilities =(props)=>{
    const {nameAbility, url} = props;
    return (
        
            <div className = "o-abilities">
            <div className = "o-nameability">
               {nameAbility}
                </div>
            <div className = "o-urlabilities">
                <a className = "o-url">{url}</a> 
            </div>
        </div>
         
    );
}
export default Abilities; 