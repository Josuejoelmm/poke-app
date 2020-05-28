import React, { Component } from 'react';
import './styles/PokemonDetails.scss';
import tabCard from '../../images/container-logo.png';
import languageIcon from '../../images/language-icon.png';
import Loader from './Loader';
import Tag from './Tag';
import AbilityText from './AbilityText';

class PokemonDetails extends Component {
    constructor(props) {
        super(props);
        this.changeLanguageButton = this.changeLanguageButton.bind(this);
    }
    componentDidMount() {
        const urlToGetDetails = `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.Id}`;
        this.props.getPokemonDetails(urlToGetDetails, this.props.language);

        this.props.getPokemonSpecies(this.props.match.params.Id, this.props.language);
    }

    changeLanguageButton(e) {
        let value = e.target.textContent.toLowerCase();
        this.props.changeLanguage(value);
    }

    render() {
        const { pokemonsDetail, errorFetch, isLoading, language, abilities, enSpeciesText, esSpeciesText, types } = this.props;
        
        if (isLoading) {
            return(
                <Loader />
            );
        }
        return(
            pokemonsDetail &&
                <section className="section-details">
                    <div className="language-container">
                        <div>
                            <img src={languageIcon} alt="language"/>
                            {
                                language === 'en' 
                                ? <div className="language-button" onClick={this.changeLanguageButton}>ES</div> 
                                : <div className="language-button" onClick={this.changeLanguageButton}>EN</div>
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
                                            { language === 'en' ? enSpeciesText : esSpeciesText }
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
                                                            types.map(type => (
                                                                <Tag
                                                                    key={type.name[language]}
                                                                    tagText={type.name[language]}
                                                                />
                                                            ))
                                                        }
                                                    </div>
                                                    <h3>{language === 'en' ? 'Abilities' : 'Habilidades'}</h3>
                                                    <div className="type">
                                                        {
                                                            abilities && abilities.map((ability, i) => (
                                                                <Tag
                                                                    key={ability.name[language]}
                                                                    tagText={ability.name[language]}
                                                                    className="tag-ability tag" 
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
                                        key={ability.name[language]}
                                        abilityName={ability.name[language]} 
                                        abilityText={ability.description[language]}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>
        )
    };
};

export default PokemonDetails;