import React from 'react'
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <div className='flex justify-center w-full font-bovine sticky'>
        <ul className='flex space-x-6 p-4 text-[#bdebfb]'>
            <li className='p-4'>Content</li>
            <li className='p-4'>Play-through</li>
            <li className='p-4'>Our Team</li>
            <li className='p-4'>Exhibitions</li>
        </ul>
    </div>
  )
}

export default NavBar;