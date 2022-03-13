import React, { useContext } from "react";
import styled from "styled-components";
import Square from "../Square/Squre";
import { CurrentSquareIdContext } from "../../App";

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

const Board = () => {
  const { scale } = useContext(CurrentSquareIdContext);
  return (
    <>
      <BoardElement scale={scale}>
        {[...Array(416)].map((value, index) => {
          return <Square id={index + 1} key={index} />;
        })}
      </BoardElement>
    </>
  );
};

export default Board;
