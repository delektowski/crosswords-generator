import "./App.css";
import Board from "./components/Board/Board";
import HeaderBar from "./components/Board/HeaderBar/HeaderBar";
import React, { useState } from "react";

export const CurrentSquareIdContext = React.createContext({});

function App() {
  const [squareId, setSquareId] = useState(null);
  const [isVertical, setIsVertical] = useState(true);
  const [isClearSq, setIsClearSq] = useState(false);
  const [isClearLtr, setIsClearLtr] = useState(false);
  const [scale, setScale] = useState(1);

  return (
    <CurrentSquareIdContext.Provider
      value={{
        squareId,
        setSquareId,
        isVertical,
        setIsVertical,
        isClearSq,
        setIsClearSq,
        isClearLtr,
        setIsClearLtr,
        setScale,
        scale,
      }}
    >
      <div className="App">
        <HeaderBar />
        <Board />
      </div>
    </CurrentSquareIdContext.Provider>
  );
}

export default App;
