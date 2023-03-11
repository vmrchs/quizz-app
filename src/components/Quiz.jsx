import React from "react";
import Question from "./Question";

//Fetch questions from the api
// Insert them into a component
//Create a function to select an answer
// Create another function to check correct answers

export default function Quiz() {
  const [question, setQuestion] = React.useState({
    question: "",
    correct_answer: "",
    incorrect_answers: "",
  });
  const [quiz, setQuiz] = React.useState([]);

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => console.log(JSON.stringify(data)));
  }, []);

  return (
    <div className="quiz">
      <Question />
      <hr />
      <Question />
      <hr />
      <Question />
      <hr />
      <Question />
      <hr />
      <Question />
      <hr />
      <button className="check-answers">Check answers</button>
    </div>
  );
}
