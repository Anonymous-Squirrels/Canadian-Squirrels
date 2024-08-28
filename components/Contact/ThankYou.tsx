import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

const ThankYou = () => {
  return (
    <div className='w-full md:mt-10 mt-5'>
        <div className="flex items-center gap-3 md:mt-4 ml-2 justify-center">
            <div className="w-5 md:w-28 h-[4px] bg-white"></div>
            <div className="text-xl font-bold md:text-5xl text-[#5237D8]">THANK YOU</div>
            <div className="w-5 md:w-28 h-[4px] bg-white"></div>
        </div>
        <p className='text-white text-center font-bold text-2xl mt-2'>Let us Keep in touch</p>
        <div className='mt-20 grid grid-cols-1 md:grid-cols-2 gap-5 text-white max-w-2xl mx-auto'>
            <div>
                <div>
                    <p className='text-4xl font-bold'>INDIA</p>
                    <div className='flex gap-5 justify-start items-center text-xxl'>
                        <FaLocationDot className='text-2xl text-white'/>
                        <p>Hyderabad, Kolkata & Ranchi</p>
                    </div>
                </div>
                <div>
                    image
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThankYou
