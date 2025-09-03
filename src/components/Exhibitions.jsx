import React, { forwardRef } from 'react';
// import SlidingText from './SlidingText';

const Exhibitions = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      {/* <h1 className='font-bovine text-lilas-default my-12'>Exhibitions</h1> */}
      <div className='flex flex-row py-12'>
        <img src="src/assets/img/rendr-reaction-guy.jpeg" 
            alt="man mesmerised playing virtual reality" 
            className='max-w-sm mb-4  mx-4 imgframe' />
        {/* <img src="src/assets/img/SHOW CASE - Beta 2023 (9).jpeg" 
            alt="man mesmerised playing virtual reality" 
            className='mb-4 mx-4 min-w-full imgframe' />     */}
      </div>
      {/* <SlidingText /> */}
      <p>
        The project has been demonstrated in the Interactive Digital Media
        Showcase 2023 in Trinity College Dublin, as well as at its Open Days,
        European Researchers' Night, Beta Festival (Dublin, Ireland), and at
        the RENDR Festival (Belfast, UK).
      </p>
      <div className='flex justify-center my-12'>
        <img src="src/assets/img/science_gallery.jpg" alt="man playing virtual reality" className='max-w-xl mb-4 imgframe' />
      </div>
      {/* <SlidingText /> */}
    </div>
  );
});

export default Exhibitions;
