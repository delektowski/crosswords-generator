import React, { useContext } from "react";
import styled from "styled-components";
import { CurrentSquareIdContext } from "../../Board/Board";

const Button = styled.button`
  padding-inline: 1rem;
  padding-block: 0.8rem;
  inline-size: 7rem;
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
                <Button onClick={handleClear}>{isClearLtr ? "przywróć litery" : "czyść litery"}</Button>
            </div>
        </div>
    );
};

export default ButtonClearLtr;
