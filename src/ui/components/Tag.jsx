import React from 'react'

export default function Tag(props) {
    const styles = {
        backgroundColor: props.bgColor
    }
    return (
        <div className="tag-text" style={styles}>
            {props.tagText}
        </div>
    );
};