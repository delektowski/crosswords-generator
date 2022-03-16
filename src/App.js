import "./App.css";
import Board from "./components/Board/Board";
import HeaderBar from "./components/Board/HeaderBar/HeaderBar";
import React, { useEffect, useState } from "react";

export const CurrentSquareIdContext = React.createContext({});

function App() {
  const [data, setData] = useState([]);
  const [squareId, setSquareId] = useState(null);
  const [isVertical, setIsVertical] = useState(true);
  const [isClearSq, setIsClearSq] = useState(false);
  const [isClearLtr, setIsClearLtr] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const crossWordData = JSON.parse(localStorage.getItem("crossWordData"));
    if (crossWordData && crossWordData.length === 700) {
      setData(crossWordData);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("crossWordData", JSON.stringify(data));
  }, [data]);

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
        setData,
      }}
    >
      <div className="App">
        <HeaderBar />
        <Board crossWordData={data} />
      </div>
    </CurrentSquareIdContext.Provider>
  );
}

export default App;
