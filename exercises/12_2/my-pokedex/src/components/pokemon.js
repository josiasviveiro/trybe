/*
1. Pokemon: como o próprio nome diz, esse componente representa um pokemon. 
Esse componente recebe como entrada um objeto 
que contém informações referentes a um pokemon específico. 
Esse componente precisa retornar as seguintes informações 
para serem mostradas para quem usar a aplicação:

nome do pokemon;

tipo do pokemon;

peso médio do pokemon, acompanhado da unidade de medida usada;

imagem do pokemon.
*/
import React from 'react';

class Pokemon extends React.Component {
  render() {
    const {
      //id, 
      name, 
      type, 
      averageWeight,
      image
    } = this.props.pokemon;
    
    return (
      <div>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <img src={image} alt={name}/>
      </div>
    );
  }
}

export default Pokemon;
