import React, { useContext } from "react";
import userContext from "../contexts/userContext.js";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Dashboard() {
  const { client } = useContext(userContext);
  return (
    <div className="w-full h-screen bg-[#222222] flex gap-x-4">
      <div className="side-nav w-[15%] p-4 bg-emerald-600">
        <nav className="flex flex-col gap-8 p-4">
            <div className="">
                <Link to="/dashboard" className="flex items-center text-white font-bold gap-2">
                    <img src="public/assets/home.png" alt="Home" height={30} width={30}/> Cafe
                </Link>
            </div>
            <div>
                <Link to="/dashboard/diary">Diary</Link>
            </div>
            <div>
                <Link to="/dashboard/page">Pages</Link>
            </div>
            <div>
                <Link to="/dashboard/person">Person</Link>
            </div>
            <div>
                <Link to="/dashboard/profile">Profile</Link>
            </div>
        </nav>
      </div>
      <div className="main-dashboard">
      <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
