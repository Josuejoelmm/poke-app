import React from 'react';
import './styles/AbilityText.scss';

export default function AbilityText({ abilityName, abilityText }) {
    return (
        <div>
            <h2 className="headline-ability">{abilityName}:</h2>
            <p className="paragraph-ability">{abilityText}</p>
        </div>
    )
}