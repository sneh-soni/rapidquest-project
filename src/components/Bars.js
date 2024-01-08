import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { data } from "../utils/GraphData";

const Bars = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          tickFormatter={(value) => `${value}$`}
          domain={[0, "dataMax "]}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="Employer" stackId="a" fill="#1d4ed8" />
        <Bar dataKey="Employee" stackId="a" fill="#3b82f6" />
        <Bar dataKey="Interest" stackId="a" fill="#93c5fd" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Bars;
