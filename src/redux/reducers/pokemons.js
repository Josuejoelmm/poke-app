import { actions } from '../actions';
const initialState = {
    allPokemon: [],
    nextPageUrl: '',
    pokemonsDetail: [],
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
            console.log(action.payload);
            
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
                allPokemon: [...state.allPokemon, ...action.payload.data.results],
                nextPageUrl: action.payload.data.next,
                isLoadingMorePokemon: false
            }
        case actions.FETCH_POKEMON_DETAILS:
            return {
                ...state, 
                pokemonsDetail: action.pokemonsDetails
            }
        default:
            return state;
    }
}

export default pokemons;