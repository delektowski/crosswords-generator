import React, { useState } from "react";
import styled from "styled-components";

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
  font-size: 0.8rem;
  outline: none;
  border: none;
  inline-size: 90%;
  block-size: 80%;
  &:hover,
  &:focus {
    background: rgba(211, 211, 211, 0.42);
  }
  &:disabled,
  :focus {
    background: transparent;
  }
`;

const SquareNumber = ({ isClearSq }) => {
  const [number, setNumber] = useState("");
  function handleInput(e) {
    const value = e.target.value;
    setNumber(value);
  }

  return (
    <SmallSquare>
      <Number disabled={isClearSq} maxLength="2" onChange={handleInput} value={number} />
    </SmallSquare>
  );
};

export default SquareNumber;
