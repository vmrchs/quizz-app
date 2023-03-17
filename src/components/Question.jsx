import React, { useState, useEffect } from "react";

// TO DO:
// - Check if selected answer is the same as correct_answer (When pressing the button on Quiz component)
// - Change selected answer and correct_answer background to green or red
// - Return the number of correct answers to be displayed at Quiz component

export default function Question({
  question,
  onSelectAnswer,
  questionIdx,
  correct_answer,
  incorrect_answers,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const answers = [...incorrect_answers, correct_answer];

  useEffect(() => {
    shuffleArray(answers);
  }, [correct_answer]);

  function shuffleArray(array) {
    if (!selectedAnswer) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      setShuffledAnswers(array);
    }
  }
  // Maybe put this one on Quiz and pass it as prop
  const handleAnswerClick = (answer) => {
    onSelectAnswer(answer, questionIdx)
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
        {shuffledAnswers.map((item, index) => (
          <button
            key={index}
            className={`question--answer ${
              selectedAnswer === item ? "selected" : ""
              // Here I'll need to check if the selection is correct or not and change its bg to green or red
            }`}
            dangerouslySetInnerHTML={{ __html: item }}
            onClick={() => handleAnswerClick(item)}
            // results={() => checkAnswers(selectedAnswer)}
          ></button>
        ))}
      </div>
    </div>
  );
}
