import React, {Component} from 'react';


class PokemonCard extends Component {
    render() {
        
      return (
        <div className="PokemonCard">
          <img src={this.props.url} alt=""/>
            <h1 className="PokemonName">{this.props.name}</h1>
            <p className="Skill1"> {this.props.types[0]}</p>
            <p className="Skill2"> {this.props.types[1]}</p>
        </div>
      );
    }
  }
export default PokemonCard;