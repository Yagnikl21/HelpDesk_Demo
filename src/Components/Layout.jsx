import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
   return (
      <div className="flex flex-col h-screen">
         <Navbar />
         <div className="flex flex-grow">
            <Sidebar />
            <div className="flex flex-col w-full">
               <main className="flex-grow bg-gray-100 p-6">{children}</main>
               <Footer />
            </div>
         </div>
      </div>
   );
};

export default Layout;
