import React from "react";
import Goals from "./Goals";
import Graph from "./Graph";
import Compare from "./Compare";

const Details = () => {
  return (
    <div className="w-screen h-screen max-h-screen sm:py-0 mt-4 p-2 sm:w-[50%] sm:mt-0 sm:absolute sm:right-[21%]">
      <Goals />
      <Graph />
      <Compare />
    </div>
  );
};

export default Details;
