import axios from 'axios';

export const actions = {
    FETCH_ALL_POKEMON: 'FETCH_ALL_POKEMON',
    FETCH_POKEMON_DETAILS: 'FETCH_POKEMON_DETAILS',
    FETCH_MORE_POKEMON: 'FETCH_MORE_POKEMON',
}

export function getAllPokemons() {
    return {
        type: actions.FETCH_ALL_POKEMON,
        payload: axios.get('https://pokeapi.co/api/v2/pokemon/?limit=5')
    }
}

export function showMorePokemons(nextPageUrl) {
    return {
        type: actions.FETCH_MORE_POKEMON,
        payload: axios.get(nextPageUrl)
    }
}

export function getPokemonDetails(pokemonsDetails) {
    return {
        type: actions.FETCH_POKEMON_DETAILS,
        pokemonsDetails
    }
}