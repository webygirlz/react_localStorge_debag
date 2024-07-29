import React, { useState } from 'react';
function Navbar() {

    let navlink =[
        {name:'home',link:'/'}, 
        {name:'about',link:'/about'},
        {name:'blog',link:'/'}
    ]
    let [open, setOpen] =useState(true)

  return (
    <div className='w-full bg-red-400 md:flex md:justify-between'>
        <div className='logo'>
            <h1 className='pl-2  text-4xl font-extrabold'>NAVBAR</h1> 
        </div>
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden '> 

           { open ? <img src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png" width="26" height="56" alt="" title="" class="img-small"></img> 
           :
           <img className='mt-[1px]' src=" https://cdn-icons-png.flaticon.com/512/1828/1828859.png " width="26" alt="" title=""></img>
        
           }
        </div>
        <div className='content'>
        <ul className={`md:flex md:items-center md:pb-5 pb-8 absolute bg-red-400 md-z-auto z-[-1] left-0 w-full md:w-auto md:pl-8 pl-7 transition-all duration-500 ease-in ${open ?'top-30':'top-[-500px]'}`}>
          {navlink.map((items,index)=>(
            <li key={index} className='md:ml-4 text-xl md:my-0 my-7 ml-7'>
                <a className='text-gray-800 hover:text-gray-500' href={items.link}>{items.name}</a>
            </li>
          ))}
        </ul>
        </div>
    </div>
  )
}
export default Navbar;

