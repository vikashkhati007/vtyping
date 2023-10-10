"use client"
import React, { useState, useRef, useEffect } from "react";
import Dialog from "./dialog";
import { Button } from "@/components/ui/button";

const Input: React.FC = () => {
  const placeholderText: string =
    "In the soft glow of twilight";
  const [inputText, setInputText] = useState<string[]>(new Array(placeholderText.length).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>(Array.from({ length: placeholderText.length }) as HTMLInputElement[]);
  const [currentInputIndex, setCurrentInputIndex] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [showSpeed, setShowSpeed] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number | null>(null); // Use number | null type
  const [endTime, setEndTime] = useState<number | null>(null); // Use number | null type
  const [speed, setSpeed] = useState<number>(0);
  const [clockDisplay, setClockDisplay] = useState<string>("00:00");
  const [timeTaken, setTimeTaken] = useState<string | null>(null); // Added timeTaken state

  useEffect(() => {
    inputRefs.current = inputRefs.current.map(
      (ref, index) => (ref = inputRefs.current[index] || null)
    );
  }, []);

  const updateClock = () => {
    if (startTime && !isCompleted) {
      const currentTime = Date.now();
      const elapsedTimeInSeconds = Math.floor((currentTime - startTime) / 1000);
      const minutes = Math.floor(elapsedTimeInSeconds / 60).toString().padStart(2, "0");
      const seconds = (elapsedTimeInSeconds % 60).toString().padStart(2, "0");
      setClockDisplay(`${minutes}:${seconds}`);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(updateClock, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [startTime, isCompleted]);

  const handleInputChange = (index: number, newValue: string) => {
    if (index >= placeholderText.length) {
      return;
    }

    const newTextArray: string[] = [...inputText];
    newTextArray[index] = newValue;
    setInputText(newTextArray);

    if (newValue !== "") {
      if (!startTime) {
        setStartTime(Date.now());
      }

      setTimeout(() => {
        if (index < inputRefs.current.length - 1) {
          setCurrentInputIndex(index + 1);
          inputRefs.current[index + 1]?.focus();
        } else {
          setCurrentInputIndex(0);
        }
      }, 50);
    }

    if (newTextArray.join("") === placeholderText) {
      setIsCompleted(true);
      setEndTime(Date.now());
      calculateAndShowSpeed(); // Calculate speed when completed
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && index > 0 && inputText[index] === "") {
      event.preventDefault();
      setCurrentInputIndex(index - 1);
      inputRefs.current[index - 1]?.focus();
    }
  };

  const isMismatch = (index: number): boolean => {
    return inputText[index] !== placeholderText.charAt(index);
  };

  const calculateAndShowSpeed = () => {
    if (startTime && endTime) {
      const totalTimeInSeconds: number = (endTime - startTime) / 1000;
      const totalWordsTyped: number = placeholderText.split(" ").length;
      const wpm: number = Math.round((totalWordsTyped / totalTimeInSeconds) * 60);
      setSpeed(wpm);
      setShowSpeed(true);
  
      // Calculate and set the time taken
      const minutes = Math.floor(totalTimeInSeconds / 60);
      const seconds = Math.floor(totalTimeInSeconds % 60);
  
      let timeTaken = "";
  
      if (minutes > 0) {
        timeTaken += `${minutes} minute${minutes > 1 ? "s" : ""} `;
      }
  
      if (seconds > 0) {
        timeTaken += `${seconds} second${seconds > 1 ? "s" : ""}`;
      }
  
      if (!timeTaken) {
        timeTaken = "0 seconds";
      }
  
      setTimeTaken(timeTaken);
    }
  };
  

  const resetGame = () => {
    location.reload();
  };

  return (
    <>
      {!isCompleted ? (
        <>
         <div className="flex justify-center opacity-50">
         <p>TIME: {clockDisplay}</p>
       </div>
        <div className="flex items-center text-lg p-2 flex-wrap">
          {Array.from(placeholderText).map((char, index) => (
            <div key={index}>
              <input
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                autoSave="off"
                type="text"
                ref={(el) => (inputRefs.current[index] = el!)}
                className={`w-3 bg-transparent text-xl font-mono outline-none caret-blue-700 ${
                  isMismatch(index) ? "text-red-500" : ""
                }`}
                maxLength={1}
                autoFocus={index === currentInputIndex}
                placeholder={char}
                value={inputText[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                disabled={index >= placeholderText.length}
                style={{ pointerEvents: "none" }}
              />
            </div>
          ))}
        </div>
        </>
      ) : (
        <div>
          <div className="w-full flex flex-col gap-4 justify-center items-center">
            {showSpeed ? (
              <div>
                <Dialog speed={speed} timetaken={timeTaken} />
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
