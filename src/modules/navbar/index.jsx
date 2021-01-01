import React from 'react';
import './navbar.styles.scss';
import { IconButton } from '../common/button/';

export const Navbar = (props) => {
	return (
		<nav className="pt-4 pb-4 mr-4">
            <div className="nav-items">
                <div className="logo">
                    <i className="fad fa-check"></i>
                </div>
                <div className="nav-icons">
                    <IconButton tooltip="Manage Labels">
                        <i className="fal fa-bookmark"></i>
                    </IconButton>
                </div>
                <div className="bottom">
                    <IconButton tooltip="Logout" tooltipPlacement="right">
                        <i className="fal fa-sign-out fa-flip-horizontal"></i>
                    </IconButton>
                </div>
            </div>
		</nav>
	);
};
