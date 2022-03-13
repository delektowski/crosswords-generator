import React, { useContext } from "react";
import styled from "styled-components";
import { CurrentSquareIdContext } from "../../../../App";

const Button = styled.button`
  padding-inline: 1rem;
  padding-block: 0.5rem;
  inline-size: 8rem;
  background: darkslateblue;
  color: white;
  border-radius: 6px;
  text-transform: uppercase;
  border: none;
`;

const ButtonClearLtr = () => {
  const { isClearLtr, setIsClearLtr } = useContext(CurrentSquareIdContext);

  function handleClear() {
    setIsClearLtr((prevState) => !prevState);
  }

  return (
    <div>
      <div>
        <Button onClick={handleClear}>
          {isClearLtr ? "przywróć litery" : "czyść litery"}
        </Button>
      </div>
    </div>
  );
};

export default ButtonClearLtr;
