import React, { forwardRef, useState, useEffect } from "react";
import '../styles/BlinkingCursor.css';


const Content = forwardRef((props, ref) => {
  const videoGames = ["Tetris.", "PacMan.", "Super Mario."];
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = videoGames[wordIndex];

    if (isDeleting) {
      // Deleting characters
      if (charIndex > 0) {
        setTimeout(() => setCharIndex(charIndex - 1), 50);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % videoGames.length);
      }
    } else {
      // Typing characters
      if (charIndex < currentWord.length) {
        setTimeout(() => setCharIndex(charIndex + 1), 100);
      } else {
        setTimeout(() => setIsDeleting(true), 1500);
      }
    }

    setDisplayText(currentWord.substring(0, charIndex));
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <>
    <div ref={ref}>
    <h1 className="text-5xl font-semibold py-32 leading-normal">
          A Virtual Reality experience that takes you through the grief of losing
          a loved one and immerses you in the nostalgia of iconic video games like{" "}
          <span className="text-[#FFD32C]">{displayText}</span>
          <span className="blinking-cursor">|</span>
        </h1>
    </div>
    <div>
        <p className='py-4 text-xl'>The Retroverse team worked on this project for three 
            months as part of their MSc in Interactive Digital Media. It all 
            started with an idea to create something that is unique, that no one 
            else thought it would be possible given the three month time frame. 
            We wanted to bring together all the things we learnt throughout our 
            course and use it for this project.
        </p>
        <img src="src/assets/png/Screenshot-finalbedroom.png" 
             alt="screenshot of the visual for the final room in the VR game" 
             className='max-w-xl my-12 imgframe mx-auto'/>
    </div>
    <div>
        <p className='py-4 text-xl'>Doing a virtual reality project challenged us creatively and 
            academically; from generating ideas, 3D designing the rooms, 
            to programming the game mechanics. Before completing this project, 
            none of the Retroverse team members were familiar with Unity or C#, 
            which are the software and coding language used. Having started out 
            as complete virtual reality beginners, we are exceptionally proud 
            to present to you our final project. Everything that you experience 
            in the Retroverse is built from scratch; the 3D models, game narrative, 
            and functionality that has been coded line by line.
        </p>        
        <img src="src/assets/img/rendr-reaction-girl.jpeg" 
             alt="girl with virtual reality headset" 
             className='max-w-md my-12 imgframe mx-auto'/>
    </div>
    </>
  );
});

export default Content;
