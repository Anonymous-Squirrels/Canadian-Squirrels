import { Sparkle } from "@/constants/Icons";
import Image from "next/image";
import React from "react";
import OurValuesCard from "./OurValuesCard";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

function OurValues() {
  return (
    <div className="bg-black text-white py-12 overflow-hidden">
      <div className=" w-full text-3xl py-9">
        <div className="w-fit flex items-center gap-x-3.5 justify-center md:absolute md:left-24">
          <Sparkle /> <span className="uppercase text-2xl md:text-2xl">OUR VALUES</span>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-[40px] xl:gap-[30px] 2xl:gap-[50px] mt-[50px] md:mt-[100px] mx-auto justify-center">
  <div className="flex justify-center">
    <OurValuesCard
      icon={<FaEye className="text-[30px] md:text-[40px]"></FaEye>}
      label="Vision"
      Classname=""
      content="MLSA envisions a world where everyone has access to the benefits of technology. We believe that technology has the potential to be an effective tool for education.We are committed to educating everyone about various tech stacks, thus keeping them updated."
    />
  </div>
  <div className="flex justify-center">
    <OurValuesCard
      icon={<TbTargetArrow className=" text-[30px] md:text-[40px]"></TbTargetArrow>}
      label="Goal"
      Classname=""
      content="Connecting people with technology and assisting them in using it to enhance their lives are the two main objectives of MLSA. In order to achieve this, we organize events, work on projects, and educate everyone on various tech stacks."
    />
  </div>
  <div className="flex justify-center">
    <OurValuesCard
      icon={
        <BsFillRocketTakeoffFill className="text-[30px] md:text-[40px]"></BsFillRocketTakeoffFill>
      }
      label="Mission"
      Classname=""
      content={` The mission of MLSA is "Tech for All".We empower individuals to embrace the digital world with confidence through engaging events, innovative projects, and meaningful connections. We are dedicated to bridging the technological divides, ensuring that no one is left behind.`}
    />
  </div>
</div>

      </div>

      
    </div>
  );
}

export default OurValues;
