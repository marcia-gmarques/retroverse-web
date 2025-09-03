import React, { forwardRef } from 'react'
import '../styles/Video.css'

const Playthrough = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref}>
        {/* <h1 className='font-bovine text-lilas-default my-12'>Play-through</h1> */}
        <div className='py-8 flex justify-center'>
          <iframe width="560" height="315" className='videoframe shadow-[#856CAE]'
          src="https://www.youtube.com/embed/_U4jfCBA_lI?si=c-dCXvS_rVvb4YI1" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
        </div>
        <div className='py-16 text-xl'>
          <p className='pb-4'>Watch the full play-through of the experience with narration on YouTube.</p>
          <p>Our team member, Rosie Connolly, walks you through the different environments, game mechanics and storyline, as seen through the VR headset.</p>
        </div>
      </div>
    </>
  )
});

export default Playthrough;