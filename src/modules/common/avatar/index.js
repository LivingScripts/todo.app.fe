import React from 'react';
import './avatar.styles.scss';
import { addClasses } from '../../../utils';


const avatarType = (props) => {
    let variant = '', size = '';
    switch(props.variant) {
        case 'rounded':
            variant = 'rounded';
            break;
        case 'square':
            break;
        default:
            variant = 'circle';
    }

    switch(props.size) {
        case 'small':
            size = 'avatar-sm';
            break;
        case 'large':
            size = 'avatar-lg'
            break;
        default:
            size = 'avatar-lg'
    }

    return variant + ' ' + size;
}

export default function Avatar(props) {
    let classes = avatarType(props);
    return (
        <div className={addClasses(classes, 'avatar', props.classes) }>
            { props.children }
        </div>
    );
}