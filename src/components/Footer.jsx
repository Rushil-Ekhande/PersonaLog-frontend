import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer bg-primary px-10 flex items-center justify-between py-6">
      <div className="right-side flex flex-col">
        <div className="flex items-center">
          <Link to="/">
            {/* <img
              src="/public/assets/logo_personaLog-removebg-preview.png"
              alt="logo"
              width={80}
              height={80}
            /> */}
          </Link>
          <Link to="/" className="font-bold text-2xl text-neutral">
            PersonaLog
          </Link>
        </div>
        <div className=" text-neutral">&copy; personalog.com. All rights reserved.</div>
      </div>
      <div className="left-side mx-4">
        <div className="NavLinks flex justify-between w-[30%] font-bold text-neutral gap-8">
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
        <div className="Auth flex gap-4 items-center mt-4 text-neutral">
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
      </div>
    </div>
  );
}

export default Footer;
