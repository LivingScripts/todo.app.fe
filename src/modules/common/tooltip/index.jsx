import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
import PropTypes from 'prop-types';
import './tooltip.styles.scss';
import { addClasses, ngIf } from '../../../utils';
import { DOM_PORTAL_CONTAINER } from '../../../constants';

export const Tooltip = (props) => {
    // state
    const [active, setActive] = useState(false);
    const [tooltipContainerRef, setTooltipContainerRef] = useState(null);
    const [tooltipRef, setTooltipRef] = useState(null);

    const hide = () => setActive(false);
    const show = () => setActive(true);

    const { styles, attributes } = usePopper(
            tooltipContainerRef,
            tooltipRef,
            {
                placement: props.placement,
                modifiers: [{ name: 'offset', options: { offset: [3, 3] } }]
            });

    const tooltipPortal =
        ReactDOM.createPortal(
            <span
                className={addClasses(props.classes, 'p-1 tooltip-box')}
                ref={setTooltipRef}
                style={styles.popper}
                {...attributes.popper}
            >
                {props.render}
            </span>,
            DOM_PORTAL_CONTAINER
        );

    return (
        <>
            <span
                onFocus={show}
                onBlur={hide}
                onMouseEnter={show}
                onMouseLeave={hide}
                onClick={hide}
                ref={setTooltipContainerRef}
            >
                {props.children}
            </span>
            {ngIf(active, tooltipPortal)}
        </>);
};

Tooltip.propTypes = {
    children: PropTypes.node,
    render: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    placement: PropTypes.string.isRequired,
    classes: PropTypes.string
};

Tooltip.defaultTypes = {
    placement: 'auto',
    classes: ''
};
