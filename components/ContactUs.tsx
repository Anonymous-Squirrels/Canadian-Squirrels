"use client";
import React from "react";
import GlassMorphism from "./ui/GlassMorphism";
import Input from "./ui/Input";
import { Message2 } from "@/constants/Icons";
import Button from "./ui/Button";
import { formInputSchema } from "@/form_schema/formInputSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMail } from "@/actions/resend";
import { toast } from "sonner";

function ContactUs() {
  const {
    register: register1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1, isSubmitting: isSubmitting1 },
  } = useForm<z.infer<typeof formInputSchema>>({
    resolver: zodResolver(formInputSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      messageToTeam: "",
      social: "",
      website: "",
    },
  });

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2, isSubmitting: isSubmitting2 },
  } = useForm<z.infer<typeof formInputSchema>>({
    resolver: zodResolver(formInputSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      messageToTeam: "",
      social: "",
      website: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof formInputSchema>> = async (
    data
  ) => {
    sendMail(JSON.stringify(data))
      .then(() =>
        toast.success("Mail sent successfully! You will be contacted soon.")
      )
      .catch(() => toast.error("Mail not sent. Please try again later."));
  };

  return (
    <div
      id="contact"
      className="bg-contact-us bg-center bg-cover h-fit flex flex-col items-center text-white py-7 md:py-14 md:px-36"
    >
      <GlassMorphism
        variant={"light"}
        className="invisible md:visible w-full rounded-2xl"
      >
        <div className="flex flex-col items-center justify-between md:justify-around gap-y-6 md:gap-y-0 w-full visible md:mt-6">
          <div className="md:w-full px-4 md:px-0 flex flex-col md:flex-row items-center justify-center gap-x-4">
            <GlassMorphism
              variant="light"
              className="rounded-full p-0 text-white w-fit h-fit self-start md:self-auto"
            >
              <Message2 className="w-14 h-14 md:w-20 md:h-20" />
            </GlassMorphism>

            <div className=" w-full md:w-fit mt-5 md:mt-0 md:px-4">
              <span className="text-2xl md:text-4xl font-bold block my-3 leading-normal">
                Let&apos;s jump on a discovery call
              </span>
              <span className="text-sm font-light leading-8">
                With lots of unique elements, you can promote and grow your
                business to the sky. Really!
              </span>
            </div>
          </div>

          <GlassMorphism
            variant="light"
            className="border rounded-xl text-white w-full md:w-full p-4 md:hidden"
          >
            <form
              onSubmit={handleSubmit1(onSubmit)}
              className="grid grid-cols-1 gap-x-8 "
            >
              <div className="h-fit w-full">
                <Input
                  text="Name (Required)"
                  type="text"
                  placeholder="i.e. Rahul Sharma"
                  classNameDiv="bg-white rounded-lg p-0"
                  classNameInput="text-black placeholder:font-light"
                  classNameText="font-semibold"
                  className="my-2"
                  {...register1("name")}
                />
                {errors1 && (
                  <p className={"text-red-500 text-xs"}>
                    {errors1.name?.message}
                  </p>
                )}
              </div>

              <div className="h-fit w-full">
                <Input
                  text="Email (Required)"
                  type="email"
                  placeholder="i.e. rahulsharma@mail.com"
                  classNameDiv="bg-white rounded-lg p-0"
                  classNameInput="text-black placeholder:font-light"
                  classNameText="font-semibold"
                  className="my-2"
                  {...register1("email")}
                />
                {errors1 && (
                  <p className={"text-red-500 text-xs"}>
                    {errors1.email?.message}
                  </p>
                )}
              </div>

              <div className="h-fit w-full">
                <Input
                  text="Phone"
                  type="text"
                  placeholder="i.e. 123-456-7890"
                  classNameDiv="bg-white rounded-lg p-0"
                  classNameInput="text-black placeholder:font-light"
                  classNameText="font-semibold"
                  className="my-2"
                  {...register1("phone")}
                />
                {errors1 && (
                  <p className={"text-red-500 text-xs"}>
                    {errors1.phone?.message}
                  </p>
                )}
              </div>

              <div className="h-fit w-full">
                <Input
                  text="Company Socials (LinkedIn, Instagram)"
                  type="text"
                  placeholder="Please provide a link"
                  classNameDiv="bg-white rounded-lg p-0"
                  classNameInput="text-black placeholder:font-light"
                  classNameText="font-semibold"
                  className="my-2"
                  {...register1("social")}
                />
                {errors1 && (
                  <p className={"text-red-500 text-xs"}>
                    {errors1.social?.message}
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
                  {...register1("website")}
                />
                {errors1 && (
                  <p className={"text-red-500 text-xs"}>
                    {errors1.website?.message}
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
                  {...register1("messageToTeam")}
                />
                {errors1 && (
                  <p className={"text-red-500 text-xs"}>
                    {errors1.messageToTeam?.message}
                  </p>
                )}
              </div>

              <Button
                variant="primary"
                isSubmitting={isSubmitting1}
                className={`font-semibold w-full rounded-md mt-8 active:opacity-90 ${
                  isSubmitting1 && "opacity-90"
                }`}
              >
                {" "}
                {isSubmitting1 ? "Submitting..." : "Get Free Consultancy"}
              </Button>
            </form>
          </GlassMorphism>

          <div className="w-[70%] py-10 hidden md:flex">
            <form
              onSubmit={handleSubmit2(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 w-full text-sm"
            >
              <div className="h-fit w-full">
                <Input
                  text="Name (Required)"
                  type="text"
                  placeholder="i.e. Rahul Sharma"
                  classNameDiv="bg-white rounded-lg p-0"
                  classNameInput="text-black placeholder:font-light"
                  classNameText="font-semibold"
                  className="my-2"
                  {...register2("name")}
                />
                {errors2 && (
                  <p className={"text-red-500 text-sm"}>
                    {errors2.name?.message}
                  </p>
                )}
              </div>

              <div className="h-fit w-full">
                <Input
                  text="Company Socials (LinkedIn, Instagram)"
                  type="text"
                  placeholder="Please provide a link"
                  classNameDiv="bg-white rounded-lg p-0"
                  classNameInput="text-black placeholder:font-light"
                  classNameText="font-semibold"
                  className="my-2"
                  {...register2("social")}
                />
                {errors2 && (
                  <p className={"text-red-500 text-sm"}>
                    {errors2.social?.message}
                  </p>
                )}
              </div>

              <div className="h-fit w-full">
                <Input
                  text="Email (Required)"
                  type="email"
                  placeholder="i.e. rahulsharma@mail.com"
                  classNameDiv="bg-white rounded-lg p-0"
                  classNameInput="text-black placeholder:font-light"
                  classNameText="font-semibold"
                  className="my-2"
                  {...register2("email")}
                />
                {errors2 && (
                  <p className={"text-red-500 text-sm"}>
                    {errors2.email?.message}
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
                  {...register2("website")}
                />
                {errors2 && (
                  <p className={"text-red-500 text-sm"}>
                    {errors2.website?.message}
                  </p>
                )}
              </div>

              <div className="h-fit w-full">
                <Input
                  text="Phone"
                  type="text"
                  placeholder="i.e. 123-456-7890"
                  classNameDiv="bg-white rounded-lg p-0"
                  classNameInput="text-black placeholder:font-light"
                  classNameText="font-semibold"
                  className="my-2"
                  {...register2("phone")}
                />
                {errors2 && (
                  <p className={"text-red-500 text-sm"}>
                    {errors2.phone?.message}
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
                  {...register2("messageToTeam")}
                />
                {errors2 && (
                  <p className={"text-red-500 text-sm"}>
                    {errors2.messageToTeam?.message}
                  </p>
                )}
              </div>

              <Button
                variant="primary"
                isSubmitting={isSubmitting2}
                className={`font-semibold w-full rounded-md mt-8 md:col-span-2 hover:opacity-90 ${
                  isSubmitting2 && "opacity-90"
                }`}
              >
                {isSubmitting2 ? "Submitting..." : "Get Free Consultancy"}
              </Button>
            </form>
          </div>
        </div>
      </GlassMorphism>
    </div>
  );
}

export default ContactUs;
