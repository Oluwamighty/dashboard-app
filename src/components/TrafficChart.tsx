'use client'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { trafficSources } from "@/data/mockData";

export default function TrafficChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={trafficSources}
          cx="50%"
          cy="50%"
          outerRadius={100}
          dataKey="value"
          nameKey="name"
          label={({ name, percent }) =>
            `${name} ${((percent ?? 0) * 100).toFixed(0)}%`
          }
        >
          {trafficSources.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => Number(value).toLocaleString()} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}