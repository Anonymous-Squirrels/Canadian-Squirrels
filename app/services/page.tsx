import Engage from "@/components/Services/Engage";
import Branding from "@/components/Services/Branding";
import HeroSection from "@/components/Services/HeroSection";
import Marketing from "@/components/Services/Marketing";
import UIDesign from "@/components/Services/UIDesign";
import React from "react";
import ContactUs from "@/components/ContactUs";
import WebDevlopment from "@/components/Services/WebDevlopment";

function Page() {
  return (
    <div>
      <HeroSection />
      <Marketing />
      <Branding />
      <UIDesign />
      <WebDevlopment />
      <Engage />
    </div>
  );
}

export default Page;
