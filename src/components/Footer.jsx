import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer bg-emerald-400 px-10 flex items-center justify-between py-4">
      <div className="right-side flex flex-col">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/public/assets/logo_personaLog-removebg-preview.png"
              alt="logo"
              width={80}
              height={80}
            />
          </Link>
          <Link to="/" className="font-bold text-2xl">
            PersonaLog
          </Link>
        </div>
        <div className="mx-4 ">&copy; personalog.com. All rights reserved.</div>
      </div>
      <div className="left-side mx-4">
        <div className="NavLinks flex justify-between w-[30%] font-bold gap-8">
          <Link to="/" className="hover:text-emerald-100 hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:text-emerald-100 hover:underline">
            About
          </Link>
          <Link to="/documentation" className="hover:text-emerald-100 hover:underline">
            Documentation
          </Link>
          <Link to="/contact" className="hover:text-emerald-100 hover:underline">
            Contact
          </Link>
        </div>
        <div className="Auth flex gap-4 items-center mt-4">
          <Link
            to="/sign-up"
            className="border-2 border-black py-2 px-4 rounded-md font-bold hover:border-emerald-300 hover:bg-[#222222] hover:text-emerald-300"
          >
            Sign Up
          </Link>
          <Link
            to="/sign-in"
            className="border-2 border-black py-2 px-4 rounded-md font-bold hover:border-emerald-300 hover:bg-[#222222] hover:text-emerald-300"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
