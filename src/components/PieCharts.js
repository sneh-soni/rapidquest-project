import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";
import { data1, data2, data3 } from "../utils/PieData";

const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
  } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

export function Pie1() {
  const [activeIndex1] = useState(0);

  return (
    <PieChart width={400} height={400}>
      <Pie
        className="p-0"
        activeIndex={activeIndex1}
        activeShape={renderActiveShape}
        data={data1}
        cx={200}
        cy={200}
        innerRadius={30}
        outerRadius={35}
        fill="#8884d8"
        dataKey="value"
      />
    </PieChart>
  );
}

export function Pie2() {
  const [activeIndex2] = useState(0);

  return (
    <PieChart width={400} height={400}>
      <Pie
        activeIndex={activeIndex2}
        activeShape={renderActiveShape}
        data={data2}
        cx={200}
        cy={200}
        innerRadius={30}
        outerRadius={35}
        fill="#8884d8"
        dataKey="value"
      />
    </PieChart>
  );
}

export function Pie3() {
  const [activeIndex3] = useState(0);

  return (
    // <div style={{ width: "200px", height: "200px" }}>
    <PieChart width={400} height={400}>
      <Pie
        // className="w-full h-full"
        activeIndex={activeIndex3}
        activeShape={renderActiveShape}
        data={data3}
        cx={200}
        cy={200}
        innerRadius={30}
        outerRadius={35}
        fill="#8884d8"
        dataKey="value"
      />
    </PieChart>
    // </div>
  );
}
