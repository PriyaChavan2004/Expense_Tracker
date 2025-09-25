import React from "react";
import CustomTooltip from "./CustomTooltip";
import CustomLegend from "./CustomLegend"
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const CustomPieChart = ({
  data,
  label,
  totalAmount,
  colors = ["#4CAF50", "#2196F3", "#FF9800", "#F44336"],
  showTextAnchor = true,
}) => {
  return (
    <ResponsiveContainer width="100%" height={380}>
      <PieChart>
        {/* Main Pie */}
        <Pie
          data={data}
          dataKey="amount"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={130}
          innerRadius={100}
          labelLine={false}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>

        <Tooltip content={<CustomTooltip/>} />
        <Legend content={<CustomLegend/>} />

        {/* ✅ Center Text */}
        {showTextAnchor && (
          <>
            <text
              x="50%"
              y="50%"
              dy={-10}
              textAnchor="middle"
              fill="#666"
              fontSize="14px"
            >
              {label}
            </text>
            <text
              x="50%"
              y="50%"
              dy={20}
              textAnchor="middle"
              fill="#333"
              fontSize="20px"
              fontWeight="600"
            >
              ${totalAmount?.toLocaleString()}
            </text>
          </>
        )}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
