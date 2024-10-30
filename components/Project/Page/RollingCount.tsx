import React, { useState, useEffect } from 'react';

function RollingCount() {
  const [brandCount, setBrandCount] = useState(0);
  const [industryCount, setIndustryCount] = useState(0);
  const [countryCount, setCountryCount] = useState(0);

  useEffect(() => {
    const brandTimer = setInterval(() => {
      setBrandCount(prev => (prev < 54 ? prev + 1 : prev));
    }, 40); // time interval
    const industryTimer = setInterval(() => {
      setIndustryCount(prev => (prev < 20 ? prev + 1 : prev));
    }, 100); // time interval
    const countryTimer = setInterval(() => {
      setCountryCount(prev => (prev < 4 ? prev + 1 : prev));
    }, 200); // time interval

    return () => {
      clearInterval(brandTimer);
      clearInterval(industryTimer);
      clearInterval(countryTimer);
    };
  }, []);

  return (
    <div className="flex w-full items-center justify-between md:justify-center gap-x-5 md:gap-20 px-7">
      <div className="border-b-4 md:border-b-8 dark:border-[#7B61FF] border-[#5c3095] text-center pb-8 md:w-44 w-24">
        <span className="dark:text-[#7B61FF] text-[#5c3095] text-4xl md:text-7xl">
          {brandCount}+
        </span>
        <br />
        <span className="text-xl">Brands</span>
      </div>
      <div className="border-b-4 md:border-b-8 dark:border-[#7B61FF] border-[#5c3095] text-center pb-8 md:w-44 w-24">
        <span className="dark:text-[#7B61FF] text-[#5c3095] text-4xl md:text-7xl">
          {industryCount}+
        </span>
        <br />
        <span className="text-xl">Industries</span>
      </div>
      <div className="border-b-4 md:border-b-8 dark:border-[#7B61FF] border-[#5c3095] text-center pb-8 md:w-44 w-24">
        <span className="dark:text-[#7B61FF] text-[#5c3095] text-4xl md:text-7xl">
          {countryCount}+
        </span>
        <br />
        <span className="text-xl">Countries</span>
      </div>
    </div>
  );
}

export default RollingCount;