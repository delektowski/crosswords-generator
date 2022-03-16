import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { CurrentSquareIdContext } from "../../../App";

const StyledSquareInput = styled.input`
  margin-top: 0.9rem;
  inline-size: 2rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  font-weight: ${({ isString, letter }) => {
    return isString(letter) ? 100 : 600;
  }};
  color: black;
  text-align: center;
  outline: none;
  border: none;
  display: ${({ isClearLtr, isString, letter }) =>
    isClearLtr && isString(letter) ? "none" : "block"};
  &:hover,
  &:focus {
    background: rgba(211, 211, 211, 0.42);
  }
  &:disabled,
  :focus {
    background: transparent;
  }
`;

const SquareInput = ({ id, value, setValue }) => {
  const columnsNumber = 35;
  const oneColumn = 1;
  const { squareId, setSquareId, isVertical, isClearSq, isClearLtr } =
    useContext(CurrentSquareIdContext);
  const inputRef = useRef(null);

  function handleInput(e) {
    const value = e.target.value;
    if (isString(value)) {
      handleString(value);
    } else {
      handleNumber(value);
    }
  }

  function handleOnClick() {
    setSquareId(id);
  }

  function handleOnKeyUp(e) {
    const { key } = e;
    if (key === "Delete") {
      handleNextFocusedElement();
    }

    if (key === "Backspace") {
      handlePreviousFocusedElement();
    }
  }
  function handleFocus() {
    setValue("");
  }

  function handleNextFocusedElement() {
    if (isVertical) {
      setSquareId(id + oneColumn);
      return;
    }
    setSquareId(id + columnsNumber);
  }

  function handlePreviousFocusedElement() {
    if (isVertical) {
      setSquareId(id - oneColumn);
      return;
    }
    setSquareId(id - columnsNumber);
  }

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

  useEffect(() => {
    if (id === squareId) {
      inputRef.current.focus();
    }
  }, [squareId, id, isVertical]);

  return (
    <StyledSquareInput
      onFocus={handleFocus}
      onClick={handleOnClick}
      onKeyUp={handleOnKeyUp}
      disabled={isClearSq}
      ref={inputRef}
      onChange={handleInput}
      value={value}
      isClearLtr={isClearLtr}
      letter={value}
      isString={isString}
    />
  );
};

export default SquareInput;
