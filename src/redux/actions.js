import axios from 'axios';
import { getAbilities, filterTextByLanguage, getTypes } from '../utils/utilsFunctions';

export const actions = {
    FETCH_ALL_POKEMON: 'FETCH_ALL_POKEMON',
    FETCH_MORE_POKEMON: 'FETCH_MORE_POKEMON',
    FETCH_POKEMON_DETAILS: 'FETCH_POKEMON_DETAILS',
    FETCH_POKEMON_SPECIES: 'FETCH_POKEMON_SPECIES',
    SET_ABILITIES: 'SET_ABILITIES',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
    SET_TYPES: 'SET_TYPES',
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

export function getPokemonDetails(url, language) {
    return dispatch => {
        return dispatch({
            type: actions.FETCH_POKEMON_DETAILS,
            payload: axios.get(url)
                .then(response => {
                    Promise.all(getTypes(response.data.types))
                        .then(types => {
                            const typeData = types.map(type => {
                                return {
                                    name: filterTextByLanguage(type.data.names, language, 'abilities')
                                }
                            })
                            dispatch(setPokemonTypes(typeData));
                        })

                    Promise.all(getAbilities(response.data.abilities))
                        .then(abilities => {
                            const responseArray = abilities.map(ability => {
                                return {
                                    name: filterTextByLanguage(ability.data.names, language, 'abilities'),
                                    description: filterTextByLanguage(ability.data.flavor_text_entries, language)
                                }
                            });
                            dispatch(setPokemonAbilities(responseArray))
                        });
                    return response;
                })
        })
    }
}

export function setPokemonAbilities(abilities) {
    return {
        type: actions.SET_ABILITIES,
        abilities
    }
}

export function setPokemonTypes(types) {
    return {
        type: actions.SET_TYPES,
        types
    }
}

export function getPokemonSpecies(id, language) {
    return {
        type: actions.FETCH_POKEMON_SPECIES,
        payload: axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`),
        meta: language
    }
}

export function changeLanguage(value) {
    return {
        type: actions.CHANGE_LANGUAGE,
        value
    }
}