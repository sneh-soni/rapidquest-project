import React from "react";

const RetirementStrategy = () => {
  return (
    <div className="relative top-52 p-4 h-fit bg-zinc-100 rounded-2xl flex flex-col gap-2 sm:top-8 sm:left-[75%] sm:block sm:w-[20%]">
      <div className="font-semibold">Retirement Strategy</div>
      <div className="text-sm my-2">Employee Contribution</div>
      <div className="flex gap-4">
        <input type="range" className="w-3/4" />
        <div className="p-2 bg-white rounded-lg">12%</div>
      </div>
      <div className="text-sm my-2">Retirement Age</div>
      <div className="flex gap-4">
        <input type="range" className="w-3/4" />
        <div className="p-2 bg-white rounded-lg">65</div>
      </div>
      <div className="flex justify-between my-2">
        <div className="w-3/4 text-sm">Employer Contribution</div>
        <div className="w-1/4 flex justify-center items-center">8.4%</div>
      </div>
      <div className="flex justify-between my-2">
        <div className="w-3/4 text-sm">Interest Rate</div>
        <div className="w-1/4 flex justify-center items-center">5%</div>
      </div>
    </div>
  );
};

export default RetirementStrategy;
