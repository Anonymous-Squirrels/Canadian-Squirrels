import AboutUs from "@/components/About/AboutUs";
import HeroSection from "@/components/About/HeroSection";
import JoinTeam from "@/components/About/JoinTeam";
import OurValues from "@/components/About/OurValues";
import ThreeStepProcess from "@/components/About/ThreeStepProcess";
import React from "react";
import {Blob} from "@/constants/Icons";

function Page() {
  return (
    <div className="w-full ">
      <div className="w-full relative overflow-hidden">
        <div className="absolute hidden md:block md:left-60 -translate-x-1/2 -top-72 z-10">
          <Blob variant="violet"/>
        </div>
        <div className="absolute hidden md:block right-52 translate-x-1/2 top-60 z-10">
          <Blob variant="yellow"/>
        </div>

        <HeroSection/>
        <AboutUs/>
      </div>
      <OurValues/>
      <div className="w-full relative overflow-hidden">
        
        <ThreeStepProcess/>
        <JoinTeam/>
      </div>
    </div>
  );
}

export default Page;
