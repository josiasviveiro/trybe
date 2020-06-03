/*
2. Pokedex: esse componente representa a enciclopédia de pokemons.
Esse componente recebe como entrada uma lista de pokemons para serem mostrados na tela.
Para cada um desses pokemons recebidos, Pokedex chama o componente Pokemon.
*/
import React from 'react';
import Pokemon from './pokemon';

class Pokedex extends React.Component {
  render() {
    const pokeList = this.props.pokeList;
    return (
      <div>
        {pokeList.map(mon => <Pokemon key={mon.id} pokemon={mon}/>)}
      </div>
    );
  }
}

export default Pokedex;
