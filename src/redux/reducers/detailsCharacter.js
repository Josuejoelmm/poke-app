import { actions } from '../actions';
import { filterSpeciesTextByLanguage } from '../../utils/utilsFunctions';

const initialState = {
    pokemonsDetail: null,
    errorFetch: '',
    isLoading: false,
    isLoadingSpeciesText: false,
    language: 'en',
    abilities: [],
    esSpeciesText: null,
    enSpeciesText: null,
    types: []
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
            const { es, en } = filterSpeciesTextByLanguage(action.payload.data.flavor_text_entries, action.meta)  
            return {
                ...state,
                'esSpeciesText': es,
                'enSpeciesText': en,
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

export default detailsCharacters;