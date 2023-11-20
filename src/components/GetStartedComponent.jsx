import React from 'react'
import style from '../style'
import { arrowUp } from '../assets/images'

const GetStartedComponent = () => {
  return (
    <div className={`${style.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px]`}>
      <div className={`${style.flexCenter} flex-col bg-primary w-full h-full rounded-full`}>
        <div className={`${style.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-lg leading-6 flex items-center gap-2'>
            <span className='text-gradient'>Get</span>
            <img
              src={arrowUp}
              width={23}
              height={23}
            />
          </p>
        </div>
        <p className='font-poppins font-medium text-lg leading-6'>
          <span className='text-gradient'>Started</span>
        </p>
      </div>
    </div>
  )
}

export default GetStartedComponent
