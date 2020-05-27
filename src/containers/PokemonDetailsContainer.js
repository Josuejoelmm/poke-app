import PokemonDetails from '../ui/components/PokemonDetails';
import { connect } from 'react-redux';
import { getPokemonDetails, getPokemonSpecies, getPokemonAbilities, changeLanguage } from '../redux/actions';

export default connect(
    state => {
        return {
            pokemonsDetail: state.detailsCharacter.pokemonsDetail,
            errorFetch: state.detailsCharacter.errorFetch,
            isLoading: state.detailsCharacter.isLoading,
            speciesText: state.detailsCharacter.speciesText,
            isLoadingSpeciesText: state.detailsCharacter.isLoadingSpeciesText,
            language: state.detailsCharacter.language,
            abilities: state.detailsCharacter.abilities,
        }
    },
    {
        getPokemonDetails,
        getPokemonSpecies,
        getPokemonAbilities,
        changeLanguage
    }
)(PokemonDetails);