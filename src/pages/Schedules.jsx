import { useState } from "react";

const Schedules = () => {
  const [schedules, setSchedules] = useState([
    { id: 1, name: "Monthly Payment Schedule", date: "2025-04-10", status: "Active" },
    { id: 2, name: "Weekly Payment Schedule", date: "2025-04-12", status: "Active" },
    { id: 3, name: "Quarterly Payment Schedule", date: "2025-06-15", status: "Expired" },
  ]);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar (responsive for mobile) */}
      <div className="md:w-64 md:h-full bg-gray-800 text-white p-4">
        {/* Sidebar content */}
        <h2 className="text-lg font-semibold">Schedules</h2>
        {/* other sidebar content */}
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 md:ml-64">
        <h1 className="text-2xl font-semibold mb-6">Schedules</h1>
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2">Schedule Name</th>
              <th className="text-left px-4 py-2">Date</th>
              <th className="text-left px-4 py-2">Status</th>
              <th className="text-left px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((schedule) => (
              <tr key={schedule.id} className="border-t">
                <td className="px-4 py-2">{schedule.name}</td>
                <td className="px-4 py-2">{schedule.date}</td>
                <td className="px-4 py-2">{schedule.status}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:underline">Edit</button>
                </td>
              </tr>
            ))}
            {schedules.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center p-4 text-gray-500">
                  No schedules available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedules;
