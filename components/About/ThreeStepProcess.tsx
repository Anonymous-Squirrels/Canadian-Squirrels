import {Sparkle} from "@/constants/Icons";
import React from "react";
import ProcessCard from "./ProcessCard";
import { OUR_PROCESS } from "@/constants/ProcessData";
import Image from "next/image";

function ThreeStepProcess() {

  return (
    <div className="h-fit md:h-fit bg-black text-white px-7 py-14 md:p-24 overflow-hidden">
      <div className="flex w-full text-2xl pl-0 md:pl-5 md:text-2xl gap-3.5 items-center justify-center md:justify-start z-20">
        <Sparkle/>
        <span>OUR 3-STEP PROCESS</span>
      </div>

      <div className="flex w-full 2xl:w-[100%] 3xl:w-[90%] flex-wrap gap-3 md:gap-1 2xl:gap-[30px] sm:pl-10 lg:pl-12 xl:w-[90%] 2xl:pl-[70px] pb-8 justify-center mx-auto">
  {OUR_PROCESS.map((process, index) => {
    return (
      <div key={index} className="flex justify-center">
        <ProcessCard
          isHome={true}
          key={index}
          logo={<Image src={process.imgSrc} alt="support" width={500} height={500}></Image>}
          heading={process.name}
          about={process.about}
        ></ProcessCard>
      </div>
    );
  })}
</div>

    </div>
  );
}

export default ThreeStepProcess;
