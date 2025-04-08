import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import axios from "axios";

const Schedules = () => {
  const [schedules, setSchedules] = useState([]);
  const [form, setForm] = useState({
    merchantId: "",
    amount: "",
    frequency: "",
    startDate: "",
    description: "",
  });

  const fetchSchedules = async () => {
    try {
      const res = await axios.get("/api/schedules");
      setSchedules(res.data);
    } catch (error) {
      console.error("Error fetching schedules", error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/schedules", form);
      setForm({ merchantId: "", amount: "", frequency: "", startDate: "", description: "" });
      fetchSchedules();
    } catch (error) {
      console.error("Error creating schedule", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/schedules/${id}`);
      fetchSchedules();
    } catch (error) {
      console.error("Error deleting schedule", error);
    }
  };

  useEffect(() => {
    fetchSchedules();
  }, []);

  return (
    <AdminLayout>
      <h2 className="text-2xl font-semibold mb-4">Schedule Management</h2>

      {/* Form to create new schedule */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded shadow mb-6"
      >
        <input
          type="text"
          name="merchantId"
          placeholder="Merchant ID"
          value={form.merchantId}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
          required
        />
        <select
          name="frequency"
          value={form.frequency}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
          required
        >
          <option value="">Select Frequency</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
        <input
          type="date"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border px-3 py-2 rounded col-span-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 col-span-2"
        >
          Create Schedule
        </button>
      </form>

      {/* Table of schedules */}
      <div className="bg-white shadow rounded">
        <table className="w-full table-auto text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3">Merchant ID</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Frequency</th>
              <th className="p-3">Start Date</th>
              <th className="p-3">Description</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((s) => (
              <tr key={s.id} className="border-b">
                <td className="p-3">{s.merchantId}</td>
                <td className="p-3">{s.amount}</td>
                <td className="p-3">{s.frequency}</td>
                <td className="p-3">{s.startDate?.split("T")[0]}</td>
                <td className="p-3">{s.description}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleDelete(s.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default Schedules;
