import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import SquareNumber from "./SquareNumber/SquareNumber";
import { CurrentSquareIdContext } from "../../App";
import SquareInput from "./SquareInput/SquareInput";

const SquareElement = styled.div`
  inline-size: 3rem;
  block-size: 3rem;
  margin-top: -3px;
  margin-right: -3px;
  box-shadow: ${({ letter, isClearSq, sqNumber }) =>
    !letter && isClearSq
      ? "none"
      : `inset 0 0 0 ${sqNumber ? "4px" : "1px"} black`};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Square = ({ id, localStorageValue }) => {
  const [value, setValue] = useState("");
  const [sqNumber, setSqNumber] = useState("");

  const { isClearSq, setData } = useContext(CurrentSquareIdContext);
  // console.log('render')
  useEffect(() => {
    if (
      localStorageValue !== undefined &&
      localStorageValue.value !== "" &&
      localStorageValue.id === id
    ) {
      setValue(localStorageValue.value);
      setSqNumber(localStorageValue.sqNumber);
    }
  }, [localStorageValue, id]);

  useEffect(() => {
    setData((prev) => {
      if (prev && prev.length < 700) {
        return prev.concat({ value, id, sqNumber });
      }
      const copyPrev = [...prev];
      copyPrev[id].value = value;
      copyPrev[id].sqNumber = sqNumber;

      return copyPrev;
    });
  }, [value, id, sqNumber, setData]);

  return (
    <div style={{ borderCollapse: "collapse" }}>
      <SquareElement letter={value} isClearSq={isClearSq} sqNumber={sqNumber}>
        <SquareNumber
          isClearSq={isClearSq}
          sqNumber={sqNumber}
          setSqNumber={setSqNumber}
        />
        <SquareInput id={id} value={value} setValue={setValue} />
      </SquareElement>
    </div>
  );
};

export default React.memo(Square);
