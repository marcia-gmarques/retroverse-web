import React, { useEffect, useRef } from "react";
import gsap from "gsap";


function SlidingText() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  }

  return (
    <div className="relative overflow-hidden w-full">
      <div ref={firstText} className="overflow-hidden whitespace-nowrap w-full flex flex-row relative left-0">
        <p className="font-bovine text-lilas-0 text-4xl mx-8">TRINITY COLLEGE</p>
        <p className="font-bovine text-marinho-0 text-4xl mx-8">BETA FESTIVAL</p>
        <p className="font-bovine text-lilas-0 text-4xl mx-8">RENDR FESTIVAL</p>
      </div>
      <div ref={secondText} className="overflow-hidden whitespace-nowrap w-full  flex flex-row absolute left-full">
        <p className="font-bovine text-lilas-0 text-4xl mx-8">TRINITY COLLEGE</p>
        <p className="font-bovine text-marinho-0 text-4xl mx-8">BETA FESTIVAL</p>
        <p className="font-bovine text-lilas-0 text-4xl mx-8">RENDR FESTIVAL</p>
      </div>
    </div>
  );
}

export default SlidingText;
