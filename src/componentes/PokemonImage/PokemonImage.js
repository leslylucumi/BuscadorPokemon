import React from "react"
import "./PokemonImage.css";

const Image =(props)=>{
    const {Image} = props;
    return (
        <div>
            <div className = "o-image">
            <img class = "o-port" src ={Image}/>
                </div>  
        </div>
    );
}
export default Image;   