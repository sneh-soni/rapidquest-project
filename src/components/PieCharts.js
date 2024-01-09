import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from "recharts";
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
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={"#000000"}>
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

export default class PieCharts extends PureComponent {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <>
        <ResponsiveContainer width="33%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              activeIndex={this.state.activeIndex}
              activeShape={renderActiveShape}
              data={data1}
              cx="50%"
              cy="50%"
              innerRadius={35}
              outerRadius={40}
              dataKey="value"
            >
              {data1.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
          <div className="flex justify-center sm:text-sm lg:text-base">
            Average
          </div>
        </ResponsiveContainer>
        <ResponsiveContainer width="33%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              activeIndex={this.state.activeIndex}
              activeShape={renderActiveShape}
              data={data2}
              cx="50%"
              cy="50%"
              innerRadius={35}
              outerRadius={40}
              // fill={colors}
              dataKey="value"
              // onMouseEnter={this.onPieEnter}
            >
              {data2.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
          <div className="flex justify-center sm:text-sm lg:text-base">Top</div>
        </ResponsiveContainer>
        <ResponsiveContainer width="33%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              activeIndex={this.state.activeIndex}
              activeShape={renderActiveShape}
              data={data3}
              cx="50%"
              cy="50%"
              innerRadius={35}
              outerRadius={40}
              // fill={colors}
              dataKey="value"
              // onMouseEnter={this.onPieEnter}
            >
              {data3.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
          <div className="flex justify-center sm:text-sm lg:text-base">Me</div>
        </ResponsiveContainer>
      </>
    );
  }
}
