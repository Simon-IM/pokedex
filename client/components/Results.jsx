import React from 'react';

const Results = (props) => {
  const pokemon = props.data;

  return (
    <div>
      <ul className="Results">
        <li>Name: {pokemon.name}</li>
        <li>Base Experience: {pokemon.base ? pokemon.base.experience : ''}</li>
        <li>Order: {pokemon.order}</li>
        <li>Height (ft): {pokemon.height}</li>
        <li>Weight (lbs): {pokemon.weight}</li>
      </ul>

      <img src={pokemon.sprites ? pokemon.sprites.front_shiny : ''}/>
    </div>
  );
}

export default Results;