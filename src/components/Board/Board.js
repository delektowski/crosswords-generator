import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import Square from "../Square/Squre";
import { CurrentSquareIdContext } from "../../App";

const BoardElement = styled.div`
  margin-block-start: 4rem;
  padding-top: 1rem;
  inline-size: 104rem;
  overflow: auto;
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

const Board = ({ crossWordData }) => {
  const { scale } = useContext(CurrentSquareIdContext);
  const [squares, setSquares] = useState([...Array(700)]);

  useEffect(() => {
      setSquares(crossWordData)
  },[crossWordData])
  return (
    <>
      <BoardElement scale={scale}>
        {squares.map((data, index) => {
          return <Square id={index} key={index} localStorageValue={data} />;
        })}
      </BoardElement>
    </>
  );
};

export default Board;
