import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    // JSX for the modal itself
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        <div className="header">Delete Stream</div>
        <div className="content">Are you sure you want to delete this stream?</div>
        <div className="actions">
          <div className="ui primary button">Delete</div>
          <div className="ui button">Cancel</div>
        </div>
      </div>
    </div>, 
    // JSX for the parent
    document.querySelector("#modal")
  );
};

export default Modal;
