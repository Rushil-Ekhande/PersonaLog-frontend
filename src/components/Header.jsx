import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav className="flex justify-between items-center bg-white p-4 px-6">
        <div className="Logo text-2xl font-bold">PersonaLog</div>
        <div className="NavLinks flex justify-between w-[30%]">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/documentation">Documentation</Link>
            <Link to="/contact">Contact</Link>
        </div>
        <div className="Auth flex justify-between gap-4">
            <Link to="/sign-up">Sign Up</Link>
            <Link to="/sign-in">Sign In</Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
