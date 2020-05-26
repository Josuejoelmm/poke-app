import React, { Component } from 'react';
import './styles/PokemonDetails.scss';
import tabCard from '../../images/container-logo.png';
import Loader from './Loader';
import Tag from './Tag';

class PokemonDetails extends Component {
    componentDidMount() {
        const urlToGetDetails = `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.Id}`;
        this.props.getPokemonDetails(urlToGetDetails);
        console.log(this.props.language);
        
        this.props.getPokemonSpecies(this.props.match.params.Id, 'en');
    }
    render() {
        const { pokemonsDetail, errorFetch, isLoading, speciesText, language } = this.props;
        
        if(isLoading) {
            return(
                <Loader />
            );
        }
        return(
            Object.keys(pokemonsDetail).length &&
                <section className="section-details">
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
                                        <div className="more-images">
                                            <div className="back-default">
                                                <img src="" alt=""/>
                                            </div>
                                            <div className="front-female">
                                                <img src="" alt=""/>
                                            </div>
                                            <div className="back-female">
                                                <img src="" alt=""/>
                                            </div>
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
                                                        <h3>Height:</h3>
                                                        <span>{(pokemonsDetail.height * 0.1).toFixed(1)}</span>
                                                        <h3>Weight:</h3>
                                                        <span>{(pokemonsDetail.weight * 0.1).toFixed(1)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col col-2">
                                                <div>
                                                    <h3>Type</h3>
                                                    <div className="type">
                                                        {
                                                            pokemonsDetail.types.map(obj => (
                                                                <Tag
                                                                    key={obj.slot}
                                                                    bgColor={'#BF2F50'} 
                                                                    tagText={obj.type.name} 
                                                                />
                                                            ))
                                                        }
                                                    </div>
                                                    <h3>abilities</h3>
                                                    <div className="type">
                                                        {
                                                            pokemonsDetail.abilities.map(obj => (
                                                                <Tag
                                                                    key={obj.slot}
                                                                    bgColor={'#336699'} 
                                                                    tagText={obj.ability.name} 
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
                        </div>
                    </div>
                </section>
        );
    };
};

export default PokemonDetails;