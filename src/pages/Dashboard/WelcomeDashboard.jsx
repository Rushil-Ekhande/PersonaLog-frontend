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
        <p className="text-4xl font-bold text-primary">
          Welcome Back {client ? `, ${client.username}` : ""}
        </p>
        <button
          onClick={handleOnClick}
          className="bg-primary text-neutral py-2 px-4 rounded-md border-2 border-neutral font-bold hover:border-2 hover:border-primary hover:bg-neutral hover:text-primary"
        >
          Log Out
        </button>
      </div>

      <div className="p-[1px] bg-primary my-4"></div>

      <div className="flex justify-evenly p-4 w-full">
      
        <div className="diary-sec rounded-xl bg-primary p-4 w-[30%]">

          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold tracking-wide text-neutral">Diary</p>
            <Link
              to="/sign-in"
              className=" text-neutral border-2 border-neutral py-2 px-4 rounded-md font-bold hover:border-primary hover:bg-neutral hover:text-primary"
            >
              Create New
            </Link>
          </div>
          <div className="p-[1px] bg-neutral my-4"></div>
          <div className="">

          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeDashboard;
