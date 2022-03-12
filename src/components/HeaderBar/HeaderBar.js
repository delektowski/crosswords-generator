import React from 'react';
import styled from "styled-components";
import ButtonDirection from "./ButtonDirection/ButtonDirection";
import ButtonClearSq from "./ButtonClearSq/ButtonClearSq";
import ButtonClearLtr from "./ButtonClearLtr/ButtonClearLtr";

const Container = styled.div`
  margin-block-start: 0.5rem;
  margin-block-end: 2rem;
  display: flex;
  flex-direction: row;
  inline-size: 28.5rem;
  block-size: 3rem;
  align-items: center;
  justify-content: space-between;
  @media print {
    display: none;
  }
`;

const HeaderBar = () => {
    return (
        <Container>
            <ButtonClearLtr/>
            <ButtonClearSq/>
            <ButtonDirection />
        </Container>
    );
};

export default HeaderBar;
