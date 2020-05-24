import React from 'react';
import { withRouter } from 'react-router-dom';
import './styles/PokeCard.scss';

const PokeCard = ({ data, history }) => {
    const styles = {cursor: 'pointer'}
    const goToCharacterDetailsPage = () => {
        history.push(`pokemon/${data.url.substr(-2,1)}`)
    }
    console.log(data);
    
    
    return(
        <div style={styles} onClick={goToCharacterDetailsPage} className="card-container">
            <div className="card-inner">
                <div className="character-name">
                    <h6>{data.name}</h6>
                </div>
            </div>
        </div>
    );
}
export default withRouter(PokeCard);