import {useEffect} from "react";

const useKeyUpErase = ({ id, key, isVertical, setSquareId }) => {
  function handleNextFocusedElement() {
    if (isVertical) {
      setSquareId(id + 1);
      return;
    }
    setSquareId(id + 26);
  }

  function handlePreviousFocusedElement() {
    if (isVertical) {
      setSquareId(id - 1);
      return;
    }
    setSquareId(id - 26);
  }

  useEffect(() => {
    if (key === "Delete") {
      handleNextFocusedElement();
    }

    if (key === "Backspace") {
      handlePreviousFocusedElement();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
};

export default useKeyUpErase;
