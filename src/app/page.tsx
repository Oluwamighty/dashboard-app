import { stats, monthlyRevenue, userGrowth, recentTransactions } from "@/data/mockData";
import StatCard from "../components/StatsCard";
import RevenueChart from "@/components/RevenueChart";
import UserGrowthChart from "@/components/UserGrowthChart";


export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-green-900">Dashboard Overview</h1>
        <p className="text-gray-400 mt-1">Welcome back, Azeez 👋</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>

      {/* Charts will go here */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-green-800 font-semibold mb-4">Monthly Revenue</h2>
          <RevenueChart />
        </div>
        <div className="bg-white border  rounded-lg p-6">
          <h2 className="text-green-800 font-semibold mb-4">User Growth</h2>
          <UserGrowthChart />
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white border rounded-lg p-6 overflow-x-auto">
        <h2 className="bg-green-800 text-white p-2 rounded-2xl font-semibold mb-4">Recent Transactions</h2>
        <table className="w-full">
          <thead>
            <tr className="text-gray-600 text-xs md:text-sm border-b border-gray-300">
              <th className="text-left pb-3">Name</th>
              <th className="text-left pb-3 hidden md:table-cell">Email</th>
              <th className="text-left pb-3">Amount</th>
              <th className="text-left pb-3">Status</th>
              <th className="text-left pb-3 hidden md:table-cell">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.slice(0, 5).map((tx) => (
              <tr key={tx.id} className="border-b border-gray-300 text-sm">
                <td className="py-3 text-green-700">{tx.name.split(" ")[0]}</td>
                <td className="py-3 text-gray-400 hidden md:table-cell">{tx.email.split("@")[0].slice(0, 1)}...@..{tx.email.split("@")[1].slice(-3)}</td>
                <td className="py-3 text-green-700">₦{tx.amount.toLocaleString()}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    tx.status === "completed" ? "bg-green-900 text-green-400" :
                    tx.status === "pending" ? "bg-yellow-900 text-yellow-400" :
                    "bg-red-900 text-red-400"
                  }`}>
                    {tx.status}
                  </span>
                </td>
                <td className="py-3 text-gray-400 hidden md:table-cell">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}