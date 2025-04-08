// src/pages/Reports.jsx
import { Download, FileText } from "lucide-react";

const Reports = () => {
  const reportSummary = [
    { label: "Total Payments", value: "₹ 350,000" },
    { label: "Total Merchants", value: "58" },
    { label: "Total Schedules", value: "110" },
  ];

  const recentReports = [
    { id: 1, name: "March 2025 Summary", created: "2025-04-01" },
    { id: 2, name: "Q1 2025 Financial", created: "2025-03-31" },
    { id: 3, name: "Failed Payments Report", created: "2025-03-28" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Reports & Analytics</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {reportSummary.map((item) => (
          <div
            key={item.label}
            className="bg-white p-4 rounded shadow text-center"
          >
            <p className="text-gray-500 text-sm">{item.label}</p>
            <p className="text-xl font-bold">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Reports Table */}
      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2">Report Name</th>
              <th className="text-left px-4 py-2">Created</th>
              <th className="text-left px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {recentReports.map((report) => (
              <tr key={report.id} className="border-t">
                <td className="px-4 py-2">{report.name}</td>
                <td className="px-4 py-2">{report.created}</td>
                <td className="px-4 py-2">
                  <button className="flex items-center gap-1 text-blue-600 hover:underline">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </td>
              </tr>
            ))}
            {recentReports.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center p-4 text-gray-500">
                  No reports available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
