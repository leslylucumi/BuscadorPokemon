import './App.css';
import React from "react";
import Search from "./componentes/Search/Search"
import {
  BrowserRouter as Router, 
  Switch,
  Route, 
} from "react-router-dom";
import PokemonMoves from "./componentes/PokemonMoves/PokemonMoves";
import Navbar from "./componentes/Navbar/Navbar";

function App() {
  return (
    <Router>
    <div className = "App">
      <Switch>
        <Route path = "/moves/:id" > 
        <PokemonMoves />
        </Route>
        <Route path = "/">
        <Navbar />
        <Search />
        </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
