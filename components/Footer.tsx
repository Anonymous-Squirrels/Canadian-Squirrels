import { MainLogo } from "@/constants/Icons";
import Image from "next/image";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { developers } from "@/constants/Footer";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-[#0F0F0F] text-white md:px-20 pt-12 pb-10 cursor-default text-center">
      <div className="flex flex-col md:flex-row items-center justify-between md:pb-5 border-b border-[#333333] mb-5 gap-y-5 md:px-10">
        <div className="flex-1 flex items-center justify-start gap-2 mb-5 text-center m-2">
          <MainLogo className={"w-10 h-10 md:h-28 md:w-28"} />
          <span className="text-lg md:text-2xl">Anonymous Squirrels</span>
        </div>
        <div className="flex-1 w-full flex flex-col items-center justify-center">
          <div className="text-[#B9B3B3] text-center">
            <span className="font-thin text-lg">We help build brands.</span>
            <br />
            <span className="font-medium md:text-lg">
              Connect. Promote. Engage. Grow.
            </span>
            <br className="md:hidden" />
            <br />
          </div>
          <div className="flex items-center gap-2 relative mt-2">
            <a
              href="https://www.linkedin.com/company/anonymous-squirrels/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/logo/linkedin.png"
                alt="logo"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=919122823474"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/logo/whatsapp.png"
                alt="logo"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://www.instagram.com/anonymous_squirrels/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/logo/instagramLogo.png"
                alt="logo"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://linktr.ee/kingshukbanerjee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/logo/LinkTree.png"
                alt="logo"
                width={30}
                height={30}
                className="rounded-lg"
              />
            </a>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-end gap-x-3 mb-9 md:mb-0">
          <p className="w-fit text-center text-sm hidden md:flex">
            Made with 💜 by team Squirrels
          </p>
          <p className="w-fit text-center text-base flex md:hidden text-md">
            Made by team Squirrels
          </p>
          <div className="w-fit h-fit flex items-center justify-center md:py-4 relative top-2.5 md:top-0">
            <AnimatedTooltip items={developers} />
          </div>
        </div>
      </div>
      <div className="w-full text-center text-sm font-thin px-4">
        &copy; Copyright {new Date().getFullYear()}, All Rights Reserved by
        Anonymous Squirrels
      </div>
    </div>
  );
}

export default Footer;
