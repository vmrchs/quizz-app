import React, { useState } from "react";

// TO DO:
// - Shuffle answers array after they are fetch
// - Check if selected answer is the same as correct_answer (When pressing the button on Quiz component)
// - Change selected answer and correct_answer background to green or red
// - Return the number of correct answers to be displayed at Quiz component

export default function Question({
  question,
  correct_answer,
  incorrect_answers,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const answers = [...incorrect_answers, correct_answer];

  // Maybe put this one on Quiz and pass it as prop
  const handleAnswerClick = (answer) => {
    if (selectedAnswer === answer) {
      setSelectedAnswer(null);
    } else {
      setSelectedAnswer(answer);
    }
  };

  return (
    <div className="question">
      <p
        className="question--text"
        dangerouslySetInnerHTML={{ __html: question }}
      ></p>
      <div className="question--choices">
        {answers.map((item, index) => (
          <button
            key={index}
            className={`question--answer ${
              selectedAnswer === item ? "selected" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: item }}
            onClick={() => handleAnswerClick(item)}
          ></button>
        ))}
      </div>
    </div>
  );
}
