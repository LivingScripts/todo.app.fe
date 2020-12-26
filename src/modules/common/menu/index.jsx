import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './menu.styles.scss';
import PropTypes from 'prop-types';
import { ngIf, addClasses } from '../../../utils';
import { useClickAway } from '../hooks/';
import { DOM_PORTAL_CONTAINER } from '../../../constants';
import { usePopper } from 'react-popper';

export const Menu = (props) => {
    // state
    const [isOpen, setIsOpen] = useState(false);
    const [menuContainerRef, setMenuContainerRef] = useState(null);
    const [menuListRef, setMenuListRef] = useState(null);
    useClickAway(menuContainerRef, () => { setIsOpen(false) });

    const menuItemClick = (value) => {
        props.selectionChanged(value);
    };

    const { styles, attributes } = usePopper(
        menuContainerRef,
        menuListRef,
        { placement: 'bottom-start' }
    );

    const createMenuItem = ({ label, value }, key) => {
        return <li key={key} className="item p-3" onClick={() => menuItemClick(value)}>
            { label }
        </li>;
    };

    const createMenuList = (items, maxHeight) => {
        const menuList = items.map((item, key) => createMenuItem(item, key));
        const scrollingListStyles = {
            maxHeight: maxHeight ? (maxHeight + 'px') : 'none',
            overflowY: 'auto',
            ...styles.popper
        };
        return (
            <ul ref={setMenuListRef}
                style={scrollingListStyles}
                {...attributes.popper}
                className="menu-list pt-2 pb-2"
            >
                { menuList }
            </ul>
        );
    };

    const menuListPortal =
        ReactDOM.createPortal(
            createMenuList(props.menuItems, props.maxHeight),
            DOM_PORTAL_CONTAINER
        );

    return (
        <div ref={setMenuContainerRef} className={addClasses(props.classes, 'menu-container')}>
            <span onClick={() => setIsOpen(!isOpen)}>
                {React.Children.only(props.children)}
            </span>
            {ngIf(isOpen, menuListPortal)}
        </div>
    );
};

Menu.propTypes = {
    menuItems: PropTypes.array.isRequired,
    selectionChanged: PropTypes.func,
    children: PropTypes.node.isRequired,
    maxHeight: PropTypes.number,
    classes: PropTypes.string
};

Menu.defaultProps = {
    selectionChanged: () => null,
    maxHeight: '',
    classes: ''
};
