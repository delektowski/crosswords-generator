import React, { useContext } from "react";
import styled from "styled-components";
import { CurrentSquareIdContext } from "../../Board/Board";
import DirectionArrow from "../../DirectionArrow/DirectionArrow";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  inline-size: 12.5rem;
  block-size: 3rem;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  padding-inline: 1rem;
  padding-block: 0.8rem;
  inline-size: 7rem;
  background: ${({ isVertical }) => (isVertical ? "#006400" : "#be0032")};
  color: white;
  border-radius: 6px;
  text-transform: uppercase;
  border: none;
`;

const ButtonDirection = () => {
  const { isVertical, setIsVertical } = useContext(CurrentSquareIdContext);

  function handleDirection() {
    setIsVertical((prevState) => !prevState);
  }
  return (
    <Container>
      <Button isVertical={isVertical} onClick={handleDirection}>
        {isVertical ? "do prawej" : "do dołu"}
      </Button>
      <DirectionArrow isVertical={isVertical} />
    </Container>
  );
};

export default ButtonDirection;
