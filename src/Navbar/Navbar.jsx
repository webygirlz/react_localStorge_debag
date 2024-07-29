import React from 'react'

function Navbar() {
  return (
    <div className='bg-red-500'>
      <div className='logo'>
     <h2 className='text-7xl text-white '>Navbar</h2>
      </div>
      <div className='links flex justify-between'>
        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>BLOG</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;