import React, { useState } from "react";
import styled from "styled-components";
import Square from "../Square/Squre";
import HeaderBar from "../HeaderBar/HeaderBar";

const BoardElement = styled.div`
  block-size: 50rem;
  inline-size: 83.3rem;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 1px;
`;

export const CurrentSquareIdContext = React.createContext({});

const Board = () => {
  const [squareId, setSquareId] = useState(null);
  const [isVertical, setIsVertical] = useState(true);
  const [isClearSq, setIsClearSq] = useState(false);
  const [isClearLtr, setIsClearLtr] = useState(false);
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
        }}
      >
        <HeaderBar />
        <BoardElement>
          {[...Array(416)].map((value, index) => {
            return <Square id={index + 1} key={index} />;
          })}
        </BoardElement>
      </CurrentSquareIdContext.Provider>
    </>
  );
};

export default Board;
