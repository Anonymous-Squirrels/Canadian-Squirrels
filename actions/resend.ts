"use server";

import React from "react";
import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";

export const sendMail = async (formData: string) => {
  try {
    const parsedData = JSON.parse(formData);
    // console.log(parsedData);
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: "Contact <kingshuk@squirrels.co.in>",
      to: ["kingshuk@squirrels.co.in"],
      subject: "Contact Us Form - thesquirrels.ca",
      react: EmailTemplate({ ...parsedData }) as React.ReactElement,
    });
    if (error) throw new Error(error.message);
    return;
  } catch (e: any) {
    console.log(e)
    throw new Error(e);
  }
};
