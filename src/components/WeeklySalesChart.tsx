'use client'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { weeklySales } from "@/data/mockData";

export default function WeeklySalesChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={weeklySales}>
        <defs>
          <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#166534" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#166534" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#6b7280" }} />
        <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} />
        <Tooltip formatter={(value) => `₦${Number(value).toLocaleString()}`} />
        <Area
          type="monotone"
          dataKey="sales"
          stroke="#166534"
          strokeWidth={2}
          fill="url(#salesGradient)"
          name="Sales"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}