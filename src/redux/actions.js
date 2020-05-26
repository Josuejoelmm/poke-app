import axios from 'axios';

export const actions = {
    FETCH_ALL_POKEMON: 'FETCH_ALL_POKEMON',
    FETCH_MORE_POKEMON: 'FETCH_MORE_POKEMON',
    FETCH_POKEMON_DETAILS: 'FETCH_POKEMON_DETAILS',
    FETCH_POKEMON_SPECIES: 'FETCH_POKEMON_SPECIES',
}

export function getAllPokemons() {
    return {
        type: actions.FETCH_ALL_POKEMON,
        payload: axios.get('https://pokeapi.co/api/v2/pokemon/?limit=5')
    }
}

export function showMorePokemons(PageUrl) {
    return {
        type: actions.FETCH_MORE_POKEMON,
        payload: axios.get(PageUrl)
    }
}

export function getPokemonDetails(url) {
    return {
        type: actions.FETCH_POKEMON_DETAILS,
        payload: axios.get(url)
    }
}

export function getPokemonSpecies(id, language) {
    return {
        type: actions.FETCH_POKEMON_SPECIES,
        payload: axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`),
        meta: language
    }
}

export function filterSpeciesTextByLanguage(entries, language) {
    let result = entries.filter(text => text.language.name == language);
    return result[0].flavor_text;
}