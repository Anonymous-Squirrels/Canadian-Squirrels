import Engage from "@/components/Services/Engage";
import Branding from "@/components/Services/Branding";
import HeroSection from "@/components/Services/HeroSection";
import Marketing from "@/components/Services/Marketing";
import UIDesign from "@/components/Services/UIDesign";
import Development from "@/components/Services/Development";
import AllServices from "@/components/Services/AllServices";
import React from "react";

function Page() {
  return (
    <div>
      <HeroSection />
      <AllServices />
      <Marketing />
      <Branding />
      <UIDesign />
      <Development />
      <Engage />
    </div>
  );
}

export default Page;
