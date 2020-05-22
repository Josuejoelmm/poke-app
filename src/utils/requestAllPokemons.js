import axios from 'axios';

async function fetchAllPokemons() {
    try {
        let response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

async function fetchPokemonsDetails(url) {
    try {
        let response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export default {
    fetchAllPokemons,
    fetchPokemonsDetails
}