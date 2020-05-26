import { combineReducers  } from 'redux';
import pokemons from './pokemons';
import detailsCharacter from './detailsCharacter';

export default combineReducers(
    {
        pokemons,
        detailsCharacter 
    }
);