import React from 'react';
import './button.styles.scss';
import PropType from 'prop-types';
import { addClasses } from '../../../utils';

const buttonType = (props) => {
    let variant = '';
    let color = '';
    let size = 'btn-fab';

    if (props.variant === 'icon-only') {
        variant = 'text';
    } else {
        variant = 'contained';
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

    if (props.size === 'small') {
        size = 'btn-fab-sm';
    }

    return addClasses(variant, color, size);
};

export const IconButton = (props) => {
    const classes = buttonType(props);
    return (
        <button className={addClasses(classes, 'btn', props.classes)}>
            {props.icon}
        </button>
    );
};

IconButton.propTypes = {
    icon: PropType.elementType.isRequired,
    classes: PropType.string
};

IconButton.defaultProps = {
    classes: ''
};
