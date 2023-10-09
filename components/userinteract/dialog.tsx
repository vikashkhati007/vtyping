import React from "react";

const Dialog = ({
  speed,
}: any) => {
  return (
    <>
       <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      Your Typing Speed is : {speed} WPM
    </h2>
    </>
  );
};

export default Dialog;
