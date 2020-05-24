import React from 'react';
import Loader from './Loader';
import './styles/ShowMorePokemons.scss';

export default function ShowMorePokemons({ showMorePokemons, nextPageUrl, isLoadingMorePokemon }) {
    function getMorePokemons() {
        showMorePokemons(nextPageUrl)
    }
    if(isLoadingMorePokemon) {
        return(<Loader />);
    }
    return(
        <div className="show-more-container" onClick={getMorePokemons}>
            <div className="show-more-pokemons">Show More</div>
        </div>
    )
}