import React, { useState, useEffect } from "react";

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
    setSelectedAnswer(null);
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

  const handleAnswerClick = (answer) => {
    onSelectAnswer(answer, questionIdx);
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
              // Here I'll need to check if the selection is correct or not and change its bg to green or red
              selectedAnswer === item ? "selected" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: item }}
            onClick={() => handleAnswerClick(item)}
            // results={() => checkAnswers(selectedAnswer, question)}
          ></button>
        ))}
      </div>
    </div>
  );
}
