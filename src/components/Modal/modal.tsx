import React from 'react';
import ModalOverlay from './modal-overlay';
import PropTypes from 'prop-types';
import Styles from "./modal.module.css";

const Modal = ({ show , hide, title, content, ...props }) =>
  show ? (
    <ModalOverlay>
        <div className={Styles.modal_overlay}>
      <div className={Styles.modal_wrapper}>
        <div className={Styles.modal_content}>
          <div className={Styles.modal_header}>
            <h4> {title} </h4>
            <p> {content} </p>
            <button
              type="button"
              className={Styles.modal_button_close}
              onClick={hide}
            >
                <button>TRY AGAIN</button>
            </button>
          </div>
          <div className={Styles.modal_body}>{props.children}</div>
        </div>
      </div>
      </div>
    </ModalOverlay>
  ) : null;

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Modal;
