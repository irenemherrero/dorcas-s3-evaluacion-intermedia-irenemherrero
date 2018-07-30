import React, {Component} from 'react';
import '../styles/SkillsList.css';
import PropTypes from 'prop-types';

class SkillsList extends Component {
    render() {
        console.log(this.props)
        const {skillsList}=this.props

    return (
        skillsList.map(function(skill) {
            return(<li className="ItemSkill" key={skill}> {skill} </li>)
            })
                
        );  
    }
}

SkillsList.propTypes = {
    skillsList: PropTypes.array,
    skill: PropTypes.string
  };

export default SkillsList;