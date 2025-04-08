import { useState } from "react";

const ActiveMerchants = () => {
  const [activeMerchants, setActiveMerchants] = useState([
    { id: 1, name: "Merchant A", status: "Active" },
    { id: 2, name: "Merchant B", status: "Active" },
  ]);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Active Merchants</h1>
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-4 py-2">Merchant Name</th>
            <th className="text-left px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {activeMerchants.map((merchant) => (
            <tr key={merchant.id} className="border-t">
              <td className="px-4 py-2">{merchant.name}</td>
              <td className="px-4 py-2">{merchant.status}</td>
            </tr>
          ))}
          {activeMerchants.length === 0 && (
            <tr>
              <td colSpan="2" className="text-center p-4 text-gray-500">
                No active merchants.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveMerchants;
