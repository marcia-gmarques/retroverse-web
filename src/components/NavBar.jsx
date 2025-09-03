import React, { useState } from "react";
import "../styles/NavBar.css";

const NavBar = ({ refs }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  const styling = {
    padding: "2.5rem",
    cursor: isHover ? "pointer" : "default",
  };

  // Scroll to section using ref
  const handleScroll = (sectionRef) => {
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Hide current section and show next one
  const handleSectionChange = (sectionRef) => {
    if (sectionRef?.current) {
      // sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex justify-center w-full font-bovine bg-gradient-to-b from-[#120926] via-[#120926ee] to-transparent">
      <ul className="flex space-x-10 py-4">
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={styling}
          onClick={() => handleScroll(refs.content)}
          className="nav-item"
        >
          Project
        </li>
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={styling}
          onClick={() => handleSectionChange(refs.playthrough)}
          className="nav-item"
        >
          Play-through
        </li>
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={styling}
          onClick={() => handleScroll(refs.team)}
          className="nav-item"
        >
          Our Team
        </li>
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={styling}
          onClick={() => handleScroll(refs.exhibitions)}
          className="nav-item"
        >
          Exhibitions
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
