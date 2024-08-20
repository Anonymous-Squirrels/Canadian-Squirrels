import Image from 'next/image';

const FullScreenImages = () => {
  return (
    <div className="relative h-screen w-screen flex overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
      <div className="absolute bottom-5 left-5 text-white text-6xl z-20">
        <p className='font-semibold'>CONTACT US</p>
        <div className='flex items-center gap-3 mt-4 ml-2'>
            <div className='w-20 h-[2px] bg-white'></div>
            <div className='text-4xl'>LET'S TALK</div>
            <div className='w-10 h-[2px] bg-white'></div>
        </div>
      </div>

      <div className="relative flex-1">
        <Image
          src="/assets/city1.png"
          alt="Image 1"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="relative flex-1">
        <Image
          src="/assets/city1.png"
          alt="Image 2"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="relative flex-1">
        <Image
          src="/assets/city1.png"
          alt="Image 3"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default FullScreenImages;
