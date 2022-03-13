import React from "react";
import styled from "styled-components";

const Icon = styled.div`
  position: relative;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 30px;
  cursor: pointer;
`;

const Arrow = styled.div`
  position: absolute;
  transform: rotate(${({ isVertical }) => (isVertical ? "0deg" : "90deg")});
  top: 27px;
  width: 50%;
  height: 7px;
  background-color: ${({ isVertical }) => (isVertical ? "#006400" : "#be0032")};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  &:after,
  &:before {
    content: "";
    position: absolute;
    width: 70%;
    height: 7px;
    right: -8px;
    background-color: ${({ isVertical }) =>
      isVertical ? "#006400" : "#be0032"};
  }
  &:after {
    top: -4px;
    transform: rotate(45deg);
  }
  &:before {
    top: 4px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    transform: rotate(-45deg);
  }
`;

const DirectionArrow = ({ isVertical }) => {
  return (
    <Icon>
      <Arrow isVertical={isVertical} />
    </Icon>
  );
};

export default DirectionArrow;
