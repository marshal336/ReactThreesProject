import { useState } from 'react';

const BurgerMenuComponent = () => {
    const [open, setOpen] = useState(false)
    return (
        <div
            className='hidden max-sm:block'
            onClick={() => setOpen(!open)}>
            <div className='flex justify-center items-center w-9 h-4 relative'>
                <span className={`absolute top-0 bg-white rounded-lg w-7 h-[2px] 
                ${open ? '-rotate-45 top-[7px] ease-in duration-300' : 'ease-in duration-300'}`}></span>
                <span className={`absolute bg-white rounded-lg w-7 h-[2px] 
                ${open ? 'hidden' : 'ease-in duration-300'}`}></span>
                <span className={`absolute bottom-0 bg-white rounded-lg w-7 h-[2px] 
                ${open ? 'rotate-45 bottom-[7px] ease-in duration-300' : 'ease-in duration-300'}`}></span>
            </div>
        </div>
    )
}

export default BurgerMenuComponent