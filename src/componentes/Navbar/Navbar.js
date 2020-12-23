import React from "react";
import Portada from "./Portada"; 
import "./Navbar.css";


const Navbar =()=>{
    return (
<div>
<div className="App">
        <div class="o-container">
          <div class="row o-header o-topnav sticky-top navbar">
            <div class="container o-containerNav">
              <div class="col-sm-2">
                <img
                  class="o-logo"
                  src="https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png"
                  alt="logo"
                />
              </div>
              <div class="col-sm-4">
                <div class="row o-headerButtons">
                  <a class="o-fontheader">
                    Busca tu pokemon favorito
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
          <div class="o-portada">
            <Portada
              imagenPortada="https://www.iphonemovil.com/wp-content/uploads/2016/07/pokemon-pikachu-go.jpg"
            />
          </div>
          </div>
    );

}
export default Navbar; 