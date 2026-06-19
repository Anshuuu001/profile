import { useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import CreatorDashboard from "../components/dashboard/CreatorDashboard";

function DashboardLayout({ children }) {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-[#050816] text-white">

      {/* SIDEBAR */}
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <Topbar
          toggleSidebar={() =>
            setIsSidebarOpen(!isSidebarOpen)
          }
        />

        {/* CONTENT */}
        <div className="p-6 md:p-10">

          {children ? children : (
            <CreatorDashboard />
          )}

        </div>

      </div>

    </div>
  );
}

export default DashboardLayout;