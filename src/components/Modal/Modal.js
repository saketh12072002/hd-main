import React, { useState } from 'react';
import './styles.scss';
import ClearIcon from '@material-ui/icons/Clear';

const Modal = ({ hideModal, toggleModal, children }) => {
  if (hideModal) return null;

  return [
    <div className="modalOverlay" onClick={() => toggleModal()} />,
    <div className="modalWrap">
      <div className="modal">
        <ClearIcon onClick={() => toggleModal()}/>
        {children}
      </div>
    </div>
  ];
}

export default Modal;