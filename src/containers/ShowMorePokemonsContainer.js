import ShowMorePokemons from '../ui/components/ShowMorePokemons';
import { connect } from 'react-redux';
import { showMorePokemons } from '../redux/actions';

export default connect(
    state => ({
        nextPageUrl: state.pokemons.nextPageUrl,
        prevPageUrl: state.pokemons.prevPageUrl,
        isLoadingMorePokemon: state.pokemons.isLoadingMorePokemon
    }),
    { showMorePokemons }
)(ShowMorePokemons);