import React from 'react'
import style from '../style'
import { discount, robot } from '../assets/images'
import GetStartedComponent from './GetStartedComponent'
const HeroCompoment = () => {
  return (
    <section
      id='home'
      className={`flex md:flex-row ${style.paddingY} flex-col`}>
      <div className={`flex ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex items-center flex-row py-[6px] px-4 
        rounded-[10px] bg-discount-gradient mb-2'>
          <img
            src={discount}
            alt='discount'
            width={32}
            height={32}
          />
          <p className={`ml-2 ${style.paragraph}`}>
            <span className='text-white'>20% </span>
            Discount for
            <span className='text-white'> 1 mounth </span>
            Account
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] 
          text-[52px] text-white leading-[100px] max-ss:leading-[70px]'>
            The Next <br className='sm:block hidden' />
            <span className='text-gradient'> Generation </span>
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStartedComponent />
          </div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[66px] text-[55px] text-white
        ss:leading-[100px] leading-[75px]'>
          Payment Method.
        </h1>

        <p className={`${style.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
          We examine annual percentage rates, annual fees.
        </p>
      </div>

      <div className={`relative flex ${style.flexCenter} md:my-0 my-10 max-ss:flex-col`}>
        <img
          src={robot}
          className='w-[100%] h-[100%] z-[5]'
        />

        <div className='absolute top-0 z-0 w-[40%] h-[35%] pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 pink__gradient' />
        <div className='absolute z-0 w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />

        <div className={`ss:hidden ${style.flexCenter}`}>
          <GetStartedComponent />
        </div>
      </div>
    </section>
  )
}

export default HeroCompoment
