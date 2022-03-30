import React from 'react';
import PropTypes from 'prop-types';

const Dialog = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="dialog">
      <div className="dialog__heading">
        <h4 className="dialog__title">{title}</h4>
        <button className="dialog__close-btn" onClick={onClose}>
          +
        </button>
      </div>
      <div className="dialog__content">{children}</div>
    </div>
  );
};

Dialog.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

Dialog.defaultProps = {
  title: '',
  isOpen: false,
};

export default Dialog;
