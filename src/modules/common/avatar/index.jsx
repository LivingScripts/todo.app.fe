import React from 'react';
import './avatar.styles.scss';
import PropTypes from 'prop-types';
import { addClasses } from '../../../utils';

const avatarType = (props) => {
    let variant = '';
    let size = '';
    switch (props.variant) {
    case 'rounded':
            variant = 'rounded';
            break;
        case 'square':
            break;
        default:
            variant = 'circle';
    }

    switch (props.size) {
        case 'small':
            size = 'avatar-sm';
            break;
        case 'large':
            size = 'avatar-lg'
            break;
        default:
            size = 'avatar-lg'
    }

    return addClasses(variant, size);
}

export const Avatar = (props) => {
    const classes = avatarType(props);
    return (
        <div className={addClasses(classes, 'avatar', props.classes) }>
            { React.Children.toArray(props.children)[0] }
        </div>
    );
};

Avatar.propTypes = {
	classes: PropTypes.string,
	children: PropTypes.node.isRequired
};

Avatar.defaultProps = {
    classes: ''
};
