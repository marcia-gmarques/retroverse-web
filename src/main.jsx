import { StrictMode, useRef } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NavBar from "./components/NavBar.jsx";
import Content from "./components/Content.jsx";
import Playthrough from "./components/Playthrough.jsx";
import Team from "./components/Team.jsx";
import Exhibitions from "./components/Exhibitions.jsx";
import Goodbye from "./components/Goodbye.jsx";

const Main = () => {
  // Create refs for each section
  const contentRef = useRef(null);
  const playthroughRef = useRef(null);
  const teamRef = useRef(null);
  const exhibitionsRef = useRef(null);

  return (
    <StrictMode>
      <header className="sticky top-0 flex justify-center items-center">
        {/* Pass refs as props */}
        <NavBar 
          refs={{ 
            content: contentRef, 
            playthrough: playthroughRef, 
            team: teamRef, 
            exhibitions: exhibitionsRef 
          }} 
        />
      </header>  
      <Content ref={contentRef} />
      <Playthrough ref={playthroughRef} />
      <Team ref={teamRef} />
      <Exhibitions ref={exhibitionsRef} />
      <App />
      <Goodbye />
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<Main />);
