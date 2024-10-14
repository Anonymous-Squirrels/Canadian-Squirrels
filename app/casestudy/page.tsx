import React from 'react';
import HeroSection from '@/components/Casestudy/HeroSection';
import OurExpertise from '@/components/Casestudy/OurExpertise';
import OurResults from '@/components/Casestudy/OurResults';
import DentalCare from '@/components/Casestudy/DentalCare';
import dataDental from '../../constants/dental.json';
import OtherWorks from '@/components/Casestudy/OtherWorks';
import JoinTeam from '@/components/About/JoinTeam';

const page = () => {
  return (
    <div>
      <HeroSection />
      <OurExpertise />
      <OurResults />
      <DentalCare
        Posters={dataDental.allsmiles.images}
        ListItems={dataDental.allsmiles.amimationlist}
        Title={dataDental.allsmiles.heading}
      />
      <DentalCare
        Posters={dataDental.bowriver.images}
        ListItems={dataDental.bowriver.amimationlist}
        Title={dataDental.bowriver.heading}
      />
      <DentalCare
        Posters={dataDental.oasissmiledental.images}
        ListItems={dataDental.oasissmiledental.amimationlist}
        Title={dataDental.oasissmiledental.heading}
      />
      <OtherWorks />
      <JoinTeam
        content1="Engage With Your Audience"
        content2="& Grow Your Business."
        detail="Here are some of the brands who entrusted us."
        link1="/project"
        button="Projects"
      />
    </div>
  );
};

export default page;
