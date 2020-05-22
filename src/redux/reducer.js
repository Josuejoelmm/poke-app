import { actions } from './actions'
const initialState = {
    allPokemon: [],
    nextPageUrl: '',
    prevPageUrl: '',
    currentPage: '',
    pokemonDetail: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.FETCH_ALL_POKEMON + "_SUCCESS":
            return {
                ...state, 
                allPokemon: action.payload.results,
                nextPageUrl: action.payload.next
            }
        case actions.FETCH_POKEMON_DETAILS + '_SUCCESS':
            return {
                ...state,
                pokemonDetail: [...state.pokemonDetail, action.payload]
            }
        default:
            return state;
    }
}

export default reducer;