'use client';
import React from 'react';
import { Message } from '@/constants/Icons';
import Item from './Testimonials/Item';
import { TestimonialData } from '@/constants/Testimonials';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import '@/style/local_swiper.css';
import 'swiper/css/navigation';
import '@/app/styles.css';
import { Navigation, Autoplay } from 'swiper/modules';
import Button from '../ui/Button';

function Testimonials() {
  return (
    <div className="relative h-fit flex flex-col z-0 gap-y-6 md:gap-y-10 dark:bg-black text-white  bg-light-purple pt-8 pb-4 md:py-14">
      <Image
        src="/assets/volcano_bg.png"
        alt="name"
        className="absolute hidden dark:block -z-10 top-0 left-0 object-cover h-full w-full"
        width={56}
        height={56}
      />
      <div className="text-center grid place-items-center">
        <Button
          variant="secondary"
          className="flex items-center gap-3 border-[#B897FF] dark:border-[#7d4ce5] border-[2px]  text-black dark:text-white hover:text-white"
        >
          <Message /> Testimonials
        </Button>

        <div className="text-3xl md:text-6xl mx-[6px] py-3 font-semibold text-black dark:text-white  md:py-8">
          Our Success <span className="dark:text-[#7B61FF] text-[#5c3095]">Stories</span>
        </div>
        <div className="text-sm  text-black dark:text-white  md:text-xl md:font-bold w-11/12 mb-5">
          Thank you for your trust in Anonymous Squirrels! We are grateful for
          your feedback and are committed to providing the best services. Read
          what our clients have to say about their experience with us.
        </div>
      </div>

      <div className="hidden lg:flex w-full h-64 px-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Navigation, Autoplay]}
        >
          {TestimonialData.map((i, index) => (
            <SwiperSlide key={index}>
              <Item
                content={i.text}
                name={i.name}
                designation1={i.designation1}
                designation2={i.designation2}
                rating={i.stars}
                image={i.profile}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden lg:hidden md:flex w-full h-64 px-3">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Navigation, Autoplay]}
        >
          {TestimonialData.map((i, index) => (
            <SwiperSlide key={index}>
              <Item
                content={i.text}
                name={i.name}
                designation1={i.designation1}
                designation2={i.designation2}
                rating={i.stars}
                image={i.profile}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden sm:flex md:hidden w-full h-52 px-10">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={10}
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Navigation, Autoplay]}
        >
          {TestimonialData.map((i, index) => (
            <SwiperSlide key={index}>
              <Item
                content={i.text}
                name={i.name}
                designation1={i.designation1}
                designation2={i.designation2}
                rating={i.stars}
                image={i.profile}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex sm:hidden w-full h-52 px-2">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Navigation, Autoplay]}
        >
          {TestimonialData.map((i, index) => (
            <SwiperSlide key={index}>
              <Item
                content={i.text}
                name={i.name}
                designation1={i.designation1}
                designation2={i.designation2}
                rating={i.stars}
                image={i.profile}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
