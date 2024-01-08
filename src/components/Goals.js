import React from "react";

const Goals = () => {
  return (
    <div className="flex flex-wrap gap-2 p-2 pb-0">
      <div className="sm:w-full">
        <div className="text-blue-700">Retirement Income</div>
        <div className="text-xl font-semibold">Starting Year 2056</div>
      </div>
      <div className="h-auto w-full sm:flex my-2">
        <div className="w-auto sm:w-1/3 h-16 flex flex-col justify-center">
          <p className="font-semibold text-lg">$300,000</p>
          <p className="text-xs font-sans font-semibold text-zinc-500">
            My Goal
          </p>
        </div>
        <div className="flex flex-nowrap justify-around sm:w-2/3">
          <div className="w-1/2 sm:w-1/3">
            <p className="font-semibold text-lg">59%</p>
            <p className="text-xs font-sans font-semibold text-zinc-500">
              Goal Achieved
            </p>
          </div>
          <div className="w-1/2 sm:w-1/3">
            <p className="font-semibold text-lg">K 300</p>
            <p className="text-xs font-sans font-semibold text-zinc-500">
              Est. Monthly Income
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
