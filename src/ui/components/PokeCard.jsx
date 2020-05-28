import React from 'react';
import { withRouter } from 'react-router-dom';
import './styles/PokeCard.scss';
import pokeball from '../../images/icon-pokeball-white.png';

const PokeCard = ({ data, index, history }) => {
    const styles = {cursor: 'pointer'};
    const myReg = /\/\d{1,5}/g;
    let extractNumber = data.url.match(myReg).join().replace('/','');
    
    const goToCharacterDetailsPage = () => {
        history.push(`pokemon/${extractNumber}`)
    }
    
    return(
        <div style={styles} onClick={goToCharacterDetailsPage} className="card-container">
            <div className="card-inner">
                <div className="pokeball-icon">
                    <img src={pokeball} alt="pokeball"/>
                </div>
                <div className="character-name">
                    <h6>{data.name.toUpperCase()}</h6>
                </div>
                <div className="pokemon-number">
                    {
                        extractNumber <= 9 
                        ? `0${extractNumber}` 
                        : extractNumber
                    }
                </div>
            </div>
        </div>
    );
}

export default withRouter(PokeCard);