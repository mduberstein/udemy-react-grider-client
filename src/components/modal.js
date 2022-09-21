import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    // JSX for the modal itself
    <div
      onClick={props.onDismiss}
      className="ui dimmer modals visible active"
    >
      <div
        // prevents the click just outside the buttons
        // from bubbling up to parent  and closing the Modal
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    // JSX for the parent
    document.querySelector("#modal")
  );
};

export default Modal;
