import React, {Component} from 'react';
import PokemonCard from './PokemonCard';

class App extends Component {

  render() {
    console.log(this.props.arrayPokemon)
  
  return(
  <ul className="PokemonList">
     {this.props.arrayPokemon.map(function(pokemon) {
        return(
          <li>
            <PokemonCard 
              id={pokemon.id}
              name={pokemon.name} 
              image={pokemon.url} 
              types={pokemon.types}
              url={pokemon.url}
            />
          </li>)
        })
      }
    </ul>
    );
  }
}
export default App;