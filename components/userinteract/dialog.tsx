import React from "react";

const Dialog = ({ speed, timetaken }: any) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Your Typing Speed is : {speed} WPM
      </h2>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Time Taken : {timetaken}
      </h3>
    </div>
  );
};

export default Dialog;
