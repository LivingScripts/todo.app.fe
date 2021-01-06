import React from 'react';
import './modal.styles.scss';
import PropTypes from 'prop-types';
import { ngIf } from '../../../utils';
import { useClickAway } from '../hooks';
import { usePopper } from 'react-popper';
import { IconButton } from '../../common/button/';

export const Modal = (props) => {
  const [isOpen, setIsOpen] = React.useState(props.isOpen);
  const modalRef = React.useRef(null);
  const modalContainerRef = React.useRef(null);
  const closeModal = () => {
    setIsOpen(false);
    props.modalCloseCallback(false);
  };

  useClickAway(modalRef, closeModal);

  const { styles, attributes } = usePopper(modalContainerRef.current, modalRef.current);

  React.useEffect(() => {
    setIsOpen(props.isOpen)
  }, [props.isOpen]);

  return ngIf(
      isOpen,
      <div className="modal-overlay" ref={modalContainerRef}>
        <div className="modal" ref={modalRef} styles={styles} {...attributes}>
            {props.children}
            <IconButton
              classes="close-btn"
              variant="icon-only"
              size="small"
              onClick={closeModal}
            >
              <i className="fal fa-times"></i>
            </IconButton>
        </div>
      </div>
    );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  modalCloseCallback: PropTypes.func
};

Modal.defaultProps = {
  modalCloseCallback: () => {}
};
