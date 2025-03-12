import React, {useState} from 'react'
import '../styles/NavBar.css';

const NavBar = () => {

  const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };

   const handleMouseLeave = () => {
      setIsHover(false);
   };

   const styling = {
    padding: '2.5rem',
    cursor: isHover? 'pointer': 'default'
   }

  return (
    <div className='flex justify-center w-full font-bovine sticky'>
        <ul className='flex space-x-6 p-4'>
            <li  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={styling} className='nav-item'>Project</li>
            <li  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={styling} className='nav-item'>Play-through</li>
            <li  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={styling} className='nav-item'>Our Team</li>
            <li  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={styling} className='nav-item'>Exhibitions</li>
        </ul>
    </div>
  )
}

export default NavBar;