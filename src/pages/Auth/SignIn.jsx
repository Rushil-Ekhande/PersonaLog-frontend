import React, {useContext, useState} from 'react'
import { Link } from "react-router-dom";
import userContext from "../../contexts/userContext.js"
import axios from "axios";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useContext(userContext);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password
    };
    try {
        const response = await axios.post("http://localhost:8000/user/login-user", data);
        const Resdata = response.data;
        if(Resdata.success == true){
          alert(Resdata.message);
          if(Resdata.payload != null){
            console.log("payload");
            const {token, user} = Resdata.payload;
            setUser(user)
            console.log(token, user);
            if(localStorage.getItem("token")){
              localStorage.removeItem("token");
            }
            localStorage.setItem("token", token);
          }
          console.log(user)
        }else{
          alert(Resdata.message);
        }
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#222222] ">
    <div className="w-[30%] p-4 border-2 border-cyan-300 rounded">
      <h1 className="text-center text-4xl font-bold text-white m-4">
        Sign In
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
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
          Sign In
        </button>
      </form>
      <div className="p-[1px] bg-cyan-300 my-4"></div>
      <div className="text-center text-white">
        Don't have an account yet? click here{" "}
        <Link to="/sign-up" className="underline text-cyan-300">
          Sign up
        </Link>
      </div>
    </div>
  </div>
  )
}

export default SignIn;