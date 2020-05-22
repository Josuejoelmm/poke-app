import getPokemons from '../utils/requestAllPokemons';
import axios from 'axios';

export const actions = {
    FETCH_ALL_POKEMON: 'FETCH_ALL_POKEMON',
    FETCH_POKEMON_DETAILS: 'FETCH_POKEMON_DETAILS',
}

export function getAllPokemons() {
    return {
        type: actions.FETCH_ALL_POKEMON,
        payload: getPokemons.fetchAllPokemons()
    };
}

export function getPokemonDetails(url) {
    return {
        type: actions.FETCH_POKEMON_DETAILS,
        payload: axios.get(url)
    }
}