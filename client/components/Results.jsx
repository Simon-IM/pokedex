import React from 'react';

function Results(props) {
  const pokemon = props.data;

  return (
    <div>
      <ul>
        <li>Name: {pokemon.name}</li>
        <li>Base Experience: {pokemon.base.experience}</li>
        <li>Order: {pokemon.order}</li>
        <li>Height: {pokemon.height}</li>
        <li>Weight: {pokemon.weight}</li>
      </ul>
    </div>
  );
}

export default Results;