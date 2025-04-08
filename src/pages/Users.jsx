// src/pages/Users.jsx
import { useState } from "react";

const dummyUsers = [
  { id: 1, name: "Admin One", email: "admin1@example.com", role: "Super Admin" },
  { id: 2, name: "Admin Two", email: "admin2@example.com", role: "Manager" },
];

const Users = () => {
  const [users, setUsers] = useState(dummyUsers);
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setUsers((prev) =>
        prev.map((u) => (u.id === editingId ? { ...formData, id: editingId } : u))
      );
      setEditingId(null);
    } else {
      setUsers((prev) => [...prev, { ...formData, id: Date.now() }]);
    }
    setFormData({ name: "", email: "", role: "" });
  };

  const handleEdit = (user) => {
    setFormData(user);
    setEditingId(user.id);
  };

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">User Management</h1>

      <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded shadow">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border p-2 rounded"
            placeholder="Full Name"
            required
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border p-2 rounded"
            placeholder="Email"
            required
          />
          <input
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="border p-2 rounded"
            placeholder="Role"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editingId ? "Update User" : "Add User"}
        </button>
      </form>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2">Name</th>
              <th className="text-left px-4 py-2">Email</th>
              <th className="text-left px-4 py-2">Role</th>
              <th className="text-left px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="px-4 py-2">{u.name}</td>
                <td className="px-4 py-2">{u.email}</td>
                <td className="px-4 py-2">{u.role}</td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    onClick={() => handleEdit(u)}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(u.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center p-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
