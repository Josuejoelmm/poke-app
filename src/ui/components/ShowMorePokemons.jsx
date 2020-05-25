import React from 'react';
import Loader from './Loader';
import './styles/ShowMorePokemons.scss';

export default function ShowMorePokemons({ showMorePokemons, nextPageUrl, prevPageUrl, isLoadingMorePokemon }) {
    function nextPage() {
        showMorePokemons(nextPageUrl)
    }
    function prevPage() {
        showMorePokemons(prevPageUrl)
    }
    if(isLoadingMorePokemon) {
        return(<Loader />);
    }
    return(
        <div className="show-more-container" >
            <div className={prevPageUrl === null ? "show-more-pokemons disable" : "show-more-pokemons"} onClick={prevPage}>Prev Page</div>
            <div className="show-more-pokemons" onClick={nextPage}>Next Page</div>
        </div>
    )
}