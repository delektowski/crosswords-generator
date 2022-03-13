import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SquareNumber from "./SquareNumber/SquareNumber";
import { CurrentSquareIdContext } from "../../App";

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
  font-weight: ${({ isString, letter }) => {
    return isString(letter) ? 100 : 600;
  }};
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
  const [value, setValue] = useState("");
  const { squareId, setSquareId, isVertical, isClearSq, isClearLtr } =
    useContext(CurrentSquareIdContext);
  const inputRef = useRef(null);

  function isString(value) {
    return isNaN(+value);
  }

  function handleString(value) {
    const lastValue = value[value.length - 1];
    setValue(lastValue);
    handleNextFocusedElement();
  }

  function handleNumber(value) {
    if (value.length > 2) {
      value = value[value.length - 1];
    }
    setValue(value);
  }

  function handleInput(e) {
    const value = e.target.value;
    if (isString(value)) {
      handleString(value);
    } else {
      handleNumber(value);
    }
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
      <SquareElement letter={value} isClearSq={isClearSq}>
        <SquareNumber isClearSq={isClearSq} />
        <SquareInput
          disabled={isClearSq}
          ref={inputRef}
          onChange={handleInput}
          value={value}
          isClearLtr={isClearLtr}
          letter={value}
          isString={isString}
        />
      </SquareElement>
    </div>
  );
};

export default Square;
