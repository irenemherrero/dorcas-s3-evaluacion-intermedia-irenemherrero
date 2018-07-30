import React, {Component} from 'react';
import PokemonCard from './PokemonCard';
import '../styles/PokemonList.css';

class PokemonList extends Component {

  render() {
    console.log(this.props.arrayPokemon)
    const {arrayPokemon} = this.props

  return (
    <ul className="PokemonList">
        {arrayPokemon.map(function(pokemon) {
            return(
                <li key={pokemon.id}>
                    <PokemonCard className="PokemonCard"
                        evolution={pokemon.evolution}
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

  export default PokemonList;