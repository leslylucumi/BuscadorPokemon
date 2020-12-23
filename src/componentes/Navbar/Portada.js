import React from "react"
import ImagenPortada from "../Navbar/ImagenPortada"


const Portada =(props)=>{
    const {imagenPortada} = props;
    return (
        <div class = "o-cardp">
            <div class = "o-imagenp">
                <ImagenPortada imagenPortada = {imagenPortada}/> 
                </div>  
        </div>

    );
}

export default Portada; 