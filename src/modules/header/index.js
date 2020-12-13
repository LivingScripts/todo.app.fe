import React from 'react';
import './header.styles.scss';
import Avatar from '../common/avatar';
import Button from '../common/button/button';

function Header() {
    return (
        <div className="header light p-1">
            <Avatar>N</Avatar>
            <Button color="secondary">Click Me</Button>
        </div>
    );
}

export default Header;