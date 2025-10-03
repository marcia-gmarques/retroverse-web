import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import React from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TetrisPieces = () => {

        useGSAP(() => {
            const container = document.querySelector('.tetris-section');
            // const grid = document.querySelector('.tetris-pieces');
            // const containerHeight = container ? container.offsetHeight : 0;
            const firstPieces = gsap.utils.toArray('.tetris-auto');
            const textPieces = gsap.utils.toArray('.tetris-plus');
            // const totalPieces = firstPieces + textPieces;
            // const totalPieces = [...firstPieces, ...textPieces];

            const tl = gsap.timeline({
                scrollTrigger: {
                trigger: container,
                start: () => "top center-=200" ,
                end: () => "+=" + tl.duration() * 400, // dynamic end based on number of pieces
                scrub: true,
                pin: true,
                markers: true
                }
            });

            // Animate first pieces at the start of the timeline
            firstPieces.forEach((piece, i) => {
                tl.fromTo(piece,
                { y: -300, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power3.out"},
                i * 0.3 // small stagger for first pieces
                );
            });

            // Animate text pieces with scroll spacing
            textPieces.forEach((block) => {
                tl.fromTo(block,
                { y: -500, opacity: 0 },
                { y: 0, opacity: 1, ease: "power3.out" },
                ">+2"
                );
            });
            });



    return (
        <section className="tetris-section">
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
            <div className="tetris-piece tetris-plus col-start-9 col-span-2 row-start-5 row-span-2 flex justify-center items-end relative">
                <div className="piece-note note-yellow flex items-center justify-end pr-2 absolute left-[-300px] top -translate-x-1/2 z-10">
                <span className="text-sm leading-tight">The Retroverse team spent three months developing this project 
                    as part of their MSc in Interactive Digital Media. Our goal was to create something truly 
                    unique — an experience that combined emotion, memory, and the nostalgia of iconic video games.</span>
            </div>
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
        </section>
    );
};

export default TetrisPieces;
