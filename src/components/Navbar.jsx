import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full py-6 justify-between items-center navbar sticky top-0 z-50">

      <img src={logo} alt="hoobank" className='w-[125px] h-[35px] relative top-7' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1 '>
        {navLinks.map((navlink, index) => (
          <li key={navlink.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10 '} text-white `}>
            <a href={`#${navlink.id}`}>
              {navlink.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu}
          alt='menu'
          className='w-[28] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)} />
      </div>

      <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className='list-none flex flex-col justify-end items-center flex-1'>
          {navLinks.map((navlink, index) => (
            <li key={navlink.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4 '} text-white `}>
              <a href={`#${navlink.id}`}>
                {navlink.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </nav>

  )
}

export default Navbar