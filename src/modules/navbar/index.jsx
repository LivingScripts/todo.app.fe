import React from 'react';
import './navbar.styles.scss';
import { IconButton } from '../common/button/';
import { Modal } from '../common/modal/';
import { LabelPopup } from './label-popup/';

export const Navbar = (props) => {
  const [lablesOpen, setLabelsOpen] = React.useState(false);

  return (
    <nav className="pt-4 pb-4 mr-4">
      <div className="nav-items">
        <div className="logo">
          <i className="fad fa-check"></i>
        </div>
        <div className="nav-icons">
          <IconButton
            tooltip="Manage Labels"
            classes="font-xl-size"
            onClick={() => setLabelsOpen(true)}
          >
            <i className="fal fa-bookmark"></i>
          </IconButton>
        </div>
        <div className="bottom">
          <IconButton tooltip="Logout" tooltipPlacement="right" classes="font-xl-size">
            <i className="fal fa-arrow-left"></i>
          </IconButton>
        </div>
      </div>
      <Modal isOpen={lablesOpen} modalCloseCallback={() => setLabelsOpen(false)}>
        <LabelPopup />
      </Modal>
    </nav>
  );
};
