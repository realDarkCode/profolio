import NavigationDots from "@/components/NavigationDots";
import React from "react";
import { twMerge } from "tailwind-merge";
const ComponentWrap = (Component, idName, className) => {
  return function ComponentWrap() {
    return (
      <div
        id={idName}
        className={twMerge("w-full min-h-screen flex flex-row", className)}
      >
        <div className="flex-1 w-full flex-col  py-16 px-4 md:pl-4 md:pr-8  md:px-8 flex justify-center items-center">
          <Component />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };
};
export default ComponentWrap;
