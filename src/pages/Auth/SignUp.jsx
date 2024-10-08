import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username,
      email,
      password,
    };
    try {
      const response = await axios.post(
        "http://localhost:8000/user/register-user",
        data
      );
      const Resdata = response.data;
      if (Resdata.success == true) {
        alert(Resdata.message);
      } else {
        alert(Resdata.message);
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#222222] ">
      <div className="w-[30%] p-4 border-2 border-cyan-300 rounded">
        <h1 className="text-center text-4xl font-bold text-white m-4">
          Sign Up
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username...."
            className="border-none outline-none py-2 px-4 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email...."
            className="border-none outline-none py-2 px-4 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password...."
            className="border-none outline-none py-2 px-4 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className=" py-2 px-4 rounded-md font-bold bg-cyan-300 border-2 border-[#222222] hover:border-cyan-300 hover:bg-[#222222] hover:text-cyan-300"
          >
            Sign Up
          </button>
        </form>
        <div className="p-[1px] bg-cyan-300 my-4"></div>
        <div className="text-center text-white">
          Already have an account? click here{" "}
          <Link to="/sign-in" className="underline text-cyan-300">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
