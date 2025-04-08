// src/pages/Payments.jsx
import { useState } from "react";
import { BadgeCheck, Clock, XCircle } from "lucide-react";

const dummyPayments = [
  {
    id: 1,
    merchant: "Merchant A",
    amount: 1500,
    status: "Success",
    schedule: "Monthly Rent",
    date: "2025-04-01",
  },
  {
    id: 2,
    merchant: "Merchant B",
    amount: 1200,
    status: "Pending",
    schedule: "Insurance Premium",
    date: "2025-04-05",
  },
  {
    id: 3,
    merchant: "Merchant C",
    amount: 800,
    status: "Failed",
    schedule: "Subscription",
    date: "2025-04-03",
  },
];

const statusBadge = {
  Success: <BadgeCheck className="text-green-600 inline" />,
  Failed: <XCircle className="text-red-600 inline" />,
  Pending: <Clock className="text-yellow-600 inline" />,
};

const Payments = () => {
  const [payments] = useState(dummyPayments);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Payments</h1>

      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2">Merchant</th>
              <th className="text-left px-4 py-2">Schedule</th>
              <th className="text-left px-4 py-2">Amount</th>
              <th className="text-left px-4 py-2">Date</th>
              <th className="text-left px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-t">
                <td className="px-4 py-2">{payment.merchant}</td>
                <td className="px-4 py-2">{payment.schedule}</td>
                <td className="px-4 py-2">NPR {payment.amount}</td>
                <td className="px-4 py-2">{payment.date}</td>
                <td className="px-4 py-2 flex items-center space-x-2">
                  {statusBadge[payment.status]}
                  <span>{payment.status}</span>
                </td>
              </tr>
            ))}
            {payments.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
                  No payments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
