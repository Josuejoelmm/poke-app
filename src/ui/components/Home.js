import React, { Component } from 'react';
import './styles/Home.scss';
import PokeCard from './PokeCard';
import ShowMorePokemonsContainer from '../../containers/ShowMorePokemonsContainer';
import Loader from './Loader';

class Home extends Component {
    componentDidMount() {
        if(!this.props.allPokemon.length) {
            this.props.getAllPokemons();
        }
    }
    
    render() {
        const { allPokemon, isLoadingPokemonList, errorFetchAllPokemon } = this.props;
        if(errorFetchAllPokemon) {
            return(
                <div>
                    <h1 className="error-message">{errorFetchAllPokemon}</h1>
                    <h2 className="error-message">Please reload the page</h2>
                </div>
            );
        }
        return (
            <section className="pokecards-container">
                <div className="inner-pokecards">
                    <div className="wrapper-pokecards">
                        {
                            !isLoadingPokemonList
                            ? allPokemon.map((pokemon, i) => (
                                <PokeCard key={`${pokemon.name}-${i}`} data={pokemon} />
                            ))
                            : <Loader />
                        }
                    </div>
                    <ShowMorePokemonsContainer />
                </div>
            </section>
        )
    }
}

export default Home;