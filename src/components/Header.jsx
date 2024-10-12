import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav className="flex justify-between items-center bg-primary px-10 py-4">
        <div className="Logo text-2xl font-bold flex items-center text-neutral">
          {/* <Link to="/">
            <img
              src="/public/assets/logo_personaLog-removebg-preview.png"
              alt="logo"
              width={80}
              height={80}
            />
          </Link> */}
          <Link to="/">PersonaLog</Link>
        </div>
        <div className="NavLinks flex justify-between w-[30%] font-bold text-neutral">
          <Link to="/" className="text-neutral hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/documentation" className=" hover:underline">
            Documentation
          </Link>
          <Link to="/contact" className=" hover:underline">
            Contact
          </Link>
        </div>
        <div className="Auth flex justify-between gap-4 items-center text-neutral">
          <Link
            to="/sign-up"
            className="border-2 border-neutral py-2 px-4 rounded-md font-bold hover:border-primary hover:bg-neutral hover:text-primary"
          >
            Sign Up
          </Link>
          <Link
            to="/sign-in"
            className="border-2 border-neutral py-2 px-4 rounded-md font-bold hover:border-primary hover:bg-neutral hover:text-primary"
          >
            Sign In
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
