import React, { useEffect, useState } from "react";
import axios from "axios";

const Merchants = () => {
  const [merchants, setMerchants] = useState([]);
  const [form, setForm] = useState({ name: "", contact: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchMerchants = async () => {
    const res = await axios.get("/api/merchants");
    setMerchants(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`/api/merchants/${editingId}`, form);
    } else {
      await axios.post("/api/merchants", form);
    }
    setForm({ name: "", contact: "" });
    setEditingId(null);
    fetchMerchants();
  };

  const handleEdit = (merchant) => {
    setForm({ name: merchant.name, contact: merchant.contact });
    setEditingId(merchant.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/merchants/${id}`);
    fetchMerchants();
  };

  useEffect(() => {
    fetchMerchants();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Merchant Management</h1>
      <form className="mb-6 space-y-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Contact"
          value={form.contact}
          onChange={(e) => setForm({ ...form, contact: e.target.value })}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {editingId ? "Update Merchant" : "Add Merchant"}
        </button>
      </form>

      <table className="min-w-full bg-white border">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-2 border">Name</th>
            <th className="text-left p-2 border">Contact</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {merchants.map((m) => (
            <tr key={m.id}>
              <td className="p-2 border">{m.name}</td>
              <td className="p-2 border">{m.contact}</td>
              <td className="p-2 border space-x-2 text-center">
                <button
                  onClick={() => handleEdit(m)}
                  className="text-yellow-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(m.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Merchants;
