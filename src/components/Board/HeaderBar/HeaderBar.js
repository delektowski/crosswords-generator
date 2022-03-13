import React from "react";
import styled from "styled-components";
import ButtonDirection from "./ButtonDirection/ButtonDirection";
import ButtonClearSq from "./ButtonClearSq/ButtonClearSq";
import ButtonClearLtr from "./ButtonClearLtr/ButtonClearLtr";
import ButtonScale from "../../ButtonScale/ButtonScale";

const Container = styled.div`
  top: 0.5rem;
  margin-block-end: 2rem;
  display: flex;
  flex-direction: row;
  inline-size: 40.5rem;
  block-size: 3rem;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  @media print {
    display: none;
  }
`;

const HeaderBar = () => {
  return (
    <Container>
      <ButtonScale />
      <ButtonClearLtr />
      <ButtonClearSq />
      <ButtonDirection />
    </Container>
  );
};

export default HeaderBar;
