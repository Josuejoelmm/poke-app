import { actions } from '../actions';
import { filterSpeciesTextByLanguage } from '../../utils/utilsFunctions';

const initialState = {
    pokemonsDetail: {},
    speciesText: '',
    errorFetch: '',
    isLoading: false,
    isLoadingSpeciesText: false,
    language: 'en',
    abilities: []
}

const detailsCharacters = (state = initialState, action) => {
    switch(action.type) {
        case actions.FETCH_POKEMON_DETAILS + '_START':
            return {
                ...state,
                isLoading: true
            }
        case actions.FETCH_POKEMON_DETAILS + '_SUCCESS':
            return {
                ...state,
                pokemonsDetail: action.payload.data,
                isLoading: false
            }
        case actions.FETCH_POKEMON_DETAILS + '_ERROR':
            return {
                ...state,
                errorFetch: action.payload.message,
                isLoading: false
            }
        case actions.FETCH_POKEMON_SPECIES + '_START':
            return {
                ...state,
                isLoadingSpeciesText: true
            }
        case actions.FETCH_POKEMON_SPECIES + '_SUCCESS':
            return {
                ...state,
                speciesText: filterSpeciesTextByLanguage(action.payload.data.flavor_text_entries, action.meta),
                isLoadingSpeciesText: false
            }
        case actions.FETCH_POKEMON_SPECIES + '_ERROR':
            return {
                ...state,
                errorFetch: action.payload.message,
                isLoadingSpeciesText: false
            }
        case actions.SET_ABILITIES:
            return {
                ...state,
                abilities: action.abilities
            }    
        case actions.CHANGE_LANGUAGE:
            return {
                ...state,
                language: action.value
            }    
        default:
            return state;
    }
}

export default detailsCharacters;