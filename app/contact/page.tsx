import ContactBackground from '@/components/Contact/ContactBackground';
import ThankYou from '@/components/Contact/ThankYou';
import ContactUs from '@/components/ContactUs';

const FullScreenImages = () => {
  return (
    <div className="bg-black w-full">
      <ContactBackground />
      <ContactUs />
      <ThankYou />
    </div>
  );
};

export default FullScreenImages;
