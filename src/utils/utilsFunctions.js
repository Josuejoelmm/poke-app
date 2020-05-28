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

export function getTypes(arrayData) {
    return arrayData.map(data => {
        return axios.get(data.type.url)
    })
}

export function filterTextByLanguage(entries, language, type = '') {
    const esValue = entries.find(entry => entry.language.name === 'es');
    const enValue = entries.find(entry => entry.language.name === 'en');

    return {
        es: esValue[getPropertyByLanguage(type)],
        en: enValue[getPropertyByLanguage(type)]
    };
}

function getPropertyByLanguage(type) {
    return type === 'abilities' ? 'name' : 'flavor_text'
}