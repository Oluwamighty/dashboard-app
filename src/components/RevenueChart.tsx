'use client'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { monthlyRevenue } from "@/data/mockData";

export default function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={monthlyRevenue}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#6b7280" }} />
        <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} />
        <Tooltip
          formatter={(value) =>  `₦${Number(value).toLocaleString()}`}
        />
        <Legend />
        <Bar dataKey="revenue" fill="#166534" name="Revenue" radius={[4,4,0,0]} />
        <Bar dataKey="expenses" fill="#86efac" name="Expenses" radius={[4,4,0,0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}