import React from 'react';
import './navbar.styles.scss';
import { IconButton } from '../common/button/';

export const Navbar = (props) => {
	return (
		<nav className="mt-4 mb-4 mr-4">
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
		</nav>
	);
};
