import React from "react"
import "./ImagenPortada.css";



const ImagenPortada = ({imagenPortada}) => {

    return(
        <div class = "o-img">
            <img class = "o-port" src ={imagenPortada}/>   
        </div>
    )
}

export default ImagenPortada;