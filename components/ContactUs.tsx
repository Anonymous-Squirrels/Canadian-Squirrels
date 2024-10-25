'use client';
import React from 'react';
import GlassMorphism from './ui/GlassMorphism';
import Input from './ui/Input';
import { Message2 } from '@/constants/Icons';
import Button from './ui/Button';
import { formInputSchema } from '@/form_schema/formInputSchema';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendMail } from '@/actions/resend';
import { toast } from 'sonner';
import Image from 'next/image';

function ContactUs() {
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    reset: reset2,
    formState: { errors: errors2, isSubmitting: isSubmitting2 },
  } = useForm<z.infer<typeof formInputSchema>>({
    resolver: zodResolver(formInputSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      messageToTeam: '',
      social: '',
      website: '',
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof formInputSchema>> = async (
    data
  ) => {
    sendMail(JSON.stringify(data))
      .then(() => {
        toast.success('Mail sent successfully! You will be contacted soon.');
        reset2();
      })
      .catch(() => toast.error('Mail not sent. Please try again later.'));
  };

  return (
    <div
      id="contact"
      className="relative dark:bg-black bg-light-purple bg-center bg-cover flex flex-col items-center dark:text-white text-black  pb-4 md:pb-14 md:pt-32 md:px-8 lg:px-36"
    >
      <Image
        src="/assets/contact-us-shadow.png"
        alt="logo"
        width={2000}
        height={500}
        className="absolute -bottom-[15%] -left-[60%] z-10 h-[500px] w-[2000px]"
      />
      {/* dark theme */}
      <GlassMorphism
        variant={'light'}
        className="invisible md:visible w-full rounded-2xl z-40 border hidden dark:block border-gray-700"
      >
        <div className="flex flex-col items-center justify-between md:justify-around gap-y-6 md:gap-y-0 w-full visible md:mt-6">
          <div className="md:w-full px-4 md:px-0 flex flex-col md:flex-row items-center gap-x-4">
          {/* dark theme */}
      <div className='dark:block hidden'>
      <GlassMorphism
              variant="light"
              className="rounded-full p-0 w-fit h-fit self-start md:self-auto hidden md:flex"
            >
              <Message2 className="w-14 h-14 md:w-20 md:h-20" />
            </GlassMorphism>
      </div>
          {/* light theme */}
         <div className='dark:hidden block'>   <GlassMorphism
              variant="dark"
              className="rounded-full p-0 w-fit h-fit self-start md:self-auto hidden md:flex"
            >
              <Message2 className="w-14 h-14 md:w-20 md:h-20" />
            </GlassMorphism>
            </div>
            <div className="w-full md:w-fit mt-5 md:mt-0 md:px-4">
              <span className="text-2xl md:text-4xl font-bold block md:leading-normal">
                Get a free consultancy from our expert right now!
              </span>
              <span className="text-sm md:text-lg font-light md:tracking-wider drop-shadow-2xl md:leading-8">
                With lots of unique elements, you can promote and grow your
                business to the sky. Really!
              </span>
            </div>
          </div>

          <div className="w-full md:w-[70%] py-10 flex">
            <form onSubmit={handleSubmit2(onSubmit)} className="w-full text-sm">
              <div className="flex flex-col md:flex-row gap-x-8 md:gap-y-5 w-full">
                <div className="w-full flex flex-col md:gap-5">
                  <div className="h-fit w-full relative">
                    <Input
                      text="Name (Required)"
                      type="text"
                      placeholder="i.e. John Brown"
                      classNameDiv="bg-white rounded-lg p-0"
                      classNameInput="text-black placeholder:font-light"
                      classNameText="font-semibold"
                      className="my-2"
                      {...register2('name')}
                    />
                    {errors2.name && (
                      <p className={'text-red-500 text-sm absolute -bottom-4 left-0'}>
                        {errors2.name?.message}
                      </p>
                    )}
                  </div>

                  <div className="h-fit w-full relative">
                    <Input
                      text="Email (Required)"
                      type="email"
                      placeholder="i.e. Johnbrown@mail.com"
                      classNameDiv="bg-white rounded-lg p-0"
                      classNameInput="text-black placeholder:font-light"
                      classNameText="font-semibold"
                      className="my-2"
                      {...register2('email')}
                    />
                    {errors2.email && (
                      <p className={'text-red-500 text-sm absolute -bottom-4 left-0'}>
                        {errors2.email?.message}
                      </p>
                    )}
                  </div>

                  <div className="h-fit w-full">
                    <Input
                      text="Phone"
                      type="text"
                      placeholder="i.e. +1(524)278-0381"
                      classNameDiv="bg-white rounded-lg p-0"
                      classNameInput="text-black placeholder:font-light"
                      classNameText="font-semibold"
                      className="my-2"
                      {...register2('phone')}
                    />
                    {errors2.phone && (
                      <p className={'text-red-500 text-sm'}>
                        {errors2.phone?.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="w-full flex flex-col md:gap-5">
                  <div className="h-fit w-full">
                    <Input
                      text="Company Socials (LinkedIn, Instagram)"
                      type="text"
                      placeholder="Please provide a link"
                      classNameDiv="bg-white rounded-lg p-0"
                      classNameInput="text-black placeholder:font-light"
                      classNameText="font-semibold"
                      className="my-2"
                      {...register2('social')}
                    />
                    {errors2.social && (
                      <p className={'text-red-500 text-sm'}>
                        {errors2.social?.message}
                      </p>
                    )}
                  </div>

                  <div className="h-fit w-full">
                    <Input
                      text="Company Website"
                      type="text"
                      placeholder="Please provide us a link"
                      classNameDiv="bg-white rounded-lg p-0"
                      classNameInput="text-black placeholder:font-light"
                      classNameText="font-semibold"
                      className="my-2"
                      {...register2('website')}
                    />
                    {errors2.website && (
                      <p className={'text-red-500 text-sm'}>
                        {errors2.website?.message}
                      </p>
                    )}
                  </div>

                  <div className="h-fit w-full">
                    <Input
                      text="Message to the team"
                      type="text"
                      placeholder="Enter your message"
                      classNameDiv="bg-white rounded-lg p-0"
                      classNameInput="text-black placeholder:font-light"
                      classNameText="font-semibold"
                      className="my-2"
                      {...register2('messageToTeam')}
                    />
                    {errors2.messageToTeam && (
                      <p className={'text-red-500 text-sm'}>
                        {errors2.messageToTeam?.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center col-span-2">
                <Button
                  variant="primary"
                  isSubmitting={isSubmitting2}
                  className={`font-semibold text-lg rounded-md mt-8 px-9 hover:opacity-90 bg-[#734DC5] ${
                    isSubmitting2 && 'opacity-90'
                  }`}
                >
                  {isSubmitting2 ? 'Submitting...' : 'Get Free Consultancy'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </GlassMorphism>

      {/* light theme */}
      <GlassMorphism
        variant={'dark'}
        className="invisible md:visible w-full rounded-2xl z-40 border dark:hidden block border-gray-700"
      >
        <div className="flex flex-col items-center justify-between md:justify-around gap-y-6 md:gap-y-0 w-full visible md:mt-6">
          <div className="md:w-full px-4 md:px-0 flex flex-col md:flex-row items-center gap-x-4">
          {/* dark theme */}
      <div className='dark:block hidden'>
      <GlassMorphism
              variant="light"
              className="rounded-full p-0 w-fit h-fit self-start md:self-auto hidden md:flex"
            >
              <Message2 className="w-14 h-14 md:w-20 md:h-20" />
            </GlassMorphism>
      </div>
          {/* light theme */}
         <div className='dark:hidden block'>   <GlassMorphism
              variant="dark"
              className="rounded-full p-0 w-fit h-fit self-start md:self-auto hidden md:flex"
            >
              <Message2 className="w-14 h-14 md:w-20 md:h-20" />
            </GlassMorphism>
            </div>
            <div className="w-full md:w-fit mt-5 md:mt-0 md:px-4">
              <span className="text-2xl md:text-4xl font-bold block md:leading-normal">
                Get a free consultancy from our expert right now!
              </span>
              <span className="text-sm md:text-lg font-light md:tracking-wider drop-shadow-2xl md:leading-8">
                With lots of unique elements, you can promote and grow your
                business to the sky. Really!
              </span>
            </div>
          </div>

          <div className="w-full md:w-[70%] py-10 flex">
            <form onSubmit={handleSubmit2(onSubmit)} className="w-full text-sm">
              <div className="flex flex-col md:flex-row gap-x-8 md:gap-y-5 w-full">
                <div className="w-full flex flex-col md:gap-5">
                  <div className="h-fit w-full relative">
                    <Input
                      text="Name (Required)"
                      type="text"
                      placeholder="i.e. John Brown"
                      classNameDiv="bg-white rounded-lg p-0"
                      classNameInput="text-black placeholder:font-light"
                      classNameText="font-semibold"
                      className="my-2"
                      {...register2('name')}
                    />
                    {errors2.name && (
                      <p className={'text-red-500 text-sm absolute -bottom-4 left-0'}>
                        {errors2.name?.message}
                      </p>
                    )}
                  </div>

                  <div className="h-fit w-full relative">
                    <Input
                      text="Email (Required)"
                      type="email"
                      placeholder="i.e. Johnbrown@mail.com"
                      classNameDiv="bg-white rounded-lg p-0"
                      classNameInput="text-black placeholder:font-light"
                      classNameText="font-semibold"
                      className="my-2"
                      {...register2('email')}
                    />
                    {errors2.email && (
                      <p className={'text-red-500 text-sm absolute -bottom-4 left-0'}>
                        {errors2.email?.message}
                      </p>
                    )}
                  </div>

                  <div className="h-fit w-full">
                    <Input
                      text="Phone"
                      type="text"
                      placeholder="i.e. +1(524)278-0381"
                      classNameDiv="bg-white rounded-lg p-0"
                      classNameInput="text-black placeholder:font-light"
                      classNameText="font-semibold"
                      className="my-2"
                      {...register2('phone')}
                    />
                    {errors2.phone && (
                      <p className={'text-red-500 text-sm'}>
                        {errors2.phone?.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="w-full flex flex-col md:gap-5">
                  <div className="h-fit w-full">
                    <Input
                      text="Company Socials (LinkedIn, Instagram)"
                      type="text"
                      placeholder="Please provide a link"
                      classNameDiv="bg-white rounded-lg p-0"
                      classNameInput="text-black placeholder:font-light"
                      classNameText="font-semibold"
                      className="my-2"
                      {...register2('social')}
                    />
                    {errors2.social && (
                      <p className={'text-red-500 text-sm'}>
                        {errors2.social?.message}
                      </p>
                    )}
                  </div>

                  <div className="h-fit w-full">
                    <Input
                      text="Company Website"
                      type="text"
                      placeholder="Please provide us a link"
                      classNameDiv="bg-white rounded-lg p-0"
                      classNameInput="text-black placeholder:font-light"
                      classNameText="font-semibold"
                      className="my-2"
                      {...register2('website')}
                    />
                    {errors2.website && (
                      <p className={'text-red-500 text-sm'}>
                        {errors2.website?.message}
                      </p>
                    )}
                  </div>

                  <div className="h-fit w-full">
                    <Input
                      text="Message to the team"
                      type="text"
                      placeholder="Enter your message"
                      classNameDiv="bg-white rounded-lg p-0"
                      classNameInput="text-black placeholder:font-light"
                      classNameText="font-semibold"
                      className="my-2"
                      {...register2('messageToTeam')}
                    />
                    {errors2.messageToTeam && (
                      <p className={'text-red-500 text-sm'}>
                        {errors2.messageToTeam?.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center col-span-2">
                <Button
                  variant="primary"
                  isSubmitting={isSubmitting2}
                  className={`font-semibold text-lg rounded-md mt-8 px-9 hover:opacity-90 bg-[#734DC5] ${
                    isSubmitting2 && 'opacity-90'
                  }`}
                >
                  {isSubmitting2 ? 'Submitting...' : 'Get Free Consultancy'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </GlassMorphism>
    </div>
  );
}

export default ContactUs;
