import React from 'react';
import Button from '../ui/Button';
import Image from 'next/image';
import { ArrowRight } from '@/constants/Icons';
import Link from 'next/link';

function AboutUs() {
  return (
    <div id={'about-us'} className=" bg-black text-white">
      <div className="flex pt-7 px-7 p-7 md:p-14 md:pt-10">
        <span className="uppercase text-5xl md:text-8xl font-bold mx-auto  bg-gradient-to-r from-[#A998FF] via-[#7B61FF] to-[#5237D8] inline-block text-transparent bg-clip-text">
          About Us
        </span>
      </div>

      <div className="flex flex-col items-center justify-between">
        <div className="flex flex-col items-center justify-between gap-y-10">
          <div className="text-center text-xl md:text-2xl px-8 md:px-0 font-bold max-w-[900px] italic">
            We are a team of{' '}
            <span className="text-[#9C3DFC] italic">
              storytellers, creative wizards and tech geeks
            </span>{' '}
            {/* who help you convey your story better. */}
            who help you convert more patients & build a brand.
            <br />
            <br />
            <div className="text-base md:text-lg px-5 font-normal">
              {/* We are a Brand Strategy and Content Marketing company with over{" "}
              <span className="text-[#BE96FF]">50+ names in our clientele.</span>{" "}
              We specialize in brand communications and transforming your
              companies into brands that people will remember.
              Our team is here to{" "}
              <span className="text-[#BE96FF]">
              take your branding and game to the next level.
            </span> */}
              As a leading healthcare and dental marketing agency, we&apos;re
              dedicated to crafting compelling brand stories that resonate with
              your audience. Our team of creative experts and digital
              strategists will help you elevate your brand and drive results.
            </div>
          </div>

          <div className="grid place-items-center ">
            <Link href={'/about'}>
              <Button
                variant="secondary"
                className="text-white flex items-center gap-3 group"
              >
                Know More
                <ArrowRight className="group-active:rotate-45 md:group-hover:rotate-45 transition-all duration-300" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between w-full mt-7 md:mt-14">
          <Image
            src="/assets/about_us_image.png"
            alt="gradient"
            width={1500}
            height={350}
            className="w-full h-28 md:h-[225px] lg:h-[350px]"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
