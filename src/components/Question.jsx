import React, { useState } from "react";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function Question({
  question,
  correct_answer,
  incorrect_answers,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const answers = [...incorrect_answers, correct_answer];

  React.useEffect(() => {
    shuffleArray(answers);
  }, []);

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
