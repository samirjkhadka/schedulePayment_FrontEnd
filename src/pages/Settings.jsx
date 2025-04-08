// src/pages/SystemConfig.jsx
import { useState } from "react";

const SystemConfig = () => {
  const [config, setConfig] = useState({
    maintenanceMode: false,
    notificationsEnabled: true,
    paymentRetries: 3,
    defaultCurrency: "NPR",
  });

  const handleToggle = (key) => {
    setConfig((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConfig((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">System Configuration</h1>

      <div className="bg-white rounded shadow p-6 space-y-6 max-w-2xl">
        {/* Maintenance Mode */}
        <div className="flex items-center justify-between">
          <span className="font-medium">Maintenance Mode</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={config.maintenanceMode}
              onChange={() => handleToggle("maintenanceMode")}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-checked:bg-blue-600 rounded-full peer peer-focus:ring-2 ring-offset-2 ring-blue-500 transition-all"></div>
          </label>
        </div>

        {/* Enable Notifications */}
        <div className="flex items-center justify-between">
          <span className="font-medium">Enable Notifications</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={config.notificationsEnabled}
              onChange={() => handleToggle("notificationsEnabled")}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-checked:bg-green-500 rounded-full peer transition-all"></div>
          </label>
        </div>

        {/* Payment Retry Attempts */}
        <div>
          <label className="block font-medium mb-1">Payment Retry Attempts</label>
          <input
            type="number"
            name="paymentRetries"
            value={config.paymentRetries}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded shadow-sm"
          />
        </div>

        {/* Default Currency */}
        <div>
          <label className="block font-medium mb-1">Default Currency</label>
          <select
            name="defaultCurrency"
            value={config.defaultCurrency}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded shadow-sm"
          >
            <option value="NPR">NPR</option>
            <option value="USD">USD</option>
            <option value="INR">INR</option>
          </select>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default SystemConfig;
