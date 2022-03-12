import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { CurrentSquareIdContext } from "../Board/Board";
import SquareNumber from "./SquareNumber/SquareNumber";

const SquareElement = styled.div`
  inline-size: 3rem;
  block-size: 3rem;
  border: ${({ letter, isClearSq }) =>
    !letter && isClearSq ? "solid white 1px" : "solid black 1px"};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SquareInput = styled.input`
  margin-top: 0.9rem;
  inline-size: 2rem;
  font-size: 1.4rem;
  text-transform: uppercase;
  color: black;
  text-align: center;
  outline: none;
  border: none;
  display: ${({ isClearLtr }) => (isClearLtr ? "none" : "block")};
  &:hover,
  &:focus {
    background: rgba(211, 211, 211, 0.42);
  }
  &:disabled,
  :focus {
    background: transparent;
  }
`;

const Square = ({ id }) => {
  const [letter, setLetter] = useState("");
  const { squareId, setSquareId, isVertical, isClearSq, isClearLtr } =
    useContext(CurrentSquareIdContext);
  const inputRef = useRef(null);
  function handleInput(e) {
    const value = e.target.value;
    const lastValue = value[value.length - 1];
    setLetter(lastValue);
    handleNextFocusedElement();
  }

  function handleNextFocusedElement() {
    if (isVertical) {
      setSquareId(id + 1);
      return;
    }
    setSquareId(id + 26);
  }

  useEffect(() => {
    if (id === squareId) {
      inputRef.current.focus();
    }
  }, [squareId, id, isVertical]);

  return (
    <div style={{ borderCollapse: "collapse" }}>
      <SquareElement letter={letter} isClearSq={isClearSq}>
        <SquareNumber isClearSq={isClearSq} />
        <SquareInput
          disabled={isClearSq}
          ref={inputRef}
          onChange={handleInput}
          value={letter}
          isClearLtr={isClearLtr}
        />
      </SquareElement>
    </div>
  );
};

export default Square;
