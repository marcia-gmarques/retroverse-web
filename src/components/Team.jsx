import React from 'react';
import '../styles/ImgShadow.css'

function Team() {
  return (
    <>
    <div>
        <p className='py-4  lg:py-8 text-xl lg:px-8'>
        Our team is made up of both developers and designers.  
        <b> Márcia</b> is our team leader, project manager and one of the Unity developers specialised in VR. 
        <b> Rosie</b> leads the development team, having mastered C#. <b>Vasiliki</b> is also one of the developers 
        as well as 3D and Audio designer. She designed the Super Mario environment. <b>Audrey</b> is a 3D 
        and graphic designer, having designed the PacMan room and all branding, as well as social 
        media manager, which allowed us to document our progress throughout this project on Instagram 
        and YouTube. And, last but not least, <b>Brad</b> is our lead 3D designer and scriptwriter, being 
        responsible for the Tetris room as well as the main bedroom.
        </p>
    </div>
    <div className='flex flex-row flex-wrap justify-center my-8'>
        <div className='mx-12 flex flex-col items-center mb-8'>
            <img src="src/assets/img/marcia.JPG" alt="marcia headshot" className='max-h-64 mb-4'/>
            <h1 className='text-3xl font-semibold'>Márcia Marques</h1>
            <p className='text-lilas-0'>Project Manager</p>
            <p className='text-lilas-0'>Unity Developer</p>
        </div>
        <div className='mx-12 flex flex-col items-center mb-8'>
            <img src="src/assets/img/marcia.JPG" alt="rosie headshot" className='max-h-64 mb-4'/>
            <h1 className='text-3xl font-semibold'>Rosie Connolly</h1>
            <p className='text-lilas-0'>Lead Unity Developer</p>
        </div>
        <div className='mx-12 flex flex-col items-center mb-8'>
            <img src="src/assets/img/marcia.JPG" alt="vasiliki headshot" className='max-h-64 mb-4'/>
            <h1 className='text-3xl font-semibold'>Vasiliki Karathanasi</h1>
            <p className='text-lilas-0'>3D and Audio Designer</p>
            <p className='text-lilas-0'>Unity Developer</p>
        </div>
        <div className='mx-12 flex flex-col items-center mb-8'>
            <img src="src/assets/img/marcia.JPG" alt="audrey headshot" className='max-h-64 mb-4'/>
            <h1 className='text-3xl font-semibold'>Audrey Nicole</h1>
            <p className='text-lilas-0'>3D and Graphic Designer</p>
            <p className='text-lilas-0'>Social Media Manager</p>
        </div>
        <div className='mx-12 flex flex-col items-center mb-8'>
            <img src="src/assets/img/marcia.JPG" alt="brad headshot" className='max-h-64 mb-4'/>
            <h1 className='text-3xl font-semibold'>Brad Lee</h1>
            <p className='text-lilas-0'>Lead 3D Designer</p>
            <p className='text-lilas-0'>Scriptwriter</p>
        </div>
    </div>
    <div>
        <p className='py-4  lg:py-8 text-xl lg:px-8'>Doing a virtual reality project challenged us creatively and academically; 
            from generating ideas, 3D designing the rooms, to programming the game mechanics.
            Before completing this project, none of the Retroverse team members were familiar 
            with Unity or C#, which are the software and coding language used. Having started 
            out as complete virtual reality beginners, we are exceptionally proud to present to 
            you our final project. 
        </p>
        <p className='py-4 lg:py-8 text-xl lg:px-8'>Everything that you experience in the Retroverse is built from scratch; the 3D 
            models, game narrative, and functionality that has been coded line by line.
        </p>
    </div>
    <div className='flex justify-center my-12'>
        <img src="src/assets/img/team.jpg" alt="team photo"  className='max-w-md mb-4 imgframe'/>
    </div>
    </>    
  )
}

export default Team;