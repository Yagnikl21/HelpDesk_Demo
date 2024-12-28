import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const handleLogin = () => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
         (u) => u.username === username && u.password === password
      );

      if (user) {
         localStorage.setItem("authToken", "fake-jwt-token");
         navigate("/dashboard");
      } else {
         alert("Invalid username or password!");
      }
   };

   return (
      <div className="w-screen h-screen bg-[#55D6C2] flex items-center justify-center">
         <div className="bg-[#EFEDED80] rounded-lg shadow-md p-8 px-16 w-[500px] gap-4 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-center italic mb-6">Helpdesk System</h1>
            <input
               type="text"
               className="w-full h-10 p-2 border border-gray-400 mb-4"
               placeholder="Username"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
            />
            <input
               type="password"
               className="w-full h-10 p-2 border border-gray-400 mb-4"
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
            <button
               onClick={handleLogin}
               className="min-w-[160px] py-2 bg-[#03CC17] text-white font-bold rounded-lg"
            >
               Sign In
            </button>
            <div className="w-full flex justify-between mt-4">
               <a href="/forgot-password" className="text-red-600">Forgot Password?</a>
               <a href="/signup" className="">Sign Up</a>
            </div>
         </div>
      </div>
   );
};

export default Login;
