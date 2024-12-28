import React from "react";
import LogoutButton from "../assets/Logout_button.png";

const Navbar = () => {
   return (
      <div className="w-full h-16 bg-[#55D6C2] flex items-center justify-between px-6">
         <h1 className="text-white text-3xl font-bold italic">Helpdesk</h1>
         <button
            onClick={() => {
               localStorage.removeItem("authToken");
               window.location.reload();
            }}
         >
            <img src={LogoutButton} alt="LogOut"/>
         </button>
      </div>
   );
};

export default Navbar;
