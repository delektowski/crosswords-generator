import "./App.css";
import Board from "./components/Board/Board";
import HeaderBar from "./components/Board/HeaderBar/HeaderBar";
import React from "react";

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Board />
    </div>
  );
}

export default App;
