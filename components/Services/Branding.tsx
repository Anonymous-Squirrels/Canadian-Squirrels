import React from "react";
import FAB from "../ui/FAB";
import Image from "next/image";
import GlassMorphism from "../ui/GlassMorphism";

function Branding() {
  return (
    <div className="bg-black pt-10 text-white relative overflow-hidden">
      <div className="grid place-items-center">
        <FAB variant="secondary" className="h-11 md:h-fit select-none">Branding</FAB>
        <br/>
        <br/>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-x-12 px-7 gap-y-10 md:gap-y-0 md:px-32">
        <div className="w-fit md:w-9/12">
          <div className="mb-10">
            <span className="text-[#994AFF] text-xs md:text-base font-bold uppercase">CHANGE</span>
            <br/>
            <br className="hidden md:block"/>
            <span className="text-2xl md:text-5xl font-bold">Showcase And Stand Out</span>
          </div>
          <p className="text-[#B897FF] text-base md:text-3xl font-extrabold w-full">
            Leverage the Power of Instagram & LinkedIn
          </p>
          <div className="w-full  md:w-1/2  text-base md:text-xl mt-5">
            We&apos;ll help you develop a captivating personal brand on the
            platforms that matter most, using targeted content strategies and
            engaging storytelling.
          </div>

          <Image
            src="/assets/statistics.png"
            width={900}
            height={800}
            alt="woman with megaphone"
            className="-translate-x-[135px] translate-y-4 hidden md:block mt-16"
          />
        </div>

        <div className="flex flex-row md:flex-col gap-x-14 gap-y-10 justify-center items-center">
          <div className="relative">
            <Image
              src="/logo/instagramLogo.png"
              width={150}
              height={150}
              alt="Instagram Logo"
              className="w-[84px] h-[84px] md:w-[190px] md:h-[190px]"
            />
            <GlassMorphism
              variant="light"
              className="border border-white/25 overflow-hidden hidden md:flex absolute h-12 w-12 md:h-28 md:w-28 rounded-lg bottom-0 -translate-x-3 translate-y-3 md:-translate-x-8 md:translate-y-8"
            >
              {" "}
            </GlassMorphism>
          </div>
          <div className="relative">
            <Image
              src="/logo/linkedinLogo.png"
              width={180}
              height={180}
              alt="LinkedIn Logo"
              className="w-[82px] h-[82px] md:w-[190px] md:h-[190px]"
            />
            <GlassMorphism
              variant="light"
              className="border border-white/25 overflow-hidden hidden md:flex absolute h-12 w-12 md:h-28 md:w-28 rounded-lg bottom-0 -translate-x-3 translate-y-3 md:-translate-x-8 md:translate-y-8"
            >
              {" "}
            </GlassMorphism>
          </div>
        </div>

        <div className="w-full md:hidden flex items-center justify-center mt-4">
          <Image
            src="/assets/statistics.png"
            width={360}
            height={360}
            alt="woman with megaphone"
            className="md:hidden relative"
          />
        </div>
      </div>
    </div>
  );
}

export default Branding;
