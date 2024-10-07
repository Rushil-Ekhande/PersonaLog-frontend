import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav className="flex justify-between items-center bg-cyan-400 px-10">
        <div className="Logo text-2xl font-bold flex items-center">
          <Link to="/">
            <img
              src="/public/assets/logo_personaLog-removebg-preview.png"
              alt="logo"
              width={80}
              height={80}
            />
          </Link>
          <Link to="/">PersonaLog</Link>
        </div>
        <div className="NavLinks flex justify-between w-[30%] font-bold">
          <Link to="/" className="hover:text-cyan-100 hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:text-cyan-100 hover:underline">
            About
          </Link>
          <Link to="/documentation" className="hover:text-cyan-100 hover:underline">
            Documentation
          </Link>
          <Link to="/contact" className="hover:text-cyan-100 hover:underline">
            Contact
          </Link>
        </div>
        <div className="Auth flex justify-between gap-4 items-center">
          <Link
            to="/sign-up"
            className="border-2 border-black py-2 px-4 rounded-md font-bold hover:border-cyan-300 hover:bg-[#222222] hover:text-cyan-300"
          >
            Sign Up
          </Link>
          <Link
            to="/sign-in"
            className="border-2 border-black py-2 px-4 rounded-md font-bold hover:border-cyan-300 hover:bg-[#222222] hover:text-cyan-300"
          >
            Sign In
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
