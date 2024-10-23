import ContactBackground from '@/components/Contact/ContactBackground';
import ThankYou from '@/components/Contact/ThankYou';
import ContactUs from '@/components/ContactUs';

const FullScreenImages = () => {
  return (
    <div className="bg-light-purple dark:bg-black w-full pt-[80px]">
      <ContactBackground />
      <ContactUs />
      <ThankYou />
    </div>
  );
};

export default FullScreenImages;
