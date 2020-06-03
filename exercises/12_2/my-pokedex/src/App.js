import React from 'react';
import './App.css';
import pokemons from './data'
import Pokedex from './components/pokedex';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Pokedex</h1>
          <Pokedex pokeList={pokemons} />
        </div>
      </header>
    </div>
  );
}

export default App;
