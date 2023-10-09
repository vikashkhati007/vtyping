"use client";
import React, { useState, useRef, RefObject, MutableRefObject } from "react";
const Input = () => {
  const placeholderText =
    "In the heart of a bustling city, where towering skyscrapers reached for the sky, people hurriedly rushed to and fro, their faces etched with determination. The cacophony of car horns, sirens, and conversations blended into a symphony of urban life. Amidst the chaos, a solitary street performer played a soulful melody on his weathered guitar, drawing a small crowd of onlookers. The sun dipped below the horizon, casting a warm orange glow over the cityscape, and the night lights began to twinkle like stars. As darkness descended, the city's energy shifted, and the vibrant nightlife emerged with neon signs illuminating the streets, offering a different kind of magic to those who sought adventure in the labyrinth of this metropolis In the heart of a bustling city, where towering skyscrapers reached for the sky, people hurriedly rushed to and fro, their faces etched with determination. The cacophony of car horns, sirens, and conversations blended into a symphony of urban life. Amidst the chaos, a solitary street performer played a soulful melody on his weathered guitar, drawing a small crowd of onlookers. The sun dipped below the horizon, casting a warm orange glow over the cityscape, and the night lights began to twinkle like stars. As darkness descended, the city's energy shifted, and the vibrant nightlife emerged with neon signs illuminating the streets, offering a different kind of magic to those who sought adventure in the labyrinth of this metropolis";
  const [inputText, setInputText] = useState(
    new Array(placeholderText.length).fill("")
  );

  const inputRefs = useRef(
    [...Array(placeholderText.length)].map(() => React.createRef())
  );
  const [currentInputIndex, setCurrentInputIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false); // Track if the sentence is completed

  const handleInputChange = (index:any) => (event:React.ChangeEvent<HTMLInputElement>) => {
    if (index >= placeholderText.length) {
      return; // Disable further input if we've reached the end
    }
    const newValue = event.target.value;
    const newTextArray = [...inputText];
    newTextArray[index] = newValue;
    setInputText(newTextArray);

    if (newValue !== "") {
      // Move focus to the next input field or start over
      if (index < inputRefs.current.length - 1) {
        setCurrentInputIndex(index + 1);
        inputRefs.current[index + 1].current.focus();
      } else {
        setCurrentInputIndex(0);
        inputRefs.current[0].current.focus();
      }
    }

    // Check if the sentence is completed
    if (newTextArray.join("") === placeholderText) {
      setIsCompleted(true);
    }
  };

  const handleKeyDown = (index:any) => (event:any) => {
    if (event.key === "Backspace" && index > 0 && inputText[index] === "") {
      event.preventDefault();
      // Move focus to the previous input field
      setCurrentInputIndex(index - 1);
      inputRefs.current[index - 1].current.focus();
    }
  };

  const isMismatch = (index:any) => {
    return inputText[index] !== placeholderText.charAt(index);
  };

  return (
    <>
      <div className="flex items-center text-lg p-2 flex-wrap ">
        {Array.from(placeholderText).map((char, index) => (
          <div key={index}>
            <input
              ref={inputRefs.current[index]}
              className={`w-3 bg-transparent text-lg font-mono outline-none ${
                isMismatch(index) ? "text-red-500" : ""
              }`}
              maxLength={1}
              autoFocus={index === currentInputIndex}
              placeholder={char}
              value={inputText[index]}
              onChange={handleInputChange(index)}
              onKeyDown={handleKeyDown(index)}
              disabled={index >= placeholderText.length} // Updated condition to allow input of the last character
            />
          </div>
        ))}
      </div>
      {isCompleted && (
        // Render a dialog when the sentence is completed
        <div className="dialog">
          <p>Congratulations! You've completed the sentence.</p>
        </div>
      )}
    </>
  );
};

export default Input;
