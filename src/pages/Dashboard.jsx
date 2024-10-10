import React, { useContext } from "react";
import userContext from "../contexts/userContext.js";
import { Outlet } from "react-router-dom";
import DashboardSideNav from "../components/DashboardSideNav.jsx";

function Dashboard() {
  const { client } = useContext(userContext);
  return (
    <div className="w-full h-screen bg-[#2e2e2e] flex gap-x-4">
      <DashboardSideNav/>
      <div className="main-dashboard p-4 w-full">
        <Outlet/>
      </div>
    </div>
  );
}

export default Dashboard;
