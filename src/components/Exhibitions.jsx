import React, { forwardRef } from 'react';
import SlidingText from './SlidingText';

const Exhibitions = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className='flex justify-center my-12'>
        <img src="src/assets/img/rendr-reaction-guy.jpeg" alt="man mesmerised playing virtual reality" className='max-w-md mb-4 imgframe' />
      </div>
      <SlidingText />
      <p>
        The project has been demonstrated in the Interactive Digital Media
        Showcase 2023 in Trinity College Dublin, as well as at its Open Days,
        European Researchers' Night, Beta Festival (Dublin, Ireland), and at
        the RENDR Festival (Belfast, UK).
      </p>
      <div className='flex justify-center my-12'>
        <img src="src/assets/img/science_gallery.jpg" alt="man playing virtual reality" className='max-w-xl mb-4 imgframe' />
      </div>
      <SlidingText />
    </div>
  );
});

export default Exhibitions;
