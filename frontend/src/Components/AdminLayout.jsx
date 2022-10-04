import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

import React from "react";
import Sidebar from "../Components/SideBar";

function AdminLayout() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default AdminLayout;
