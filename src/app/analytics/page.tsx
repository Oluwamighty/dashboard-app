import TrafficChart from "@/components/TrafficChart";
import WeeklySalesChart from "@/components/WeeklySalesChart";
import { trafficSources, weeklySales } from "@/data/mockData";


export default function AnalyticsPage() {
  const totalTraffic = trafficSources.reduce((sum, source) => sum + source.value, 0);
  const totalWeeklySales = weeklySales.reduce((sum, day) => sum + day.sales, 0);
  const bestDay = weeklySales.reduce((best, day) => day.sales > best.sales ? day : best);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-green-900">Analytics</h1>
        <p className="text-gray-400 mt-1">Detailed performance metrics</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white border rounded-lg p-6">
          <p className="text-gray-500 text-sm mb-1">Total Traffic</p>
          <p className="text-2xl font-bold text-green-800">{totalTraffic.toLocaleString()}</p>
          <p className="text-green-600 text-sm mt-1">All sources combined</p>
        </div>
        <div className="bg-white border rounded-lg p-6">
          <p className="text-gray-500 text-sm mb-1">Weekly Sales</p>
          <p className="text-2xl font-bold text-green-800">₦{totalWeeklySales.toLocaleString()}</p>
          <p className="text-green-600 text-sm mt-1">This week total</p>
        </div>
        <div className="bg-white border rounded-lg p-6">
          <p className="text-gray-500 text-sm mb-1">Best Sales Day</p>
          <p className="text-2xl font-bold text-green-800">{bestDay.day}</p>
          <p className="text-green-600 text-sm mt-1">₦{bestDay.sales.toLocaleString()}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-green-800 font-semibold mb-4">Traffic Sources</h2>
          <TrafficChart />
        </div>
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-green-800 font-semibold mb-4">Weekly Sales</h2>
          <WeeklySalesChart />
        </div>
      </div>

      {/* Traffic Breakdown */}
      <div className="bg-white border rounded-lg p-6">
        <h2 className="text-green-800 font-semibold mb-4">Traffic Breakdown</h2>
        <div className="space-y-4">
          {trafficSources.map((source) => (
            <div key={source.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">{source.name}</span>
                <span className="text-green-700 font-medium">
                  {((source.value / totalTraffic) * 100).toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: `${(source.value / totalTraffic) * 100}%`,
                    backgroundColor: source.color
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}