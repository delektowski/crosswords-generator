import React, { useContext } from "react";
import styled from "styled-components";
import { CurrentSquareIdContext } from "../../Board/Board";

const Button = styled.button`
  padding-inline: 1rem;
  padding-block: 0.8rem;
  inline-size: 7rem;
  background: darkslategrey;
  color: white;
  border-radius: 6px;
  text-transform: uppercase;
  border: none;
`;

const ButtonClearSq = () => {
  const { isClearSq, setIsClearSq } = useContext(CurrentSquareIdContext);

  function handleClear() {
    setIsClearSq((prevState) => !prevState);
  }

  return (
    <div>
      <Button onClick={handleClear}>{isClearSq ? "przywróć kratki" : "czyść kratki"}</Button>
    </div>
  );
};

export default ButtonClearSq;
