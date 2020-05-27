import React from 'react';

export default function AbilityText({ abilityName, abilityText }) {
    const styles = {
        h2: {
            margin: '0px'
        },
        p: {
            margin: '0px 0px 8px 0px',
            fontSize: '18px'
        }
    }
    return (
        <div>
            <h2 style={styles.h2}>{abilityName}:</h2>
            <p style={styles.p}>{abilityText}</p>
        </div>
    )
}
