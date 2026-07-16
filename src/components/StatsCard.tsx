import { Stat } from "@/types";

export default function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="bg-white border rounded-lg p-6">
      <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
      <p className="text-2xl font-bold text-green-700 mb-2">{stat.value}</p>
      <p className={`text-sm font-medium ${stat.positive ? "text-green-400" : "text-red-400"}`}>
        {stat.change} from last month
      </p>
    </div>
  );
}