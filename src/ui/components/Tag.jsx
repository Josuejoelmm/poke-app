import React, { useEffect } from 'react';
import axios from 'axios';

export default function Tag(props) {
    // console.log(props);
    // useEffect(() => {
    //     axios.get(props.url)
    //         .then(response => {
    //             console.log(response.names);
    //         })
    // }, [])
    const styles = {
        backgroundColor: props.bgColor,
        color: '#ffffff'
    }
    return (
        <div className="tag-text" style={styles}>
            {props.tagText}
        </div>
    );
};