import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchUsers = async () => {
    const res = await axios.get("/api/users");
    setUsers(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`/api/users/${editingId}`, form);
    } else {
      await axios.post("/api/users", form);
    }
    setForm({ name: "", email: "" });
    setEditingId(null);
    fetchUsers();
  };

  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email });
    setEditingId(user.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/users/${id}`);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">User Management</h1>
      <form className="mb-6 space-y-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editingId ? "Update User" : "Add User"}
        </button>
      </form>

      <table className="min-w-full bg-white border">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-2 border">Name</th>
            <th className="text-left p-2 border">Email</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td className="p-2 border">{u.name}</td>
              <td className="p-2 border">{u.email}</td>
              <td className="p-2 border space-x-2 text-center">
                <button
                  onClick={() => handleEdit(u)}
                  className="text-yellow-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(u.id)}
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

export default Users;
