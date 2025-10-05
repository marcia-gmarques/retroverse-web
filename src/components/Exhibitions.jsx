import React, { forwardRef } from 'react';
// import SlidingText from './SlidingText';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Exhibitions = forwardRef((props, ref) => {

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

        const exhibitions = document.querySelectorAll('.exhibition-section');
        exhibitions.forEach(section => {
          gsap.fromTo(section, {
              opacity: 0,
              y: 30
          }, {
              opacity: 1,
              y: 0, 
              delay: 0.6,
              scrollTrigger: {
                trigger: section,
                start: 'top 60%',
                end: 'bottom 10%',
                toggleActions: 'play none none reverse',
              }
          })
        });

    }, []);


  return (
    <div ref={ref}>
      {/* <h1 className='font-bovine text-lilas-default my-12'>Exhibitions</h1> */}
      {/* <div className='flex flex-row py-12'>
        <img src="src/assets/img/rendr-reaction-guy.jpeg" 
            alt="man mesmerised playing virtual reality" 
            className='max-w-sm mb-4  mx-4 imgframe' />
      </div> */}
      {/* <SlidingText /> */}
      <p id="first-text" className='py-4 lg:py-8 text-xl lg:px-8'>
          From campus demos to international tech festivals, Retroverse has travelled far beyond the classroom.
      </p>

      <div className='flex flex-row text-left my-20 exhibition-section'>
        <div className='flex flex-col mb-8'>
          <h1 className='font-bovine text-marinho'>Interactive Digital Media Showcase</h1>
          <h2 className='mt-2'>Trinity College Dublin (2023)</h2>
          <p className='mt-8'>Our first public showing took place at the Interactive Digital Media Showcase in Trinity 
            College Dublin. Students, professors, and visitors queued up to try Retroverse through a 
            VR headset — the response was incredible. Friends and family joined the experience, and 
            throughout the day we had a constant line of people eager to explore our virtual world.</p>
          </div>
        <div className='flex flex-col mb-8 ml-12'>
          <img src="src/assets/img/science_gallery.jpg" alt="a person playing virtual reality and people queueing to try" className='max-w-xl mb-4 imgframe' />
        </div>
      </div> 
      {/* <SlidingText /> */}

      <div className='flex flex-row text-left my-20 exhibition-section'>
        <div className='flex flex-col mb-8'>
          <img src="src/assets/img/researchers-night.jpg" alt="people playing virtual reality" className='max-w-xl mb-4 imgframe' />
        </div>
        <div className='flex flex-col mb-8 ml-12'>
          <h1 className='font-bovine text-marinho'>European Researchers’ Night</h1>
          <h2 className='mt-2'>Trinity College Dublin (2023)</h2>
          <p className='mt-8'>Following the success of our debut, we were invited to present Retroverse 
            at European Researchers’ Night, an event that celebrates innovation and creativity. It was 
            amazing to see people from diverse backgrounds — researchers, students, and curious visitors 
            — engage with the emotional side of our VR storytelling.</p>
          </div>
      </div> 


      <div className='flex flex-row text-left my-20 exhibition-section'>
        <div className='flex flex-col mb-8'>
          <h1 className='font-bovine text-marinho'>Beta Festival</h1>
          <h2 className='mt-2'>Dublin, Ireland (2023)</h2>
          <p className='mt-8'>Encouraged by our supervisor, we submitted Retroverse to Beta Festival, 
            a brand-new celebration of technology and digital art. We showcased our work alongside 
            other student-led and independent projects, highlighting how creative experimentation 
            and collaboration can lead to fully realized interactive experiences.</p>
          </div>
        <div className='flex flex-col mb-8 ml-12'>
          <img src="src/assets/img/beta-showcase.jpeg" alt="a person playing virtual reality and trying to grab something" className='max-w-xl mb-4 imgframe' />
        </div>
      </div>


      <div className='flex flex-row text-left my-20 exhibition-section'>
        <div className='flex flex-col mb-8'>
          <img src="src/assets/img/rendr-reaction-guy.jpeg" alt="guy amazed whilst playing virtual reality" className='max-w-xl mb-4 imgframe' />
        </div>
        <div className='flex flex-col mb-8 ml-12'>
          <h1 className='font-bovine text-marinho'>RENDR Festival</h1>
          <h2 className='mt-2'>Belfast, UK (2024)</h2>
          <p className='mt-8'>Our biggest stage yet — RENDR Festival, a major tech conference that 
            attracts creators and industry professionals from across the UK and Ireland. Many 
            attendees were surprised to learn that Retroverse had been built entirely from 
            scratch in just three months. We received amazing feedback — some even asked if 
            we were a professional game studio.</p>
          </div>
      </div>

      <div className='flex flex-row text-left my-20 exhibition-section'>
        <div className='flex flex-col mb-8'>
          <h1 className='font-bovine text-marinho'>Trinity College Open Day</h1>
          <h2 className='mt-2'>Trinity College Dublin (2024)</h2>
          <p className='mt-8'>We were also invited to showcase Retroverse at Trinity College’s Open 
            Day, where prospective students explored what current students and graduates have 
            created. It was a proud moment to inspire the next generation of Interactive Digital 
            Media and Computer Science students and show how much can be achieved in just a few months.</p>
          </div>
        <div className='flex flex-col mb-8 ml-12'>
          <img src="src/assets/img/trinity-open-day.jpg" alt="a person playing virtual reality" className='max-w-xl mb-4 imgframe' />
        </div>
      </div>


    </div> 
  );
});

export default Exhibitions;
