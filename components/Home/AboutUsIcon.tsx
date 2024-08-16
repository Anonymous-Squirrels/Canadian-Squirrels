"use client";
import React, { useState } from "react";
import { LogoLarge } from "@/constants/Icons";

function AboutUsIcon() {
  const [color, setColor] = useState<boolean>(false);

  return (
    <p
      className="z-20"
      onMouseEnter={() => setColor(true)}
      onMouseLeave={() => setColor(false)}
      onClick={() => setColor(!color)}
    >
      <LogoLarge
        className="w-[110px] h-[80px] md:w-[190px] md:h-[155px] duration-200 transition-color"
        color={color ? "#7B61FF" : "#E7E7E7"}
      />
    </p>
  );
}

export default AboutUsIcon;
