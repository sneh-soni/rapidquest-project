import React from "react";
import Charts from "./Charts";

const Compare = () => {
  return (
    <div className="relative -top-2 p-2">
      <div className="font-bold text-lg sm:text-sm">
        How do I Compare to my Peers?
      </div>
      <div className="text-[0.65rem] sm:text-xs text-zinc-500 ">
        These numbers represents current goal achievement
      </div>
      <div className="sm:flex">
        <div className="my-2 flex flex-col gap-2">
          <div className="flex gap-2 font-semibold">
            Age:<span className="font-sans">under 30</span>
            <svg
              viewBox="0 0 48 48"
              height="12"
              width="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#000000"
                d="M0 12.438h48L24 35.562z"
                class="fill-241f20"
              ></path>
            </svg>
          </div>
          <div className="flex gap-2 font-semibold">
            Salary:<span className="font-sans">K-20 K-30</span>
            <svg
              viewBox="0 0 48 48"
              height="12"
              width="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#000000"
                d="M0 12.438h48L24 35.562z"
                class="fill-241f20"
              ></path>
            </svg>
          </div>
          <div className="flex gap-2 font-semibold">
            Gender:<span className="font-sans">Male</span>
            <svg
              viewBox="0 0 48 48"
              height="12"
              width="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#000000"
                d="M0 12.438h48L24 35.562z"
                class="fill-241f20"
              ></path>
            </svg>
          </div>
        </div>
        <Charts />
      </div>
    </div>
  );
};

export default Compare;
