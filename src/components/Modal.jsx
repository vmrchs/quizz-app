import React from "react";

//onclick property to conditional render the modal

export default function Modal(props) {
  return (
    <div className="modal">
      <h1>Quizzical</h1>
      <h3>Test you knowledge in this interactive web app made with React.</h3>
      <button className="start-btn" onClick={props.handleClick}>
        Start quiz!
      </button>
    </div>
  );
}
