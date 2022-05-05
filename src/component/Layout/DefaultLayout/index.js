import React from "react";
import Header from "../components/Header";
import SideBar from "./SideBar";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <SideBar />
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
