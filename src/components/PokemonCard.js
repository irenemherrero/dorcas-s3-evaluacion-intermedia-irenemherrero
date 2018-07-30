import React, {Component} from 'react';
import SkillsList from './SkillsList';
import '../styles/PokemonCard.css';

class PokemonCard extends Component {
    render() {
        console.log(this.props)
        const {name}=this.props;
        const {url}=this.props;
        const {types}=this.props;

      return (
        <div className="PokemonCard">
        <div className="ImageContainer">
          <img src={url} alt={name}/>
        </div>
        <div className="NameContainer">
            <h1 className="PokemonName">{name}</h1>
        </div>
            <ul className="SkillsList">
              <SkillsList skillsList={types}/>
            </ul>
        </div>
      );
    }
  }
export default PokemonCard;