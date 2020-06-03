import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = [
  '14h - Momento Inicial',
  '14h30 - Conteúdo do Dia',
  '16h30 - Aula ao vivo',
  '18h - Exercícios',
  '19h30 - Forms',
  '19h40 - Fechamento'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {task(42)}
        {compromissos.map(element => task(element))}
      </header>
    </div>
  );
}

export default App;
