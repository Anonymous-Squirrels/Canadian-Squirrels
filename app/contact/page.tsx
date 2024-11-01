import ContactBackground from '@/components/Contact/ContactBackground';
import LightContactBackground from '@/components/Contact/LightContactBackground';
import ThankYou from '@/components/Contact/ThankYou';
import ContactUs from '@/components/ContactUs';

const FullScreenImages = () => {
  return (
    <div className="dark:bg-black bg-light-purple w-full pt-[80px]">
      <div className='hidden dark:block'>
      <ContactBackground />

      </div>
      <div className='dark:hidden block'>
  <LightContactBackground/>
</div>      
<div className='bg-light-purple dark:bg-black'>
<ContactUs />
<ThankYou />
</div>
    </div>
  );
};

export default FullScreenImages;
