import React from 'react'
import { DENTAL } from '@/constants/Dental'
import Image from 'next/image'

const OtherWorks = () => {
  return (
    <div className='bg-[#DAD9FF] p-4 mx-auto'>
      <h1 className='text-2xl md:text-6xl font-medium text-[#5C3095] mb-5 md:mb-10 text-center'>Our Other Works</h1>
      <div className='grid lg:grid-cols-3 grid-cols-2 gap-10'>
        {
            DENTAL.map((i, index) => (
                <div className='flex flex-col gap-2 items-center' key={index}>
                    <Image
                    src={i.image}
                    alt="logo"
                    width={240} 
                    height={200}
                    className=""
                    />
                    <p className='font-semibold text-center'>{i.name},</p>
                    <span>{i.city}</span>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default OtherWorks
