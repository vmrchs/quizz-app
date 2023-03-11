import React from "react";
import Quiz from "./components/Quiz";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  return (
    <main className="App">
      {/* {startGame ? "" : <Modal />} */}
      <Modal />
      <Quiz />
    </main>
  );
}

export default App;
