import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPokemons, getPokemonDetails } from '../../redux/actions';
import axios from 'axios';
import PokeCard from './PokeCard';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getAllPokemons();
        this.getDatilsOfPokemon()
            .then(response => {
                console.log(response);
                
                response.results.map(pokemon => {
                    this.props.getPokemonDetails(pokemon.url);
                })
            })
    }

    async getDatilsOfPokemon () {
        try {
            let response = await axios.get('https://pokeapi.co/api/v2/pokemon');
            return response.data;
        } catch (error) {
            console.log(error);
        }
        
    }
    render() {
        const { allPokemon, pokemonDetail } = this.props;
       
        return (
            <section className="">
                <div>
                    <div>
                        {
                            allPokemon 
                            ? allPokemon.map(pokemon => (
                                <PokeCard key={pokemon.name} data={pokemon} />
                            ))
                            : 'Loading...'
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default connect(
    state => {
        return {
            allPokemon: state.allPokemon,
            nextPageUrl: state.nextPageUrl,
            prevPageUrl: state.prevPageUrl,
            currentPage: state.currentPage,
            pokemonDetail: state.pokemonDetail,
        }
    }, {
        getAllPokemons,
        getPokemonDetails
    })(Home);