import React from "react";
import Question from "./Question";

// TO DO:
// - Create a function to check correct answers when pressing the button, and pass it down to Question Component
// - After checking the answers, change the text and function of the button to fetch new questions and restart the game

export default function Quiz() {
  const [quiz, setQuiz] = React.useState(undefined);
  const [gameOver, setGameOver] = React.useState(false);

  React.useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=5&type=multiple"
        );
        const { results } = await response.json();
        setQuiz(results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuiz();
  }, []);

  function checkAnswers() {
    quiz.map((question, index) => {
      console.log(`Question ${index + 1}: ${question.question}`);
      console.log(`Correct answer: ${question.correct_answer}`);
      console.log(
        `Incorrect answers: ${question.incorrect_answers.join(", ")}`
      );
      if (question.selected === question.correct_answer) {
        // Change selected answer background to green and add 1 to score
      } else {
        // Change selected answer to red and correct answer to green
      }
      setGameOver(true);
    });
  }

  function restartGame() {
    // Fetch and setup
  }

  return (
    quiz && (
      <div className="quiz">
        {quiz.map((props, index) => (
          <div key={index}>
            <Question {...props} />
            <hr />
          </div>
        ))}
        <button
          className="check-answers"
          onClick={gameOver ? restartGame : checkAnswers}
        >
          Check answers
        </button>
      </div>
    )
  );
}
