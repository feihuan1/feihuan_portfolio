import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import logo from '../assets/logo.svg'

const Navbar = () => {
  const location = useLocation();
  const currentUrl = location.pathname

  return (
    <header className={`header ${currentUrl === '/' ||currentUrl=== '/contact' ? 'bg-transparent' : 'bg-[#f5f7f9]'}`}>
      <NavLink to='/' className='w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md overflow-hidden object-contain'>
        {/* image looks bad */}
        {/* <img src={logo}  alt="logo" /> */}
        <p className='blue-gradient_text'>PF</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black'}>
            About
        </NavLink>
        <NavLink to='/projects' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black'}>
            Projects
        </NavLink>
        <NavLink to='/contact' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black'}>
            Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
