import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

const Modal = (props) => {
  return ReactDOM.createPortal(
    // JSX for the modal itself
    <div
      onClick={() => history.push("/")}
      className="ui dimmer modals visible active"
    >
      <div
      // prevents the click just outside the buttons 
      // from bubbling up to parent  and closing the Modal
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">Delete Stream</div>
        <div className="content">
          Are you sure you want to delete this stream?
        </div>
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
