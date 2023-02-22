import React, { useCallback, useEffect, useMemo, useRef } from "react";
import usePlaceholder from "../hooks/usePlaceholder";

import Accordian from "../components/Accordian";
import Button from "../components/Button";
import Photo from "../components/Photo";

export default function Photos() {
  const { data, setCount, error } = usePlaceholder();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleButtonPress = useCallback(() => {
    const inputElement = inputRef.current;
    const value = inputElement.value;
    setCount(value);
  }, []);

  const accordians = useMemo(
    () =>
      data.map((photo) => (
        <Accordian
          key={photo.id}
          data={photo}
          title={photo.title}
          Component={Photo}
        />
      )),
    [data]
  );

  return (
    <>
      <input type="number" ref={inputRef} />
      <Button onClick={handleButtonPress}>Click Me!</Button>
      <span className="error">{error}</span>
      {accordians}
    </>
  );
}
