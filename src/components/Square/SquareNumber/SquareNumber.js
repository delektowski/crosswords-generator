import styled from "styled-components";
import React from "react";

const SmallSquare = styled.div`
  margin-inline-start: 0.2rem;
  margin-block-start: 0.1rem;
  inline-size: 45%;
  block-size: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const Number = styled.input`
  position: relative;
  top: 0.1rem;
  left: 0.1rem;
  font-size: 0.75rem;
  outline: none;
  border: none;
  inline-size: 90%;
  block-size: 76%;
  &:hover,
  &:focus {
    background: rgba(211, 211, 211, 0.42);
  }
  &:disabled,
  :focus {
    background: transparent;
  }
`;

const SquareNumber = ({ isClearSq, sqNumber, setSqNumber }) => {
  function handleInput(e) {
    const value = e.target.value;
    setSqNumber(value);
  }

    console.log('numerb')
  return (
    <SmallSquare>
      <Number
        disabled={isClearSq}
        maxLength="2"
        onChange={handleInput}
        value={sqNumber}
      />
    </SmallSquare>
  );
};

export default React.memo(SquareNumber);
