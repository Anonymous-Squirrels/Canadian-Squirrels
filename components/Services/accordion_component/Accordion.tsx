"use client"
import React, {useState} from 'react';
import ServiceAccordian from "@/components/Services/accordion_component/ServiceAccordian";
import Image from "next/image";
import {data} from "@/constants/ServiceAccordianData";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="w-full px-7 md:px-0 md:w-2/5">
        <ServiceAccordian activeIndex={activeIndex} setActiveIndex={setActiveIndex} data={data}/>
      </div>

      {activeIndex !== null ? <Image
          src={`/${data[activeIndex].image}`}
          alt={`${data[activeIndex].image.replace("ui_design/", "")}`}
          width={500}
          height={900}
          className="hidden md:flex md:w-[433px] md:h-[515px]"
        /> :
        <Image
          src="/assets/gradient.png"
          alt="gradient"
          width={500}
          height={900}
          className="hidden md:flex md:w-2/6 md:h-[515px]"
        />}

      <Image
        src="/assets/gradient.png"
        alt="gradient"
        width={430}
        height={500}
        className="flex md:hidden w-full h-[140px]"
      />
    </>
  );
}

export default Accordion;