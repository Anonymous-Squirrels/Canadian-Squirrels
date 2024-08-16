"use client";
import React from "react";
import Input from "../ui/Input";

function ContactUs() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-screen flex items-center text-white">
      <div className="w-1/2 bg-[url('/assets/square_sign_ansq.png')] bg-contain h-full"></div>
      <div className="w-1/2 h-full bg-[#121127] px-20 py-20">
        <div className="font-bold text-3xl">Contact Us</div>
        <form>
          <Input
            text="Your Name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="my-5"
            classNameText="text-white/60"
            classNameDiv="border border-white/30 rounded-lg"
          />
          <Input
            text="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="John Doe"
            className="my-5"
            classNameText="text-white/60"
            classNameDiv="border border-white/30 rounded-lg"
          />
          <Input
            text="Phone Number"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 1234567890"
            className="my-5"
            classNameText="text-white/60"
            classNameDiv="border border-white/30 rounded-lg"
          />
          <Input
            text="Message"
            type="textarea"
            value={formData.name}
            onChange={handleChange}
            placeholder="Type Here"
            className="my-5"
            classNameText="text-white/60"
            classNameDiv="border border-white/30 rounded-lg"
          />
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
