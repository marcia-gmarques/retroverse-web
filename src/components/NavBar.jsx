// import React, { useState } from "react";
import "../styles/NavBar.css";

const NavBar = ( props ) => {
  

  return (
    <div className="flex justify-center w-full font-bovine bg-gradient-to-b from-[#120926] via-[#120926ee] to-transparent">
      <ul className="flex space-x-10 py-4">
        <li
          onClick={() => props.onSectionChange("project")}
          className={`nav-item cursor-pointer p-9 ${props.activeSection === "project" ? "text-lilas-default" : "text-marinho-0 hover:text-lilas-hover"}`}
        >
          Project
        </li>
        <li
          onClick={() => props.onSectionChange("playthrough")}
          className={`nav-item cursor-pointer p-9 ${props.activeSection === "playthrough" ? "text-lilas-default" : "text-marinho-0 hover:text-lilas-hover"}`}
        >
          Play-through
        </li>
        <li
          onClick={() => props.onSectionChange("team")}
          className={`nav-item cursor-pointer p-9 ${props.activeSection === "team" ? "text-lilas-default" : "text-marinho-0 hover:text-lilas-hover"}`}
        >
          Our Team
        </li>
        <li
          onClick={() => props.onSectionChange("exhibitions")}
          className={`nav-item cursor-pointer p-9 ${props.activeSection === "exhibitions" ? "text-lilas-default" : "text-marinho-0 hover:text-lilas-hover"}`}
        >
          Exhibitions
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
