import React, { forwardRef } from 'react'
import '../styles/Video.css'
import SplineGhost from './SplineGhost';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Playthrough = forwardRef((props, ref) => {
  //Text animation
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

      gsap.fromTo(['.section'], {
          opacity: 0,
          y: 20
      }, {
          opacity: 1,
          y: 0, 
          delay: 0.6,
          stagger: 0.8,
      })
  }, []);

  return (
    <>
    {/* <SplineGhost /> */}
      <div ref={ref}>
        <div className='pb-3 text-l' id="first-text">
          <p className='pb-4'>Step inside Retroverse through our narrated play-through.
             Watch as Rosie Connolly guides you through each environment, explaining the 
            mechanics and story from the perspective of the VR headset.</p>
        </div>
        {/* <h1 className='font-bovine text-lilas-default my-12'>Play-through</h1> */}
        <div className='py-12 flex justify-center section'>
          <iframe width="560" height="315" className='videoframe shadow-[#856CAE]'
          src="https://www.youtube.com/embed/_U4jfCBA_lI?si=c-dCXvS_rVvb4YI1" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
        </div>

        <div className='pt-4 text-xl'>
          <p className='pb-4 section'>🍒 Explore the different VR environments we designed</p>
          <p className='pb-4 section'>👻 Discover the mechanics that make Retroverse playable</p>
          <p className='pb-4 section'>⭐ Follow the storyline as it unfolds in real-time</p>
        </div> 
      </div>
    </>
  )
});

export default Playthrough;