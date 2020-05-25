import React, { Component } from 'react';
import './styles/Home.scss';
import PokeCard from './PokeCard';
import ShowMorePokemonsContainer from '../../containers/ShowMorePokemonsContainer';
import Loader from './Loader';
import PikachuImg from '../../images/pikachu-400x400.png';

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
                <div className="row flex">
                    <div className="inner-pokecards width-50 col-1">
                        <div className="wrapper-pokecards">
                            {
                                !isLoadingPokemonList
                                ? allPokemon.map((pokemon, i) => (
                                    <PokeCard key={`${pokemon.name}-${i}`} data={pokemon} index={i} />
                                ))
                                : <Loader />
                            }
                        </div>
                    </div>
                    <div className="width-50 col-2">
                        <figure className="flex">
                            <img src={PikachuImg} alt="banner"/>
                        </figure>
                    </div>
                </div>
                <ShowMorePokemonsContainer />
            </section>
        )
    }
}

export default Home;