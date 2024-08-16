import {Sparkle} from "@/constants/Icons";
import React from "react";
import Accordion from "@/components/About/accordian_component/Accordion";

function ThreeStepProcess() {

  return (
    <div className="h-fit md:h-fit bg-black text-white px-7 py-14 md:p-24 overflow-hidden">
      <div className="flex w-full text-2xl pl-0 md:pl-5 md:text-2xl gap-3.5 items-center justify-center md:justify-start z-20">
        <Sparkle/>
        <span>OUR 3-STEP PROCESS</span>
      </div>

      <div
        className="flex flex-col md:flex-row items-center justify-evenly md:justify-center gap-0 md:gap-16 h-fit w-full mt-12">
          <Accordion/>
      </div>
    </div>
  );
}

export default ThreeStepProcess;
