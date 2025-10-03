import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import React from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TetrisPieces = () => {


    useGSAP(() => {
        const firstPieces = gsap.utils.toArray('.tetris-auto');
        const textPieces = gsap.utils.toArray('.tetris-plus');
        const container = document.querySelector('.tetris-pieces');

        firstPieces.forEach((piece, i) => {
            gsap.fromTo(piece, { 
                y: -500,
                opacity: 0 
            },
            { 
                y: 0, 
                opacity: 1, 
                delay: i * 0.8, 
                ease: 'power3.out', 
                duration: 1 }
            )
        })

        //add a timeline for these blocks to come in after the first pieces and with text sliding in
        textPieces.forEach((block, i) => {
            gsap.fromTo(block, { 
                y: -500,
                opacity: 0,  
            },
            {
                y: 0,
                delay: firstPieces.length * 0.8 + i * 0.8,
                opacity: 1,
                scrollTrigger: {
                    trigger: container,
                    /* markers: true,
                    start: 'top top',
                    end: 'bottom +=100', */
                }        
            }
        )})
    }, []);


    return (
        <div className="tetris-pieces grid grid-cols-12 grid-rows-5 gap-0 w-full max-w-[1200px] max-h-[500px] mx-auto my-12 z-0">
            {/* Bottom row: row-start-2 */}
            {/* Blue piece occupies cols 1-4 */}
            <div className="tetris-piece tetris-auto blue1 col-start-1 col-span-4 row-start-5 row-span-1 flex justify-center items-end">
                <img 
                    src="src/assets/svg/blue-tetris-svg.svg" 
                    alt="tetris blue piece" 
                    className="w-full object-contain" />
            </div>

            {/* Pink piece occupies cols 5-7 */}
            <div className="tetris-piece tetris-auto pink1 col-start-5 col-span-3 row-start-5 row-span-2 flex justify-center items-end">
                <img 
                    src="src/assets/svg/pink-tetris-svg.svg" 
                    alt="tetris pink piece" 
                    className="w-full object-contain" />
            </div>

            {/* Orange piece occupies cols 7-8 */}
            <div className="tetris-piece tetris-auto orange1 col-start-7 col-span-2 row-start-5 row-span-3 flex justify-center items-end">
                <img 
                    src="src/assets/svg/orange-tetris-svg.svg" 
                    alt="tetris orange piece" 
                    className="w-full object-contain" />
            </div>

            {/* Yellow piece occupies cols 9-10 */}
            <div className="tetris-piece tetris-plus col-start-9 col-span-2 row-start-5 row-span-2 flex justify-center items-end">
                <img 
                    src="src/assets/svg/yellow-tetris-svg.svg" 
                    alt="tetris yellow piece" 
                    className="w-full object-contain" />
            </div>

            {/* Green piece occupies col 12 */}
            <div className="tetris-piece tetris-auto green1 col-start-11 col-span-2 row-start-5 row-span-3 flex justify-center items-end">
                <img 
                    src="src/assets/svg/green-tetris.svg" 
                    alt="tetris green piece" 
                    className="w-full object-contain" />
            </div>

            {/* Top row pieces (row-start-1) - placed above left side */}
            <div className="tetris-piece tetris-auto yellow2 col-start-1 col-span-2 row-start-3 row-span-2 flex justify-center items-end">
                <img 
                    src="src/assets/svg/yellow-tetris-svg.svg" 
                    alt="tetris yellow piece" 
                    className="w-full object-contain" />
            </div>

            <div className="tetris-piece tetris-plus col-start-2 col-span-2 row-start-3 row-span-2 flex justify-center items-end">
                <img 
                    src="src/assets/svg/green-tetris-svg.svg" 
                    alt="tetris green piece" 
                    className="w-full object-contain" />
            </div>

            <div className="tetris-piece tetris-plus col-start-11 col-span-1 row-start-1 row-span-4 flex justify-center items-end">
                <img 
                    src="src/assets/svg/blue-tetris-rotate.svg" 
                    alt="tetris blue piece" 
                    className="w-full object-contain" />
            </div>

            {/* Blue note (text) positioned to the left of the blue piece; will slide later */}
            {/* <div className="piece-note note-blue col-start-1 col-span-8 row-start-2 flex items-center justify-end pr-2">
                <span className="text-sm leading-tight">The Retroverse team spent three months developing this project 
                    as part of their MSc in Interactive Digital Media. Our goal was to create something truly 
                    unique — an experience that combined emotion, memory, and the nostalgia of iconic video games.</span>
            </div> */}
        </div>
    );
};

export default TetrisPieces;
