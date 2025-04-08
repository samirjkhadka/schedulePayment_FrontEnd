// components/Layout.jsx
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-100 min-h-screen">
        <Topbar />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
