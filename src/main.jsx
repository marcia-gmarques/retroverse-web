import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NavBar from "./components/NavBar.jsx";
import Content from "./components/Content.jsx";
import Playthrough from "./components/Playthrough.jsx";
import Team from "./components/Team.jsx";
import Exhibitions from "./components/Exhibitions.jsx";
import Goodbye from "./components/Goodbye.jsx";

export const Main = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState("project");

  const handleSectionChange = (section) => {
    setActiveSection(section);
    console.log("Active section changed to:", section);
  }

  return (
    <StrictMode>
      <header className="sticky top-0 flex justify-center items-center">
        <NavBar onSectionChange={handleSectionChange} activeSection={activeSection}  />
      </header> 
      {activeSection === "project" && <Content />}
      {activeSection === "playthrough" && <Playthrough />}
      {activeSection === "team" && <Team />}
      {activeSection === "exhibitions" && <Exhibitions />}
      <App />
      <Goodbye />
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<Main />);
