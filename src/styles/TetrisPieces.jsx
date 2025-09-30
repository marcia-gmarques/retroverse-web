//import gsap from "gsap";
import React from "react";

const TetrisPieces = () => {
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
