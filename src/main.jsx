import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NavBar from "./components/NavBar.jsx";
import Content from "./components/Content.jsx";
import Playthrough from "./components/Playthrough.jsx";
import Team from "./components/Team.jsx";
import Exhibitions from "./components/Exhibitions.jsx";
import Loader from "./components/Loader.jsx";

export const Main = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState("project");
  const [startExperience, setStartExperience] = useState(false);

  //Function to handle start screen and show main content
  const handleStartExperience = () => {
    setStartExperience(true);
  }

  // Function to handle section change
  const handleSectionChange = (section) => {
    setActiveSection(section);
    console.log("Active section changed to:", section);
  }

  //if startExperience is false, show Loader component (so people have not initiated the experience), else show main content
  return !startExperience ? (
    <Loader onStart={handleStartExperience}/>
  ) : (
    <StrictMode>
      <header className="sticky top-0 flex justify-center items-center">
        <NavBar onSectionChange={handleSectionChange} activeSection={activeSection}  />
      </header> 
      {activeSection === "project" && <Content />}
      {activeSection === "playthrough" && <Playthrough />}
      {activeSection === "team" && <Team />}
      {activeSection === "exhibitions" && <Exhibitions />}
      <App />
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<Main />);
