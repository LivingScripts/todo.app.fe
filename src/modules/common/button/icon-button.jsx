import React from 'react';
import './button.styles.scss';
import { addClasses } from '../../../utils';

const buttonType = (props) => {
    let variant = '', color = '', size = 'btn-fab';
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

    if(props.size === "small") {
        size = "btn-fab-sm";
    }

    return addClasses(variant, color, size);
};

export default function IconButton(props) {
    let classes = buttonType(props);
    return (
        <button className={addClasses(classes, 'btn')}>
            {props.icon}
        </button>
    );
}