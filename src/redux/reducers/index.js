import { combineReducers  } from 'redux';
import pokemons from './pokemonsListReducer';
import detailsCharacter from './detailsCharacterReducer';

export default combineReducers(
    {
        pokemons,
        detailsCharacter 
    }
);