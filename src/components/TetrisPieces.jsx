import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import React from "react";


gsap.registerPlugin(useGSAP, ScrollTrigger);


const TetrisPieces = () => {

    useGSAP(() => {
        const container = document.querySelector('.tetris-pieces');
        const pieces = gsap.utils.toArray('.tetris-piece');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: 'top center',
                end: 'bottom top +=200',
                scrub: 0.7,
                pin: true,
                pinSpacing: true,
                markers: true,
                anticipatePin: 1,
            }
        });

        //start with pieces above the container
        const fallDistance = Math.max(300, container.clientHeight * 6);

        //responsive fall distance
        tl.fromTo(pieces,
            { y: -fallDistance, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.12, ease: 'power3.out', duration: 1 }
        );
        
    });


    return (
        <div className="tetris-pieces relative w-full max-w-[800px] aspect-[2/1] my-12 mx-auto  origin-center">
            {/* Blue piece at bottom left */}
            <div className="tetris-piece absolute bottom-0 left-0">
                <img 
                    src="src/assets/svg/blue-tetris-svg.svg" 
                    alt="tetris blue piece" 
                    className="w-[400px]"
                />
            </div>
            
            {/* Pink piece at bottom, right of blue */}
            <div className="tetris-piece absolute bottom-0 left-[400px]">
                <img 
                    src="src/assets/svg/pink-tetris-svg.svg" 
                    alt="tetris pink piece" 
                    className="w-[300px]"
                />
            </div>
            
            {/* Orange piece at bottom, right of pink */}
            <div className="tetris-piece absolute bottom-0 left-[600px]">
                <img 
                    src="src/assets/svg/orange-tetris-svg.svg" 
                    alt="tetris orange piece" 
                    className="w-[200px]"
                />
            </div>
            
            {/* Yellow piece above blue piece */}
            <div className="tetris-piece absolute bottom-[100px] left-0">
                <img 
                    src="src/assets/svg/yellow-tetris-svg.svg" 
                    alt="tetris yellow piece" 
                    className="w-[200px]"
                />
            </div>
            
            {/* Green piece above orange piece */}
            <div className="tetris-piece absolute bottom-[200px] left-[500px]">
                <img 
                    src="src/assets/svg/green-tetris-svg.svg" 
                    alt="tetris green piece" 
                    className="w-[300px]"
                />
            </div>
        </div>
    );
};

export default TetrisPieces;
