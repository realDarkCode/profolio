import NavigationDots from "@/components/NavigationDots";
import React from "react";
const ComponentWrap = (Component, idName, ...props) => {
  return function ComponentWrap() {
    return (
      <div
        id={idName}
        className={`w-full min-h-screen flex flex-row `}
        {...props}
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
