import Like from "@/components/Project/Like";
import HeroSection from "@/components/Project/Page/HeroSection";
import Main from "@/components/Project/Page/Main";
import { GreenCleanSquad, MountMagica, OYO } from "@/constants/ProjectPage";
import React from "react";
import { Blob } from "@/constants/Icons";

function Page({ params }: { params: { project_id: string } }) {
  let data = null;
  switch (params.project_id) {
    case "oyo":
      data = OYO;
      break;
    case "green-clean-squad":
      data = GreenCleanSquad;
      break;
    case "magica":
      data = MountMagica;
      break;
  }
  return (
    <div className="w-[100%] overflow-hidden">
      <div className="w-full relative">
        <div className="absolute md:left-52 -translate-x-1/2 -top-96 md:-top-72">
          <Blob variant="violet" />
        </div>
        <div className="absolute right-28 md:right-52 translate-x-1/2 top-60">
          <Blob variant="yellow" />
        </div>
        <HeroSection title={data?.name} image={data?.image} tag={data?.tags} />
        {data && <Main data={data} />}
      </div>
      <Like />
    </div>
  );
}

export default Page;
