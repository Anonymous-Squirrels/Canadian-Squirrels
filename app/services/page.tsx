import JoinTeam from '@/components/About/JoinTeam';
import Branding from '@/components/Services/Branding';
import HeroSection from '@/components/Services/HeroSection';
import Marketing from '@/components/Services/Marketing';
import UIDesign from '@/components/Services/UIDesign';
import Development from '@/components/Services/Development';
import AllServices from '@/components/Services/AllServices';
import React from 'react';

function Page() {
  return (
    <div>
      <HeroSection />
      <AllServices />
      <Marketing />
      <Branding />
      <UIDesign />
      <Development />
      <JoinTeam
        content1="Engage With Your Audience"
        content2="& Grow Your Business."
        detail="Here are some of the dental works."
        link1="/casestudy"
        button="Case Study"
      />
    </div>
  );
}

export default Page;
