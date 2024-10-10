import Image from 'next/image'
import React from 'react'

const OurExpertise = () => {
  return (
    <div className="relative px-4 md:px-10 py-8 md:py-24">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/mateblue.svg"
          alt="background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className='border-2 rounded-bl-[50px] rounded-tr-[50px] relative py-8 px-6 flex md:flex-row flex-col items-center lg:items-start gap-7 md:gap-14'>
      <Image
        src="/assets/ourexpertise.png"
        alt="logo"
        width={350}
        height={400}
        className='w-[250px] lg:w-[350px] lg:h-[400px]'
      />
      <Image
        src="/logo/logoas.svg"
        alt="logo"
        width={150}
        height={150}
        className='absolute bottom-0 right-0 hidden lg:block'
      />
        <div className='text-white flex flex-col gap-5 lg:gap-10 text-center md:text-start'>
          <h1 className='text-3xl lg:text-6xl font-bold'>OUR EXPERTISE</h1>
          <div className='text-sm lg:text-lg xl:text-2xl'>
          We have been working in the Dental and Healthcare Industry for the last 5 years. Our team is an expert in generating leads and building an overall brand for our clients and have achieved significant results, as 6.5M+Impressions, 200+ Call leads and 15,000+ Clicks in less than 15 days for our clients.
          </div>
          <div className='text-sm lg:text-lg xl:text-2xl'>
          Allow us to elevate the online presence of your clinic and revamp your business.
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurExpertise
