import React from 'react';
import ReactDOM from 'react-dom';
import './menu.styles.scss';
import PropTypes from 'prop-types';
import { ngIf, addClasses } from '../../../utils';
import { useClickAway } from '../hooks/';
import { DOM_PORTAL_CONTAINER } from '../../../constants';
import { usePopper } from 'react-popper';

export const Menu = (props) => {
    // state
    const [isOpen, setIsOpen] = React.useState(false);
    const menuContainerRef = React.useRef(null);
    const menuListRef = React.useRef(null);

    useClickAway(menuContainerRef, () => { setIsOpen(false) });

    const menuItemClick = (value) => {
        props.selectionChanged(value);
    };

    const { styles, attributes } = usePopper(
        menuContainerRef.current,
        menuListRef.current,
        { placement: 'bottom-start' }
    );

    const createMenuItem = (item, key) => {
        return (
            <li
                key={key}
                className={addClasses('item p-3', item.classes)}
                onClick={() => menuItemClick(item.value)}
            >
                {ngIf(item.start, <span className="mr-3 font-lg-size">{item.start}</span>)}
                {item.label}
            </li>
        );
    };

    const createMenuList = (items, maxHeight) => {
        const menuList = items.map((item, key) => createMenuItem(item, key));
        const scrollingListStyles = {
            maxHeight: maxHeight ? (maxHeight + 'px') : 'none',
            overflowY: 'auto',
            ...styles.popper
        };
        return (
            <ul ref={menuListRef}
                style={scrollingListStyles}
                {...attributes.popper}
                className="menu-list pt-2 pb-2"
            >
                {menuList}
            </ul>
        );
    };

    const menuListPortal =
        ReactDOM.createPortal(
            createMenuList(props.menuItems, props.maxHeight),
            DOM_PORTAL_CONTAINER
        );

    return (
        <div ref={menuContainerRef} className={addClasses(props.classes, 'menu-container')}>
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
