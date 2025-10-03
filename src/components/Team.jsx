import React, { forwardRef, useRef, useEffect } from 'react';
import '../styles/ImgShadow.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Team = forwardRef((props, ref) => {
    // Refs for each card
    const cardRefs = useRef([]);

    const handleMouseEnter = (index) => {
        const card = cardRefs.current[index];
        if (card) {
            gsap.to(card, { rotateY: 180, duration: 0.5, ease: 'power2.inOut' });
        }
    };
    const handleMouseLeave = (index) => {
        const card = cardRefs.current[index];
        if (card) {
            gsap.to(card, { rotateY: 0, duration: 0.5, ease: 'power2.inOut' });
        }
    };

    // Ensure all cards are reset on unmount
    useEffect(() => {
        const cards = cardRefs.current;
        return () => {
            cards.forEach(card => {
                if (card) gsap.set(card, { rotateY: 0 });
            });
        };
    }, []);

    //text animation
    useGSAP(() => {
        gsap.fromTo('#first-text', {
            ease: 'power1.inOut',
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0, 
            delay: 0.1,
        });

        gsap.fromTo(['.card-section', '.paragraphs'], {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0, 
            delay: 0.6,
            stagger: 0.8,
        })
    }, []);

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
        <div ref={ref}>
            <div>
                <p id="first-text" className='py-4 lg:py-8 text-xl lg:px-8'>
                    Our team is a mix of developers and designers who came together to bring Retroverse 
                    to life. Each member brought unique skills, from programming and 3D design to audio, 
                    graphics, and project management.
                </p>
            </div>

            <div className='flex flex-row flex-wrap justify-center my-8 card-section'>
                {teamMembers.map((member, index) => (
                    <div key={index} className='mx-12 flex flex-col items-center mb-8' style={{ perspective: 1000 }}>
                        <a href={member.link} target="_blank" rel="noopener noreferrer">
                            <div
                                className="relative w-48 h-64"
                                ref={el => (cardRefs.current[index] = el)}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                                style={{ transformStyle: 'preserve-3d', transition: 'transform 0.5s' }}
                            >
                                {/* Front Side */}
                                <img
                                    src={member.img}
                                    alt={`${member.name} headshot`}
                                    className="absolute w-full h-full object-cover rounded-lg shadow-lg"
                                    style={{ backfaceVisibility: 'hidden' }}
                                />
                                {/* Back Side */}
                                <img
                                    src="src/assets/png/backCardLinkedin.png"
                                    alt="LinkedIn logo"
                                    className="absolute w-full h-full object-cover rounded-lg shadow-lg"
                                    style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
                                />
                            </div>
                        </a>
                        <h1 className='text-3xl font-semibold mt-4'>{member.name}</h1>
                        {member.role.map((role, i) => (
                            <p key={i} className='text-lilas-default'>{role}</p>
                        ))}
                    </div>
                ))}
            </div>

            <div>
            <h2 className="paragraphs text-4xl font-semibold py-8 px-32  leading-normal text-lilas-default">
                    "Everything that you experience in the Retroverse is built from scratch: the 3D 
                    models, game narrative, and functionality that has been coded line by line."
                </h2>
                <p className='paragraphs py-4 lg:py-8 text-xl lg:px-8'>
                    Doing a virtual reality project challenged us creatively and academically. 
                    From brainstorming ideas to designing 3D rooms and programming mechanics, 
                    we learned everything as beginners in Unity and C# and we’re proud of what we achieved! 
                    Retroverse is a testament to teamwork, creativity, and persistence.
                </p>
            </div>
        </div>
    );
});

export default Team;
