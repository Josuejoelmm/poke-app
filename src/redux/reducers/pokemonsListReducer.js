import { actions } from '../actions';
const initialState = {
    allPokemon: [],
    nextPageUrl: '',
    prevPageUrl: null,
    isLoadingPokemonList: true,
    isLoadingMorePokemon: false,
    errorFetchAllPokemon: ''
}

const pokemons = (state = initialState, action) => {
    switch(action.type) {
        case actions.FETCH_ALL_POKEMON + '_SUCCESS':
            return {
                ...state,
                allPokemon: [...action.payload.data.results],
                nextPageUrl: action.payload.data.next,
                isLoadingPokemonList: false
            }
        case actions.FETCH_ALL_POKEMON + '_ERROR':
            return {
                ...state,
                errorFetchAllPokemon: action.payload.message
            }
        case actions.FETCH_MORE_POKEMON + '_START':
            return {
                ...state,
                isLoadingMorePokemon: true
            }
        case actions.FETCH_MORE_POKEMON + '_SUCCESS':
            return {
                ...state,
                allPokemon: [...action.payload.data.results],
                nextPageUrl: action.payload.data.next,
                prevPageUrl: action.payload.data.previous,
                isLoadingMorePokemon: false
            }
        default:
            return state;
    }
}

export default pokemons;