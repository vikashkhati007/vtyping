"use client";
import React, { useState, useRef, useEffect } from "react";
import Dialog from "./dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Input: React.FC = () => {
  // Add the React.FC type annotation
  const placeholderText: string = "In the soft glow of twilight, the crimson hues of the setting sun painted the sky, casting a spell of serenity upon the world. As the stars began to twinkle, a quiet stillness enveloped everything, and for a moment, all worries faded into the tranquil embrace of the night";
  const [inputText, setInputText] = useState<string[]>( // Use string[] type
    new Array(placeholderText.length).fill("")
  );

  // Create an array of refs and initialize them to null
  
  const inputRefs = useRef<HTMLInputElement[]>(
    [...Array(placeholderText.length)].map(() =>
      useRef<HTMLInputElement | null>(null)
    )
  );

  const [currentInputIndex, setCurrentInputIndex] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [showSpeed, setShowSpeed] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<Date | null>(null); // Use Date | null type
  const [endTime, setEndTime] = useState<Date | null>(null); // Use Date | null type
  const [speed, setSpeed] = useState<number>(0);
  const router = useRouter();

  // Use useEffect to set the refs to the corresponding DOM elements
  useEffect(() => {
    inputRefs.current = inputRefs.current.map(
      (ref, index) => (ref.current = ref.current || inputRefs.current[index])
    );
  }, []);

  const handleInputChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (index >= placeholderText.length) {
        return; // Disable further input if we've reached the end
      }
      const newValue: string = event.target.value;
      const newTextArray: string[] = [...inputText];
      newTextArray[index] = newValue;
      setInputText(newTextArray);

      if (!startTime) {
        // Start timing when the first character is typed
        setStartTime(new Date());
      }

      if (newValue !== "") {
        // Move focus to the next input field or start over with a slight delay
        setTimeout(() => {
          if (index < inputRefs.current.length - 1) {
            setCurrentInputIndex(index + 1);
            inputRefs.current[index + 1].focus(); // Access the input element directly
          } else {
            setCurrentInputIndex(0);
            inputRefs.current[0].focus(); // Access the input element directly
          }
        }, 50); // Adjust the delay (in milliseconds) as needed
      }

      // Check if the sentence is completed
      if (newTextArray.join("") === placeholderText) {
        setIsCompleted(true);
        setEndTime(new Date()); // Record end time when the sentence is completed
      }
    };

  const handleKeyDown =
    (index: number) => (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Backspace" && index > 0 && inputText[index] === "") {
        event.preventDefault();
        // Move focus to the previous input field
        setCurrentInputIndex(index - 1);
        inputRefs.current[index - 1].focus(); // Access the input element directly
      }
    };

  const isMismatch = (index: number): boolean => {
    return inputText[index] !== placeholderText.charAt(index);
  };

  const calculateAndShowSpeed = () => {
    if (startTime && endTime) {
      const totalTimeInSeconds: number =
        (endTime.getTime() - startTime.getTime()) / 1000; // Calculate time in seconds
      const totalWordsTyped: number = placeholderText.split(" ").length;
      const wpm: number = Math.round(
        (totalWordsTyped / totalTimeInSeconds) * 60
      ); // Calculate WPM

      setSpeed(wpm); // Update the speed state
      setShowSpeed(true); // Show the speed result
    }
  };

  const resetGame = () => {
    location.reload();
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
                className={`w-3 bg-transparent text-xl font-mono outline-none caret-blue-700 ${
                  isMismatch(index) ? "text-red-500" : ""
                }`}
                maxLength={1}
                autoFocus={index === currentInputIndex}
                placeholder={char}
                value={inputText[index]}
                onChange={handleInputChange(index)}
                onKeyDown={handleKeyDown(index)}
                disabled={index >= placeholderText.length}
                style={{ pointerEvents: "none" }} // Add inline style
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
              <Button onClick={calculateAndShowSpeed}>Check Speed</Button>
              <Button onClick={resetGame}>Restart Game</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Input;
