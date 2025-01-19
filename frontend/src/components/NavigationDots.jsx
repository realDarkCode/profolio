import React from "react";

export default function NavigationDots({ active }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-2">
      {["home", "about", "work", "skills", "testimonials", "contact"].map(
        (item, index) => (
          <a
            key={`navigation-${item + index}`}
            className={`size-2 rounded-full  transition-colors duration-200 ease-in-out hover:bg-secondary lg:size-4 ${
              active == item ? "bg-secondary" : "bg-[#cbcbcb]"
            }`}
            href={`#${item}`}
          />
        )
      )}
    </div>
  );
}
