'use client'
import { useState } from "react";

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    name: "Azeez Olawale",
    email: "olawaleojo42@gmail.com",
    role: "Admin",
    phone: "08105978632",
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    pushNotifications: false,
    weeklyReport: true,
    transactionAlerts: true,
  });

  const [saved, setSaved] = useState(false);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-green-900">Settings</h1>
        <p className="text-gray-400 mt-1">Manage your account preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Profile Settings */}
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-green-800 font-semibold mb-6">Profile Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                className="w-full border text-gray-900 border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                className="w-full border text-gray-900 border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Role</label>
              <input
                type="text"
                name="role"
                value={profile.role}
                onChange={handleProfileChange}
                className="w-full border text-gray-900 border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleProfileChange}
                className="w-full border text-gray-900 border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Success message */}
            {saved && (
              <p className="text-green-600 text-sm font-medium">
                ✅ Settings saved successfully!
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              Save Changes
            </button>
          </form>
        </div>

        {/* Notification Settings */}
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-green-800 font-semibold mb-6">Notification Preferences</h2>
          <div className="space-y-4">
            {Object.entries(notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <p className="text-gray-700 text-sm font-medium capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    {key === "emailAlerts" && "Receive alerts via email"}
                    {key === "pushNotifications" && "Browser push notifications"}
                    {key === "weeklyReport" && "Weekly summary report"}
                    {key === "transactionAlerts" && "Alerts for every transaction"}
                  </p>
                </div>
                {/* Toggle Switch */}
                <button
                  onClick={() => handleToggle(key as keyof typeof notifications)}
                  className={`relative w-11 h-6 rounded-full transition-colors ${
                    value ? "bg-green-600" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`absolute top-1 left-0 ml-0.5  w-4 h-4 bg-white rounded-full shadow transition-transform ${
                      value ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}