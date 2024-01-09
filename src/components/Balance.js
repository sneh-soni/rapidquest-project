import React from "react";
import { useState, useEffect } from "react";

const Balance = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-zinc-100 rounded-xl h-[45%] p-4 sm:pt-2 flex flex-col">
      <div className="font-semibold my-1">Today</div>
      <div>
        <p className="text-4xl sm:text-3xl lg:text-4xl font-bold">$19,892</p>
        <p className="font-sans font-semibold text-zinc-500">Account Balance</p>
      </div>
      <div className="flex gap-2 py-4 sm:flex-col">
        <div className="w-1/2 sm:w-full">
          <p className="text-xl sm:text-sm font-bold">$4000</p>
          <p className="text-xs font-sans font-semibold text-zinc-500">
            Year-to-Date {!isMobile ? "Contributions" : ""}
          </p>
        </div>
        <div className="w-1/2 sm:w-full">
          <p className="text-xl sm:text-sm font-bold">$1892</p>
          <p className="text-xs font-sans font-semibold text-zinc-500">
            Total Interest
          </p>
        </div>
      </div>
      <div className="w-full sm:h-10">
        <button className="hover:bg-blue-800 text-white font-sans bg-blue-700 w-full rounded-lg p-4 flex justify-center sm:text-xs sm:gap-2 lg:w-3/4">
          I Want to{" "}
          {isMobile ? (
            "..."
          ) : (
            <svg
              className="mt-1"
              viewBox="0 0 48 48"
              height="10"
              width="10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M0 12.438h48L24 35.562z"
                class="fill-241f20"
              ></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Balance;
