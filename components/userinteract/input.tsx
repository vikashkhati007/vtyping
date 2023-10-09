"use client";
import React, { useState, useRef } from "react";
import Dialog from "./dialog";
import { Button } from "@/components/ui/button";

const Input = () => {
  const placeholderText = "Embrace every challenge as an opportunity for growth, and let your determination fuel your journey towards success, knowing that with perseverance and a positive mindset, you can conquer any obstacle and achieve your dreams. Know that success is not always a straight path; it's a series of steps, stumbles, and leaps of faith. The setbacks you encounter are not failures but stepping stones towards your goals. Stay focused, work diligently, and celebrate even the smallest victories along the way, for they are the building blocks of your future success. Remember that you have the strength and resilience within you to overcome any adversity that comes your way. Believe in yourself, trust the process, and keep moving forward with unwavering determination. With perseverance and a positive mindset, you can conquer any obstacle and achieve your dreams. Your journey is a testament to your unwavering spirit and the limitless potential within you";
  const [inputText, setInputText] = useState(
    new Array(placeholderText.length).fill("")
  );

  const inputRefs = useRef(
    [...Array(placeholderText.length)].map(() => React.createRef())
  );
  const [currentInputIndex, setCurrentInputIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false); // Track if the sentence is completed
  const [showSpeed, setShowSpeed] = useState(false); // Track if speed should be shown
  const [startTime, setStartTime] = useState(null); // Track start time for speed calculation
  const [endTime, setEndTime] = useState(null); // Track end time for speed calculation
  const [speed, setSpeed] = useState(0); // Track typing speed

  const handleInputChange = (index) => (event) => {
    if (index >= placeholderText.length) {
      return; // Disable further input if we've reached the end
    }
    const newValue = event.target.value;
    const newTextArray = [...inputText];
    newTextArray[index] = newValue;
    setInputText(newTextArray);

    if (!startTime) {
      // Start timing when the first character is typed
      setStartTime(new Date());
    }

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
      setEndTime(new Date()); // Record end time when the sentence is completed
    }
  };

  const handleKeyDown = (index) => (event) => {
    if (event.key === "Backspace" && index > 0 && inputText[index] === "") {
      event.preventDefault();
      // Move focus to the previous input field
      setCurrentInputIndex(index - 1);
      inputRefs.current[index - 1].current.focus();
    }
  };

  const isMismatch = (index) => {
    return inputText[index] !== placeholderText.charAt(index);
  };

  const calculateAndShowSpeed = () => {
    if (startTime && endTime) {
      const totalTimeInSeconds = (endTime - startTime) / 1000; // Calculate time in seconds
      const totalWordsTyped = placeholderText.split(" ").length;
      const wpm = Math.round((totalWordsTyped / totalTimeInSeconds) * 60); // Calculate WPM

      setSpeed(wpm); // Update the speed state
      setShowSpeed(true); // Show the speed result
    }
  };

  const resetGame = () => {
    setInputText(new Array(placeholderText.length).fill(""));
    setCurrentInputIndex(0);
    setIsCompleted(false);
    setShowSpeed(false);
    setStartTime(null);
    setEndTime(null);
    setSpeed(0); // Reset the speed state
  };

  return (
    <>
      {!isCompleted ? (
        <div className="flex items-center text-lg p-2 flex-wrap ">
          {Array.from(placeholderText).map((char, index) => (
            <div key={index}>
              <input
                autoComplete="off"
                autoCorrect="off"
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
      ) : (
        <div>
          <div className="w-full flex flex-col gap-4 justify-center items-center">
            {showSpeed ? (
              <div>
                <Dialog speed={speed} />
              </div>
            ) : (
              <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Select Option:
              </h2>
            )}
            <div className="buttoncontainer flex gap-16">
              <Button onClick={calculateAndShowSpeed}>Calculate Speed</Button>
              <Button onClick={resetGame}>Restart Game</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Input;
