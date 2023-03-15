import React from "react";
import Question from "./Question";

//Create a function to select an answer
// Create another function to check correct answers

export default function Quiz() {
  const [quiz, setQuiz] = React.useState(undefined);
  const [isSelected, setIsSelected] = React.useState(false);

  function select(index) {
    setIsSelected((prevState) => {
      return prevState.map((answer) => {
        return answer.index === index
          ? { ...answer, selected: !answer.isSelected }
          : { ...answer };
      });
    });
  }

  function isRight() {}

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then(({ results }) => {
        setQuiz(results);
      });
  }, []);

  return (
    quiz && (
      <div className="quiz">
        {quiz.map((props, index) => (
          <div key={index}>
            <Question {...props} selected={isSelected} />
            <hr />
          </div>
        ))}
        <button className="check-answers">Check answers</button>
      </div>
    )
  );
}
