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

  React.useEffect(() => {
    const abortController = new AbortController();
    fetch("https://opentdb.com/api.php?amount=5&type=multiple", {
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then(({ results }) => {
        setQuiz(results);
      });
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    quiz && (
      <div className="quiz">
        {quiz.map((prop, index) => (
          <div key={index}>
            <Question {...prop} />
            <hr />
          </div>
        ))}
        <button className="check-answers">Check answers</button>
      </div>
    )
  );
}
