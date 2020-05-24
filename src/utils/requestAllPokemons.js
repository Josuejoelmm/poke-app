import axios from 'axios';

export function getPokemonsDetails(arrayData) {
    return arrayData.map(pokemon => {
        return axios.get(pokemon.url);
    });
}

async function fetchAllPokemons() {
    try {
        let response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export default {
    fetchAllPokemons
}