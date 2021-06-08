import React, { useEffect, useState } from "react";
import logo from './tecnm.png';
import './App.css';
import axios from "axios";

function App() {

  const [poke, setPoke] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/') // GET A SERVIDOR
      .then(res => res.json()) // SE CONVIERTE EN JSON
      .then(res => setPoke(res['results'][1]['name'])); // ACRUALIZAMOS LO QUE VAMOS A MOSTRART
  }, []); // CON [] SE EJECUTA SOLO AL CAMBIAR 

  const [poke2, setPoke2] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then((res) => {
        setPoke2(res.data.results[1].name);
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{poke}</h1> <h1 style={{color: 'red'}}>{poke2}</h1>
      </header>
    </div>
  );

}

export default App;