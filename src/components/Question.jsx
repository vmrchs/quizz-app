import React from "react";

export default function Question() {
  return (
    <div className="question">
      <p className="question--text">Test question</p>
      <div className="question--choices">
        <button className="question--answer right-answer">Test answer</button>
        <button className="question--answer wrong-answer">Test answer</button>
        <button className="question--answer ">Test answer</button>
        <button className="question--answer selected">Test answer</button>
        <button className="question--answer ">Test answer</button>
      </div>
    </div>
  );
}
