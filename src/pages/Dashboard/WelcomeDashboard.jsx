import React, { useContext } from "react";
import userContext from "../../contexts/userContext.js";
import { Link, useNavigate } from "react-router-dom";

function WelcomeDashboard() {
  const { client } = useContext(userContext);
  const navigate = useNavigate();
  const handleOnClick = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      navigate("/");
      alert("Logged Out Successfully");
    } else {
      alert("You arn't logged in");
    }
  };
  return (
    <div className="w-full">
      <div className="flex justify-between pr-8">
        <p className="text-4xl font-bold text-emerald-400">
          Welcome Back {client ? `, ${client.username}` : ""}
        </p>
        <button
          onClick={handleOnClick}
          className="border-2 border-black bg-red-600 py-2 px-4 rounded-md font-bold hover:opacity-70"
        >
          Log Out
        </button>
      </div>

      <div className="p-[1px] bg-emerald-400 my-4"></div>

      <div className="flex justify-evenly p-4 w-full">
      
        <div className="diary-sec border-4 rounded-xl border-emerald-400 p-4 w-[30%]">

          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold tracking-wide text-emerald-400">Diary</p>
            <Link
              to="/sign-in"
              className="border-2 border-black py-1 px-3 rounded-md bg-emerald-400 font-bold hover:border-emerald-300 hover:bg-[#222222] hover:text-emerald-300"
            >
              Create New
            </Link>
          </div>
          <div className="p-[1px] bg-emerald-400 my-4"></div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeDashboard;
