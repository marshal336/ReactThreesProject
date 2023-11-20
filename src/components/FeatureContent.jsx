import React from 'react'
import { features } from '../base/base'
import styles from '../style'

const FeatureContent = ({ icon, title, content, index }) => {
    return (
        <div className={`flex flex-row p-6 rounded-[20px]
        ${index !== features.length - 1
                ? 'mb-6'
                : 'mb-0'
            } feature-card`}>
            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                <img
                    src={icon}
                    className='w-[50%] h-[50%]'
                />
            </div>
            <div className='flex-1 flex flex-col ml-3'>
                <h4 className='font-poppins text-lg font-semibold text-white'>
                    {title}
                </h4>
                <p className='font-poppins text-base font-normal text-dimWhite'>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default FeatureContent