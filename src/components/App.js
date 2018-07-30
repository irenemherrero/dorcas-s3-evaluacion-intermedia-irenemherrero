import React, {Component, Fragment} from 'react';
import PokemonList from './PokemonList';
import '../styles/App.css';

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
export default App;