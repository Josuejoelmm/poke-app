import axios from 'axios';

export function getPokemonsDetails(arrayData) {
    return arrayData.map(pokemon => {
        return axios.get(pokemon.url);
    });
}

export function getAbilities(arrayData) {
    return arrayData.map(data => {
        return axios.get(data.ability.url)
    })
}

export function getType(arrayData) {
    return arrayData.map(data => {
        return axios.get(data.type.url)
    })
}

export function filterSpeciesTextByLanguage(entries, language, type = '') {
    if (type === 'abilities') {
        let result = entries.filter(text => text.language.name == language);
        return result[0].name;
    }
    let result = entries.filter(text => text.language.name == language);
    return result[0].flavor_text;
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