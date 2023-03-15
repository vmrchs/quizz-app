import React from "react";

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
  const answers = [...incorrect_answers, correct_answer];

  shuffleArray(answers);

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
            className="question--answer"
            dangerouslySetInnerHTML={{ __html: item }}
            onClick={() => isSelected(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
