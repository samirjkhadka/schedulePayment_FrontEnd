// components/Topbar.jsx
import { getUser, logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const user = getUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center bg-white px-6 py-3 border-b shadow-sm">
      <span className="text-lg font-medium">Welcome, {user?.email}</span>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Topbar;
