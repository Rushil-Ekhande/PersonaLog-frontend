import React, { useState } from "react";
import { Link } from "react-router-dom";

function DashboardSideNav() {
    const [hidden, setHidden] = useState(false);
    const handleOnClick = () => {
        setHidden(prev => !prev);
    }
  return (
    <>
        <div className={`${hidden ? "hidden " : ""} side-nav w-[15%] p-4 bg-emerald-600 flex flex-col items-center border-y-2 border-black`}>
      <nav className="flex flex-col gap-8 p-4 w-[120%]">
        <div className="">
          <Link
            to="/dashboard"
            className="flex items-center text-white font-bold gap-2 hover:opacity-75 active:opacity-50"
          >
            <img
              src="public/assets/home.png"
              alt="Home"
              height={30}
              width={30}
            />{" "}
            Cafe
          </Link>
        </div>
        <div>
          <Link
            to="/dashboard/diary"
            className="flex items-center text-white font-bold gap-2 hover:opacity-75 active:opacity-50"
          >
            <img
              src="public/assets/diary.png"
              alt="Home"
              height={30}
              width={30}
            />{" "}
            Diary
          </Link>
        </div>
        <div>
          <Link
            to="/dashboard/page"
            className="flex items-center text-white font-bold gap-2 hover:opacity-75 active:opacity-50"
          >
            <img
              src="public/assets/page.png"
              alt="Home"
              height={30}
              width={30}
            />{" "}
            Pages
          </Link>
        </div>
        <div>
          <Link
            to="/dashboard/person"
            className="flex items-center text-white font-bold gap-2 hover:opacity-75 active:opacity-50"
          >
            <img
              src="public/assets/person.png"
              alt="Home"
              height={30}
              width={30}
            />{" "}
            Person
          </Link>
        </div>
        <div>
          <Link
            to="/dashboard/profile"
            className="flex items-center text-white font-bold gap-2 hover:opacity-75 active:opacity-50"
          >
            <img
              src="public/assets/profile.png"
              alt="Home"
              height={30}
              width={30}
            />{" "}
            Profile
          </Link>
        </div>
      </nav>
      <div className="w-full m-auto flex justify-center items-center">
        <button onClick={handleOnClick} className="w-full border-2 border-black py-2 px-4 rounded-md font-bold hover:border-emerald-300 hover:bg-[#222222] hover:text-emerald-300">
          Close Menu
        </button>
      </div>
    </div>
    <div className={`${hidden ?  "" : "hidden "} bg-emerald-600 py-4 px-2 border-y-2 border-black`} >
        <button onClick={handleOnClick} className="hover:opacity-60 active:opacity-50">
        <img
              src="public\assets\menu-arrow.png"
              alt="menu-arrow"
              height={30}
              width={30}
            />
        </button>
    </div>
    </>

  );
}

export default DashboardSideNav;
