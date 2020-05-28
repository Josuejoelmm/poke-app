import { actions } from '../actions';
import { filterTextByLanguage } from '../../utils/utilsFunctions';

const initialState = {
    pokemonsDetail: null,
    errorFetch: '',
    isLoading: false,
    language: 'en',
    abilities: [],
    esSpeciesText: null,
    enSpeciesText: null,
    types: []
}

const detailsCharacter = (state = initialState, action) => {
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
                errorFetch: action.payload.message + ", Please re-load to try again.",
                isLoading: false
            }
        case actions.FETCH_POKEMON_SPECIES + '_SUCCESS':
            const { es, en } = filterTextByLanguage(action.payload.data.flavor_text_entries, action.meta)  
            return {
                ...state,
                'esSpeciesText': es,
                'enSpeciesText': en
            }
        case actions.FETCH_POKEMON_SPECIES + '_ERROR':
            return {
                ...state,
                errorFetch: action.payload.message,
            }
        case actions.SET_ABILITIES:
            return {
                ...state,
                abilities: action.abilities
            }    
        case actions.SET_TYPES:
            return {
                ...state,
                types: action.types
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

export default detailsCharacter;