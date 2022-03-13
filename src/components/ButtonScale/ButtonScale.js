import React, { useContext } from "react";

import styled from "styled-components";
import { CurrentSquareIdContext } from "../../App";

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  border-radius: 50%;
  inline-size: 2rem;
  block-size: 2rem;
  background: grey;
  color: white;
  text-transform: uppercase;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

const ButtonScale = () => {
  const { setScale, scale } = useContext(CurrentSquareIdContext);

  function handleScale(isMagnified) {
    console.log("scale23", scale);
    if (scale === 1 && isMagnified) {
      return;
    }

    if (isMagnified) {
      setScale((prevState) => +prevState + 0.1);
      return;
    }
    console.log("koza");
    setScale((prevState) => +prevState - 0.1);
  }
  return (
    <Container>
      <Button onClick={() => handleScale(true)}>+</Button>
      <Button onClick={() => handleScale(false)}>-</Button>
    </Container>
  );
};

export default ButtonScale;
