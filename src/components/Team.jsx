import React, { useState, forwardRef } from 'react';
import '../styles/ImgShadow.css';

const Team = forwardRef((props, ref) => {
    // Track which image is being hovered
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => setHoveredIndex(index);
    const handleMouseLeave = () => setHoveredIndex(null);

    const teamMembers = [
        { 
            name: "Márcia Marques", 
            role: ["Project Manager", "Unity Developer"], 
            img: "src/assets/png/marcia.png",
            link: "https://www.linkedin.com/in/marciagmarques/"
        },
        { 
            name: "Rosie Connolly", 
            role: ["Lead Unity Developer"], 
            img: "src/assets/png/rosie.png",
            link: "https://www.linkedin.com/in/rosieconnolly/"
        },
        { 
            name: "Vasiliki Karathanasi", 
            role: ["3D and Audio Designer", "Unity Developer"], 
            img: "src/assets/png/valilo.png",
            link: "https://www.linkedin.com/in/vasiliki-karathanasi/"
        },
        { 
            name: "Audrey Nicole", 
            role: ["3D and Graphic Designer", "Social Media Manager"], 
            img: "src/assets/png/audrey.png",
            link: "https://www.linkedin.com/in/audreynicole/"
        },
        { 
            name: "Brad Lee", 
            role: ["Lead 3D Designer", "Scriptwriter"], 
            img: "src/assets/png/brad.png",
            link: "https://www.linkedin.com/in/brad-lee-5a512a186/"
        },
    ];

    return (
        <>
            <div ref={ref}>
                <p className='py-4 lg:py-8 text-xl lg:px-8'>
                    Our team is made up of both developers and designers.  
                    <b> Márcia</b> is our team leader, project manager and one of the Unity developers specialized in VR. 
                    <b> Rosie</b> leads the development team, having mastered C#. <b>Vasiliki</b> is also one of the developers 
                    as well as a 3D and Audio designer. She designed the Super Mario environment. <b>Audrey</b> is a 3D 
                    and graphic designer, having designed the PacMan room and all branding, as well as being our social 
                    media manager, which allowed us to document our progress throughout this project on Instagram 
                    and YouTube. And, last but not least, <b>Brad</b> is our lead 3D designer and scriptwriter, being 
                    responsible for the Tetris room as well as the main bedroom.
                </p>
            </div>
            
            <div className='flex flex-row flex-wrap justify-center my-8'>
                {teamMembers.map((member, index) => (
                    <div key={index} className='mx-12 flex flex-col items-center mb-8'>
                        <a href={member.link} target="_blank" rel="noopener noreferrer">
                            <img
                                src={member.img}
                                alt={`${member.name} headshot`}
                                className='max-h-64 mb-4'
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    cursor: "pointer",
                                    opacity: hoveredIndex === index ? "0.5" : "1",
                                    transition: "0.3s",
                                }}
                            />
                        </a>
                        <h1 className='text-3xl font-semibold'>{member.name}</h1>
                        {member.role.map((role, i) => (
                            <p key={i} className='text-lilas-0'>{role}</p>
                        ))}
                    </div>
                ))}
            </div>

            <div>
                <p className='py-4 lg:py-8 text-xl lg:px-8'>
                    Doing a virtual reality project challenged us creatively and academically; 
                    from generating ideas, 3D designing the rooms, to programming the game mechanics.
                    Before completing this project, none of the Retroverse team members were familiar 
                    with Unity or C#, which are the software and coding language used. Having started 
                    out as complete virtual reality beginners, we are exceptionally proud to present to 
                    you our final project.
                </p>
                <p className='py-4 lg:py-8 text-xl lg:px-8'>
                    Everything that you experience in the Retroverse is built from scratch; the 3D 
                    models, game narrative, and functionality that has been coded line by line.
                </p>
            </div>

            <div className='flex justify-center my-12'>
                <img src="src/assets/img/team.jpg" alt="team photo" className='max-w-md mb-4 imgframe'/>
            </div>
        </>
    );
});

export default Team;
