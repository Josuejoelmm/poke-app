import PokemonDetails from '../ui/components/PokemonDetails';
import { connect } from 'react-redux';
import { getPokemonDetails, getPokemonSpecies, changeLanguage } from '../redux/actions';

export default connect(
    state => {
        return {
            pokemonsDetail: state.detailsCharacter.pokemonsDetail,
            errorFetch: state.detailsCharacter.errorFetch,
            isLoading: state.detailsCharacter.isLoading,
            isLoadingSpeciesText: state.detailsCharacter.isLoadingSpeciesText,
            language: state.detailsCharacter.language,
            abilities: state.detailsCharacter.abilities,
            types: state.detailsCharacter.types,
            esSpeciesText: state.detailsCharacter.esSpeciesText,
            enSpeciesText: state.detailsCharacter.enSpeciesText,
        }
    },
    {
        getPokemonDetails,
        getPokemonSpecies,
        changeLanguage
    }
)(PokemonDetails);