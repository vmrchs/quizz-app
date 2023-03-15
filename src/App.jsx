import React from "react";
import Quiz from "./components/Quiz";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [startGame, setStartGame] = React.useState(false);

  return (
    <main className="App">
      {startGame ? "" : <Modal handleClick={() => setStartGame(true)} />}
      <Quiz />
    </main>
  );
}

export default App;
