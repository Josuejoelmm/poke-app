import React, { Component } from 'react';
import axios from 'axios';

class PokemonDetails extends Component {
    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.Id}`)
            .then(response => {
                console.log(response.data);
            })
    }
    render() {
        console.log(this.props.match.params.Id);
        
        return(
            <div>
                <h2>Pokemon Details Page</h2>
            </div>
        );
    };
};

export default PokemonDetails;