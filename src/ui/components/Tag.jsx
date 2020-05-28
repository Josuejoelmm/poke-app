import React from 'react';
import './styles/Tag.scss';

export default function Tag(props) {
    return (
        <div className={props.className ? props.className : "tag tag-type" }>
            {props.tagText}
        </div>
    );
};