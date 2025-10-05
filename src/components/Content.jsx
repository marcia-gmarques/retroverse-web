import React, { forwardRef } from "react";
import Header from "./Header.jsx";
import "../styles/Cursor.css";
import TetrisPieces from "./TetrisPieces.jsx";

const Content = forwardRef((props, ref) => {

  return (
    <>
    <Header />
    
    <div ref={ref} className="cursor-home">

    {/* <h1 className='font-bovine text-lilas-default mb-12 mt-60'>Project</h1> */}

      <div className="flex flex-row items-center">
        <div className="flex flex-col">
          <h1 className='font-bovine text-marinho text-left my-4'>The Idea</h1>
          <p className='my-4 text-l text-left'>The Retroverse team worked on this project for three 
            months as part of their MSc in Interactive Digital Media. It all 
            started with an idea to create something that is unique, that no one 
            else thought it would be possible given the three month time frame. 
            We wanted to bring together all the things we learnt throughout our 
            course and use it for this project.
          </p>
        </div>
        <div className="flex flex-col ml-12">
            <img src="src/assets/png/Screenshot-finalbedroom.png" 
              alt="screenshot of the visual for the final room in the VR game" 
              className='max-w-xl my-12 imgframe mx-4'/>
        </div>
      </div>

    
    <div className="flex flex-row items-center">
      <div className="flex flex-col ">
            <img src="src/assets/png/Screenshot-pacman.png" 
              alt="screenshot of visual of the pacman environment in the VR game" 
              className='max-w-l my-12 imgframe mx-4'/>
        </div>
        <div className="flex flex-col ml-12">
          <h1 className='font-bovine text-marinho text-left my-4'>The Challenge</h1>
          <p className='my-4 text-l text-left'>None of us had worked with Unity or C# 
            before this project. From the ground up, we learned how to design 3D 
            environments, write scripts, and bring a narrative to life in VR.
          </p>
        </div>
      </div>


    <div className="flex flex-row items-center">
        <div className="flex flex-col">
          <h1 className='font-bovine text-marinho text-left my-4'>The Outcome</h1>
          <p className='my-4 text-l text-left'>Every 3D model, every line of code, 
            and every mechanic in Retroverse has been built from scratch. We’re 
            proud to present this final project, born from equal parts 
            creativity, persistence, and teamwork.
          </p>
        </div>
        <div className="flex flex-col ml-12">
            <img src="src/assets/png/Screenshot-bedroom.png" 
              alt="screenshot of the visual for the initial room in the VR game" 
              className='max-w-xl my-12 imgframe mx-4'/>
        </div>
      </div>
    </div>
    <TetrisPieces />
    </>
  );
});

export default Content;
