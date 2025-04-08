import { useState } from "react";

const ActiveSchedules = () => {
  const [activeSchedules, setActiveSchedules] = useState([
    { id: 1, name: "Monthly Payment Schedule", date: "2025-04-10", status: "Active" },
    { id: 2, name: "Weekly Payment Schedule", date: "2025-04-12", status: "Active" },
  ]);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Active Schedules</h1>
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-4 py-2">Schedule Name</th>
            <th className="text-left px-4 py-2">Date</th>
            <th className="text-left px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {activeSchedules.map((schedule) => (
            <tr key={schedule.id} className="border-t">
              <td className="px-4 py-2">{schedule.name}</td>
              <td className="px-4 py-2">{schedule.date}</td>
              <td className="px-4 py-2">{schedule.status}</td>
            </tr>
          ))}
          {activeSchedules.length === 0 && (
            <tr>
              <td colSpan="3" className="text-center p-4 text-gray-500">
                No active schedules.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveSchedules;
