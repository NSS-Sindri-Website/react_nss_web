import React from "react";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlayModal">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer1"
      >
        <img className="modalImg" src="images/wel3.png" alt="/" />
        <div className="modalRight1">
          <p className="closeBtn1" onClick={onClose}>
            X
          </p>
          <div className="content1">
            <h1>NSS BIT SINDRI </h1>
            <p>Welcomes the Batch of 2k24</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
