import React from 'react';
import './header.styles.scss';
import Avatar from '../common/avatar';
import { Button, IconButton } from '../common/button/';

function Header() {
    return (
        <div className="header light p-1">
            <Avatar>N</Avatar>
            <Button variant="contained">Click Me</Button>
            <IconButton icon="+"/>
        </div>
    );
}

export default Header;