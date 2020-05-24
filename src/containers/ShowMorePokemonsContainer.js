import ShowMorePokemons from '../ui/components/ShowMorePokemons';
import { connect } from 'react-redux';
import { showMorePokemons } from '../redux/actions';

export default connect(
    state => ({
        nextPageUrl: state.pokemons.nextPageUrl,
        isLoadingMorePokemon: state.pokemons.isLoadingMorePokemon
    }),
    { showMorePokemons }
)(ShowMorePokemons);