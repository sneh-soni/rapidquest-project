import React from "react";
import { useState } from "react";

const RetirementStrategy = () => {
  const [employeeC, setEmployeeC] = useState("50");
  const [retAge, setRetAge] = useState("50");
  return (
    <>
      <div className="relative top-52 p-4 h-fit bg-zinc-100 rounded-2xl flex flex-col gap-2 sm:top-8 sm:left-[75%] sm:block sm:w-[20%]">
        <div className="font-semibold">Retirement Strategy</div>
        <div className="text-sm my-2">Employee Contribution</div>
        <div className="flex gap-4">
          <input
            type="range"
            className="w-3/4"
            onChange={(e) => setEmployeeC(e.target.value)}
          />
          <div className="p-2 bg-white rounded-lg">{employeeC}%</div>
        </div>
        <div className="text-sm my-2">Retirement Age</div>
        <div className="flex gap-4">
          <input
            type="range"
            className="w-3/4"
            onChange={(e) => setRetAge(e.target.value)}
          />
          <div className="p-2 bg-white rounded-lg">{retAge}</div>
        </div>
        <div className="flex justify-between my-2">
          <div className="w-3/4 text-sm">Employer Contribution</div>
          <div className="w-1/4 flex justify-center items-center">8.4%</div>
        </div>
        <div className="flex justify-between my-2">
          <div className="w-3/4 text-sm">Interest Rate</div>
          <div className="w-1/4 flex justify-center items-center">5%</div>
        </div>
        <div className="hidden sm:block">
          <button className="p-4 my-2 bg-blue-700 w-full rounded-lg text-white hover:bg-blue-800">
            Update
          </button>
          <div className="flex justify-center text-sm text-blue-700 hover:cursor-pointer">
            View Help Docs{">"}
          </div>
        </div>
      </div>
    </>
  );
};

export default RetirementStrategy;
