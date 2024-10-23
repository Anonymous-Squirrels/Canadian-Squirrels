import React from 'react';
import FAB from '../ui/FAB';
import WebDevelopment from './WebDevelopment';
import AppDevelopment from './AppDevelopment';

const Development = () => {
  return (
    <div className="w-full p-4 md:p-10 dark:bg-black bg-light-purple flex flex-col justify-center gap-5 items-center">
      <FAB variant="secondary" className="self-center select-none">
        Development
      </FAB>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 xl:gap-20 max-w-[1544px]">
        <WebDevelopment />
        <AppDevelopment />
      </div>
    </div>
  );
};

export default Development;
