import React from "react";

function index() {
  return (
    <footer className="w-full py-8 border-t-2 border-zinc-300 bg-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="text-base lg:text-lg text-gray-500 text-center block">
            &copy;{" "}
            <a
              href="https://github.com/realDarkCode"
              target="_blank"
              className="underline underline-offset-4"
            >
              DarkCode
            </a>{" "}
            2025, All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default index;
