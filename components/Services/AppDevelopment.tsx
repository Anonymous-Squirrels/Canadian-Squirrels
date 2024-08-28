import React from 'react';
import Image from 'next/image';

type TechnologyCardProps = {
  src: string;
  alt: string;
};

const technologies: TechnologyCardProps[] = [
  { src: '/assets/kotlin.png', alt: 'KOTLIN' },
  { src: '/assets/flutter.png', alt: 'FLUTTER' },
  { src: '/assets/xamarin.png', alt: 'XAMARIN' },
  { src: '/assets/reactnative.png', alt: 'REACT NATIVE' },
];

const TechnologyCard: React.FC<TechnologyCardProps> = ({ src, alt }) => (
  <div className='flex flex-col gap-5 justify-between items-center pt-7 px-7 md:pt-10 pb-2 md:px-2 shadow-valuesContainerShadow rounded-md bg-[#111111] min-w-[100px] min-h-[100px] lg:min-w-[200px] lg:min-h-[200px]'>
    <Image
      src={src}
      alt={alt}
      width={80}
      height={80}
      className="mx-8"
    />
    <p className='text-white text-center'>{alt}</p>
  </div>
);

const AppDevelopment = () => {
  return (
    <div className='p-4 lg:w-1/2 col-span-1 bg-black flex flex-col items-center h-full'>
      <div className='text-xl md:text-4xl font-semibold text-white text-center mb-10 md:mb-24 lg:mb-36'>
        <span>APP</span>
        <span className='text-[#9747FF] ml-2'>DEVELOPMENT</span>
      </div>

      <div className='flex flex-col gap-7 md:gap-12 items-center justify-center h-full'>
        <div className='w-full flex flex-col justify-center items-center gap-10'>
          <div className='flex gap-10'>
            {technologies.slice(0, 2).map((tech, index) => (
              <TechnologyCard key={index} src={tech.src} alt={tech.alt} />
            ))}
          </div>
          <div className='flex gap-10'>
            {technologies.slice(2).map((tech, index) => (
              <TechnologyCard key={index} src={tech.src} alt={tech.alt} />
            ))}
          </div>
        </div>

        <p className='text-[#969696] md:text-2xl text-center md:text-justify max-w-[550px]'>
        Our team of skilled developers specializes in crafting scalable and high-performance apps using the 
        latest technologies, including Kotlin, Flutter, and React Native. We&apos;ll create a mobile solution that 
        seamlessly integrates with your brand and empowers your business to reach new heights.
        </p>
      </div>
    </div>
  );
}

export default AppDevelopment;
