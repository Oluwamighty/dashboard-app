'use client'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { userGrowth } from "@/data/mockData";
// import { ValueType } from "recharts/types/component/DefaultTooltipContent";

export default function UserGrowthChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={userGrowth}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#6b7280" }} />
        <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} />
        <Tooltip formatter={(value) => `₦${Number(value).toLocaleString()}`}/>
        <Line
          type="monotone"
          dataKey="users"
          stroke="#166534"
          strokeWidth={2}
          dot={{ fill: "#166534", r: 4 }}
          name="Users"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}