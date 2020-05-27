import React, { Component } from 'react';
import './styles/PokemonDetails.scss';
import axios from 'axios';
import tabCard from '../../images/container-logo.png';
import languageIcon from '../../images/language-icon.png';
import Loader from './Loader';
import { getAbilities, filterSpeciesTextByLanguage, getType } from '../../utils/utilsFunctions';
import Tag from './Tag';
import AbilityText from './AbilityText';

class PokemonDetails extends Component {
    constructor(props) {
        super(props);
        this.changeLanguageButton = this.changeLanguageButton.bind(this);
    }
    componentDidMount() {
        console.log('DIDMOUNT');
        
        const urlToGetDetails = `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.Id}`;
        this.props.getPokemonDetails(urlToGetDetails);
        this.props.getPokemonSpecies(this.props.match.params.Id, this.props.language);
        axios.get(urlToGetDetails)
            .then(response => {
                let myPromises = [
                    ...getAbilities(response.data.abilities),
                    ...getType(response.data.types)
                ];
                console.log(myPromises);
                
                Promise.all(getAbilities(response.data.abilities))
                    .then(abilities => {
                        // console.log(abilities, 'QUE TENGO');
                        
                        let responseArray = [];
                        abilities.map(obj => {
                            let dataRecord = {
                                name: filterSpeciesTextByLanguage(obj.data.names, this.props.language, 'abilities'),
                                description: filterSpeciesTextByLanguage(obj.data.flavor_text_entries, this.props.language)
                            }
                            responseArray.push(dataRecord);
                        });
                        this.props.getPokemonAbilities(responseArray);
                    });
            });
    }

    componentDidUpdate(prevProps) {
        console.log('ACTUALIIZAAAAAADOOOOOOOOOO');
        
        console.log(prevProps);
        if (this.props.language !== prevProps.language) {
            const urlToGetDetails = `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.Id}`;
            this.props.getPokemonSpecies(this.props.match.params.Id, this.props.language);
            axios.get(urlToGetDetails)
            .then(response => {
                Promise.all(getAbilities(response.data.abilities))
                    .then(abilities => {
                        let responseArray = [];
                        abilities.map(obj => {
                            let dataRecord = {
                                name: filterSpeciesTextByLanguage(obj.data.names, this.props.language, 'abilities'),
                                description: filterSpeciesTextByLanguage(obj.data.flavor_text_entries, this.props.language)
                            }
                            responseArray.push(dataRecord);
                        });
                        this.props.getPokemonAbilities(responseArray);
                    });
            });
        }
    }

    changeLanguageButton(e) {
        let value = e.target.textContent.toLowerCase();
        this.props.changeLanguage(value);
    }

    render() {
        const { pokemonsDetail, errorFetch, isLoading, speciesText, language, abilities } = this.props;

        if (isLoading) {
            return(
                <Loader />
            );
        }
        return(
            Object.keys(pokemonsDetail).length &&
                <section className="section-details">
                    <div className="language-container">
                        <div>
                            <img src={languageIcon} alt="language"/>
                            {
                                language === 'en' 
                                ? <div className="language-button" onClick={(e) => this.changeLanguageButton(e)}>ES</div> 
                                : <div className="language-button" onClick={(e) => this.changeLanguageButton(e)}>EN</div>
                            }
                        </div>
                    </div>
                    <div className="inner-details">
                        <div className="info-details">
                            <div className="tab-name">
                                <div>
                                    <span>{ pokemonsDetail.name.toUpperCase() }</span>
                                    <img src={tabCard} alt=""/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-1">
                                    <div>
                                        <div className="large-image">
                                            <img src={pokemonsDetail.sprites.front_default} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-2">
                                    <div>
                                        <p className="description-text">
                                            {speciesText}
                                        </p>
                                        <div className="row-type flex">
                                            <div className="col col-1">
                                                <div className="description">
                                                    <div>
                                                        <h3>{language === 'en' ? 'Height' : 'Altura'}:</h3>
                                                        <span>{(pokemonsDetail.height * 0.1).toFixed(1)} m</span>
                                                        <h3>{language === 'en' ? 'Weight' : 'Peso'}:</h3>
                                                        <span>{(pokemonsDetail.weight * 0.1).toFixed(1)} kg</span>
                                                        <h3>{language === 'en' ? 'Base EXP' : 'EXP Base'}:</h3>
                                                        <span>{pokemonsDetail.base_experience}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col col-2">
                                                <div>
                                                    <h3>{language === 'en' ? 'Type' : 'Tipo'}</h3>
                                                    <div className="type">
                                                        {
                                                            pokemonsDetail.types.map(obj => (
                                                                <Tag
                                                                    key={obj.slot}
                                                                    bgColor={'#BF2F50'} 
                                                                    tagText={obj.type.name}
                                                                    url={obj.type.url}
                                                                />
                                                            ))
                                                        }
                                                    </div>
                                                    <h3>{language === 'en' ? 'Abilities' : 'Habilidades'}</h3>
                                                    <div className="type">
                                                        {
                                                            abilities && abilities.map((ability, i) => (
                                                                <Tag
                                                                    key={`${ability.name}-${i}`}
                                                                    bgColor={'#336699'} 
                                                                    tagText={ability.name} 
                                                                />
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                abilities && abilities.map((ability, i) =>(
                                    <AbilityText 
                                        key={`${ability.name}-${i}`}
                                        abilityName={ability.name} 
                                        abilityText={ability.description}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>
        );
    };
};

export default PokemonDetails;