import React, { forwardRef } from "react";
import Header from "./Header.jsx";
import Loader from "./Loader.jsx";

const Content = forwardRef((props, ref) => {

  return (
    <>
    <Header />
    
    <div ref={ref} className="cursor-home">
      <Loader />
    {/* <h1 className='font-bovine text-lilas-default mb-12 mt-60'>Project</h1> */}
      <div className="flex flex-row items-center">
        <p className='py-4 text-xl px-4 text-left'>The Retroverse team worked on this project for three 
            months as part of their MSc in Interactive Digital Media. It all 
            started with an idea to create something that is unique, that no one 
            else thought it would be possible given the three month time frame. 
            We wanted to bring together all the things we learnt throughout our 
            course and use it for this project.
        </p>
        <img src="src/assets/png/Screenshot-finalbedroom.png" 
             alt="screenshot of the visual for the final room in the VR game" 
             className='max-w-xl my-12 imgframe mx-4'/>
    </div>
    <div className="flex flex-row items-center">
    <img src="src/assets/img/rendr-reaction-girl.jpeg" 
             alt="girl with virtual reality headset" 
             className='max-w-md my-12 imgframe mx-4'/>
        <p className='py-4 text-xl pl-20 pr-4 text-right'>Doing a virtual reality project challenged us creatively and 
            academically; from generating ideas, 3D designing the rooms, 
            to programming the game mechanics. Before completing this project, 
            none of the Retroverse team members were familiar with Unity or C#, 
            which are the software and coding language used. Having started out 
            as complete virtual reality beginners, we are exceptionally proud 
            to present to you our final project. Everything that you experience 
            in the Retroverse is built from scratch; the 3D models, game narrative, 
            and functionality that has been coded line by line.
        </p>        
    </div>
    </div>
    </>
  );
});

export default Content;
