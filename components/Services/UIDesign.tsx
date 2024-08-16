import React from "react";
import FAB from "../ui/FAB";
import {Logo2} from "@/constants/Icons";
import Accordion from "@/components/Services/accordion_component/Accordion";

function UIDesign() {
  return (
    <div id="ui-design" className="bg-white grid place-items-center pt-5 md:py-5 min-h-screen gap-10">
      <FAB variant="secondary" className={"select-none"}>UI Design</FAB>
      <div className="text-[#5C3095] text-3xl md:text-4xl font-bold w-[85vw] md:w-96 text-center">
        Get The Best Design, No Compromise
      </div>
      <div className="flex w-screen md:w-fit flex-col md:flex-row items-center md:justify-center gap-1 md:gap-24">
        <Accordion/>
      </div>
      <div className="hidden md:flex items-center gap-8 px-48">
        <Logo2/>
        <div className="text-[#5C3095] text-2xl font-semibold">
          Making design is a no-brainer for our professionals,
          <br/> So you can focus on what matters and feel free to inquire!
        </div>
      </div>
    </div>
  );
}

export default UIDesign;
