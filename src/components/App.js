import React, {Component, Fragment} from 'react';
import PokemonList from './PokemonList';
import '../styles/App.css';
import PropTypes from 'prop-types';

class App extends Component {

  render() {
    console.log(this.props.arrayPokemon)
    const {arrayPokemon} = this.props
  
  return(
    <Fragment>
      <header>
        <h1 className="PokemonTitle">Mi lista de pokemon</h1>
      </header>
      <main>
        <PokemonList className="PokemonList" arrayPokemon={arrayPokemon}/>
      </main>
    </Fragment>
    );
  }
}

App.propTypes = {
  arrayPokemon: PropTypes.arrayOf(PropTypes.object)
};

export default App;