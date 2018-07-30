import React, {Component} from 'react';
import '../styles/SkillsList.css';

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

export default SkillsList;