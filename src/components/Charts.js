import React from "react";
import { Pie1, Pie2, Pie3 } from "./PieCharts";

const Charts = () => {
  return (
    <div className="h-auto sm:w-56 p-2">
      <div className="bg-zinc-100 sm:h-full h-28">
        {Pie1()} {Pie2()} {Pie3()}
      </div>
    </div>
  );
};

export default Charts;
