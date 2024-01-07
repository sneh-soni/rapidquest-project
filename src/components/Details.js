import React from "react";
import Goals from "./Goals";

const Details = () => {
  return (
    <div className="w-screen  my-4 p-2">
      <div className="p-2">
        <div className="text-blue-400">Retirement Income</div>
        <div className="text-xl font-semibold">Starting Year 2056</div>
      </div>
      <Goals />
    </div>
  );
};

export default Details;
