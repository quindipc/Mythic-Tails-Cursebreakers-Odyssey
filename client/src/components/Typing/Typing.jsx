import React, { useState, useEffect } from "react";

const Typing = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMousePressed, setIsMousePressed] = useState(false);
  const [isTextFullyDisplayed, setIsTextFullyDisplayed] = useState(false);

  useEffect(() => {
    const handleMouseDown = () => {
      setIsMousePressed(true);
    };

    const handleMouseUp = () => {
      setIsMousePressed(false);
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    if (isMousePressed) {
      setIsTextFullyDisplayed(true);
      setCurrentText(text);
      return;
    }

    if (currentIndex < text.length && !isTextFullyDisplayed) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text, isMousePressed, isTextFullyDisplayed]);

  return <span>{currentText}</span>;
};

export default Typing;
