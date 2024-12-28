import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");
   const navigate = useNavigate();

   const handleSignup = () => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      if (users.find((u) => u.username === username)) {
         alert("Username already exists!");
         return;
      }

      users.push({ username, password, email });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful! Please login.");
      navigate("/login");
   };

   return (
      <div className="w-screen h-screen bg-[#55D6C2] flex items-center justify-center">
         <div className="bg-[#EFEDED80] rounded-lg shadow-md p-8 px-16 w-[500px] gap-4 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-center italic">Helpdesk System</h1>
            <p className="text-center text-lg mb-4">Sign up here</p>
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
            <input
               type="email"
               className="w-full h-10 p-2 border border-gray-400 mb-4"
               placeholder="Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            <button
               onClick={handleSignup}
               className="min-w-[160px] py-2 bg-[#296EF2] text-white font-bold rounded-lg"
            >
               Sign Up
            </button>
            <div className="w-full flex justify-between mt-4">
               <a href="/forgot-password" className="text-red-600">Forgot Password?</a>
               <a href="/login" className="text">Sign In</a>
            </div>
         </div>
      </div>
   );
};

export default Signup;
