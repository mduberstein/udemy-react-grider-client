import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    // JSX for the modal itself
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">Some Modal</div>
    </div>, 
    // JSX for the parent
    document.querySelector("#modal")
  );
};

export default Modal;
