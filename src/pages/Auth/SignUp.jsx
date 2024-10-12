import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

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
        navigate('/sign-in')
      } else {
        alert(Resdata.message);
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="flex justify-center items-center w-full h-screen bg-neutral">
      <div className="w-[30%] p-4 bg-primary rounded">
        <h1 className="text-center text-4xl font-bold text-neutral m-4">
          Sign Up
        </h1>
        <form className="flex flex-col gap-4 text-seconday" onSubmit={handleOnSubmit}>
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
            className="text-neutral py-2 px-4 rounded-md border-2 border-neutral font-bold hover:border-primary hover:bg-neutral hover:text-primary"
          >
            Sign Up
          </button>
        </form>
        <div className="p-[1px] bg-neutral my-4"></div>
        <div className="text-center text-white">
          Already have an account? click here{" "}
          <Link to="/sign-in" className="underline text-secondary hover:text-neutral">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
