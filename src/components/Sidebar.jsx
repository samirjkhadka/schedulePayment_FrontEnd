// components/Sidebar.jsx
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Merchants", path: "/merchants" },
    { name: "Schedules", path: "/schedules" },
    { name: "Users", path: "/users" },
    { name: "Payments", path: "/payments" },
    { name: "Reports", path: "/reports" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4 space-y-6">
      <h2 className="text-xl font-bold">Admin Panel</h2>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-gray-700 ${
                isActive ? "bg-gray-700 font-semibold" : ""
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
