import React, { useState, useEffect } from "react";
import '../styles/BlinkingCursor.css';

const Header = () => {
  const videoGames = ["Tetris.", "PacMan.", "Super Mario."];
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = videoGames[wordIndex];

    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex(charIndex - 1), 50);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % videoGames.length);
      }
    } else {
      if (charIndex < currentWord.length) {
        setTimeout(() => setCharIndex(charIndex + 1), 100);
      } else {
        setTimeout(() => setIsDeleting(true), 1500);
      }
    }

    setDisplayText(currentWord.substring(0, charIndex));
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div>
      <h1 className="text-5xl font-semibold py-32 leading-normal">
        A Virtual Reality experience that takes you through the grief of losing
        a loved one and immerses you in the nostalgia of iconic video games like {" "}
        <span className="text-[#FFD32C]">{displayText}</span>
        <span className="blinking-cursor">|</span>
      </h1>
      <div className="flex justify-center items-center mb-20">
        <img src="src/assets/png/ghost-red.png" 
             alt="pacman red ghost" 
             className='h-10 mx-4'/>
        <img src="src/assets/png/mario-mushroom.png" 
             alt="super mario mushroom" 
             className='h-10 mx-4'/>
        <img src="src/assets/png/tetris-block-yellow.png" 
             alt="tetris block yellow" 
             className='h-10 mx-4'/>
        <img src="src/assets/png/ghost-pink.png" 
             alt="pacman pink ghost" 
             className='h-10 mx-4'/>
        <img src="src/assets/png/question-box.png" 
             alt="super mario question box" 
             className='h-10 mx-4'/>
        <img src="src/assets/png/tetris-block-orange.png" 
             alt="tetris block orange" 
             className='h-10 mx-4'/>
        <img src="src/assets/png/ghost-red.png" 
             alt="pacman red ghost" 
             className='h-10 mx-4'/>       
      </div>
    </div>
  );
};

export default Header;
