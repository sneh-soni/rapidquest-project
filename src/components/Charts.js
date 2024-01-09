import React from "react";
import PieCharts from "./PieCharts";

const Charts = () => {
  return (
    <div className="h-auto sm:w-3/5 sm:px-2 flex flex-col">
      <div className="gap-2 h-20 flex">
        <PieCharts />
      </div>
    </div>
  );
};

export default Charts;
