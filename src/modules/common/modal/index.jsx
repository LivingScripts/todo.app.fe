import React from 'react';
import './modal.styles.scss';
import PropTypes from 'prop-types';
import { ngIf } from '../../../utils';
import { useClickAway } from '../hooks';
import { usePopper } from 'react-popper';

export const Modal = (props) => {
  const [isOpen, setIsOpen] = React.useState(props.isOpen);
  const modalRef = React.useRef(null);
  const modalContainerRef = React.useRef(null);

  useClickAway(modalRef, () => setIsOpen(false));

  const { styles, attributes } = usePopper(modalContainerRef.current, modalRef.current);

  return ngIf(
      isOpen,
      <div className="modal-overlay" ref={modalContainerRef}>
        <div className="modal" ref={modalRef} styles={styles} {...attributes}>
          {props.children}
        </div>
      </div>
    );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired
};
