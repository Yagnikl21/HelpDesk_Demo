import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../Routes/routesConfig";

const Sidebar = () => {
   return (
      <div className="w-64 h-full bg-[#6A676736] flex flex-col px-3 py-4">
         <div className="flex flex-col">
            {routes.map((route) => (
               <NavLink
                  key={route.path}
                  to={route.path}
                  className="flex items-center p-3 rounded-lg hover:bg-[#5a585836] transition"
                  activeClassName="bg-gray-700"
               >
                  <img src={route.icon} alt={route.name} className="mr-4 w-6 h-6" />
                  <p className="font-semibold">{route.name}</p>
               </NavLink>
            ))}
         </div>
      </div>
   );
};

export default Sidebar;
