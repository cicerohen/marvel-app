import React from "react";
import ReactModal from "react-modal";
import Title from "../Title";
import Button from "../Button";

const style = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "800px",
    maxWidth: "60%"
  }
};

const Modal = ({ title, isOpen, onClose, children, className }) => {
  return (
    <ReactModal isOpen={isOpen} style={style}>
      <div className={`modal ${className}`}>
        <header className="modal__header">
          <Title title={title} level="4" tag="h4" />
          <Button onClick={onClose}>Close</Button>
        </header>
        <main>{children}</main>
      </div>
    </ReactModal>
  );
};

export default Modal;
