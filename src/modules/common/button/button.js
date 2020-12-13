import React from 'react';
import './button.styles.scss';
import { addClasses } from '../../../utils';

const buttonType = (props) => {
    let variant = '', color = '';
    switch(props.variant) {
        case 'contained':
            break;
        case 'outlined':
            variant = 'outlined';
            break;
        default:
            variant = 'text';
            break;
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

export default function Button(props) {
    let classes = buttonType(props);
    return (
        <button className={addClasses(classes, 'btn')}>
            { props.startIcon && <span>{props.startIcon}</span> }
            { props.children }
            { props.endIcon && <span>{props.endIcon}</span> }
        </button>
    );
}