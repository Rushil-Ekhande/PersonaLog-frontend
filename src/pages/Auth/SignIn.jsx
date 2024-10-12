import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userContext from "../../contexts/userContext.js";
import axios from "axios";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { client, setClient } = useContext(userContext);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        "http://localhost:8000/user/login-user",
        data
      );
      const Resdata = response.data;
      if (Resdata.success == true) {
        alert(Resdata.message);
        navigate("/dashboard");
        if (Resdata.payload != null) {
          const { token, user } = Resdata.payload;
          setClient(user);

          const doesTokenExists = localStorage.getItem("token");

          if (doesTokenExists) {
            localStorage.removeItem("token");
          }
          localStorage.setItem("token", token);
        }
      } else {
        alert(Resdata.message);
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="flex justify-center items-center w-full h-screen bg-neutral ">
      <div className="w-[30%] p-4 rounded bg-primary shadow-xl">
        <h1 className="text-center text-4xl font-bold text-neutral m-4">
          Sign In
        </h1>
        <form className="flex flex-col gap-5 text-secondary" onSubmit={handleOnSubmit}>
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
            Sign In
          </button>
        </form>
        <div className="p-[1px] bg-neutral my-4"></div>

        <div className="text-center text-white">
          Don't have an account yet? click here{" "}
          <Link to="/sign-up" className="underline text-secondary hover:text-neutral">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
