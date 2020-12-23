import React from "react"


const Name =(props)=>{
    const {pokemonName} = props;
    return (
        <div>
            <div className = "o-name">
               {pokemonName}
                </div>  
        </div>
    );
}
export default Name; 