import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-center w-full'>
        <ul className='flex space-x-6 p-4'>
            <li className='p-4'>Content</li>
            <li className='p-4'>Play-through</li>
            <li className='p-4'>Our Team</li>
            <li className='p-4'>Exhibitions</li>
        </ul>
    </div>
  )
}

export default NavBar;