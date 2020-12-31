import React from 'react';
import './progressbar.styles.scss';
import PropTypes from 'prop-types';
import { Tooltip } from '../tooltip';
import { addClasses } from '../../../utils';

export const LinearProgressbar = (props) => {
    return (
        <Tooltip render={`${props.progress}%`} placement='top-start'>
            <div className={addClasses(props.classes, 'progress-bar-container')}>
                <div style={{ width: `${props.progress}%` }}></div>
            </div>
        </Tooltip>
    );
};

LinearProgressbar.propTypes = {
    progress: PropTypes.number.isRequired,
    classes: PropTypes.string
};

LinearProgressbar.defaultProps = {
    classes: ''
};
