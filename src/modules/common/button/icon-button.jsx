import React from 'react';
import './button.styles.scss';
import { addClasses } from '../../../utils';

const buttonType = (props) => {
    let variant = '', color = '';
    if(props.variant === 'icon-only') {
        variant = 'text';
    } else {
        variant = 'contained';
    }

    switch(props.color) {
        case 'primary':
            color = 'primary';
            break;
        case 'secondary':
            color = 'secondary';
            break;
        default:
            color = 'default';
            break;
    }

    return addClasses(variant, color);
};

export default function IconButton(props) {
    let classes = buttonType(props);
    return (
        <button className={addClasses(classes, 'btn btn-fab')}>
            {props.icon}
        </button>
    );
}