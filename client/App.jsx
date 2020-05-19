import React, { useState, useEffect } from 'react';
import './styles/styles.scss';

// components
import Logo from './components/Logo.jsx';
import PokedexImg from './components/PokedexImg.jsx';
import Searchbar from './components/Searchbar.jsx';
import Results from './components/Results.jsx';

const App = () => {

  const [name, setName] = useState('');
  const [data, setData] = useState({});


  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value.toLowerCase());
  };

  const handleClick = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.error(`Error: ${error}`));
  };

  return (
    <div className="App">
      <Logo />
      <PokedexImg />
      <Searchbar handleClick={handleClick} handleChange={handleChange}/>
      <Results data={data}/>
    </div>
  );
};

export default App;