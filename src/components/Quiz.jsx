import React from "react";
import Question from "./Question";

// TO DO:
// - Create a function to check correct answers when pressing the button, and pass it down to Question Component
// - After checking the answers, change the text and function of the button to fetch new questions and restart the game

export default function Quiz() {
  const [quiz, setQuiz] = React.useState(undefined);
  const [gameOver, setGameOver] = React.useState(false);
  const [selectedAnswers, setSelectedAnswers] = React.useState([])
  const [score, setScore] = React.useState(0);

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
  }, [gameOver]);

  function onSelectAnswer(answer, questionIdx) {
    console.log({answer, questionIdx})

    setSelectedAnswers(state => {
      state[questionIdx] = answer

      return state
    })

  }

  function checkAnswers(answer) {
    let score = 0
    const correctAnswers = []

    quiz.map((question, index) => {
      if (selectedAnswers[index] === question.correct_answer) {
        correctAnswers.push(index)
        score++
      }
      setGameOver(true);
    });

    window.alert("SEU SCORE É "+ score)
    window.alert("VOCÊ ACERTOU AS PERGUNTAS " + correctAnswers.map(idx => idx + 1).join(', '))
  }

  function restartGame() {
    setGameOver(false);
    fetchQuiz();
    // Fetch and setup
  }

  return (
    quiz && (
      <div className="quiz">
        {quiz.map((props, index) => (
          <div key={index}>
            <Question {...props} onSelectAnswer={onSelectAnswer} questionIdx={index} />
            <hr />
          </div>
        ))}
        <button
          className="check-answers"
          onClick={gameOver ? restartGame : checkAnswers}
        >
          {gameOver ? "Restart" : "Check Answers"}
        </button>
      </div>
    )
  );
}
