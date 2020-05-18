import React, { Component } from 'react';
import './styles/styles.scss';

// components
import Logo from './components/Logo.jsx';
import PokedexImg from './components/PokedexImg.jsx';
import Searchbar from './components/Searchbar.jsx';
import Results from './components/Results.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pokemon: {}
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
      .then(res => res.json())
      .then(data => this.setState({ pokemon: data }))
      .catch(error => console.error(`Error: ${error}`));
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ name: event.target.value.toLowerCase() });
  }

  render() {
    return (
      <div className="App">
        <Logo />
        <PokedexImg />
        <Searchbar handleClick={this.handleClick} handleChange={this.handleChange}/>
        <Results data={this.state.pokemon}/>
      </div>
    );
  }
}

export default App;