import Home from '../ui/components/Home';
import { connect } from 'react-redux';
import { getAllPokemons } from '../redux/actions';

export default connect(
    state => {
        return {
            allPokemon: state.pokemons.allPokemon,
            isLoadingPokemonList: state.pokemons.isLoadingPokemonList,
            errorFetchAllPokemon: state.pokemons.errorFetchAllPokemon
        }
    }, {
        getAllPokemons,
    })(Home);