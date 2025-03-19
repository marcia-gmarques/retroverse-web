import React from "react";
// import { Typed } from "react-typed";


const Content = () => {
  return (
    <>
    <div>
      <p className="text-5xl font-semibold py-32 leading-normal">
        A Virtual Reality experience that takes you through the grief of losing
        a loved one and immerses you in the nostalgia of iconic video games like
      </p>
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
};

export default Content;
