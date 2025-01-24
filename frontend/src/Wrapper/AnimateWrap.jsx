import React from "react";
import { twMerge } from "tailwind-merge";

const AnimateWrap = (Component, className) =>
  function () {
    return (
      <div
        className={twMerge(
          "flex items-center justify-center flex-1 w-full",
          className
        )}
      >
        <Component />
      </div>
    );
  };

export default AnimateWrap;
