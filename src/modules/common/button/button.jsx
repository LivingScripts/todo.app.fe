import React from 'react';
import './button.styles.scss';
import PropType from 'prop-types';
import { addClasses } from '../../../utils';

const buttonType = (props) => {
    let variant = '';
    let color = '';
    switch (props.variant) {
        case 'contained':
            break;
        case 'outlined':
            variant = 'outlined';
            break;
        default:
            variant = 'text';
            break;
    }

    switch (props.color) {
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

export const Button = (props) => {
    const classes = buttonType(props);
    return (
        <button className={addClasses(classes, 'btn btn-full', props.classes)}>
            { <span>{props.startIcon}</span> }
            { props.children }
            { <span>{props.endIcon}</span> }
        </button>
    );
};

Button.propTypes = {
    startIcon: PropType.elementType,
    endIcon: PropType.elementType,
    children: PropType.node.isRequired,
    classes: PropType.string
};

Button.defaultProps = {
    startIcon: <></>,
    endIcon: <></>,
    classes: ''
};
