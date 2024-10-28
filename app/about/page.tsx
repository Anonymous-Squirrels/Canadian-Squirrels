import AboutUs from '@/components/About/AboutUs';
import HeroSection from '@/components/About/HeroSection';
import JoinTeam from '@/components/About/JoinTeam';
import OurValues from '@/components/About/OurValues';
import ThreeStepProcess from '@/components/About/ThreeStepProcess';
import React from 'react';
import { Blob } from '@/constants/Icons';
import ContactBackground from '@/components/Contact/ContactBackground';
import Google from '@/components/About/Google';
import LightContactBackground from '@/components/Contact/LightContactBackground';

function Page() {
  return (
    <div className="w-full">
      <div className="w-full relative overflow-hidden">
        <div className="h-[15vh] bg-light-purple dark:bg-black"></div>
        <div className="absolute hidden md:block md:left-60 -translate-x-1/2 -top-72 z-10">
          <Blob variant="violet" />
        </div>
        <div className="absolute hidden md:block right-52 translate-x-1/2 top-60 z-10">
          <Blob variant="yellow" />
        </div>

        <HeroSection />
        <Google />
        <AboutUs />
      </div>
      <OurValues />
      <div className="w-full relative overflow-hidden">
        <ThreeStepProcess />
        <div className='hidden dark:block'>
      <ContactBackground />

      </div>
      <div className='dark:hidden block'>
  <LightContactBackground/>
</div>        <JoinTeam
          content1="Become a Squirrel."
          content2="Join our Team."
          detail="We are looking for individuals with skills who could join our family of squirrels."
          link1="/contact"
          button="Apply Now"
        />
      </div>
    </div>
  );
}

export default Page;
