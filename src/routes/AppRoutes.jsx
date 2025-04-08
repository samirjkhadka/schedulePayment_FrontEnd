// routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../utils/PrivateRoute";
import Layout from "../components/AdminLayout";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Merchants from "../pages/Merchants";
import Schedules from "../pages/Schedules";
import Users from "../pages/Users";
import Payments from "../pages/Payments";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="*"
        element={
          <PrivateRoute>
            <Layout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/merchants" element={<Merchants />} />
                <Route path="/schedules" element={<Schedules />} />
                <Route path="/users" element={<Users />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Layout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
