import React from 'react';
import Image from 'next/image';

type Service = {
  src: string;
  alt: string;
  text: string;
};

const services: Service[] = [
    { src: '/assets/Commercialicon.png', alt: 'Service 1', text: 'Marketing & Advertising' },
    { src: '/assets/Trademarkicon.png', alt: 'Service 2', text: 'Branding' },
    { src: '/assets/Figmaicon.png', alt: 'Service 3', text: 'UI/UX Designing' },
    { src: '/assets/Codeicon.png', alt: 'Service 4', text: 'Development' },
  ];

const ServiceCard: React.FC<Service> = ({ src, alt, text }) => (
  <div className='flex flex-col items-center justify-center p-5 shadow-custom1 rounded-md bg-gradient-to-b from-[#8B74FF] via-[#7B61FF] to-[#25157A]'>
    <Image
      src={src}
      alt={alt}
      width={100}
      height={100}
      className="mb-4 h-[60px] w-[60px] md:h-[100px] md:w-[100px]"
    />
    <p className='text-center text-sm md:text-lg text-white'>{text}</p>
  </div>
);

const AllServices: React.FC = () => {
  return (
    <div className='bg-black p-4 flex items-center justify-center'>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
        {services.map((service, index) => (
          <ServiceCard key={index} src={service.src} alt={service.alt} text={service.text} />
        ))}
      </div>
    </div>
  );
}

export default AllServices;