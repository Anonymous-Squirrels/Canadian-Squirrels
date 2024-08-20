import React from "react";
import styles from "@/style/Services.module.css";
import Button from "../ui/Button";
import {ArrowRight, DownArrow} from "@/constants/Icons";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="h-[85vh] md:h-[100vh] relative w-full bg-black text-white flex flex-col items-center">
      <div className="relative top-1/2 w-full h-fit">
        <div className={`${styles.blob} md:w-[639px] w-[360px]`}></div>
        <div
          className="text-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 grid place-items-center gap-10">
          <div className="text-4xl md:text-7xl font-semibold md:w-[50vw] w-[85vw]">
            We Provide Services. A Lot...
          </div>
          <div className="text-[#C1C1C1] text-sm md:text-lg hidden md:grid">
            Enhance every aspect of your business sales, ensuring <br/>
            satisfaction, loyalty, and unparalleled service.
          </div>
          <div className="text-[#C1C1C1] text-sm grid md:hidden">
            satisfaction, loyalty, and unparalleled service.
          </div>

          <div className="grid place-items-center ">
            <Link href={"/contact"}>
              <Button
                variant="secondary"
                className="text-white flex items-center gap-3 group"
              >
                Contact Us
                <ArrowRight className="group-active:rotate-45 md:group-hover:rotate-45 transition-all duration-300"/>
              </Button>
            </Link>
          </div>
        </div>
      </div>


      <div className="z-20 absolute bottom-16 md:bottom-9">
        <Link href="#ui-design" className={"h-11 w-11 md:w-14 md:h-14"}>
          <DownArrow className="animate-bounce h-11 w-11 md:w-14 md:h-14"/>
        </Link>
      </div>

    </div>
  );
}

export default HeroSection;