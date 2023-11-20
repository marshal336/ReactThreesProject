import React, { useState } from 'react'
import { logo } from '../assets/images'
import { navLinks } from '../base/base'
import BurgerMenuComponent from './BurgerMenuComponent'

const NavBarComponent = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className='flex w-ful py-6 justify-between 
    items-center'>
      <img
        src={logo}
        className='w-[124px] h-[32px]'
      />
      <ul className='sm:flex hidden justify-end
      items-center flex-1'>
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`font-poppins 
            ${index !== navLinks.length - 1
                ? 'mr-10'
                : 'mr-0'}`}>
            <a
              href={`#${link.id}`}
              className='font-popoins text-base text-white'>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex justify-end
        items-center flex-1'>
        <div onClick={() => setOpen(!open)}>
          <BurgerMenuComponent />
        </div>
        <div
          className={`${open ? 'flex' : 'hidden'}
          p-8 bg-black-gradient absolute top-20 mx-4 ring-0
          my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='flex flex-col justify-end items-center flex-1'>
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className={`font-poppins 
            ${index !== navLinks.length - 1
                    ? 'mb-4'
                    : 'mb-0'}`}>
                <a
                  href={`#${link.id}`}
                  className='font-popoins text-xl text-white'>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBarComponent
