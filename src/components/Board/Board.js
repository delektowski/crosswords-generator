import React, { useState } from "react";
import styled from "styled-components";
import Square from "../Square/Squre";

const BoardElement = styled.div`
  margin-block-start: 4rem;
  block-size: 50rem;
  inline-size: 85.3rem;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 2px;
  transform: scale(${({ scale }) => scale});
  position: relative;
  @media print {
    transform: scale(1);
  }
`;

export const CurrentSquareIdContext = React.createContext({});

const Board = () => {
  const [squareId, setSquareId] = useState(null);
  const [isVertical, setIsVertical] = useState(true);
  const [isClearSq, setIsClearSq] = useState(false);
  const [isClearLtr, setIsClearLtr] = useState(false);
  const [scale, setScale] = useState(1);
  console.log("scale", scale);
  return (
    <>
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
        <BoardElement scale={scale}>
          {[...Array(416)].map((value, index) => {
            return <Square id={index + 1} key={index} />;
          })}
        </BoardElement>
      </CurrentSquareIdContext.Provider>
    </>
  );
};

export default Board;
