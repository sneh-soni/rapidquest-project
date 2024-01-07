import React from "react";
import Goals from "./Goals";
import Graph from "./Graph";

const Details = () => {
  return (
    <div className="w-screen h-screen mt-4 p-2 sm:w-[50%]">
      <Goals />
      <Graph />
    </div>
  );
};

export default Details;
