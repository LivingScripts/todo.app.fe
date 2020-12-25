import React, { useState } from 'react';
import './menu.styles.scss';
import PropTypes from 'prop-types';
import { ngIf } from '../../../utils';
import { useClickAway } from '../hooks/';

export const Menu = (props) => {
    // state
    const [isOpen, setIsOpen] = useState(false);
    const node = useClickAway(() => { setIsOpen(false) });

    const menuItemClick = (value) => {
        props.selectionChanged(value);
    };

    const createMenuItem = ({ label, value }, key) => {
        return <li key={key} className="item p-3" onClick={() => menuItemClick(value)}>
            { label }
        </li>;
    };

    const createMenuList = (items, maxHeight) => {
        const menuList = items.map((item, key) => createMenuItem(item, key));
        const styles = {
            maxHeight: maxHeight ? (maxHeight + 'px') : 'none',
            overflowY: 'auto'
        };
        return <ul style={styles} className="menu-list pt-2 pb-2">{ menuList }</ul>;
    };

    return (
        <div ref={node} className="menu-container">
            <span onClick={() => setIsOpen(!isOpen)}>
                { React.Children.only(props.children) }
            </span>
            { ngIf(isOpen, createMenuList(props.menuItems, props.maxHeight)) }
        </div>
    );
};

Menu.propTypes = {
    menuItems: PropTypes.array.isRequired,
    selectionChanged: PropTypes.func,
    children: PropTypes.node.isRequired,
    maxHeight: PropTypes.number
};

Menu.defaultProps = {
    selectionChanged: () => null,
    maxHeight: ''
};
